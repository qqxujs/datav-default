import { isArray, isNumber } from '../.utils'
import { TypeConfigSliderMode, type TypeConfigSlider } from './types'

// 文本输入框，支持定制前后缀。
// 滑动条。支持单滑块和双滑块，同时支持定制步长、最大值和最小值、前缀和后缀、精度，可开启范围显示。

export function getDefaultConfigForSlider(
  config: TypeConfigSlider
): number | number[] {
  if (config.mode == TypeConfigSliderMode.single) {
    if (isNumber(config.default)) return config.default
    return 0
  } else if (config.mode == TypeConfigSliderMode.double) {
    if (
      isArray(config.default) &&
      config.default.length == 2 &&
      isNumber(config.default[0]) &&
      isNumber(config.default[1])
    ) {
      return config.default
    }
    return [0, 0]
  }
  return 0
}
