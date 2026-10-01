import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;
  const isProd = process.env.NODE_ENV === 'production';

  app.use(cors());
  app.use(express.json());

  // API Routes for Localhost & Backend Support
  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'ok',
      mode: isProd ? 'production' : 'development',
      timestamp: new Date().toISOString(),
    });
  });

  // Local inquiry receiver endpoint
  app.post('/api/contact', (req, res) => {
    const { name, company, email, topic, message } = req.body;
    console.log(`[Local Contact] Inquiry received from ${name} (${email}) at ${company || 'N/A'}`);
    console.log(`[Topic]: ${topic} | [Message]: ${message}`);

    res.json({
      success: true,
      message: 'Inquiry successfully received on localhost backend server.',
      data: { name, company, email, topic },
    });
  });

  // Serve with Vite in development, or static dist in production
  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`\n========================================`);
    console.log(`✨ Server Portofolio aktif di:`);
    console.log(`   ➜ Local:   http://localhost:${PORT}`);
    console.log(`   ➜ Network: http://0.0.0.0:${PORT}`);
    console.log(`========================================\n`);
  });
}

startServer().catch((err) => {
  console.error('Gagal menjalankan server:', err);
  process.exit(1);
});
