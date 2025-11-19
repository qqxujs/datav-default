<!DOCTYPE html> 

本文介绍状态卡片的使用指南。

## 组件概述

状态卡片是一种文字组件，通常以彩色圆点的形式展示某一实体（例如，服务器）的当前状态和相关信息，支持配置多个状态类别。

### 使用场景

常用于在可视化应用中直观地展示多种类别的状态信息。例如，展示一个集群中多台服务器的运行状态。

### **效果展示**

* 横向布局![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3365165371/p894354.png)
* 纵向布局![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3365165371/p894355.png)
* 交互场景![7501E2BF-91B3-4F1E-B08E-1AE6221E5F40](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3365165371/p894794.gif)

## **前提条件**

* 已创建数据看板，支持[使用模板创建](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)、[使用空白画布创建](https://help.aliyun.com/zh/datav/datav-7-0/getting-started/use-a-canvas-to-create-a-dashboard#639c36877c6jr)、[使用AI智能生成](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-ai-to-intelligently-generate-pc-side-kanban)。
* 已准备业务数据，详情请参见[数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/data-source/)。

## **添加**状态卡片

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面的**数据看板**区域，鼠标悬停至目标看板，单击**编辑**，进入看板的画布编辑页面。
3. 在左侧导航栏的**组件库** \> **信息**列表下，单击**状态卡片**组件，添加该组件至画布。

您也可[使用全局搜索](https://help.aliyun.com/zh/datav/global-search)添加相关组件。

## **接入业务数据**

添加组件后，您可将已准备的业务数据接入组件进行显示。单击状态卡片，在右侧的**数据源**页签，即可选择该组件所要呈现的数据。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3365165371/p894287.png)

* 状态卡片接收的数据字段介绍如下。

| **字段** | **说明**                                                                                                                      |
| ---- | ---- |
| name   | 设置状态卡片中每种状态对应的文本内容。                                                                                                         |
| value  | 设置状态卡片的状态类型（即文本前的圆点）。需要与**样式** \> **系列** \> **状态种类** \> **状态类型名**配置项的内容对应，并且使用状态类型中定义的样式进行渲染，若超出**状态类型名**的取值范围，相应状态类型将无法显示。 |  
示例状态卡片的数据结构及效果展示如下。  
```  
[  
  {  
    "name": "运行中",  
    "value": "1"  
  },  
  [  
    "等待中",  
    "2"  
  ],  
  [  
    "运行完成",  
    "3"  
  ],  
  [  
    "运行失败",  
    "4"  
  ]  
]  
```  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3365165371/p894323.png)
* 数据源的核心配置项介绍如下。

| **配置项**   | **描述**                                                                                                                                                                                                                                                                           |
| ---- | ---- |
| 选择数据源     | 支持接入CSV文件、API、各类数据库等多种类型数据，详情请参见[支持的数据源类型](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-a-data-source/)。您可使用可视化表格或代码方式编辑数据字段。                                                                                                                                       |
| 配置过滤器（可选） | 用于自定义过滤代码，实现数据的结构转换、筛选、展示和简单的计算，详情请参见[管理数据过滤器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/manage-filters-1)。                                                                                                                                                          |
| 配置数据映射    | 用于将所选数据源中的字段映射至组件对应的字段上，实现数据的实时匹配。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9633269661/p524955.png)图标可配置字段样式。                                                                                                                                      |
| 查看响应结果    | 用于实时展示组件所接入的数据。当组件数据源发生变化时，此处会对应展示最新数据。单击数据响应结果，可查看编写的数据字段代码。单击查看示例，可查看数据源接收的数组类型及代码示例。您可参考示例编写相关字段。其他数据请求配置：禁止加载态：勾选后，在组件更新或预览数据看板时，将不呈现组件初始化时的加载内容。受控模式：勾选后，组件在初始化状态下不会请求数据。此时仅支持通过蓝图编辑器或全局变量事件发起数据请求。自动更新请求：勾选后，平台会根据您设置的轮询时间，动态轮询更新数据；不勾选，则需手动刷新页面，或通过蓝图编辑器和全局变量事件来触发请求更新数据。 |

## **配置**状态卡片

单击状态卡片组件，即可在右侧面板配置组件的基础样式、交互事件，以及蓝图交互配置。

### **样式配置**

在**样式**面板，可配置状态卡片的布局、文本样式、圆点样式，相关配置项介绍如下。

**说明** 

您也可单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879258.png)图标，通过关键词搜索，快速定位到所需配置项，搜索支持模糊匹配。详情请参见[搜索配置项](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。

相关配置项介绍如下。

| **配置项** | **描述**                                                                                                                                                                                                              | **图示**                                                                                        |
| ---- | ---- | ---- |
| 全局配置    | 定义组件在数据看板中的位置分布、透明程度、交互穿透。不透明度：数值越小，组件越透明。取值范围为0\~1内的数值。交互穿透：开启后，鼠标可穿透该组件，避免看板中组件较多时，该组件会遮挡鼠标与下层组件的交互。                                                                                                              | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3365165371/p894332.png) |
| 基础样式配置  | 定义状态类型的布局（横向/纵向排列），状态文本的字体、[颜色](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)，以及圆点的位置、大小等样式。开启自动排列，平台将按照默认的横向单行进行布局（适用于状态类型较少时使用）；关闭后，您可按需选择横向/纵向布局，并设置每行/每列的状态个数。 | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3365165371/p894340.png) |
| 系列配置    | 定义状态种类及其对应的圆点颜色，即明确总共包含几种状态，以及每种状态所使用的圆点表示形式。**说明** 数据源中的状态类型取值（Value）可看作状态的ID，系列配置中的**状态类型名**用于获取状态ID，显示对应状态。若超出Value的取值范围，相应状态将无法显示。                                                                              | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3365165371/p894344.png) |

### **高级配置**

可定义状态卡片与其他组件间的交互。相关配置项介绍如下。

| **配置项** | **描述**                                                                                                                                                                                                                                                                                                                                                                                                                          | **图示**                                                                                        |
| ---- | ---- | ---- |
| 交互事件    | 定义与其他组件间的[交互行为](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)，实现组件联动。例如，使用轮播列表展示不同地区虚拟机的状态，通过轮播列表与状态卡片交互，实现单击轮播列表的某一行，状态卡片便显示该地区的虚拟机状态。![7501E2BF-91B3-4F1E-B08E-1AE6221E5F40](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3365165371/p894791.gif)单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879478.png)图标，即可定义相关交互事件及交互动作。 | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3365165371/p894357.png) |

### **蓝图交互**

可通过[蓝图编辑器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/what-is-blueprint-editor-1)使用可视化连线方式，定义组件间的交互关系及行为逻辑。

#### **操作步骤**

1. 在画布编辑页面，单击顶部菜单栏左侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879479.png)图标，进入蓝图编辑器。
2. 在图层节点列表，鼠标悬停至状态卡片组件，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2907643371/p879480.png)图标，添加该组件至主画布。
3. 通过连线方式，按需配置相关组件的蓝图交互效果。  
示例如下。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3365165371/p894820.png)

#### **配置项介绍**

相关交互事件及动作的介绍如下。

**说明** 

您也可在蓝图配置界面右侧，单击相应事件或动作后的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0734883371/p884551.png)图标，查看相关参数详细介绍。

| **类别**         | **子类别**                                                                                                                                                                                                                                                                                                                                                                                               | **描述**                                                                                                              |
| ---- | ---- | ---- |
| **事件**         | **当数据更新时**                                                                                                                                                                                                                                                                                                                                                                                            | 当组件数据更新时抛出该事件。                                                                                                      |
| **当数据请求状态变化时** | 当数据请求状态变化时抛出该事件。状态值包括Void、Loading、Success、Error。                                                                                                                                                                                                                                                                                                                                                      |                                                                                                                     |
| **动作**         | **导入数据**                                                                                                                                                                                                                                                                                                                                                                                              | 按组件绘制格式处理数据后，导入组件，重新绘制。无需重新请求服务端数据，数据示例如下。\[   {     "name": "虚拟机已启动",     "value": "1"  //此处与样式面板的状态类型名内容对应   } \] |
| **请求数据**       | 重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如，状态卡片配置的API数据源为https://api.test，传到**请求数据**动作的数据为{ id: '1'}，则最终请求为https://api.test?id=1。                                                                                                                                                                                                                                                                           |                                                                                                                     |
| **移动**         | 将组件移动到指定位置，数据示例如下。    {       // 移动方式。绝对定位：to，相对定位：by。默认值：to。       "positionType": "to",       // 指定位置。x坐标，y坐标。       "attr": {         "x": 0,         "y": 0       },       // 动画方式。       "animation": {         "enable": false,         // 动画延时。         "animationDuration": 1000,         // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。         "animationEasing": "linear"       }     } |                                                                                                                     |
| **切换显隐**       | 切换组件为显示或隐藏，数据示例如下。{   "animationType": "fade",   "animationDuration": 1000,   "animationEasing": "linear" }animationType：动画方式。可配置为appear（出现/消失）、fade（渐隐渐现）、slideToUp（飞入/飞出），不配置表示无动画。animationDuration：动画延时，默认为1000ms。animationEasing：动画曲线。可配置为linear（匀速）、easeInOutQuad（平滑）、easeInOutExpo（慢快慢）。                                                                                                       |                                                                                                                     |
| **显示**         |                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                                                                     |
| **隐藏**         |                                                                                                                                                                                                                                                                                                                                                                                                       |                                                                                                                     |
| **更新组件配置**     | 动态更新组件的样式配置。先在组件的**样式**面板中，单击**复制配置到剪贴板**，获取组件的配置数据。根据需要，在蓝图编辑器配置页面的数据处理节点，更改对应样式的字段值。                                                                                                                                                                                                                                                                                                                |                                                                                                                     |

## **案例演示**

本案例通过轮播列表与状态卡片进行交互，展示不同地区的虚拟机状态。单击轮播列表的某一行后，状态卡片将动态显示该地区对应虚拟机的状态。

1. 添加组件至画布。

  1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
  2. 选择任一数据看板，单击**编辑**，进入画布编辑器。
  3. 在左侧导航栏的组件库中，单击**轮播列表**和**状态卡片**两个组件，添加至画布。
2. 配置轮播列表。

  1. 修改接入数据。  
  单击轮播列表，在数据源面板按下图步骤修改静态数据内容。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3365165371/p894732.png)  
  示例数据如下  
  ```  
  [  
    {  
      "cluster": "华东",  
      "vm": "vm-001",  
      "status": "正常"  
    },  
    {  
      "cluster": "华南",  
      "vm": "vm-002",  
      "status": "未连接"  
    },  
    {  
      "cluster": "华西",  
      "vm": "vm-003",  
      "status": "故障"  
    },  
    {  
      "cluster": "华北",  
      "vm": "vm-004",  
      "status": "正常"  
    }  
  ]  
  ```
  2. 配置组件样式。  
  在样式面板，按下图步骤设置全局样式的表格行数为3，并开启轮播；修改自定义列的标签内容。标签内容如下：

    * 列字段名：依次修改为“cluster”、“vm”、“status”。
    * 列显示名：依次修改为“集群”、“虚拟机”、“状态”。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3365165371/p894749.png)
3. 配置状态卡片。

  1. 修改接入数据。  
  单击状态卡片，在数据源面板按下图步骤修改静态数据内容。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3365165371/p894801.png)  
  示例代码如下  
  ```  
  [  
    {  
      "name": "状态正常",  
      "value": "正常"  
    },  
    [  
      "状态异常",  
      "故障"  
    ],  
    [  
      "虚拟机未连接",  
      "未连接"  
    ]  
  ]  
  ```
  2. 配置组件样式。  
  在样式面板，按下图步骤修改状态卡片的状态种类。保留三种状态，依次为正常（绿色）、故障（红色）、未连接（白色）。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3365165371/p894759.png)
4. 配置蓝图交互。

  1. 单击页面左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7498599661/p528973.png)图标，进入蓝图页面。
  2. 在左侧**图层节点**页签，鼠标悬停至组件，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0127864371/p890747.png)图标，添加组件至主画布。  
  您需依次执行该操作，添加轮播列表、状态卡片组件至主画布。
  3. 在左侧**逻辑节点**页签，鼠标悬停至串行数据处理节点，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0127864371/p890747.png)图标，添加组件至主画布。
  4. 按下图连接组件，实现点击轮播列表某行时，导入该行的相应状态至状态卡片。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3365165371/p894768.png)
  5. 单击串行数据处理节点，配置节点的处理方法。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3365165371/p894777.png)  
  单击轮播列表指定行，状态卡片将导入该行的虚拟机名称及状态信息。示例代码如下。  
  ```  
  return [  
    {  
      "name": data.vm,  
      "value": data.status,  
    }  
  ]  
  ```
5. 单击页面右上角的**预览**，预览展示结果。![7501E2BF-91B3-4F1E-B08E-1AE6221E5F40](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3365165371/p894790.gif)