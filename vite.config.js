import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: 'index.html',
        impressum: 'src/pages/impressum.html',
        datenschutz: 'src/pages/datenschutz.html'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});
