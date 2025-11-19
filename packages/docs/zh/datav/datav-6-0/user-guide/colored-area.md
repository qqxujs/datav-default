<!DOCTYPE html> 

本文介绍色块组件的图表样式和各配置项的含义。

## **图表样式**

色块是媒体组件的一种，支持背景色修改和过滤效果。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5365081861/p633436.png)

## 配置面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5365081861/p633438.png)

* **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
* **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
* **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
* **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。  
  * 手动输入角度值，控制组件的旋转角度。
  * 拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
  * 单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
  * 单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
* **不透明度**：取值范围为0\~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
* **色块背景**：色块的背景色。
* **滤镜效果**：色块滤镜效果，用来设置色块的可视效果，如模糊与饱和度效果。您可以自定义输入滤镜支持的效果代码。  
图 1\. 未配置滤镜![未配置滤镜](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5961614661/p495195.jpg)  
图 2\. 配置滤镜后![配置滤镜后](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5961614661/p495199.jpg)

**说明**  
滤镜配置示例为模糊函数的配置样式，更多配置请参见[CSS（层叠样式表）-filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)。

## 数据面板

此组件不需要配置数据。

## 交互面板

此组件没有交互事件。

## 蓝图编辑器交互配置

1. 在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2. 单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的**色块**组件，在画布中可以看到如下图所示的色块的蓝图编辑器配置参数。![色块蓝图参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2188068951/p88365.jpg)

  * **事件**：无。
  * **动作**

|    **动作**    |    **说明**    |
|    ----    |    ----    |
|    **更新组件配置**    |    动态更新组件的样式配置。需要先在组件的**配置**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。    |
|    **显示**    |    显示组件，参考数据示例如下。return {   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" };    |
|    **隐藏**    |    隐藏组件，参考数据示例如下。return {   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" };    |
|    **切换显隐状态**    |    切换组件显示或者隐藏，参考数据示例如下。return {   "animationIn": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   },   "animationOut": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   } };    |
|    **移动**    |    将组件移动到指定位置，参考数据示例如下。return {   // 移动方式。绝对定位：to，相对定位：by。默认值：to。   "positionType": "to",   // 指定位置。x坐标，y坐标。   "attr": {     "x": 0,     "y": 0   },   // 动画方式。   "animation": {     "enable": false,     // 动画延时。     "animationDuration": 1000,     // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。     "animationEasing": "linear"   } };    |