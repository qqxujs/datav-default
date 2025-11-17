import { isString } from '../.utils'
import type { TypeConfigColor } from './types'

// 文本输入框，支持定制前后缀。
export function getDefaultConfigForColor(config:TypeConfigColor):string{
  if(isString(config.default)) return config.default
  return '#000'
}