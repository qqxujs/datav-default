import type { TypeConfigBase, TypeControl } from '../.types/base'


//颜色选择器。
export interface TypeConfigColor extends TypeConfigBase {
  name:string //	显示名	string	是	无。
  type:TypeControl //	类型	string	是	无。
  default?:string //	默认显示值	string	否	没填时为#000。
}
