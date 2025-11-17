import { getDefaultConfig } from '../.getDefaultConfig'
import { forIn, isNil, isObject } from '../.utils'
import { TypeConfigFontComponentsMode, type TypeConfigMenu } from './types'

export function getDefaultConfigForMenu(config:TypeConfigMenu):any{
  const defaultValue = config.default || {}
  if(isObject(config.default)) return config.default
  forIn(config.children,(value, key) => {
    const mode = value.mode||TypeConfigFontComponentsMode.single
    if(mode === TypeConfigFontComponentsMode.single){
      isNil(defaultValue[key])? defaultValue[key]= getDefaultConfig(value.children as any):''
    }else if(mode === TypeConfigFontComponentsMode.multiple){
      isObject(defaultValue[key])?'':defaultValue[key] = {}
      forIn(value.children,(value1, key1) => {
        if(isNil(defaultValue[key][key1])){
          defaultValue[key][key1] = getDefaultConfig(value1.children as any)
        }
      })
    }
  })
  return defaultValue
}
