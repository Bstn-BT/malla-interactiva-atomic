import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Esto mejora cómo se empaquetan los archivos para producción
    rollupOptions: {
      output: {
        manualChunks: {
          // Separamos React en su propio archivo porque es pesado y no cambia seguido
          vendor: ['react', 'react-dom'],
          // Separamos los iconos si son muchos (opcional, pero recomendado)
          ui: ['lucide-react'] 
        }
      }
    },
    // Opcional: Avisar si un bloque de código es demasiado grande (+500kb)
    chunkSizeWarningLimit: 1000, 
  }
})