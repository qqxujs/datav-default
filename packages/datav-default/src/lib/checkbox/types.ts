import type { TypeConfigBase, TypeControl } from '../.types/base'


//复选框。
export interface TypeConfigCheckbox extends TypeConfigBase {
  name: string //	显示名	string	是	无。
  type: TypeControl.checkbox //	类型	string	是	无。
  default?: string[] //	默认值	array	否	不填时值为空。
  options?: {label:string; value:string;}[] //	选项列表	array	否	对象数组，包含label和value字段。label为显示文本，value为文本值。
  optionCol?: number //	选项定宽	number	否	⽤来为选项设置固定宽度。
}