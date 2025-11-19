<!DOCTYPE html> 

本文介绍区域热力层各配置项的含义。

## **图表样式**

区域热力层是3D平面地图（v3.x版本）的子组件，支持独立的样式、数据和交互配置，包括区域的图形、标签和交互等信息，能够以热力区域的形式表现地理位置上的区域信息。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6984931961/p703148.png)

## 样式面板![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6984931961/p703151.png)

* **搜索配置**：单击**样式**面板右上角的搜索配置项图标![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5013889661/p527384.png)，可在搜索配置面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索配置项](/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。
* **通用**：设置区域热力层的通用配置参数项。

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **不透明度**    |    设置区域热力层的不透明度值，取值范围为0\~100，单位%。数值越大热力层样式越不透明。    |
* **图形**：设置区域热力层的图形配置样式参数项。  

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **填充颜色**    |    数据中最大、最小及为空的value值对应区域的颜色。请参见[颜色映射器使用说明](/zh/datav/datav-7-0/user-guide/instructions-of-color-mapper)，配置不同区域的映射颜色样式。    |
|    **填充纹理**    |    单击**填充纹理**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制区域块的填充纹理样式显隐。**纹理形状**：区域纹理的形状样式，请参见[形状映射器使用说明](/zh/datav/datav-7-0/user-guide/shape-mapper-instructions)，配置不同区域的填充纹理的映射形状样式。**纹理颜色**：请参见[颜色映射器使用说明](/zh/datav/datav-7-0/user-guide/instructions-of-color-mapper)，配置不同区域的纹理映射颜色样式。**平铺尺寸**：区域纹理的平铺尺寸样式，包括调整纹理的宽度值和高度值，取值范围5\~100，单位px。    |
|    **描边样式**    |    区域热力层各区域边线的颜色和粗细。单击**描边样式**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制描边样式的显隐。    |
|    **文字标注**    |    单击**文字标注**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制文字标注样式的显隐。**文本样式**：区域内文本的字体样式、文字的粗细、字号的大小以及字体的颜色。**文本描边**：打开开关，设置文本描边的粗细及颜色。**文本阴影**：打开开关，设置区域文本的阴影颜色、阴影模糊度、在X方向和Y方向的偏移量。    |
* **标签**：设置区域热力层的区域的标签配置项参数。

  * **显示标签**：区域的标签样式，单击**显示标签**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制**显示标签**的显隐。
  * **显示方式**：区域标签的显示方式，可选**全显**和**点击**。
  * **内容样式**：区域标签的内容样式参数配置项。

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **每行样式**    |    单击**每行样式**右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528933.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528934.png)图标，添加或删除一个每行内容样式。 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528936.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528937.png)图标配置多个每行内容样式的排列方式。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528938.png)图标，即可复制当前选中内容样式配置内容并新增一个同样配置的每行内容。**行字段**：行内容的字段名称，需要和数据面板中的字段相匹配。**字段样式**：设置行字段样式，包括字段的字体样式、字号大小、颜色和粗细值。**字段前缀**：设置字段前缀的具体内容 、内容间隔值、字体、字号大小、颜色和粗细值。单击**字段前缀**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制**字段前缀**样式的显隐。**字段后缀**：设置字段后缀的具体内容 、内容间隔值、字体、字号大小、颜色和粗细值。单击**字段后缀**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制**字段后缀**样式的显隐。    |
|    **字段宽度**    |    区域标签的显示字段的宽度样式，包括字段的适应类型方式，可选**自适应**或**固定宽度**，并根据适应类型设置字段宽度的值，单位px。    |
|    **行高比例**    |    区域标签的行高比例值，取值范围为1\~2。    |
|    **内容描边**    |    区域标签的内容描边样式，包括设置描边的颜色和描边粗细值，单击**内容描边**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制**内容描边**的显隐。    |
|    **内容阴影**    |    区域标签的内容阴影样式，包括设置阴影的颜色、阴影模糊值和阴影偏移度在x和y方向上的值，单击**内容阴影**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制**内容阴影**的显隐。    |
  * **背景样式**：设置区域标签的背景样式参数，单击**背景样式**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制**背景样式**的显隐。

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **背景类型**    |    标签背景的类型，可选**矢量**和**图片**。    |
|    **背景颜色**    |    设置标签的背景颜色，仅在**背景类型**选择**矢量**时可配置。    |
|    **边框样式**    |    设置标签边框的样式，包括边框的线类型，线宽的值和颜色。仅在**背景类型**选择**矢量**时可配置。    |
|    **边框圆角**    |    设置标签边框的圆角在四个方向的值，单位px。仅在**背景类型**选择**矢量**时可配置。    |
|    **图片模板**    |    选择背景图片的模板样式，仅在**图片模板**选择**图片**时可配置。    |
|    **不透明度**    |    设置背景图片的不透明度值，取值范围为0\~100，仅在**图片模板**选择**图片**时可配置。    |
|    **内容边距**    |    设置标签中的内容距离上下左右四个方向的边距值。    |
* **交互**：区域热力层的交互配置项。

  * **图形交互**：单击**图形交互**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制**图形交互**的显隐。

**支持多选**：打开开关，支持多选交互效果；关闭开关，不支持多选。
  * **点击样式**：单击**点击样式**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制**点击样式**的显隐。

**填充颜色**：设置单击时区域热力层的填充颜色。
* **条件**：条件样式说明。

**条件样式**：单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528933.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528934.png)图标，添加或删除一个条件样式。 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528936.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528937.png)图标配置多个条件样式的排列样式。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528938.png)图标，即可复制当前选中条件样式配置内容并新增一个同样配置的条件样式。具体样式配置说明，请参见[条件树使用说明](/zh/datav/datav-7-0/user-guide/conditional-tree-instructions)。

**图形**：打开开关，配置该条件样式中的图形配置项；关闭开关，无法配置该条件样式下的图形配置项。

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **填充颜色**    |    单击**填充颜色**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制该条件下的区域填充颜色的显隐。    |
|    **填充纹理**    |    单击**填充纹理**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制该条件下的区域的填充纹理样式显隐。**纹理形状**：单击**纹理形状**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制该条件下的区域的纹理形状样式的显隐。**纹理颜色**：单击**纹理颜色**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制该条件下的区域的纹理颜色的显隐。**平铺尺寸**：单击**平铺尺寸**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制该条件下的区域的平铺尺寸样式的显隐。包括可调整纹理的宽度值和高度值，单位px。    |

## 数据源面板![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6984931961/p703157.png)

|    **字段**    |    **说明**    |
|    ----    |    ----    |
|    adcode    |    区域的adcode编号，可通过[DataV.GeoAtlas](http://datav.aliyun.com/static/tools/atlas)获取。**说明** 如果需要下钻到区域热力层，则数据中必须包含下钻位置的adcode，如果您没有配置下钻区域对应的adcode则看不到区域热力层。    |
|    name    |    （可选）地区的名称。    |
|    colorField    |    （可选）地区的颜色映射字段。    |
|    textureShapeField    |    （可选）地区的纹理形状映射字段。    |
|    textureColorField    |    （可选）地区的纹理颜色映射字段。    |

|    **数据项配置**    |    **说明**    |
|    ----    |    ----    |
|    **数据源**    |    组件的数据源中通过**代码编辑**或**可视化编辑**展示了组件所包含的数据字段。也可以修改**数据类型**，灵活配置组件数据。    |
|    **数据映射**    |    当您需要自定义图表字段配置时，可以在**数据映射**模块设置不同的字段映射内容，将这些字段映射到组件对应的字段上。无需修改数据源中的字段，就可以实现数据的实时匹配。也可以单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9633269661/p524955.png)图标对字段分别样式配置。    |
|    **过滤器**    |    打开**过滤器**，选择已创建的数据过滤器或新建数据过滤器，并配置数据过滤器脚本，实现数据的筛选功能。详情请参见[管理数据过滤器](/zh/datav/datav-7-0/user-guide/manage-filters-1)。    |
|    **数据响应结果**    |    实时展示了组件所使用的数据。当组件数据源发生变化时，数据响应结果会对应展示最新的数据。如果系统反应延迟，您可以单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8276202761/p538806.png)图标，查看数据响应结果，也可以单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8276202761/p538808.png)图标，获取组件的最新数据。您也可以单击查看示例，查看当前组件的响应结果示例。    |
|    **禁止加载态**    |    勾选复选框，在组件更新和预览数据看板时，将看不到组件初始化时的加载内容，去勾选则相反。默认为去勾选状态。    |
|    **受控模式**    |    勾选复选框，组件初始化状态下不请求数据，仅通过全局变量或蓝图编辑器配置的方法发起请求数据；去勾选复选框，可以使用自动更新请求数据。默认为去勾选状态。    |
|    **自动更新请求**    |    勾选复选框，可以手动输入轮询的时间频次设置动态轮询。清除后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和全局变量事件来触发请求更新数据。    |

## 高级面板![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6984931961/p703159.png)

打开开关，开启组件交互功能。单击某个区域或取消选中区域时，触发数据请求，抛出临时变量，实现在单击某个区域或取消选中某个区域时，动态加载不同区域的数据。默认抛出所单击区域的`adcode`值，具体配置请参见[组件交互配置](/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)。

## 蓝图交互

1. 单击页面左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7498599661/p528973.png)图标，进入**蓝图**页面。
2. 在**图层节点**页签下，添加当前组件至主画布中。
3. 查看蓝图配置参数。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1349421071/p742830.png)

  * **事件**

|    **事件**    |    **说明**    |
|    ----    |    ----    |
|    **当数据接口请求完成时**    |    数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据源**页签的**数据响应结果**区域。    |
|    **点击区域时**    |    当单击区域热力层某一块区域时抛出。    |
|    **取消选中区域时**    |    当取消选中热力层某一块区域时抛出。    |
  * **动作**

|    **动作**    |    **说明**    |
|    ----    |    ----    |
|    **导入数据接口**    |    按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据源**页签的**数据响应结果**区域。    |
|    **请求数据接口**    |    重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如区域热力层配置了API数据源为https://api.test，传到**请求数据接口**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。    |
|    **切换显隐**    |    切换组件显示或者隐藏，不需要参数。    |
|    **显示**    |    显示组件，参考数据示例。{   "animationType": "",//动画方式，可选值：fade，不填无动画。   "animationDuration": 1000,//动画延迟，单位ms。   "animationEasing": ""//动画曲线 }    |
|    **隐藏**    |    隐藏组件，参考数据示例。{   "animationType": "",//动画方式，可选值：fade，不填无动画。   "animationDuration": 1000,//动画延迟，单位ms。   "animationEasing": ""//动画曲线 }    |
|    **更新组件配置**    |    动态更新组件的样式配置。需要先在组件的**样式**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。    |