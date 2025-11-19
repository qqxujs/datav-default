<!DOCTYPE html> 

本文介绍天空盒层各配置项的含义。

## **图表样式**

天空盒层是3D地球的子组件，支持独立的样式配置，包括盒子的大小、贴图效果等，能够展示三维立体盒模型及其贴图效果，使用户身临其境。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1076841961/p703668.png)

## 样式面板![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1076841961/p703669.png)

* **搜索配置**：单击**样式**面板右上角的搜索配置项图标![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5013889661/p527384.png)，可在搜索配置面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索配置项](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。
* **px/nx/py/ny/pz/nz**：该六个配置项分别表示盒模型六个贴面在坐标系中不同方向的贴图地址，如下图所示。手动输入贴图的URL地址，可设置盒模型样式。![盒模型原理图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7668068951/p21732.png)
* **S轴重复**：在横轴方向上贴图的重复数量。
* **T轴重复**：在竖轴方向上贴图的重复数量。
* **尺寸**：贴图的大小，单位默认px。

## 数据源面板

此组件不需要配置数据。

## 高级面板

此组件没有交互事件。

## 蓝图交互

1. 单击页面左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7498599661/p528973.png)图标，进入**蓝图**页面。
2. 在**图层节点**页签下，添加当前组件至主画布中。
3. 查看蓝图配置参数。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2084082761/p542424.png)

  * **事件**：无。
  * **动作**

| **动作**     | **说明**                                                                                  |
| ---- | ---- |
| **切换显隐**   | 切换组件显示或者隐藏，不需要参数。                                                                       |
| **显示**     | 显示组件，参考数据示例。{     "animationDuration":1000 }                                            |
| **隐藏**     | 隐藏组件，参考数据示例。{     "animationDuration":1000 }                                            |
| **更新组件配置** | 动态更新组件的样式配置。需要先在组件的**样式**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。 |