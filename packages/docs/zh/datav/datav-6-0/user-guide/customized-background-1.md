  配置自定义背景块组件的配置项与交互-DataV数据可视化-阿里云

本文介绍按钮组件的图表样式和各配置项的含义。

## **图表样式**

自定义背景块是媒体组件的一种，支持自定义背景块的颜色、边框、滤镜效果等，支持为可视化应用或可视化应用的某个模块添加自定义的背景块，能够使可视化应用展示更加美观。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2088871861/p632937.png)

## 配置面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2088871861/p632938.png)

-   **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
-   **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
-   **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
-   **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。
    -   手动输入角度值，控制组件的旋转角度。
    -   拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
    -   单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
    -   单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
-   **不透明度**：取值范围为0~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
-   **圆角**：设置组件的圆角样式。当应用渐变边框或图片边框时，圆角失效。
    
    -   **圆角控制**：设置圆角控制模式，包括整体和自定义。
        
    -   **角度**：设置圆角的角度。当选择**整体**时，可以同时设置四角角度；当选择**自定义**时，可以分别设置组件的圆角（包括**左上角**、**左下角**、**右上角**、**右下角**）大小。
        
-   **填充**：设置自定义背景块的填充样式。单击右侧的![添加](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6425198561/p471525.jpg)或![删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6425198561/p471527.jpg)图标，添加或删除一个样式。 单击![横向](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6425198561/p471529.jpg)或![纵向](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6425198561/p471530.jpg)图标配置多个样式的排列方式。单击![复制](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6425198561/p471532.jpg)图标，即可复制当前选中的样式配置并新增一个同样配置的样式。
    
-   **边框**：设置自定义背景块的边框样式。单击左侧的![边框](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6425198561/p471535.jpg)图标，可控制边框样式的显隐。
    
    -   **边框类型**：设置边框类型，包括**纯色**、**渐变**和**图片**三种类型。
        
    -   **边框配置**：选择不同的边框类型，配置项会联动改变。当选择边框类型为**图片**时，会根据配置方式，展示不同的边框配置。
        
-   **滤镜**：组件边框的模糊程度，单位为px。
    
-   **背景过滤器**：组件背景的模糊程度，单位为px。Chrome浏览器中需要开启**Experimental Web Platform features**后，此选项才能生效。
    
    执行以下步骤，开启Chrome浏览器的**Experimental Web Platform features**。 ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2088871861/p632941.png)
    
    1.  在Chrome浏览器中输入**chrome://flags/#enable-experimental-web-platform-features**。
        
    2.  单击第一个**Experimental Web Platform features**右侧的下拉列表，选择**Enabled**。
        
    3.  重启浏览器。
        
-   **超链接配置**：单击图片区域可跳转至设定的超链接。
    
    -   **超链接**：设置跳转的超链接。
        
    -   **是否新开窗口**：单击![边框](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6425198561/p471535.jpg)图标，可控制是否在新窗口打开当前超链接。
        

**说明**

您也可以调整该组件的宽度并拉长作为线使用。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2088871861/p632945.png)

## 数据面板

此组件不需要配置数据。

## 交互面板

此组件没有交互事件。

## 蓝图编辑器交互配置

1.  在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2.  单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
3.  在蓝图编辑器配置页面，单击导入节点栏内的**自定义背景块**组件，在画布中可以看到如下图所示的自定义背景块的蓝图编辑器配置参数。![自定义背景块蓝图参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3088068951/p69986.jpg)
    
    -   **事件**：无。
        
    -   **动作**
        
        **动作**
        
        **说明**
        
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