import type { TypeConfigBase, TypeControl } from '../.types/base'

//渐变颜色选择器。
export enum TypeConfigMulticolorStyle {
  single = 'single',
  double = 'double',
}
export interface TypeConfigMulticolorDefault {
  style: TypeConfigMulticolorStyle
  value?: string
  from?: string
  to?: string
  angle?: number
}
export interface TypeConfigMulticolor extends TypeConfigBase {
  name: string //	显示名	string	是	无。
  type: TypeControl.multicolor //	类型	string	是	无。
  default: TypeConfigMulticolorDefault //	默认显示值	object	是	需要包含以下参数：
}
