import type { TypeConfigBase, TypeControl } from '../.types/base'

export interface TypeConfigArray extends TypeConfigBase {
  name: string //	显示名	string	是	无。
  type: TypeControl.array //	类型	string	是	无。
  default?: Array<any> //	默认值	array	否	对象数组，对象的属性应与child字段中定义的字段名一致。
  child?: any // 对象名	object	否	请将该字段内的type设置为object。
}
