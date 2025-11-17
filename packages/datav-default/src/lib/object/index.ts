import { getDefaultConfigForItem } from '../'
import type { TypeConfigObject } from './types'

export function getDefaultConfigForObject(config: TypeConfigObject):any {
  const defaultValue = {}
  for (const key in config) {
    if (config.hasOwnProperty(key)) {
      defaultValue[key] = getDefaultConfigForItem(config[key])
    }
  }
  return defaultValue
}