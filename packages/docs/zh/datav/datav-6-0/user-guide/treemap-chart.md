  矩形树图组件指南-DataV数据可视化-阿里云

本文介绍矩形树图组件的图表样式和各配置项的含义。

## **图表样式**

矩形树图适合展现具有层级关系的数据，能够直观体现同级之间的比较，相比起传统的树形结构图，矩形树图能更有效得利用空间，并且拥有展示占比的功能。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6932181861/p633568.png)

## 配置面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6932181861/p633571.png)

-   **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
-   **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
-   **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
-   **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。
    -   手动输入角度值，控制组件的旋转角度。
    -   拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
    -   单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
    -   单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
-   **不透明度**：取值范围为0~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
-   **图表**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6932181861/p633572.png)
    
    **参数**
    
    **说明**
    
    **自定义边距**
    
    单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标，控制自定义边距的显隐。打开开关后，可配置矩形树图区域与组件上下左右四个边界之间的距离，单位默认px。
    
    **嵌套层级**
    
    设置矩形树图的最大嵌套层级数。
    
    **值标签**
    
    单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标，控制自定义标签值的显隐。设置矩形树图值标签文本的字体样式、文字粗细、字号和颜色。
    
    **图例**
    
    单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标，控制矩形树图的图例样式显隐。
    
    -   **允许翻页**：打开开关，开启图例翻页功能，可配置图例数量过多需要翻页显示时的页码样式和箭头样式；关闭开关，图例内容全部展示在一页中，无法翻页显示。
        
    -   **布局**：图例相对于组件起始坐标的位置，可选**顶部居左**、**顶部居中**、**顶部居右**、**底部居左**、**底部居中**和**底部居右**。
        
    -   **图例标记**：设置图例的形状类型和图例大小，单位px。
        
    -   **图例文本**：矩形树图图例文本的字体样式、文字粗细、字号和颜色。
        
    
-   **系列**：矩形树图系列样式说明。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6932181861/p633574.png)
    
    **数据系列**：单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一个数据系列。 单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个数据系列的排列样式。单击![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5896941261/p271562.jpg)图标，即可复制当前选中数据系列配置内容并新增一个同样配置的数据系列。
    
    **颜色**：具体每个系列下的颜色。
    
-   **层级**：矩形树图层级样式说明。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6932181861/p633580.png)
    
    单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一个层级系列。 单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个层级系列的排列样式。单击![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5896941261/p271562.jpg)图标，即可复制当前选中层级系列配置内容并新增一个同样配置的层级系列。
    
    **矩形样式**：具体每个层级系列下的矩形样式，包括矩形的描边线颜色、描边线的粗细值和矩形的透明度值。
    
-   **其它**：矩形树图的提示框样式，在预览或发布页面，鼠标悬浮或单击热力图标时出现的提示框的样式，单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标可开启或关闭提示框。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6932181861/p633582.png)
    
    **参数**
    
    **说明**
    
    **偏移值**
    
    设置提示框的偏移值大小。
    
    **文本样式**
    
    提示框中文本的样式，包括文字字体样式、文字粗细、字号和颜色。
    
    **背景框样式**
    
    提示框中背景框的样式。
    
    -   **背景色**：背景框的颜色。
        
    -   **内边距**：背景框内边距的值，单位px。
        
    -   **边框**：背景框边框的粗细值和边框的颜色。
        
    

## 数据模板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6932181861/p633583.png)

### **配置字段说明**

**字段**

**说明**

`name`

用于配置矩形树图中的类目名称。

`children`

用于配置矩形树图中不同类目的数值。

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

## 交互面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6932181861/p633584.png)

**交互事件**

**说明**

**当点击数据项时**

选中**启用**，开启组件交互功能。当单击矩形树图的矩形选项时，会触发数据请求，抛出回调值，动态加载不同矩形选项的数据。默认抛出数据中的`name`、`value`和`children`值，具体配置请参见[如何配置数字翻牌器组件的回调ID](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards)。

**当点击图例时**

选中**启用**，开启组件交互功能。当单击矩形树图的图例时，会触发数据请求，抛出回调值，动态加载不同图例的数据。默认抛出数据中的`name`、`value`和`children`值，具体配置请参见[如何配置数字翻牌器组件的回调ID](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards)。

## 蓝图编辑器交互配置

1.  在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2.  单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
3.  在蓝图编辑器配置页面，单击导入节点栏内的**矩形树图**组件，在画布中可以看到如下图所示的矩形树图的蓝图编辑器配置参数。![蓝图参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4091239461/p427100.jpg)
    
    -   **事件**
        
        **事件**
        
        **说明**
        
        **当矩形树图接口请求完成时**
        
        数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
        **当矩形树图接口请求失败时**
        
        数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
        **当点击数据项时**
        
        当单击矩形树图的矩形选项时抛出的事件，同时抛出该矩形选项对应的数据项。
        
        **当点击图例时**
        
        当单击矩形树图的图例时抛出的事件，同时抛出该图例对应的数据项。
        
    -   **动作**
        
        **动作**
        
        **说明**
        
        **请求矩形树图接口**
        
        重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如矩形树图配置了API数据源为`https://api.test`，传到**请求矩形树图接口**动作的数据为`{ id: '1'}`，则最终请求接口为`https://api.test?id=1`。
        
        **导入矩形树图接口**
        
        按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
        **更新组件配置**
        
        动态更新组件的样式配置。需要先在组件的**配置**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。
        
        **显示**
        
        显示组件，参考数据示例如下。
        
        ```
        return {
          "animationType": "",
          "animationDuration": 1000,
          "animationEasing": "linear"
        };
        ```
        
        **隐藏**
        
        隐藏组件，参考数据示例如下。
        
        ```
        return {
          "animationType": "",
          "animationDuration": 1000,
          "animationEasing": "linear"
        };
        ```
        
        **切换显隐状态**
        
        切换组件显示或者隐藏，参考数据示例如下。
        
        ```
        return {
          "animationIn": {
            "animationType": "",
            "animationDuration": 1000,
            "animationEasing": "linear"
          },
          "animationOut": {
            "animationType": "",
            "animationDuration": 1000,
            "animationEasing": "linear"
          }
        };
        ```
        
        **移动**
        
        将组件移动到指定位置，参考数据示例如下。
        
        ```
        return {
          // 移动方式。绝对定位：to，相对定位：by。默认值：to。
          "positionType": "to",
          // 指定位置。x坐标，y坐标。
          "attr": {
            "x": 0,
            "y": 0
          },
          // 动画方式。
          "animation": {
            "enable": false,
            // 动画延时。
            "animationDuration": 1000,
            // 动画曲线。可选值为：linear|easeInOutQuad|easeInOutExpo。
            "animationEasing": "linear"
          }
        };
        ```