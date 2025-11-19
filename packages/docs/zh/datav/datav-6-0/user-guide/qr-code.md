<!DOCTYPE html> 

本文介绍二维码组件的图表样式和各配置项的含义。

## **图表样式**

二维码是将关联内容生成一个二维码样式后，可供扫描显示所需展示内容的组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4812039761/p606576.png)

## 配置面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3902039761/p606402.png)
* **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
* **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
* **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
* **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。  
  * 手动输入角度值，控制组件的旋转角度。
  * 拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
  * 单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
  * 单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
* **不透明度**：取值范围为0\~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
* **输入内容**：自定义输入扫描二维码后所显示的内容，支持从**数据**面板的text字段内获取二维码的内容。如果此配置项和数据中都配置了内容，则优先使用数据中的配置。
* **填充颜色**：二维码组件的前景和背景的颜色。
* **边框样式**：二维码组件边框的样式，包括边框的线类型、边框的圆角角度、线的宽度值和线颜色。
* **LOGO**：二维码中间的LOGO图标样式，可单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制LOGO图标样式的显隐。

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **图片链接**    |    LOGO所显示的图片。如果您需要使用远程服务器上的图片，请在上方的输入框中输入图片的URL地址；单击图片框内的**预览**，即可预览LOGO图片的大图样式；单击图片输入框下方的虚线框内的**更改**，更改图片设计资产详细功能请参见[使用界面功能说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-interface-function-description#concept-2094777)。    |
|    **图片尺寸**    |    LOGO图片的尺寸大小，包括图片的宽度和高度的值，单位px。LOGO图片尺寸占比30%以内可正常使用。    |
|    **图片圆角**    |    LOGO图片的圆角大小，单位为px。数值为0的时候没有圆角，图片为方形，设置值越大，图片圆角弧度值越大。    |
|    **背景颜色**    |    LOGO图片的背景颜色。    |
|    **边框样式**    |    LOGO图片的边框样式，包括边框的线类型、边框的圆角角度、线的宽度值和线颜色。    |

## 数据面板（默认模式）

**说明** 

组件数据面板默认是**默认模式**，您可以单击切换数据面板右上角的**分析模式**，即可在弹窗对话框内，确认将组件**转为分析模式并创建分析器**，并单击**确认变更**，使用DataV数据集提供的分析模式功能后，当前组件会转换成BI分析模式组件，组件数据面板变为**分析模式**。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3902039761/p606406.png)

`text`：生成二维码的内容。

__表 1\. 配置项说明__
|    **配置项**    |    **说明**    |
|    ----    |    ----    |
|    **受控模式**    |    打开开关，资产初始化状态下不请求数据，仅通过回调ID或蓝图编辑器配置的方法发起请求数据；关闭开关，可以使用自动更新请求数据。开关默认为关闭状态。    |
|    **自动更新请求**    |    选中后可以设置动态轮询，还可以手动输入轮询的时间频次。取消选中后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和回调ID事件来触发请求更新数据。    |
|    **数据源**    |    单击**配置数据源**，可在**设置数据源**面板中修改数据源类型和数据查询代码、预览数据源返回结果以及查看数据响应结果，详情请参见[配置资产数据](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-widget-data#task-2376875)。    |
|    **数据过滤器**    |    数据过滤器提供数据结构转换、筛选和一些简单的计算功能。单击**添加过滤器**，可在**设置数据源**面板配置数据过滤器脚本，详情请参见[过滤器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-the-data-filter#task-1322674)。    |
|    **数据响应结果**    |    展示数据请求的响应结果。当数据源发生改变时，可单击右侧的![刷新图标 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0376703061/p89093.png)图标，实时查看数据响应结果。    |

## 数据面板（分析模式）

**重要** 

在使用DataV数据集提供的BI分析功能之前，系统会对二维码进行以下变更。

* 数据源**二维码数据接口**由静态数据切换至DataV数据集。
* 更新DataV数据集配置（此操作不会使字段配置丢失）。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3902039761/p606409.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3902039761/p606410.png)

BI分析数据配置面板中的详细操作说明，请参见[BI分析模式数据面板功能介绍](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/introduction-to-features-of-the-data-panel-in-bi-analysis-mode#task-2098468)。

`生成二维码内容`：生成二维码的内容。

**说明** 

当组件是以分析模式添加后，您可以单击切换数据面板右上角的**默认模式**，即可在弹窗对话框内确认退出分析模式并删除该BI分析组件对应的分析器。退出分析模式后，组件数据面板为默认模式。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8482398761/p595791.png)

## 交互面板

该组件没有交互事件。

## 蓝图编辑器交互配置

1. 在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2. 单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的**二维码**组件，在画布中可以看到如下图所示的二维码的蓝图编辑器配置参数。![二维码蓝图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9862800461/p371977.jpg)

  * **事件**

|    **事件**    |    **说明**    |
|    ----    |    ----    |
|    **当接口描述请求完成时**    |    数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
|    **当接口描述请求失败时**    |    数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
  * **动作**

|    **动作**    |    **说明**    |
|    ----    |    ----    |
|    **请求接口描述**    |    重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如二维码配置了API数据源为https://api.test，传到**请求接口描述**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。    |
|    **导入接口描述**    |    按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
|    **更新组件配置**    |    动态更新组件的样式配置。需要先在组件的**配置**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。    |
|    **显示**    |    显示组件，参考数据示例如下。 return {   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" };    |
|    **隐藏**    |    隐藏组件，参考数据示例如下。 return {   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" };    |
|    **切换显隐状态**    |    切换组件显示或者隐藏，参考数据示例如下。 return {   "animationIn": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   },   "animationOut": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   } };    |
|    **移动**    |    将组件移动到指定位置，参考数据示例如下。 return {   // 移动方式。绝对定位：to，相对定位：by。默认值：to。   "positionType": "to",   // 指定位置。x坐标，y坐标。   "attr": {     "x": 0,     "y": 0   },   // 动画方式。   "animation": {     "enable": false,     // 动画延时。     "animationDuration": 1000,     // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。     "animationEasing": "linear"   } };    |

## **案例演示**

本案例通过从词云中随机选取内容动态生成二维码。

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 选择任一可视化应用，单击编辑，进入画布编辑器页面。
3. 添加**词云**和**二维码**两个组件到画布中。
4. 右键单击组件，将两个组件导入蓝图编辑器中。
5. 连接组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3902039761/p606546.png)
6. 配置串行数据处理的处理方法。  
```  
return [{"text": data.name}];  
```
7. 单击页面右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0269688761/p589281.png)图标，预览展示结果。![二维码_Trim](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3902039761/p606559.gif)
8. 可选，如果需要扫描二维码的同时，展示网页内容。可设置**数据**面板的内容为https网页格式。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3902039761/p606569.png)  
```  
https://datav.aliyun.com/  
```