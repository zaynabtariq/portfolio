import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Update this base path to match your GitHub repository name
  // If your repo is "portfolio", use '/portfolio/'
  // If your repo is "username.github.io", use '/'
  base: process.env.NODE_ENV === 'production' ? '/portfolio/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
