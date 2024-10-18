import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { TRPCReactProvider } from '@repo/shared/trpc';

import '@repo/ui/globals.css';
import { App } from '@repo/app';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TRPCReactProvider apiUrl={import.meta.env.VITE_API_BASE_URL}>
      <App />
    </TRPCReactProvider>
  </StrictMode>
);
