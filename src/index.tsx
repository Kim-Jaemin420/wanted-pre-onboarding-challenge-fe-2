import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from '@mui/material';
import { AuthProvider, ModalProvider } from './context';
import App from './App';
import { reset, muiTheme, theme } from './styles';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Global styles={reset} />
      <ThemeProvider theme={{ ...muiTheme, ...theme }}>
        <AuthProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </AuthProvider>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} position={'bottom-left'} />
    </QueryClientProvider>
  </React.StrictMode>
);
