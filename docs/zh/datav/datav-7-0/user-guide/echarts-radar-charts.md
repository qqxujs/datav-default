<!DOCTYPE html> 

本文介绍Echarts 雷达图的图表样式和配置面板的功能。

## **图表样式**![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1735962961/p709419.png)

## 样式面板![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1735962961/p709420.png)

* **搜索配置**：单击**样式**面板右上角的搜索配置项图标![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5013889661/p527384.png)，可在搜索配置面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索配置项](/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。
* * **尺寸**：包括组件的宽度和高度，单位为px。
  * **定位**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
  * **旋转**：以组件的中心为中心点，进行旋转，单位为度（°）。  

    * 手动输入角度值，控制组件的旋转角度。
    * 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8222919661/p521797.png)图标，控制组件左右翻转样式。
    * 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8222919661/p521798.png)图标，控制组件上下翻转样式。
  * **不透明度**：取值范围为0\~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
* **渲染引擎**：设置雷达图的渲染引擎。包括**canvas**和**svg**。
* **图例**：单击右侧的**眼睛**图标显示图例样式。

  * **水平位置**：单击下拉列表，选择图例标记和文本的对齐方式。

    * **自动**：默认**自动**，根据组件的位置和朝向决定。
    * **左对齐**：当图形在文字左边时，为**左对齐**。
    * **居中对齐**：当图例的图形与文字重叠时，为**居中对齐**。
    * **右对齐**：当图形在文字右边时，为**右对齐**。
  * **垂直位置**：单击下拉列表，选择图例标记和文本的对齐方式。

    * **自动**：默认**自动**，根据组件的位置和朝向决定。
    * **顶部对齐**：当图形在窗口上方时，为**顶部对齐**。
    * **居中对齐**：当图形在窗口中间时，为**居中对齐**。
    * **底部对齐**：当图形在窗口下方时，为**底部对齐**。
  * **朝向**：单击下拉列表，选择图例的布局朝向。

    * **水平**：图例水平分布。
    * **垂直**：图例垂直分布。
  * **内边距**：单击**+**或**\-**号，或手动输入数值，调整图例内边距，单位px，默认各方向内边距为5。
  * **元素间距**：单击**+**或**\-**号，或手动输入数值，调整图例每项之间的距离。横向布局时为水平间隔，纵向布局时为纵向间隔。
  * **文本样式**

    * **颜色**：参考[颜色选择器](/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)，修改图例文本的颜色。
    * **字体样式**：图例文本的字体风格。
    * **字体粗细**：图例文本的字体粗细。
    * **字体**：图例文本的字体系列。
    * **字号**：单击**+**或**\-**号，或手动输入数值，改变图例字体的大小。
* **雷达图**

  * **半径**：雷达图与组件边界的距离。支持以下几种输入：

    * 具体像素值，例如 **20**。
    * 相对于容器高宽的百分比，例如 **20%**。
  * **起始角度**：雷达图逆时针旋转的起始角度，单位为弧度。
  * **名称**

    * **颜色**：参考[颜色选择器](/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)，修改名称的颜色。
    * **字体样式**：名称的字体风格。
    * **字体粗细**：名称的字体粗细。
    * **字体**：名称的字体系列。
    * **字号**：单击**+**或**\-**号，或手动输入数值，改变名称字体的大小。
  * **名称间隔**：单击**+**或**\-**号，或手动输入数值，修改雷达图名称与轴线之间的距离。
  * **分割段数**：单击+或-号，或手动输入数值，设置坐标轴的分割段数。
  * **形状**：设置雷达图的形状，包括**多边形**和**圆形**。
  * **自动伸缩**：勾选后，雷达图可显示自动伸缩；去勾选，雷达图关闭自动伸缩。
  * **静态**：勾选后，坐标轴为静态无法交互。
  * **轴线**：单击右侧的**眼睛**图标显示雷达图轴线。

    * **线样式**

      * **颜色**：参考[颜色选择器](/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)，修改轴线的颜色。
      * **宽度**：单击**+**或**\-**号，或手动输入数值，修改轴线的宽度。
      * **类型**：坐标轴轴线的类型。可选，包括**实线**、**虚线**和**点线**。
      * **透明度**：单击**+**或**\-**号，或手动输入数值，修改轴线的透明度。范围为 \[0,1\]。
  * **刻度线**：单击右侧的**眼睛**图标显示坐标轴刻度。

    * **内部**：勾选后，坐标轴刻度朝内；去勾选，坐标轴刻度朝外。
    * **长度**：单击**+**或**\-**号，或手动输入数值，修改坐标轴刻度的长度。
    * **线样式**

      * **颜色**：参考[颜色选择器](/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)，修改刻度线的颜色。
      * **宽度**：单击**+**或**\-**号，或手动输入数值，修改刻度线的宽度。
      * **类型**：坐标轴轴线的类型。可选，包括**实线**、**虚线**和**点线**。
      * **透明度**：单击**+**或**\-**号，或手动输入数值，修改刻度线的透明度。范围为 \[0,1\]。
  * **分割线**：单击右侧的**眼睛**图标显示分割线。

    * **线样式**

      * **颜色**：参考[颜色选择器](/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)，修改分割线的颜色。
      * **宽度**：单击**+**或**\-**号，或手动输入数值，修改分割线的线宽。
      * **类型**：坐标轴轴线的类型。可选，包括**实线**、**虚线**和**点线**。
      * **透明度**：单击**+**或**\-**号，或手动输入数值，修改分割线的透明度，范围为 \[0,1\]。
  * **分割区域**：单击右侧的**眼睛**图标显示分割区域。

    * **区域样式**

      * **颜色**：单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528933.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528934.png)图标，添加或删除一个颜色样式。 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528936.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528937.png)图标配置多个颜色样式的排列样式。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528938.png)图标，即可复制当前选中的颜色样式配置并新增一个同样配置的颜色样式。参考[颜色选择器](/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)，修改分割线的颜色。
      * **透明度**：单击**+**或**\-**号，或手动输入数值，修改分割区域的透明度，范围为 \[0,1\]。
  * **维度**：单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528933.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528934.png)图标，添加或删除一个维度样式。 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528936.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528937.png)图标配置多个维度色样式的排列样式。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528938.png)图标，即可复制当前选中的维度样式配置并新增一个同样配置的维度色样式。
* **提示框**：单击右侧的**眼睛**图标显示提示框。

  * **背景色**：参考[颜色选择器](/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)，修改提示框的背景颜色。
  * **文本样式**

    * **颜色**：参考[颜色选择器](/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)，修改提示框文本的颜色。
    * **字体样式**：提示框文本的字体风格。
    * **字体粗细**：提示框文本的字体粗细。
    * **字体**：提示框文本的字体系列。
    * **字号**：提示框文本的字体大小。
* **系列**：单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528933.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528934.png)图标，添加或删除一个条件样式。 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528936.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528937.png)图标配置多个条件样式的排列样式。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528938.png)图标，即可复制当前选中的条件样式配置并新增一个同样配置的条件样式。

  * **名称**：自定义系列名称，需要与数据中的`s`字段值配合使用。
  * **标记图形**：自定义标记图形，默认值为**圆形**。标记类型包括 **无**，**圆形**，**矩形**，**圆角矩形**，**三角形**，**菱形**， **图钉**和**箭头** ，详细请参考[ECharts官网](https://echarts.apache.org/zh/option.html#series-line.markPoint.symbol)。
  * **标记尺寸**：单击**+**或**\-**号，或手动输入数值，修改标记图形的尺寸。
  * **标签**

    * **位置**：设置标签相当对于雷达图的位置，包括但不限于**top**、**left**和**inside**。
    * **定位距离**：单击**+**或**\-**号，或手动输入数值，修改标签相当对于雷达图的距离。
    * **旋转**：单击**+**号或者**\-**号，或者手动输入数字，调整雷达图的旋转角度。
    * **颜色**：参考[颜色选择器](/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)，修改标签的颜色。
    * **字体样式**：普通项标签文本的字体风格。
    * **字体粗细**：普通项标签文本的字体粗细。
    * **字体**：普通项标签文本的字体系列。
    * **字号**：普通项标签文本的字体大小。
  * **元素样式**

    * **颜色**：参考[颜色选择器](/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)，修改元素的颜色。
    * **透明度**：单击**+**或**\-**号，或手动输入数值，修改元素的透明度，范围为 \[0,1\]。
  * **线样式**

    * **颜色**：参考[颜色选择器](/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)，修改线的颜色。
    * **宽度**：单击**+**或**\-**号，或手动输入数值，修改线的宽度。
    * **类型**：线的描边类型，可选，包括**实线**和**虚线**。
    * **透明度**：单击**+**或**\-**号，或手动输入数值，修改线的透明度。范围为 \[0,1\]。
  * **区域样式**

    * **颜色**：参考[颜色选择器](/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)，修改区域样式的颜色。
    * **透明度**：单击**+**或**\-**号，或手动输入数值，修改区域交叉的透明度，范围为 \[0,1\]。
* **动画**：勾选后，开启动画效果。
* **动画时长**：单击**+**或**\-**号，或手动输入数值，修改初始动画的时长，单位为毫秒。
* **缓动效果**：单击下拉框，选择数据更新动画的缓动效果，默认为**cubicOut**。

## 数据源面板![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1735962961/p709425.png)

|    **字段**    |    **说明**    |
|    ----    |    ----    |
|    dim    |    用于配置雷达图中每个维度的类目，即维度的名称。    |
|    value    |    用于配置雷达图中每个维度的值。    |
|    s    |    （可选） 系列值，与样式面板中的**系列**配置项配合使用。    |

|    **数据项配置**    |    **说明**    |
|    ----    |    ----    |
|    **数据源**    |    组件的数据源中通过**代码编辑**或**可视化编辑**展示了组件所包含的数据字段。也可以修改**数据类型**，灵活配置组件数据。    |
|    **数据映射**    |    当您需要自定义图表字段配置时，可以在**数据映射**模块设置不同的字段映射内容，将这些字段映射到组件对应的字段上。无需修改数据源中的字段，就可以实现数据的实时匹配。也可以单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9633269661/p524955.png)图标对字段分别样式配置。    |
|    **过滤器**    |    打开**过滤器**，选择已创建的数据过滤器或新建数据过滤器，并配置数据过滤器脚本，实现数据的筛选功能。详情请参见[管理数据过滤器](/zh/datav/datav-7-0/user-guide/filter-configuration-and-application)。    |
|    **数据响应结果**    |    实时展示了组件所使用的数据。当组件数据源发生变化时，数据响应结果会对应展示最新的数据。如果系统反应延迟，您可以单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8276202761/p538806.png)图标，查看数据响应结果，也可以单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8276202761/p538808.png)图标，获取组件的最新数据。您也可以单击查看示例，查看当前组件的响应结果示例。    |
|    **禁止加载态**    |    勾选复选框，在组件更新和预览数据看板时，将看不到组件初始化时的加载内容，去勾选则相反。默认为去勾选状态。    |
|    **受控模式**    |    勾选复选框，组件初始化状态下不请求数据，仅通过全局变量或蓝图编辑器配置的方法发起请求数据；去勾选复选框，可以使用自动更新请求数据。默认为去勾选状态。    |
|    **自动更新请求**    |    勾选复选框，可以手动输入轮询的时间频次设置动态轮询。清除后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和全局变量事件来触发请求更新数据。    |

## 高级面板![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1735962961/p709433.png)

|    **交互**    |    **说明**    |
|    ----    |    ----    |
|    **当点击数据项时**    |    打开开关，开启组件交互功能。当单击选中某个数据项时抛出回调值，默认抛出数据中的value、dim和s字段。具体配置请参见[组件交互配置](/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)。    |
|    **当点击坐标轴标签时**    |    打开开关，开启组件交互功能。当单击某个坐标轴标签时抛出回调值，默认抛出数据中的value、dim和s字段。具体配置请参见[组件交互配置](/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)。    |
|    **当图例点击时**    |    打开开关，开启组件交互功能。当单击某个图例时抛出回调值，默认抛出数据中的selected字段。具体配置请参见[组件交互配置](/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)。    |

## 蓝图交互

1. 单击页面左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7498599661/p528973.png)图标，进入**蓝图**页面。
2. 在**图层节点**页签下，添加当前组件至主画布中。
3. 查看蓝图配置参数。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1735962961/p709441.png)

  * **事件**

|    **事件**    |    **说明**    |
|    ----    |    ----    |
|    **当数据接口请求完成时**    |    数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据源**页签的**数据响应结果**区域。    |
|    **当点击数据项时**    |    当单击雷达图的数据时抛出的事件，同时抛出对应的数据项。    |
|    **当点击坐标轴标签时**    |    当单击雷达图的坐标轴标签时抛出的事件，同时抛出该标签对应的数据项。    |
|    **当图例点击时**    |    当单击雷达图的图例时抛出的事件，同时抛出对应的数据项。    |
  * **动作**

|    **动作**    |    **说明**    |
|    ----    |    ----    |
|    **请求数据接口**    |    重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如雷达图配置了API数据源为https://api.test，传到**请求数据接口**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。    |
|    **导入数据接口**    |    按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据源**页签的**数据响应结果**区域。    |
|    **高亮显示**    |    动作传入数据为object类型，参数包括seriesName（系列名）、seriesIndex（系列索引）、dataIndex（数据索引）和name（数据名），通过seriesName或者seriesIndex指定系列，如果要再指定某个数据可以再指定dataIndex或者name。参考数据示例{       "seriesName": "",       "seriesIndex": 1,       "dataIndex": 1,       "name": "" }    |
|    **取消高亮**    |    动作传入数据为object类型，参数包括seriesName（系列名）、seriesIndex（系列索引）、dataIndex（数据索引）和name（数据名），通过seriesName或者seriesIndex指定系列，如果要再指定某个数据可以再指定dataIndex或者name。参考数据示例{       "seriesName": "",       "seriesIndex": 1,       "dataIndex": 1,       "name": "" }    |
|    **显示提示框**    |    动作传入数据为object类型，参数包括dataindex（数据索引）、name（数据名）、x（横坐标位置）和y（纵坐标位置）。参考数据示例{      "dataIndex": 1,       "name": "",       "x": 1,       "y": 1 }    |
|    **隐藏提示框**    |    隐藏提示框，不需要参数。    |
|    **图例控制**    |    动作传入数据为object类型，参数包括type（图例动作类型）和name（图例名称）。参考数据示例{   "type": "",//图例动作类型包括: legendSelect, legendUnSelect, legendToggleSelect   "name": "" }    |
|    **移动**    |    将组件移动到指定位置，参考数据示例。 {             // 移动方式。绝对定位：to，相对定位：by。默认值：to。         "positionType": "to",       // 指定位置。x坐标，y坐标。       "attr": {         "x": 0,         "y": 0       },       // 动画方式。       "animation": {         "enable": false,         // 动画延时。         "animationDuration": 1000,         // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。         "animationEasing": "linear"       }     }    |
|    **切换显隐**    |    切换组件显示或者隐藏，不需要参数。    |
|    **显示**    |    显示组件，参考数据示例。{   "animationType": "",//动画方式，可选值：fade，不填无动画。   "animationDuration": 1000,//动画延迟，单位ms。   "animationEasing": ""//动画曲线 }    |
|    **隐藏**    |    隐藏组件，参考数据示例。{   "animationType": "",//动画方式，可选值：fade，不填无动画。   "animationDuration": 1000,//动画延迟，单位ms。   "animationEasing": ""//动画曲线 }    |
|    **更新组件配置**    |    动态更新组件的样式配置。需要先在组件的**样式**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。    |