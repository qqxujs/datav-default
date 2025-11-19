<!DOCTYPE html> 

本文介绍Echarts 桑基图的图表样式和配置面板的功能。

## **图表样式**![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6522672961/p709723.png)

## 样式面板![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6522672961/p709724.png)

* **搜索配置**：单击**样式**面板右上角的搜索配置项图标![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5013889661/p527384.png)，可在搜索配置面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索配置项](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。
* * **尺寸**：包括组件的宽度和高度，单位为px。
  * **定位**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
  * **旋转**：以组件的中心为中心点，进行旋转，单位为度（°）。  

    * 手动输入角度值，控制组件的旋转角度。
    * 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8222919661/p521797.png)图标，控制组件左右翻转样式。
    * 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8222919661/p521798.png)图标，控制组件上下翻转样式。
  * **不透明度**：取值范围为0\~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
* **渲染引擎**：设置桑基图的渲染引擎。包括**canvas**和**svg**。
* **全局样式**

  * **自定义边距**：桑基图区域与组件上下左右四个边界之间的距离，单位默认px。
  * **水平位置**：单击下拉列表，选择图例标记和文本的对齐方式。

    * **自动**：默认**自动**，根据组件的位置和朝向决定。
    * **左对齐**：当图形在文字左边时，为**左对齐**。
    * **右对齐**：当图形在文字右边时，为**右对齐**。
  * **节点宽度**：单击**+**或**\-**号，或手动输入数值，调整节点宽度，单位px。
  * **节点间隔**：单击**+**或**\-**号，或手动输入数值，调整节点间隔，单位px。
  * **布局迭代次数**：单击**+**或**\-**号，或手动输入数值，调整布局迭代次数，即不断进行迭代优化桑基图中边和节点之间的距离，减少相互遮盖。
  * **可拖拽**：勾选后，开启拖拽功能。在预览或发布页面下，可单击鼠标拖拽图形。
  * **交互高亮**：单击下拉列表，选择桑基图的交互高亮方式。包括**无**、**高亮上下游邻接边**、**高亮上游邻接边**和**高亮下游邻接边**。
  * **标签**：单击右侧的**眼睛**图标显示标签样式。  

    * **位置**：设置标签相当对于桑基图的位置，包括但不限于**top**、**left**和**inside**。
    * **定位距离**：设置标签相对于桑基图上边框线的距离。
    * **旋转**：标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。旋转的角度从 -90 度到 90 度。
    * **颜色**：参考[颜色选择器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)，修改标签文本的颜色。
    * **字体样式**：标签文本的字体风格。
    * **字体粗细**：标签文本的字体粗细。
    * **字体**：标签文本的字体系列。
    * **字号**：标签文本的字体大小。
  * **元素样式**

    * **边框色**：参考[颜色选择器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)，修改元素边框的颜色。
    * **边框粗细**：单击**+**或**\-**号，或手动输入数值，调整元素边框粗细。
    * **透明度**：单击**+**或**\-**号，或手动输入数值，修改指示交叉的透明度，范围为 \[0,1\]。
  * **线样式**

    * **颜色**

      * **取色方式**：设置标签线颜色的取色方式，包括**与source相同**、**与target相同**和**自定义**。
    * **透明度**：单击**+**或**\-**号，或手动输入数值，修改线的透明度，范围为 \[0,1\]。
    * **曲度**：单击**+**或**\-**号，或手动输入数值，修改线的曲度。
  * **提示框**：单击右侧的**眼睛**图标显示提示框。

    * **背景色**：提示框文本标签的背景颜色。
    * **文本样式**

      * **颜色**：参考[颜色选择器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)，修改提示框标签文本的颜色。
      * **字体样式**：提示框文本的字体风格。
      * **字体粗细**：提示框标签文本的字体粗细。
      * **字体**：提示框标签文本的字体系列。
      * **字号**：提示框标签文本的字体大小。
* **调色盘**：单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528933.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528934.png)图标，添加或删除一个调色盘样式。 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528936.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528937.png)图标配置多个调色盘样式的排列样式。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528938.png)图标，即可复制当前选中的调色盘样式配置并新增一个同样配置的调色盘样式。
* **动画**：勾选后，开启动画效果。
* **动画时长**：单击**+**或**\-**号，或手动输入数值，修改初始动画的时长，单位为毫秒。
* **缓动效果**：单击下拉框，选择数据更新动画的缓动效果，默认为**cubicOut**。

## 数据源面板![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6522672961/p709729.png)

| **字段** | **说明**         |
| ---- | ---- |
| nodes  | 用于配置桑基图中的节点信息。 |
| links  | 用于配置桑基图中的边信息。  |

| **数据项配置**  | **说明**                                                                                                                                                                                                                                                                                                           |
| ---- | ---- |
| **数据源**    | 组件的数据源中通过**代码编辑**或**可视化编辑**展示了组件所包含的数据字段。也可以修改**数据类型**，灵活配置组件数据。                                                                                                                                                                                                                                                 |
| **数据映射**   | 当您需要自定义图表字段配置时，可以在**数据映射**模块设置不同的字段映射内容，将这些字段映射到组件对应的字段上。无需修改数据源中的字段，就可以实现数据的实时匹配。也可以单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9633269661/p524955.png)图标对字段分别样式配置。                                                                                                                 |
| **过滤器**    | 打开**过滤器**，选择已创建的数据过滤器或新建数据过滤器，并配置数据过滤器脚本，实现数据的筛选功能。详情请参见[管理数据过滤器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/manage-filters-1)。                                                                                                                                                                       |
| **数据响应结果** | 实时展示了组件所使用的数据。当组件数据源发生变化时，数据响应结果会对应展示最新的数据。如果系统反应延迟，您可以单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8276202761/p538806.png)图标，查看数据响应结果，也可以单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8276202761/p538808.png)图标，获取组件的最新数据。您也可以单击查看示例，查看当前组件的响应结果示例。 |
| **禁止加载态**  | 勾选复选框，在组件更新和预览数据看板时，将看不到组件初始化时的加载内容，去勾选则相反。默认为去勾选状态。                                                                                                                                                                                                                                                             |
| **受控模式**   | 勾选复选框，组件初始化状态下不请求数据，仅通过全局变量或蓝图编辑器配置的方法发起请求数据；去勾选复选框，可以使用自动更新请求数据。默认为去勾选状态。                                                                                                                                                                                                                                       |
| **自动更新请求** | 勾选复选框，可以手动输入轮询的时间频次设置动态轮询。清除后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和全局变量事件来触发请求更新数据。                                                                                                                                                                                                                                          |

## 高级面板![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6522672961/p709730.png)

| **交互**      | **说明**                                                                                                                                                       |
| ---- | ---- |
| **当点击数据项时** | 打开开关，开启组件交互功能。当单击选中某个数据项时抛出回调值，默认抛出数据中的x、y和s字段。具体配置请参见[组件交互配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)。      |
| **当点击节点时**  | 打开开关，开启组件交互功能。当单击某个节点时抛出回调值，默认抛出数据中的name字段。具体配置请参见[组件交互配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)。          |
| **当点击连线时**  | 打开开关，开启组件交互功能。当单击某个连线时抛出回调值，默认抛出数据中的source和target字段。具体配置请参见[组件交互配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)。 |

## 蓝图交互

1. 单击页面左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7498599661/p528973.png)图标，进入**蓝图**页面。
2. 在**图层节点**页签下，添加当前组件至主画布中。
3. 查看蓝图配置参数。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6522672961/p709735.png)

  * **事件**

| **事件**         | **说明**                                                                                  |
| ---- | ---- |
| **当数据接口请求完成时** | 数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据源**页签的**数据响应结果**区域。 |
| **当点击数据项时**    | 当单击桑基图的数据时抛出的事件，同时抛出对应的数据项。                                                             |
| **当点击点时**      | 当单击桑基图的点时抛出的事件，同时抛出对应的数据项。                                                              |
| **当点击连线时**     | 当单击桑基图的连线时抛出的事件，同时抛出对应的数据项。                                                             |
  * **动作**

| **动作**     | **说明**                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---- | ---- |
| **请求数据接口** | 重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如桑基图配置了API数据源为https://api.test，传到**请求数据接口**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。                                                                                                                                                                                                                                                                              |
| **导入数据接口** | 按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据源**页签的**数据响应结果**区域。                                                                                                                                                                                                                                                                                                                         |
| **高亮显示**   | 动作传入数据为object类型，参数包括seriesName（系列名）、seriesIndex（系列索引）、dataIndex（数据索引）和name（数据名），通过seriesName或者seriesIndex指定系列，如果要再指定某个数据可以再指定dataIndex或者name。参考数据示例{       "seriesName": "",       "seriesIndex": 1,       "dataIndex": 1,       "name": "" }                                                                                                                                                              |
| **取消高亮**   | 动作传入数据为object类型，参数包括seriesName（系列名）、seriesIndex（系列索引）、dataIndex（数据索引）和name（数据名），通过seriesName或者seriesIndex指定系列，如果要再指定某个数据可以再指定dataIndex或者name。参考数据示例{       "seriesName": "",       "seriesIndex": 1,       "dataIndex": 1,       "name": "" }                                                                                                                                                              |
| **显示提示框**  | 动作传入数据为object类型，参数包括dataindex（数据索引）、name（数据名）、x（横坐标位置）和y（纵坐标位置）。参考数据示例{      "dataIndex": 1,       "name": "",       "x": 1,       "y": 1 }                                                                                                                                                                                                                                                                |
| **隐藏提示框**  | 隐藏提示框，不需要参数。                                                                                                                                                                                                                                                                                                                                                                                               |
| **移动**     | 将组件移动到指定位置，参考数据示例。 {             // 移动方式。绝对定位：to，相对定位：by。默认值：to。         "positionType": "to",       // 指定位置。x坐标，y坐标。       "attr": {         "x": 0,         "y": 0       },       // 动画方式。       "animation": {         "enable": false,         // 动画延时。         "animationDuration": 1000,         // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。         "animationEasing": "linear"       }     } |
| **切换显隐**   | 切换组件显示或者隐藏，不需要参数。                                                                                                                                                                                                                                                                                                                                                                                          |
| **显示**     | 显示组件，参考数据示例。{   "animationType": "",//动画方式，可选值：fade，不填无动画。   "animationDuration": 1000,//动画延迟，单位ms。   "animationEasing": ""//动画曲线 }                                                                                                                                                                                                                                                                        |
| **隐藏**     | 隐藏组件，参考数据示例。{   "animationType": "",//动画方式，可选值：fade，不填无动画。   "animationDuration": 1000,//动画延迟，单位ms。   "animationEasing": ""//动画曲线 }                                                                                                                                                                                                                                                                        |
| **更新组件配置** | 动态更新组件的样式配置。需要先在组件的**样式**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。                                                                                                                                                                                                                                                                                                                    |