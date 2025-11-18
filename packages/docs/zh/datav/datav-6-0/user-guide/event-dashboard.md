  配置事件仪表盘的样式数据与交互-DataV数据可视化-阿里云

本文介绍事件仪表盘组件的图表样式和各配置项的含义。

## **图表样式**

事件仪表盘是一种拟物化的图表，刻度表示度量，指针表示维度，指针角度表示数值。仪表盘图表就像是汽车的速度表一样，有一个圆形的表盘及相应的刻度，有一个指针指向当前数值。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9685420861/p613472.png)

## 配置面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9685420861/p613473.png)

-   **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
-   **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
-   **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
-   **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。
    -   手动输入角度值，控制组件的旋转角度。
    -   拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
    -   单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
    -   单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
-   **不透明度**：取值范围为0~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
-   **文本样式**：仪表盘内文本的样式，包括文本字体的样式、文字的粗细、字号大小和文本的颜色。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9685420861/p613475.png)
    
-   **图片样式**：仪表盘内事件图片的样式，包括拖动滑块调整图标的长度值、高度值和图标的透明度值。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9685420861/p613476.png)
    
-   **背景样式**：仪表盘的背景样式。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9685420861/p613477.png)
    
    **参数**
    
    **说明**
    
    **外侧圆弧颜色**
    
    仪表盘圆弧外侧的线条颜色。
    
    **中间圆弧颜色**
    
    仪表盘中间圆弧区域的颜色。
    
    **内侧圆弧颜色**
    
    仪表盘圆弧内侧的线条颜色。
    
    **外侧刻度颜色**
    
    仪表盘圆弧外侧的刻度颜色。
    
    **内侧刻度颜色**
    
    仪表盘圆弧内侧的刻度颜色。
    
    **三角形箭头颜色**
    
    仪表盘三角形箭头的颜色。
    
    **组件背景颜色**
    
    仪表盘组件背景的颜色。
    

## 数据面板（默认模式）

**说明**

组件数据面板默认是**默认模式**，您可以单击切换数据面板右上角的**分析模式**，即可在弹窗对话框内，确认将组件**转为分析模式并创建分析器**，并单击**确认变更**，使用DataV数据集提供的分析模式功能后，当前组件会转换成BI分析模式组件，组件数据面板变为**分析模式**。

![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8657894861/p674662.png)

### **配置字段说明**

**字段**

**说明**

`id`

仪表盘事件的序号。

`context`

仪表盘的事件具体内容。

`url`

仪表盘中的事件内容对应的图标URL路径链接。

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

在使用DataV数据集提供的BI分析功能之前，系统会对事件仪表盘进行以下变更。

-   数据源**事件仪表盘数据接口**由静态数据切换至DataV数据集。
    
-   更新DataV数据集配置（此操作不会使字段配置丢失）。
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9685420861/p613494.png)

BI分析数据配置面板中的详细操作说明，请参见[BI分析模式数据面板功能介绍](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/introduction-to-features-of-the-data-panel-in-bi-analysis-mode#task-2098468)。

### **配置字段说明**

**字段**

**说明**

`序号`

仪表盘的事件序号。

`内容`

仪表盘的事件具体内容。

`图标路径`

仪表盘中的事件内容对应的图标URL路径链接。

**说明**

当组件是以分析模式添加后，您可以单击切换数据面板右上角的**默认模式**，即可在弹窗对话框内确认退出分析模式并删除该BI分析组件对应的分析器。退出分析模式后，组件数据面板为默认模式。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8482398761/p595791.png)

## 交互面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9685420861/p613500.png)

**单击事件触发**：选中**启用**，开启组件交互功能。当单击仪表盘内的事件时，会触发数据请求，抛出回调值，动态加载不同事件的数据。默认抛出数据中的`id`和`context`值，具体配置请参见[如何配置数字翻牌器组件的回调ID](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards)。

## 蓝图编辑器交互配置

1.  在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2.  单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
3.  在蓝图编辑器配置页面，单击导入节点栏内的**事件仪表盘**组件，在画布中可以看到如下图所示的事件仪表盘的蓝图编辑器配置参数。![事件仪表盘蓝图参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9944860461/p377686.jpg)
    
    -   **事件**
        
        **事件**
        
        **说明**
        
        **当映射数据请求完成时**
        
        数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
        **当映射数据请求失败时**
        
        数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
        **单击事件触发**
        
        单击仪表盘内的事件触发抛出事件数据，同时抛出该事件对应的object类型数据项。
        
    -   **动作**
        
        **动作**
        
        **说明**
        
        **请求映射数据**
        
        重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如事件仪表盘配置了API数据源为`https://api.test`，传到**请求映射数据**动作的数据为`{ id: '1'}`，则最终请求接口为`https://api.test?id=1`。
        
        **导入映射数据**
        
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
        

## **案例演示**

本案例通过仪表盘的自身旋转功能，实现点击仪表盘事件，定位轮播列表对应数据。

1.  登录[DataV控制台](https://datav.aliyun.com/)。
2.  选择任一可视化应用，单击编辑，进入画布编辑器页面。
    
3.  添加**轮播列表**和**事件仪表盘**两个组件到画布中。
    
4.  单击轮播列表，选择数据面板，修改静态数据。
    
    ```
    [
      {
        "id": 206252,
        "context": "美国",
        "url": "https://img.alicdn.com/tfs/TB1L9K2gv5TBuNjSspcXXbnGFXa-224-118.png"
      },
      {
        "id": 152418,
        "context": "西班牙",
        "url": "https://img.alicdn.com/tfs/TB1pEu5gv9TBuNjy1zbXXXpepXa-200-133.png"
      },
      {
        "id": 139340,
        "context": "法国",
        "url": "https://img.alicdn.com/tfs/TB1s2CRgv9TBuNjy0FcXXbeiFXa-200-133.png"
      },
      {
        "id": 138786,
        "context": "新加坡",
        "url": "https://img.alicdn.com/tfs/TB11znbgx1YBuNjy1zcXXbNcXXa-200-133.png"
      },
      {
        "id": 95516,
        "context": "荷兰",
        "url": "https://img.alicdn.com/tfs/TB1D4CygrSYBuNjSspiXXXNzpXa-200-133.png"
      },
      {
        "id": 90197,
        "context": "波兰",
        "url": "https://img.alicdn.com/tfs/TB1K4vcguOSBuNjy0FdXXbDnVXa-206-129.png"
      },
      {
        "id": 82697,
        "context": "以色列",
        "url": "https://img.alicdn.com/tfs/TB1DDKIgwaTBuNjSszfXXXgfpXa-192-140.png"
      },
      {
        "id": 50096,
        "context": "土耳其",
        "url": "https://img.alicdn.com/tfs/TB16lUjgDlYBeNjSszcXXbwhFXa-200-133.png"
      },
      {
        "id": 49162,
        "context": "乌克兰",
        "url": "https://img.alicdn.com/tfs/TB1DbgTgDJYBeNjy1zeXXahzVXa-200-133.png"
      },
      {
        "id": 47290,
        "context": "巴西",
        "url": "https://img.alicdn.com/tfs/TB1SIAwgCBYBeNjy0FeXXbnmFXa-196-137.png"
      },
      {
        "id": 46465,
        "context": "意大利",
        "url": "https://img.alicdn.com/tfs/TB1bHkTgDJYBeNjy1zeXXahzVXa-200-133.png"
      }
    ]
    ```
    
5.  选择配置面板，打开**高亮**和**是否轮播**开关。修改**表格行数**为5，修改自定义列标签对齐数据面板内的参数字段。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9685420861/p613789.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9685420861/p613788.png)
    
6.  右键单击组件，将两个组件导入蓝图编辑器中。
    
7.  连接组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9685420861/p613790.png)
    
8.  配置串行数据处理节点处理方法。
    
    ```
    return [
      {
        "id": data.id,
        "context": data.context,
        "url": data.url
      }
    ]
    ```
    
9.  单击页面右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9685420861/p613791.png)图标，预览展示结果。