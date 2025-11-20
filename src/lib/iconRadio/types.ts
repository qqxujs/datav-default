import type { TypeConfigBase, TypeControl } from '../.types/base'

//图标单选器。
export interface TypeConfigIconRadio extends TypeConfigBase {
  name: string //	显示名	string	是	无。
  type: TypeControl.iconRadio //	类型	string	是	无。
  default?: string //	默认值	string	否	不填时值为空。
  options?: string //	选项列表	array	是	对象数组，包含label、value和src字段。label为显示文本，value为文本值，src为图片地址或图标名。
  optionCol?: number //	选项定宽	number	否	⽤来为选项设定固定宽度。
  evenlySplit?: boolean //	均匀等分	boolean	否	使图标在⼀⾏中均匀分布。当和optionCol同时出现时，优先使用evenlySplit的值。
}
