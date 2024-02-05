/// <reference types="vitest" />
import { URL, fileURLToPath } from "url"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

// https://vitejs.dev/config/
// biome-ignore lint/style/noDefaultExport: <explanation>
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "lodash.merge": "lodash-es/merge",
    },
  },
  test: {
    globals: true,
    setupFiles: ["./test/setup.ts"],
  },
})
