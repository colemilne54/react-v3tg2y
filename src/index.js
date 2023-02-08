import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const theme = createTheme({
  palette: {
    secondary: {
      main: '#000000',
    },
  },
});

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
