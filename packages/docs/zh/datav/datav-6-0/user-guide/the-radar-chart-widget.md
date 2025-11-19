<!DOCTYPE html> 

本文介绍基本雷达图的图表样式和配置面板的功能。

**重要** 

本文介绍v3.x版本的基本雷达图的配置项，如需查看BI分析模块中的v5.0及以上版本雷达图，请参见[雷达图](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/radar-chart-for-datav-6#concept-2090355)；如需查看v3.0以下版本，请参见[基本雷达图（v3.0以下版本）](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/radar-chart-2#concept-gdt-xbt-cfb)文档。

## **图表样式**

基本雷达图是其他基础图表的一种，能够使用雷达图直观地展示多维度的类目数据对比情况。基本雷达图支持使用角度轴和极坐标轴分别展示类目和数值，支持自定义文本、图形、动画样式，支持多系列数据配置。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8027847761/p573683.png)

## 配置面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8027847761/p573684.png)

* **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
* **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
* **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
* **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。  
  * 手动输入角度值，控制组件的旋转角度。
  * 拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
  * 单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
  * 单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
* **不透明度**：取值范围为0\~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
* ****图表**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8027847761/p573685.png)

  * ****边距**：图表区域与组件上下左右四个边界之间的距离，单位默认px。
  * ****值标签**：雷达图的值标签样式，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制值标签的显隐。  

****文本**：值标签文本的字体样式、文字粗细、字号大小和颜色。
  * ****图例**：图例的样式，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制图例的显隐。  

| **参数**   | **说明**                                                                                                                                                                           |
| ---- | ---- |
| ****文本** | 设置图例文本的样式，包括文本字体样式、字号大小、字体颜色和字体粗细，参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)，修改文本颜色。                      |
| ****布局** | 各图例之间的位置关系。 ****间距** **左右间距**：相邻图例之间左右两侧的距离，仅当有多个系列时该配置项才有效。****上下间距**：图例与组件上下边界的距离。****位置**：图例相对于组件起始坐标的位置，可选****顶部居左**、****顶部居中**、****顶部居右**、****底部居左**、****底部居中**和****底部居右**。 |
* ****坐标轴**：雷达图的****径向轴**和****角度轴**样式。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8027847761/p573686.png)

  * ****径向轴**

    * ****最值**

| **参数**    | **说明**                                   |
| ---- | ---- |
| ****最小值** | 径向轴的最小值，默认为0。                            |
| ****最大值** | 径向轴的最大值，默认为auto，表示系统会根据数据的最大值和最小值自动计算匹配。 |
    * ****轴标签**：径向轴的标签样式，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制标签的显隐。  

****标签样式**：轴标签文本的字体样式、字体粗细、字号大小和颜色。
    * ****轴线**：径向轴的轴线样式，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制轴线的显隐。  

****颜色**：轴线的颜色。
    * ****网格线**：径向轴的网格线样式，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制网格线的显隐。  

| **参数**   | **说明**                      |
| ---- | ---- |
| ****类型** | 网格线的类型，可选****实线**和****虚线**。 |
| ****颜色** | 网格线的颜色。                     |
  * ****角度轴**：角度坐标轴的样式。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8027847761/p573687.png)

    * ****起始角度偏移**：图表起始角度偏移的值，取值范围0\~360度。
    * ****轴标签**：可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制角度轴的轴标签的显隐。  

| **参数**       | **说明**                   |
| ---- | ---- |
| ****标签样式**   | 轴标签文本的字体样式、字体粗细、字号大小和颜色。 |
| ****轴标签偏移量** | 轴标签偏移的程度，单位px。           |
* ****系列**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8027847761/p573688.png)

****数据系列**：单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一个数据系列。 单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个数据系列的排列样式。 单击![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5896941261/p271562.jpg)图标，即可复制当前选中数据系列配置内容并新增一个同样配置的数据系列。

| **参数**     | **说明**                                                                                                                                                                                                                                                             |
| ---- | ---- |
| ****系列值**  | 数据系列的具体数值，与数据面板中的s字段相对应。                                                                                                                                                                                                                                           |
| ****系列名**  | 数据系列的命名，对应图例的说明文本内容，可自定义。                                                                                                                                                                                                                                          |
| ****描边**   | 此系列下雷达图的描边样式，包括描边颜色和描边的粗细值。                                                                                                                                                                                                                                        |
| ****填充颜色** | 此系列下雷达图的填充颜色。                                                                                                                                                                                                                                                      |
| ****标记**   | 此系列下雷达边界点的标记的样式，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制边界点标记的显隐。 ****类型**：标记的类型，可选****圆**、****菱形**、****十字架**、****正方形**、****下三角**和****上三角**。****尺寸**：标记的尺寸大小。****颜色**：标记的颜色。****透明度**：标记的透明度，取值范围为0\~1。 |
* ****其它**

  * ****缓动动画**：雷达图的动画效果样式，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制动画效果的开启或关闭。 ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8027847761/p573689.png)

| **参数**     | **说明**                                                                                      |
| ---- | ---- |
| ****动画设置** | ****缓动效果**：动画的缓动效果，系统提供多种常见的动画缓动效果供您选择。****各系列依次动画**：打开开关，各系列雷达图依次按顺序播放动画；关闭开关，全部雷达图一起播放动画。 |
| ****入场动画** | 组件第一次渲染动画的时长，单位为ms。                                                                         |
| ****更新动画** | ****更新动画时长**：组件数据更新时动画持续的时间，单位为ms。                                                          |
  * ****提示框**：在预览或发布页面，鼠标悬浮或单击雷达图区域时出现的提示框的样式，单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标可开启或关闭提示框。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8027847761/p573690.png)

| **参数**       | **说明**                                                                                                                                                                                                                                                                                                                              |
| ---- | ---- |
| ****消失延迟时间** | 当不满足触发条件时，提示框就会消失，此配置项设置提示框消失前延迟的时间，单位为ms。                                                                                                                                                                                                                                                                                          |
| ****触发方式**   | ****触发动作**：提示框被触发的动作，可选，包括****悬浮**和****点击**。                                                                                                                                                                                                                                                                                        |
| ****文本样式**   | 提示框中文本的样式，包括文字字体样式、文字粗细、字号和颜色。                                                                                                                                                                                                                                                                                                      |
| ****背景框样式**  | 提示框的背景框样式。 ****背景色**：提示框的背景颜色。****自定义**：提示框的宽度和高度，单位为px。单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标可开启或关闭自义定提示框。****内边距**：提示框的内部边距，单位为px。****偏移量** **水平偏移量**：提示框相对鼠标箭头位置的水平偏移量，单位为px。****垂直偏移量**：提示框相对鼠标箭头位置的垂直偏移量，单位为px。****边框** **边框粗细**：提示框边框的粗细，单位为px。****边框颜色**：提示框的边框颜色。 |

## 数据面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8027847761/p573691.png)

### **配置字段说明**

| **字段** | **说明**                   |
| ---- | ---- |
| x      | 类目值，对应角度轴的文本内容。          |
| y      | 每个类目的实际数值，对应全局样式中的值标签文本。 |
| s      | （可选）系列值。                 |

__表 1\. 配置项说明__
| **配置项**    | **说明**                                                                                                                                                                |
| ---- | ---- |
| **受控模式**   | 打开开关，资产初始化状态下不请求数据，仅通过回调ID或蓝图编辑器配置的方法发起请求数据；关闭开关，可以使用自动更新请求数据。开关默认为关闭状态。                                                                                              |
| **自动更新请求** | 选中后可以设置动态轮询，还可以手动输入轮询的时间频次。取消选中后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和回调ID事件来触发请求更新数据。                                                                                            |
| **数据源**    | 单击**配置数据源**，可在**设置数据源**面板中修改数据源类型和数据查询代码、预览数据源返回结果以及查看数据响应结果，详情请参见[配置资产数据](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-widget-data#task-2376875)。 |
| **数据过滤器**  | 数据过滤器提供数据结构转换、筛选和一些简单的计算功能。单击**添加过滤器**，可在**设置数据源**面板配置数据过滤器脚本，详情请参见[过滤器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-the-data-filter#task-1322674)。 |
| **数据响应结果** | 展示数据请求的响应结果。当数据源发生改变时，可单击右侧的![刷新图标 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0376703061/p89093.png)图标，实时查看数据响应结果。                                |

## 交互面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8027847761/p573692.png)

选中****启用**，开启组件交互功能。当单击基本雷达图的雷达边界点时，会触发数据请求，抛出回调值，动态加载不同雷达边界点的数据。默认抛出数据中的x、y和s值，具体配置请参见[如何配置数字翻牌器组件的回调ID](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards)。 

## 蓝图编辑器交互配置

1. 在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2. 单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的****基本雷达图**组件，在画布中可以看到如下图所示的基本雷达图的蓝图编辑器配置参数。![基本雷达图蓝图参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6666271161/p86482.jpg)

  * ****事件**

| **事件**              | **说明**                                                                                                               |
| ---- | ---- |
| ****当基本雷达图接口请求完成时** | 数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板****数据**页签的****数据响应结果**区域。                           |
| ****当基本雷达图接口请求失败时** | 数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板****数据**页签的****数据响应结果**区域。 |
| ****当点击数据项时**       | 当单击基本雷达图的雷达边界点时抛出的事件，同时抛出该雷达边界点对应的数据项。                                                                               |
  * ****动作**

| **动作**          | **说明**                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---- | ---- |
| ****请求基本雷达图接口** | 重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如基本雷达图配置了API数据源为https://api.test，传到****请求基本雷达图接口**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。                                                                                                                                                                                                                                                                                  |
| ****导入基本雷达图接口** | 按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板****数据**页签的****数据响应结果**区域。                                                                                                                                                                                                                                                                                                                                 |
| ****高亮**        | 高亮数据项对应的元素，参考数据示例如下。return {   "data": {},   "options": {     "style": {       "stroke": "#f00",       "fill": ""     },     "selectMode": "single",     "cancelHighlightFirst": false   } }                                                                                                                                                                                                                          |
| ****取消高亮**      | 取消数据项对应元素的高亮，参考数据示例如下。return {   "data": {},   "options": {     "mode": "single"   } }                                                                                                                                                                                                                                                                                                                                |
| ****清空组件**      | 清空组件数据，不需要参数。                                                                                                                                                                                                                                                                                                                                                                                                         |
| ****更新组件配置**    | 动态更新组件的样式配置。需要先在组件的****配置**面板中，单击****复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。                                                                                                                                                                                                                                                                                                                           |
| ****显示**        | 显示组件，参考数据示例如下。return{   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" }                                                                                                                                                                                                                                                                                                             |
| ****隐藏**        | 隐藏组件，参考数据示例如下。return{   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" }                                                                                                                                                                                                                                                                                                             |
| ****切换显隐状态**    | 切换组件显示或者隐藏，参考数据示例如下。return {   "animationIn": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   },   "animationOut": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   } }                                                                                                                                                        |
| ****移动**        | 将组件移动到指定位置，参考数据示例如下。    return{             // 移动方式。绝对定位：to，相对定位：by。默认值：to。         "positionType": "to",       // 指定位置。x坐标，y坐标。       "attr": {         "x": 0,         "y": 0       },       // 动画方式。       "animation": {         "enable": false,         // 动画延时。         "animationDuration": 1000,         // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。         "animationEasing": "linear"       }     } |