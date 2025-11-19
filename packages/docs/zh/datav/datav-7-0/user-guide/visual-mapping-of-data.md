<!DOCTYPE html> 

数据视觉映射是指将原始数据通过特定的规则映射到可视化元素的视觉属性（如颜色、形状、尺寸等），实现数据特征的可视化表达。本文为您提供视觉映射的功能说明。

## **示例效果**

如下图所示为示例场景：**基础平面地图3.0**中**矢量散点层**子组件的**图形**配置面板及其对应的可视化效果呈现。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0256630961/p698162.png)

## **使用限制**

视觉映射功能适配组件目前共两类：

* v5.x版本及以上的所有组件。
* 基础平面地图、3D平面地图内子组件。

## **功能介绍**

DataV深度融合样式配置与数据映射能力，提供包括颜色映射器、形状映射器、尺寸映射器及条件树等在内的完整视觉映射功能。当启用组件的视觉映射功能时，支持样式与数据的直观关联，让您能够以灵活高效的方式自定义组件的视觉呈现效果。

| **功能** | **说明**                                                                                                                                    |
| ---- | ---- |
| 颜色映射器  | [颜色映射器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/instructions-of-color-mapper)用于设置组件中各种颜色和数据值之间的映射配置效果。                      |
| 形状映射器  | [形状映射器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/shape-mapper-instructions)的映射配置方法与颜色映射器类似，用于映射组件中数据值和图形之间的映射内容，图形包括矢量和图标两种。 |
| 尺寸映射器  | [尺寸映射器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/dimension-mapper-instructions)用于调整图元尺寸，通过使用范围滑块决定图元尺寸范围，您可以自定义数据值和尺寸的映射关系。  |
| 条件树    | [条件树](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/conditional-tree-instructions)用于指定特定逻辑判断，用于进行条件样式修改或者设置筛选器样式。                 |