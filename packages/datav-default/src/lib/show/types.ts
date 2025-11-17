import type { TypeConfigBase, TypeControl } from '../.types/base'

//布尔配置项。
export interface TypeConfigShow extends TypeConfigBase {
  name: string //	显示名	string	是	无。
  type: TypeControl.boolean //	类型	string	是	无。
  default?: boolean| string //	默认值	boolean	否	没填时为true。
  ['_simplified_show']: boolean
}
