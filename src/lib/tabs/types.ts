import type { TypeConfigBase, TypeControl, TypeConfig } from '../.types/base'

//标签组。
export interface TypeConfigTabs extends TypeConfigBase {
  name: string //	显示名	string	是	无。
  type: TypeControl.tabs //	类型	string	是	无。
  default?: any[] //	默认值	object	否	不填时值为空。
  addable?: boolean //	是否可以动态增减	boolean	否	默认为true。
  template?: {
    name: string
    children?: TypeConfig
  } //	动态增减的模板	object	否	默认为{}。
  children?: TypeConfig[] //	各标签组内容	array	否	默认为[]。⼦控件key字段不可使用关键字：_icon、id和_label。说明在每个⼦元素中，可以使⽤_label更改系列名（例如系列⼀改为模板），_icon更改图标。
  fold?: boolean //	是否默认展开	boolean	否	默认为true。
}
