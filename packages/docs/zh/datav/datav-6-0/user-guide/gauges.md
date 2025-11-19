# 仪表盘 %{#289075}% 

本文介绍仪表盘的图表样式和配置面板的功能。

**重要** 

在画布编辑器中添加BI分析组件时，图层栏内会自动在当前BI组件上方对应生成一个分析器，且需要提前创建数据集以供BI分析组件选择并配置使用，创建数据集和分析器交互使用说明详情，请参见[添加数据集](https://help.aliyun.com/document%5Fdetail/215456.html#task-2060897)和[BI分析器交互使用说明](/zh/datav/datav-6-0/user-guide/bi-analyzer-interaction-instructions#concept-2114138)。

## **图表样式**

仪表盘是一种拟物化的图表，刻度表示度量，指针表示维度，指针角度表示数值。仪表盘图表就像汽车的速度表一样，有一个圆形的表盘及相应的刻度，有一个指针指向当前数值，以直观的表现出某个指标的进度或实际情况。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7102636761/p561636.png)

## 配置面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7102636761/p561638.png)
* **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
* **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
* **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
* **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。  
  * 手动输入角度值，控制组件的旋转角度。
  * 拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
  * 单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
  * 单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
* **不透明度**：取值范围为0\~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
* **图形**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7102636761/p561639.png)

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **图表边距**    |    单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标，控制图表边距的显隐。打开开关后，可配置仪表盘区域与组件上下左右四个边界之间的距离，单位默认px。    |
|    **展示形式**    |    仪表盘展示形式的样式，可选**圆环**和**米轨**。    |
|    **米轨参数**    |    仪表盘米轨样式的参数配置，包括米轨的数量值和每个米轨之间的间隔，仅在**展示形式**为**米轨**时可配置。    |
|    **背景颜色**    |    仪表盘的背景颜色，当背景色为透明时，无法体现出米轨的特性。仅在**展示形式**为**米轨**时可配置。    |
|    **环形半径**    |    仪表盘米轨环样式中的内环半径值和外环半径的值，数值越大半径越大，单位%。    |
|    **仪表颜色**    |    仪表盘中仪表的颜色样式，可选**双色**或**多色**。**双色仪表**：配置双色仪表中的两种颜色，仅在**仪表颜色**为**双色**时可配置。**多色仪表**：单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一个颜色样式系列。 单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个颜色样式系列的排列样式。单击![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5896941261/p271562.jpg)图标，即可复制当前选中颜色样式系列配置内容并新增一个同样配置的颜色样式系列。仅在**仪表颜色**为**多色**时可配置。**占比**：当前系列颜色在仪表盘中的占比值大小，单位%。**颜色**：当前系列的颜色。    |
|    **多色仪表**    |    单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一种仪表颜色。 单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多种仪表颜色的排列样式。单击![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5896941261/p271562.jpg)图标，即可复制当前选中的仪表颜色并新增一个同样颜色的仪表。 占比：仪表颜色占总体仪表的比例，单位为%。颜色：设置仪表的填充样式。请参见[颜色选择器说明](/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)，配置仪表的颜色样式。    |
|    **环形描边**    |    仪表盘的环形描边样式，包括环形描边的线型样式、线的粗细值和线的颜色。**说明** 当线的类型选择**虚线**或**点线**时，还可以配置线的间断长度值和每一个间断线之间的距离。    |
|    **中心指示**    |    仪表盘中心指示部分的样式，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制中心指示样式的显隐。**指针线型**：仪表盘中心指针的线类型、线的粗细和线颜色。**说明** 当线的类型选择**虚线**或**点线**时，还可以配置线的间断长度值和每一个间断线之间的距离。**圆心样式**：中心指针圆心的样式，包括圆心的大小值和颜色。**圆心描边**：圆心描边线样式，包括线条的类型、线的粗细和线的颜色。**说明** 当线的类型选择**虚线**或**点线**时，还可以配置线的间断长度值和每一个间断线之间的距离。    |
|    **中心文本**    |    仪表盘中心指示部分的文本样式，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制中心指示样式的显隐。**显示内容**：仪表盘中心文本别的显示文本内容。**相对偏移**：仪表中心文本相对仪表盘在垂直和水平方向偏移量，单位为px。**文本样式**：仪表中心文本的样式，包括文本的字体样式、文字粗细、字号和颜色。**文本描边**：仪表中心文本内容的描边样式，包括文本描边的宽度值和描边颜色。    |
* **坐标**：组件角度轴的样式。![角度轴面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3444257261/p291418.png)

  * **角度轴显示**：打开开关，组件内角度轴样式显示可见；关闭开关，组件内角度轴样式不可见。
  * **角度范围**：角度轴的起始角度和结束角度的显示范围值，单位为度（°），可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制角度范围样式的显隐。
  * **刻度线**：仪表盘的角度轴刻度线样式，包括刻度线的长度值、粗细值和颜色，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制角度轴刻度线样式的显隐。
  * **子刻度线**：仪表盘的角度轴子刻度线样式，包括子刻度线的一共的数量值、线的长度值、粗细值和颜色，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制角度轴刻度线样式的显隐。![刻度线和子刻度线样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3444257261/p291426.png)
  * **轴标签**：仪表盘的角度轴轴标签样式，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制角度轴轴标签的显隐。  

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **显示格式**    |    角度轴标签数值显示格式的样式，可选**默认**、**11（整数）**、**11.1（浮点数）**、**11.11（浮点数）**、**11%（百分比）**、**11.1%（百分比）**、**1,111（千分位）**和**1,111.1（千分位）**。更多数据显示格式请参见[数据显示格式说明](/zh/datav/datav-6-0/product-overview/terms-1#section-os5-b6i-tok)。    |
|    **标签展示**    |    标签的展示样式，包括：角度轴轴标签的前后缀内容、标签的角度值和偏移量。    |
|    **文本样式**    |    角度轴轴标签文本的字体样式、文字粗细、字号和颜色。    |
* **条件**：条件样式说明。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7102636761/p561643.png)

**条件样式**：单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一个条件样式。 单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个条件样式的排列样式。单击![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5896941261/p271562.jpg)图标，即可复制当前选中数据系列配置内容并新增一个同样配置的条件样式。具体配置请参见[条件树使用说明](/zh/datav/datav-6-0/user-guide/instructions-of-conditional-tree#task-2099938)。

  * **前后缀**：当前系列条件下仪表盘中心内容显示的前后缀设置。
  * **显示数值**：仪表盘的数值显示，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制数值的显隐。
  * **文本样式**：打开开关，配置该系列条件样式中的仪表盘文本样式，包括文本的字体类型，文字粗细、字号大小和颜色；关闭开关，无法配置该系列条件下的仪表盘文本样式。

## 数据面板（默认模式）

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7102636761/p561644.png)

### **配置字段说明**

|    **字段**    |    **说明**    |
|    ----    |    ----    |
|    min    |    仪表盘中刻度的最小值。    |
|    max    |    仪表盘中刻度的最大值。    |
|    content    |    仪表盘中心文本的内容。    |
|    value    |    仪表盘的指标值。    |
|    percent    |    仪表盘中指标比例的百分比值，配置数据需要为0到100之间的数值。    |

表 1\. 配置项说明

|    **配置项**    |    **说明**    |
|    ----    |    ----    |
|    **受控模式**    |    打开开关，资产初始化状态下不请求数据，仅通过回调ID或蓝图编辑器配置的方法发起请求数据；关闭开关，可以使用自动更新请求数据。开关默认为关闭状态。    |
|    **自动更新请求**    |    选中后可以设置动态轮询，还可以手动输入轮询的时间频次。取消选中后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和回调ID事件来触发请求更新数据。    |
|    **数据源**    |    单击**配置数据源**，可在**设置数据源**面板中修改数据源类型和数据查询代码、预览数据源返回结果以及查看数据响应结果，详情请参见[配置资产数据](/zh/datav/datav-6-0/user-guide/configure-widget-data#task-2376875)。    |
|    **数据过滤器**    |    数据过滤器提供数据结构转换、筛选和一些简单的计算功能。单击**添加过滤器**，可在**设置数据源**面板配置数据过滤器脚本，详情请参见[过滤器使用说明](/zh/datav/datav-6-0/user-guide/use-the-data-filter#task-1322674)。    |
|    **数据响应结果**    |    展示数据请求的响应结果。当数据源发生改变时，可单击右侧的![刷新图标 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0376703061/p89093.png)图标，实时查看数据响应结果。    |

## 数据面板（分析模式）

**重要** 

在使用DataV数据集提供的BI分析功能之前，系统会对仪表盘进行以下变更。

* 数据源**仪表盘接口**由静态数据切换至DataV数据集。
* 更新DataV数据集配置（此操作不会使字段配置丢失）。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7102636761/p561651.png)BI分析数据配置面板中的详细操作说明，请参见[BI分析模式数据面板功能介绍](/zh/datav/datav-6-0/user-guide/introduction-to-features-of-the-data-panel-in-bi-analysis-mode#task-2098468)。

### **配置字段说明**

|    **字段**    |    **说明**    |
|    ----    |    ----    |
|    指标比例    |    仪表盘中指标比例的百分比值，配置数据需要为0到100之间的数值。    |
|    最小值    |    可选，仪表盘中刻度的最小值。    |
|    最大值    |    可选，仪表盘中刻度的最大值。    |
|    中心文本    |    可选，仪表盘中心文本的内容。    |
|    指标值    |    可选，仪表盘的指标值。    |

**说明** 

通过BI分析模块添加的组件，数据面板默认是分析模式，非BI分析下v5.x版本的组件，数据面板默认是默认模式。当组件是以分析模式添加后，您可以单击切换数据面板左上角的**默认模式**，即可在弹窗对话框内确认退出分析模式并删除该BI分析组件对应的分析器。退出分析模式后，当前BI分析组件会转换成v5.x版本组件，组件数据面板为默认模式。![退出分析模式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9430114361/p336915.jpg)

## 交互面板

该组件没有交互事件。

## 蓝图编辑器交互配置

**说明** 

BI分析模式下的仪表盘组件无法配置蓝图编辑器交互，仅在默认模式下可配置蓝图。

1. 在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2. 单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的**仪表盘**组件，在画布中可以看到如下图所示的仪表盘的蓝图编辑器配置参数。![仪表盘蓝图参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0530114361/p336917.jpg)

  * **事件**

|    **事件**    |    **说明**    |
|    ----    |    ----    |
|    **当仪表盘接口请求完成时**    |    数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
|    **当仪表盘接口请求失败时**    |    数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
  * **动作**

|    **动作**    |    **说明**    |
|    ----    |    ----    |
|    **请求仪表盘接口**    |    重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如仪表盘配置了API数据源为https://api.test，传到**请求仪表盘接口**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。    |
|    **导入仪表盘接口**    |    按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
|    **更新组件配置**    |    动态更新组件的样式配置。需要先在组件的**配置**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。    |
|    **显示**    |    显示组件，参考数据示例如下。return{   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" }    |
|    **隐藏**    |    隐藏组件，参考数据示例如下。return{   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" }    |
|    **切换显隐状态**    |    切换组件显示或者隐藏，参考数据示例如下。return {   "animationIn": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   },   "animationOut": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   } }    |
|    **移动**    |    将组件移动到指定位置。参考数据示例如下。    return{             // 移动方式。绝对定位：to，相对定位：by。默认值：to。         "positionType": "to",       // 指定位置。x坐标，y坐标。       "attr": {         "x": 0,         "y": 0       },       // 动画方式。       "animation": {         "enable": false,         // 动画延时。         "animationDuration": 1000,         // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。         "animationEasing": "linear"       }     }    |