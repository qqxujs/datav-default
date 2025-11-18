  配置基本水位图组件的样式数据和交互-DataV数据可视化-阿里云

本文介绍基本水位图组件的图表样式和各配置项的含义。

## **图表样式**

基本水位图是其他基础图表的一种，支持自定义外框、文字及波浪的动画效果配置，支持多系列的颜色配置，能够使用波浪展示各水位的实时变化情况。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9799681861/p633688.png)

## 配置面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9799681861/p633691.png)

-   **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
    
-   **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
-   **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
-   **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。
    -   手动输入角度值，控制组件的旋转角度。
    -   拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
    -   单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
    -   单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
-   **不透明度**：取值范围为0~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
-   **外框**
    
    **参数**
    
    **说明**
    
    **形状**
    
    组件外边框的形状，可选：**圆形**、**方形**、**圆角方形**。
    
    **半径**
    
    外边框的半径，取值为占组件高度的比例，取值范围为0~1。
    
    **边框颜色**
    
    外边框的颜色，参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改。
    
    **边框宽度**
    
    外边框的宽度，单位为px。
    
    **内部距离**
    
    外边框与流动的水位图之间的距离，单位为px。
    
-   **文字**：组件中所有文本的样式。
    
    **参数**
    
    **说明**
    
    **颜色**
    
    文本的默认颜色。
    
    **内部颜色**
    
    文本在流动的水位图内部时的颜色。
    
    **字号**
    
    文本的字体大小，取值范围为10~100。
    
    **字体粗细**
    
    文本的字体粗细。
    
    **高度位置**
    
    文本的高度位置，取值为占外边框半径的比例，取值范围为0~1。
    
    **百分数显示**
    
    文本要显示的小数点位数，可选：**整数**、**一位小数**、**两位小数**。
    
-   **波浪**：流动水位图的波浪样式。
    
    **参数**
    
    **说明**
    
    **波峰个数**
    
    波浪的波峰个数，取值范围为1~10。
    
    **振幅**
    
    波浪的振幅，取值范围为0~1。
    
    **相位**
    
    波浪的相位，取值范围为0~360。
    
    **周期**
    
    波浪的周期，取值范围为0.5~60，单位为秒。
    
    **透明度**
    
    波浪的透明度，取值范围为0~1。
    
    **动画**
    
    波浪的动画效果，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制动画效果的开启或关闭。
    
    -   **方向**：波浪流动的方向，可选：**从左到右**和**从右到左**。
        
    -   **变化效果**：波浪流动时的效果，可选：**匀速**、**加速**和**减速**。
        
    
-   **系列**：单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一个颜色系列。 单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个颜色系列的排列样式。单击![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5896941261/p271562.jpg)图标，即可复制当前选中数据系列配置内容并新增一个同样配置的数据系列。
    
    **颜色**：此系列下波浪的颜色。
    

## 数据面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9799681861/p633692.png)

`value`：各水位的百分比值，其中第一个`value`值对应基本水位图中的百分比值。

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

此组件没有交互事件。

## 蓝图编辑器交互配置

1.  在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
    
2.  单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89087.jpg)图标。
    
3.  在蓝图编辑器配置页面，单击导入节点栏内的**基本水位图**组件，在画布中可以看到如下图所示的基本水位图的蓝图编辑器配置参数。![基本水位图蓝图参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1307941261/p86351.jpg)
    
    -   **事件**
        
        **事件**
        
        **说明**
        
        **当数据描述请求完成时**
        
        数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
        **当数据描述请求失败时**
        
        数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
    -   **动作**
        
        **动作**
        
        **说明**
        
        **请求接口描述**
        
        重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如基本水位图配置了API数据源为`https://api.test`，传到**请求接口描述**动作的数据为`{ id: '1'}`，则最终请求接口为`https://api.test?id=1`。
        
        **导入接口描述**
        
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