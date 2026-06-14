import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['three', 'three/addons/controls/OrbitControls.js', 'three/addons/renderers/CSS2DRenderer.js'],
      input: {
        main: resolve(__dirname, 'index.html'),
        journal: resolve(__dirname, 'journal.html'),
        blog: resolve(__dirname, 'blog.html'),
        arsenal: resolve(__dirname, 'arsenal.html'),
        'posts/manifesto': resolve(__dirname, 'posts/manifesto.html'),
        'posts/built-in-3-hours': resolve(__dirname, 'posts/built-in-3-hours.html'),
      },
    },
  },
  server: {
    port: 3457,
    host: true,
    allowedHosts: ['localhost', '.trycloudflare.com'],
  },
});
