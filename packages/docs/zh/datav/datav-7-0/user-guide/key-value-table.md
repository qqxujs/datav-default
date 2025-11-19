<!DOCTYPE html> 

本文介绍键值表格的使用指南。

## 组件概述

键值表格是一种表格组件，以键和值的形式自定义表格内容，通常第一列表示键（Key），第二列表示对应值（Value）。它能够将数据信息以表格的形式清晰地展示在可视化应用中，便于您快速查找和理解信息。

**说明** 

键值表格仅支持展示两列数据，且无法新增列。

### 使用场景

该组件适用于显示简单的键值对关系，仅包含两列（左侧为键，右侧为值）。例如，用户注册信息表。

### **效果展示**

示例：用户注册信息表使用键值表呈现。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4360679371/p915790.png)

## **前提条件**

* 已创建数据看板，支持[使用模板创建](/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)、[使用空白画布创建](/zh/datav/datav-7-0/getting-started/use-a-canvas-to-create-a-dashboard#639c36877c6jr)、[使用AI智能生成](/zh/datav/datav-7-0/user-guide/use-ai-to-intelligently-generate-pc-side-kanban)。
* 已准备业务数据，详情请参见[数据源](/zh/datav/datav-7-0/user-guide/data-source/)。

## **添加**键值表格

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面的**数据看板**区域，鼠标悬停至目标看板，单击**编辑**，进入看板的画布编辑页面。
3. 在左侧导航栏的**组件库** \> **表格**列表下，单击**键值表格**组件，添加该组件至画布。

您也可[使用全局搜索](/zh/datav/global-search)添加相关组件。

## **接入业务数据**

添加组件后，您可将已准备的业务数据接入组件进行显示。单击键值表格，在右侧的**数据源**页签，即可选择该组件所要呈现的数据。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4360679371/p915745.png)

* 键值表格接收的数据字段介绍如下。

|    **字段**    |    **描述**    |    说明    |
|    ----    |    ----    |    ----    |
|    label    |    （可选） 第一列的表头内容。    |    仅当**样式** \> **表头** \> **首行为表头**开启后，label和value字段才表示表头。    |
|    value    |    （可选） 第二列的表头内容。    |    |
|    自定义字段    |    定义表的主体数据。格式为{"第一列的Key":"第二列的Value值",……}，数据可自定义，并且以实际数据顺序分布在表格相应行列中。    |    键值表格仅支持两列，且无法新增列。您可通过配置自定义字段来增加键值表格的行数。    |    
示例键值表格的数据结构如下。  
```  
[  
  {  
    "label": "支持两种数据格式",  
    "value": "这是第一种"  
  },  
  {  
    "key0": "value0",  
    "key1": "value1",  
    "key2": "value2",  
    "key3": "value3"  
  }  
]  
```
* 数据源的核心配置项介绍如下。

|    **配置项**    |    **描述**    |
|    ----    |    ----    |
|    选择数据源    |    支持接入CSV文件、API、各类数据库等多种类型数据，详情请参见[支持的数据源类型](/zh/datav/datav-7-0/user-guide/add-a-data-source/)。您可使用可视化表格或代码方式编辑数据字段。    |
|    配置过滤器（可选）    |    用于自定义过滤代码，实现数据的结构转换、筛选、展示和简单的计算，详情请参见[管理数据过滤器](/zh/datav/datav-7-0/user-guide/manage-filters-1)。    |
|    配置数据映射    |    用于将所选数据源中的字段映射至组件对应的字段上，实现数据的实时匹配。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9633269661/p524955.png)图标可配置字段样式。    |
|    查看响应结果    |    用于实时展示组件所接入的数据。当组件数据源发生变化时，此处会对应展示最新数据。单击数据响应结果，可查看编写的数据字段代码。单击查看示例，可查看数据源接收的数组类型及代码示例。您可参考示例编写相关字段。其他数据请求配置：禁止加载态：勾选后，在组件更新或预览数据看板时，将不呈现组件初始化时的加载内容。受控模式：勾选后，组件在初始化状态下不会请求数据。此时仅支持通过蓝图编辑器或全局变量事件发起数据请求。自动更新请求：勾选后，平台会根据您设置的轮询时间，动态轮询更新数据；不勾选，则需手动刷新页面，或通过蓝图编辑器和全局变量事件来触发请求更新数据。    |

## **配置**键值表格

单击键值表格组件，即可在右侧面板配置组件的基础样式、交互事件等高级配置，以及蓝图交互配置。

### **样式配置**

在**样式**面板，可配置键值表格的字体、颜色、轮播动画等样式，相关配置项介绍如下。

**说明** 

您也可单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879258.png)图标，通过关键词搜索，快速定位到所需配置项，搜索支持模糊匹配。详情请参见[搜索配置项](/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。

|    **配置项**    |    **描述**    |    **图示**    |
|    ----    |    ----    |    ----    |
|    全局配置    |    定义组件在数据看板中的位置分布、透明程度、交互穿透。不透明度：数值越小，组件越透明。取值范围为0\~1内的数值。交互穿透：开启后，鼠标可穿透该组件，避免看板中组件较多时，该组件会遮挡鼠标与下层组件的交互。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4360679371/p915521.png)    |
|    表格及单元格整体样式配置    |    定义表格的自适应效果、边框线条的粗细及[颜色](/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)、字体样式，以及单元格间距大小。**自适应**：开启后，平台将根据组件大小自动调整表格大小，以避免表格大小不合适，显示不全或尺寸较小。**边框线条粗细**：边框线的粗细设置为**0**时，表示无边框。**文本字体**：请选择您的系统中已添加的[字体](/zh/datav/datav-7-0/user-guide/font-library)。若所选字体在系统中未添加，则标题将会显示为默认字体。**单元格间距**：单元格中的文本与单元格上下左右边界的距离，取值范围为0\~50，单位为px。**说明** 当**自适应**配置项开启，且表格不溢出时，**上下间距**仅对表头生效，其余行会自适应高度。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4360679371/p915533.png)    |
|    表头配置    |    定义表头的字体样式（大小、粗细等）、背景颜色等。**首行为表头**配置项开启后，平台会将首行设置为表头；关闭后，键值表格将没有表头。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4360679371/p915531.png)    |
|    列样式配置    |    定义键值表格两列的宽度占比，列之间的分割线，以及每列的文本样式（字体大小、颜色、粗细等）、背景颜色和对齐方式。**宽度百分比%**：表示第一列占键值表格宽度的比例。例如，配置为60，表示第一列占60%，第二列占40%。**分割线线条粗细**：配置为**0**，表示两列之间无分割线。**列背景颜色**：仅当**行样式配置**中**是否区分奇偶行**配置项关闭，自定义的列背景色才会生效。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4360679371/p915535.png)    |
|    行样式配置    |    定义键值表格行之间的分割线，以及奇偶行样式。**分割线线条粗细**：配置为**0**，表示两行之间无分割线。**是否区分奇偶行：**开启后，您可按需分别定义奇数行和偶数行的背景颜色。关闭后，将不区分奇偶行。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4360679371/p915537.png)    |

### **高级配置**

可定义键值表格与其他组件间的交互，相关配置项介绍如下。

|    **配置项**    |    **描述**    |    **图示**    |
|    ----    |    ----    |    ----    |
|    交互事件    |    定义与其他组件间的[交互行为](/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)，实现组件联动。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879478.png)图标，即可定义相关交互事件及交互动作。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4360679371/p915546.png)    |

### **蓝图交互**

可通过[蓝图编辑器](/zh/datav/datav-7-0/user-guide/what-is-blueprint-editor-1)使用可视化连线方式，定义组件间的交互关系及行为逻辑。

#### **操作步骤**

1. 在画布编辑页面，单击顶部菜单栏左侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879479.png)图标，进入蓝图编辑器。
2. 在图层节点列表，鼠标悬停至键值表格组件，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2907643371/p879480.png)图标，添加该组件至主画布。
3. 通过连线方式，按需配置相关组件的蓝图交互效果。  
示例如下。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4360679371/p915755.png)

#### **配置项介绍**

相关交互事件及动作的介绍如下。

**说明** 

您也可在蓝图配置界面右侧，单击相应事件或动作后的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0734883371/p884551.png)图标，查看相关参数详细介绍。

|    **类别**    |    **子类别**    |    **描述**    |
|    ----    |    ----    |    ----    |
|    **事件**    |    **当数据更新时**    |    当组件数据更新时抛出该事件。    |
|    **当数据请求状态变化时**    |    当数据请求状态变化时抛出该事件。状态值包括Void、Loading、Success、Error。    |    |
|    **动作**    |    **导入数据**    |    按组件绘制格式处理数据后，导入组件，重新绘制。无需重新请求服务端数据，数据示例如下。    |
|    **请求数据**    |    重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如，键值表格配置的API数据源为https://api.test，传到**请求数据**动作的数据为{ id: '1'}，则最终请求为https://api.test?id=1。    |    |
|    **移动**    |    将组件移动到指定位置，数据示例如下。{    // 移动方式。绝对定位：to，相对定位：by。默认值：to。     "positionType": "to",   // 指定位置。x坐标，y坐标。   "attr": {    "x": 0,    "y": 0    },   // 动画方式。   "animation": {     "enable": false,     // 动画延时。    "animationDuration": 1000,     // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。    "animationEasing": "linear"   } }    |    |
|    **切换显隐**    |    切换组件为显示或隐藏，数据示例如下。{   "animationType": "fade",   "animationDuration": 1000,   "animationEasing": "linear" }animationType：动画方式。可配置为appear（出现/消失）、fade（渐隐渐现）、slideToUp（飞入/飞出），不配置表示无动画。animationDuration：动画延时，默认为1000ms。animationEasing：动画曲线。可配置为linear（匀速）、easeInOutQuad（平滑）、easeInOutExpo（慢快慢）。    |    |
|    **显示**    |    |    |
|    **隐藏**    |    |    |
|    **更新组件配置**    |    动态更新组件的样式配置。先在组件的**样式**面板中，单击**复制配置到剪贴板**，获取组件的配置数据。根据需要，在蓝图编辑器配置页面的数据处理节点，更改对应样式的字段值。    |    |