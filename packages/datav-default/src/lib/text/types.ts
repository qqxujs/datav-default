import type { TypeConfigBase, TypeControl } from '../.types/base'

//文本输入框。
export interface TypeConfigText extends TypeConfigBase {
  name:string //显示名	string	是	无。
  type: TypeControl.text //类型	string	是	无。
  default?:string //默认显示值	string	否	没填时为空。
  prefix?:string //前缀	string	否	无。
  suffix?:string //后缀	string	否	无。
  prefixIcon?:string //前缀图标名称	string	否	图标库中的名称，例如link。
  suffixIcon?:string //后缀图标名称	string	否	图标库中的名称，例如link。
}