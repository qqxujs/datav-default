import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  
  build: {
    // 库模式配置
    lib: {
      entry: resolve(__dirname, 'src/lib/index.ts'), // 入口文件
      name: 'DatavDefault', // UMD 全局变量名
      fileName: (format) => `index.${format}.js`, // 输出文件名
      formats: ['es' ,'cjs' ,'umd','iife']
    },

    outDir: 'dist'
  },
})