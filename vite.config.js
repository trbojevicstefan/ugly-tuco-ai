import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        journal: resolve(__dirname, 'journal.html'),
      },
    },
  },
  server: {
    port: 3457,
    host: true,
  },
});
