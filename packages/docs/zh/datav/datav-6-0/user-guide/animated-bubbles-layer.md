<!DOCTYPE html> 

呼吸气泡层是基础平面地图的子组件，支持独立的样式、数据和交互配置，包括呼吸气泡的大小、动画效果、气泡类型以及经纬度等，能够以呼吸气泡的形式表现地理位置上的点数据信息。本文介绍呼吸气泡层各配置项的含义。

**注意** 当前为v1.x版本的呼吸气泡层子组件指导文档，如需查看该子组件v2.x版本的文档内容详情，请参见[呼吸气泡层（v2.x版本）](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/animated-bubbles-layer-of-v2-x#concept-2402354 "呼吸气泡层是基础平面地图的子组件，支持独立的样式、数据和交互配置，包括呼吸气泡的大小、动画效果、气泡类型以及经纬度等，能够以呼吸气泡的形式表现地理位置上的点数据信息。本文介绍呼吸气泡层各配置项的含义。")。 

单击子组件管理下方的呼吸气泡层，进入配置面板配置呼吸气泡层的样式和数据。 

**说明** 如果子组件管理中没有呼吸气泡层，说明您还未添加呼吸气泡层子组件，请参见[地图容器（v1.x版本）](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/map-container-2#concept-z4z-2f5-q2b "地图容器是基础平面地图中用于承载地图本身和各子组件的容器，支持添加区域热力层、点热力层等子组件，支持配置地图的位置、颜色、鼠标交互事件等，能够多角度、多形式地渲染全国各城市地理位置的实时数据。本文介绍基础平面地图容器各配置项的含义。")进行添加。 

## 配置

![呼吸气泡层配置面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3858068951/p34259.png)
* 搜索配置：单击配置面板右上角的搜索配置，可在搜索配置面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842 "通过搜索资产配置功能，您可以快速定位到资产的对应配置项，在搜索配置页面直接修改配置样式，也可以复用同类型的配置样式。")。
* 动画效果：设置呼吸气泡层的动画效果，包括呼吸动效和渐隐渐现。
* 呼吸范围：呼吸气泡层从小到大的渐变范围，仅当动画效果为呼吸动效时，此选项才生效。
* 动效速度：呼吸气泡层的动效速度。
* 渐变范围：呼吸气泡层的从隐到显的渐变范围。
* 最大尺寸：数据源的value值最大时对应的气泡的尺寸。
* 最小尺寸：数据源的value值最小时对应的气泡的尺寸。
* 气泡类型：单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，增加或删除一个气泡类型。 单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个气泡类型的排列样式。  
  * 样式：气泡样式，DataV提供七种类型供您选择。
  * 类型过滤值：所选类型的气泡对应的value值，与数据源中的type字段配合使用，设置同一类型的气泡样式。  
  图 1\. 呼吸气泡层类型过滤值配置项  
  ![呼吸气泡层类型过滤值配置项](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1858068951/p86686.png)  
  图 2\. 呼吸气泡层数据面板  
  ![呼吸气泡层数据面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1858068951/p86687.png)
  * 颜色：数据面板中与类型过滤值相同的type值所对应气泡的颜色，请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改。

## 数据

![呼吸气泡层数据面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1858068951/p34269.png)

单击[此处](http://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/attach/30366/cn%5Fzh/1557042515084/Basicmap%5Fbubble%5Flayer%5Fexample.json)下载上图中的示例JSON代码。 

__表 1\. 字段说明__
|    字段    |    说明    |
|    ----    |    ----    |
|    lng    |    气泡的经度。    |
|    lat    |    气泡的纬度。    |
|    value    |    气泡的值，与配置面板中的最大尺寸和最小尺寸配合使用，来设置气泡的大小。    |
|    type    |    气泡类型，与配置面板中的类型过滤值配合使用，来设置某种类型的气泡样式。    |

__表 2\. 配置项说明__
|    配置项    |    说明    |
|    ----    |    ----    |
|    受控模式    |    打开开关，资产初始化状态下不请求数据，仅通过回调ID或蓝图编辑器配置的方法发起请求数据；关闭开关，可以使用自动更新请求数据。开关默认为关闭状态。    |
|    自动更新请求    |    选中后可以设置动态轮询，还可以手动输入轮询的时间频次。取消选中后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和回调ID事件来触发请求更新数据。    |
|    数据源    |    单击配置数据源，可在设置数据源面板中修改数据源类型和数据查询代码、预览数据源返回结果以及查看数据响应结果，详情请参见[配置资产数据](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-widget-data#task-2376875 "本文档介绍配置资产数据的方法，以及资产数据面板的内容，包括数据接口、数据源、数据过滤器和数据轮询频次等。")。    |
|    数据过滤器    |    数据过滤器提供数据结构转换、筛选和一些简单的计算功能。单击添加过滤器，可在设置数据源面板配置数据过滤器脚本，详情请参见[过滤器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-the-data-filter#task-1322674 "您可以使用数据过滤器，自定义数据过滤代码，实现数据结构转换、数据筛选展示和一些简单的计算。本文介绍新版DataV资产数据过滤器的使用方法。")。    |
|    数据响应结果    |    展示数据请求的响应结果。当数据源发生改变时，可单击右侧的![刷新图标 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0376703061/p89093.png)图标，实时查看数据响应结果。    |

## 交互

此组件没有交互事件。

## 蓝图编辑器交互配置

1. 在画布编辑器页面，单击基础平面地图子组件管理列表中呼吸气泡层右侧的![导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89089.jpg)图标。
2. 单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89087.jpg)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的呼吸气泡层组件，在画布中可以看到如下图所示的呼吸气泡层的蓝图编辑器配置参数。![呼吸气泡层蓝图编辑器参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1858068951/p69568.jpg)
  * 事件  
  当数据接口请求完成时：数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据请参见上文的[数据示例](#section-c3s-dmt-cgb)。
  * 动作

|    动作    |    说明    |
|    ----    |    ----    |
|    请求数据接口    |    重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如呼吸气泡层配置了API数据源为http://api.test，传到请求数据接口动作的数据为{ id: '1'}，则最终请求接口为http://api.test?id=1。    |
|    导入数据接口    |    按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据请参见上文的[数据示例](#section-c3s-dmt-cgb)。    |
|    显示    |    显示组件，不需要参数。    |
|    隐藏    |    隐藏组件，不需要参数。    |