<!DOCTYPE html> 

本文介绍通用标题的使用指南。

## 组件概述

通用标题是一种信息组件，旨在传达模块的核心内容或重要信息。在数据看板中，您可以使用多个通用标题组件，以展示看板中各个子模块的标题或中心思想。

### 使用场景

通用标题常用于可视化应用中添加标题及说明信息，以便明确相关内容的主题，从而帮助您直观、快速地了解核心内容。同时，它支持与其他组件交互，通过标题控制不同维度视图或数据内容的呈现。

### **效果展示**

* 静态标题  
![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1355651961/p704313.png)
* 交互场景  
![19577664-CFE8-4D57-B32D-9804B40A8E43](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0127864371/p890700.gif)
* 链接跳转  
![DCF34FEB-3284-4AF3-80BB-07FE614A83BF](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0127864371/p891696.gif)

## **前提条件**

* 已创建数据看板，支持[使用模板创建](/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)、[使用空白画布创建](/zh/datav/datav-7-0/getting-started/use-a-canvas-to-create-a-dashboard#639c36877c6jr)、[使用AI智能生成](/zh/datav/datav-7-0/user-guide/use-ai-to-intelligently-generate-pc-side-kanban)。
* 已准备业务数据，详情请参见[数据源](/zh/datav/datav-7-0/user-guide/data-source/)。

## **添加**通用标题

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面的**数据看板**区域，鼠标悬停至目标看板，单击**编辑**，进入看板的画布编辑页面。
3. 在左侧导航栏，按下图步骤添加**通用标题**组件至画布。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5452297571/p1006799.png)

您也可[使用全局搜索](/zh/datav/global-search)添加相关组件。

## **接入业务数据**

添加组件后，您可将已准备的业务数据接入组件进行显示。单击通用标题，在右侧的**数据源**页签，即可选择该组件所要呈现的数据。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0127864371/p889975.png)

* 通用标题接收的数据字段介绍如下。

|    **字段**    |    **说明**    |
|    ----    |    ----    |
|    value    |    （可选）标题的内容。不为空时会覆盖样式中的配置；为空时会使用**样式** \> **基础样式** \> **标题内容**配置项中的内容。    |
|    url    |    （可选）标题跳转的超链接地址。 不为空时会覆盖样式中的配置；为空时会使用**样式** \> **交互** \> **超链接配置** \> **超链接**配置项中的URL。    |    
示例通用标题的数据结构及效果展示如下。  
```  
[  
  {  
    "value": "DataV官网",  
    "url": "https://www.aliyun.com/product/bigdata/datav?spm=5176.28536895.nav-v2-dropdown-menu-0.d_main_8_2_0.2d5b586cgSLMNb"  
  }  
]  
```  
在预览或发布界面，单击组件即可跳转至相应链接。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0127864371/p890366.png)
* 数据源的核心配置项介绍如下。

|    **配置项**    |    **描述**    |
|    ----    |    ----    |
|    **选择数据源**    |    支持接入CSV文件、API、各类数据库等多种类型数据，详情请参见[支持的数据源类型](/zh/datav/datav-7-0/user-guide/add-a-data-source/)。您可使用可视化表格或代码方式编辑数据字段。    |
|    **配置过滤器（可选）**    |    用于自定义过滤代码，实现数据的结构转换、筛选、展示和简单的计算，详情请参见[管理数据过滤器](/zh/datav/datav-7-0/user-guide/manage-filters-1)。    |
|    **配置数据映射**    |    用于将所选数据源中的字段映射至组件对应的字段上，实现数据的实时匹配。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9633269661/p524955.png)图标可配置字段样式。    |
|    **查看响应结果**    |    用于实时展示组件所接入的数据。当组件数据源发生变化时，此处会对应展示最新数据。单击数据响应结果，可查看编写的数据字段代码。单击查看示例，可查看数据源接收的数组类型及代码示例。您可参考示例编写相关字段。其他数据请求配置：**禁止加载态**：勾选后，在组件更新或预览数据看板时，将不呈现组件初始化时的加载内容。**受控模式**：勾选后，组件在初始化状态下不会请求数据。此时仅支持通过蓝图编辑器或全局变量事件发起数据请求。**自动更新请求**：勾选后，平台会根据您设置的轮询时间，动态轮询更新数据；不勾选，则需手动刷新页面，或通过蓝图编辑器和全局变量事件来触发请求更新数据。    |

## **配置**通用标题

单击通用标题组件，即可在右侧面板配置组件的基础样式、全局变量和交互事件等高级配置，以及蓝图交互配置。

### **样式配置**

在**样式**面板，可配置通用标题的文字大小、布局、背景颜色等样式，相关配置项介绍如下。

**说明** 

您也可单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879258.png)图标，通过关键词搜索，快速定位到所需配置项，搜索支持模糊匹配。详情请参见[搜索配置项](/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。

相关配置项介绍如下。

|    **配置项**    |    **描述**    |    **图示**    |
|    ----    |    ----    |    ----    |
|    全局配置    |    定义组件在数据看板中的位置分布、透明程度、交互穿透。不透明度：数值越小，组件越透明。取值范围为0\~1内的数值。交互穿透：开启后，鼠标可穿透该组件，避免看板中组件较多时，该组件会遮挡鼠标与下层组件的交互。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0127864371/p890048.png)    |
|    基础样式配置    |    定义标题内容，以及文本大小、布局、[颜色](/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)、是否溢出省略等样式。开启溢出省略后，溢出的文本将使用省略号填充。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0127864371/p890052.png)    |
|    交互配置    |    设置通用标题的超链接和手势光标。超链接：配置链接后，在预览或发布页，单击通用标题即可跳转至相应链接。是否新开窗口：开启后，在预览或发布页单击通用标题，将在浏览器中新开一个窗口呈现跳转链接的内容；若未开启，则在当前页面呈现链接内容。手势光标：开启后，预览看板时，鼠标悬停至通用标题组件时将显示为手势光标。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0127864371/p890054.png)    |

### **高级配置**

可定义通用标题与其他组件间的交互，以及数据传递关系。相关配置项介绍如下。

|    **配置项**    |    **描述**    |    **图示**    |
|    ----    |    ----    |    ----    |
|    交互事件    |    定义与其他组件间的[交互行为](/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)，实现组件联动。示例使用通用标题控制展示不同维度的销售数据。![19577664-CFE8-4D57-B32D-9804B40A8E43](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0127864371/p890700.gif)单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879478.png)图标，即可定义相关交互事件及交互动作。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0127864371/p890055.png)    |
|    关联全局变量    |    可在组件中关联全局参数，实现组件间的参数传递，进行组件交互。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879477.png)图标，即可开启相应指令，并为该指令关联所需[全局变量](/zh/datav/datav-7-0/user-guide/use-global-variables)。**当点击标题** **时**会抛出回调值，默认抛出数据中的value和url字段值，配置详情请参见[组件交互配置](/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)。    |    |

### **蓝图交互**

可通过[蓝图编辑器](/zh/datav/datav-7-0/user-guide/what-is-blueprint-editor-1)使用可视化连线方式，定义组件间的交互关系及行为逻辑。

#### **操作步骤**

1. 在画布编辑页面，单击顶部菜单栏左侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879479.png)图标，进入蓝图编辑器。
2. 在图层节点列表，鼠标悬停至通用标题组件，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2907643371/p879480.png)图标，添加该组件至主画布。
3. 通过连线方式，按需配置相关组件的蓝图交互效果。  
示例如下。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0127864371/p890701.png)

#### **配置项介绍**

相关交互事件及动作的介绍如下。

**说明** 

您也可在蓝图配置界面右侧，单击相应事件或动作后的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0734883371/p884551.png)图标，查看相关参数详细介绍。

|    **类别**    |    **子类别**    |    **描述**    |
|    ----    |    ----    |    ----    |
|    **事件**    |    **当数据更新时**    |    当组件数据更新时抛出该事件。    |
|    **当数据请求状态变化时**    |    当数据请求状态变化时抛出该事件。状态值包括Void、Loading、Success、Error。    |    |
|    **当点击标题时**    |    单击标题时抛出的事件，同时抛出对应的数据项，数据示例如下。{     "value": "标题",     "url": "https://www.aliyun.com" }    |    |
|    **动作**    |    **导入数据**    |    按组件绘制格式处理数据后，导入组件，重新绘制。无需重新请求服务端数据，数据示例如下。\[   {     "value": "标题",     "url": "https://www.aliyun.com"   } \]    |
|    **请求数据**    |    重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如，通用标题配置的API数据源为https://api.test，传到**请求数据**动作的数据为{ id: '1'}，则最终请求为https://api.test?id=1。    |    |
|    **移动**    |    将组件移动至指定位置，数据示例如下。     {             // 移动方式。绝对定位：to，相对定位：by。默认值：to。         "positionType": "to",       // 指定位置。x坐标，y坐标。       "attr": {         "x": 0,         "y": 0       },       // 动画方式。       "animation": {         "enable": false,         // 动画延时，单位ms。         "animationDuration": 1000,         // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。         "animationEasing": "linear"       }     }    |    |
|    **切换显隐**    |    切换组件为显示或隐藏，数据示例如下。{   "animationType": "fade",   "animationDuration": 1000,   "animationEasing": "linear" }animationType：动画方式。可配置为appear（出现/消失）、fade（渐隐渐现）、slideToUp（飞入/飞出），不配置表示无动画。animationDuration：动画延时，默认为1000ms。animationEasing：动画曲线。可配置为linear（匀速）、easeInOutQuad（平滑）、easeInOutExpo（慢快慢）。    |    |
|    **显示**    |    |    |
|    **隐藏**    |    |    |
|    **更新组件配置**    |    动态更新组件的样式配置。先在组件的**样式**面板中，单击**复制配置到剪贴板**，获取组件的配置数据。根据需要，在蓝图编辑器配置页面的数据处理节点，更改对应样式的字段值。    |    |

## **案例演示**

本案例通过Tab列表的轮播功能实现通用标题的动态展示。

1. 添加组件至画布。

  1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
  2. 选择任一数据看板，单击**编辑**，进入画布编辑器。
  3. 在左侧导航栏的组件库中，依次添加**Tab列表**和**通用标题**两个组件至画布。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5452297571/p1006808.png)
2. 配置蓝图交互。

  1. 单击页面左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7498599661/p528973.png)图标，进入蓝图页面。
  2. 在左侧**图层节点**页签，鼠标悬停至组件，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0127864371/p890747.png)图标，添加组件至主画布。  
  您需依次执行该操作，添加通用标题、Tab列表组件至主画布。
  3. 在左侧**逻辑节点**页签，鼠标悬停至串行数据处理节点，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0127864371/p890747.png)图标，添加组件至主画布。
  4. 按下图连接组件，实现点击Tab列表时，导入相应数据至通用标题。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0127864371/p890766.png)
  5. 单击串行数据处理节点，配置节点的处理方法。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0127864371/p890763.png)  
  ```  
  return [{value:data.content}];  
  ```
3. 单击页面右上角的**预览**，预览展示结果。![F4D7FB80-C7C1-4D59-9ED0-04252549C503](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0127864371/p890774.gif)
4. （可选）如需跳转特定Tab页签，可在串行数据处理节点前加入**条件判断**节点，满足时再执行处理方法；不满足显示默认值。例如：不显示第一个Tab页签内容。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0127864371/p890777.png)

  * 条件判断节点  
  ```  
  return data.id > 1;  
  ```
  * 串行数据处理：满足  
  ```  
  return [{value:data.content}];  
  ```
  * 串行数据处理：不满足  
  ```  
  return [{value: "我是标题数据"}];  
  ```
5. 单击页面右上角的**预览**，预览展示结果。![4EB229AF-1CFD-4806-96A5-32AF54A29784](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0127864371/p890782.gif)