import type { TypeConfigBase, TypeControl } from '../.types/base'


//字体高频套件。
export enum TypeConfigFontComponents {
  fontFamily = 'fontFamily',
  fontWeight = 'fontWeight',
  fontSize = 'fontSize',
  color = 'color',
}
export interface TypeConfigFont extends TypeConfigBase {
  name: string //	显示名	string	是	无。
  type: TypeControl.font //	类型	string	是	无。
  default?: any //	默认值	array	否	不填时值为空。
  components?: TypeConfigFontComponents[] //	配置项模块	array	否	默认值为["fontFamily","fontWeight","fontSize","color"]。支持的模块包括"fontFamily"、"fontWeight"、"fontSize"和"color"。
  enableHide?: boolean //	配置项对应元素是否能够在画布隐藏	boolean	否	默认为false。设置为true时，显示显隐图标按钮，并在当前配置项中增加show字段。
}