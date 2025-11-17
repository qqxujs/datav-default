import { getDefaultConfig } from '../.getDefaultConfig'
import { isObject } from '../.utils'
import type { TypeConfigGroup } from './types'

// 配置项组。可包含多个子配置项（建议多个同类元素配置项归于一个group），可用来组织内容，并支持折叠或展开组的内容。
export function getDefaultConfigForGroup(config:TypeConfigGroup):any{
  const defaultValue = getDefaultConfig(config.children)
  if(isObject(config.default)) return { ...defaultValue, ...config.default }
  return defaultValue
}