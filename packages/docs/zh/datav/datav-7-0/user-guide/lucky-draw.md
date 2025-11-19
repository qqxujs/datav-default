<!DOCTYPE html> 

本文介绍转盘抽奖组件全量选择时各配置项的含义。

## **图表样式**

转盘抽奖用于模拟转盘随机抽取奖品的组件。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4622661961/p704821.png)

## 样式面板![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4622661961/p704822.png)

* **搜索配置**：单击**样式**面板右上角的搜索配置项图标![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5013889661/p527384.png)，可在搜索配置面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索配置项](/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。
* * **尺寸**：包括组件的宽度和高度，单位为px。
  * **定位**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
  * **旋转**：以组件的中心为中心点，进行旋转，单位为度（°）。  

    * 手动输入角度值，控制组件的旋转角度。
    * 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8222919661/p521797.png)图标，控制组件左右翻转样式。
    * 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8222919661/p521798.png)图标，控制组件上下翻转样式。
  * **不透明度**：取值范围为0\~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
* **转动时间**：设置转盘抽奖组件转动的时间，单位ms。
* **转动圈数**：设置转盘抽奖组件在规定的转动时间内需要转动的圈数值，单位圈。
* **按钮**：转盘抽奖组件按钮的样式。

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **按钮尺寸**    |    按钮的尺寸大小，包括按钮的宽度和高度值，单位px。    |
|    **垂直间距**    |    设置按钮在组件转盘内离中心点垂直方向的距离值，单位px。    |
|    **按钮图片**    |    自定义按钮图片的内容。如果您需要使用远程服务器上的图片，请在上方的输入框中输入图片的URL地址；单击图片框内的**预览**，即可预览按钮图片的大图样式；单击图片输入框下方的虚线框内的**更改**，更改图片设计资源详细功能请参见[使用界面功能说明](/zh/datav/datav-6-0/user-guide/use-interface-function-description#concept-2094777)。    |
* **转盘**：转盘抽奖转盘部分内容的样式。

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **文本样式**    |    转盘内的文本样式，包括文本的字体样式的选择、文字的粗细、字号的大小和文本的颜色。    |
|    **文本间距**    |    转盘内文本与文本之间的间隔距离值，单位px。    |
|    **行高**    |    设置文本换行时的行高值，单位px。    |
|    **折行字数**    |    设置文本折行的字数值，单位个。当一行内文字个数大于设置值时，折行处理。    |
|    **扇形颜色**    |    设置转盘内每一个系列内容的扇形颜色样式，单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528933.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528934.png)图标，添加或删除一个颜色系列。 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528936.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528937.png)图标配置多个颜色系列的排列样式。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528938.png)图标，即可复制当前选中颜色系列配置内容并新增一个同样配置的颜色系列。**颜色**：设置当前系列下转盘内对应模块中的扇形填充颜色。    |
|    **奖品图片是否显示**    |    打开开关， 转盘内对应模块的奖品图片显示在转盘上；关闭开关，奖品图片不显示。**图片尺寸**：奖品图片的尺寸值，包括图片的宽度和高度值，单位px。**图片间距**：奖品图之间的间距值，包括**水平间距**和**垂直间距**两种，单位px。    |
|    **描边颜色**    |    转盘内描边线的颜色。    |
|    **背景图**    |    自定义转盘背景图片的内容。如果您需要使用远程服务器上的图片，请在上方的输入框中输入图片的URL地址；单击图片框内的**预览**，即可预览转盘背景图片的大图样式；单击图片输入框下方的虚线框内的**更改**，更改图片设计资源详细功能请参见[使用界面功能说明](/zh/datav/datav-7-0/user-guide/features-on-the-usage-page)。    |

## 数据源面板![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4622661961/p704823.png)

|    **字段**    |    **说明**    |
|    ----    |    ----    |
|    name    |    奖品的名称。    |
|    imgSrc    |    奖品的图片。    |

|    **数据项配置**    |    **说明**    |
|    ----    |    ----    |
|    **数据源**    |    组件的数据源中通过**代码编辑**或**可视化编辑**展示了组件所包含的数据字段。也可以修改**数据类型**，灵活配置组件数据。    |
|    **数据映射**    |    当您需要自定义图表字段配置时，可以在**数据映射**模块设置不同的字段映射内容，将这些字段映射到组件对应的字段上。无需修改数据源中的字段，就可以实现数据的实时匹配。也可以单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9633269661/p524955.png)图标对字段分别样式配置。    |
|    **过滤器**    |    打开**过滤器**，选择已创建的数据过滤器或新建数据过滤器，并配置数据过滤器脚本，实现数据的筛选功能。详情请参见[管理数据过滤器](/zh/datav/datav-7-0/user-guide/filter-configuration-and-application)。    |
|    **数据响应结果**    |    实时展示了组件所使用的数据。当组件数据源发生变化时，数据响应结果会对应展示最新的数据。如果系统反应延迟，您可以单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8276202761/p538806.png)图标，查看数据响应结果，也可以单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8276202761/p538808.png)图标，获取组件的最新数据。您也可以单击查看示例，查看当前组件的响应结果示例。    |
|    **禁止加载态**    |    勾选复选框，在组件更新和预览数据看板时，将看不到组件初始化时的加载内容，去勾选则相反。默认为去勾选状态。    |
|    **受控模式**    |    勾选复选框，组件初始化状态下不请求数据，仅通过全局变量或蓝图编辑器配置的方法发起请求数据；去勾选复选框，可以使用自动更新请求数据。默认为去勾选状态。    |
|    **自动更新请求**    |    勾选复选框，可以手动输入轮询的时间频次设置动态轮询。清除后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和全局变量事件来触发请求更新数据。    |

## 高级面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6433901171/p782770.png)

打开开关，开启关联全局变量功能。当单击转盘抽奖的抽奖按钮时，会触发数据请求抛出临时变量，动态加载抽奖转盘中的数据。默认抛出数据中的`name`和`imgSrc`值，具体配置请参见[组件交互配置](/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)。

## 蓝图交互

1. 单击页面左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7498599661/p528973.png)图标，进入**蓝图**页面。
2. 在**图层节点**页签下，添加当前组件至主画布中。
3. 查看蓝图配置参数。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5433901171/p782773.png)

  * **事件**

|    **事件**    |    **说明**    |
|    ----    |    ----    |
|    **当数据接口请求完成时**    |    数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据源**页签的**数据响应结果**区域。    |
|    **当点击抽奖时**    |    当单击抽奖按钮时抛出的事件，同时抛出该按钮对应的数据项，参考数据示例。{   "name": "一等奖",   "imgSrc": "https://img.alicdn.com/tfs/TB1R1zRrQL0gK0jSZFxXXXWHVXa-281-200.svg" }    |
  * **动作**

|    **动作**    |    **说明**    |
|    ----    |    ----    |
|    **导入数据接口**    |    按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据，参考数据示例。\[   {   "name": "一等奖",   "imgSrc": "https://img.alicdn.com/tfs/TB1R1zRrQL0gK0jSZFxXXXWHVXa-281-200.svg"   } \]    |
|    **请求数据接口**    |    重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如转盘抽奖配置了API数据源为https://api.test，传到**请求数据接口**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。    |
|    **开始转动**    |    开始转动转盘，不需要参数。    |
|    **移动**    |    将组件移动到指定位置，参考数据示例。     {       // 移动方式。绝对定位：to，相对定位：by。默认值：to。         "positionType": "to",       // 指定位置。x坐标，y坐标。       "attr": {         "x": 0,         "y": 0       },       // 动画方式。       "animation": {         "enable": false,         // 动画延时，单位ms。         "animationDuration": 1000,         // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。         "animationEasing": "linear"       }     }    |
|    **切换显隐**    |    切换组件显示或者隐藏，不需要参数。    |
|    **显示**    |    显示组件，参考数据示例。{   "animationType": "",//动画方式，可选值：fade，不填无动画。   "animationDuration": 1000,//动画延迟，单位ms。   "animationEasing": ""//动画曲线 }    |
|    **隐藏**    |    隐藏组件，参考数据示例。{   "animationType": "",//动画方式，可选值：fade，不填无动画。   "animationDuration": 1000,//动画延迟，单位ms。   "animationEasing": ""//动画曲线 }    |
|    **更新组件配置**    |    动态更新组件的样式配置。需要先在组件的**样式**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。    |