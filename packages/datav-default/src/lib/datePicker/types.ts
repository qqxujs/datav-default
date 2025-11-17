import type { TypeConfigBase, TypeControl } from '../.types/base'

export interface TypeConfigDatePicker extends TypeConfigBase {
  name: string //	显示名	string	是	无。
  type: TypeControl.datePicker //	类型	string	是	无。
  default?:Array<string>|string //	默认值	array	否	对象数组，对象的属性应与child字段中定义的字段名一致。
  format?:any	// 对象名	object	否	请将该字段内的type设置为object。
  showTime?:boolean // 默认仅展示日期选择部分，设置为true可展示时间部分
}