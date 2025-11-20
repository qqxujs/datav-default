# 底图层（v2.x版本） %{#153631}% 

底图层也叫地图瓦片层，是基础平面地图的子组件，能够使用自定义的瓦片服务来设置基础平面地图的背景。支持独立的样式和数据配置，包括底图层的瓦片类型或地址、颜色、滤镜等。本文介绍底图层各配置项的含义。

**重要** 

当前为v2.x版本的底图层子组件指导文档，如需查看该子组件v1.x版本的文档内容详情，请参见[底图层（v1.x版本）](/zh/datav/datav-6-0/user-guide/bottom-layer#concept-pct-hf5-q2b)。

单击**子组件管理**下方的**底图层**，进入配置面板配置**底图层**的样式和数据。 

**说明** 

如果**子组件管理**中没有**底图层**，说明您还未添加**底图层**子组件，请参见[地图容器（v2.x版本）](/zh/datav/datav-6-0/user-guide/map-container#concept-2400968)进行添加。

## 配置

![底图层V2.x配置面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9305651261/p120648.png)

* **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
* **可见级别**：设置底图层的可见级别值，在设定的级别范围内底图层可见，级别之外不可见。
* **蒙版颜色**：底图层的蒙版颜色，请参见[颜色选择器说明](/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改。
* **透明度**：底图层的透明度，范围为0\~1。
* **瓦片**：瓦片服务类型，下拉列表中可选**高德电子地图**和**高德卫星图**。如果您想使用其他瓦片服务，可以直接输入瓦片地址，按**Enter**键确定。DataV支持接入的地图瓦片服务如下表所示。

|    **地图类型**    |    **瓦片服务类型**    |    **瓦片地址**    |
|    ----    |    ----    |    ----    |
|    高德地图    |    高德电子地图    |    http://webst02.is.autonavi.com/appmaptile?style=7&x={x}&y={y}&z={z}    |
|    高德卫星图    |    http://webst02.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}    |    |
|    高德卫星图（路网、注记）    |    http://webst02.is.autonavi.com/appmaptile?style=8&x={x}&y={y}&z={z}    |    |
|    天地图    |    天地图\_矢量切片    |    https://t1.tianditu.gov.cn/DataServer?T=vec\_w&x={x}&y={y}&l={z}&tk=您的密钥    |
|    天地图\_矢量切片\_注记    |    https://t1.tianditu.gov.cn/DataServer?T=cva\_w&x={x}&y={y}&l={z}&tk=您的密钥    |    |
|    天地图\_影像    |    https://t5.tianditu.gov.cn/DataServer?T=img\_w&x={x}&y={y}&l={z}&tk=您的密钥    |    |
|    天地图\_影像\_边界路网    |    https://t3.tianditu.gov.cn/DataServer?T=ibo\_w&x={x}&y={y}&l={z}&tk=您的密钥    |    |
|    天地图\_影像\_注记    |    https://t3.tianditu.gov.cn/DataServer?T=cia\_w&x={x}&y={y}&l={z}&tk=您的密钥    |    |

**重要**  
如果您使用的是天地图瓦片服务，需要在原有瓦片获取的请求参数中添加您的授权参数信息。您先在天地图API网站控制台免费申请注册开发许可（Key），详细请参见[天地图应用开发许可申请说明](http://lbs.tianditu.gov.cn/authorization/authorization.html)。
* **瓦片大小**：可选**256**和**512**两种规格。默认情况下此选项无需修改，特殊情况下请参照您瓦片服务输出瓦片大小进行修改。
* **缩放偏移**：拖动滑块调整底图层缩放f偏移的值，取值范围为-10\~10。仅在父容器使用自定义坐标系时才会生效，默认值为0。
* **TMS**：打开开关，底图层内容遵循TMS协议；关闭开关，底图层内容不遵循TMS协议。
* **自动刷新**：打开开关，系统会按照您设置的**刷新间隔**时间，自动刷新瓦片数据。  

**说明**  
当您使用的瓦片服务为高德热力或高德实时路况时，需开启此选项，用来自动刷新获取最新的瓦片数据。

**刷新间隔**：瓦片自动刷新的时间间隔，单位为分钟。
* **滤镜**：单击左侧![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8808332271/p274464.jpg)图标，即可开启滤镜配置。开启后，可以为底图层添加滤镜效果，可设置滤镜的**亮度**、**对比度**、**灰度**、**色相**、**反转**、**饱和度**和**墨度**。

## 数据

此组件不需要配置数据。

## 交互

此组件没有交互事件。

## 蓝图编辑器交互配置

1. 在画布编辑器页面，单击**基础平面地图**子组件管理列表中**底图层**右侧的![导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89089.jpg)图标。
2. 单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89087.jpg)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的**底图层**组件，在画布中可以看到如下图所示的底图层的蓝图编辑器配置参数。![底图层蓝图编辑器参数v2.x](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4195751261/p81335.jpg)

  * **事件**：无。
  * **动作**

|    **动作**    |    **说明**    |
|    ----    |    ----    |
|    **设置瓦片路径**    |    设置瓦片的路径，动作传入数据为object类型。参考数据示例如下。{   "tileUrl": ""  //瓦片路径需要设置x,y,z参数 }    |
|    **显示**    |    显示组件，不需要参数。    |
|    **隐藏**    |    隐藏组件，不需要参数。    |