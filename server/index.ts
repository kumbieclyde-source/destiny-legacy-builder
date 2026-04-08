import express from 'express';
import { createViteServer } from 'vite';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

async function startServer() {
  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });

  // Use Vite's connect instance as middleware
  app.use(vite.middlewares);

  // Serve static files
  app.use(express.static(path.resolve(__dirname, '../client/public')));

  // SPA fallback
  app.use('*', async (req, res) => {
    try {
      const url = req.originalUrl;
      let template = await vite.transformIndexHtml(url, `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>DESTINY Legacy Builder</title>
          </head>
          <body>
            <div id="root"></div>
            <script type="module" src="/src/main.tsx"></script>
          </body>
        </html>
      `);
      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      res.status(500).end((e as Error).message);
    }
  });

  app.listen(PORT, () => {
    console.log(`✓ Server running at http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
