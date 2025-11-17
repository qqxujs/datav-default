import { isObject } from '../.utils'
import type { TypeConfigLine } from './types'

// 线样式高频套件。由线粗细步进器、平滑⽅式图标单选器、样式选择器和纯色填充框组成。
export function getDefaultConfigForLine(config:TypeConfigLine):object{
  let defaultValue:any = {
    width: 1,
    curve: 'polyline',
    style: 'solid',
    color: '#fff',
  }
  if(isObject(config.default)){
    defaultValue = { ...defaultValue, ...config.default }
  }
  if(config.enableHide == true){
    defaultValue.show = true
  }
  return defaultValue
}