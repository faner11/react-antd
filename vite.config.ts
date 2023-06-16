// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc'
// import { visualizer } from 'rollup-plugin-visualizer'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // { find: /^~/, replacement: '' },
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
    ],
  },
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],
  },
})
