import type { TypeConfigBase, TypeControl } from '../.types/base'


//百分比值。
export interface TypeConfigPercent extends TypeConfigBase {
  name: string //	显示名	string	是	无。
  type: TypeControl.percent //	类型	string	是	无。
  default?: number //	默认值	number	否	不填时值为0。最大值为100，最小值为0，步长为1。
}
