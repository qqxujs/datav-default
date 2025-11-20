import { isArray } from '../.utils'
import type { TypeConfigCheckbox } from './types'

// 复选框。支持为选项设置宽度。
export function getDefaultConfigForCheckbox(
  config: TypeConfigCheckbox
): string[] {
  if (isArray(config.default)) return config.default
  return []
}
