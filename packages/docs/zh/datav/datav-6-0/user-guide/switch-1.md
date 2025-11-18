  配置开关组件的样式数据与交互-DataV数据可视化-阿里云

本文介绍下拉框选择器组件的图表样式和各配置项的含义。

## **图表样式**

开关是控件组件的一种，可以用来仿照物理开关，让用户打开或关闭某个项目，并通过交互配置，定义开关打开或关闭状态下需要显示或隐藏的内容。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9807111861/p626162.png)

## 配置面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0907111861/p626163.png)

-   **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
-   **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
-   **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
-   **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。
    -   手动输入角度值，控制组件的旋转角度。
    -   拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
    -   单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
    -   单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
-   **不透明度**：取值范围为0~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
-   **全局样式**
    
    **默认选中状态**：打开开关，开关默认显示为选中状态；关闭开关，开关默认显示为关闭状态。
    
-   **背景样式**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0907111861/p626169.png)
    
    -   **边框样式**
        
        **参数**
        
        **说明**
        
        **边框宽度**
        
        边框的宽度。
        
        **边框颜色**
        
        边框的颜色，请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改。
        
        **边框圆角**
        
        边框的圆角，取值范围为0~360。数值为0的时候边框为方形，数值为360时边框为圆形。
        
        **线条类型**
        
        边框的线条类型。包括**实线**、**虚线**、**点线**、**双实线**、**雕刻效果**、**浮雕效果**、**陷入效果**和**突出效果**。
        
    -   **背景颜色**
        
        **参数**
        
        **说明**
        
        **打开颜色**
        
        开关打开时的背景颜色。
        
        **关闭颜色**
        
        开关关闭时的背景颜色。
        
-   **按钮样式**![按钮样式配置图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6488068951/p41908.png)
    
    -   **边框样式**
        
        **参数**
        
        **说明**
        
        **边框宽度**
        
        开关按钮边框的宽度。
        
        **边框颜色**
        
        开关按钮边框的颜色。
        
        **边框圆角**
        
        开关按钮边框的圆角，取值范围为0~360。数值为0的时候按钮边框为方形，数值为360时按钮边框为圆形。
        
        **线条类型**
        
        开关按钮边框的线条类型。包括**实线**、**虚线**、**点线**、**双实线**、**雕刻效果**、**浮雕效果**、**陷入效果**和**突出效果**
        
    -   **背景颜色**：开关按钮的背景颜色。
        

## 数据面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0907111861/p626209.png)

### **配置字段说明**

**字段**

**说明**

`onvalue`

打开开关抛出数据值，默认数值为1。

`offvalue`

关闭开关抛出数据值，默认数值为0。

`state`

开关的打开或关闭状态，只支持0或1，0表示关闭状态，1表示打开状态。

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

## 交互面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0907111861/p626214.png)

选中**当状态变化时**右侧的**启用**，开启组件交互功能。**开关**组件拥有交互配置，但不能自定义其他回调变量，只可打开或关闭开关，触发数据请求，抛出一个回调值，然后在其他组件中配置使用。默认抛出数据面板中配置的`value`值，打开**开关**时会抛出`onvalue`值，关闭**开关**时会抛出`offvalue`值，具体配置请参见[组件回调ID配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards#concept-m2n-fy3-52b)。

## 蓝图编辑器交互配置

1.  在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2.  单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
3.  在蓝图编辑器配置页面，单击导入节点栏内的**开关**组件，在画布中可以看到如下图所示的开关的蓝图编辑器配置参数。![开关组件节点编程配置图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7731652461/p51163.jpg)
    
    -   **事件**
        
        **事件**
        
        **说明**
        
        **当数据接口请求完成时**
        
        数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
        **当数据接口请求失败时**
        
        数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
        **当状态变化时**
        
        当状态发生变化时抛出的事件，同时抛出该状态下对应的数据项。
        
    -   **动作**
        
        **动作**
        
        **说明**
        
        **请求数据接口**
        
        重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如开关配置了API数据源为`https://api.test`，传到**请求数据接口**动作的数据为`{ id: '1'}`，则最终请求接口为`https://api.test?id=1`。
        
        **导入数据接口**
        
        按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
        **获取当前开关状态**
        
        获取当前的开或关的状态。
        
        **设置当前开关状态**
        
        设置当前的开或关的状态。
        
        **清空组件到默认值**
        
        表示还原到默认值。
        
        **更新组件配置**
        
        动态更新组件的样式配置。需要先在组件的**配置**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。
        
        **显示**
        
        显示组件，参见数据示例如下。
        
        ```
        return {
          "animationType": "",
          "animationDuration": 1000,
          "animationEasing": "linear"
        };
        ```
        
        **隐藏**
        
        隐藏组件，参见数据示例如下。
        
        ```
        return {
          "animationType": "",
          "animationDuration": 1000,
          "animationEasing": "linear"
        };
        ```
        
        **切换显隐状态**
        
        切换组件显示或者隐藏，参见数据示例如下。
        
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
        
        将组件移动到指定位置，参见数据示例如下。
        
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