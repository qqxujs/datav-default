import type { TypeConfigText } from './types'

// 文本输入框，支持定制前后缀。
export function getDefaultConfigForText(config: TypeConfigText): string {
  return config.default || ''
}
