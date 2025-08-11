import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: false,
    assetsInlineLimit: 0,
    rollupOptions: {
      input: {
        main: 'index.html',
        impressum: 'impressum.html',
        datenschutz: 'datenschutz.html'
      }
    }
  },
  assetsInclude: ['**/*.svg'],
  server: {
    port: 3000,
    open: true
  }
});
