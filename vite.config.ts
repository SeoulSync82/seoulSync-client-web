import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 1200,
    sourcemap: 'hidden',
  },
  plugins: [react(), svgr()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
});
