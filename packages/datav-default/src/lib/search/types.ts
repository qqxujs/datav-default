import type { TypeConfigBase, TypeControl } from '../.types/base'

//下拉搜索框。
export interface TypeConfigSearch extends TypeConfigBase {
  name: string //	显示名	string	否	无。
  type: TypeControl.search //	类型	string	是	无。
  default?: string //	默认显示值	string	否	没填时为options[0]。
  range?:
    | { name: string; value: string }[]
    | { [key: string]: string }[]
    | string[] //	取值区间	array	否	示例值如[{name: "" ,value: ""}]，也可以为[{key: value}] 型，也可以只有[value]。 没有时配置项类型退化为text。
  searches?: string | number[]
}
