import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global } from '@emotion/react';
import { AuthProvider } from './context';
import App from './App';
import { reset } from './styles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global styles={reset} />
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
