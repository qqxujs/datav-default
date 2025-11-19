<!DOCTYPE html> 

本文介绍球体层各配置项的含义。

## **图表样式**

球体层是3D地球的子组件，支持独立的样式配置，包括球体的大小、贴图类型、光照强度等，是3D地球的基础球体组件，其他子组件都是在球体层的基础上来配置的。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9905641961/p703595.png)

## 样式面板![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9905641961/p703598.png)

* **搜索配置**：单击**样式**面板右上角的搜索配置项图标![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5013889661/p527384.png)，可在搜索配置面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索配置项](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。
* **贴图类型**：球体层贴图的类型，可选：**地形**、**卫星**、**粒子**、**行政区**、**自定义**。  

**说明**  
选择**自定义**贴图类型后，您可以自定义选择图片拖动到虚线框或者复制图片网络链接到链接框内。
* **缩放**：球体的缩放程度，取值范围为1\~1.2。
* **光照强度**：模拟光照的强度，可以控制球体的亮度，取值范围为0\~10。
* **粗糙程度**：PBR（基于物理渲染）材质的粗糙度，取值范围为0\~1。
* **金属感**：PBR（基于物理渲染）材质的金属感，取值范围为0\~1。
* **凹凸感**：PBR（基于物理渲染）材质的凹凸感，取值范围为0\~1。

## 数据源面板

此组件不需要配置数据。

## 高级面板

此组件没有交互事件。

## 蓝图交互

1. 单击页面左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7498599661/p528973.png)图标，进入**蓝图**页面。
2. 在**图层节点**页签下，添加当前组件至主画布中。
3. 查看蓝图配置参数。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8284082761/p542347.png)

  * **事件**：无。
  * **动作**

|    **动作**    |    **说明**    |
|    ----    |    ----    |
|    **切换显隐**    |    切换组件显示或者隐藏，不需要参数。    |
|    **显示**    |    显示组件，参考数据示例。{   "animationType": "",//动画方式，可选值：fade，不填无动画。   "animationDuration": 1000,//动画延迟，单位ms。   "animationEasing": ""//动画曲线 }    |
|    **隐藏**    |    隐藏组件，参考数据示例。{   "animationType": "",//动画方式，可选值：fade，不填无动画。   "animationDuration": 1000,//动画延迟，单位ms。   "animationEasing": ""//动画曲线 }    |
|    **更新组件配置**    |    动态更新组件的样式配置。需要先在组件的**样式**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。    |