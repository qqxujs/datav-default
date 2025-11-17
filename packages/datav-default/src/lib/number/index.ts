import type { TypeConfigNumber } from './types'
import { isNumber } from '../.utils'

// 数值输入框。

export const getDefaultConfigForNumber =  function (config:TypeConfigNumber):number{
  if(isNumber(config.default)) return config.default
  return 16
}