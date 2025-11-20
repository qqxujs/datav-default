import type { TypeConfigBase, TypeControl } from '../.types/base'

//开关。
export interface TypeConfigSwitch extends TypeConfigBase {
  name: string //	显示名	string	是	无。
  type: TypeControl.switch //	类型	string	是	无。
  default?: boolean | string //	默认值	boolean	否	无。
  statusText?: boolean //	是否启用⽂字显示状态	boolean	否	默认为false。
  _simplified_show?: boolean //	是否启用⽂字显示状态	boolean	否	默认为false。
}
