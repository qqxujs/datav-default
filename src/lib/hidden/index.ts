import type { TypeConfigHidden } from './types'

// 文本输入框，支持定制前后缀。
// 隐藏配置项。datav不会渲染此配置。
export function getDefaultConfigForHidden(config: TypeConfigHidden): any {
  return config.default
}
