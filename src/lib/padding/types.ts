import type { TypeConfigBase, TypeControl } from '../.types/base'

//边距高频套件。
export enum TypeConfigPaddingComponents {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right',
}
export interface TypeConfigPadding extends TypeConfigBase {
  name: string //	显示名	string	是	无。
  type: TypeControl.padding //	类型	string	是	无。
  default?: any //	默认值	string	否	不填时值为空。
  components?: TypeConfigPaddingComponents[] //	配置项模块	array	否	默认值为["top","bottom","left","right"]。支持的模块包括"top"、"bottom"、"left"和"right"。
  enableHide?: boolean //	配置项对应元素是否能够在画布隐藏	boolean	否	默认为false。设置为true时，显示显隐图标按钮，并在当前配置项中增加show字段。
  min?: number //	最小值	number	0	无。
  max?: number //	最大值	number	Infinity	无。
}
