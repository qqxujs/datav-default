  标志墙组件配置项详解-DataV数据可视化-阿里云

本文介绍标志墙组件的图表样式和各配置项的含义。

## **图表样式**

标志墙是素材组件的一种，支持自定义标志的背景颜色、动画效果、显示图标等，能够以标志墙的形式在可视化应用中展示多种标志图标。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5278871861/p633222.png)

## 配置面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5278871861/p633223.png)

-   **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
-   **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
-   **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
-   **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。
    -   手动输入角度值，控制组件的旋转角度。
    -   拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
    -   单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
    -   单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
-   **不透明度**：取值范围为0~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
-   **全局**![标志墙的全局样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9088068951/p12960.png)
    
    **参数**
    
    **说明**
    
    **圆角半径**
    
    各标志的圆角半径。
    
    **边框粗细**
    
    各标志的边框粗细。
    
    **边框颜色**
    
    各标志的边框颜色，请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改。
    
    **填充方式**
    
    标志的填充方式。共包含三种方式，分别为**默认**、**铺满**和**拉伸以填充容器**。
    
    **行数**
    
    背景墙的行数。
    
    **列数**
    
    背景墙的列数。
    
    **标签列间距**
    
    各标志之间的列间距。
    
    **标签行间距**
    
    各标志之间的行间距。
    
-   **动画**：当标志墙有多个页面时，此配置项可以设置这些页面轮播动画。
    
    **参数**
    
    **说明**
    
    **自动轮播**
    
    打开开关，多个标志墙页面会自动进行轮播。
    
    **停顿**
    
    各轮播页面的停留时间，单位为s。
    
-   **圆点**：轮播页面下侧的圆点样式，可单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制显隐。![标志墙的圆点样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4634662461/p12961.png)
    
    **参数**
    
    **说明**
    
    **圆点颜色**
    
    所有圆点的颜色。
    
    **当前颜色**
    
    当前页面圆点的颜色。
    
    **圆点大小**
    
    圆点的大小。
    
    **圆点间距**
    
    各圆点的间距。
    
    **竖向偏移值**
    
    圆点与页面之间的距离，负数为向下移动，正数反之。
    
-   **背景颜色**：各标志格的背景颜色，单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一个背景色。 单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个背景色的排列样式。单击![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5896941261/p271562.jpg)图标，即可复制当前选中背景色配置内容并新增一个同样配置的背景色。
    
    **说明**
    
    当您添加了多个背景色时，DataV会为您平均分配各标志的颜色。
    
    ![标志墙背景颜色](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5634662461/p12965.png)

## 数据面板（默认模式）

**说明**

组件数据面板默认是**默认模式**，您可以单击切换数据面板右上角的**分析模式**，即可在弹窗对话框内，确认将组件**转为分析模式并创建分析器**，并单击**确认变更**，使用DataV数据集提供的分析模式功能后，当前组件会转换成BI分析模式组件，组件数据面板变为**分析模式**。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2156081861/p633229.png)

`value`：各标志格图标的URL地址，需要支持跨域。建议声明HTTP或者HTTPS协议。

**重要**

如果您使用HTTPS协议访问可视化应用，而标志的URL使用了HTTP协议，那么DataV将无法访问标志的URL，可视化应用上不会显示对应的图标。

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

**重要**

在使用DataV数据集提供的BI分析功能之前，系统会对标志墙进行以下变更。

-   数据源**标志墙数据接口**由静态数据切换至DataV数据集。
    
-   更新DataV数据集配置（此操作不会使字段配置丢失）。
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2156081861/p633243.png)

BI分析数据配置面板中的详细操作说明，请参见[BI分析模式数据面板功能介绍](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/introduction-to-features-of-the-data-panel-in-bi-analysis-mode#task-2098468)。

`值`：各标志格图标的URL地址，需要支持跨域。建议声明HTTP或者HTTPS协议。

**说明**

当组件是以分析模式添加后，您可以单击切换数据面板右上角的**默认模式**，即可在弹窗对话框内确认退出分析模式并删除该BI分析组件对应的分析器。退出分析模式后，组件数据面板为默认模式。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8482398761/p595791.png)

## 交互面板

此组件没有交互事件。

## 蓝图编辑器交互配置

1.  在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2.  单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
3.  在蓝图编辑器配置页面，单击导入节点栏内的**标志墙**组件，在画布中可以看到如下图所示的标志墙的蓝图编辑器配置参数。![标志墙蓝图参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5634662461/p69991.jpg)
    
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
        
        重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如标志墙配置了API数据源为`https://api.test`，传到**请求数据接口**动作的数据为`{ id: '1'}`，则最终请求接口为`https://api.test?id=1`。
        
        **导入数据接口**
        
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