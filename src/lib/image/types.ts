import type { TypeConfigBase, TypeControl } from '../.types/base'

//图片框。
export interface TypeConfigImage extends TypeConfigBase {
  name: string //	显示名	string	是	无。
  type: TypeControl.image //	类型	string	是	无。
  default?: string //	默认显示值	string	否	没填时为空，无图片。
}
