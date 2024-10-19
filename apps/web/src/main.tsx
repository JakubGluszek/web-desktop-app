import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@repo/shared/types/vite';
import '@repo/ui/globals.css';

import { TRPCReactProvider } from '@repo/shared/trpc';
import { App } from '@repo/app';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TRPCReactProvider config={{ apiUrl: import.meta.env.VITE_API_BASE_URL }}>
      <App config={{ isDev: import.meta.env.DEV }} />
    </TRPCReactProvider>
  </StrictMode>
);
