  全屏切换组件的样式配置与交互-DataV数据可视化-阿里云

本文介绍全屏切换组件的图表样式和各配置项的含义。

## **图表样式**

全屏切换支持切换图标和背景样式配置，支持自定义背景的显隐，能够灵活地在全屏展示和小屏展示中进行切换。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7835520861/p614050.png)

## 配置面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7835520861/p614051.png)

-   **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
-   **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
-   **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
-   **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。
    -   手动输入角度值，控制组件的旋转角度。
    -   拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
    -   单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
    -   单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
-   **不透明度**：取值范围为0~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
-   **全屏显示**：配置全屏显示的图标。如果您需要使用远程服务器上的图片，请在上方的输入框中输入图片的URL地址；单击图片框内的**预览**，即可预览图片的大图样式；单击图片输入框下方的虚线框内的**更改**，更改图片。设计资产详细功能请参见[使用界面功能说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-interface-function-description#concept-2094777)。
    
-   **退出全屏**：配置退出全屏的图标。如果您需要使用远程服务器上的图片，请在上方的输入框中输入图片的URL地址；单击图片框内的**预览**，即可预览图片的大图样式；单击图片输入框下方的虚线框内的**更改**，更改图片。设计资产详细功能请参见[使用界面功能说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-interface-function-description#concept-2094777)。
    
-   **背景颜色**：图片底部的填充色，请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改。
    
-   **圆角**：配置组件的背景形状。默认为**50%**显示为圆形。如果为**0%**，则显示为正方形。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7835520861/p614062.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7835520861/p614063.png)
    
    **说明**
    
    如果组件不是正方形，那么**圆角**为50%时背景显示为椭圆形。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7835520861/p614064.png)
    
-   **始终显示图片背景**：打开开关，可视化应用中始终显示图片背景；关闭开关，只有在鼠标移至组件上时，才显示图片背景。
    

**说明**

只有在预览或发布页面下，才能看到您配置的样式。![全屏切换样式预览](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4040549951/p13775.png)

## 数据面板

此组件不需要进行数据配置。

## 交互面板

此组件不需要进行交互事件配置。

## 蓝图编辑器交互配置

1.  在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2.  单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
3.  在蓝图编辑器配置页面，单击导入节点栏内的**全屏切换**组件，在画布中可以看到如下图所示的全屏切换的蓝图编辑器配置参数。![节点编程参数配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4040549951/p50887.jpg)
    
    -   **事件**
        
        **参数**
        
        **说明**
        
        **当进入全屏幕时**
        
        当进入全屏幕时抛出的事件，不需要参数。
        
        **当退出全屏幕时**
        
        当退出全屏幕时抛出的事件，不需要参数。
        
    -   **动作**
        
        **动作**
        
        **说明**
        
        **进入全屏幕**
        
        不需要参数。
        
        **退出全屏幕**
        
        不需要参数。
        
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