<!DOCTYPE html> 

本文介绍多行文本的使用指南。

## 组件概述

多行文本是一种文字组件，能够展示包含多行文字的内容，方便您获取更多文字信息。同时，该组件支持与其他组件交互、支持换行及添加超链接，您可按需进行格式排版。

### 使用场景

常用于在可视化应用中展示长文本内容，例如，功能介绍、产品说明、备注信息等。

### **效果展示**

* 静态文本  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8774005371/p891643.png)
* 动态文本![622E89BA-3CBC-425F-A7AF-AA2AD504B4F0](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8774005371/p891616.gif)
* 文本添加链接  
![038480D8-8EB2-44C5-B1DD-33D7C5DE14AA](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8774005371/p891709.gif)
* 交互场景![4B2578E8-C7B0-49B9-A23D-C9A9D08D5DEA](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8774005371/p892623.gif)

## **前提条件**

* 已创建数据看板，支持[使用模板创建](/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)、[使用空白画布创建](/zh/datav/datav-7-0/getting-started/use-a-canvas-to-create-a-dashboard#639c36877c6jr)、[使用AI智能生成](/zh/datav/datav-7-0/user-guide/use-ai-to-intelligently-generate-pc-side-kanban)。
* 已准备业务数据，详情请参见[数据源](/zh/datav/datav-7-0/user-guide/data-source/)。

## **添加**多行文本

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面的**数据看板**区域，鼠标悬停至目标看板，单击**编辑**，进入看板的画布编辑页面。
3. 在左侧导航栏的**组件库** \> **信息**列表下，单击**多行文本**组件，添加该组件至画布。

您也可[使用全局搜索](/zh/datav/global-search)添加相关组件。

## **接入业务数据**

添加组件后，您可将已准备的业务数据接入组件进行显示。单击多行文本，在右侧的**数据源**页签，即可选择该组件所要呈现的数据。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8774005371/p891517.png)

* 多行文本接收的数据字段介绍如下。

|    **字段**    |    **说明**    |
|    ----    |    ----    |
|    value    |    组件显示的文本内容，支持部分HTML标签（例如，<a>、<br>）。不为空时会覆盖样式中的配置；为空时会使用**样式** \> **基础样式** \> **段落内容**配置项中的内容。    |    
示例多行文本的数据结构及效果展示如下。  
```  
[  
  {  
    "value": "DataV-Board（数据看板）是DataV系列下的数据看板搭建工具，旨在通过图形化界面帮助不同专业背景的用户快速搭建具备专业水准的数据看板。无论是面对新兴数字孪生场景的创新探索，还是在传统数据场景的持续深挖，DataV-Board 致力于让用户更高效、灵活地完成数据的查看、分析及表达，以数据可视化技术解决数据场景最后一公里的问题。"  
  }  
]  
```  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8774005371/p891551.png)
* 数据源的核心配置项介绍如下。

|    **配置项**    |    **描述**    |
|    ----    |    ----    |
|    **选择数据源**    |    支持接入CSV文件、API、各类数据库等多种类型数据，详情请参见[支持的数据源类型](/zh/datav/datav-7-0/user-guide/add-a-data-source/)。您可使用可视化表格或代码方式编辑数据字段。    |
|    **配置过滤器（可选）**    |    用于自定义过滤代码，实现数据的结构转换、筛选、展示和简单的计算，详情请参见[管理数据过滤器](/zh/datav/datav-7-0/user-guide/manage-filters-1)。    |
|    **配置数据映射**    |    用于将所选数据源中的字段映射至组件对应的字段上，实现数据的实时匹配。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9633269661/p524955.png)图标可配置字段样式。    |
|    **查看响应结果**    |    用于实时展示组件所接入的数据。当组件数据源发生变化时，此处会对应展示最新数据。单击数据响应结果，可查看编写的数据字段代码。单击查看示例，可查看数据源接收的数组类型及代码示例。您可参考示例编写相关字段。其他数据请求配置：**禁止加载态**：勾选后，在组件更新或预览数据看板时，将不呈现组件初始化时的加载内容。**受控模式**：勾选后，组件在初始化状态下不会请求数据。此时仅支持通过蓝图编辑器或全局变量事件发起数据请求。**自动更新请求**：勾选后，平台会根据您设置的轮询时间，动态轮询更新数据；不勾选，则需手动刷新页面，或通过蓝图编辑器和全局变量事件来触发请求更新数据。    |

## **配置**多行文本

单击多行文本组件，即可在右侧面板配置组件的基础样式、交互事件，以及蓝图交互配置。

### **样式配置**

在**样式**面板，可配置多行文本的文字大小、布局、溢出方式等样式，相关配置项介绍如下。

**说明** 

您也可单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879258.png)图标，通过关键词搜索，快速定位到所需配置项，搜索支持模糊匹配。详情请参见[搜索配置项](/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。

相关配置项介绍如下。

|    **配置项**    |    **描述**    |    **图示**    |
|    ----    |    ----    |    ----    |
|    全局配置    |    定义组件在数据看板中的位置分布、透明程度、交互穿透。不透明度：数值越小，组件越透明。取值范围为0\~1内的数值。交互穿透：开启后，鼠标可穿透该组件，避免看板中组件较多时，该组件会遮挡鼠标与下层组件的交互。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8774005371/p891554.png)    |
|    基础样式配置    |    定义文本的大小、布局、[颜色](/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)等样式。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8774005371/p891555.png)    |
|    交互配置    |    定义文本的溢出方式。当文本内容溢出时，支持使用如下方式处理：滚动：滚动播放文本内容。可设置循环滚动（需设置滚动速率）或定时滚动（需设置滚动时长）。省略号：溢出文本将使用省略号填充。可设置文本的显示行数。**说明** 若文本内容较多，未启用溢出配置，则溢出的文本将被截断，无法查看。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8774005371/p891557.png)    |

### **高级配置**

可定义多行文本与其他组件间的交互。相关配置项介绍如下。

|    **配置项**    |    **描述**    |    **图示**    |
|    ----    |    ----    |    ----    |
|    交互事件    |    定义与其他组件间的[交互行为](/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)，实现组件联动。例如，词云组件内容更新时，相关内容会同步展示至多行文本组件中。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879478.png)图标，即可定义相关交互事件及交互动作。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8774005371/p891564.png)    |

### **蓝图交互**

可通过[蓝图编辑器](/zh/datav/datav-7-0/user-guide/what-is-blueprint-editor-1)使用可视化连线方式，定义组件间的交互关系及行为逻辑。

#### **操作步骤**

1. 在画布编辑页面，单击顶部菜单栏左侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879479.png)图标，进入蓝图编辑器。
2. 在图层节点列表，鼠标悬停至多行文本组件，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2907643371/p879480.png)图标，添加该组件至主画布。
3. 通过连线方式，按需配置相关组件的蓝图交互效果。  
示例如下。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8774005371/p891726.png)

#### **配置项介绍**

相关交互事件及动作的介绍如下。

**说明** 

您也可在蓝图配置界面右侧，单击相应事件或动作后的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0734883371/p884551.png)图标，查看相关参数详细介绍。

|    **类别**    |    **子类别**    |    **描述**    |
|    ----    |    ----    |    ----    |
|    **事件**    |    **当数据更新时**    |    当组件数据更新时抛出该事件。    |
|    **当数据请求状态变化时**    |    当数据请求状态变化时抛出该事件。状态值包括Void、Loading、Success、Error。    |    |
|    **动作**    |    **导入数据**    |    按组件绘制格式处理数据后，导入组件，重新绘制。无需重新请求服务端数据，数据示例如下。\[   {     "value": "文本内容"   } \]    |
|    **请求数据**    |    重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如，多行文本配置的API数据源为https://api.test，传到**请求数据**动作的数据为{ id: '1'}，则最终请求为https://api.test?id=1。    |    |
|    **移动**    |    将组件移动至指定位置，数据示例如下。     {       // 移动方式。绝对定位：to，相对定位：by。默认值：to。         "positionType": "to",       // 指定位置。x坐标，y坐标。       "attr": {         "x": 0,         "y": 0       },       // 动画方式。       "animation": {         "enable": false,         // 动画延时，单位ms。         "animationDuration": 1000,         // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。         "animationEasing": "linear"       }     }    |    |
|    **切换显隐**    |    切换组件为显示或隐藏，数据示例如下。{   "animationType": "fade",   "animationDuration": 1000,   "animationEasing": "linear" }animationType：动画方式。可配置为appear（出现/消失）、fade（渐隐渐现）、slideToUp（飞入/飞出），不配置表示无动画。animationDuration：动画延时，默认为1000ms。animationEasing：动画曲线。可配置为linear（匀速）、easeInOutQuad（平滑）、easeInOutExpo（慢快慢）。    |    |
|    **显示**    |    |    |
|    **隐藏**    |    |    |
|    **更新组件配置**    |    动态更新组件的样式配置。先在组件的**样式**面板中，单击**复制配置到剪贴板**，获取组件的配置数据。根据需要，在蓝图编辑器配置页面的数据处理节点，更改对应样式的字段值。    |    |

## **案例演示**

本案例将获取词云组件中的内容并展示至多行文本组件中。

1. 添加组件至画布。

  1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
  2. 选择任一数据看板，单击**编辑**，进入画布编辑器。
  3. 在左侧导航栏，按下图步骤依次添加**词云**和**多行文本**组件至画布。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5558647571/p1005502.png)
2. 配置多行文本的滚动样式。  
在画布中单击多行文本组件，在右侧样式面板的**交互**页签，配置溢出方式为匀速滚动，且滚动速率为`0.05px/s`。
3. 配置蓝图交互。  
使用蓝图交互，将词云中获取的文本通过多行文本组件滚动展示。

  1. 单击页面左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7498599661/p528973.png)图标，进入蓝图页面。
  2. 在左侧**图层节点**页签，鼠标悬停至组件，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0127864371/p890747.png)图标，添加组件至主画布。  
  您需依次执行该操作，添加多行文本、词云组件至主画布。
  3. 在左侧**逻辑节点**页签，鼠标悬停至串行数据处理节点，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0127864371/p890747.png)图标，添加组件至主画布。
  4. 按下图连接组件，实现词云数据更新时，导入相应数据至多行文本。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8774005371/p891598.png)
  5. 单击串行数据处理节点，配置节点的处理方法。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8774005371/p891602.png)  
  ```  
  return [{"value": data.map(item => item.name).join('，')}];  //依次获取词云组件中的name字段信息。  
  ```
4. 单击页面右上角的**预览**，预览展示结果。  
![4B2578E8-C7B0-49B9-A23D-C9A9D08D5DEA](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8774005371/p892622.gif)