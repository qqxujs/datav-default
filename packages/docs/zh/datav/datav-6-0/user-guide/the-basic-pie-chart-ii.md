  基本饼图v4.0及以上版本配置指南-DataV数据可视化-阿里云

本文介绍基本饼图的图表样式和配置面板的功能。

**重要**

本文介绍v4.x版本的基本饼图的配置项，如需查看v5.0及以上版本， 请参见BI分析组件模块中的[饼图](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/pie-charts#concept-2090353)；如需查看v3.0以下版本或者v3.x版本，请参见[基本饼图（v3.0以下版本）](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/basic-pie-chart-ii#concept-pyy-2bl-z2b)或[基本饼图（v3.x版本）](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/basic-pie-chart-1#concept-2354931)。

## **图表样式**

基本饼图是饼图的一种，支持通过极坐标来确定图表的大小，支持图表外部的标签展示，支持真实数值和百分比值的切换，支持自定义图形样式和多系列数据配置，能够清晰智能地展示各类别的占比情况。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4440327761/p573220.png)

## 配置面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4440327761/p573222.png)

-   **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
-   **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
-   **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
-   **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。
    -   手动输入角度值，控制组件的旋转角度。
    -   拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
    -   单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
    -   单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
-   **不透明度**：取值范围为0~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
-   ****图表****![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4440327761/p573224.png)
    
    -   ****自定义边距****：单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制自定义边距的显隐。饼图区域与组件上下左右四个边界之间的距离，单位默认px。
        
    -   ****饼图样式****：饼图的样式。
        
        **参数**
        
        **说明**
        
        ****描边颜色****
        
        饼图的描边颜色。
        
        ****描边粗细****
        
        饼图的描边粗细值。
        
    -   ****值标签****：饼图内数值标签的样式，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制值标签的显隐。
        
        **参数**
        
        **说明**
        
        ****位置****
        
        值标签文本的显示位置，可选****内部****、****外部****和****蜘蛛布局****。
        
        ****文本样式****
        
        值标签文本的字体样式、文字粗细、字号和颜色。
        
    -   ****图例****：基本饼图的图例样式，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制图例的显隐。
        
        **参数**
        
        **说明**
        
        ****允许翻页****
        
        打开开关，图例数量较多排列不下时可以允许翻页显；关闭开关，不允许翻页。
        
        ****布局****
        
        图例相对于组件起始坐标的位置，可选****顶部居左****、****顶部居中****、****顶部居右****、****底部居左****、****底部居中****和****底部居右****。
        
        ****图例标记****
        
        图例标记的样式，包括图例的形状样式和图例大小。
        
        ****图例文本****
        
        图例文本样式，包括图例的字体样式、文字粗细、字号和颜色。
        
-   ****坐标轴****：饼图的径向轴样式。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4440327761/p573225.png)
    
    ****半径****：饼图的半径值。
    
-   ****系列****![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4440327761/p573226.png)
    
    -   ****数据系列****：单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一个数据系列。 单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个数据系列的排列样式。单击![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5896941261/p271562.jpg)图标，即可复制当前选中数据系列配置内容并新增一个同样配置的数据系列。
        
        **参数**
        
        **说明**
        
        ****映射字段****
        
        -   ****name字段值****：数据系列的字段值，可自定义。为空时，系统会将组件数据中的name字段值作为系列字段值进行显示。如果不为空，您需要保证数据返回的顺序。
            
        -   ****显示名称****：数据系列的显示名称，可自定义。
            
        
        ****颜色****
        
        此系列下饼图的颜色。
        
    -   ****映射类型****：打开开关，数据中包含系列name值时生效，可以通过****映射字段****设置特定系列的颜色；关闭开关，关闭****映射字段****配置项。
        
-   ****其它****
    
    ****提示框****：在预览或发布页面，鼠标悬浮或单击扇形时出现的提示框的样式，单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标可开启或关闭提示框。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4440327761/p573227.png)
    
    **参数**
    
    **说明**
    
    ****文本样式****
    
    提示框中文本的样式，包括文字字体样式、文字粗细、字号和颜色。
    
    ****背景框样式****
    
    提示框的背景框样式。
    
    -   ****背景色****：提示框的背景颜色。
        
    -   ****内边距****：提示框的内部边距，单位为px。
        
    -   ****边框****
        
        -   ****边框粗细****：提示框边框的粗细，单位为px。
            
        -   ****边框颜色****：提示框的边框颜色。
            
    

## 数据面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4440327761/p573228.png)

### **配置字段说明**

**字段**

**说明**

name

各扇形的类目。

value

各扇形的值，决定各扇形占整个饼图的百分比。

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

## 交互面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4440327761/p573230.png)

### **交互说明**

**交互事件**

**说明**

****当点击数据项时****

选中****启用****，开启组件交互功能。当单击基本饼图的扇形时，会触发数据请求，抛出回调值，动态加载不同扇形的数据。默认抛出数据中的name和value值，具体配置请参见[如何配置数字翻牌器组件的回调ID](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards)。

****当点击图例时****

选中****启用****，开启组件交互功能。当单击基本饼图的扇形时，会触发数据请求，抛出回调值，动态加载不同扇形的数据。默认抛出数据中的name值，具体配置请参见[如何配置数字翻牌器组件的回调ID](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards)。

## 蓝图编辑器交互配置

1.  在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2.  单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
3.  在蓝图编辑器配置页面，单击导入节点栏内的****基本饼图****组件，在画布中可以看到如下图所示的基本饼图的蓝图编辑器配置参数。![基本饼图蓝图参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9194906361/p95475.jpg)
    
    -   ****事件****
        
        **事件**
        
        **说明**
        
        ****当基本饼图接口请求完成时****
        
        数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板****数据****页签的****数据响应结果****区域。
        
        ****当基本饼图接口请求失败时****
        
        数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板****数据****页签的****数据响应结果****区域。
        
        ****当点击数据项时****
        
        当选中基本饼图的扇形时抛出的事件，同时抛出该扇形对应的数据项。
        
        ****当点击图例时****
        
        当选中基本饼图的图例时抛出的事件，同时抛出该图例对应的数据项。
        
    -   ****动作****
        
        **动作**
        
        **说明**
        
        ****请求基本饼图接口****
        
        重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如基本饼图配置了API数据源为`https://api.test`，传到****请求基本饼图接口****动作的数据为`{ id: '1'}`，则最终请求接口为`https://api.test?id=1`。
        
        ****导入基本饼图接口****
        
        按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板****数据****页签的****数据响应结果****区域。
        
        ****高亮****
        
        高亮数据项对应的元素，参考数据示例如下。
        
        ```
        return {
          "data": {},
          "options": {
            "style": {
              "stroke": "#f00",
              "fill": ""
            },
            "selectMode": "single",
            "cancelHighlightFirst": false
          }
        }
        ```
        
        ****取消高亮****
        
        取消数据项对应元素的高亮，参考数据示例如下。
        
        ```
        return {
          "data": {},
          "options": {
            "mode": "single"
          }
        }
        ```
        
        ****更新组件配置****
        
        动态更新组件的样式配置。需要先在组件的****配置****面板中，单击****复制配置到剪贴板****，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。
        
        ****显示****
        
        显示组件，参考数据示例如下。
        
        ```
        return{
          "animationType": "",
          "animationDuration": 1000,
          "animationEasing": "linear"
        }
        ```
        
        ****隐藏****
        
        显示组件，参考数据示例如下。
        
        ```
        return{
          "animationType": "",
          "animationDuration": 1000,
          "animationEasing": "linear"
        }
        ```
        
        ****切换显隐状态****
        
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
        }
        ```
        
        ****移动****
        
        将组件移动到指定位置，参考数据示例如下。
        
        ```
            return{      
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
            }
        ```