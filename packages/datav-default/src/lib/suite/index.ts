import { getDefaultConfig } from '../.getDefaultConfig'
import type { TypeConfigSuite } from './types'

// 文本输入框，支持定制前后缀。
// 填充框。支持三种填充类型以及它们的组合。
export function getDefaultConfigForSuite(config: TypeConfigSuite): any {
  let defaultValue = config.default || {}
  if (config.children) {
    defaultValue = { ...getDefaultConfig(config.children), ...defaultValue }
  }
  if (config.enableHide) defaultValue.show = true
  return defaultValue
}
