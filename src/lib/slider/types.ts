import type { TypeConfigBase, TypeControl } from '../.types/base'

//滑动条。
export enum TypeConfigSliderMode {
  single = 'single',
  double = 'double',
}
export interface TypeConfigSlider extends TypeConfigBase {
  name: string //	显示名	string	是	无。
  type: TypeControl.slider //	类型	string	是	无。
  default?: number | number[] //	默认值	number或array	否	不填时值为空。
  step?: number //	步⻓	number	否	无。
  min?: number //	最小值	number	否	无。
  max?: number //	最大值	number	否	无。
  prefix?: string //	前缀	string	否	无。
  suffix?: string //	后缀	string	否	无。
  precision?: number //	精度（⼩数位数）	number	否	显示精度，仅对⼩数值⽣效。
  mode?: TypeConfigSliderMode //	滑块模式	string	否	可选值：single：单滑块（默认）。double：双滑块。
  showRange?: boolean //	是否显示范围	boolean	否	当mode为double时⽣效，默认为false。
  showCurrentRange?: boolean //	是否显示当前范围	boolean	否	当mode为single时⽣效，默认为true。
}
