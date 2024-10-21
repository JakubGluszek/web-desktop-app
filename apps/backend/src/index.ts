import { Hono } from 'hono';
import { trpcServer } from '@hono/trpc-server';
import { cors } from 'hono/cors';

import { appRouter } from './api/trpc';

const app = new Hono()
  .use(
    cors({
      origin: [
        'http://localhost:3000',
        'http://localhost:5173',
        'https://app.unified-app.sentio.dev'
      ],
      credentials: true
    })
  )

  .use('/trpc/*', trpcServer({ router: appRouter }));

export default {
  fetch: app.fetch,
  port: Bun.env.PORT
};
