import type { TypeConfigBase, TypeControl } from '../.types/base'

//数值输入框。
export interface TypeConfigNumber extends TypeConfigBase {
  name:string //显示名	string	是	无。
  type:TypeControl //类型	string	是	无。
  default?:number //默认显示值	number	否	没填时为16。
  min?:number //最小值	number	否	min、range[0]、range.min三者有其一就设置最小值成功，都没有时退化为text，不保证运行正确。
  max?:number //最大值	number	否	max、range[1]、range.max三者有其一就设置最大值成功，都没有时配置项类型退化为text，不保证运行正确。
  range?:number[] | {min:number; max:number;} //取值区间	array或object	否	配置range则显示滑动条。range可以为数组[10, 55]，也可以为对象{min: 10, max: 55}，与min和max都没有时，配置项类型退化为text，不保证运行正确。
}