<!DOCTYPE html> 

本文介绍交叉透视表组件的图表样式和各配置项的含义。

## **图表样式**

交叉透视表是表格组件的一种，支持数据内容的自定义展示，能够将数据信息以表格的形式清晰地展示在可视化应用上。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3367700861/p612369.png)

## 配置面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3367700861/p612370.png)

* **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。

* **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
* **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
* **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。  
  * 手动输入角度值，控制组件的旋转角度。
  * 拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
  * 单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
  * 单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
* **不透明度**：取值范围为0\~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。

* **图形**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3367700861/p612371.png)

  * **展示方式**：设置表格行头的展示方式。包括**平铺网格结构**和**树状结构**。
  * **布局**：设置表格的平面布局方式。包括**列等宽**布局和**紧凑**布局。
  * **总计**：设置表格中数据的总计功能。您可单击![总计](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7944867561/p465436.jpg)控制总计的显隐，选择**上(前)方**和**下(后)方**两种显示位置。
  * **小计**：设置表格中数据的小计功能。您可单击![小计](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7944867561/p465437.jpg)控制小计的显隐，选择**上(前)方**和**下(后)方**两种显示位置。
  * **图标**：设置表格中数据的**环比上升**![环比上升](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0118067561/p465441.jpg)或**环比下降**![环比下降](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0118067561/p465442.jpg)图标。您可单击![图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0118067561/p465447.jpg)控制图标的显隐。

    * **形状**：设置图标形状。
    * **颜色**：设置图标颜色。
    * **尺寸**：设置图标尺寸，单位为px。
    * **显示位置**：设置图标相对于表格中数据的显示位置，包括**左**和**右**。
  * **柱状图标记**：设置表格中数据的柱状图衬底展示。您可单击![柱状图标记](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0118067561/p465458.jpg)控制柱状图标记的显隐，您也可以自定义设置该标记的颜色。
  * **自定义标记范围**：设置表格中柱状图标记的标记范围。您可单击![自定义标记](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0118067561/p465465.jpg)控制该功能的显隐。

**说明**  
  若您需要使用**自定义标记范围**功能，请先打开**柱状图标记**开关。
  * **整体背景**：设置表格中表头部分的背景颜色。您可单击![整体背景](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0118067561/p465473.jpg)控制该功能的显隐。
  * **背景颜色映射**：设置表格中数据部分的背景颜色。您可单击![颜色映射](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0118067561/p465478.jpg)打开或关闭视觉映射。

    * **映射类型**：设置背景颜色映射的映射类型。包括**名词分类**、**数值连续**和**数值分区**。
    * **颜色模板**：设置背景颜色映射的颜色模板。
    * **自定义映射**：根据实际数据设置不同的数值范围，您可以进行**添加**、删除和**反序**操作。

**说明**  
      若您无法修改**自定义映射**的配置，请先确认是否打开**自定义映射**开关。
  * **数据元信息**：设置表格中每一行或每一列表头的显示名。单击右侧的![加](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6431167561/p465499.jpg)或![删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6431167561/p465501.jpg)图标，添加或删除一个数据元信息。 单击![纵向](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6431167561/p465502.jpg)或![横向](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6431167561/p465503.jpg)图标配置多个数据元信息的排列样式。
* **单元格**

  * **单元格尺寸**：设置单元格的宽度和高度。您可单击![单元格尺寸](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6431167561/p465507.jpg)打开或关闭**单元格尺寸**设置功能。单击右侧的![加](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6431167561/p465499.jpg)或![删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6431167561/p465501.jpg)图标，添加或删除一个宽度或高度信息。 单击![纵向](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6431167561/p465502.jpg)或![横向](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6431167561/p465503.jpg)图标配置多个宽度或高度的排列样式。您也可以拖动表格线调整单元格的行高和列宽。![单元格尺2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6431167561/p465531.jpg)
  * **数据单元格**：设置单元格中数据的对齐方式、文本样式和线型样式等。![数据单元格 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6431167561/p465535.jpg)

|    参数    |    说明    |
|    ----    |    ----    |
|    **水平对齐**    |    设置数据的水平对齐方式。可选：左对齐、居中对齐和右对齐。    |
|    **垂直对齐**    |    设置数据的垂直对齐方式。可选：上对齐、居中对齐和下对齐。    |
|    **文本样式**    |    设置数据的文本样式，包括字体样式、颜色、字号和字体粗细。    |
|    **线型样式**    |    设置数据的线型样式，包括线宽和颜色。    |
|    **自定义背景图**    |    设置数据的背景图。    |
  * **行头单元格**：设置行头单元格中数据的对齐方式、背景颜色和文本样式等。![行头单元格](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6431167561/p465538.jpg)

|    参数    |    说明    |
|    ----    |    ----    |
|    **水平对齐**    |    设置数据的水平对齐方式。可选：左对齐、居中对齐和右对齐。    |
|    **背景颜色**    |    设置数据的背景颜色。    |
|    **文本样式**    |    设置数据的文本样式，包括字体样式、颜色、字号和字体粗细。    |
|    **线型样式**    |    设置数据的线型样式，包括线宽和颜色。    |
|    **自定义背景图**    |    设置数据格的背景图。    |
  * **列头单元格**：设置列头单元格中数据的对齐方式、背景颜色和文本样式等。![列头单元格](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6134167561/p465598.jpg)

|    参数    |    说明    |
|    ----    |    ----    |
|    **水平对齐**    |    设置数据的水平对齐方式。可选：左对齐、居中对齐和右对齐。    |
|    **背景颜色**    |    设置数据的背景颜色。    |
|    **文本样式**    |    设置数据的文本样式，包括字体样式、颜色、字号和字体粗细。    |
|    **线型样式**    |    设置数据的线型样式，包括线宽和颜色。    |
|    **自定义背景图**    |    设置数据格的背景图。    |
  * **角头单元格**：设置角头单元格中数据的对齐方式、背景颜色和文本样式等。![角头单元格](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6134167561/p465599.jpg)

|    参数    |    说明    |
|    ----    |    ----    |
|    **水平对齐**    |    设置数据的水平对齐方式。可选：左对齐、居中对齐和右对齐。    |
|    **背景颜色**    |    设置数据的背景颜色。    |
|    **文本样式**    |    设置数据的文本样式，包括字体样式、颜色、字号和字体粗细。    |
|    **线型样式**    |    设置数据的线型样式，包括线宽和颜色。    |
|    **自定义背景图**    |    设置数据格的背景图。    |
  * **分割线**：设置表格中分割线的**线宽**和**颜色**。
  * **拖拽热区线**：设置表格中拖拽线的线型、粗细、颜色、长度和间距。

**说明**  
  当选择拖拽线的线型为实线时，没有长度和间距设置功能。
* **交互**

  * **提示框**：设置提示框的交互信息。您可单击![提示框2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6168167561/p465625.jpg)控制该功能的显隐。![提示框](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6168167561/p465611.jpg)

|    参数    |    说明    |
|    ----    |    ----    |
|    **触发方式**    |    设置提示框的触发方式，包括**悬浮**和**点击**。    |
|    **内容显示**    |    设置提示框的内容。单击右侧的![加](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6431167561/p465499.jpg)或![删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6431167561/p465501.jpg)图标，添加或删除一个内容信息。 单击![纵向](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6431167561/p465502.jpg)或![横向](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6431167561/p465503.jpg)图标配置多个内容信息的排列样式。    |
|    **内容间距**    |    设置提示框的内容间距，单位为px。    |
|    **内容文本**    |    设置内容的文本样式，包括字体样式、颜色、字号和字体粗细。    |
|    **弹窗背景**    |    设置提示框的弹窗背景。**背景边距**：设置水平边距和垂直边距，单位为px。**背景颜色**：设置背景颜色。**边框样式**：设置边框样式，包括线型、圆角、线宽和颜色。    |
|    **标记**    |    设置提示框的标记。**形状**：设置标记的形状。**尺寸**：设置标记的尺寸，单位为px。**自定义颜色**：设置标记的颜色。    |
  * **交互**：设置表格交互时，鼠标操作、hover样式和框选样式等。![交互1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6168167561/p465632.jpg)

|    参数    |    说明    |
|    ----    |    ----    |
|    **鼠标操作**    |    设置鼠标操作的类型。包括但不限于**合并单元格**、**联动高亮**和**组内排序**。    |
|    **hover样式**    |    设置鼠标悬停时，**单元格背景**和**列头背景**。    |
|    **框选样式**    |    设置鼠标框选时，单元格背景颜色。    |
|    **超链接**    |    设置表格的超链接配置样式，您可单击![超链接](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6168167561/p465642.jpg)控制超链接配置的显隐。文本色：设置文本颜色。字段设置：设置字段、跳转链接等。单击右侧的![加](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6431167561/p465499.jpg)或![删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6431167561/p465501.jpg)图标，添加或删除一个超链接。 单击![纵向](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6431167561/p465502.jpg)或![横向](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6431167561/p465503.jpg)图标配置多个超链接的排列样式。**跳转字段**：选择需要增加超链接的列。**字段映射**：设置需要增加超链接列字段的映射。**跳转链接**：设置跳转链接。**是否新开窗口**：设置是否在新开窗口打开超链接。    |

**说明**  
  您可以使用鼠标拖动表格线，调节行高列宽，框选显示求和内容。
* **条件**

**条件样式**：设置数据透视表的条件样式，您可单击![开关](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6168167561/p465699.jpg)控制条件样式的显隐。单击右侧的![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一个条件样式。 单击![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个条件样式的排列样式。单击![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5896941261/p271562.jpg)图标，即可复制当前选中的条件样式配置并新增一个同样配置的条件样式。具体样式配置说明，请参见[条件树使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/instructions-of-conditional-tree#task-2099938)。![条件样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8305677561/p466638.jpg)

  * **条件名称**：设置条件样式的条件名称，双击修改条件名称。
  * **文字颜色**：设置文字颜色。
  * **背景颜色**：设置鼠背景颜色。
  * **图标**：设置图标的形状和颜色。

## 数据面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3367700861/p612422.png)

### **配置字段说明**

|    字段    |    说明    |
|    ----    |    ----    |
|    row1    |    第一行数据。    |
|    row2    |    （可选）第二行数据。    |
|    column1    |    第一列数据。    |
|    column2    |    （可选）第二列数据。    |
|    value1    |    表格的值说明。    |

**配置项说明**

|    配置项    |    说明    |
|    ----    |    ----    |
|    **受控模式**    |    打开开关，资产初始化状态下不请求数据，仅通过回调ID或蓝图编辑器配置的方法发起请求数据；关闭开关，可以使用自动更新请求数据。开关默认为关闭状态。    |
|    **自动更新请求**    |    选中后可以设置动态轮询，还可以手动输入轮询的时间频次。取消选中后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和回调ID事件来触发请求更新数据。    |
|    **数据源**    |    单击**配置数据源**，可在**设置数据源**面板中修改数据源类型和数据查询代码、预览数据源返回结果以及查看数据响应结果，详情请参见[配置资产数据](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-widget-data#task-2376875)。    |
|    **数据过滤器**    |    数据过滤器提供数据结构转换、筛选和一些简单的计算功能。单击**添加过滤器**，可在**设置数据源**面板配置数据过滤器脚本，详情请参见[过滤器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-the-data-filter#task-1322674)。    |
|    **数据结果**    |    展示数据请求的响应结果。当数据源发生改变时，可单击右侧的![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0376703061/p89093.png)图标，实时查看数据响应结果。    |

## 交互面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3367700861/p612427.png)

|    交互事件    |    说明    |
|    ----    |    ----    |
|    **当数据单元格选中时**    |    选中**启用**，开启组件交互功能。**交叉透视表**组件拥有交互配置，当数据单元格选中时抛出回调值。具体配置请参见[如何配置数字翻牌器组件的回调ID](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards)。    |

## 蓝图编辑器交互配置

1. 在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2. 单击页面左上角的![蓝图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5281267561/p466098.png)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的交叉透视表组件，在画布中可以看到如下图所示的交叉透视表的蓝图编辑器配置参数。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3367700861/p612430.png)

  * 事件

|    事件    |    说明    |
|    ----    |    ----    |
|    **当透视表接口请求完成时**    |    透视表接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
|    **当透视表接口请求失败时**    |    透视表接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
|    **当数据单元格选中时**    |    数据单元格选中时返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
  * 动作

|    动作    |    说明    |
|    ----    |    ----    |
|    **请求透视表接口**    |    重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如交叉透视列表配置了API数据源为https://api.test，传到**请求透视表接口**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。    |
|    **导入透视表接口**    |    透视表接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
|    **更新组件配置**    |    动态更新组件的样式配置。需要先在组件的**配置**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。    |
|    **显示**    |    显示组件，参考数据示例如下。return {   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" };    |
|    **隐藏**    |    隐藏组件，参考数据示例如下。return {   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" };    |
|    **切换显隐状态**    |    切换组件显示或者隐藏，参考数据示例如下。return {   "animationIn": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   },   "animationOut": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   } };    |
|    **移动**    |    将组件移动到指定位置，参考数据示例如下。return {   // 移动方式。绝对定位：to，相对定位：by。默认值：to。   "positionType": "to",   // 指定位置。x坐标，y坐标。   "attr": {     "x": 0,     "y": 0   },   // 动画方式。   "animation": {     "enable": false,     // 动画延时。     "animationDuration": 1000,     // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。     "animationEasing": "linear"   } };    |