import express from 'express';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  const contentHandler = (await import('./api/content.js')).default;
  const loginHandler = (await import('./api/auth/login.js')).default;
  const uploadHandler = (await import('./api/upload.js')).default;

  app.all('/api/content', (req, res) => contentHandler(req as any, res as any));
  app.all('/api/auth/login', (req, res) => loginHandler(req as any, res as any));
  app.all('/api/upload', (req, res) => uploadHandler(req as any, res as any));

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Dev server running on http://localhost:${PORT}`);
  });
}

startServer();
