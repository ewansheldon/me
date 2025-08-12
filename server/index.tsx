import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../client/App';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { StaticRouter } from 'react-router-dom/server';

dotenv.config();

const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));

const getUsersFromDB = async () => {
  return [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];
};

app.get('/api/users', async (req, res) => {
  const users = await getUsersFromDB();
  res.json(users);
});

app.get('*', (req, res) => {
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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
