import type { TypeConfigBase, TypeControl } from '../.types/base'

//填充框。
export enum TypeConfigFillComponents {
  flat = 'flat',
  linearGradient = 'linearGradient',
  image = 'image',
}
export interface TypeConfigFill extends TypeConfigBase {
  name: string //	显示名	string	是	无。
  type:  TypeControl //	类型	string	是	无。
  default?: any //	默认值	string或object	否	不填时值为空。取值请参见下文的值说明。
  components?: TypeConfigFillComponents[] //	填充类型	array	否	支持以下三种填充类型，以及它们的组合：
// flat：纯⾊填充（默认）。
// linearGradient：渐变填充。
// image：图片填充。
// 说明
// 填充类型不同，对应的值也不同，详情请参见值说明。
}