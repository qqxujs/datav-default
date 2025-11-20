import type { TypeConfigBase, TypeControl } from '../.types/base'

//装饰元素。
export interface TypeConfigImageSelect extends TypeConfigBase {
  name: string //	显示名	string	是	不填时使用key名作为显示名，例如margin。
  type: TypeControl.select //	类型	string	是	无。
  default?: string //	默认值	string	否	无。
  options?: { label: string; value: string }[] //	选项列表	array	否	对象数组，包含label、value和src字段。label为显示文本，value为文本值，src为图片地址或图标名。
}
