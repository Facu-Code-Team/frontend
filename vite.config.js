import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Asegúrate de que coincida con el directorio que sirve
  },
  server: {
    port: process.env.PORT || 3000,
    host: true, // Permite acceso externo
  },
});