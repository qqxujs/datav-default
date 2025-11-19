<!DOCTYPE html> 

本文介绍中国国家边界的图表样式和各配置项的含义。

## **图表样式**

中国国家边界是基础平面地图 3.0的子组件，支持独立的样式、数据和交互配置，包括国家边界的样式和地理标注样式等。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0613808761/p577300.png)

## 配置面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0613808761/p577301.png)

* **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
* **通用**：设置中国国家边界的通用配置项。

| **参数**   | **说明**                                     |
| ---- | ---- |
| **可见级别** | 设置中国国家边界的可见级别值，在设定的级别范围内中国国家边界可见，级别之外不可见。  |
| **不透明度** | 设置中国国家边界的不透明度值，取值范围为0\~100，单位%，数值越大图层越不透明。 |
* **图形**：设置中国国家边界的图形配置项。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0613808761/p577302.png)

| **参数**   | **说明**                                                                                                                                                                                                     |
| ---- | ---- |
| **填充颜色** | 设置中国国家边界内的区域填充颜色样式，请参见[颜色映射器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/color-mapper-instructions#concept-2067387)，配置不同国家地图中区域块的映射颜色样式。                                                    |
| **边界样式** | 设置中国地图边界的样式，包括设置国界线的颜色和粗细值、省界线的颜色和粗细值、海岸线的颜色和粗细值。                                                                                                                                                          |
| **地理标注** | 设置中国地图中地理位置处的标注样式，包括标注的图标颜色及图标中的文字样式。单击**地理标注**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制**地理标注**样式的显隐。                                          |
| **海南附图** | 设置中国海南附图的样式，包括海南区域中的陆地颜色、海洋颜色、附图的边框线颜色、附图边框线的粗细、附图离组件最右侧和底部边界的距离和附图的整体放大缩小比例值。单击**海南附图**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制**海南附图**样式的显隐。 |
* **条件**：条件样式说明。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0613808761/p577305.png)

**条件样式**：单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一个条件样式。 单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个条件样式的排列样式。单击![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5896941261/p271562.jpg)图标，即可复制当前选中的条件样式配置并新增一个同样配置的条件样式。具体配置请参见[条件树使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/instructions-of-conditional-tree#task-2099938)。

**填充颜色**：设置该条件下中国国家边界的填充颜色。单击**填充颜色**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制该条件下中国国家边界填充颜色的显隐。

## 数据面板（默认模式）

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0613808761/p577306.png)

### **配置字段说明**

| **字段**     | **说明**                                                                         |
| ---- | ---- |
| adcode     | 区域的adcode编号，可通过[DataV.GeoAtlas](http://datav.aliyun.com/static/tools/atlas)获取。 |
| name       | （可选）地区的名称。                                                                     |
| value      | （可选）地区的值。                                                                      |
| colorField | （可选）地区的颜色映射字段。                                                                 |

__表 1\. 配置项说明__
| **配置项**    | **说明**                                                                                                                                                                |
| ---- | ---- |
| **受控模式**   | 打开开关，资产初始化状态下不请求数据，仅通过回调ID或蓝图编辑器配置的方法发起请求数据；关闭开关，可以使用自动更新请求数据。开关默认为关闭状态。                                                                                              |
| **自动更新请求** | 选中后可以设置动态轮询，还可以手动输入轮询的时间频次。取消选中后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和回调ID事件来触发请求更新数据。                                                                                            |
| **数据源**    | 单击**配置数据源**，可在**设置数据源**面板中修改数据源类型和数据查询代码、预览数据源返回结果以及查看数据响应结果，详情请参见[配置资产数据](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-widget-data#task-2376875)。 |
| **数据过滤器**  | 数据过滤器提供数据结构转换、筛选和一些简单的计算功能。单击**添加过滤器**，可在**设置数据源**面板配置数据过滤器脚本，详情请参见[过滤器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-the-data-filter#task-1322674)。 |
| **数据响应结果** | 展示数据请求的响应结果。当数据源发生改变时，可单击右侧的![刷新图标 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0376703061/p89093.png)图标，实时查看数据响应结果。                                |

## 数据面板（分析模式）

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6124633371/p882932.png)

**中国国家边界**子组件BI分析数据配置面板中的详细操作说明，请参见[BI分析模式数据面板功能介绍](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/introduction-to-features-of-the-data-panel-in-bi-analysis-mode#task-2098468)。

### **配置字段说明**

| **字段**     | **说明**                                                                         |
| ---- | ---- |
| adcode     | 区域的adcode编号，可通过[DataV.GeoAtlas](http://datav.aliyun.com/static/tools/atlas)获取。 |
| name       | （可选）地区的名称。                                                                     |
| value      | （可选）地区的值。                                                                      |
| colorField | （可选）地区的颜色映射字段。                                                                 |

## 交互面板

此组件没有交互事件。

## 蓝图编辑器交互配置

1. 在画布编辑器页面，单击**基础平面地图 3.0**子组件管理列表中**中国国家边界**右侧的![导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89089.jpg)图标。

**说明**  
以BI分析模式添加的子组件无蓝图交互功能。
2. 单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89087.jpg)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的**中国国家边界**组件，在画布中可以看到如下图所示的中国国家边界的蓝图编辑器配置参数。![中国国家边界蓝图参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7996732361/p312592.jpg)

  * **事件**

| **事件**            | **说明**                                                                                                           |
| ---- | ---- |
| **当热力值数据接口请求完成时** | 数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。                           |
| **当热力值数据接口请求失败时** | 数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。 |
  * **动作**

| **动作**        | **说明**                                                                                                                              |
| ---- | ---- |
| **请求热力值数据接口** | 重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如中国国家边界配置了API数据源为https://api.test，传到**请求热力值数据接口**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。 |
| **导入热力值数据接口** | 按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。                                                   |
| **显示**        | 显示组件，不需要参数。                                                                                                                         |
| **隐藏**        | 隐藏组件，不需要参数。                                                                                                                         |