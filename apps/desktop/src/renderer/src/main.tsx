import React from 'react';
import ReactDOM from 'react-dom/client';

import { TRPCReactProvider } from '@repo/shared/trpc';

import '@repo/ui/globals.css';
import { App } from '@repo/app';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TRPCReactProvider apiUrl={import.meta.env.VITE_API_BASE_URL}>
      <App />
    </TRPCReactProvider>
  </React.StrictMode>
);
