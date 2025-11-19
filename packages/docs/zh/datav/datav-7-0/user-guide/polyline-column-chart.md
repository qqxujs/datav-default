<!DOCTYPE html> 

本文介绍折线柱状图的使用指南。

## 组件概述

折线柱状图是一种结合了折线图和柱状图的复合图表类型，它支持在同一个图表中使用柱图和折线图分别来表示同一类目下的两个维度值，使用户可以直观地比较不同数据集的趋势变化及具体数值。

### 使用场景

常用于数量与趋势的整合分析，可在同一时间段内对比具体数值（通过柱状图表示）和其变化趋势（通过折线图表示）。便于用户了解每个时间点的具体表现，以及洞察数据随时间发展的动态变化。

### **效果展示**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3189423571/p988191.png)

## **前提条件**

* 已创建数据看板，支持[使用模板创建](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)、[使用空白画布创建](https://help.aliyun.com/zh/datav/datav-7-0/getting-started/use-a-canvas-to-create-a-dashboard#639c36877c6jr)、[使用AI智能生成](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-ai-to-intelligently-generate-pc-side-kanban)。
* 已准备业务数据，详情请参见[数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/data-source/)。

## **添加**折线柱状图

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面的**数据看板**区域，鼠标悬停至目标看板，单击**编辑**，进入看板的画布编辑页面。
3. 在左侧导航栏的**组件库** \> **图表** \> **柱状图**列表下，单击**折线柱状图**组件，添加该组件至画布。

您也可[使用全局搜索](https://help.aliyun.com/zh/datav/global-search)添加相关组件。

## **接入业务数据**

添加组件后，您可将已准备的业务数据接入组件进行显示。单击折线柱状图，在右侧的**数据源**页签，即可选择该组件所要呈现的数据。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3189423571/p987915.png)

* 折线柱状图接收的数据字段介绍如下。

|    **字段**    |    **描述**    |
|    ----    |    ----    |
|    x    |    组件的类目（例如，时间），即x轴的值。    |
|    y1    |    柱状图的值。表示某一维度下的具体数值（例如，销售数量、访问量等）。    |
|    y2    |    折线图的值。表示另一个维度下的数值（例如，增长率、平均值、比率等）。    |
|    barColorField    |    柱状图的颜色。相同值表示同一组柱状图。    |
|    ineColorField    |    折线图的颜色。相同值表示同一条折线。    |    
示例折线柱状图的数据结构及效果展示如下。  
```  
[  
  {  
    "x": "2019-03",  
    "y1": 800,  
    "y2": 8000,  
    "barColorField": "10",  
    "lineColorField": "10"  
  },  
  {  
    "x": "2019-04",  
    "y1": 950,  
    "y2": 6500,  
    "barColorField": "10",  
    "lineColorField": "10"  
  },  
  {  
    "x": "2019-05",  
    "y1": 700,  
    "y2": 4000,  
    "barColorField": "10",  
    "lineColorField": "10"  
  },  
  {  
    "x": "2019-06",  
    "y1": 900,  
    "y2": 3800,  
    "barColorField": "10",  
    "lineColorField": "10"  
  },  
  {  
    "x": "2019-07",  
    "y1": 800,  
    "y2": 2200,  
    "barColorField": "10",  
    "lineColorField": "10"  
  },  
  {  
    "x": "2019-03",  
    "y1": 350,  
    "y2": 7500,  
    "barColorField": "20",  
    "lineColorField": "20"  
  },  
  {  
    "x": "2019-04",  
    "y1": 900,  
    "y2": 7000,  
    "barColorField": "20",  
    "lineColorField": "20"  
  },  
  {  
    "x": "2019-05",  
    "y1": 600,  
    "y2": 4500,  
    "barColorField": "20",  
    "lineColorField": "20"  
  },  
  {  
    "x": "2019-06",  
    "y1": 450,  
    "y2": 4500,  
    "barColorField": "20",  
    "lineColorField": "20"  
  },  
  {  
    "x": "2019-07",  
    "y1": 470,  
    "y2": 3200,  
    "barColorField": "20",  
    "lineColorField": "20"  
  },  
  {  
    "x": "2019-03",  
    "y1": 300,  
    "y2": 9000,  
    "barColorField": "30",  
    "lineColorField": "30"  
  },  
  {  
    "x": "2019-04",  
    "y1": 300,  
    "y2": 6000,  
    "barColorField": "30",  
    "lineColorField": "30"  
  },  
  {  
    "x": "2019-05",  
    "y1": 300,  
    "y2": 5000,  
    "barColorField": "30",  
    "lineColorField": "30"  
  },  
  {  
    "x": "2019-06",  
    "y1": 300,  
    "y2": 3000,  
    "barColorField": "30",  
    "lineColorField": "30"  
  },  
  {  
    "x": "2019-07",  
    "y1": 300,  
    "y2": 2000,  
    "barColorField": "30",  
    "lineColorField": "30"  
  }  
]  
```  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3189423571/p988051.png)
* 数据源的核心配置项介绍如下。

|    **配置项**    |    **描述**    |
|    ----    |    ----    |
|    **选择数据源**    |    支持接入CSV文件、API、各类数据库等多种类型数据，详情请参见[支持的数据源类型](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-a-data-source/)。您可使用可视化表格或代码方式编辑数据字段。    |
|    **配置过滤器（可选）**    |    用于自定义过滤代码，实现数据的结构转换、筛选、展示和简单的计算，详情请参见[管理数据过滤器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/manage-filters-1)。    |
|    **配置数据映射**    |    用于将所选数据源中的字段映射至组件对应的字段上，实现数据的实时匹配。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9633269661/p524955.png)图标可配置字段样式。    |
|    **查看响应结果**    |    用于实时展示组件所接入的数据。当组件数据源发生变化时，此处会对应展示最新数据。单击数据响应结果，可查看编写的数据字段代码。单击查看示例，可查看数据源接收的数组类型及代码示例。您可参考示例编写相关字段。其他数据请求配置：**禁止加载态**：勾选后，在组件更新或预览数据看板时，将不呈现组件初始化时的加载内容。**受控模式**：勾选后，组件在初始化状态下不会请求数据。此时仅支持通过蓝图编辑器或全局变量事件发起数据请求。**自动更新请求**：勾选后，平台会根据您设置的轮询时间，动态轮询更新数据；不勾选，则需手动刷新页面，或通过蓝图编辑器和全局变量事件来触发请求更新数据。    |

## **配置**折线柱状图

### **样式配置**

折线柱状图的样式分为基础配置和全量配置两个维度（在样式页签顶部即可切换），基础配置仅涉及图表的颜色及文字配置；全量配置涉及的配置项更加全面。本文以全量配置示例，介绍相关配置详情。

**说明** 
* 您也可单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879258.png)图标，通过关键词搜索，快速定位到所需配置项，搜索支持模糊匹配。详情请参见[搜索配置项](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。
* 单击画布中的折线柱状图组件，选择组件上方的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3189423571/p988541.png)图标，即可使用AI辅助生成相关样式配置。

相关配置项介绍如下。

|    **配置项**    |    **描述**    |    **图示**    |
|    ----    |    ----    |    ----    |
|    **全局配置**    |    定义组件在数据看板中的位置分布、透明程度、交互穿透。**不透明度**：数值越小，组件越透明。取值范围为0\~1内的数值。**交互穿透**：开启后，鼠标可穿透该组件，避免看板中组件较多时，该组件会遮挡鼠标与下层组件的交互。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3189423571/p988063.png)    |
|    **图形配置**    |    定义组件的图表边距，以及柱状图和折线图的颜色、展示样式等。**线柱同色**：开启后，折线图和柱状图将共用同一组颜色。关闭后，您可分别按需选择折线图及柱状图的配色。**柱子**：定义柱状图的展示形式、分组，以及柱子的颜色、宽度、标签等其他样式。**展示形式**：包括堆叠及分组样式。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3189423571/p988219.png)**堆叠**：将相同分类下的多个数据系列垂直堆积在一起，形成一个总柱子，每个子类别代表这个柱子的一部分。适用于展示部分与整体的关系，以及随时间变化的趋势。**分组**：将不同数据系列的柱子并排显示，以便直接比较不同组之间的数值。适用于对比两个或更多变量之间的差异。**自定义分组**：开启后，将采用数据中的barTrace做更细粒度的拆分，柱子部分将会变为**堆叠分组**效果。**说明** barTrace指用于表示柱状图的数据系列，包含柱状图所需数据和样式的定义。**折线**：定义折线的透明程度、折线点的颜色、折线标记符号及标签等样式。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3189423571/p988079.png)    |
|    **坐标配置**    |    定义组件中x轴、y1轴、y2轴的数据类型，以及轴线、轴标题、轴标签、刻度线、网格线的显示样式。**说明** 仅当**数据类型**为**数值型**时，需配置数值的显示范围。默认使用数据中的最大值及最小值，您也可点击下拉框输入所需数值。y轴的轴标签显示格式，请参见[数据显示格式说明](https://help.aliyun.com/zh/datav/datav-6-0/product-overview/terms-1#section-os5-b6i-tok)。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3189423571/p988081.png)    |
|    **动画配置**    |    开启**入场动画**，可定义组件加载时的动画效果及动画时长（单位为ms）。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3189423571/p988082.png)    |
|    **交互配置**    |    定义组件数据的交互展示效果（例如，轮播展示柱状图数据）。**轮播效果**：开启后，组件数据将根据**提示框**参数的配置进行轮播展示，同时，**提示框**的配置将无法通过交互触发。支持配置轮播时间间隔，单位为ms。![85CF15DD-52E3-4054-8934-757AC0F3CF0F](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3189423571/p988512.gif)**联通区域**：开启后，可通过悬浮或点击触发，展示数据中barColorField（即柱状图的颜色）值相同的柱子。![ADFC1DEF-02C4-49BA-89E3-C4A5AB0B0A20](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3189423571/p988521.gif)**说明** 开启轮播效果后，将无法使用联通区域效果。**提示框**：预览或发布页面中，用于展示柱状图指定柱子或折线图指定点位的数据详情。可按需配置提示框的触发方式（悬浮或点击）、显示位置、文本样式、背景样式等。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3189423571/p988527.png)**选中态**：用于配置选中（即悬浮或点击触发）指定柱子或折线后，相应柱子或折线的呈现样式（颜色、描边、标记点等）。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3189423571/p988532.png)    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3189423571/p988086.png)    |
|    **图例配置**    |    定义组件中的图例样式及图表间距。开启**图例开关**，可按需配置图例的位置、间距、宽度及是否允许翻页。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3189423571/p988474.png)    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3189423571/p988088.png)    |
|    **标注配置**    |    可通过条件筛选所需的柱子或折线，并使用自定义样式进行标注，支持添加辅助线、辅助框。示例将y1的最大值标注为红色。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3189423571/p988486.png)    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3189423571/p988481.png)    |

### **高级配置**

可定义折线柱状图与其他组件的交互，以及数据传递关系。相关配置项介绍如下。

|    **配置项**    |    **描述**    |    **图示**    |
|    ----    |    ----    |    ----    |
|    **交互事件**    |    定义与其他组件、全局变量、工具节点的[交互行为](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)，实现组件联动。例如，当数据更新时，折线柱状图高亮展示。单击**添加下游交互动作**，即可按需定义相关交互行为。**说明** 您也可单击**智能生成**，通过对话方式，使用[AI辅助](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/ai-intelligent-interaction-generation)生成交互事件。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3189423571/p988093.png)    |
|    **关联全局变量**    |    可在组件中关联全局参数，实现组件间的参数传递，进行组件交互。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879477.png)图标，即可开启相应指令，并为该指令关联所需[全局变量](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-global-variables)。    |    |

### **蓝图交互**

可通过[蓝图编辑器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/what-is-blueprint-editor-1)使用可视化连线方式，定义组件间的交互关系及行为逻辑。

#### **操作步骤**

1. 在画布编辑页面，单击顶部菜单栏左侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879479.png)图标，进入蓝图编辑器。
2. 在图层节点列表，鼠标悬停至折线柱状图组件，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2907643371/p879480.png)图标，添加该组件至主画布。
3. 通过连线方式，按需配置相关组件的蓝图交互效果。  
示例如下。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3189423571/p988552.png)

#### **配置项介绍**

相关交互事件及动作的介绍如下。

|    **类别**    |    **子类别**    |    **描述**    |
|    ----    |    ----    |    ----    |
|    **事件**    |    **当数据更新时**    |    当组件数据更新时抛出该事件。    |
|    **当数据请求状态变化时**    |    当数据请求状态变化时抛出该事件。状态值包括Void、Loading、Success、Error。    |    |
|    **当数据项选中时**    |    当选中折线柱状图的柱子时抛出该事件，同时抛出该柱子对应的数据项。数据示例如下。{   "x": "",   "y1": "",   "y2": "",   "barColorField": "",   "lineColorField": "" }    |    |
|    **当图例被点击时**    |    当点击图例时抛出该事件。数据示例如下。{   "value": "",   "checked": false }    |    |
|    **事件**    |    **导入数据**    |    数据按组件绘制格式处理后导入组件，并重新绘制。无需重新请求服务端数据，数据示例如下。\[   {     "x": "",     "y1": 0,     "y2": "",     "barColorField": "",     "barTrace": "",     "lineColorField": ""   } \]    |
|    **请求数据**    |    重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如，折线柱状图配置的API数据源为https://api.test，传到**请求数据**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。    |    |
|    **高亮**    |    data字段表示需要高亮展示的数据项，style字段用于定义图表样式和视觉表现。数据示例如下{   "data": {     "x": "2019-03",     "y1": 800,     "y2": 8000,     "barColorField": "",     "barTrace": "",     "lineColorField": ""   },   "style": {     "show": true,     "line": {       "show": true,       "lineStyle": "solid",       "lineWidth": 4,       "fill": {         "type": "linearGradient",         "value": {           "angle": 90,           "stops": \[             {               "offset": 0,               "color": "#00FF95"             },             {               "offset": 100,               "color": "#588EE9"             }           \]         }       },       "dashedLength": 3,       "dashedSpace": 8,       "dottedLength": 2,       "dottedSpace": 4     },     "marker": {       "show": true     },     "fillSet": {       "show": false,       "fill": {         "type": "linearGradient",         "value": {           "angle": 90,           "stops": \[             {               "offset": 0,               "color": "#00ff95"             },             {               "offset": 100,               "color": "rgba(88, 142, 233, 0.5)"             }           \]         }       }     },     "columnStroke": {       "lineStyle": "solid",       "lineWidth": 1,       "lineColor": "#ffffff",       "dashedLength": 3,       "dashedSpace": 8,       "dottedLength": 2,       "dottedSpace": 4     }   } }    |    |
|    **取消高亮**    |    需要取消高亮的数据项。    |    |
|    **移动**    |    将组件移动到指定位置，数据示例如下。{    // 移动方式。绝对定位：to，相对定位：by。默认值：to。     "positionType": "to",   // 指定位置。x坐标，y坐标。   "attr": {    "x": 0,    "y": 0    },   // 动画方式。   "animation": {     "enable": false,     // 动画延时。    "animationDuration": 1000,     // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。    "animationEasing": "linear"   } }    |    |
|    **切换显隐**    |    切换组件为显示或隐藏，数据示例如下。{   "animationType": "fade",   "animationDuration": 1000,   "animationEasing": "linear" }animationType：动画方式。可配置为appear（出现/消失）、fade（渐隐渐现）、slideToUp（飞入/飞出），不配置表示无动画。animationDuration：动画延时，默认为1000ms。animationEasing：动画曲线。可配置为linear（匀速）、easeInOutQuad（平滑）、easeInOutExpo（慢快慢）。    |    |
|    **显示**    |    |    |
|    **隐藏**    |    |    |
|    **更新组件配置**    |    动态更新组件的样式配置。先在组件的**样式**面板中，单击**复制配置到剪贴板**，获取组件的配置数据。根据需要，在蓝图编辑器配置页面的数据处理节点，更改对应样式的字段值。    |    |