<!DOCTYPE html> 

本文介绍轨迹层的图表样式和各配置项的含义。

## **图表样式**

轨迹层是3D地球的子组件，支持独立的样式和数据配置，能够通过轨迹线来展示两个或多个地理位置之间的过渡效果，从而模拟运动轨迹。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0355778761/p582941.png)

## 配置面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0355778761/p582944.png)
* **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
* **图层高度**：轨迹层相对于地球球面的高度，取值范围为0.1\~10。
* **轨迹长度**：运动轨迹线的长度，取值范围为0\~1。
* **轨迹间隔**：轨迹线重复运动的间隔时长，取值范围为0\~1。
* **轨迹速度**：轨迹线的运动速度，取值范围为0\~0.05。
* **轨迹颜色**：轨迹线的颜色，请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改。
* **轨迹透明度**：轨迹线的透明度，取值范围为0\~1。
* **数据分级**：根据数据中的value字段值大小划分（自然分割）成2\~7个数据大小级别，解决value值相差太大导致的渲染问题。
* **轨迹粗细（从细到粗）**：单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一个类型。单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个轨迹粗细类型的排列样式。单击![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5896941261/p271562.jpg)图标，即可复制当前选中类型配置内容并新增一个同样配置的轨迹。  

**轨迹宽度**：该类型中轨迹的最大宽度。![轨迹粗细配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9668068951/p21692.png)

**说明**  
该配置项为一个数组，配合数据分级使用，从类型1到类型n为递增的设置，例：类型1设置为10，则表示`value`值为0\~10的数据将展示为10的大小，类型2设置为20，则表示`value`值为11\~20的数据将展示为20的大小，如果数据分级配置项设置为3级，则类型3的值就将成为`value`大于20的数据展示的数据值大小。

## 数据面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0355778761/p582945.png)

该组件数据为GeoJson格式，关于数据格式以及数据获取方法，请参见[地图数据格式](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/map-data-format#concept-ewk-2f5-q2b)。

### **配置字段说明**

| **字段**      | **说明**                                                                                                              |
| ---- | ---- |
| geometry    | 定义type类型为"LineString"。                                                                                              |
| coordinates | 定义两个或多个经纬度坐标位置。![coordinates参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9668068951/p25270.png) |
| properties  | 定义轨迹起点和终点的adcode，分别为**originid**（起点）和**destinationid**（终点）。定义value字段，配合**轨迹粗细**  \>   **轨迹宽度**配置项来定义轨迹线的粗细，默认值为1。   |

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

1. 在画布编辑器页面，单击**3D地球**子组件管理列表中**轨迹层**右侧的![导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89089.jpg)图标。
2. 单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89087.jpg)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的**轨迹层**组件，在画布中可以看到如下图所示的轨迹层的蓝图编辑器配置参数。![轨迹层蓝图编辑器参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8411884261/p87754.jpg)

  * **事件**

| **事件**         | **说明**                                                                                                           |
| ---- | ---- |
| **当数据接口请求完成时** | 轨迹线层请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。                           |
| **当数据接口请求失败时** | 轨迹线层请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。 |
  * **动作**

| **动作**     | **说明**                                                                                                                        |
| ---- | ---- |
| **请求数据接口** | 重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如轨迹层配置了API数据源为https://api.test，传到**请求数据接口**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。 |
| **导入数据接口** | 按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。                                             |
| **显示组件**   | 显示组件，不需要参数。                                                                                                                   |
| **隐藏组件**   | 隐藏组件，不需要参数。                                                                                                                   |