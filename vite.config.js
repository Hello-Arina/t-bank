// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const isPages = mode === 'pages'  
  return {
    plugins: [react()],
    
    base: isPages ? '/t-bank/' : './',
    build: {
      outDir: isPages ? 'docs' : 'dist'
    }
  }
})
