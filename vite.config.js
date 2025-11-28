import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',  // Relative paths for static assets in production
  publicDir: 'public',  // Serves files from public/ at root (e.g., /style.css)
  plugins: [react()],
  resolve: {
    alias: {
      '/src': '/src'  // Optional: alias if keeping CSS in src/
    }
  }
})
