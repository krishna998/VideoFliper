import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    allowedHosts: ['.ngrok-free.app'] // Allow all ngrok subdomains
  },
  plugins: [react()],
 
})
