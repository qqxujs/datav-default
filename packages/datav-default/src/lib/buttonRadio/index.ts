
import { isNumber, isString } from '../.utils'
import type { TypeConfigButtonRadio } from './types'

export function getDefaultConfigForButtonRadio(config:TypeConfigButtonRadio):string{
  if(isString(config.default)) return config.default
  if(isNumber(config.default)) return `${config.default}`
  return ''
}