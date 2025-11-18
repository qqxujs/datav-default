import path from 'node:path'
import { createTypeDocApp } from './typedoc-markdown.mjs'

// 1. 从 'url' 模块导入 fileURLToPath
import { fileURLToPath } from 'node:url';

// 2. 从 'path' 模块导入 dirname 和 join
import { dirname, join } from 'node:path';

// 3. 将当前模块的 URL 转换为文件路径 (__filename)
const __filename = fileURLToPath(import.meta.url);

// 4. 获取当前文件所在的目录路径 (__dirname)
const __dirname = dirname(__filename);

createTypeDocApp({
  textContentMappings: {
    'title.indexPage': 'API Reference',
    'title.memberPage': '{name}',
  },
  tsconfig: path.resolve(__dirname, './typedoc.tsconfig.json'),
  // entryPointStrategy: 'packages',
  categorizeByGroup: true,
  githubPages: false,
  readme: 'none',
  indexFormat: 'table',
  disableSources: true,
  plugin: ['typedoc-plugin-markdown', 'typedoc-vitepress-theme'],
  useCodeBlocks: true,
  entryPoints: [
    path.resolve(__dirname, '../pinia/src/index.ts'),
    path.resolve(__dirname, '../testing/src/index.ts'),
    path.resolve(__dirname, '../nuxt/src/module.ts'),
  ],
}).then((app) => app.build())
