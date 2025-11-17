import { isBoolean } from '../.utils'
import type { TypeConfigBoolean } from './types'

// 布尔配置项。
export function getDefaultConfigForBoolean(config:TypeConfigBoolean):boolean{
  if(isBoolean(config.default)) return !!config.default
  else if(config.default == 'true') return true
  else if(config.default == 'false') return false
  else if(config.default == '1') return true
  else if(config.default == '0') return false
  return true
}