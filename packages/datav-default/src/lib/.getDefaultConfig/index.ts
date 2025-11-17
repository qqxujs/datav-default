import {
  TypeControl,
  type TypeConfig,
  type TypeConfigAll,
} from '../.types/index'

import type { TypeConfigNumber } from "../number/types";
import type { TypeConfigText } from "../text/types";
import type { TypeConfigSelect } from "../select/types";
import type { TypeConfigSearch } from "../search/types";
import type { TypeConfigColor } from "../color/types";
import type { TypeConfigMulticolor } from "../multicolor/types";
import type { TypeConfigArray } from "../array/types";
import type { TypeConfigHidden } from "../hidden/types";
import type { TypeConfigBoolean } from "../boolean/types";
import type { TypeConfigRadio } from "../radio/types";
import type { TypeConfigCheckbox } from "../checkbox/types";
import type { TypeConfigButtonRadio } from "../buttonRadio/types";
import type { TypeConfigIconRadio } from "../iconRadio/types";
import type { TypeConfigPercent } from "../percent/types";
import type { TypeConfigImage } from "../image/types";
import type { TypeConfigImageSelect } from "../imageSelect/types";
import type { TypeConfigSwitch } from "../switch/types";
import type { TypeConfigStepper } from "../stepper/types";
import type { TypeConfigSlider } from "../slider/types";
import type { TypeConfigKeyBoard } from "../keyBoard/types";
import type { TypeConfigFill } from "../fill/types";
import type { TypeConfigMargin } from "../margin/types";
import type { TypeConfigPadding } from "../padding/types";
import type { TypeConfigLine } from "../line/types";
import type { TypeConfigFont } from "../font/types";
import type { TypeConfigSuite } from "../suite/types";
import type { TypeConfigTabs } from "../tabs/types";
import type { TypeConfigMenu } from "../menu/types";
import type { TypeConfigGroup } from "../group/types";
import type { TypeConfigDatePicker } from "../datePicker/types";
import type { TypeConfigTimePicker } from "../timePicker/types";
import type { TypeConfigShow } from '../show/types';

import { getDefaultConfigForText } from '../text'
import { getDefaultConfigForNumber } from '../number'
import { getDefaultConfigForKeyBoard } from '../keyBoard'
import { getDefaultConfigForBoolean } from '../boolean'
import { getDefaultConfigForPercent } from '../percent'
import { getDefaultConfigForButtonRadio } from '../buttonRadio'
import { getDefaultConfigForCheckbox } from '../checkbox'
import { getDefaultConfigForIconRadio } from '../iconRadio'
import { getDefaultConfigForDatePicker } from '../datePicker'
import { getDefaultConfigForImageSelect } from '../imageSelect'
import { getDefaultConfigForMenu } from '../menu'
import { getDefaultConfigForRadio } from '../radio'
import { getDefaultConfigForSearch } from '../search'
import { getDefaultConfigForSelect } from '../select'
import { getDefaultConfigForSwitch } from '../switch'
import { getDefaultConfigForTimePicker } from '../timePicker'
import { getDefaultConfigForLine } from '../line'
import { getDefaultConfigForSlider } from '../slider'
import { getDefaultConfigForStepper } from '../stepper'
import { getDefaultConfigForColor } from '../color'
import { getDefaultConfigForFill } from '../fill'
import { getDefaultConfigForFont } from '../font'
import { getDefaultConfigForImage } from '../image'
import { getDefaultConfigForMulticolor } from '../multicolor'
import { getDefaultConfigForTabs } from '../tabs'
import { getDefaultConfigForArray } from '../array'
import { getDefaultConfigForGroup } from '../group'
import { getDefaultConfigForHidden } from '../hidden'
import { getDefaultConfigForMargin } from '../margin'
import { getDefaultConfigForPadding } from '../padding'
import { getDefaultConfigForSuite } from '../suite'
import { getDefaultConfigForShow } from '../show';




export function getDefaultConfig(config:TypeConfig|any):any {
  const defaultValue = {}
  for (const key in config) {
    if (config.hasOwnProperty(key)) {
      defaultValue[key] = getDefaultConfigForItem(config[key])
    }
  }
  return defaultValue
}


export function getDefaultConfigForItem(config:TypeConfigAll){
    // 基础输入控件 - boolean 布尔配置项
    if(config.type === TypeControl.boolean)               return  getDefaultConfigForBoolean(config as TypeConfigBoolean)
    // 基础输入控件 - keyBoard 热键定义器
    if(config.type === TypeControl.keyBoard)              return  getDefaultConfigForKeyBoard(config as TypeConfigKeyBoard)
    // 基础输入控件 - number 数值输入框
    if(config.type === TypeControl.number)                return  getDefaultConfigForNumber(config as TypeConfigNumber)
    // 基础输入控件 - percent 百分比值
    if(config.type === TypeControl.percent)               return  getDefaultConfigForPercent(config as TypeConfigPercent)
    // 基础输入控件 - text 文本输入框
    if(config.type === TypeControl.text)                  return  getDefaultConfigForText(config as TypeConfigText)

    // 选择型控件 - buttonRadio 单选按钮
    if(config.type === TypeControl.buttonRadio)           return  getDefaultConfigForButtonRadio(config as TypeConfigButtonRadio)
    // 选择型控件 - checkbox 复选框
    if(config.type === TypeControl.checkbox)              return  getDefaultConfigForCheckbox(config as TypeConfigCheckbox)
    // 选择型控件 - iconRadio 单选图标
    if(config.type === TypeControl.iconRadio)             return  getDefaultConfigForIconRadio(config as TypeConfigIconRadio)
    // 选择型控件 - imageSelect 图片选择器
    if(config.type === TypeControl.imageSelect)          return  getDefaultConfigForImageSelect(config as TypeConfigImageSelect)
    // 选择型控件 - menu 菜单
    if(config.type === TypeControl.menu)                 return  getDefaultConfigForMenu(config as TypeConfigMenu)
    // 选择型控件 - radio 单选框
    if(config.type === TypeControl.radio)                return  getDefaultConfigForRadio(config as TypeConfigRadio)
    // 选择型控件 - search 下拉搜索框
    if(config.type === TypeControl.search)               return  getDefaultConfigForSearch(config as TypeConfigSearch)
    // 选择型控件 - select 选择器
    if(config.type === TypeControl.select)               return  getDefaultConfigForSelect(config as TypeConfigSelect)
    // 选择型控件 - switch 开关
    if(config.type === TypeControl.switch)               return  getDefaultConfigForSwitch(config as TypeConfigSwitch)
    // 选择型控件 - timePicker 时间选择器
    if(config.type === TypeControl.timePicker)          return  getDefaultConfigForTimePicker(config as TypeConfigTimePicker)
    // 选择型控件 - datePicker 日期选择器
    if(config.type === TypeControl.datePicker)          return  getDefaultConfigForDatePicker(config as TypeConfigDatePicker)

    // 数值调节型控件 - line 线套件
    if(config.type === TypeControl.line)                 return  getDefaultConfigForLine(config as TypeConfigLine)
    // 数值调节型控件 - slider 滑动条
    if(config.type === TypeControl.slider)               return  getDefaultConfigForSlider(config as TypeConfigSlider)
    // 数值调节型控件 - stepper 步进器
    if(config.type === TypeControl.stepper)             return  getDefaultConfigForStepper(config as TypeConfigStepper)



    // 样式配置型控件- color 颜色选择器
    if(config.type === TypeControl.color)                return  getDefaultConfigForColor(config as TypeConfigColor)
    // 样式配置型控件- fill 填充框
    if(config.type === TypeControl.fill)                return  getDefaultConfigForFill(config as TypeConfigFill)
    // 样式配置型控件- font 字体套件
    if(config.type === TypeControl.font)                return  getDefaultConfigForFont(config as TypeConfigFont)
    // 样式配置型控件- image 图片框
    if(config.type === TypeControl.image)               return  getDefaultConfigForImage(config as TypeConfigImage)
    // 样式配置型控件- multicolor 渐变颜色选择器
    if(config.type === TypeControl.multicolor)         return  getDefaultConfigForMulticolor(config as TypeConfigMulticolor)
    // 样式配置型控件- tabs 标签组
    if(config.type === TypeControl.tabs)                return  getDefaultConfigForTabs(config as TypeConfigTabs)

    // 布局容器型控件 - array 数据系列
    if(config.type === TypeControl.array)                 return  getDefaultConfigForArray(config as TypeConfigArray)
    // 布局容器型控件 - group 配置项组
    if(config.type === TypeControl.group)                return  getDefaultConfigForGroup(config as TypeConfigGroup)
    // 布局容器型控件 - margin 外边距
    if(config.type === TypeControl.margin)               return  getDefaultConfigForMargin(config as TypeConfigMargin)
    // 布局容器型控件 - padding 内边距
    if(config.type === TypeControl.padding)              return  getDefaultConfigForPadding(config as TypeConfigPadding)
    // 布局容器型控件 - suite 通用套件
    if(config.type === TypeControl.suite)               return  getDefaultConfigForSuite(config as TypeConfigSuite)
      // 特殊功能型控件 - hidden 隐藏配置项
    if(config.type === TypeControl.hidden)               return  getDefaultConfigForHidden(config as TypeConfigHidden)
    // 特殊功能型控件 - show 显示条件
    if(!config.type)                                 return  getDefaultConfigForShow(config as TypeConfigShow)
    console.log('Type not found:', config.type)
    return undefined
}

export default {
  getDefaultConfig,
  getDefaultConfigForItem,
}