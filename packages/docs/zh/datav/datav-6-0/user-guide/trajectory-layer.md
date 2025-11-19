<!DOCTYPE html> 

本文介绍路网轨迹层的图表样式和各配置项的含义。

## **图表样式**

路网轨迹层是3D地球的子组件，支持独立的样式和数据配置，包括轨迹线的长宽、运动速度、颜色以及轨迹点经纬度等，适用于模拟地理位置两点或多点之间的运动行为轨迹。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0255778761/p582728.png)

## 配置面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0255778761/p582729.png)
* **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
* **高度**：路网轨迹层相对于地球的高度。
* **最大宽度**：路网轨迹层线的最大宽度，通过数据中的value字段来控制轨迹线的粗细。
* **轨迹长度**：运动轨迹线的长度。
* **速度**：轨迹线的运动速度。
* **最大值颜色**：数据中value值最大的线的颜色，请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改。
* **最小值颜色**：数据中value值最小的线的颜色，请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改。
* **点间距(km)**：轨迹层内轨迹点与点之间的距离，距离越大轨迹线分段数越少，分段样式越明显。
* **透明度系数**：轨迹线上点的颜色透明度值，取值范围0.01\~1，数值越大，透明度越大。

## 数据面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1255778761/p582731.png)

该组件数据为GeoJson格式，关于数据格式以及数据获取方法，请参见[地图数据格式](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/map-data-format#concept-ewk-2f5-q2b)和基础平面地图的[地理边界geojson数据接口](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/choropleth-layer#uicontrol-srh-ycj-zn9)。

### **配置字段说明**

| **字段**      | **说明**                             |
| ---- | ---- |
| geometry    | 定义type类型为"LineString"。             |
| coordinates | 定义两个或多个经纬度坐标位置。                    |
| properties  | 定义value字段，配合配置中的**最大宽度**来定义轨迹线的粗细。 |

**说明** 

以上字段说明为数据示例中的举例说明，仅供参考。

__表 1\. 配置项说明__
| **配置项**    | **说明**                                                                                                                                                                |
| ---- | ---- |
| **受控模式**   | 打开开关，资产初始化状态下不请求数据，仅通过回调ID或蓝图编辑器配置的方法发起请求数据；关闭开关，可以使用自动更新请求数据。开关默认为关闭状态。                                                                                              |
| **自动更新请求** | 选中后可以设置动态轮询，还可以手动输入轮询的时间频次。取消选中后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和回调ID事件来触发请求更新数据。                                                                                            |
| **数据源**    | 单击**配置数据源**，可在**设置数据源**面板中修改数据源类型和数据查询代码、预览数据源返回结果以及查看数据响应结果，详情请参见[配置资产数据](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-widget-data#task-2376875)。 |
| **数据过滤器**  | 数据过滤器提供数据结构转换、筛选和一些简单的计算功能。单击**添加过滤器**，可在**设置数据源**面板配置数据过滤器脚本，详情请参见[过滤器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-the-data-filter#task-1322674)。 |
| **数据响应结果** | 展示数据请求的响应结果。当数据源发生改变时，可单击右侧的![刷新图标 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0376703061/p89093.png)图标，实时查看数据响应结果。                                |

## 交互面板

此组件没有交互事件。

## 蓝图编辑器交互配置

1. 在画布编辑器页面，单击**3D地球**子组件管理列表中**路网轨迹层**右侧的![导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89089.jpg)图标。
2. 单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89087.jpg)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的**路网轨迹层**组件，在画布中可以看到如下图所示的路网轨迹层的蓝图编辑器配置参数。![路网轨迹层蓝图编辑器参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5304684261/p87730.jpg)

  * **事件**

| **事件**        | **说明**                                                                                                          |
| ---- | ---- |
| **当轨迹层请求完成时** | 轨迹层请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。                           |
| **当轨迹层请求完成时** | 轨迹层请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。 |
  * **动作**

| **动作**    | **说明**                                                                                                                         |
| ---- | ---- |
| **请求轨迹层** | 重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如路网轨迹层配置了API数据源为https://api.test，传到**请求轨迹层**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。 |
| **导入轨迹层** | 按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。                                              |
| **显示组件**  | 显示组件，不需要参数。                                                                                                                    |
| **隐藏组件**  | 隐藏组件，不需要参数。                                                                                                                    |