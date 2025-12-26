import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Vercel and standard SPA deployments use '/'
  base: '/',
  plugins: [react()],
  define: {
    // Ensuring environment variables are handled correctly
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
  },
  server: {
    port: 3000,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Cleaner for production
    minify: 'esbuild',
  },
});