
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Using '/' base for broader compatibility across container and static hosts.
  base: '/',
  plugins: [react()],
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
  },
  server: {
    port: 8080,
    host: true
  },
  preview: {
    port: 8080,
    host: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
