import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import ignoreStylePlugin from 'vite-ignore-style'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ignoreStylePlugin({
      libraryName: 'antd'
    })],
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          '@root-entry-name': 'variable'
        },
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: [
      { find: /^~/, replacement: '' },
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  }
})
