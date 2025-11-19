<!DOCTYPE html> 

本文为您介绍输入框的使用详情。

## 组件概述

输入框是一种控件组件，由内容输入区域和按键组成。您可在输入区域中输入所需内容，随后点击按键，将输入内容提交至后端进行处理。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2199846371/p902043.png)

### 使用场景

常用于在可视化应用中作为输入表单使用，帮助您快速、准确地输入或检索所需信息。例如，注册登录校验、商品搜索界面等。

### **效果展示**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2199846371/p902076.png)

## **前提条件**

* 已创建数据看板，支持[使用模板创建](/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)、[使用空白画布创建](/zh/datav/datav-7-0/getting-started/use-a-canvas-to-create-a-dashboard#639c36877c6jr)、[使用AI智能生成](/zh/datav/datav-7-0/user-guide/use-ai-to-intelligently-generate-pc-side-kanban)。
* 已准备业务数据，详情请参见[数据源](/zh/datav/datav-7-0/user-guide/data-source/)。

## **添加**输入框

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面的**数据看板**区域，鼠标悬停至目标看板，单击**编辑**，进入看板的画布编辑页面。
3. 在左侧导航栏的**组件库** \> **信息**列表下，单击**输入框**组件，添加该组件至画布。

您也可[使用全局搜索](/zh/datav/global-search)添加相关组件。

## **接入业务数据**

添加组件后，您可将已准备的业务数据接入组件进行显示。单击输入框，在右侧的**数据源**页签，即可选择该组件所要呈现的数据。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2199846371/p901295.png)

* 输入框接收的数据字段介绍如下。

|    **字段**    |    **说明**    |
|    ----    |    ----    |
|    value    |    输入框的内容输入区域默认显示的内容。不为空时会覆盖样式中的配置；为空时会使用**样式** \> **输入框** \> **提示文字**配置项中的内容。    |    
示例输入框的数据结构及效果展示如下。  
```  
[  
  {  
    "value": "请输入您的内容……"  
  }  
]  
```  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2199846371/p902062.png)
* 数据源的核心配置项介绍如下。

|    **配置项**    |    **描述**    |
|    ----    |    ----    |
|    选择数据源    |    支持接入CSV文件、API、各类数据库等多种类型数据，详情请参见[支持的数据源类型](/zh/datav/datav-7-0/user-guide/add-a-data-source/)。您可使用可视化表格或代码方式编辑数据字段。    |
|    配置过滤器（可选）    |    用于自定义过滤代码，实现数据的结构转换、筛选、展示和简单的计算，详情请参见[管理数据过滤器](/zh/datav/datav-7-0/user-guide/manage-filters-1)。    |
|    配置数据映射    |    用于将所选数据源中的字段映射至组件对应的字段上，实现数据的实时匹配。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9633269661/p524955.png)图标可配置字段样式。    |
|    查看响应结果    |    用于实时展示组件所接入的数据。当组件数据源发生变化时，此处会对应展示最新数据。单击数据响应结果，可查看编写的数据字段代码。单击查看示例，可查看数据源接收的数组类型及代码示例。您可参考示例编写相关字段。其他数据请求配置：禁止加载态：勾选后，在组件更新或预览数据看板时，将不呈现组件初始化时的加载内容。受控模式：勾选后，组件在初始化状态下不会请求数据。此时仅支持通过蓝图编辑器或全局变量事件发起数据请求。自动更新请求：勾选后，平台会根据您设置的轮询时间，动态轮询更新数据；不勾选，则需手动刷新页面，或通过蓝图编辑器和全局变量事件来触发请求更新数据。    |

## **配置**输入框

单击输入框组件，即可在右侧面板配置组件的基础样式、全局变量和交互事件等高级配置，以及蓝图交互配置。

### **样式配置**

在**样式**面板，可配置输入框的背景颜色、提示文字、边框等样式，相关配置项介绍如下。

**说明** 

您也可单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879258.png)图标，通过关键词搜索，快速定位到所需配置项，搜索支持模糊匹配。详情请参见[搜索配置项](/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。

相关配置项介绍如下。

|    **配置项**    |    **描述**    |    **图示**    |
|    ----    |    ----    |    ----    |
|    全局配置    |    定义组件在数据看板中的位置分布、透明程度、交互穿透。不透明度：数值越小，组件越透明。取值范围为0\~1内的数值。交互穿透：开启后，鼠标可穿透该组件，避免看板中组件较多时，该组件会遮挡鼠标与下层组件的交互。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2199846371/p901334.png)    |
|    输入框配置    |    定义输入框的背景颜色、边框样式，以及文本内容、文本距离边框的边距大小和文本样式。相关说明如下：边距：文本距离左右边框的距离大小。提示文字：输入框显示的提示文本内容，也可在数据源中进行配置。**说明** 数据源中的配置内容优先级高于当前配置项的内容。若数据源内容为空，则会采用当前配置内容。文本样式：可设置文本的字体、粗细、字号大小、[颜色](/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)及字体样式。字体：请选择您系统中已安装的字体。若系统中未安装字体，则文本会显示为默认字体。更多字体介绍，请参见[字体库](/zh/datav/datav-7-0/user-guide/font-library)。字体样式包括：Normal：正常样式。Italic：倾斜样式。Oblique：用于将无法显示为斜体的文字设置为倾斜样式。例如，部分字体可能没有斜体样式，则可通过Oblique实现文字的倾斜。边框样式：可设置边框的线条类型、颜色、粗细及角度。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2199846371/p901345.png)    |
|    按键配置    |    定义组件的按键类型为文字或图标，以及不同状态下按键的显示样式。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2199846371/p901732.png)文字按键：需配置文字内容、按键框宽度、边框的线条、颜色、粗细及圆角等样式，以及文字的字体、字号、颜色、字体样式等内容。**重要** 按键宽度设置过小可能导致按键的文本溢出。字体：请选择您系统中已安装的字体。若系统中未安装字体，则文本会显示为默认字体。更多字体介绍，请参见[字体库](/zh/datav/datav-7-0/user-guide/font-library)。字体样式包括：Normal：正常样式。Italic：倾斜样式。Oblique：用于将无法显示为斜体的文字设置为倾斜样式。例如，部分字体可能没有斜体样式，则可通过Oblique实现文字的倾斜。图标按键：需配置图标颜色及图标大小等样式。按键显示样式包括：普通样式：按键默认呈现的样式。点击样式：鼠标点击按键时所呈现的样式。悬浮样式：鼠标悬浮至按键时所呈现的样式。**说明** 不同样式下的按键配置，可参考上述文字按键/图标按键配置详情。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2199846371/p901346.png)    |

### **高级配置**

可定义输入框与其他组件间的交互。相关配置项介绍如下。

|    **配置项**    |    **描述**    |    **图示**    |
|    ----    |    ----    |    ----    |
|    交互事件    |    定义与其他组件间的[交互行为](/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)，实现组件联动。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879478.png)图标，即可定义相关交互事件及交互动作。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2199846371/p901372.png)    |
|    关联全局变量    |    可在组件中关联全局参数，实现组件间的参数传递，进行组件交互。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879477.png)图标，即可开启相应指令，并为该指令关联所需[全局变量](/zh/datav/datav-7-0/user-guide/use-global-variables)。通过改变输入框的文本内容或单击组件按键，触发数据请求，抛出数据源面板中配置的value值，配置详情请参见[组件交互配置](/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)。    |    |

### **蓝图交互**

可通过[蓝图编辑器](/zh/datav/datav-7-0/user-guide/what-is-blueprint-editor-1)使用可视化连线方式，定义组件间的交互关系及行为逻辑。

#### **操作步骤**

1. 在画布编辑页面，单击顶部菜单栏左侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879479.png)图标，进入蓝图编辑器。
2. 在图层节点列表，鼠标悬停至输入框组件，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2907643371/p879480.png)图标，添加该组件至主画布。
3. 通过连线方式，按需配置相关组件的蓝图交互效果。  
示例如下。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2199846371/p901925.png)

#### **配置项介绍**

相关交互事件及动作的介绍如下。

**说明** 

您也可在蓝图配置界面右侧，单击相应事件或动作后的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0734883371/p884551.png)图标，查看相关参数详细介绍。

|    **类别**    |    **子类别**    |    **描述**    |
|    ----    |    ----    |    ----    |
|    **事件**    |    **当数据更新时**    |    当组件数据更新时抛出该事件。    |
|    **当数据请求状态变化时**    |    当数据请求状态变化时抛出该事件。状态值包括Void、Loading、Success、Error。    |    |
|    **当前值变化时**    |    当前值发生变化时抛出该事件，同时抛出该值对应的数据项，数据示例如下。{   "value": "输入框内容" }    |    |
|    **当按钮点击时**    |    当按钮被点击时抛出该事件，同时抛出该值对应的数据项，数据示例如下。{   "value": "输入框内容" }    |    |
|    **动作**    |    **导入数据**    |    按组件绘制格式处理数据后，导入组件，重新绘制。无需重新请求服务端数据，数据示例如下。\[   {     "value": "输入框内容"   } \]    |
|    **请求数据**    |    重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如，输入框配置的API数据源为https://api.test，传到**请求数据**动作的数据为{ id: '1'}，则最终请求为https://api.test?id=1。    |    |
|    **获取当前输入框值**    |    获取当前输入框的值。    |    |
|    **清空组件到默认值**    |    还原到组件的默认值。    |    |
|    **移动**    |    将组件移动到指定位置，数据示例如下。    {       // 移动方式。绝对定位：to，相对定位：by。默认值：to。       "positionType": "to",       // 指定位置。x坐标，y坐标。       "attr": {         "x": 0,         "y": 0       },       // 动画方式。       "animation": {         "enable": false,         // 动画延时。         "animationDuration": 1000,         // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。         "animationEasing": "linear"       }     }    |    |
|    **切换显隐**    |    切换组件为显示或隐藏，数据示例如下。{   "animationType": "fade",   "animationDuration": 1000,   "animationEasing": "linear" }animationType：动画方式。可配置为appear（出现/消失）、fade（渐隐渐现）、slideToUp（飞入/飞出），不配置表示无动画。animationDuration：动画延时，默认为1000ms。animationEasing：动画曲线。可配置为linear（匀速）、easeInOutQuad（平滑）、easeInOutExpo（慢快慢）。    |    |
|    **显示**    |    |    |
|    **隐藏**    |    |    |
|    **更新组件配置**    |    动态更新组件的样式配置。先在组件的**样式**面板中，单击**复制配置到剪贴板**，获取组件的配置数据。根据需要，在蓝图编辑器配置页面的数据处理节点，更改对应样式的字段值。    |    |