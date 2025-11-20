import type { TypeConfigDatePicker } from './types'

// 文本输入框，支持定制前后缀。
export function getDefaultConfigForDatePicker(
  config: TypeConfigDatePicker
): Array<string> | string {
  return config.default || ''
}
