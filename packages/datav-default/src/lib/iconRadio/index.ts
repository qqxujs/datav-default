import { isNumber, isString } from '../.utils'
import type { TypeConfigIconRadio } from './types'

// 图标单选器。
export function getDefaultConfigForIconRadio(config:TypeConfigIconRadio):string{
  if(isString(config.default)) return config.default
  if(isNumber(config.default)) return `${config.default}`
  return ''
}