<!DOCTYPE html> 

本文介绍Echarts 弦图的图表样式和配置面板的功能。

## **图表样式**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0827847761/p573757.png)

## 配置面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0827847761/p573759.png)

* **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
* **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
* **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
* **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。  
  * 手动输入角度值，控制组件的旋转角度。
  * 拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
  * 单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
  * 单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
* **不透明度**：取值范围为0\~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
* **图表元素**![图表元素](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5237421661/p480179.jpg)

  * **左侧**：元素与组件左侧边界的距离。支持以下几种输入：

    * 具体像素值，例如 **20**。
    * 相对于容器高宽的百分比，例如 **20%**。
    * **left**，**center** 或 **right**，组件会根据相应的位置自动对齐。
  * **顶部**：元素与组件上侧边界的距离。支持以下几种输入：

    * 具体像素值，例如 **20**。
    * 相对于容器高宽的百分比，例如 **20%**。
    * **left**，**center** 或 **right**，组件会根据相应的位置自动对齐。
  * **右侧**：元素与组件右侧边界的距离。支持以下几种输入：

    * 具体像素值，例如 **20**。
    * 相对于容器高宽的百分比，例如 **20%**。
    * **left**，**center** 或 **right**，组件会根据相应的位置自动对齐。
  * **底部**：元素与组件下侧边界的距离。支持以下几种输入：

    * 具体像素值，例如 **20**。
    * 相对于容器高宽的百分比，例如 **20%**。
    * **left**，**center** 或 **right**，组件会根据相应的位置自动对齐。
  * **宽度**：手动输入数值，调整元素的宽度。默认值为**auto**，自适应元素的宽度。
  * **高度**：手动输入数值，调整元素的高度，默认值为**auto**，自适应元素的高度。
  * **静态**：勾选后，标签为静态无法交互。
  * **图例联动**：勾选后，启动图例hover时的联动。
  * **悬浮动画**：勾选后，开启鼠标hover时的动画效果。
  * **环形布局**

    * **旋转标签**：勾选后，文字位于图表元素外侧。去勾选后，文字悬浮于图表上方。
  * **鼠标缩放&平移漫游**：勾选后，打开鼠标缩放&平移漫游功能。
  * **节点悬浮**：勾选后，打开节点悬浮功能。
  * **标记图形**：自定义标记图形，可选，默认值为**circle**。标记类型包括 **circle**，**rect**，**roundRect**，**triangle**，**diamond**， **pin**，**arrow**， **none**，也可以配置为图片的URL或path，详情请参考[ECharts官网](https://echarts.apache.org/zh/option.html#series-line.markPoint.symbol)。
  * **标记旋转角度**：单击**+**或**\-**号，或手动输入数值，修改标记图形的旋转角度。
  * **元素样式**

    * **普通项**

      * **边框色**：参考[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)，修改普通项元素的边框颜色。
      * **边框粗细**：单击**+**或**\-**号，或手动输入数值，修改普通项元素的边框粗细。
      * **边框样式**：自定义边框的描边类型，包括**实线**和**虚线**。默认值为**实线**。
      * **透明度**：单击**+**或**\-**号，或手动输入数值，修改普通项元素的透明度，范围为 \[0,1\]。
    * **选中项**

      * **边框色**：参考[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)，修改选中项元素的边框颜色。
      * **边框粗细**：单击**+**或**\-**号，或手动输入数值，修改选中项元素的边框粗细。
      * **边框样式**：自定义边框的描边类型，包括**实线**和**虚线**。默认值为**实线**。
      * **透明度**：单击**+**或**\-**号，或手动输入数值，修改选中项元素的透明度，范围为 \[0,1\]。
  * **轴线样式**

    * **显示方向箭头**：勾选后，图表之间的连线显示方向箭头。
    * **普通项**

      * **颜色**：参考[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)，修改普通项元素的颜色。
      * **宽度**：单击**+**或**\-**号，或手动输入数值，修改普通项元素的宽度。
      * **透明度**：单击**+**或**\-**号，或手动输入数值，修改普通项元素的透明度，范围为 \[0,1\]。
      * **曲度**：单击**+**或**\-**号，或手动输入数值，修改普通项元素的曲度。
    * **选中项**

      * **颜色**：参考[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)，修改选中项元素的颜色。
      * **宽度**：单击**+**或**\-**号，或手动输入数值，修改选中项元素的宽度。
      * **透明度**：单击**+**或**\-**号，或手动输入数值，修改选中项元素的透明度，范围为 \[0,1\]。
  * **标签**

    * **普通项**：单击右侧的**眼睛**图标显示普通项（没有响应鼠标事件的柱子）标签文本。

      * **文本样式**

        * **颜色**：参考[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)，修改普通项标签文本的颜色。
        * **字体样式**：普通项标签文本的字体风格。
        * **字体粗细**：普通项标签文本的字体粗细。
        * **字体**：普通项标签文本的字体系列。
        * **字号**：普通项标签文本的字体大小。
    * **选中项**：单击右侧的**眼睛**图标显示选中项（响应鼠标事件的柱子）标签文本。

      * **文本样式**

        * **颜色**：参考[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)，修改选中项标签文本的颜色。
        * **字体样式**：选中项标签文本的字体风格。
        * **字体粗细**：选中项标签文本的字体粗细。
        * **字体**：选中项标签文本的字体系列。
        * **字号**：选中项标签文本的字体大小。
  * **边标签**

    * **普通项**：单击右侧的**眼睛**图标显示普通项（没有响应鼠标事件的柱子）边标签文本。

      * **文本样式**

        * **颜色**：参考[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)，修改普通项边标签文本的颜色。
        * **字体样式**：普通项边标签文本的字体风格。
        * **字体粗细**：普通项边标签文本的字体粗细。
        * **字体**：普通项边标签文本的字体系列。
        * **字号**：普通项边标签文本的字体大小。
    * **选中项**：单击右侧的**眼睛**图标显示选中项（响应鼠标事件的柱子）边标签文本。

      * **文本样式**

        * **颜色**：参考[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)，修改选中项边标签文本的颜色。
        * **字体样式**：选中项边标签文本的字体风格。
        * **字体粗细**：选中项边标签文本的字体粗细。
        * **字体**：选中项边标签文本的字体系列。
        * **字号**：选中项边标签文本的字体大小。
* **图例**：单击右侧的**眼睛**图标显示图例样式。![图例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5237421661/p480214.jpg)

  * **顶部**：图例与组件上侧边界的距离，默认为 **auto**。支持以下几种输入：

    * 具体像素值，例如 **20**。
    * 相对于容器高宽的百分比，例如 **20%**。
    * **left**，**center** 或 **right**，组件会根据相应的位置自动对齐。
  * **右侧**：图例与组件右侧边界的距离，默认为 **auto**。支持以下几种输入：

    * 具体像素值，例如 **20**。
    * 相对于容器高宽的百分比，例如 **20%**。
    * **left**，**center** 或 **right**，组件会根据相应的位置自动对齐。
  * **底部**：图例与组件下侧边界的距离，默认为 **auto**。支持以下几种输入：

    * 具体像素值，例如 **20**。
    * 相对于容器高宽的百分比，例如 **20%**。
    * **left**，**center** 或 **right**，组件会根据相应的位置自动对齐。
  * **宽度**：手动输入数值，调整图例的宽度。默认值为**auto**，自适应图例的宽度。
  * **高度**：手动输入数值，调整图例的高度，默认值为**auto**，自适应图例的高度。
  * **朝向**：单击下拉列表，选择图例的布局朝向。

    * **水平**：图例水平分布。
    * **垂直**：图例垂直分布。
  * **对齐**：单击下拉列表，选择图例标记和文本的对齐方式。

    * **自动**：默认**自动**，根据组件的位置和朝向决定。
    * **左对齐**：当图形在文字左边时，为**左对齐**。
    * **居中对齐**：当图例的图形与文字重叠时，为**居中对齐**。
    * **右对齐**：当图形在文字右边时，为**右对齐**。
  * **内边距**：单击**+**或**\-**号，或手动输入数值，调整图例内边距，单位px，默认各方向内边距为5。
  * **元素间距**：单击**+**或**\-**号，或手动输入数值，调整图例每项之间的距离。横向布局时为水平间隔，纵向布局时为纵向间隔。
  * **图形宽度**：单击**+**或**\-**号，或手动输入数值，调整图例标记的图形宽度。
  * **图形高度**：单击**+**或**\-**号，或手动输入数值，调整图例标记的图形高度。
  * **关闭颜色**：参考[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)，修改图例关闭时的颜色。仅在预览或发布页面，单击图例元素时，可看到效果。
  * **文本样式**

    * **颜色**：参考[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)，修改图例文本的颜色。
    * **字体样式**：图例文本的字体风格。
    * **字体粗细**：图例文本的字体粗细。
    * **字体**：图例文本的字体系列。
    * **字号**：单击**+**或**\-**号，或手动输入数值，改变图例字体的大小。
  * **背景色**：参考[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)，修改图例的背景颜色。
  * **边框色**：参考[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)，修改图例的边框颜色。
  * **边框粗细**：单击**+**或**\-**号，或手动输入数值，调整图例边框的粗细。
  * **对齐**：单击下拉列表，选择图例标记和组件的对齐方式。包括**左对齐**、**居中对齐**和**右对齐**，默认为**居中对齐**。
* **提示框**：单击右侧的**眼睛**图标显示提示框。![提示框](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2673511661/p479529.jpg)

  * **触发条件**：自定义触发类型，可选，包括**鼠标移动触发**、**鼠标点击触发**和**鼠标移动点击同时触发**
  * **背景色**：参考[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)，修改提示框的背景颜色。
  * **边框色**：参考[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)，修改提示框的边框颜色。
  * **边框粗细**：单击**+**或**\-**号，或手动输入数值，修改背景框的边框粗细。
  * **内边距**：单击**+**或**\-**号，或手动输入数值，修改背景框的内边距，单位px，默认各方向内边距为5。
  * **文本样式**

    * **颜色**：参考[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)，修改提示框文本的颜色。
    * **字体样式**：提示框文本的字体风格。
    * **字体粗细**：提示框文本的字体粗细。
    * **字体**：提示框文本的字体系列。
    * **字号**：提示框文本的字体大小。
* **系列**：单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一个条件样式。 单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个条件样式的排列样式。单击![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5896941261/p271562.jpg)图标，即可复制当前选中的条件样式配置并新增一个同样配置的条件样式。

  * **系列名**：自定义系列名称。
  * **系列颜色**：参考[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)，修改系列的颜色。

## 数据面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0827847761/p573762.png)

### **配置字段说明**

| **字段** | **说明**                                                                                                          |
| ---- | ---- |
| nodes  | 用于配置弦图中的节点信息。节点是图中的基本单元，节点列表是一个对象数组，其中每个对象至少包含一个用于标识节点的name属性。您还可以为每个节点指定颜色等额外属性。                               |
| links  | 用于配置弦图中的连接线信息，表示节点之间的关系。连接列表是一个对象数组，其中每个对象通常需要指定源节点 (source) 和目标节点 (target)，并可以可选地指定连接的权重 (value) 以表示节点之间关系的强度。 |

| **配置项**    | **说明**                                                                                                                                                                |
| ---- | ---- |
| **受控模式**   | 打开开关，资产初始化状态下不请求数据，仅通过回调ID或蓝图编辑器配置的方法发起请求数据；关闭开关，可以使用自动更新请求数据。开关默认为关闭状态。                                                                                              |
| **自动更新请求** | 选中后可以设置动态轮询，还可以手动输入轮询的时间频次。取消选中后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和回调ID事件来触发请求更新数据。                                                                                            |
| **数据源**    | 单击**配置数据源**，可在**设置数据源**面板中修改数据源类型和数据查询代码、预览数据源返回结果以及查看数据响应结果，详情请参见[配置资产数据](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-widget-data#task-2376875)。 |
| **数据过滤器**  | 数据过滤器提供数据结构转换、筛选和一些简单的计算功能。单击**添加过滤器**，可在**设置数据源**面板配置数据过滤器脚本，详情请参见[过滤器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-the-data-filter#task-1322674)。 |
| **数据响应结果** | 展示数据请求的响应结果。当数据源发生改变时，可单击右侧的![刷新图标 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0376703061/p89093.png)图标，实时查看数据响应结果。                                |

## 交互面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0827847761/p573763.png)

### **交互说明**

| **交互**      | **说明**                                                                                                                                                                                          |
| ---- | ---- |
| **当点击数据项时** | 选中**启用**，开启组件交互功能。**弦图**组件拥有交互配置，当单击选中某个数据项时抛出回调值，默认抛出数据中的type和id等字段。具体配置请参见[如何配置数字翻牌器组件的回调ID](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards)。 |
| **当图例点击时**  | 选中**启用**，开启组件交互功能。**弦图**组件拥有交互配置，当单击某个图例时抛出回调值，默认抛出数据中的selected字段。具体配置请参见[如何配置数字翻牌器组件的回调ID](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards)。    |

## 蓝图编辑器交互配置

1. 在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2. 单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的**弦图**组件，在画布中可以看到如下图所示的弦图的蓝图编辑器配置参数。![蓝图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5237421661/p480233.jpg)

  * 事件

| **事件**         | **说明**                                                                                                           |
| ---- | ---- |
| **当数据接口请求完成时** | 数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。                           |
| **当数据接口请求失败时** | 数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。 |
| **当点击数据项时**    | 当单击弦图的数据项时抛出的事件，同时抛出对应的数据项。                                                                                      |
| **当图例点击时**     | 当单击弦图的图例时抛出的事件，同时抛出对应的数据项。                                                                                       |
  * 动作

| **动作**     | **说明**                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---- | ---- |
| **请求数据接口** | 重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如弦图配置了API数据源为https://api.test，传到**请求数据接口**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。                                                                                                                                                                                                                                                                                          |
| **导入数据接口** | 按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。                                                                                                                                                                                                                                                                                                                                     |
| **显示提示框**  | 动作传入数据为object类型，参数包括dataindex（数据索引）、name（数据名）、x（横坐标位置）和y（纵坐标位置）。数据示例：{      "dataIndex": 1,       "name": "",       "x": 1,       "y": 1 }                                                                                                                                                                                                                                                                            |
| **隐藏提示框**  | 隐藏提示框，不需要参数。                                                                                                                                                                                                                                                                                                                                                                                                          |
| **图例控制**   | 动作传入数据为object类型，参数包括type（图例动作类型）和name（图例名称）。数据示例：{       "type": "legendToggleSelect",       "name": "" }                                                                                                                                                                                                                                                                                                             |
| **更新组件配置** | 动态更新组件的样式配置。需要先在组件的**配置**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。                                                                                                                                                                                                                                                                                                                               |
| **显示**     | 显示组件，参考数据示例如下。return{   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" }                                                                                                                                                                                                                                                                                                             |
| **隐藏**     | 隐藏组件，参考数据示例如下。return{   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" }                                                                                                                                                                                                                                                                                                             |
| **切换显隐状态** | 切换组件显示或者隐藏，参考数据示例如下。return {   "animationIn": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   },   "animationOut": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   } }                                                                                                                                                        |
| **移动**     | 将组件移动到指定位置，参考数据示例如下。    return{             // 移动方式。绝对定位：to，相对定位：by。默认值：to。         "positionType": "to",       // 指定位置。x坐标，y坐标。       "attr": {         "x": 0,         "y": 0       },       // 动画方式。       "animation": {         "enable": false,         // 动画延时。         "animationDuration": 1000,         // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。         "animationEasing": "linear"       }     } |