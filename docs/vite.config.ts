import { defineConfig, type Plugin } from 'vite'
import _fs from 'fs'
import path from 'path'

const fs = _fs.promises

export default defineConfig({
  server: {
    port: 6980,
  },
  clearScreen: false,
  plugins: [
   
  ],
  define: {
    __DEV__: 'true',
    __BROWSER__: 'true',
  },
  optimizeDeps: {
    exclude: ['@vueuse/shared', '@vueuse/core'],
  },
})


