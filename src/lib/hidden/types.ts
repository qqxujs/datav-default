import type { TypeConfigBase, TypeControl } from '../.types/base'

//隐藏配置项。
export interface TypeConfigHidden extends TypeConfigBase {
  name: string //	显示名	string	是	无。
  type: TypeControl.hidden //	类型	string	是	无。
  default?: any //	默认值	string、number、array、object	否	设置默认不显示的值，但是会作为config传给方法。
}
