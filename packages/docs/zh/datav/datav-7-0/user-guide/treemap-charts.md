 

本文介绍矩形树图各配置项的含义。

## **图表样式**

矩形树图适合展现具有层级关系的数据，能够直观体现同级之间的比较，相比起传统的树形结构图，矩形树图能更有效得利用空间，并且拥有展示占比的功能。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3266322961/p706801.png)

## 样式面板![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3266322961/p706802.png)

-   **搜索配置**：单击**样式**面板右上角的搜索配置项图标![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5013889661/p527384.png)，可在搜索配置面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索配置项](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。
    
-   -   **尺寸**：包括组件的宽度和高度，单位为px。
        
    -   **定位**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
        
    -   **旋转**：以组件的中心为中心点，进行旋转，单位为度（°）。
        
        -   手动输入角度值，控制组件的旋转角度。
            
        -   单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8222919661/p521797.png)图标，控制组件左右翻转样式。
            
        -   单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8222919661/p521798.png)图标，控制组件上下翻转样式。
            
    -   **不透明度**：取值范围为0~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
        
-   **图表**
    
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
        
    
-   **系列**：矩形树图系列样式说明。
    
    **数据系列**：单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528933.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528934.png)图标，添加或删除一个数据系列。 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528936.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528937.png)图标配置多个数据系列的排列样式。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528938.png)图标，即可复制当前选中数据系列配置内容并新增一个同样配置的数据系列。
    
    **颜色**：具体每个系列下的颜色。
    
-   **层级**：矩形树图层级样式说明。
    
    单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528933.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528934.png)图标，添加或删除一个层级系列。 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528936.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528937.png)图标配置多个层级系列的排列样式。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528938.png)图标，即可复制当前选中层级系列配置内容并新增一个同样配置的层级系列。
    
    **矩形样式**：具体每个层级系列下的矩形样式，包括矩形的描边线颜色、描边线的粗细值和矩形的透明度值。
    
-   **其它**：矩形树图的提示框样式，在预览或发布页面，鼠标悬浮或单击热力图标时出现的提示框的样式，单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标可开启或关闭提示框。
    
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
        
    

## 数据源面板![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3266322961/p706805.png)

**字段**

**说明**

`name`

用于配置矩形树图中的类目名称。

`children`

用于配置矩形树图中不同类目的数值。

**数据项配置**

**说明**

**数据源**

组件的数据源中通过**代码编辑**或**可视化编辑**展示了组件所包含的数据字段。也可以修改**数据类型**，灵活配置组件数据。

**数据映射**

当您需要自定义图表字段配置时，可以在**数据映射**模块设置不同的字段映射内容，将这些字段映射到组件对应的字段上。无需修改数据源中的字段，就可以实现数据的实时匹配。也可以单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9633269661/p524955.png)图标对字段分别样式配置。

**过滤器**

打开**过滤器**，选择已创建的数据过滤器或新建数据过滤器，并配置数据过滤器脚本，实现数据的筛选功能。详情请参见[管理数据过滤器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/manage-filters-1)。

**数据响应结果**

实时展示了组件所使用的数据。当组件数据源发生变化时，数据响应结果会对应展示最新的数据。如果系统反应延迟，您可以单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8276202761/p538806.png)图标，查看数据响应结果，也可以单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8276202761/p538808.png)图标，获取组件的最新数据。您也可以单击查看示例，查看当前组件的响应结果示例。

**禁止加载态**

勾选复选框，在组件更新和预览数据看板时，将看不到组件初始化时的加载内容，去勾选则相反。默认为去勾选状态。

**受控模式**

勾选复选框，组件初始化状态下不请求数据，仅通过全局变量或蓝图编辑器配置的方法发起请求数据；去勾选复选框，可以使用自动更新请求数据。默认为去勾选状态。

**自动更新请求**

勾选复选框，可以手动输入轮询的时间频次设置动态轮询。清除后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和全局变量事件来触发请求更新数据。

## 高级面板![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3266322961/p706807.png)

**交互事件**

**说明**

**当点击数据项时**

打开开关，开启组件交互功能。当单击矩形树图的矩形选项时，会触发数据请求，抛出临时变量，动态加载不同矩形选项的数据。默认抛出数据中的`name`、`value`和`children`值，具体配置请参见[组件交互配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)。

**当点击图例时**

打开开关，开启组件交互功能。当单击矩形树图的图例时，会触发数据请求，抛出临时变量，动态加载不同图例的数据。默认抛出数据中的`name`、`value`、`brank`和`children`值，具体配置请参见[组件交互配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)。

## 蓝图交互

1.  单击页面左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7498599661/p528973.png)图标，进入**蓝图**页面。
    
2.  在**图层节点**页签下，添加当前组件至主画布中。
    
3.  查看蓝图配置参数。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3266322961/p706809.png)
    
    -   **事件**
        
        **事件**
        
        **说明**
        
        **当矩形树图接口请求完成时**
        
        数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据源**页签的**数据响应结果**区域。
        
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
        
        按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据源**页签的**数据响应结果**区域。
        
        **移动**
        
        将组件移动到指定位置，参考数据示例。
        
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
        
        **切换显隐状态**
        
        切换组件显示或者隐藏，不需要参数。
        
        **显示**
        
        显示组件，参考数据示例。
        
        ```
        {
          "animationType": "",//动画方式，可选值：fade，不填无动画。
          "animationDuration": 1000,//动画延迟，单位ms。
          "animationEasing": ""//动画曲线
        }
        ```
        
        **隐藏**
        
        隐藏组件，参考数据示例。
        
        ```
        {
          "animationType": "",//动画方式，可选值：fade，不填无动画。
          "animationDuration": 1000,//动画延迟，单位ms。
          "animationEasing": ""//动画曲线
        }
        ```
        
        **更新组件配置**
        
        动态更新组件的样式配置。需要先在组件的**样式**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。