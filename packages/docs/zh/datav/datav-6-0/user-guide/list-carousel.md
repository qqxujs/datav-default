<!DOCTYPE html> 

本文介绍轮播列表柱状图组件的图表样式和各配置项的含义。

## **图表样式**

轮播列表柱状图是表格组件的一种，支持根据数值大小映射柱子的长度，支持以跑马灯动画的形式展示溢出文本，能够以轮播列表柱图的形式在可视化应用中直观地展示多行、多页的文本内容。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2382700861/p612038.png)

## 配置面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3382700861/p612040.png)

* **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
* **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
* **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
* **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。  
  * 手动输入角度值，控制组件的旋转角度。
  * 拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
  * 单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
  * 单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
* **透明度**：取值范围为\[0,1\]。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
* **全局样式**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2382700861/p612041.png)

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **字体**    |    组件中所有文本的字体系列，默认为**微软雅黑**。    |
|    **开启动画**    |    打开开关，开启动画效果。    |
|    **动画时间**    |    轮播时文字翻转和柱状图闪光效果的总用时，单位为ms。    |
|    **行间距**    |    各柱子之间的距离。    |
|    **数量**    |    每页显示的文本行数。    |
|    **自动轮播**    |    打开开关，柱状图播完一次数据后自动重复播放。关闭开关，柱状图播完一次数据后不再播放。 **说明** 开启自动轮播后，配置不会立即生效，将会在下一次轮播后生效。    |
|    **轮播时间**    |    列表从前一页切换到下一页所间隔的时间，单位为ms。    |
|    **排序**    |    组件数据根据value值大小进行的排序模式，可选**降序**或**升序**。单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制排序的显隐。    |
* **序列号** ：列表的序列号样式，可单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制序列号的显隐。 ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3382700861/p612043.png)

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **文本**    |    序列号文本的大小、颜色和字体粗细。    |
|    **宽度**    |    序列号的宽度，单位为px或%，输入需要带单位。    |
|    **间隔**    |    序列号和轮播内容之间的间隔距离，单位为px。    |
|    **样式**    |    序列号的样式。    |
* **内容**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3382700861/p612045.png)

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **文本**    |    内容文本的大小、颜色和字体粗细。    |
|    **跑马灯**    |    对溢出文本使用跑马灯动画效果，可单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制动画效果的开启或关闭。**动画时间**：溢出文本的跑马灯动画时间，单位为ms。    |
* **数值**：数据中的`value`字段值的显示样式，可单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制数值显隐。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2382700861/p612049.png)

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **字号**    |    数值文本的大小。    |
|    **颜色**    |    数值文本的颜色。    |
|    **字体粗细**    |    数值文本的字体粗细。    |
|    **间隔**    |    数值文本与内容文本之间的距离。    |
|    **千分位分隔符**    |    打开开关，数值每到一个千分位时添加一个分隔符。    |
|    **前后缀**    |    数值的前后缀样式，包括自定义输入前缀和后缀内容，数值与前后缀左侧和右侧的间距值，单位px。    |
* **柱状图**：列表中柱状图的样式，可单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制柱状图显隐。 ![轮播列表的柱状图样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8558850461/p13363.png)

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **颜色**    |    柱状图的颜色。    |
|    **高度**    |    柱状图的粗细。    |
* **流光**：柱状图上的流光特效样式，可单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制流光特效的开启或关闭。 ![轮播列表柱状图流光特效样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8558850461/p13364.png)

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **颜色**    |    流光的颜色。    |
|    **长度**    |    流光的长度。    |
|    **高度**    |    流光的粗细，超过柱状图部分不会显示。    |
|    **动画间隔**    |    间隔多久进行展示一次流光特效，单位为ms。    |
* **分割线**：各行之间的分割线样式，可单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制分割线的显隐。![轮播列表柱状图的分割线样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8558850461/p13365.png)

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **颜色**    |    多行之间分割线的颜色。    |
|    **高度**    |    分割线的粗细。    |

## 数据面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3382700861/p612051.png)

### **配置字段说明**

|    **字段**    |    **说明**    |
|    ----    |    ----    |
|    value    |    列表每行的值，对应柱状图的长度，数据会按照此value值的大小进行排序展示。可在**数值**配置项中配置value值的显示样式。    |
|    content    |    对应轮播列表上每行的内容。    |

__表 1\. 配置项说明__
|    **配置项**    |    **说明**    |
|    ----    |    ----    |
|    **受控模式**    |    打开开关，资产初始化状态下不请求数据，仅通过回调ID或蓝图编辑器配置的方法发起请求数据；关闭开关，可以使用自动更新请求数据。开关默认为关闭状态。    |
|    **自动更新请求**    |    选中后可以设置动态轮询，还可以手动输入轮询的时间频次。取消选中后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和回调ID事件来触发请求更新数据。    |
|    **数据源**    |    单击**配置数据源**，可在**设置数据源**面板中修改数据源类型和数据查询代码、预览数据源返回结果以及查看数据响应结果，详情请参见[配置资产数据](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-widget-data#task-2376875)。    |
|    **数据过滤器**    |    数据过滤器提供数据结构转换、筛选和一些简单的计算功能。单击**添加过滤器**，可在**设置数据源**面板配置数据过滤器脚本，详情请参见[过滤器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-the-data-filter#task-1322674)。    |
|    **数据响应结果**    |    展示数据请求的响应结果。当数据源发生改变时，可单击右侧的![刷新图标 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0376703061/p89093.png)图标，实时查看数据响应结果。    |

## 交互面板

此组件没有交互事件。

## 蓝图编辑器交互配置

1. 在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2. 单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的**轮播列表柱状图**组件，在画布中可以看到如下图所示的轮播列表柱状图的蓝图编辑器配置参数。![轮播列表柱状图蓝图参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9558850461/p88074.jpg)

  * **事件**

|    **事件**    |    **说明**    |
|    ----    |    ----    |
|    **当数据接口请求完成时**    |    数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
|    **当数据接口请求失败时**    |    数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
  * **动作**

|    **动作**    |    **说明**    |
|    ----    |    ----    |
|    **请求数据接口**    |    重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如轮播列表柱状图配置了API数据源为https://api.test，传到**请求数据接口**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。    |
|    **导入数据接口**    |    按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
|    **更新组件配置**    |    动态更新组件的样式配置。需要先在组件的**配置**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。    |
|    **显示**    |    显示组件，参考数据示例如下。return {   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" };    |
|    **隐藏**    |    隐藏组件，参考数据示例如下。return {   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" };    |
|    **切换显隐状态**    |    切换组件显示或者隐藏，参考数据示例如下。return {   "animationIn": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   },   "animationOut": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   } };    |
|    **移动**    |    将组件移动到指定位置，参考数据示例如下。return {   // 移动方式。绝对定位：to，相对定位：by。默认值：to。   "positionType": "to",   // 指定位置。x坐标，y坐标。   "attr": {     "x": 0,     "y": 0   },   // 动画方式。   "animation": {     "enable": false,     // 动画延时。     "animationDuration": 1000,     // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。     "animationEasing": "linear"   } };    |