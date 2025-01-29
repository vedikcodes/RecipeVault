import { defineConfig } from 'vite'
import tailwind from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: [tailwind],
  },
  server: {
    host: '0.0.0.0', // Ensures that the server listens on all network interfaces
    port: process.env.PORT || 5000, // Use the port provided by Render (or fallback to 5000 locally)
  },
})
