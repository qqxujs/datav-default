  时间轴组件配置项数据格式与交互方法-DataV数据可视化-阿里云

本文介绍时间轴组件的图表样式和各配置项的含义。

## **图表样式**

时间轴支持自定义时间轴的节点标签样式、事件节点样式以及交互等配置，适用于在可视化应用中展示不同时间段的数据变化情况，比如使用时间轴组件实现数据轮播。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9361698761/p596903.png)

## 配置面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9361698761/p596904.png)

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
    
    **参数**
    
    **说明**
    
    **字体**
    
    组件中所有文本的字体系列，默认为**微软雅黑**。
    
    **轮播**
    
    打开开关，事件会一直循环播放。关闭开关，事件只播放一次。
    
    **间隔时间**
    
    配置一个事件节点到另一个事件节点所需要的时间。
    
    **停留时间**
    
    配置在一个事件节点上停留的时间。
    
    **左右边距**
    
    配置开始事件节点和结束事件节点与组件边界之间的水平距离，建议距离不要超过图表宽度的一半。
    
-   **事件节点**
    
    -   **种类**：事件节点的种类，可选：**数值型**、**类目型**和**时间型**。
        
    -   **数据格式**：需要根据数据格式进行配置，例如数据为**1982-02-01 17:09**，则此配置项应该设置为**%Y-%m-%d %H:%M**。只有当事件**种类**为**时间型**时，该配置项才会显示。![数据格式配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9459670461/p12869.png)
        
    -   **节点形状**：节点的形状。
        
    -   **节点大小**：节点的大小。
        
    -   **默认样式**：未选中时节点的样式。![时间轴默认样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0104359951/p12821.png)
        
        **参数**
        
        **说明**
        
        **节点填充色**
        
        节点的填充颜色，请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改。
        
        **节点边框色**
        
        节点的边框颜色。
        
        **节点边框粗细**
        
        节点的边框粗细。
        
    -   **选中样式**：节点被选中后的样式。![时间轴选中样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0104359951/p12824.png)
        
        **参数**
        
        **说明**
        
        **节点填充色**
        
        被选中节点的填充颜色，请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改。
        
        **节点边框色**
        
        被选中节点的边框颜色。
        
        **节点边框粗细**
        
        被选中节点的边框粗细。
        
-   **节点标签-下**
    
    **参数**
    
    **说明**
    
    **上下偏移**
    
    轴线下侧标签距离水平中心轴的距离。![时间轴节点下标签上下偏移](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0104359951/p12828.png)
    
    **旋转角度**
    
    轴线下侧节点标签的旋转角度。
    
    **默认样式**
    
    节点标签的默认字体的大小、颜色和字体的粗细。
    
    **选中样式**
    
    参考上文的默认样式进行配置。
    
-   **节点标签-上**：参考**节点标签-下**进行配置。
    
-   **背景**![时间轴的背景样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0104359951/p12829.png)
    
    **参数**
    
    **说明**
    
    **粗细**
    
    中间轴线的粗细。
    
    **默认样式**
    
    中间轴线的默认颜色。
    
    **选中样式**
    
    中间轴线的选中颜色。
    

## 数据面板（默认模式）

**说明**

组件数据面板默认是**默认模式**，您可以单击切换数据面板右上角的**分析模式**，即可在弹窗对话框内，确认将组件**转为分析模式并创建分析器**，并单击**确认变更**，使用DataV数据集提供的分析模式功能后，当前组件会转换成BI分析模式组件，组件数据面板变为**分析模式**。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9361698761/p596909.png)

### **配置字段说明**

**字段**

**说明**

`name`

轴线下侧标签的显示的事件文本内容。

`text`

（可选）轴线上侧标签的显示文本。

`value`

设置事件节点的值。如果为日期格式，需要与**数据格式**配置项保持一致。![设置事件节点的值](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0104359951/p12858.png)

`width`

（可选）标签文本的宽度，单位为px，默认不配置。

`height`

（可选）标签文本的高度，单位为px，默认不配置。![标签文本的高度](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0104359951/p12859.png)

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

## 数据（分析模式）

**重要**

在使用DataV数据集提供的BI分析功能之前，系统会对时间轴进行以下变更。

-   数据源**时间轴数据接口**由静态数据切换至DataV数据集。
    
-   更新DataV数据集配置（此操作不会使字段配置丢失）。
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9361698761/p596920.png)

BI分析数据配置面板中的详细操作说明，请参见[BI分析模式数据面板功能介绍](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/introduction-to-features-of-the-data-panel-in-bi-analysis-mode#task-2098468)。

### **配置字段说明**

**字段**

**说明**

`事件名`

轴线下侧标签的显示的事件文本内容。

`事件补充说明`

（可选）轴线上侧标签的显示文本。

`事件值`

设置事件节点的值。如果为日期格式，需要与**数据格式**配置项保持一致。![设置事件节点的值](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0104359951/p12858.png)

`文字宽度`

（可选）标签文本的宽度，单位为px，默认不配置。

`文字高度`

（可选）标签文本的高度，单位为px，默认不配置。![标签文本的高度](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0104359951/p12859.png)

**说明**

当组件是以分析模式添加后，您可以单击切换数据面板右上角的**默认模式**，即可在弹窗对话框内确认退出分析模式并删除该BI分析组件对应的分析器。退出分析模式后，组件数据面板为默认模式。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8482398761/p595791.png)

## 交互面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9361698761/p596921.png)

选中**启用**，开启组件交互功能。当时间轴发生变化时，会触发数据请求，抛出回调值，动态加载不同事件的数据。默认抛出数据中的`value` 值，具体配置请参见[如何配置数字翻牌器组件的回调ID](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards)。

**说明**

您可以使用时间轴组件实现数据轮播，使用方法如下。

1.  在时间轴的数据面板配置轮播的参数，并在交互中配置该参数作为交互字段。
    
2.  将时间轴组件移到可视化屏幕的范围外，或者把所有颜色都设置为透明，隐藏时间轴。
    
3.  在轮播组件中，调用所配置的回调ID，实现数据轮播。
    

## 蓝图编辑器交互配置

1.  在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2.  单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
3.  在蓝图编辑器配置页面，单击导入节点栏内的**时间轴**组件，在画布中可以看到如下图所示的时间轴的蓝图编辑器配置参数。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9361698761/p596923.png)
    
    -   **事件**
        
        **事件**
        
        **说明**
        
        **当数据接口请求完成时**
        
        数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
        **当数据接口请求失败时**
        
        数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
        **当前值变化时**
        
        当前值发生变化时抛出的事件，同时抛出该值对应的数据项。
        
    -   **动作**
        
        **动作**
        
        **说明**
        
        **请求数据接口**
        
        重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如时间轴配置了API数据源为`https://api.test`，传到**请求数据接口**动作的数据为`{ id: '1'}`，则最终请求接口为`https://api.test?id=1`。
        
        **导入数据接口**
        
        按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
        **移动到**
        
        表示移动到某一个节点，参考数据示例如下。
        
        ```
        return {"value": 1982}
        ```
        
        **停止轮播**
        
        停止时间轴轮播功能，不需要参数。
        
        **开始轮播**
        
        开始时间轴轮播功能，不需要参数。
        
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
        

## **案例演示**

本案例通过时间轴的轮播功能实现高考各阶段复习内容的倒计时动态展示。

1.  登录[DataV控制台](https://datav.aliyun.com/)。
2.  选择任一可视化应用，单击编辑，进入画布编辑器页面。
    
3.  添加**时间轴**、**倒计时**和**单张图片**三个组件到画布中。
    
4.  单击时间轴，选择**数据**面板，修改静态数据。
    
    ```
    [
      {
        "name": "2023-04-01 00:00:00",
        "value": 20230401,
        "text": "第一轮-基础夯实"
      },
      {
        "name": "2023-05-01 00:00:00",
        "value": 20230501,
        "text": "第二轮-答题技巧"
      },
      {
        "name": "2023-06-01 00:00:00",
        "value": 20230601,
        "text": "第三轮-总结提升"
      },
      {
        "name": "2023-07-15 00:00:00",
        "value": 20230715,
        "text": "第四轮-超越自我"
      },
      {
        "name": "2023-08-07 00:00:00",
        "value": 20230807,
        "text": "高考"
      },
      {
        "name": "2023-09-25 00:00:00",
        "value": 20230925,
        "text": "高考-填报志愿"
      }
    ]
    ```
    
5.  选择**配置**面板，修改间隔时间和停留时间。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9361698761/p599318.png)
    
6.  同时选择单张图片和倒计时，右键单击**成组**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9361698761/p597591.png)
    
7.  同样制作类似组共6个，进行编号并隐藏。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9361698761/p597677.png)
    
8.  单击**单张图片**，选择配置面板，依次将准备好的6张图片内容进行替换。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9361698761/p597662.png)
    
9.  将六个倒计时、六个组和时间轴共计13个组件全部导入蓝图中。
    
10.  连接组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9361698761/p597726.png)
     
     -   多路判断节点：依次将case1~case6输入对应的处理方法中。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9361698761/p597953.png)
         
         ```
         return data.value == '20230401';//case-1
         return data.value == '20230501';//case-2
         return data.value == '20230601';//case-3
         return data.value == '20230715';//case-4
         return data.value == '20230807';//case-5
         return data.value == '20230925';//case-6
         ```
         
     -   序列执行节点：共计6个，显示锚点的处理方法相同，延迟默认。显示连接两处，一处为组节点的显示动作处，一处为倒计时节点的导入数据处。延迟直接连接定时器节点。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9361698761/p598352.png)
         
         ```
         return [{ "endTime": data.name }]
         ```
         
     -   定时器节点：设置延迟时间为1.5秒。后端连接组节点的隐藏动作处。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9361698761/p599422.png)
         
11.  单击页面右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0269688761/p589281.png)图标，预览展示结果。![3月16日](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9361698761/p601573.gif)