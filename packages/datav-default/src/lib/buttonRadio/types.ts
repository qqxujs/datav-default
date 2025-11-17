import type { TypeConfigBase, TypeControl } from '../.types/base'


//单选按钮。
export interface TypeConfigButtonRadio extends TypeConfigBase {
  name: string //	显示名	string	是	无。
  type: TypeControl.buttonRadio //	类型	string	是	无。
  default?: string //	默认值	string	否	不填时值为空。
  options?: string //	选项列表	array	否	对象数组，包含label和value字段。label为显示文本，value为文本值。
  evenlySplit?: boolean //	均匀等分	boolean	否	使图标在⼀⾏中均匀分布。当和optionCol同时出现时，优先使用evenlySplit的值。
}