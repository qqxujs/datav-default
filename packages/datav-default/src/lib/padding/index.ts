import { isObject } from '../.utils'
import type { TypeConfigPadding } from './types'

// 文本输入框，支持定制前后缀。
// 填充框。支持三种填充类型以及它们的组合。
export function getDefaultConfigForPadding(config:TypeConfigPadding):object{
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