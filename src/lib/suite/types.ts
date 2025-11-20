import type { TypeConfigBase, TypeControl, TypeConfig } from '../.types/base'

//组合套件。
export interface TypeConfigSuite extends TypeConfigBase {
  name: string //	显示名	string	是	无。
  type: TypeControl.suite //	类型	string	是	无。
  default?: any //	默认值	object	否	不填时值为空。取值请参见值说明。
  children?: TypeConfig //	控件模块	object	否	默认为{}。取值请参见值说明。
  enableHide?: boolean //	配置项对应元素是否能够在画布隐藏	boolean	否	默认为false。设置为true时，显示显隐图标按钮，并在当前配置项中增加show字段。
}
