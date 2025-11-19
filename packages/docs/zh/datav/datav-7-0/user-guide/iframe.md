<!DOCTYPE html> 

本文介绍iframe全量选择时各配置项的含义。

## **图表样式**

iframe支持自定义配置iframe链接内容以及页面关闭按钮的样式配置，适用于将网页嵌入可视化应用中进行显示。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3744471961/p705243.png)

## 样式面板![{72AFFC59-5373-442B-ABD3-9E7AC5B40995}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2001563471/p934966.png)

* **搜索配置**：单击**样式**面板右上角的搜索配置项图标![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5013889661/p527384.png)，可在搜索配置面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索配置项](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。
* * **尺寸**：包括组件的宽度和高度，单位为px。
  * **定位**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
  * **旋转**：以组件的中心为中心点，进行旋转，单位为度（°）。  

    * 手动输入角度值，控制组件的旋转角度。
    * 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8222919661/p521797.png)图标，控制组件左右翻转样式。
    * 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8222919661/p521798.png)图标，控制组件上下翻转样式。
  * **不透明度**：取值范围为0\~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
  * **交互穿透**：开启后，鼠标可穿透该组件，避免看板中组件较多时，该组件会遮挡鼠标与下层组件的交互。
  * **对齐**：组件在编辑器中的对齐方式。
* **链接**：配置组件所显示页面的URL链接。

**重要**  
当使用HTTPS协议访问可视化应用时，iframe组件中配置的HTTP协议链接将无法访问，需要确保该链接页面支持[跨域](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/how-to-configure-cross-domain-data#concept-k5l-ckz-q2b)。
* **可关闭**：打开开关，在预览或发布页面，组件右上角会出现一个关闭按钮，单击此按钮可关闭该网页。
* **始终显示关闭按钮**：打开开关，关闭按钮始终显示在页面；关闭开关，关闭按钮在鼠标离开页面后会消失。仅在开启**可关闭**后可配置。
* **不可滚动**：打开开关，网页在预览时页面不能上下滚动；关闭开关，页面可以滚动。
* **允许全屏**：打开开关，允许iframe内部触发浏览器全屏。
* **允许麦克风摄像头**：打开开关，允许获取麦克风和摄像头权限。

## 数据源面板![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3744471961/p705247.png)

url：配置组件所显示页面的链接，与**样式>链接**配置项功能相同。如果同时配置，优先使用**数据源**中的`url`字段内容。

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

打开开关，开启关联全局变量功能。当iframe的链接发生变化时，会抛出您自定义的变量值。具体配置请参见[组件交互配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)。

## 蓝图交互

1. 单击页面左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7498599661/p528973.png)图标，进入**蓝图**页面。
2. 在**图层节点**页签下，添加当前组件至主画布中。
3. 查看蓝图配置参数。![{9D9631FB-00BB-429C-A37C-9B266868E338}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2001563471/p934971.png)

**说明**  
图层事件和动作的参数提示信息，可以在画布右侧的锚点配置中单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2001563471/p934978.png)图标查看。

  * **事件**

|    **事件**    |    **说明**    |
|    ----    |    ----    |
|    **当数据更新时**    |    当数据返回结果发生变化时触发事件并抛出数据。    |
|    **当数据请求状态变化时**    |    当数据请求状态变化时抛出该事件，回调参数为当前状态，具体数据示例请参见画布编辑器中组件右侧配置面板数据源页签的数据响应结果区域。    |
|    **当链接改变时**    |    当组件数据中的链接地址改变时抛出的事件，不需要参数。    |
  * **动作**

|    **动作**    |    **说明**    |
|    ----    |    ----    |
|    **导入数据**    |    按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据，参考数据示例。\[   {     "url": "https://www.aliyun.com"   } \]    |
|    **请求数据**    |    重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如iframe配置了API数据源为https://api.test，传到**请求数据**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。    |
|    **设置iframe地址**    |    设置组件中展示的iframe的链接地址，参考数据示例。\[   {     "url": "https://www.aliyun.com"   } \]    |
|    **移动**    |    将组件移动到指定位置，参考数据示例。     {       // 移动方式。绝对定位：to，相对定位：by。默认值：to。         "positionType": "to",       // 指定位置。x坐标，y坐标。       "attr": {         "x": 0,         "y": 0       },       // 动画方式。       "animation": {         "enable": false,         // 动画延时，单位ms。         "animationDuration": 1000,         // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。         "animationEasing": "linear"       }     }    |
|    **切换显隐**    |    切换组件显示或隐藏，不需要参数。    |
|    **显示**    |    显示组件，参考数据示例。{   "animationType": "",//动画方式，可选值：fade，不填无动画。   "animationDuration": 1000,//动画延迟，单位ms。   "animationEasing": ""//动画曲线 }    |
|    **隐藏**    |    隐藏组件，参考数据示例。{   "animationType": "",//动画方式，可选值：fade，不填无动画。   "animationDuration": 1000,//动画延迟，单位ms。   "animationEasing": ""//动画曲线 }    |
|    **更新组件配置**    |    动态更新组件的样式配置。需要先在组件的**样式**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。    |