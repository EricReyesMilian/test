import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  
  // 🔥 Clave para rutas en producción
  base: '/',  // Si tu sitio está en la raíz (cambia a '/repo/' si está en subdirectorio)
  
  server: {
    port: process.env.PORT || 3000,  // Usa el puerto de Railway
    strictPort: true,  // Evita que Vite asigne otro puerto aleatorio
  },
  
  // 📌 Resuelve alias para imports (opcional pero útil)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  
  // 🌐 Variables de entorno accesibles
  define: {
    'process.env': process.env,
  },
  
  // 🛠️ Configuración de build
  build: {
    outDir: 'dist',  // Carpeta donde se generan los archivos estáticos
    emptyOutDir: true,  // Limpia la carpeta antes de cada build
  },
});