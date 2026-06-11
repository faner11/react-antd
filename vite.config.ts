import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tanstackRouter(), react(), tailwindcss()],
  resolve: {
    tsconfigPaths: true,
  },
  devtools: {
    enabled: false,
  },
})
