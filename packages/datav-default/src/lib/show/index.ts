import { isBoolean } from '../.utils'
import type { TypeConfigShow } from './types'

// 文本输入框，支持定制前后缀。
export function getDefaultConfigForShow(config:TypeConfigShow):boolean{
  const defaultvalue = config.default || config._simplified_show
  if(isBoolean(defaultvalue)) return !!config.default
  else if(defaultvalue == 'true') return true
  else if(defaultvalue == 'false') return false
  else if(defaultvalue == '1') return true
  else if(defaultvalue == '0') return false
  else if(defaultvalue == '0') return false
  return true
}