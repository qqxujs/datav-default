<!DOCTYPE html> 

本文为您介绍飞线层各配置项的含义。

## **图表样式**

飞线层是3D平面地图（v4.x版本）的子组件，支持独立的样式和数据配置，能够以飞线的形式表现地理位置上两个点之间的数据，可以用来展示两地之间的关联信息，如物流、交易等。![2024-12-25_15-20-53](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p894080.gif)

## **快速样式**

飞线层具有快速样式功能，您可以根据实际应用场景，选择不同的样式。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p879990.png)

## 样式面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p879991.png)

* **搜索配置**：单击**样式**面板右上角的搜索配置项图标![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5013889661/p527384.png)，可在搜索配置面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索配置项](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。
* **通用**：设置飞线层的通用配置参数项。

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **不透明度**    |    设置飞线层的不透明度值，取值范围为0\~1。数值越大飞线层样式越不透明。    |
* **图形**：设置飞线层的图形配置项。

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **混合模式**    |    图形中混合不同图层的像素颜色，包括**正常混合**和**叠加混合**。    |
|    **飞线样式**    |    设置飞线线条的样式。**线型**：单击下拉选项框，选择一种飞线的线型样式。**线宽**：拖动滑块设置飞线的宽度值，取值范围为0\~100，单位px。**颜色**：请参见[颜色映射器使用说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/instructions-of-color-mapper)，配置不同飞线的映射颜色样式。**相对长度**：拖动滑块设置飞线层的相对长度，取值范围为10\~100，单位%。**弧度**：拖动滑块设置飞线的弧度矢跨比值，取值范围为0\~1。**飞行时间**：飞行样式动画完成需要的时间，取值范围为0.1\~10，单位秒。**飞出间隔**：连续的飞行动画之间的时间间隔，取值范围为0.1\~3，单位秒。    |
|    **衬线样式**    |    设置飞线的衬线样式，包括衬线的线型，线宽和颜色，可通过![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p874372.jpg)图标，确认在符合当前条件时是否应用当前样式。    |
|    **线头样式**    |    设置飞线线头的样式。单击**线头样式**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p874378.jpg)图标，可控制**线头样式**的显隐。**线头形状**：选择一种图标形状的线头样式，您可以单击样式右侧的下拉选项框，选择系统内置多种图标样式；也可在下拉框面板的输入框内自定义输入图片的URL地址，将远程服务器上的图片作为线头图标；或者单击输入框右侧的![上传按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p874379.jpg)图标，上传本地图片作为线头图标。**颜色**：设置当前线头样式的颜色。**半径**：设置当前线头样式的图形半径。**描边颜色**：设置当前线头样式的描边颜色。**描边粗细**：设置当前线头样式的描边粗细，范围为0\~5，单位px。    |
|    **起点气泡**    |    设置飞线**起点气泡**和**落点气泡**的样式。单击左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p874391.jpg)图标，可控制**起点气泡**和**落点气泡**的显隐。**气泡半径**：设置气泡半径，请参见[尺寸映射器使用说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/dimension-mapper-instructions)，配置不同气泡的映射半径大小。**相对偏移**：设置气泡在水平和垂直方向的偏移量，取值范围为-100\~100。**旋转**：设置气泡样式的旋转角度，取值范围为0\~360。**气泡样式**：单击**气泡样式**右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p874395.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p874396.png)图标，添加或删除一个气泡样式。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p874393.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p874397.png)图标配置多个气泡样式的页面布局。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p874394.png)图标，即可复制当前选中样式配置内容并新增一个同样配置的气泡样式。当配置多个气泡效果时，可以叠加显示。**形状**：气泡的图标样式，您可以单击样式右侧的下拉选项框，选择系统内置多种图标样式；也可在下拉框面板的输入框内自定义输入图片的URL地址，将远程服务器上的图片作为气泡图标；或者单击输入框右侧的![上传按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p874392.jpg)图标，上传本地图片作为气泡图标。**颜色**：设置气泡的颜色样式，请参见[颜色映射器使用说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/instructions-of-color-mapper)，配置不同气泡的映射颜色样式。**混合模式**：设置气泡的混合叠加渲染模式，包括正常混合和叠加混合。**尺寸比例**：设置气泡相对于根据**气泡半径**配置项生成的图标的缩放比例，范围为0\~1。**动画**：设置气泡动画。**类型**：设置气泡的动画类型，包括旋转、呼吸、渐现和扩散。**速度**：设置气泡动画的速度，取值范围为500\~5000，单位ms。**透明度范围**：拖动滑块，设置气泡渐现的透明度范围，范围为0\~100。当动画类型选择**渐现**时可配置。**缩放范围**：设置气泡呼吸的缩放范围，范围为1\~5。当动画类型选择**呼吸**时可配置。**扩散倍数**：设置气泡相对于根据**气泡半径**配置项生成的图标的扩散倍数，范围为1\~5。当动画类型选择**扩散**时可配置。    |
|    **落点气泡**    |    |
* **交互**：通过鼠标**点击**和**悬浮**两种方式，动态地和飞线层内容进行互动，增强了地图的实用性和用户体验。

**说明**  
动态交互配置效果仅在预览发布或开启交互模式时可见。

  * **图形交互**：单击左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8354772371/p874438.jpg)图标，可控制是否开启**图形交互**功能。

    * **尺寸缩放**：拖动滑块设置气泡尺寸缩放的范围，取值范围为1\~2。
    * **高亮颜色**：设置交互时飞线的高亮颜色。
  * **标签**：设置飞线层内标签的样式参数。

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **标签锚点**    |    飞线层数据标注或注释时，确认标签的位置，以便清晰地传达信息。    |
|    **相对偏移**    |    设置飞线层标签在水平和垂直方向的相对偏移值，取值范围为-100\~100，单位px。    |
|    **起点标签**    |    设置飞线**起点标签**和**落点标签**的样式。单击左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p874391.jpg)图标，可控制**起点标签**和**落点标签**的显隐。**每行样式**：单击**每行样式**右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p874460.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p874463.png)图标，添加或删除一个每行内容样式。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p874464.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p874462.png)图标配置多个每行内容样式的显示布局。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p874461.png)图标，即可复制当前选中内容样式配置内容并新增一个同样配置的每行内容。**行字段**：行内容的字段名称，需要与地理数据中的字段名称匹配使用。**字段样式**：设置行字段样式，包括字段的字体样式、字号大小、颜色和粗细值。**字段前缀**：设置字段前缀的具体内容、内容间隔值、字体、字号大小、颜色和粗细值。单击**字段前缀**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p874466.jpg)图标，可控制**字段前缀**样式的显隐。**字段后缀**：设置字段后缀的具体内容 、内容间隔值、字体、字号大小、颜色和粗细值。单击**字段后缀**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p874465.jpg)图标，可控制**字段后缀**样式的显隐。**最大宽度**：设置标签显示的单行最大宽度，单位为px，超出内容的显示方式由文本溢出配置项决定。**文本溢出**：文本内容超出了指定区域的边界，导致显示不完整或影响整体布局。**切断**：当文本内容超过区域的边界时，隐藏超出的部分，在有限空间内提供信息的快速概览。**换行**：当文本内容超过区域的边界时，自动将文本移到下一行以便继续完整显示。**行高比例**：标签的行高比例值，取值范围为1\~5。**内容描边**：标签的内容描边样式，包括设置描边的颜色和描边粗细值，单击**内容描边**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p874467.jpg)图标，可控制**内容描边**的显隐。**内容阴影**：标签的内容阴影样式，包括设置阴影的颜色、阴影模糊值和阴影偏移度在x和y方向上的值，单击**内容阴影**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p874468.jpg)图标，可控制**内容阴影**的显隐。    |
|    **落点标签**    |    |
|    **背景样式**    |    设置背景样式参数，单击**背景样式**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制**背景样式**的显隐。**类型**：在选择框中选择或上传需要使用的背景样式。**内容边距**：设置标签中的内容距离上下左右四个方向的边距值。    |
* **条件**：条件样式说明，通过条件筛选将满足条件的区域配置为特殊颜色。

**条件样式**：单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528933.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528934.png)图标，添加或删除一个条件样式。 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528936.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528937.png)图标配置多个条件样式的排列样式。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528938.png)图标，即可复制当前选中条件样式配置内容并新增一个同样配置的条件样式。具体样式配置说明，请参见[条件树使用说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/conditional-tree-instructions)。

**图形**：打开开关，配置该条件样式中的图形配置项；关闭开关，无法配置该样式下的图形配置项。

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **飞线样式**    |    设置飞线的飞线样式，包括飞线的线宽和颜色，可通过![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p874485.jpg)图标，确认在符合当前条件时是否应用当前样式。    |

## 数据源面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p879993.png)

|    字段    |    说明    |
|    ----    |    ----    |
|    geometry    |    飞线在地图中飞行的空间坐标数据串。    |
|    name    |    （可选）飞线的名称。    |
|    value    |    （可选）飞线的数据值映射字段。    |
|    id    |    （可选）飞线的唯一标识。    |
|    colorField    |    （可选）飞线的颜色映射字段。    |

|    **数据项配置**    |    **说明**    |
|    ----    |    ----    |
|    **数据源**    |    组件的数据源中通过**代码编辑**或**可视化编辑**展示了组件所包含的数据字段。也可以修改**数据类型**，灵活配置组件数据。    |
|    **数据映射**    |    当您需要自定义图表字段配置时，可以在**数据映射**模块设置不同的字段映射内容，将这些字段映射到组件对应的字段上。无需修改数据源中的字段，就可以实现数据的实时匹配。也可以单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9633269661/p524955.png)图标对字段分别样式配置。    |
|    **过滤器**    |    打开**过滤器**，选择已创建的数据过滤器或新建数据过滤器，并配置数据过滤器脚本，实现数据的筛选功能。详情请参见[管理数据过滤器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/manage-filters-1)。    |
|    **数据响应结果**    |    实时展示了组件所使用的数据。当组件数据源发生变化时，数据响应结果会对应展示最新的数据。如果系统反应延迟，您可以单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8276202761/p538806.png)图标，查看数据响应结果，也可以单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8276202761/p538808.png)图标，获取组件的最新数据。您也可以单击查看示例，查看当前组件的响应结果示例。    |
|    **禁止加载态**    |    勾选复选框，在组件更新和预览数据看板时，将看不到组件初始化时的加载内容，去勾选则相反。默认为去勾选状态。    |
|    **受控模式**    |    勾选复选框，组件初始化状态下不请求数据，仅通过全局变量或蓝图编辑器配置的方法发起请求数据；去勾选复选框，可以使用自动更新请求数据。默认为去勾选状态。    |
|    **自动更新请求**    |    勾选复选框，可以手动输入轮询的时间频次设置动态轮询。清除后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和全局变量事件来触发请求更新数据。    |

## 高级面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p893886.png)

通过高级面板配置交互事件或关联全局变量，实现组件之间的联动。具体操作请参见[组件交互配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)。

## 蓝图交互

1. 单击页面左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7498599661/p528973.png)图标，进入**蓝图**页面。
2. 在**图层节点**页签下，添加当前组件至主画布中。
3. 查看蓝图配置参数。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6615115371/p879989.png)

**说明**  
图层事件和动作的参数提示信息，可以在画布右侧的锚点配置中单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8354772371/p878122.png)图标查看。

  * **事件**

|    **事件**    |    **说明**    |
|    ----    |    ----    |
|    **当数据更新时**    |    数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据源**页签的**数据响应结果**区域。    |
|    **当数据请求状态变化时**    |    当数据请求状态变化时抛出该事件，回调参数为当前状态，具体数据示例请参见画布编辑器中组件右侧配置面板**数据源**页签的**数据响应结果**区域。    |
|    **当点击飞线时**    |    当点击飞线时触发事件并抛出数据。    |
|    **当鼠标移入飞线时**    |    当鼠标移入飞线时触发事件并抛出数据。    |
|    **当鼠标移出飞线时**    |    当鼠标移出飞线时触发事件并抛出数据。    |
  * **动作**

|    **动作**    |    **说明**    |
|    ----    |    ----    |
|    **导入数据**    |    按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。参考数据示例。\[   {     "geometry": {}, //飞线在地图中飞行的空间坐标数据。     "name": "", //飞线的名称      "value": 0, //飞线的值      "id": "", //飞线的ID唯一标识码      "colorField": "" //飞线的颜色映射字段   } \]    |
|    **请求数据**    |    重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如飞线层配置了API数据源为https://api.test，传到**请求数据接口**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。    |
|    **切换显隐**    |    **切换显隐**、**显示**和**隐藏**组件默认不需要参数，可以按需添加动画配置，参考数据示例。{   //动画方式，可选值为：appear\|fade|slideToUp，默认值为 fade，不填无动画。   "animationType": "fade",   //动画延迟，默认值为1000，单位ms。   "animationDuration": 1000,   //动画曲线，可选值为：linear|easeInOutQuad|easeInOutExpo，默认值为 linear。   "animationEasing": "linear" }    |
|    **显示**    |    |
|    **隐藏**    |    |
|    **更新组件配置**    |    动态更新组件的样式配置。需要先在组件的**样式**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。    |