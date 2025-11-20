# 扫描线层 %{#95979}% 

本文介绍扫描线层的图表样式和各配置项的含义。

## **图表样式**

扫描线层是3D地球的子组件，支持独立的样式配置，包括扫描线的半径、扫描速度和贴图以及位置等，能够通过循环扫描动画贴图来模拟扫描线的动态效果。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4455778761/p582815.png)

## 配置面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4455778761/p582817.png)
* **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
* **循环**：打开开关，循环播放扫描效果动画。
* **颜色**：扫描线层的颜色，请参见[颜色选择器说明](/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改。
* **贴图地址**：扫描线层的贴图样式，输入为贴图的URL地址。
* **透明度**：扫描线层的透明度。
* **速度**：扫描线层的动画速度。
* **半径**：扫描线层的半径。
* **X旋转**、**Y旋转**、**Z旋转**：扫描线层的X、Y、Z坐标位置，可控制扫描线层的中心。X-Y-Z分别表示右手坐标系中的X-Y-Z轴方向。

## 数据面板

此组件不需要配置数据。

## 交互面板

此组件没有交互事件。

## 蓝图编辑器交互配置

1. 在画布编辑器页面，单击**3D地球**子组件管理列表中**扫描线层**右侧的![导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89089.jpg)图标。
2. 单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89087.jpg)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的**扫描线层**组件，在画布中可以看到如下图所示的扫描线层的蓝图编辑器配置参数。![扫描线层蓝图编辑器参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1668068951/p87741.jpg)

  * **事件**：无。
  * **动作**

|    **动作**    |    **说明**    |
|    ----    |    ----    |
|    **显示组件**    |    显示组件，不需要参数。    |
|    **隐藏组件**    |    隐藏组件，不需要参数。    |