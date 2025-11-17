import { isNumber, isObject } from '../.utils'
import { TypeConfigMulticolorStyle, type TypeConfigMulticolor, type TypeConfigMulticolorDefault } from './types'

// 文本输入框，支持定制前后缀。
export function getDefaultConfigForMulticolor(config:TypeConfigMulticolor):TypeConfigMulticolorDefault{
  const defaultValue:TypeConfigMulticolorDefault = {
    style: TypeConfigMulticolorStyle.single,
    value: '#000',
  }
  if(isObject(config.default)){
    if(config.default.style == TypeConfigMulticolorStyle.single && config.default.value ){
      return config.default
    }else if(defaultValue.style == TypeConfigMulticolorStyle.double && config.default.from && config.default.to && isNumber(config.default.angle)){
      return config.default
    }
  }
  return defaultValue
}
