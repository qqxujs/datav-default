<!DOCTYPE html> 

本文介绍转盘抽奖组件的图表样式和各配置项的含义。

## **图表样式**

转盘抽奖用于模拟转盘随机抽取奖品的组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0142099761/p610613.png)

## 配置面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0142099761/p610616.png)
* **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
* **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
* **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
* **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。  
  * 手动输入角度值，控制组件的旋转角度。
  * 拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
  * 单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
  * 单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
* **不透明度**：取值范围为0\~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
* **转动时间**：设置转盘抽奖组件转动的时间，单位ms。
* **转动圈数**：设置转盘抽奖组件在规定的转动时间内需要转动的圈数值，单位圈。
* **按钮**：转盘抽奖组件按钮的样式。

| **参数**   | **说明**                                                                                                                                                                                                                                 |
| ---- | ---- |
| **按钮尺寸** | 按钮的尺寸大小，包括按钮的宽度和高度值，单位px。                                                                                                                                                                                                              |
| **垂直间距** | 设置按钮在组件转盘内离中心点垂直方向的距离值，单位px。                                                                                                                                                                                                           |
| **按钮图片** | 自定义按钮图片的内容。如果您需要使用远程服务器上的图片，请在上方的输入框中输入图片的URL地址；单击图片框内的**预览**，即可预览按钮图片的大图样式；单击图片输入框下方的虚线框内的**更改**，更改图片设计资产详细功能请参见[使用界面功能说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-interface-function-description#concept-2094777)。 |
* **转盘**：转盘抽奖转盘部分内容的样式。

| **参数**       | **说明**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---- | ---- |
| **文本样式**     | 转盘内的文本样式，包括文本的字体样式的选择、文字的粗细、字号的大小和文本的颜色。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **文本间距**     | 转盘内文本与文本之间的间隔距离值，单位px。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **行高**       | 设置文本换行时的行高值，单位px。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **折行字数**     | 设置文本折行的字数值，单位个。当一行内文字个数大于设置值时，折行处理。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| **扇形颜色**     | 设置转盘内每一个系列内容的扇形颜色样式，单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一个颜色系列。 单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个颜色系列的排列样式。单击![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5896941261/p271562.jpg)图标，即可复制当前选中颜色系列配置内容并新增一个同样配置的颜色系列。**颜色**：设置当前系列下转盘内对应模块中的扇形填充颜色。 |
| **奖品图片是否显示** | 打开开关， 转盘内对应模块的奖品图片显示在转盘上；关闭开关，奖品图片不显示。**图片尺寸**：奖品图片的尺寸值，包括图片的宽度和高度值，单位px。**图片间距**：奖品图之间的间距值，包括**水平间距**和**垂直间距**两种，单位px。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **描边颜色**     | 转盘内描边线的颜色。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **背景图**      | 自定义转盘背景图片的内容。如果您需要使用远程服务器上的图片，请在上方的输入框中输入图片的URL地址；单击图片框内的**预览**，即可预览转盘背景图片的大图样式；单击图片输入框下方的虚线框内的**更改**，更改图片设计资产详细功能请参见[使用界面功能说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-interface-function-description#concept-2094777)。                                                                                                                                                                                                                                                                                                                                                                 |

## 数据面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0142099761/p610618.png)

### **配置字段说明**

| **字段** | **说明** |
| ---- | ---- |
| name   | 奖品的名称。 |
| imgSrc | 奖品的图片。 |

__表 1\. 配置项说明__
| **配置项**    | **说明**                                                                                                                                                                |
| ---- | ---- |
| **受控模式**   | 打开开关，资产初始化状态下不请求数据，仅通过回调ID或蓝图编辑器配置的方法发起请求数据；关闭开关，可以使用自动更新请求数据。开关默认为关闭状态。                                                                                              |
| **自动更新请求** | 选中后可以设置动态轮询，还可以手动输入轮询的时间频次。取消选中后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和回调ID事件来触发请求更新数据。                                                                                            |
| **数据源**    | 单击**配置数据源**，可在**设置数据源**面板中修改数据源类型和数据查询代码、预览数据源返回结果以及查看数据响应结果，详情请参见[配置资产数据](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-widget-data#task-2376875)。 |
| **数据过滤器**  | 数据过滤器提供数据结构转换、筛选和一些简单的计算功能。单击**添加过滤器**，可在**设置数据源**面板配置数据过滤器脚本，详情请参见[过滤器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-the-data-filter#task-1322674)。 |
| **数据响应结果** | 展示数据请求的响应结果。当数据源发生改变时，可单击右侧的![刷新图标 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0376703061/p89093.png)图标，实时查看数据响应结果。                                |

## 交互面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0142099761/p610621.png)

**当点击抽奖时**：选中**启用**，开启组件交互功能。当单击转盘抽奖的抽奖按钮时，会触发数据请求，抛出回调值，动态加载抽奖转盘中的数据。默认抛出数据中的`name`和`imgSrc`值，具体配置请参见[如何配置数字翻牌器组件的回调ID](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards)。

## 蓝图编辑器交互配置

1. 在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2. 单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的**转盘抽奖**组件，在画布中可以看到如下图所示的转盘抽奖的蓝图编辑器配置参数。![蓝图参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5888320461/p374911.png)

  * **事件**

| **事件**         | **说明**                                                                                                           |
| ---- | ---- |
| **当接口描述请求完成时** | 数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。                           |
| **当接口描述请求失败时** | 数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。 |
| **当点击抽奖时**     | 当单击抽奖按钮时抛出的事件，同时抛出该按钮对应的object类型数据项，参考数据示例如下。return{   "name": "",   //奖品名称   "imgSrc": ""  //奖品图片 }             |
  * **动作**

| **动作**     | **说明**                                                                                                                                                                                                                                                                                                                                       |
| ---- | ---- |
| **请求接口描述** | 重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如转盘抽奖配置了API数据源为https://api.test，传到**请求接口描述**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。                                                                                                                                                                                                               |
| **导入接口描述** | 按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。                                                                                                                                                                                                                                                            |
| **开始转动**   | 开始转动转盘，不需要参数。                                                                                                                                                                                                                                                                                                                                |
| **更新组件配置** | 动态更新组件的样式配置。需要先在组件的**配置**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。                                                                                                                                                                                                                                                      |
| **显示**     | 显示组件，参考数据示例如下。 return {   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" };                                                                                                                                                                                                                                 |
| **隐藏**     | 隐藏组件，参考数据示例如下。 return {   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" };                                                                                                                                                                                                                                 |
| **切换显隐状态** | 切换组件显示或者隐藏，参考数据示例如下。 return {   "animationIn": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   },   "animationOut": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   } };                                                                             |
| **移动**     | 将组件移动到指定位置，参考数据示例如下。 return {   // 移动方式。绝对定位：to，相对定位：by。默认值：to。   "positionType": "to",   // 指定位置。x坐标，y坐标。   "attr": {     "x": 0,     "y": 0   },   // 动画方式。   "animation": {     "enable": false,     // 动画延时。     "animationDuration": 1000,     // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。     "animationEasing": "linear"   } }; |