import { isArray } from '../.utils'
import type { TypeConfigArray } from './types'

export function getDefaultConfigForArray(config: TypeConfigArray): Array<any> {
  if (isArray(config.default)) {
    return config.default
  }
  return []
}
