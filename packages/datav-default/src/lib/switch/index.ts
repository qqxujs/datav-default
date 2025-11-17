import { isBoolean } from '../.utils'
import type { TypeConfigSwitch } from './types'

// 文本输入框，支持定制前后缀。
// 开关。支持选择是否展示文字状态。
export function getDefaultConfigForSwitch(config:TypeConfigSwitch):boolean{
  if(isBoolean(config.default)) return config.default
  if(config.default == 'true') return true
  if(config.default == 'false') return false
  if(config.default == '1') return true
  if(config.default == '0') return false
  return false
}