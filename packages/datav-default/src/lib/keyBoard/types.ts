import type { TypeConfigBase, TypeControl } from '../.types/base'

//热键定义器。
export interface TypeConfigKeyBoard extends TypeConfigBase {
  name: string //	显示名	string	是	无。
  type: TypeControl.keyBoard //	类型	string	是	无。
  default?: number[] //	默认值	array	否	不填时为[16, 38]。
}
