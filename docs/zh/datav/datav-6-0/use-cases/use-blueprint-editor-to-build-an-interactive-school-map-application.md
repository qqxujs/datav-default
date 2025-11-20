<!DOCTYPE html> 

本教程为您介绍如何使用DataV的蓝图编辑器功能，搭建学区房复杂交互可视化应用。

**重要** 

本教程中的数据仅供参考，无实际意义，旨在帮助您了解较为复杂的交互式可视化应用的配置方法。具体数据需要根据您的实际需求进行配置。

## **效果展示**

![学区房展示效果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5737716951/p54484.gif)

具体操作步骤如下。 

1. [准备工作](/zh/datav/datav-6-0/use-cases/preparations-for-configuring-interactive-school-district-housing-applications#concept-1563597)。  
准备交互需求。
2. 配置学区房蓝图编辑器交互。  

  1. [创建学区地图可视化应用](/zh/datav/datav-6-0/use-cases/create-a-school-map-application#task-1680730)。  
  使用**学区地图**模板创建可视化应用。
  2. [配置学区地图Tab列表交互](/zh/datav/datav-6-0/use-cases/configure-an-interactive-tab-list-for-a-school-map#task-1680728)。  
  当单击**Tab列表**的选项时，切换展示小学和初中的统计信息（包括学校数量、区位占比等）和地理位置信息。
  3. [配置学区地图单选框交互](/zh/datav/datav-6-0/use-cases/configure-interactive-radio-buttons-for-a-school-map#task-1681262)。  
  当单击**单选框**的选项时，切换展示不同类型学校的散点层数据，以及**Tab列表**和**单选框**的双重触发判断。
  4. [配置学区地图区域热力层交互](/zh/datav/datav-6-0/use-cases/configure-interactions-at-the-choropleth-layer-of-a-school-map#task-1680732)。  
  当鼠标划过地图的**区域热力层**子组件时，切换展示当前区域对应的学校数据。
  5. [配置学区地图轮播列表交互](/zh/datav/datav-6-0/use-cases/configure-interactive-list-carousels-for-school-maps#task-1698018)。  
  当单击**轮播列表**组件时，在地图上切换展示对应学校的位置信息和数据。
3. [查看可视化应用效果](/zh/datav/datav-6-0/use-cases/view-application-effects#task-1563419)。  
将交互效果应用到可视化应用上，并进行预览发布。