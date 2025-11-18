  网格聚合层（v3.x版本）组件配置指南-DataV数据可视化-阿里云

本文介绍网格聚合层的图表样式和各配置项的含义。

## **图表样式**

网格聚合层是基础平面地图 3.0的子组件，支持独立的样式和数据配置，包括网格的尺寸大小、颜色和标注等，能够以聚合网格点的形式表现地理位置上的点的分布密度。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4245633371/p883155.png)

## 配置面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1896618761/p578523.png)

-   **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
    
-   **通用**：设置网格聚合层的通用配置项。
    
    **参数**
    
    **说明**
    
    **可见级别**
    
    设置网格聚合层的可见级别值，在设定的级别范围内网格聚合层可见，级别之外不可见。
    
    **不透明度**
    
    设置网格聚合层的不透明度值，取值范围为0~100，单位%，数值越大图层越不透明。
    
-   **图形**：设置网格聚合层的图形配置项。
    
    **参数**
    
    **说明**
    
    **网格尺寸**
    
    设置网格的尺寸大小，请参见[尺寸映射器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/instructions-of-dimension-mapper#concept-2067399)，配置不同网格的映射尺寸样式。
    
    **网格颜色**
    
    设置网格的颜色样式，请参见[颜色映射器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/color-mapper-instructions#concept-2067387)，配置不同网格的映射颜色样式。
    
    **网格间距**
    
    拖动滑块调整网格之间的距离，取值范围为0~20，单位px。
    
    **网格描边**
    
    设置网格描边线的颜色和描边线的粗细值，取值范围为0~20，单位px。
    
    **网格阴影**
    
    设置网格阴影样式的颜色和阴影的模糊度值，取值范围为0~20，单位px。
    
    **网格标注**
    
    单击**网格标注**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制网格标注样式的显隐。
    
    **文本样式**：设置标注文字的字体、文字粗细、字号和颜色。请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改颜色。
    

## 数据面板（默认模式）

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1896618761/p578526.png)

### **配置字段说明**

**字段**

**说明**

`lng`

网格点的经度。

`lat`

网格点的纬度。

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

## 数据面板（分析模式）

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3540433371/p578529.png)

**网格聚合层**子组件BI分析数据配置面板中的详细操作说明，请参见[BI分析模式数据面板功能介绍](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/introduction-to-features-of-the-data-panel-in-bi-analysis-mode#task-2098468)。

### **配置字段说明**

**字段**

**说明**

`lng`

网格点的经度。

`lat`

网格点的纬度。

## 交互面板

此组件没有交互事件。

## 蓝图编辑器交互配置

1.  在画布编辑器页面，单击**基础平面地图 3.0**子组件管理列表中**网格聚合层**右侧的![导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89089.jpg)图标。
    
2.  单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89087.jpg)图标。
    
3.  在蓝图编辑器配置页面，单击导入节点栏内的**网格聚合层**组件，在画布中可以看到如下图所示的网格聚合层的蓝图编辑器配置参数。![网格聚合层蓝图参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7827732361/p313484.jpg)
    
    -   **事件**
        
        **事件**
        
        **说明**
        
        **当数据接口请求完成时**
        
        数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
        **当数据接口请求失败时**
        
        数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
    -   **动作**
        
        **动作**
        
        **说明**
        
        **请求数据接口**
        
        重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如网格聚合层配置了API数据源为`https://api.test`，传到**请求数据接口**动作的数据为`{ id: '1'}`，则最终请求接口为`https://api.test?id=1`。
        
        **导入数据接口**
        
        按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
        **显示**
        
        显示组件，不需要参数。
        
        **隐藏**
        
        隐藏组件，不需要参数。