import type { TypeConfigBase, TypeControl } from '../.types/base'

//线样式高频套件。
export enum TypeConfigLineComponents {
  width = 'width',
  curve = 'curve',
  style ='style',
  color = 'color',
}
export interface TypeConfigLine extends TypeConfigBase {
  name: string //	显示名	string	是	无。
  type: TypeControl.line //	类型	string	是	无。
  default?: any //	默认值	string	否	不填时值为空。
  components: TypeConfigLineComponents[] //	配置项模块	array	是	默认值为：["width","curve","style","color"]。支持的模块包括"width"、"curve"、"style"和"color"。
  enableHide?: boolean //	配置项对应元素是否能够在画布隐藏	boolean	否	默认为false。设置为true时，显示显隐图标按钮，并在当前配置项中增加show字段。
}