/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc'
import * as path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  },
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts']
  }
})
