 

区块是基于基础组件封装的一个黑盒工具。本文介绍区块的功能特性，帮助您快速了解并使用区块。

区块可以定义内部和外部的数据传输，对内可以封装业务相关的组件样式、组件布局、默认数据（不包含除静态数据和API外的数据源）和蓝图逻辑，对外可定义业务相关的区块数据接口。

## **使用限制**

区块功能为**专业版**及以上版本功能，如果您需要使用此功能，请先将DataV版本升级到专业版或尊享版。

## 区块接口节点说明

区块定义内部和外部的数据传输，依靠蓝图编辑器中的**数据接口**节点、**事件接口**节点和**动作接口**节点进行配置，不同接口的区别如下：

-   **数据接口**：用于接收外部数据源传入区块的数据，再通过蓝图编辑器分发数据给内部的组件。
    
-   **事件接口**：用于接收内部组件的事件，并向外抛出数据。
    
-   **动作接口**：用于接收外部组件触发的动作，并使得内部组件执行相应的业务逻辑。
    

您在使用区块时，只需要将区块作为一个整体，了解并设置对外定义的**区块接口**即可，无需关注内部逻辑。如果你要在区块编辑器中配置并使用区块接口，详情请参见[使用区块接口](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-block-interfaces)。

## 区块示例说明

如下图区块示例：![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6652082761/p523890.png)区块中定义了两个数据接口、一个事件接口和三个动作接口，不同类型接口的功能解释示例如下。

-   **导入玫瑰图**数据接口，用于接收到数据后立即将数据传输导入到**ECharts玫瑰图**组件中。
    
-   **轮播列表点击**事件接口，用于对外接收**轮播列表**组件中的**当点击单行时**抛出的数据。
    
-   **更新样式**动作接口，用于在获取数据之后，通过**串行数据处理**逻辑节点处理数据后，最后调用了**垂直胶囊柱状图**组件的**更新组件配置**动作。
    

下图是上述案例的区块在使用时对外展示的**数据源配置**、**交互配置**和**蓝图参数内容**的样式。

数据源配置![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6652082761/p523895.png) 交互配置![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6652082761/p523896.png) 蓝图参数配置![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6652082761/p523897.png)

## 区块使用常见问题

-   Q：区块内是否有组件？
    
    A：您可以拖拽区块编辑器图层栏内的组件到画布中[配置区块组件](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configure-block-components/)。
    
-   Q：区块内是否有交互？
    
    A：您可以将区块导出到蓝图编辑器，在蓝图编辑器中，将区块接口节点与区块中对应的组件节点连线，完成所需的业务逻辑的交互配置，详情请参见[使用区块接口](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-block-interfaces)。
    
-   Q：区块内部和外部是否有交互？
    
    A：您可以通过创建区块的接口并在可视化大屏内使用区块的接口，详情请参见[使用区块接口](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-block-interfaces)和[管理区块](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/manage-blocks#584a2e3cea9c7)。
    
-   Q：区块功能怎么调试？
    
    A：您可以通过使用[区块预览](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/manage-blocks#4bf6588a0epqa)功能，调试配置完成的区块接口等功能。
    
-   Q：区块搭建完成后，如何在可视化应用画布编辑器中使用？
    
    A：您可以先将区块发布，再进入可视化应用画布编辑器中，在编辑器中打开组件库，选择区块模块，在区块列表中查看已搭建的区块内容，也可添加所需区块，详情请参见[发布区块](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/manage-blocks#9292da93090fq)和[管理区块](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/manage-blocks#584a2e3cea9c7)。
    
-   Q：区块新版本发布后，如何一键升级可视化应用中正在使用的旧区块？
    
    A：您可以在画布编辑器中，单击目标区块，进入区块的右侧面板，在面板右上角单击升级区块版本，升级区块的方法与升级组件内容一致。
    
-   Q：如何快速便捷的创建区块？
    
    A：除了在**区块**面板创建空白区块之外，还支持在工作台页面的**组件收藏**面板中[升级收藏资产为区块](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/manage-blocks#title-wix-kiw-5vl)。