  基本饼图（v3.0以下版本）配置项数据及交互详解-DataV数据可视化-阿里云

基本饼图是饼图的一种，支持通过极坐标来确定图表的大小，支持图表外部的标签展示，支持真实数值和百分比值的切换，支持自定义图形样式和多系列数据配置，能够清晰智能地展示各类别的占比情况。本文介绍基本饼图各配置项的含义。

## 配置

**重要**

本文介绍v3.0以下版本的基本饼图的配置项，如需查看v3.x版本或者v4.0及以上版本，请参见[基本饼图（v3.x版本）](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/basic-pie-chart-1#concept-2354931)或[基本饼图（v4.0及以上版本）](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/the-basic-pie-chart-ii#concept-2455900)。

-   **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
    
-   **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
-   **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
-   **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。
    -   手动输入角度值，控制组件的旋转角度。
    -   拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
    -   单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
    -   单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
-   **不透明度**：取值范围为0~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
-   **字体**：饼图中所有文本的字体系列，默认为**微软雅黑**。
    
-   **标签**：饼图中的标签样式。
    
    -   **标签距中心**：标签与饼图中心的横向距离，取值范围为0~1。
        
    -   **轴距距中心**：标签与饼图中心的纵向距离，取值范围为0~1。若设置过小会围到圆心处。
        
    -   **类目**：标签中类目的样式，可单击右侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制类目的显隐。
        
        -   **字号**：类目文本的大小。
            
        -   **颜色**：类目文本的颜色。
            
        -   **字体粗细**：类目文本的字体粗细。
            
    -   **数值**：标签中数值的样式，可单击右侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制数值的显隐。
        
        -   **字号**：数值文本的大小。
            
        -   **颜色**：数值文本的颜色。
            
        -   **字体粗细**：数值文本的字体粗细。
            
        -   **小数点位数**：数值显示的小数点位数。![类目数值面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3248068951/p11087.png)
            
        -   **真实数值**：开启后，显示数据的真实值；关闭后，显示数据所占的百分比值。![开启真实数值面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7248068951/p11089.png)
            
-   **极轴**：饼图的极坐标轴样式。![基本饼图极轴面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3248068951/p71385.png)
    
    -   **外半径**：圆环最外侧到轴中心的距离，取值为所占组件高度的比例，取值范围为0~1。
        
    -   **内半径**：圆环最内侧到轴中心的距离，取值为所占组件高度的比例，取值范围为0~1。
        
    -   **网络线**：极坐标轴的网络线样式，可单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制网络线的显隐。
        
        **颜色**：网络线的颜色。
        
-   **图例**：图表的图例样式，可单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制图例的显隐。![图例面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8248068951/p11105.png)
    
    -   **文本**
        
        -   **字号**：图例文本的大小。
            
        -   **颜色**：图例文本的颜色。
            
        -   **字体粗细**：图例文本的字体粗细。
            
    -   **布局 - 间距**
        
        -   **左右间距**：相邻图例之间左右两侧的距离，仅当有多个系列时该配置项才有效。
            
        -   **上下间距**：图例与组件上下边界的距离。
            
        -   **位置**：图例相对于组件起始坐标的位置，可选**顶部居左**、**顶部居中**、**顶部居右**、**底部居左**、**底部居中****底部居右**。
            
-   **数据系列**：单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一个数据系列。![数据系列面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3248068951/p11107.png)
    
    **颜色**：此系列下扇形的颜色。
    
-   **提示框**：在预览或发布页面，鼠标悬浮或单击柱图时出现的提示框的样式。
    
    图 1. 提示框面板![提示框面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3248068951/p85980.png)
    
    图 2. 提示框示例![提示框示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4248068951/p85981.png)
    
    -   **触发动作**：提示框被触发的动作，可选，包括**悬浮**和**点击**。
        
    -   **消失延迟时间**：当不满足触发条件时，提示框就会消失，此配置项设置提示框消失前延迟的时间，单位为ms。
        
    -   **背景框样式**：提示框的背景框样式。
        
        -   **背景色**：提示框的背景颜色。
            
        -   **自定义背景框尺寸**：提示框的宽度和高度，单位为px。
            
        -   **内边距**：提示框的内部边距，单位为px。
            
        -   **水平偏移量**：提示框相对鼠标箭头位置的水平偏移量，单位为px。
            
        -   **垂直偏移量**：提示框相对鼠标箭头位置的垂直偏移量，单位为px。
            
        -   **边框颜色**：提示框的边框颜色。
            
        -   **边框粗细**：提示框边框的粗细，单位为px。
            
    -   **文本样式**：提示框中文本的样式。
        
        -   **颜色**：提示框文本的颜色。
            
        -   **字体**：提示框文本的字体系列。
            
        -   **字号**：提示框文本的大小。
            
        -   **字体粗细**：提示框文本的字体粗细。
            
-   **动画**：饼图的动画效果样式，可单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制动画效果的开启或关闭。![动画面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4248068951/p21062.png)
    
    -   **初始动画时长**：组件第一次渲染动画的时长，单位为ms。
        
    -   **是否全部从零度开始**：开启后，组件第一次渲染动画时，从零度按顺序播放各扇形；关闭后，组件第一次渲染动画时，从各扇形的起点同时播放动画。
        
    -   **缓动效果**：动画的缓动效果，系统提供多种常见的动画缓动效果供您选择。
        
    -   **各系列依次动画**：开启后，各系列扇形依次按顺序播放动画；关闭后，全部扇形同时播放动画。
        
    -   **更新动画时长**：组件数据更新时的动画时长，单位为ms。
        
    -   **更新时是否从之前位置开始**：开启后，组件有数据更新的时候，从上一个数据的位置开始；关闭后，组件有数据更新的时候，从0的位置开始。
        

## 数据

![数据面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4248068951/p11110.png)上图中的示例JSON代码如下。

```
[
  {
    "x": "设备",
    "y": 14
  },
  {
    "x": "建材",
    "y": 12
  },
  {
    "x": "食品",
    "y": 12
  }
]
```

-   x：各扇形的类目。
    
-   y：各扇形的值，决定各扇形占整个饼图的百分比。
    

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

选中**启用**，开启组件交互功能。当单击基本饼图的扇形时，会触发数据请求，抛出回调值，动态加载不同扇形的数据。默认抛出数据中的x和y值，具体配置请参见[组件回调ID配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/how-to-use-callback-ids-to-implement-component-linkage#concept-pbb-2vk-q2b)。

## 蓝图编辑器交互配置

1.  在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
    
2.  单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89087.jpg)图标。
    
3.  在蓝图编辑器配置页面，单击导入节点栏内的**基本饼图**组件，在画布中可以看到如下图所示的基本饼图的蓝图编辑器配置参数。![节点交互面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4248068951/p49130.png)
    
    -   **事件**
        
        **事件**
        
        **说明**
        
        **当基本饼图接口请求完成时**
        
        数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据可参见上文的[数据示例](#section-vzq-pvr-q2b)。
        
        **当点击数据项时**
        
        当单击基本饼图的扇形时抛出的事件，同时抛出该扇形对应的数据项。
        
    -   **动作**
        
        **动作**
        
        **说明**
        
        **请求基本饼图接口**
        
        重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如基本饼图配置了API数据源为`http://api.test`，传到**请求基本饼图接口**动作的数据为`{ id: '1'}`，则最终请求接口为`http://api.test?id=1`。
        
        **导入基本饼图接口**
        
        按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据可参见上文的[数据示例](#section-vzq-pvr-q2b)。
        
        **高亮**
        
        高亮数据项对应的元素。参数示例如下。
        
        ```
        {
          data: {
            x: '2010/01/01' //可列举多个高亮条件，类似filter。
          },
          options: {
            style: {
              fill: 'red'
            },
            selectMode: 'single',
            cancelHighlightFirst: true
          }
        }
        ```
        
        **取消高亮**
        
        取消数据项对应元素的高亮。参数示例如下。
        
        ```
        {
          data: {
            x: '2010/01/01'
          },
          options: {
            mode: 'single' // 当为single时，多个数据项命中时，只取消一个高亮；当为multiple时，多个数据项命中时，取消所有高亮。
          }
        }
        ```
        
        **更新组件配置**
        
        动态更新组件的样式配置。需要先在组件的**配置**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。
        
        **显示**
        
        显示组件，不需要参数。
        
        **隐藏**
        
        隐藏组件，不需要参数。
        
        **切换显隐状态**
        
        切换组件显示或者隐藏。
        
        ```
            {
              // 显示为true，隐藏为false。
              "status": true,
              // 显示动画。
              "animationIn": {
                // 动画方式，可选fade，不填无动画。
                "animationType": "fade",
                // 显示延时，单位为ms。
                "animationDuration": 1000,
                // 显示动画函数，可选linear|easeInOutQuad|easeInOutExpo。
                "animationEasing": "linear"
              },
              // 隐藏动画。
              "animationOut": {
                // 动画方式，可选fade，不填无动画。
                "animationType": "fade",
                // 隐藏延时，单位为ms。
                "animationDuration": 1000,
                // 隐藏动画函数，可选linear|easeInOutQuad|easeInOutExpo。
                "animationEasing": "linear"
              }
            }
        ```
        
        **移动**
        
        将组件移动到指定位置。
        
        ```
            {
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