import { isEmpty, isNil, isObject, isString, values } from '../.utils'
import type { TypeConfigSearch } from './types'

// 下拉搜索框。
export function getDefaultConfigForSearch(config:TypeConfigSearch):string|number{
  let defaultValue = ''
  if(!isEmpty(config.default)){
    defaultValue = config.default
  }
  else if(!isNil(config.range) && config.range.length > 0){
    if(isString(config.range[0])){ defaultValue= config.range[0]}
    else if(isObject(config.range[0])&&!isNil(config.range[0].value)) defaultValue =  config.range[0].value
    else if(values(config.range[0]).length == 1) defaultValue =  values(config.range[0])[0]
  }
  else if(!isNil(config.searches)){
    return config.searches[0]
  }
  return defaultValue
}