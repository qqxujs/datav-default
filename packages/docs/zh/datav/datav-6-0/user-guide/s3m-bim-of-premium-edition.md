<!DOCTYPE html> 

S3M BIM是三维城市构建器的图层，支持独立的样式和数据配置，包括S3M BIM的通用配置和交互配置样式。本文介绍S3M BIM配置项的含义。

在场景编辑器左侧图层列表中，单击**S3M BIM**图层，进入配置面板配置**S3M BIM**图层的样式和数据。 

**说明** 

如果图层列表中没有**S3M BIM**，说明您还未添加**S3M BIM**图层，请参见[添加子组件](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/layer-panel-management-of-professional-edition#section-1yb-xd4-pfe)进行添加。

## 配置

![配置面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9285358461/p423493.png)

* **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
* S3M BIM配置面板中的参数说明。

  * **通用**

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **可见性像素权重**    |    设置S3M BIM的可见性像素权重，取值范围为1\~100。    |
|    **lod更新速率**    |    设置S3M BIM的lod更新速率，取值范围为1\~100。    |
  * **交互**

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **鼠标交互**    |    打开鼠标交互的开关，可以看到是否开启iServer的交互开关、高亮颜色的配置选项以及透明度的配置项；关闭开关，则看不到鼠标交互下的配置选项。其中iServer交互当且仅当在数据源中存在interactive\_url字段时才会生效。    |

## 数据

![数据面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0385358461/p423496.png)

__表 1\. 字段说明__
|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    url    |    S3M BIM的三维服务URL，如//%/realspace/datas/%/config。    |
|    interative\_url    |    S3M BIM的数据服务URL，如//%/realspace/services/%/rest/data。    |

如果您在创建三维城市构建器项目时，使用了**空间数据项目**模式，并且项目内包含了S3M BIM数据内容。在场景编辑器内配置S3M BIM的数据面板时，您还可以使用**空间构建数据源**获取空间地图上S3M BIM数据， 具体步骤如下：

1. 在图层配置面板中选择**数据**页签，单击面板下方的**数据源类型**下拉框，选择**空间构建数据源**。
2. 在面板下方的**数据项目**下拉列表中，选择一个空间构建平台内已有的数据项目。![选择数据项目](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8542019161/p264408.png)
3. 选择完数据项目后，在**数据集**下拉列表中，选择一个匹配的数据。![数据集面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8542019161/p266156.png)

**说明** 如果**数据项目**和**数据集**配置项内没有任何可供配置数据类型的内容，请您单击面板内**前往空间构建平台管理数据**处，进入空间构建平台配置数据。详情请参见[空间数据管理概览](https://help.aliyun.com/zh/datav/overview-of-spatial-data-management-for-datav-6#concept-2042937)。  
![管理构建平台入口](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7516197461/p419763.png)

__表 2\. 配置项说明__
|    **配置项**    |    **说明**    |
|    ----    |    ----    |
|    **受控模式**    |    打开开关，资产初始化状态下不请求数据，仅通过回调ID或蓝图编辑器配置的方法发起请求数据；关闭开关，可以使用自动更新请求数据。开关默认为关闭状态。    |
|    **自动更新请求**    |    选中后可以设置动态轮询，还可以手动输入轮询的时间频次。取消选中后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和回调ID事件来触发请求更新数据。    |
|    **数据源**    |    单击**配置数据源**，可在**设置数据源**面板中修改数据源类型和数据查询代码、预览数据源返回结果以及查看数据响应结果，详情请参见[配置资产数据](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-widget-data#task-2376875)。    |
|    **数据结果**    |    展示数据请求的响应结果。当数据源发生改变时，可单击右侧的![刷新图标 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0376703061/p89093.png)图标，实时查看数据响应结果。    |

## 蓝图编辑器交互配置

1. 在当前场景编辑器页面，单击左侧图层列表中**S3M BIM**右侧的![导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89089.jpg)图标。
2. 单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89087.jpg)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的**S3M BIM**图层，在画布中可以看到如下图所示的S3M BIM的蓝图编辑器配置参数。![蓝图配置参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9285358461/p423500.png)

  * **事件**

|    **事件**    |    **说明**    |
|    ----    |    ----    |
|    **当数据接口请求完成时**    |    数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
|    **左键点击**    |    当鼠标左键单击S3M BIM时抛出的事件，抛出数据为object类型。    |
  * **动作**

|    **动作**    |    **说明**    |
|    ----    |    ----    |
|    **请求数据接口**    |    重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如S3M BIM配置了API数据源为http://api.test，传到**请求数据接口**动作的数据为{ id: '1'}，则最终请求接口为http://api.test?id=1。    |
|    **导入数据接口**    |    按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
|    **显示组件**    |    显示组件，不需要参数。    |
|    **隐藏组件**    |    隐藏组件，不需要参数。    |