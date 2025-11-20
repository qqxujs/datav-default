import { defineConfig, type Plugin } from 'vite'
import _fs from 'fs'
import path from 'path'
// import TypeDocPlugin from './vite-typedoc-plugin'

const fs = _fs.promises

export default defineConfig({
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


