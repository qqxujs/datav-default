import { isString } from '../.utils'
import type { TypeConfigImageSelect } from './types'

// 装饰元素。
export function getDefaultConfigForImageSelect(config:TypeConfigImageSelect):string | number{
  if(isString(`${config.default}`)) return config.default
  return ''
}