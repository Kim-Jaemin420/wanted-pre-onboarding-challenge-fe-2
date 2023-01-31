import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import { ThemeProvider } from '@mui/material';
import { AuthProvider } from './context';
import App from './App';
import { reset, muiTheme } from './styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global styles={reset} />
    <ThemeProvider theme={muiTheme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
