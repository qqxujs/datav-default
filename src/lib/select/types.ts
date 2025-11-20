import type { TypeConfigBase, TypeControl } from '../.types/base'

//选择器。
export interface TypeConfigSelect extends TypeConfigBase {
  name: string //	显示名	string	是	无。
  type: TypeControl.select //	类型	string	是	无。
  default?: string //	默认显示值	string	否	没填时为options[0]。
  options?: { label: string; value: string }[] //	选项列表	array	否	每一项都包含label和value。label表示显示文本，value表示文本的值。
  filterable?: boolean //	是否⽀持过滤	boolean	否	默认：true。
  allowCustom?: boolean //	是否⽀持⾃定义输⼊内容	boolean	否	filterable为true时生效。默认：true。
  useFont?: boolean //	是否渲染字体	boolean	否	无。
}
