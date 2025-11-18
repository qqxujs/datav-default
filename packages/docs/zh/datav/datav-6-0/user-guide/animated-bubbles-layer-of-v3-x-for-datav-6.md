  配置呼吸气泡层（v3.x版本）的样式数据与交互-DataV数据可视化-阿里云

本文介绍呼吸气泡层的图表样式和各配置项的含义。

## **图表样式**

呼吸气泡层是3D平面地图（v3.x版本）的子组件，支持独立的样式、数据和交互配置，包括呼吸气泡的形状、半径、颜色以及发光效果等，能够以呼吸气泡的形式表现地理位置上的点数据信息。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0251833371/p883210.png)

## 配置面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5735348761/p581441.png)

-   **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
    
-   **通用**：设置呼吸气泡层的通用配置项。
    
    **参数**
    
    **说明**
    
    **不透明度**
    
    设置呼吸气泡层的不透明度值，取值范围为0~100，单位%，数值越大图层越不透明。
    
-   **图形**：设置呼吸气泡层的图形配置项，包括气泡的形状样式、半径大小样式、气泡的颜色样式和发光效果。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6735348761/p581444.png)
    
    **参数**
    
    **说明**
    
    **气泡形状**
    
    设置气泡的形状样式，您可以单击![上传](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7179810661/p476807.jpg)，上传本地图片自定义设置气泡形状。请参见[形状映射器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/instructions-of-shape-mapper#concept-2067398)，配置不同气泡的映射形状样式。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5735348761/p581447.png)
    
    **气泡半径**
    
    设置呼吸气泡的半径大小值，请参见[尺寸映射器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/instructions-of-dimension-mapper#concept-2067399)，配置不同气泡的映射半径大小。
    
    **气泡颜色**
    
    设置气泡的颜色样式，请参见[颜色映射器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/color-mapper-instructions#concept-2067387)，配置不同气泡的映射颜色样式。
    
    **发光效果**
    
    拖动滑块设置气泡的发光效果，取值范围为0~100。单击**发光效果**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制**发光效果**的显隐。
    
-   **动效**：设置呼吸气泡的动画效果、缩放比例和变化速率。 ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5735348761/p581448.png)
    
    **参数**
    
    **说明**
    
    **动画效果**
    
    设置呼吸气泡层的动画效果，包括**呼吸**和**渐显**两种。
    
    **缩放比例**
    
    设置呼吸气泡层的缩放比例值，取值范围为1~2。
    
    **变化速率**
    
    设置呼吸气泡层的动效变化速率，取值范围为0~2，数值越大，气泡动画播放速率越快。
    
-   **标签**：设置呼吸气泡层内标签的样式参数。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6735348761/p581449.png)
    
    **参数**
    
    **说明**
    
    **显示标签**
    
    打开开关，呼吸气泡层显示标签样式。
    
    **显示方式**
    
    设置呼吸气泡层的标签显示的方式，可选，包括**全显**和**点击**两种方式。
    
    **内容样式**
    
    设置呼吸气泡层的标签的内容样式。单击**每行样式**右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一个每行内容样式。 单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个每行内容样式的排列方式。单击![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5896941261/p271562.jpg)图标，即可复制当前选中内容样式配置内容并新增一个同样配置的每行内容。
    
    -   **行字段**：行内容的字段名称，需要和数据面板中的字段相匹配。
        
    -   **字段样式**：设置行字段样式，包括字段的字体样式、字号大小、颜色和粗细值。
        
    -   **字段前缀**：设置字段前缀的具体内容 、内容间隔值、字体、字号大小、颜色和粗细值。单击**字段前缀**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制**字段前缀**样式的显隐。
        
    -   **字段后缀**：设置字段后缀的具体内容 、内容间隔值、字体、字号大小、颜色和粗细值。单击**字段后缀**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制**字段后缀**样式的显隐。
        
    -   **字段宽度**：标签的显示字段的宽度样式，包括字段的适应类型方式，可选**自适应**或**固定宽度**，并根据适应类型设置字段宽度的值，单位px。
        
    -   **行高比例**：标签的行高比例值，取值范围为1~2。
        
    -   **内容描边**：标签的内容描边样式，包括设置描边的颜色和描边粗细值，单击**内容描边**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制**内容描边**的显隐。
        
    -   **内容阴影**：标签的内容阴影样式，包括设置阴影的颜色、阴影模糊值和阴影偏移度在x和y方向上的值，单击**内容阴影**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制**内容阴影**的显隐。
        
    
    **背景样式**
    
    设置呼吸气泡层内标签的背景样式参数，单击**背景样式**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制**背景样式**的显隐。
    
    -   **背景类型**：标签背景的类型，可选**矢量**和**图片**。
        
    -   **背景颜色**：设置标签的背景颜色，仅在**背景类型**选择**矢量**时可配置。
        
    -   **边框样式**：设置标签边框的样式，包括边框的线类型，线宽的值和颜色。仅在**背景类型**选择**矢量**时可配置。
        
    -   **边框圆角**：设置标签边框的圆角在四个方向的值，单位px。仅在**背景类型**选择**矢量**时可配置。
        
    -   **图片模板**：选择背景图片的模板样式，仅在**图片模板**选择**图片**时可配置。
        
    -   **不透明度**：设置背景图片的不透明度值，取值范围为0~100，仅在**图片模板**选择**图片**时可配置。
        
    -   **内容边距**：设置标签中的内容距离上下左右四个方向的边距值。
        
    
-   **交互**：呼吸气泡层的交互配置项。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5735348761/p581450.png)
    
    -   **图形交互**：单击**图形交互**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制**图形交互**的显隐。
        
        **参数**
        
        **说明**
        
        **支持多选**
        
        打开开关，支持多选交互效果；关闭开关，不支持多选交互效果。
        
    -   **点击样式**：单击**点击样式**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制**点击样式**的显隐。
        
        **参数**
        
        **说明**
        
        **气泡颜色**
        
        设置单击气泡时的颜色。
        
-   **条件**：条件样式说明。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6735348761/p581451.png)
    
    **条件样式**：单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一个条件样式。 单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个条件样式的排列样式。单击![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5896941261/p271562.jpg)图标，即可复制当前选中条件样式配置内容并新增一个同样配置的条件样式。具体配置请参见[条件树使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/instructions-of-conditional-tree#task-2099938)。
    
    **图形**：打开开关，配置该条件样式中的图形配置项；关闭开关，无法配置该条件样式下的图形配置项。
    
    **参数**
    
    **说明**
    
    **气泡形状**
    
    单击**气泡形状**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制该条件下的气泡形状样式的显隐。
    
    **气泡半径**
    
    单击**气泡半径**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制该条件下的气泡半径大小样式的显隐。
    
    **气泡颜色**
    
    单击**气泡颜色**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制该条件下的气泡颜色样式显隐。
    

## 数据面板（默认模式）

**说明**

当组件以**默认模式**添加后，您可以单击数据面板右上角的**分析模式**，切换到分析模式数据面板。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5735348761/p581453.png)

### **配置字段说明**

**字段**

**说明**

`id`

气泡的ID标识码。

`lng`

气泡的经度。

`lat`

气泡的纬度。

`name`

（可选）气泡的名称。

`value`

（可选）气泡的值。

`markerField`

（可选）气泡的形状映射字段。

`radiusField`

（可选）气泡的半径大小映射字段。

`colorField`

（可选）气泡的颜色映射字段。

表 2. 配置项说明

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

## 数据（分析模式）

**重要**

在地图中以分析模式创建，添加子组件时，图层栏内会自动在当前子组件上方对应生成一个分析器，且需要提前创建数据集以供分析模式子组件选择并配置使用，创建数据集和分析器交互使用说明详情，请参见[添加数据集](https://help.aliyun.com/document_detail/215456.html#task-2060897)和[BI分析器交互使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/bi-analyzer-interaction-instructions#concept-2114138)。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0251833371/p882549.png)

**呼吸气泡层**子组件BI分析数据配置面板中的详细操作说明，请参见[BI分析模式数据面板功能介绍](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/introduction-to-features-of-the-data-panel-in-bi-analysis-mode#task-2098468)。

### **配置字段说明**

**字段**

**说明**

`标识`

气泡的ID标识码。

`经度`

气泡的经度。

`纬度`

气泡的纬度。

`名称`

（可选）气泡的名称。

`数值`

（可选）气泡的值。

`形状映射字段`

（可选）气泡的形状映射字段。

`半径映射字段`

（可选）气泡的半径大小映射字段。

`颜色映射字段`

（可选）气泡的颜色映射字段。

**说明**

当组件是以分析模式添加后，您可以单击切换数据面板右上角的**默认模式**，即可在弹窗对话框内确认退出分析模式并删除该分析组件对应的分析器。退出分析模式后，当前分析模式组件会转换成普通模式组件，组件数据面板为默认模式。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4772348761/p581394.png)

## 交互面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5735348761/p581460.png)

选中**启用**，开启组件交互功能。**呼吸气泡层**子组件拥有交互配置，当单击点时，触发数据请求，抛出回调值，实现在单击某个点时，动态加载不同区域的数据。默认抛出所单击点的`id`、`lng`、`lat`等值，具体配置请参见[如何配置数字翻牌器组件的回调ID](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards)。

## 蓝图编辑器交互配置

1.  在画布编辑器页面，单击**3D平面地图**子组件管理列表中**呼吸气泡层**右侧的![导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89089.jpg)图标。
    
    **说明**
    
    以分析模式创建添加的子组件无蓝图交互功能。
    
2.  单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89087.jpg)图标。
    
3.  在蓝图编辑器配置页面，单击导入节点栏内的**呼吸气泡层**组件，在画布中可以看到如下图所示的呼吸气泡层的蓝图编辑器配置参数。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6735348761/p581462.png)
    
    -   **事件**
        
        **事件**
        
        **说明**
        
        **当数据接口请求完成时**
        
        数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
        **当数据接口请求失败时**
        
        数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
        **当点击点时**
        
        当单击某一点时抛出。
        
    -   **动作**
        
        **动作**
        
        **说明**
        
        **请求数据接口**
        
        重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如呼吸气泡层配置了API数据源为`https://api.test`，传到**请求数据接口**动作的数据为`{ id: '1'}`，则最终请求接口为`https://api.test?id=1`。
        
        **导入数据接口**
        
        按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
        **显示组件**
        
        显示组件，不需要参数。
        
        **隐藏组件**
        
        隐藏组件，不需要参数。
        
        **更新配置**
        
        更新组件配置项，不需要参数。