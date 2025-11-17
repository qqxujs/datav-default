import { isObject } from '../.utils'
import type { TypeConfigMargin } from './types'

// 填充框。支持三种填充类型以及它们的组合。
export function getDefaultConfigForMargin(config:TypeConfigMargin):object{
  let defaultValue:any = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10,
  }
  if(isObject(config.default)){
    defaultValue = { ...defaultValue, ...config.default }
  }
  if(config.enableHide == true){
    defaultValue.show = true
  }
  return defaultValue
}