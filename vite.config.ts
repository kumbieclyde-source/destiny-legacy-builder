import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: path.resolve(__dirname, 'client'),
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './client/src'),
      '@shared': path.resolve(__dirname, './shared'),
    },
  },
  define: {
    global: 'globalThis',
  },
  server: {
    port: 5173,
    host: '0.0.0.0',
    allowedHosts: ['5173-ie4m97jd5onokw7m41mvx-baaf1711.us2.manus.computer', 'destinybldr-nc7sebsz.manus.space'],
  },
  publicDir: path.resolve(__dirname, 'client', 'public'),
  build: {
    outDir: path.resolve(__dirname, 'client', 'dist'),
  },
});
