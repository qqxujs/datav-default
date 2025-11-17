export *  from "./number/types";
export *  from "./text/types";
export *  from "./select/types";
export *  from "./search/types";
export *  from "./color/types";
export *  from "./multicolor/types";
export *  from "./array/types";
export *  from "./hidden/types";
export *  from "./boolean/types";
export *  from "./radio/types";
export *  from "./checkbox/types";
export *  from "./buttonRadio/types";
export *  from "./iconRadio/types";
export *  from "./percent/types";
export *  from "./image/types";
export *  from "./imageSelect/types";
export *  from "./switch/types";
export *  from "./stepper/types";
export *  from "./slider/types";
export *  from "./keyBoard/types";
export *  from "./fill/types";
export *  from "./margin/types";
export *  from "./padding/types";
export *  from "./line/types";
export *  from "./font/types";
export *  from "./suite/types";
export *  from "./tabs/types";
export *  from "./menu/types";
export *  from "./group/types";
export *  from "./datePicker/types";
export *  from "./timePicker/types";
export *  from './show/types';



export * from './.types/index.ts'
export * from './array/index.ts'
export * from './boolean/index.ts'
export * from './buttonRadio/index.ts'
export * from './checkbox/index.ts'
export * from './color/index.ts'
export * from './text/index.ts'
export * from './number/index.ts'
export * from './keyBoard/index.ts'
export * from './boolean/index.ts'
export * from './percent/index.ts'
export * from './buttonRadio/index.ts'
export * from './checkbox/index.ts'
export * from './iconRadio/index.ts'
export * from './datePicker/index.ts'
export * from './imageSelect/index.ts'
export * from './menu/index.ts'
export * from './radio/index.ts'
export * from './search/index.ts'
export * from './select/index.ts'
export * from './switch/index.ts'
export * from './timePicker/index.ts'
export * from './line/index.ts'
export * from './slider/index.ts'
export * from './stepper/index.ts'
export * from './color/index.ts'
export * from './fill/index.ts'
export * from './font/index.ts'
export * from './image/index.ts'
export * from './multicolor/index.ts'
export * from './tabs/index.ts'
export * from './array/index.ts'
export * from './group/index.ts'
export * from './hidden/index.ts'
export * from './margin/index.ts'
export * from './padding/index.ts'
export * from './suite/index.ts'
export * from './show/index.ts';


import {
  TypeControl,
  type TypeConfigAll,
} from './.types/index'

import type { TypeConfigNumber } from "./number/types";
import type { TypeConfigText } from "./text/types";
import type { TypeConfigSelect } from "./select/types";
import type { TypeConfigSearch } from "./search/types";
import type { TypeConfigColor } from "./color/types";
import type { TypeConfigMulticolor } from "./multicolor/types";
import type { TypeConfigArray } from "./array/types";
import type { TypeConfigHidden } from "./hidden/types";
import type { TypeConfigBoolean } from "./boolean/types";
import type { TypeConfigRadio } from "./radio/types";
import type { TypeConfigCheckbox } from "./checkbox/types";
import type { TypeConfigButtonRadio } from "./buttonRadio/types";
import type { TypeConfigIconRadio } from "./iconRadio/types";
import type { TypeConfigPercent } from "./percent/types";
import type { TypeConfigImage } from "./image/types";
import type { TypeConfigImageSelect } from "./imageSelect/types";
import type { TypeConfigSwitch } from "./switch/types";
import type { TypeConfigStepper } from "./stepper/types";
import type { TypeConfigSlider } from "./slider/types";
import type { TypeConfigKeyBoard } from "./keyBoard/types";
import type { TypeConfigFill } from "./fill/types";
import type { TypeConfigMargin } from "./margin/types";
import type { TypeConfigPadding } from "./padding/types";
import type { TypeConfigLine } from "./line/types";
import type { TypeConfigFont } from "./font/types";
import type { TypeConfigSuite } from "./suite/types";
import type { TypeConfigTabs } from "./tabs/types";
import type { TypeConfigMenu } from "./menu/types";
import type { TypeConfigGroup } from "./group/types";
import type { TypeConfigDatePicker } from "./datePicker/types";
import type { TypeConfigTimePicker } from "./timePicker/types";
import type { TypeConfigShow } from './show/types';

import { getDefaultConfigForText } from './text'
import { getDefaultConfigForNumber } from './number'
import { getDefaultConfigForKeyBoard } from './keyBoard'
import { getDefaultConfigForBoolean } from './boolean'
import { getDefaultConfigForPercent } from './percent'
import { getDefaultConfigForButtonRadio } from './buttonRadio'
import { getDefaultConfigForCheckbox } from './checkbox'
import { getDefaultConfigForIconRadio } from './iconRadio'
import { getDefaultConfigForDatePicker } from './datePicker'
import { getDefaultConfigForImageSelect } from './imageSelect'
import { getDefaultConfigForMenu } from './menu'
import { getDefaultConfigForRadio } from './radio'
import { getDefaultConfigForSearch } from './search'
import { getDefaultConfigForSelect } from './select'
import { getDefaultConfigForSwitch } from './switch'
import { getDefaultConfigForTimePicker } from './timePicker'
import { getDefaultConfigForLine } from './line'
import { getDefaultConfigForSlider } from './slider'
import { getDefaultConfigForStepper } from './stepper'
import { getDefaultConfigForColor } from './color'
import { getDefaultConfigForFill } from './fill'
import { getDefaultConfigForFont } from './font'
import { getDefaultConfigForImage } from './image'
import { getDefaultConfigForMulticolor } from './multicolor'
import { getDefaultConfigForTabs } from './tabs'
import { getDefaultConfigForArray } from './array'
import { getDefaultConfigForGroup } from './group'
import { getDefaultConfigForHidden } from './hidden'
import { getDefaultConfigForMargin } from './margin'
import { getDefaultConfigForPadding } from './padding'
import { getDefaultConfigForSuite } from './suite'
import { getDefaultConfigForObject } from './object'
import { getDefaultConfigForShow } from './show';




export const getDefaultConfig = getDefaultConfigForObject


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
  getDefaultConfigForObject,
  getDefaultConfigForItem,
  getDefaultConfigForText,
  getDefaultConfigForNumber,
  getDefaultConfigForKeyBoard,
  getDefaultConfigForBoolean,
  getDefaultConfigForPercent,
  getDefaultConfigForButtonRadio,
  getDefaultConfigForCheckbox,
  getDefaultConfigForIconRadio,
  getDefaultConfigForDatePicker,
  getDefaultConfigForImageSelect,
  getDefaultConfigForMenu,
  getDefaultConfigForRadio,
  getDefaultConfigForSearch,
  getDefaultConfigForSelect,
  getDefaultConfigForSwitch,
  getDefaultConfigForTimePicker,
  getDefaultConfigForLine,
  getDefaultConfigForSlider,
  getDefaultConfigForStepper,
  getDefaultConfigForColor,
  getDefaultConfigForFill,
  getDefaultConfigForFont,
  getDefaultConfigForImage,
  getDefaultConfigForMulticolor,
  getDefaultConfigForTabs,
  getDefaultConfigForArray,
  getDefaultConfigForGroup,
  getDefaultConfigForHidden,
  getDefaultConfigForMargin,
  getDefaultConfigForPadding,
  getDefaultConfigForSuite,
  getDefaultConfigForShow,
}