import { isObject } from '../.utils'
import type { TypeConfigFont } from './types'

// 字体高频套件。由字体选择器、字体粗细选择器、字体大小步进器和纯色填充框组成。
export function getDefaultConfigForFont(config: TypeConfigFont): object {
  const defaultValue: any = {
    fontFamily: 'Microsoft Yahei',
    fontWeight: 'normal',
    color: '#fff',
    fontSize: 12,
  }
  if (isObject(config.default)) {
    return { ...defaultValue, ...config.default }
  }
  if (config.enableHide == true) {
    defaultValue.show = true
  }
  return defaultValue
}
