import type { TypeConfigTimePicker } from './types'

// 文本输入框，支持定制前后缀。
export function getDefaultConfigForTimePicker(
  config: TypeConfigTimePicker
): string {
  return config.default || '00:00:00'
}
