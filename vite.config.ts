/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vitest" />
import react from '@vitejs/plugin-react-swc'
// import { visualizer } from 'rollup-plugin-visualizer'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@chenshuai2144/sketch-color': './scripts/sketch-color.ts',
      'lodash.merge': 'lodash-es/merge',
    },
  },
  test: {
    globals: true,
    setupFiles: ['./test/setup.ts'],
  },
})
