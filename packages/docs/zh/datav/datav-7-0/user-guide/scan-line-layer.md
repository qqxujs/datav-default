<!DOCTYPE html> 

本文介绍扫描线层各配置项的含义。

## **图表样式**

扫描线层是3D地球的子组件，支持独立的样式配置，包括扫描线的半径、扫描速度和贴图以及位置等，能够通过循环扫描动画贴图来模拟扫描线的动态效果。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3787741961/p703570.png)

## 样式面板![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3787741961/p703572.png)

* **搜索配置**：单击**样式**面板右上角的搜索配置项图标![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5013889661/p527384.png)，可在搜索配置面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索配置项](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。
* **循环**：打开开关，循环播放扫描效果动画。
* **颜色**：扫描线层的颜色，请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)进行修改。
* **贴图地址**：扫描线层的贴图样式，输入为贴图的URL地址。
* **透明度**：扫描线层的透明度。
* **速度**：扫描线层的动画速度。
* **半径**：扫描线层的半径。
* **X旋转**、**Y旋转**、**Z旋转**：扫描线层的X、Y、Z坐标位置，可控制扫描线层的中心。X-Y-Z分别表示右手坐标系中的X-Y-Z轴方向。

## 数据源面板

此组件不需要配置数据。

## 高级面板

此组件没有交互事件。

## 蓝图交互

1. 单击页面左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7498599661/p528973.png)图标，进入**蓝图**页面。
2. 在**图层节点**页签下，添加当前组件至主画布中。
3. 查看蓝图配置参数。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7184082761/p542339.png)

  * **事件**：无。
  * **动作**

| **动作**     | **说明**                                                                                                                              |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **切换显隐**   | 切换组件显示或者隐藏，不需要参数。                                                                                                                   |
| **显示**     | 显示组件，参考数据示例。{   "animationType": "",//动画方式，可选值：fade，不填无动画。   "animationDuration": 1000,//动画延迟，单位ms。   "animationEasing": ""//动画曲线 } |
| **隐藏**     | 隐藏组件，参考数据示例。{   "animationType": "",//动画方式，可选值：fade，不填无动画。   "animationDuration": 1000,//动画延迟，单位ms。   "animationEasing": ""//动画曲线 } |
| **更新组件配置** | 动态更新组件的样式配置。需要先在组件的**样式**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。                                             |