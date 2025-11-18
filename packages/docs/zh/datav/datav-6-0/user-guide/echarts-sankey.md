  Echarts 桑基图的样式数据与交互配置-DataV数据可视化-阿里云

本文介绍Echarts 桑基图的图表样式和配置面板的功能。

## **图表样式**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8627847761/p573779.png)

## 配置面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8627847761/p573780.png)

-   **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
-   **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
-   **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
-   **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。
    -   手动输入角度值，控制组件的旋转角度。
    -   拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
    -   单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
    -   单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
-   **不透明度**：取值范围为0~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
-   ****渲染引擎****：设置桑基图的渲染引擎。包括****canvas****和****svg****。
    
-   ****全局样式****![全局](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0078411661/p479463.jpg)
    
    -   ****自定义边距****：桑基图区域与组件上下左右四个边界之间的距离，单位默认px。
        
    -   ****水平位置****：单击下拉列表，选择图例标记和文本的对齐方式。
        
        -   ****自动****：默认****自动****，根据组件的位置和朝向决定。
            
        -   ****左对齐****：当图形在文字左边时，为****左对齐****。
            
        -   ****右对齐****：当图形在文字右边时，为****右对齐****。
            
    -   ****节点宽度****：单击****+****或****\-****号，或手动输入数值，调整节点宽度，单位px。
        
    -   ****节点间隔****：单击****+****或****\-****号，或手动输入数值，调整节点间隔，单位px。
        
    -   ****布局迭代次数****：单击****+****或****\-****号，或手动输入数值，调整布局迭代次数，即不断进行迭代优化桑基图中边和节点之间的距离，减少相互遮盖。
        
    -   ****可拖拽****：勾选后，开启拖拽功能。在预览或发布页面下，可单击鼠标拖拽图形。
        
    -   ****交互高亮****：单击下拉列表，选择桑基图的交互高亮方式。包括****无****、****高亮上下游邻接边****、****高亮上游邻接边****和****高亮下游邻接边****。
        
    -   ****标签****：单击右侧的****眼睛****图标显示标签样式。
        
        -   ****位置****：设置标签相当对于桑基图的位置，包括但不限于****top****、****left****和****inside****。
            
        -   ****定位距离****：设置标签相对于桑基图上边框线的距离。
            
        -   ****旋转****：标签旋转的角度，在类目轴的类目标签显示不下的时候可以通过旋转防止标签之间重叠。旋转的角度从 -90 度到 90 度。
            
        -   ****颜色****：参考[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)，修改标签文本的颜色。
            
        -   ****字体样式****：标签文本的字体风格。
            
        -   ****字体粗细****：标签文本的字体粗细。
            
        -   ****字体****：标签文本的字体系列。
            
        -   ****字号****：标签文本的字体大小。
            
    -   ****元素样式****
        
        -   ****边框色****：参考[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)，修改元素边框的颜色。
            
        -   ****边框粗细****：单击****+****或****\-****号，或手动输入数值，调整元素边框粗细。
            
        -   ****透明度****：单击****+****或****\-****号，或手动输入数值，修改指示交叉的透明度，范围为 \[0,1\]。
            
    -   ****线样式****
        
        -   ****颜色****
            
            -   ****取色方式****：设置标签线颜色的取色方式，包括****与source相同****、****与target相同****和****自定义****。
                
        -   ****透明度****：单击****+****或****\-****号，或手动输入数值，修改线的透明度，范围为 \[0,1\]。
            
        -   ****曲度****：单击****+****或****\-****号，或手动输入数值，修改线的曲度。
            
    -   ****提示框****：单击右侧的****眼睛****图标显示提示框。![提示框](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6028411661/p479454.jpg)
        
        -   ****背景色****：提示框文本标签的背景颜色。
            
        -   ****文本样式****
            
            -   ****颜色****：参考[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)，修改提示框标签文本的颜色。
                
            -   ****字体样式****：提示框文本的字体风格。
                
            -   ****字体粗细****：提示框标签文本的字体粗细。
                
            -   ****字体****：提示框标签文本的字体系列。
                
            -   ****字号****：提示框标签文本的字体大小。
                
-   ****调色盘****：单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一个调色盘样式。 单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个调色盘样式的排列样式。单击![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5896941261/p271562.jpg)图标，即可复制当前选中的调色盘样式配置并新增一个同样配置的调色盘样式。
    
-   ****动画****：勾选后，开启动画效果。
    
-   ****动画时长****：单击****+****或****\-****号，或手动输入数值，修改初始动画的时长，单位为毫秒。
    
-   ****缓动效果****：单击下拉框，选择数据更新动画的缓动效果，默认为****cubicOut****。
    

## 数据面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8627847761/p573781.png)

### **配置字段说明**

**字段**

**说明**

`nodes`

用于配置桑基图中的节点信息。

`links`

用于配置桑基图中的边信息。

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

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8627847761/p573783.png)

### **交互说明**

**交互**

**说明**

****当点击数据项时****

选中****启用****，开启组件交互功能。****桑基图****组件拥有交互配置，当单击选中某个数据项时抛出回调值，默认抛出数据中的x和y字段。具体配置请参见[组件回调ID配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards#concept-m2n-fy3-52b)。

****当点击节点时****

选中****启用****，开启组件交互功能。****桑基图****组件拥有交互配置，当单击某个节点时抛出回调值，默认抛出数据中的name字段。具体配置请参见[组件回调ID配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards#concept-m2n-fy3-52b)。

****当点击连线时****

选中****启用****，开启组件交互功能。****桑基图****组件拥有交互配置，当单击某个节点时抛出回调值，默认抛出数据中的source字段和target字段。具体配置请参见[组件回调ID配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards#concept-m2n-fy3-52b)。

## 蓝图编辑器交互配置

1.  在画布编辑器页面，右键单击组件，选择****导出到蓝图编辑器****。
    
2.  单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
    
3.  在蓝图编辑器配置页面，单击导入节点栏内的****桑基图****组件，在画布中可以看到如下图所示的桑基图的蓝图编辑器配置参数。![蓝图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6028411661/p479459.jpg)
    
    -   事件
        
        **事件**
        
        **说明**
        
        ****当数据接口请求完成时****
        
        数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板****数据****页签的****数据响应结果****区域。
        
        ****当数据接口请求失败时****
        
        数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板****数据****页签的****数据响应结果****区域。
        
        ****当点击数据项时****
        
        当单击桑基图的数据项时抛出的事件，同时抛出对应的数据项。
        
        ****当点击节点时****
        
        当单击桑基图的节点时抛出的事件，同时抛出该节点对应的数据项。
        
        ****当点击连线时****
        
        当单击桑基图的连线时抛出的事件，同时抛出该连线对应的数据项。
        
    -   动作
        
        **动作**
        
        **说明**
        
        ****请求数据接口****
        
        重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如桑基图配置了API数据源为`https://api.test`，传到****请求数据接口****动作的数据为`{ id: '1'}`，则最终请求接口为`https://api.test?id=1`。
        
        ****导入数据接口****
        
        按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板****数据****页签的****数据响应结果****区域。
        
        ****高亮显示****
        
        动作传入数据为object类型，参数包括`seriesName`（系列名）、`seriesIndex`（系列索引）、`dataIndex`（数据索引）和`name`（数据名）。数据示例：
        
        ```
        {  
            "seriesName": "",  
            "seriesIndex": 1,  
            "dataIndex": 1,  
            "name": ""
        }
        ```
        
        ****取消高亮****
        
        动作传入数据为object类型，参数包括`seriesName`（系列名）、`seriesIndex`（系列索引）、`dataIndex`（数据索引）和`name`（数据名）。数据示例：
        
        ```
        {  
            "seriesName": "",  
            "seriesIndex": 1,  
            "dataIndex": 1,  
            "name": ""
        }
        ```
        
        ****显示提示框****
        
        动作传入数据为object类型，参数包括`dataindex`（数据索引）、`name`（数据名）、`x`（横坐标位置）和`y`（纵坐标位置）。数据示例：
        
        ```
        { 
            "dataIndex": 1,  
            "name": "",  
            "x": 1,  
            "y": 1
        }
        ```
        
        ****隐藏提示框****
        
        隐藏提示框，不需要参数。
        
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
        
        隐藏组件，参考数据示例如下。
        
        ```
        return{
          "animationType": "",
          "animationDuration": 1000,
          "animationEasing": "linear"
        }
        ```
        
        ****切换显隐状态****
        
        显示组件，参考数据示例如下。
        
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