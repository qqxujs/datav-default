import { defaults, isObject } from '../.utils'
import { TypeConfigFillComponents, type TypeConfigFill,  } from './types'

// 文本输入框，支持定制前后缀。

// 填充框。支持三种填充类型以及它们的组合。
export function getDefaultConfigForFill(config:TypeConfigFill):any{
  const components:TypeConfigFillComponents[] = config.components||[TypeConfigFillComponents.flat]
  const defaultValue = config.default
  if(components.length == 1){
    if(components[0] == TypeConfigFillComponents.flat){
      return defaultValue||'#000'
    }else if(components[0] == TypeConfigFillComponents.linearGradient && isObject(defaultValue)){
      return defaults({
        angle: 0,
        stops: [
          {
            offset: 0,
            color: '#000',
          },
          {
            offset: 1,
            color: '#000',
          },
        ],
      },defaultValue)
    }else if(components[0] == TypeConfigFillComponents.image && isObject(defaultValue)){
      return defaults({
        fillType: 'stretch',
        url: 'https://img.alicdn.com/tfs/TB19njRJ7zoK1RjSZFlXXai4VXa-16-16.png',
        tileSize: 100,
      },defaultValue)
    }
  }else {
    // 当支持多种填充类型时
    if(defaultValue && defaultValue.type && defaultValue.value){
      return defaultValue
    }else if(components.indexOf(TypeConfigFillComponents.flat) > -1){
      return {
        type: 'flat',
        value: '#000',
      }
    }else if(components.indexOf(TypeConfigFillComponents.linearGradient) > -1){
      return {
        type: 'linearGradient',
        value: {
          angle: 0,
          stops: [
            {
              offset: 0,
              color: '#000',
            },
            {
              offset: 100,
              color: 'rgba(0,0,0,0.5)',
            },
          ],
        },
      }
    }else if(components.indexOf(TypeConfigFillComponents.image) > -1){
      return {
        type: 'linearGradient',
        value: {
          fillType: 'stretch',
          url: 'https://img.alicdn.com/tfs/TB19njRJ7zoK1RjSZFlXXai4VXa-16-16.png',
          tileSize: 100,
        },
      }
    }
    return defaultValue
  }
  return '#000'
}
