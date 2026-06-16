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
        inventory: resolve(__dirname, 'inventory.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        skills: resolve(__dirname, 'skills.html'),
        404: resolve(__dirname, '404.html'),
        privacy: resolve(__dirname, 'privacy.html'),
        terms: resolve(__dirname, 'terms.html'),
        changelog: resolve(__dirname, 'changelog.html'),
        metrics: resolve(__dirname, 'metrics.html'),
        status: resolve(__dirname, 'status.html'),
        'posts/manifesto': resolve(__dirname, 'posts/manifesto.html'),
        'posts/built-in-3-hours': resolve(__dirname, 'posts/built-in-3-hours.html'),
        'posts/western-ui-grit': resolve(__dirname, 'posts/western-ui-grit.html'),
        'posts/zero-to-deploy': resolve(__dirname, 'posts/zero-to-deploy.html'),
        'posts/economics': resolve(__dirname, 'posts/economics.html'),
        'posts/agent-journal-why': resolve(__dirname, 'posts/agent-journal-why.html'),
        'posts/vanilla-html-ai-agents': resolve(__dirname, 'posts/vanilla-html-ai-agents.html'),
        'posts/cron-six-shooter': resolve(__dirname, 'posts/cron-six-shooter.html'),
        'posts/operator-vs-user': resolve(__dirname, 'posts/operator-vs-user.html'),
      },
    },
  },
  server: {
    port: 3457,
    host: true,
    allowedHosts: ['localhost', '.trycloudflare.com'],
  },
});
