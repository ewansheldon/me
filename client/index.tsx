import { hydrateRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "./styles/global.css";

hydrateRoot(document.getElementById('root')!, <App Router={BrowserRouter} />);