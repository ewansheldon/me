import express from 'express';
import { renderToString } from 'react-dom/server';
import App from '../client/App';
import { StaticRouter } from 'react-router-dom/server';
import path from 'path';

const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/api/competitions', (_, res) => {
  fetch('https://api.football-data.org/v4/competitions/')
    .then((data) => data.json())
    .then(data => res.send(data));
});

app.get(/(.*)/, (req, res) => {
  const appHTML = renderToString(<App Router={StaticRouter} routerProps={{ location: req.url }} />);

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>ewan sheldon</title>
        <link rel="icon" href="/me.jpg" />
      </head>
      <body>
        <div id="root">${appHTML}</div>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
