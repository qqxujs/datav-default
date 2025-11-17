import type { TypeConfigPercent } from './types'

// 百分比值。
export function getDefaultConfigForPercent(config:TypeConfigPercent):number{
  if( typeof (config.default-0) === 'number') return config.default
  return 0
}
