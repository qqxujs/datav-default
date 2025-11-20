import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 1. 从 'url' 模块导入 fileURLToPath
import { fileURLToPath } from 'node:url';

// 2. 从 'path' 模块导入 dirname 和 join
import { dirname, resolve } from 'node:path';

// 3. 将当前模块的 URL 转换为文件路径 (__filename)
const __filename = fileURLToPath(import.meta.url);

// 4. 获取当前文件所在的目录路径 (__dirname)
const __dirname = dirname(__filename);
// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 6970,
  },
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