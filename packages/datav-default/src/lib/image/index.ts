import { isString } from '../.utils'
import type { TypeConfigImage } from './types'

// 文本输入框，支持定制前后缀。
// 图片框。
export function getDefaultConfigForImage(config:TypeConfigImage):string{
  if(isString(config.default)) return config.default
  return ''
}