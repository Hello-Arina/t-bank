import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  base: './',
  build: {
    
    assetsInlineLimit: 100_000_000,
    cssCodeSplit: false, 
  },
  plugins: [react(), viteSingleFile()],
})
