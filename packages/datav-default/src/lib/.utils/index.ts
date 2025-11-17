

export const isString = (val:any): val is string => typeof val === 'string' || (val instanceof String)
export const isNumber = (val:any): val is number => typeof val === 'number' && !isNaN(val)
export const isArray = (val:any): val is any[] => Array.isArray(val)
export const isBoolean = (val:any): val is boolean => typeof val === 'boolean'
export const isObject = (val:any): val is Record<string, any> => val !== null && typeof val === 'object' && !isArray(val)

export const isFunction = (val:any): val is Function => typeof val === 'function'

export const isEmpty = (val:any): boolean => val === null || val === undefined || (isArray(val) && val.length === 0) || (isObject(val) && Object.keys(val).length === 0)
// defaults,isNil,values,forIn
export const isNil = (val:any): boolean => val === null || val === undefined

export const forIn = (object:any, iteratee:any) => {
  object = Object(object)
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      iteratee(object[key], key, object)
    }
  }
  return object
}
export const values = (object:any) => {
  const result = []
  forIn(object, (value) => {
    result.push(value)
  })
  return result
}
export const defaults = (object:any, ...sources:any[]) => {
  object = Object(object)
  for (let index = 0; index < sources.length; index++) {
    const source = sources[index]
    forIn(source, (value, key) => {
      if (isNil(object[key])) {
        object[key] = value
      }
    })
  }
  return object
}

// export { defaults,isNil,values,forIn } from 'lodash-es'

