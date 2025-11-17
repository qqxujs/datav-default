import { isEmpty } from '../.utils'
import type { TypeConfigRadio } from './types'

// 单选框。
export function getDefaultConfigForRadio(config:TypeConfigRadio):string | number{
  if(!isEmpty(config.default)) return config.default
  return ''
}