<!DOCTYPE html> 

量化地形瓦片是三维城市构建器的全局图层，支持独立的样式和数据配置，包括量化地形瓦片的通用配置和交互配置样式。本文介绍量化地形瓦片配置项的含义。

在场景编辑器左侧图层列表中，单击量化地形瓦片图层，进入配置面板配置量化地形瓦片图层的样式和数据。 

**说明** 如果图层列表中没有量化地形瓦片，说明您还未添加量化地形瓦片图层，请参见[添加子组件](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/layer-panel-management-of-professional-edition#section-1yb-xd4-pfe)进行添加。 

## 配置

![配置面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7555358461/p423420.png)
* 搜索配置：单击配置面板右上角的搜索配置，可在搜索配置面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842 "通过搜索资产配置功能，您可以快速定位到资产的对应配置项，在搜索配置页面直接修改配置样式，也可以复用同类型的配置样式。")。
* 量化地形瓦片配置面板中的参数说明。  
  * 通用

|    参数    |    说明    |
|    ----    |    ----    |
|    服务类型    |    设置量化地形瓦片的服务类型，包括自定义和Cesium。    |
|    BaseURL    |    设置量化地形瓦片的BaseURL，当服务类型选择自定义时，需填写量化地形的layer.json地址。仅在服务类型为自定义时显示。    |
|    assetld    |    量化地形瓦片Cesium服务的资源id，仅在服务类型为Cesium时显示。    |
|    token    |    量化地形瓦片Cesium服务的token参数，仅在服务类型为Cesium时显示。    |
  * 交互

|    参数    |    说明    |
|    ----    |    ----    |
|    鼠标交互    |    打开开关，开启鼠标单击交互；关闭开关，关闭鼠标单击交互。    |

## 数据

此图层不需要配置数据。

## 蓝图编辑器交互配置

1. 在当前场景编辑器页面，单击左侧图层列表中量化地形瓦片右侧的![导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89089.jpg)图标。
2. 单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89087.jpg)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的量化地形瓦片图层，在画布中可以看到如下图所示的量化地形瓦片的蓝图编辑器配置参数。![蓝图编辑器配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7555358461/p423424.png)
  * 事件

|    事件    |    说明    |
|    ----    |    ----    |
|    左键点击    |    当鼠标左键单击量化地形瓦片时抛出的事件，抛出数据为object类型。    |
  * 动作

|    动作    |    说明    |
|    ----    |    ----    |
|    显示组件    |    显示组件，不需要参数。    |
|    隐藏组件    |    隐藏组件，不需要参数。    |