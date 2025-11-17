import { isArray } from '../.utils'
import type { TypeConfigKeyBoard } from './types'


// 热键定义器。
export function getDefaultConfigForKeyBoard(config:TypeConfigKeyBoard):number[]{
  if(isArray(config.default)) return config.default
  return [16, 38]
}