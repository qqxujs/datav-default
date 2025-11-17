import type { TypeConfigBase, TypeControl, TypeConfig } from '../.types/base'
//菜单。
export enum TypeConfigFontComponentsMode {
  single = 'single',
  multiple = 'multiple',
}
export interface TypeConfigMenuChildrenSingle{
  name:string
  mode:TypeConfigFontComponentsMode.single
  children?:TypeConfig
}
export interface TypeConfigMenuChildrenMultiple{
  name:string
  mode:TypeConfigFontComponentsMode.multiple
  children?:{
    [keyof:string]:{
      name:string
      children:TypeConfig
    }
  }
}
export interface TypeConfigMenu extends TypeConfigBase {
  name: string //	显示名	string	是	无。
  type: TypeControl.menu//	类型	string	是	无。
  default?: any //	默认值	object	否	不填时值为空。
  children?: {
    [keyof:string]:TypeConfigMenuChildrenSingle|TypeConfigMenuChildrenMultiple
  } //	菜单内容	object	否	默认为{}。必须包含mode和name字段。mode：是否嵌套了二级菜单，"single"表示仅有一级菜单，"multiple"表示有二级菜单。name：菜单名。
}