import { isNumber } from '../.utils'
import type { TypeConfigStepper } from './types'

// 文本输入框，支持定制前后缀。
// 步进器。支持定制步长、最大值和最小值以及前缀和后缀。
export function getDefaultConfigForStepper(config:TypeConfigStepper):number{
  if(isNumber(config.default-0)) return config.default
  return 0
}
