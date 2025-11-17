import { isEmpty, isNil } from '../.utils'
import type { TypeConfigSelect } from './types'

// 文本输入框，支持定制前后缀。
// 选择器。支持开启过滤和自定义输入。当需要设置字体时，可开启渲染字体功能，预览字体样式。
export function getDefaultConfigForSelect(config:TypeConfigSelect):string{
  let defaultValue = ''
  if(!isEmpty(config.default)) defaultValue = config.default
  else if(!isNil(config.options) && config.options.length > 0) defaultValue= config.options[0].value
  return defaultValue
}