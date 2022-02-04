import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import THEME from './theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
