  配置3D地球子组件区域热力层的样式数据与交互-DataV数据可视化-阿里云

本文介绍区域热力层的图表样式和各配置项的含义。

## **图表样式**

区域热力层是3D地球的子组件，支持独立的样式和数据配置，能够使用GeoJson数据展示区域边界信息并渲染区域样式，适用于在3D地球上展示某个区域的数据信息。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6346968761/p582171.png)

## 配置面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6346968761/p582173.png)

-   **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
-   **高度**：区域热力层在球体层中的相对高度，取值范围1.5~10。
    
-   **只显示边界**：打开开关，只显示区域边界线。关闭开关，显示区域面及边界线，并且可配置其样式。
    
    -   **打开只显示边界**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6346968761/p582174.png)
        
    -   **关闭只显示边界**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6346968761/p582175.png)
        
-   **最小值**：组件数据中最小的`value`值所对应区域的颜色，请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改。仅在关闭只显示边界开关时展示。
    
-   **最大值**：组件数据中最大的`value`值所对应区域的颜色，请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改。仅在关闭只显示边界开关时展示。
    
-   **无值**：系统在获取区域热力边界数据时，如果缺少了某个区域的数据（当区域热力图数据中没有对应的地理边界数据中的adcode值时），这个区域的颜色就会展示为无值的颜色，请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改。仅在关闭只显示边界开关时展示。
    
-   **面透明度**：区域面的透明度。仅在关闭只显示边界开关时展示。
    
-   **边线颜色**：区域边界线的颜色，请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改。
    
-   **边线透明度**：区域边界线的透明度，取值范围0~1。
    
-   **边线宽度**：区域边界线的宽度，取值范围0~0.2。
    
-   **交互开关**：打开交互开关，可以设置点击地球区域时的颜色。
    

## 数据面板

区域热力层的数据面板包括**地理边界geojson数据接口**数据和**区域面数据接口**数据。

-   ### **地理边界geojson数据接口**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6346968761/p582219.png)
    
    通过配置地理边界geojson数据接口，可将提取到的区域GeoJSON边界数据应用到DataV中。配置方法同**基础平面地图**组件的**区域热力层**配置，具体请参见[地理边界geojson数据接口](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/choropleth-layer#uicontrol-srh-ycj-zn9)。
    
-   ### **区域面数据接口**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6346968761/p582221.png)
    
    #### **配置字段说明**
    
    **字段**
    
    **说明**
    
    `adcode`
    
    地区对应的adcode。
    
    `value`
    
    地区的值。与**最大值**、**最小值**、**无值**配置项配合使用，可控制对应区域的颜色。
    
    **说明**
    
    根据数据的value区间得出scale区间，从而计算从最大到最小的颜色渐变区间。
    

表 1. 配置项说明

**配置项**

**说明**

**受控模式**

打开开关，资产初始化状态下不请求数据，仅通过回调ID或蓝图编辑器配置的方法发起请求数据；关闭开关，可以使用自动更新请求数据。开关默认为关闭状态。

**自动更新请求**

选中后可以设置动态轮询，还可以手动输入轮询的时间频次。取消选中后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和回调ID事件来触发请求更新数据。

**数据源**

单击**配置数据源**，可在**设置数据源**面板中修改数据源类型和数据查询代码、预览数据源返回结果以及查看数据响应结果，详情请参见[配置资产数据](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-widget-data#task-2376875)。

**数据过滤器**

数据过滤器提供数据结构转换、筛选和一些简单的计算功能。单击**添加过滤器**，可在**设置数据源**面板配置数据过滤器脚本，详情请参见[过滤器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-the-data-filter#task-1322674)。

**数据响应结果**

展示数据请求的响应结果。当数据源发生改变时，可单击右侧的![刷新图标 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0376703061/p89093.png)图标，实时查看数据响应结果。

## 交互

此组件没有交互事件。

## 蓝图编辑器交互配置

1.  在画布编辑器页面，单击**3D地球**子组件管理列表中**区域热力层**右侧的![导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89089.jpg)图标。
    
2.  单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89087.jpg)图标。
    
3.  在蓝图编辑器配置页面，单击导入节点栏内的**区域热力层**组件，在画布中可以看到如下图所示的区域热力层的蓝图编辑器配置参数。![区域热力层蓝图参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2311884261/p87701.jpg)
    
    -   **事件**
        
        **事件**
        
        **说明**
        
        **当地理边界geojson数据接口请求完成时**
        
        地理边界geojson数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
        **当区域面数据请求失败时**
        
        区域面数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
        **当地理边界geojson数据接口请求完成时**
        
        地理边界geojson数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
        **当区域面数据请求失败时**
        
        区域面数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
    -   **动作**
        
        **动作**
        
        **说明**
        
        **请求地理边界geojson数据接口**
        
        重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如区域热力层配置了API数据源为`https://api.test`，传到**请求地理边界geojson数据接口**动作的数据为`{ id: '1'}`，则最终请求接口为`https://api.test?id=1`。
        
        **请求区域面数据接口**
        
        重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如区域热力层配置了API数据源为`https://api.test`，传到**请求区域面数据接口**动作的数据为`{ id: '1'}`，则最终请求接口为`https://api.test?id=1`。
        
        **导入地理边界geojson数据接口**
        
        按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
        **导入区域面数据接口**
        
        按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
        **显示组件**
        
        显示组件，不需要参数。
        
        **隐藏组件**
        
        隐藏组件，不需要参数。