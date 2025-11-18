export enum TypeControl {
  string = 'string', //文本输入框，支持定制前后缀。
  options = 'options', //选择器。支持开启过滤和自定义输入。当需要设置字体时，可开启渲染字体功能，预览字体样式。
  lineSelect = 'lineSelect', //装饰元素。
  iconfontSelect = 'iconfontSelect', //装饰元素。
  text = 'text', //文本输入框，支持定制前后缀。
  number = 'number', //数值输入框。
  select = 'select', //选择器。支持开启过滤和自定义输入。当需要设置字体时，可开启渲染字体功能，预览字体样式。
  search = 'search', //下拉搜索框。
  color = 'color', //颜色选择器。
  multicolor = 'multicolor', //渐变颜色选择器。可选单色或渐变色。
  array = 'array', //数据系列。适用于多个系列配置或多个颜色循环配色。
  hidden = 'hidden', //隐藏配置项。datav不会渲染此配置。
  boolean = 'boolean', //布尔配置项。
  radio = 'radio', //单选框。
  checkbox = 'checkbox', //复选框。支持为选项设置宽度。
  buttonRadio = 'buttonRadio', //单选按钮。
  iconRadio = 'iconRadio', //图标单选器。
  percent = 'percent', //百分比值。
  image = 'image', //图片框。
  imageSelect = 'imageSelect', //装饰元素。
  switch = 'switch', //开关。支持选择是否展示文字状态。
  stepper = 'stepper', //步进器。支持定制步长、最大值和最小值以及前缀和后缀。
  slider = 'slider', //滑动条。支持单滑块和双滑块，同时支持定制步长、最大值和最小值、前缀和后缀、精度，可开启范围显示。
  keyBoard = 'keyBoard', //热键定义器。
  fill = 'fill', //填充框。支持三种填充类型以及它们的组合。
  margin = 'margin', //边距高频套件。由四个步进器配置项组成，可定制上下左右四个边距值
  padding = 'padding', //边距高频套件。由四个步进器配置项组成，可定制上下左右四个边距值。
  line = 'line', //线样式高频套件。由线粗细步进器、平滑⽅式图标单选器、样式选择器和纯色填充框组成。
  font = 'font', //字体高频套件。由字体选择器、字体粗细选择器、字体大小步进器和纯色填充框组成。
  suite = 'suite', //组合套件。由⼀组控件组成。
  tabs = 'tabs', //标签组。切换标签可展示当前标签下的内容，支持动态增减标签组。
  menu = 'menu', //菜单。用来组织配置项的结构，目前支持一级菜单和二级菜单。
  group = 'group', //配置项组。可包含多个子配置项（建议多个同类元素配置项归于一个group），可用来组织内容，并支持折叠或展开组的内容。
  menuChild = 'menuChild', //数据系列中child字段类型
  object = 'object',
  datePicker = 'datePicker',
  timePicker = 'timePicker',
}
export enum TypeFontFamily {
  'Microsoft Yahei' = '微软雅黑',
  'SimSun' = '宋体',
  'SimHei' = '黑体',
  'KaiTi' = '楷体',
  'FangSong' = '仿宋',
  'YouYuan' = '幼圆',
  'Arial' = 'Arial',
  'Arial Black' = 'Arial Black',
  'Impact' = 'Impact',
  'Tahoma' = 'Tahoma',
  'Verdana' = 'Verdana',
  'Times New Roman' = 'Times New Roman',
  'Georgia' = 'Georgia',
  'Courier New' = 'Courier New',
  'Brush Script MT' = 'Brush Script MT',
  'Comic Sans MS' = 'Comic Sans MS',
  'Lucida Console' = 'Lucida Console',
  'Lucida Sans Unicode' = 'Lucida Sans Unicode',
}
export enum TypeOperator {
  NOT = '$not',
  EQ = '$eq',
  NE = '$ne',
  GT = '$gt',
  LT = '$lt',
  GTE = '$gte',
  LTE = '$lte',
  IN = '$in',
  NIN = '$nin',
}
export enum TypeConfigShowInPanelLogicalType {
  AND = '$and',
  OR = '$or',
}
export type TypeConfigShowInPanelConDitionsItem = [string, TypeOperator, any]
export interface TypeConfigShowInPanel {
  conditions: TypeConfigShowInPanelConDitionsItem[]
  logicalType: TypeConfigShowInPanelLogicalType
}
export interface TypeConfigBase {
  name: string //显示名 示例值："文本框"。
  type: TypeControl //类型	示例值："text"。
  default?: any //配置项 默认值	string、number、object、array	否	无。
  showInPanel?: TypeConfigShowInPanel //配置项是否在⾯板显示	string	否	可定义配置项的显隐规则。不配置时，显示配置项；配置时，按照配置规则显示，配置规则请参见showInPanel配置规则。
  caption?: string //配置项标注	string	否	不配置时，将不显示标注。
  description?: string //配置项描述	string	否	无。
  handler?: string //处理函数名	string	否	无。
  col?: number //控件主体部分所占栅格数	number	否	采⽤24栅格系统。
  valuePath?: string //配置项对应值的路径	string	否	配置规则请参见valuePath配置规则。
  show?: string //自定义配置项的显示与隐藏		string	否	配置规则请参见valuePath配置规则。
  enableHide?: boolean
}

export interface TypeConfig {
  [key: string]: any
  default: any
}
