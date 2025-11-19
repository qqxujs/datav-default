<!DOCTYPE html> 

本文介绍二维码组件内全量选择时各配置项的含义。

## **图表样式**

二维码是将关联内容生成一个二维码样式后，可供扫描显示所需展示内容的组件。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6637651961/p704419.png)

## 样式面板![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6637651961/p704421.png)

* **搜索配置**：单击**样式**面板右上角的搜索配置项图标![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5013889661/p527384.png)，可在搜索配置面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索配置项](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。
* * **尺寸**：包括组件的宽度和高度，单位为px。
  * **定位**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
  * **旋转**：以组件的中心为中心点，进行旋转，单位为度（°）。  

    * 手动输入角度值，控制组件的旋转角度。
    * 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8222919661/p521797.png)图标，控制组件左右翻转样式。
    * 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8222919661/p521798.png)图标，控制组件上下翻转样式。
  * **不透明度**：取值范围为0\~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
* **输入内容**：自定义输入扫描二维码后所显示的内容，支持从**数据**面板的text字段内获取二维码的内容。如果此配置项和数据中都配置了内容，则优先使用数据中的配置。
* **填充颜色**：二维码组件的前景和背景的颜色。
* **边框样式**：二维码组件边框的样式，包括边框的线类型、边框的圆角角度、线的宽度值和线颜色。
* **LOGO**：二维码中间的LOGO图标样式，可单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制LOGO图标样式的显隐。

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **图片链接**    |    LOGO所显示的图片。如果您需要使用远程服务器上的图片，请在上方的输入框中输入图片的URL地址；单击图片框内的**预览**，即可预览LOGO图片的大图样式；单击图片输入框下方的虚线框内的**更改**，更改图片设计资产详细功能请参见[使用界面功能说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/features-on-the-usage-page)。    |
|    **图片尺寸**    |    LOGO图片的尺寸大小，包括图片的宽度和高度的值，单位px。LOGO图片尺寸占比30%以内可正常使用。    |
|    **图片圆角**    |    LOGO图片的圆角大小，单位为px。数值为0的时候没有圆角，图片为方形，设置值越大，图片圆角弧度值越大。    |
|    **背景颜色**    |    LOGO图片的背景颜色。    |
|    **边框样式**    |    LOGO图片的边框样式，包括边框的线类型、边框的圆角角度、线的宽度值和线颜色。    |

## 数据源面板![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6637651961/p704424.png)

|    **字段**    |    **说明**    |
|    ----    |    ----    |
|    text    |    生成二维码的内容。    |

|    **数据项配置**    |    **说明**    |
|    ----    |    ----    |
|    **数据源**    |    组件的数据源中通过**代码编辑**或**可视化编辑**展示了组件所包含的数据字段。也可以修改**数据类型**，灵活配置组件数据。    |
|    **数据映射**    |    当您需要自定义图表字段配置时，可以在**数据映射**模块设置不同的字段映射内容，将这些字段映射到组件对应的字段上。无需修改数据源中的字段，就可以实现数据的实时匹配。也可以单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9633269661/p524955.png)图标对字段分别样式配置。    |
|    **过滤器**    |    打开**过滤器**，选择已创建的数据过滤器或新建数据过滤器，并配置数据过滤器脚本，实现数据的筛选功能。详情请参见[管理数据过滤器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/manage-filters-1)。    |
|    **数据响应结果**    |    实时展示了组件所使用的数据。当组件数据源发生变化时，数据响应结果会对应展示最新的数据。如果系统反应延迟，您可以单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8276202761/p538806.png)图标，查看数据响应结果，也可以单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8276202761/p538808.png)图标，获取组件的最新数据。您也可以单击查看示例，查看当前组件的响应结果示例。    |
|    **禁止加载态**    |    勾选复选框，在组件更新和预览数据看板时，将看不到组件初始化时的加载内容，去勾选则相反。默认为去勾选状态。    |
|    **受控模式**    |    勾选复选框，组件初始化状态下不请求数据，仅通过全局变量或蓝图编辑器配置的方法发起请求数据；去勾选复选框，可以使用自动更新请求数据。默认为去勾选状态。    |
|    **自动更新请求**    |    勾选复选框，可以手动输入轮询的时间频次设置动态轮询。清除后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和全局变量事件来触发请求更新数据。    |

## 高级面板

该组件无事件配置。

## 蓝图交互

1. 单击页面左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7498599661/p528973.png)图标，进入**蓝图**页面。
2. 在**图层节点**页签下，添加当前组件至主画布中。
3. 查看蓝图配置参数。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5333901171/p782604.png)

  * **事件**

|    **事件**    |    **说明**    |
|    ----    |    ----    |
|    **当数据接口请求完成时**    |    数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据源**页签的**数据响应结果**区域。    |
  * **动作**

|    **动作**    |    **说明**    |
|    ----    |    ----    |
|    **导入数据接口**    |    按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据，参考数据示例。\[   {     "text": "二维码的文字内容。"   } \]    |
|    **请求数据接口**    |    重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如二维码配置了API数据源为https://api.test，传到**请求数据接口**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。    |
|    **移动**    |    将组件移动到指定位置，参考数据示例。     {       // 移动方式。绝对定位：to，相对定位：by。默认值：to。         "positionType": "to",       // 指定位置。x坐标，y坐标。       "attr": {         "x": 0,         "y": 0       },       // 动画方式。       "animation": {         "enable": false,         // 动画延时，单位ms。         "animationDuration": 1000,         // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。         "animationEasing": "linear"       }     }    |
|    **切换显隐**    |    切换组件显示或者隐藏，不需要参数。    |
|    **显示**    |    显示组件，参考数据示例。{   "animationType": "",//动画方式，可选值：fade，不填无动画。   "animationDuration": 1000,//动画延迟，单位ms。   "animationEasing": ""//动画曲线 }    |
|    **隐藏**    |    隐藏组件，参考数据示例。{   "animationType": "",//动画方式，可选值：fade，不填无动画。   "animationDuration": 1000,//动画延迟，单位ms。   "animationEasing": ""//动画曲线 }    |
|    **更新组件配置**    |    动态更新组件的样式配置。需要先在组件的**样式**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。    |

## **案例演示**

本案例通过从词云中随机选取内容动态生成二维码。

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 选择任一数据看板，单击**编辑**，进入画布编辑器页面。
3. 添加**词云**和**二维码**两个组件到画布中。
4. 单击页面左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7498599661/p528973.png)图标，进入**蓝图**页面。
5. 在**图层节点**页签下，添加所有组件至主画布中。
6. 在**逻辑节点**页签下，添加一个串行数据处理节点到主画布中。
7. 连接组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5333901171/p782607.png)
8. 配置串行数据处理节点处理方法。  
```  
return [{"text": data.name}];  
```
9. 单击页面右上角的**预览**，预览展示结果。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6637651961/p704436.png)
10. （可选）如果需要扫描二维码的同时，展示网页内容。可设置**数据源**面板的内容为https网页格式。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6637651961/p704441.png)