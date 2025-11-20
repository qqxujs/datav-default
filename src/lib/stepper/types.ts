import type { TypeConfigBase, TypeControl } from '../.types/base'

//步进器。
export interface TypeConfigStepper extends TypeConfigBase {
  name: string //	显示名	string	是	无。
  type: TypeControl.stepper //	类型	string	是	无。
  default?: number //	默认值	number	否	不填时值为空。
  step: number //	步⻓	number	是	number类型。
  min?: number //	最小值	number	是	number类型。
  max?: number //	最大值	number	是	number类型。
  prefix?: string //	前缀	string	否	string类型。
  suffix?: string //	后缀	string	否	string类型。
  precision?: number //	精度（⼩数位数）	number	否	显示精度，仅对⼩数值⽣效。
}
