<!DOCTYPE html> 

DataV-Board（数据看板）中的三维城市构建器采用空间数据瓦片化技术，支持栅格、地形和三维三类瓦片的动态加载与渲染，本文将详细介绍瓦片技术特性及典型应用场景。

## **瓦片概述**

三维城市构建器采用智能瓦片化技术，将地图、地形和建筑模型等空间数据自动分割为标准数据块，根据用户视角动态加载不同精细度的内容，实现从城市全景到建筑细节的无缝展示。该技术全面支持栅格地图、地形高程和三维模型三类数据的处理，确保大规模场景的流畅渲染。

## **瓦片选型指南**

**快速选型**：DataV-Board三大瓦片类型说明与应用场景对照表。

|    瓦片类型    |    说明    |    格式    |    典型应用案例    |    版本支持    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    栅格瓦片    |    栅格瓦片是将地图数据切割为等大小的图片块（如256×256像素），就像把大地图分割成许多小拼图。每个瓦片包含特定区域和缩放级别的图像信息，具有加载速度快、兼容性强的特点，是互联网地图服务的基础技术。    |    [XYZ栅格瓦片](/zh/datav/datav-6-0/user-guide/xyz-raster-tiles)    |    互联网地图服务    |    DataV-Board专业版和尊享版    |
|    [ArcGIS栅格瓦片](/zh/datav/datav-6-0/user-guide/arcgis-raster-tiles)    |    智慧城市管理系统    |    DataV-Board尊享版    |    |    |
|    [超图REST栅格瓦片](/zh/datav/datav-6-0/user-guide/rest-raster-tiles)    |    国产化GIS项目    |    |    |    |
|    [WMS栅格瓦片](/zh/datav/datav-6-0/user-guide/wms-raster-tiles)    |    环境监测热力图    |    |    |    |
|    [WMTS栅格瓦片](/zh/datav/datav-6-0/user-guide/wmts-raster-tiles)    |    国家地理信息公共服务平台    |    |    |    |
|    地形瓦片    |    地形瓦片专门处理高程数据，将地表起伏信息转化为网格化的高度图或量化地形块。它会根据观看距离自动调整细节程度，既能展现整体地貌，又能清晰显示局部地形特征，常用于三维地理场景的基底数据。    |    [高度图地形瓦片](/zh/datav/datav-6-0/user-guide/heightmaps)    |    地形地貌分析    |    |
|    [量化地形瓦片](/zh/datav/datav-6-0/user-guide/quantized-meshes)    |    三维城市基底地形    |    |    |    |
|    三维瓦片    |    三维瓦片是用来加载建筑物、桥梁等立体模型的技术。它采用3D Tiles或S3M格式，将大场景模型分割为空间单元并附加属性信息。根据用户视角智能加载，既能流畅展示整个城市全景，又能清晰呈现单个建筑的细节，是数字城市和三维仿真的关键技术。    |    [3D Tiles 倾斜摄影](/zh/datav/datav-7-0/user-guide/3d-tiles-oblique-photography)    |    旅游景区数字化    |    |
|    [S3M倾斜摄影](/zh/datav/datav-6-0/user-guide/s3m-oblique-photography-of-premium-edition)    |    智慧园区实景模型    |    |    |    |
|    [S3M BIM](/zh/datav/datav-6-0/user-guide/s3m-bim-of-premium-edition)    |    智慧工地监管    |    |    |    |
|    [S3M管网](/zh/datav/datav-6-0/user-guide/s3m-pipe-network-of-premium-edition)    |    城市地下管网管理    |    |    |    |

## **添加瓦片**

操作前，您需要登录[DataV控制台](https://datav.aliyun.com/v/console/)并[创建三维城市项目](/zh/datav/datav-6-0/user-guide/create-3d-city-projects)。

1. 在**三维城市构建器**页签下，鼠标悬停至目标三维城市项目上，单击**编辑**进入场景编辑器。
2. 在场景编辑器中，单击图层面板右上角的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0761085161/p240116.jpg)，选择右侧弹窗的**选择组件**，进入**选择组件**对话框。
3. 在对话框中，您可以通过切换顶部页签选择不同的组件类型（如栅格瓦片、地形瓦片等），然后在组件列表中单选、多选或一键**全选**需要的子组件，最后点击**确认**按钮即可完成添加操作。  
![{22EA85E5-9327-4A50-AAC5-55AEDD7ABACE}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9941743471/p934450.png)

**说明**  
栅格瓦片和地形瓦片子组件添加后将作为全局组件在所有场景中显示，您需要通过组件配置面板设置具体的数据内容和显示参数。
4. 新增的栅格瓦片和地形瓦片子组件会出现在左侧**全局图层**列表中，而三维瓦片子组件则显示在**场景图层列表**内。