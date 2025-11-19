<!DOCTYPE html> 

栅格瓦片是城市三维场景构建器的图层，是地理场景的数据接入组件，可以接入栅格瓦片数据。栅格瓦片支持独立的样式配置。本文介绍栅格瓦片各配置项的含义。

单击图层管理下方的栅格瓦片图层，进入配置面板配置栅格瓦片图层的样式和数据。 

**说明** 如果图层管理中没有栅格瓦片，说明您还未添加栅格瓦片图层，请参见[使用默认基底数据方式创建组件后添加图层](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/layer-panel-management-of-previous-edition#section-1yb-xd4-pfe)进行添加。 

## 配置

![配置面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7044159161/p268877.png)
* 搜索配置：单击配置面板右上角的搜索配置，可在搜索配置对话框中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索组件配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842 "通过搜索组件配置功能，您可以快速定位到组件的对应配置项、在搜索配置页面直接修改配置样式、以及复用同类型的配置样式。")。
* 栅格瓦片配置项参数说明。  

| 参数               | 说明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ---- | ---- |
| 数据形式             | 自定义选择栅格瓦片数据接入的形式，可选自定义或默认数据两种。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 投影类型             | 自定义选择投影类型，可选球面墨卡托投影和经纬度投影。仅在数据形式选择自定义时可配置。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| XYZ Tiles模板Url配置 | 配置xyz格式的瓦片模板URL链接地址。 单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一个xyz格式的瓦片模板URL源数据链接。 单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个xyz格式的瓦片模板URL源数据的排列样式。 单击![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p267731.jpg)图标，复制当前选择源数据模板URL配置并粘贴新增一个同样配置的瓦片模板URL源数据。 仅在数据形式选择自定义时可配置。 |
| 缩放等级             | 瓦片的缩放等级配置样式，包括： 最小和最大缩放：拖动滑块调整瓦片的zoom区间缩放范围。 缩放偏移：拖动滑块调整瓦片起始zoom值，默认为0，取值范围为0\~1。 仅在数据形式选择自定义时可配置。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| 默认数据列表           | 配置选择默认数据的地图样式，可选高德影像地图和高德电子地图。仅在数据形式选择默认数据时可配置。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

## 数据

该组件不需要配置数据。

## 蓝图编辑器交互配置

1. 在当前场景编辑器页面，单击左侧图层列表中栅格瓦片右侧的![导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89089.jpg)图标。
2. 鼠标移动到页面左上角的返回图标，单击弹出对话框中的蓝图编辑器。
3. 在蓝图编辑器配置页面，单击导入节点栏内的栅格瓦片图层，在画布中可以看到如下图所示的栅格瓦片的蓝图编辑器配置参数。![栅格瓦片蓝图参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p267735.jpg)
  * 事件：无。
  * 动作

| 动作   | 说明          |
| ---- | ---- |
| 显示组件 | 显示组件，不需要参数。 |
| 隐藏组件 | 隐藏组件，不需要参数。 |