import React from 'react';
import ReactDOM from 'react-dom/client';
//import { ThemeProvider } from '@emotion/react';
import { App } from 'components/App';
import './index.css';
//import { theme } from 'constans';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
