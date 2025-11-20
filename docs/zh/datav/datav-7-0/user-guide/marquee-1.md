<!DOCTYPE html> 

本文为您介绍跑马灯的使用详情。

## 组件概述

跑马灯是一种文字组件，能够通过从右向左动态滚动的方式将组件中的溢出文本展示在可视化应用中。

**说明** 

若文字长度小于组件长度，则该组件内容不会滚动呈现。

### 使用场景

常用于在可视化应用中展示重要文字信息，使重要信息更加显眼，吸引用户注意。例如，提醒通知、弹幕评论等。

### **效果展示**

* 单行文本![C70EC01B-B4EE-4E9C-ADDF-B349673960BA](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1747836371/p900877.gif)
* 多行文本![265595BC-D732-4AB0-A682-C37F5103868E](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1747836371/p900875.gif)

## **前提条件**

* 已创建数据看板，支持[使用模板创建](/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)、[使用空白画布创建](/zh/datav/datav-7-0/getting-started/use-a-canvas-to-create-a-dashboard#639c36877c6jr)、[使用AI智能生成](/zh/datav/datav-7-0/user-guide/use-ai-to-intelligently-generate-pc-side-kanban)。
* 已准备业务数据，详情请参见[数据源](/zh/datav/datav-7-0/user-guide/data-source/)。

## **添加**跑马灯

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面的**数据看板**区域，鼠标悬停至目标看板，单击**编辑**，进入看板的画布编辑页面。
3. 在左侧导航栏的**组件库** \> **信息**列表下，单击**跑马灯**组件，添加该组件至画布。

您也可[使用全局搜索](/zh/datav/global-search)添加相关组件。

## **接入业务数据**

添加组件后，您可将已准备的业务数据接入组件进行显示。单击跑马灯，在右侧的**数据源**页签，即可选择该组件所要呈现的数据。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1747836371/p900669.png)

* 跑马灯接收的数据字段介绍如下。

|    **字段**    |    **说明**    |
|    ----    |    ----    |
|    value    |    组件显示的动态文本内容。仅支持读取一个Value值进行展示，如有多个Value，默认读取第一个Value。支持使用<br>标签换行。    |    
示例跑马灯的数据结构及效果展示如下。  
```  
[  
  {  
    "value": "DataV-Board是专业的数据看板搭建工具。<br>您可使用DataV-Board，创造属于您的大屏！"  
  }  
]  
```  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1747836371/p900838.png)
* 数据源的核心配置项介绍如下。

|    **配置项**    |    **描述**    |
|    ----    |    ----    |
|    选择数据源    |    支持接入CSV文件、API、各类数据库等多种类型数据，详情请参见[支持的数据源类型](/zh/datav/datav-7-0/user-guide/add-a-data-source/)。您可使用可视化表格或代码方式编辑数据字段。    |
|    配置过滤器（可选）    |    用于自定义过滤代码，实现数据的结构转换、筛选、展示和简单的计算，详情请参见[管理数据过滤器](/zh/datav/datav-7-0/user-guide/filter-configuration-and-application)。    |
|    配置数据映射    |    用于将所选数据源中的字段映射至组件对应的字段上，实现数据的实时匹配。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9633269661/p524955.png)图标可配置字段样式。    |
|    查看响应结果    |    用于实时展示组件所接入的数据。当组件数据源发生变化时，此处会对应展示最新数据。单击数据响应结果，可查看编写的数据字段代码。单击查看示例，可查看数据源接收的数组类型及代码示例。您可参考示例编写相关字段。其他数据请求配置：禁止加载态：勾选后，在组件更新或预览数据看板时，将不呈现组件初始化时的加载内容。受控模式：勾选后，组件在初始化状态下不会请求数据。此时仅支持通过蓝图编辑器或全局变量事件发起数据请求。自动更新请求：勾选后，平台会根据您设置的轮询时间，动态轮询更新数据；不勾选，则需手动刷新页面，或通过蓝图编辑器和全局变量事件来触发请求更新数据。    |

## **配置**跑马灯

单击跑马灯组件，即可在右侧面板配置组件的基础样式、交互事件，以及蓝图交互配置。

### **样式配置**

在**样式**面板，可配置跑马灯的文字大小、布局、动画时长等样式，相关配置项介绍如下。

**说明** 

您也可单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879258.png)图标，通过关键词搜索，快速定位到所需配置项，搜索支持模糊匹配。详情请参见[搜索配置项](/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。

相关配置项介绍如下。

|    **配置项**    |    **描述**    |    **图示**    |
|    ----    |    ----    |    ----    |
|    全局配置    |    定义组件在数据看板中的位置分布、透明程度、交互穿透。不透明度：数值越小，组件越透明。取值范围为0\~1内的数值。交互穿透：开启后，鼠标可穿透该组件，避免看板中组件较多时，该组件会遮挡鼠标与下层组件的交互。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1747836371/p900892.png)    |
|    基础样式配置    |    定义组件文本的大小、字体、[颜色](/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)，以及文字阴影等样式。**说明** 文字阴影可叠加，但不能超过3个，过度使用可能会造成平台性能压力。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1747836371/p900899.png)    |
|    动画配置    |    定义组件是否轮播，开启轮播后，组件内容才会以动画样式呈现。动画播放速率及时长配置如下：定速播放：开启后，系统会按照设定的速度播放跑马灯动画，需设置动画间隔时间；关闭后，可设置每次播放动画所需的时长。动画间隔：每播放100帧动画所需的时间，单位为ms。仅当**定速播放**配置项开启后有效。动画时间：动画每播放一次所需的时间，单位为ms。仅当**定速播放**配置项关闭后有效。停留时间：可设置动画播放前后，组件文本静态显示的时长，单位为ms。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1747836371/p900908.png)    |

### **高级配置**

可定义跑马灯与其他组件间的交互。相关配置项介绍如下。

|    **配置项**    |    **描述**    |    **图示**    |
|    ----    |    ----    |    ----    |
|    交互事件    |    定义与其他组件间的[交互行为](/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)，实现组件联动。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879478.png)图标，即可定义相关交互事件及交互动作。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1747836371/p901032.png)    |

### **蓝图交互**

可通过[蓝图编辑器](/zh/datav/datav-7-0/user-guide/what-is-blueprint-editor-1)使用可视化连线方式，定义组件间的交互关系及行为逻辑。

#### **操作步骤**

1. 在画布编辑页面，单击顶部菜单栏左侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879479.png)图标，进入蓝图编辑器。
2. 在图层节点列表，鼠标悬停至跑马灯组件，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2907643371/p879480.png)图标，添加该组件至主画布。
3. 通过连线方式，按需配置相关组件的蓝图交互效果。  
示例如下。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1747836371/p901057.png)

#### **配置项介绍**

相关交互事件及动作的介绍如下。

**说明** 

您也可在蓝图配置界面右侧，单击相应事件或动作后的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0734883371/p884551.png)图标，查看相关参数详细介绍。

|    **类别**    |    **子类别**    |    **描述**    |
|    ----    |    ----    |    ----    |
|    **事件**    |    **当数据更新时**    |    当组件数据更新时抛出该事件。    |
|    **当数据请求状态变化时**    |    当数据请求状态变化时抛出该事件。状态值包括Void、Loading、Success、Error。    |    |
|    **动作**    |    **导入数据**    |    按组件绘制格式处理数据后，导入组件，重新绘制。无需重新请求服务端数据，数据示例如下。\[   {     "value": "文本内容"   } \]    |
|    **请求数据**    |    重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如，跑马灯配置的API数据源为https://api.test，传到**请求数据**动作的数据为{ id: '1'}，则最终请求为https://api.test?id=1。    |    |
|    **移动**    |    将组件移动到指定位置，数据示例如下。    {       // 移动方式。绝对定位：to，相对定位：by。默认值：to。       "positionType": "to",       // 指定位置。x坐标，y坐标。       "attr": {         "x": 0,         "y": 0       },       // 动画方式。       "animation": {         "enable": false,         // 动画延时。         "animationDuration": 1000,         // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。         "animationEasing": "linear"       }     }    |    |
|    **切换显隐**    |    切换组件为显示或隐藏，数据示例如下。{   "animationType": "fade",   "animationDuration": 1000,   "animationEasing": "linear" }animationType：动画方式。可配置为appear（出现/消失）、fade（渐隐渐现）、slideToUp（飞入/飞出），不配置表示无动画。animationDuration：动画延时，默认为1000ms。animationEasing：动画曲线。可配置为linear（匀速）、easeInOutQuad（平滑）、easeInOutExpo（慢快慢）。    |    |
|    **显示**    |    |    |
|    **隐藏**    |    |    |
|    **更新组件配置**    |    动态更新组件的样式配置。先在组件的**样式**面板中，单击**复制配置到剪贴板**，获取组件的配置数据。根据需要，在蓝图编辑器配置页面的数据处理节点，更改对应样式的字段值。    |    |