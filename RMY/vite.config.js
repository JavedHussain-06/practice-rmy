// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/npci': {
        target: 'https://117.221.20.185',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/npci/, '/npci'),
      },
      '/api': {
        target: 'https://117.221.20.185',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/nhai/api'),
      },
    },
  }
});

