import { isArray } from '../.utils'
import type { TypeConfigTabs } from './types'

// 文本输入框，支持定制前后缀。
// 标签组。切换标签可展示当前标签下的内容，支持动态增减标签组。
export function getDefaultConfigForTabs(config:TypeConfigTabs):any[]{
  if(isArray(config.default)) return config.default
  return []
}