import type { TypeConfigNumber } from '../number/types'
import type { TypeConfigText } from '../text/types'
import type { TypeConfigSelect } from '../select/types'
import type { TypeConfigSearch } from '../search/types'
import type { TypeConfigColor } from '../color/types'
import type { TypeConfigMulticolor } from '../multicolor/types'
import type { TypeConfigArray } from '../array/types'
import type { TypeConfigHidden } from '../hidden/types'
import type { TypeConfigBoolean } from '../boolean/types'
import type { TypeConfigRadio } from '../radio/types'
import type { TypeConfigCheckbox } from '../checkbox/types'
import type { TypeConfigButtonRadio } from '../buttonRadio/types'
import type { TypeConfigIconRadio } from '../iconRadio/types'
import type { TypeConfigPercent } from '../percent/types'
import type { TypeConfigImage } from '../image/types'
import type { TypeConfigImageSelect } from '../imageSelect/types'
import type { TypeConfigSwitch } from '../switch/types'
import type { TypeConfigStepper } from '../stepper/types'
import type { TypeConfigSlider } from '../slider/types'
import type { TypeConfigKeyBoard } from '../keyBoard/types'
import type { TypeConfigFill } from '../fill/types'
import type { TypeConfigMargin } from '../margin/types'
import type { TypeConfigPadding } from '../padding/types'
import type { TypeConfigLine } from '../line/types'
import type { TypeConfigFont } from '../font/types'
import type { TypeConfigSuite } from '../suite/types'
import type { TypeConfigTabs } from '../tabs/types'
import type { TypeConfigMenu } from '../menu/types'
import type { TypeConfigGroup } from '../group/types'
import type { TypeConfigDatePicker } from '../datePicker/types'
import type { TypeConfigTimePicker } from '../timePicker/types'

export * from './base'

export type TypeConfigAll =
  | TypeConfigNumber
  | TypeConfigText
  | TypeConfigSelect
  | TypeConfigSearch
  | TypeConfigColor
  | TypeConfigMulticolor
  | TypeConfigArray
  | TypeConfigHidden
  | TypeConfigBoolean
  | TypeConfigRadio
  | TypeConfigCheckbox
  | TypeConfigButtonRadio
  | TypeConfigIconRadio
  | TypeConfigPercent
  | TypeConfigImage
  | TypeConfigImageSelect
  | TypeConfigSwitch
  | TypeConfigStepper
  | TypeConfigSlider
  | TypeConfigKeyBoard
  | TypeConfigFill
  | TypeConfigSuite
  | TypeConfigMargin
  | TypeConfigPadding
  | TypeConfigLine
  | TypeConfigFont
  | TypeConfigTabs
  | TypeConfigMenu
  | TypeConfigGroup

export interface TypeConfig {
  [key: string]: TypeConfigAll
  default: any
}
export type {
  TypeConfigNumber,
  TypeConfigText,
  TypeConfigSelect,
  TypeConfigSearch,
  TypeConfigColor,
  TypeConfigMulticolor,
  TypeConfigArray,
  TypeConfigHidden,
  TypeConfigBoolean,
  TypeConfigRadio,
  TypeConfigCheckbox,
  TypeConfigButtonRadio,
  TypeConfigIconRadio,
  TypeConfigPercent,
  TypeConfigImage,
  TypeConfigImageSelect,
  TypeConfigSwitch,
  TypeConfigStepper,
  TypeConfigSlider,
  TypeConfigKeyBoard,
  TypeConfigFill,
  TypeConfigMargin,
  TypeConfigPadding,
  TypeConfigLine,
  TypeConfigFont,
  TypeConfigSuite,
  TypeConfigTabs,
  TypeConfigMenu,
  TypeConfigGroup,
  TypeConfigDatePicker,
  TypeConfigTimePicker,
}
