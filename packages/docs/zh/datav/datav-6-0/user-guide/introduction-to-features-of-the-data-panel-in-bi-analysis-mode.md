# BI分析模式数据面板功能介绍 %{#289062}% 

使用BI分析模式配置组件数据是一个全新的数据配置功能，需要与您准备的数据集内容相结合，您可以使用BI分析模式，为组件自由分配所需数据集的字段内容，合理配置图表数据映射和其他数据筛选等功能。本文介绍BI分析模式下组件数据配置面板功能的使用方法。

## 前提条件

已创建BI分析模式的组件或地图子组件，详情请参见[进入组件分析模式](/zh/datav/datav-6-0/user-guide/enable-the-widget-analysis-mode#concept-2115149 "DataV组件分析模式提供与原有组件的数据和样式配置不同的创作模式，采用以数据为核心、自动化样式配置、探索式构建视图的流程设计。通过优化数据视图绑定操作，方便您使用基于数据生成的模型创作可视化应用。本文介绍三种使组件进入BI分析模式的方法。")。 

## 更改BI分析组件中关联的数据集

1. 创建完BI分析组件后，单击对应组件，您可以在右侧BI分析模式下的组件数据配置面板中，单击左上方的更改按键，重新选择一个数据集。  
![更改数据集](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3633307261/p268873.png)
2. 单击数据集下方的预览，可以打开当前数据集的编辑页，在编辑数据集页面中查看数据信息或修改内容，详情请参见[编辑数据集](https://help.aliyun.com/document%5Fdetail/215457.html#task-2061309 "本文为您介绍在DataV中数据集管理面板内如何编辑已创建的数据集。")。

## 搜索并查看数据集字段

为BI分析组件选择一个数据集内容后，数据集内所有字段都会显示在BI分析模式数据面板中，在字段区域查看当前数据集所有的字段内容。![默认显示所有字段](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4633307261/p269044.png)

**说明** 当数据集中字段有更新后，您可以单击字段区块右上角的刷新，重新获取该数据集内所有字段内容。 

您也可以在输入关键字搜索输入框中，自定义输入所需字段名称即可搜寻得到想要的字段内容。![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4633307261/p269045.jpg)

## 配置图表字段映射

在BI分析模式组件数据面板右侧的图表配置区域，可以配置数据集字段映射到图表中的效果。目前仅支持配置数字和字符串类型的字段。具体功能操作如下： 

|    功能    |    说明    |
|    ----    |    ----    |
|    映射或替换字段    |    首次映射图表字段：单击并拖动字段列表中某个字段，移动至右侧某个图表配置参数虚线框处，即可完成该字段与图表对应配置参数的数据映射。![拖拽字段配置映射](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7837681361/p269114.png) **说明** 您还可以双击左侧的某个字段，即可自动填充到右侧图标配置下方的某个字段映射通道中。 替换映射图表字段：当某个参数虚线框内已配置字段，您可以在左侧字段列表区域拖拽其他字段到此处参数虚线框处，即可替换当前字段数据内容。![替换字段](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7837681361/p269122.png) 配置内部替换字段：您可以在图表配置区域内部，拖拽某个已配置完成的字段移动到其他内部参数虚线内，即可替换并改变当前字段的位置。![内部字段拖拽改变位置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4633307261/p269128.png) **说明** 图表配置区域中，带\*号的部分参数配置必须配置与之匹配的字段数据内容，非\*号区域可自定义选择配置或不配置。目前只支持配置数字和字符串类型的字段。    |
|    删除字段    |    配置字段数据后，如果不需要该字段，您可以单击对应字段右侧的![删除字段图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4633307261/p269115.jpg)图标，即可删除当前参数内配置的字段数据。 **说明** 如果您需要一次性删除图表配置区域内所有已配置的字段，您可以单击图表配置右上角的![请客字段](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4633307261/p269119.jpg)图标可一键清除已配置的字段。    |
|    配置分箱样式    |    配置字段数据后，如果字段内数值量大，您可以单击字段右侧的![缩略点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4633307261/p269150.jpg)图标，在弹出的字段样式菜单栏中，选择开启分箱，并设置分箱间隔的具体值，把细节的数值归并到几个间隔范围里；选择无分箱即可恢复原始细节数值的样式。 图 1\. 数值分箱前 ![分箱前](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7523139461/p426954.png) 图 2\. 数值分箱后 ![分箱后](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7523139461/p426956.png) **说明** 分箱功能仅支持数值型字段。    |
|    配置字段数据聚合样式    |    单击某一参数字段右侧的![缩略点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4633307261/p269150.jpg)图标，在弹出的字段样式菜单栏中，根据图表的不同需求，自定义选择当前参数映射字段数据的聚合方式。 支持的聚合类型： 求和（仅支持数字字段） 计数 去重计数 最大值 最小值 平均值（仅支持数字字段） ![选择数据聚合方式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4633307261/p269149.png)    |
|    配置字段数据排序样式    |    单击某一参数字段右侧的![缩略点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4633307261/p269150.jpg)图标，在弹出的字段样式菜单栏中，自定义选择当前参数映射字段数据的排序方式，系统默认选择升序。![排序方式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4633307261/p269161.png) **说明** 选择某个排序方式后，再次单击即选中的排序方式可取消数据排序。    |
|    配置字段数据权重值    |    单击某一参数字段右侧的![缩略点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4633307261/p269150.jpg)图标，在弹出的字段样式菜单栏中，自定义输入字段数据的权重值大小。当有多个字段同时排序时会影响排序结果，数字大的字段的排序优先满足，字段的权重为0时，表示不生效。![权重值配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5633307261/p269165.png)    |
|    配置基于字段类型的额外选项    |    支持以下两种基于其他字段的额外类型选项： 粒度（仅支持日期与时间字段） 地理角色（如经度、维度；仅支持地理字段；设定地理角色的字段无法进行聚合/排序） ![其他额外选项](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5633307261/p269178.png) **说明** 字段类型配置详情请参见[添加数据集](https://help.aliyun.com/document%5Fdetail/215456.html#task-2060897 "本文为您介绍如何在DataV中创建一个完整数据集。")。    |
|    配置图表映射字段样式    |    当图表配置区域中的字段右侧有![样式图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5633307261/p269222.jpg)图标时，您可以单击该图标展开样式面板，配置对应字段的映射样式。![图标字段样式配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5633307261/p269228.png)图表配置中的大小、颜色、形状映射样式具体配置操作，请参见[视觉映射功能概述](/zh/datav/datav-6-0/user-guide/overview-of-the-visual-mapping-feature-for-datav-6#concept-2067119 "视觉映射主要包括新版组件样式中可配置的颜色映射器、形状映射器、尺寸映射器和条件树等功能。本文为您介绍视觉映射中不同功能的概要说明。")。 **说明** 在组件数据面板中的图表配置区域中，除了可以通过上述针对某个字段右侧的![样式图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5633307261/p269222.jpg)图标，展开独立字段样式面板配置字段样式的方法之外，您还可以在组件的默认样式配置面板中配置当前组件所有映射样式。    |
|    配置字段下钻    |    单击图表配置面板字段右侧的![下钻按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8837681361/p327486.jpg)图标，选择层级下钻，即可开启字段下钻功能，您可以拖动更多的字段到指定的下钻字段位置进行下钻维度的配置。再次单击![下钻按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8837681361/p327486.jpg)图标即可选择取消下钻功能。具体下钻配置展示的详情请参见[BI分析器交互使用说明](/zh/datav/datav-6-0/user-guide/bi-analyzer-interaction-instructions#concept-2114138 "在DataV数据集和组件分析模式的基础上，分析器交互给组件附加了下钻、联动筛选等交互式动态数据查询的能力，将基于您交互反馈的数据模型变更纳入可视化应用的交互，形成完整的可视化分析循环。所有交互可在预览模式和发布结果中进行。本文介绍分析器具体交互功能的使用说明。")。 **说明** 开启下钻功能的字段必须是一个没有配置聚合样式的字段。 ![下钻字段配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8837681361/p327498.png)    |

**说明** 数据集字段映射配置完成后，可以在画布上直接预览数据配置的结果。 

## 配置筛选器

BI分析模式组件数据面板右下角的筛选器区域，可以设置数据的筛选条件。具体功能操作如下： 

|    功能    |    说明    |
|    ----    |    ----    |
|    设置筛选器系列样式    |    单击设置筛选器按钮，在弹出的筛选器面板中，您可以单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一个筛选器系列。单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个筛选器系列的排列样式。单击![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5633307261/p269265.jpg) 图标，复制当前筛选器系列内所有的配置并粘贴新增一个筛选器系列。    |
|    配置筛选器系列条件逻辑    |    在筛选器面板内，单击![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)图标，添加了一个筛选器系列，您可以单击系列内条件名称左侧的![显隐开关](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5633307261/p269253.jpg)图标，打开详细条件逻辑配置面板。![条件配置面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6633307261/p269254.jpg) 选择条件筛选字段：在某一个条件框内，您可以单击下拉框，查看数据集内的所有字段，选择当前数据集中的任意一个字段。![选择字段](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6633307261/p269256.png) 设置条件筛选逻辑条件及数值：您可以自定义选择针对字段数据逻辑条件并配置字段筛选条件的具体数值。![完整筛选条件值](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6633307261/p269257.png)    |
|    新增筛选条件    |    您可以单击条件框左侧的![增加一个条件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6633307261/p269258.jpg)图标或下方的新增条件按键，新增一个筛选条件样式，具体新增条件的区别请参见[条件树使用说明](/zh/datav/datav-6-0/user-guide/instructions-of-conditional-tree#task-2099938 "条件树用于指定特定逻辑判断，用于组件进行条件样式修改或者设置筛选器样式。本文介绍条件树的具体使用方法。")。    |
|    删除筛选条件    |    单击条件框最右侧的![删除图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6633307261/p269259.jpg)图标，即可删除当前筛选条件。    |
|    配置多个条件之间的逻辑判断关系    |    您可以为多个筛选条件配置条件之间的逻辑判断关系，分别可选并且或或者。通过在条件样式面板中配置两层嵌套的并且或者或者连接各个条件，以便组合成各种复杂的逻辑判断。    |
|    重命名筛选条件名称    |    双击条件名称处，即可自定义修改当前筛选器的条件名称。![双击修改名称](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6633307261/p269947.jpg)    |
|    收起筛选器面板    |    单击面板最左上角的收起即可关闭筛选条件面板。    |
|    管理筛选器区域筛选条件    |    配置完成的筛选条件会显示在数据面板的筛选器区域中。您可以通过每个筛选条件右侧的开关，控制筛选器所需使用的条件。![显示筛选条件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6633307261/p269272.png)    |

**说明** 筛选器设置筛选条件样式时使用的条件树功能操作详情，请参见[条件树使用说明](/zh/datav/datav-6-0/user-guide/instructions-of-conditional-tree#task-2099938 "条件树用于指定特定逻辑判断，用于组件进行条件样式修改或者设置筛选器样式。本文介绍条件树的具体使用方法。")。 

## 配置数据条件系列样式

BI分析模式组件数据面板右下角的数据条件系列区域，可以设置数据条件规则及样式。具体功能操作如下： 

|    功能    |    说明    |
|    ----    |    ----    |
|    数据条件系列面板配置    |    数据条件样式逻辑规则配置方法和筛选器数据条件配置方法基本一致，具体配置方法可参见[配置筛选器](#section-ri4-pjm-jad)。 **说明** 数据条件样式面板中，设置某个条件逻辑时，可下拉选择的是已经绑定了的数据字段内容。    |
|    数据条件系列映射样式配置    |    字段数据的条件逻辑配置完后，您可以为该字段数据改变包括尺寸、颜色和形状等，各个数据映射通道的样式配置，每个组件在数据条件系列面板内的映射样式配置都不同，您也可以通过组件默认样式配置面板中的方法或视觉映射的方法去配置。![映射通道配置样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6633307261/p269954.png)    |

## 查询结果面板

BI分析模式组件数据面板最下方的查询结果区域，可以查询字段映射绑定后的数据内容。具体功能操作如下： 

|    功能    |    说明    |
|    ----    |    ----    |
|    设置返回数据量    |    单击查询结果输入框，自定义输入从数据集中获取并返回的数据条数，即可设定可查询数据的数量上限值。    |
|    刷新返回数据    |    单击![刷新数据按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9837681361/p327063.jpg)图标，可刷新绑定的字段获取返回数据的内容，可保证获取数据的新鲜程度。    |
|    查看并调整返回数据    |    单击![查看结果图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9837681361/p289149.jpg)图标，在弹出的查询结果设置面板中调整查询结果的数据条数和在数据响应结果内查看获取的数据内容。    |
|    调试数据    |    单击![调试图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9837681361/p327093.jpg)图标，在弹出的调试面板中查看数据模型的配置。    |