 

本文档为您介绍DataV地图组件主要使用的GCJ-02坐标系和GeoJSON地理数据格式，以及通过坐标拾取器快速获取基于GCJ-02坐标位置的方法。

## GCJ-02坐标系

目前，DataV的地图组件主要使用GCJ-02坐标系。GCJ-02是由中国国家测绘局（G表示国家Guojia，C表示测绘Cehui，J表示局Ju）制订的地理信息系统的坐标系统。它是一种对经纬度数据的加密算法，即加入随机的偏差。中国大陆出版的各种地图系统（包括电子形式），必须至少采用GCJ-02对地理位置进行首次加密。

-   [JavaScript版本：坐标系转换工具](https://github.com/wandergis/coordtransform-cli?spm=a2c4g.11186623.2.5.whUmyN)。
-   [JavaScript版本：坐标系转换工具，整个GeoJSON转换](https://github.com/wandergis/coordtransform-cli?spm=a2c4e.11153940.blogcont554167.11.5aae1ab0TbZ6Z9)。

## GeoJSON格式

目前，DataV的地图组件主要使用GeoJSON的地理数据格式。

-   GeoJSON是基于JavaScript对象表示法的地理空间信息数据交换格式，详情请参见[地理空间数据格式 GeoJSON](https://baike.baidu.com/item/GeoJson/12011566?fr=aladdin)。
-   您可以通过GeoJSON在线编辑工具[DataV.GeoAtlas](https://datav.aliyun.com/portal/school/atlas/area_generator)，获取或编辑GeoJSON格式的地理数据。
-   您可以使用GeoJSON行政区划边界提取小工具 [DataV.GeoAtlas](http://datav.aliyun.com/static/tools/atlas/?spm=a2c4g.11186623.2.8.whUmyN#&lat=33.521903996156105&lng=104.29849999999999&zoom=4)，获取区域边界的地理数据信息，最低层级为区县级。

## 坐标拾取器—高德地图

您可以通过高德地图的坐标拾取器，将详细地址转换为精准的基于[](#section-tmg-qf5-q2b)的坐标。

例如，在搜索框中输入**西溪湿地**，在右侧的**坐标获取结果**中即可获取对应的坐标信息。![高德地图坐标拾取器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4701884261/p8526.png)