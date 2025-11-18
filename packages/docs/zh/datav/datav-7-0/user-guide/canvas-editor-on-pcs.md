 

您可在PC端画布编辑页面，使用系统提供的画布配置和组件配置工具，管理画布及各个组件。本文为您介绍PC端画布编辑器的布局及功能，帮助您快速使用PC端画布编辑器开发数据看板。

## 进入画布编辑器

1.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
2.  在**全部应用**界面，鼠标悬停至目标看板，单击**编辑**，进入看板画布编辑器页面。
    

管理画布及配置组件前，您需先了解画布编辑器的[界面布局及功能概览](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/overview-of-canvas-editor-on-pcs#0586254a9e6h6)。

## **界面布局及功能概览**

DataV-Board 7.0的PC端画布编辑器界面布局及功能概览如下。

![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0791277271/p607622.jpg)

**序号**

**名称**

**说明**

1

工具栏

位于编辑器页面的最上方，提供了“切换画布/蓝图、美化、滤镜、全局搜索图层/指令/组件/设计库、刷新画布、控制右侧设置面板的显隐、切换主题、查看错误信息、生成快照以及预览/发布制作好的数据看板”等功能。

2

左侧Tab列表

展示了[图层](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/layer-management-of-canvas-editor-in-pc-of-datav-7)、[组件库](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-library-management)、[设计库](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/design-library)、[全局变量](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/global-variable/)、[过滤器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/filter-configuration-and-application/)、[历史记录](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/historical-records)及[数据管理](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/data-management)等功能，可参见各功能介绍页了解功能详情。

3

画布设置

位于编辑器页面的最中间，可控制看板布局、设置交互模式：

-   看板布局：可通过画布所提供的功能，在画布中合理布局各组件的样式、设置画布的缩放比例、控制缩略图的显隐及查看快捷键功能。
    
-   交互模式：用于在预览状态下模拟组件的交互行为，测试组件的临时效果，例如，测试交互组件的高亮、悬浮等样式。开启交互模式后，可在画布编辑页面临时调整组件样式（例如，拖动地图组件、点击触发交互组件并配置组件样式）。交互模式下用户产生的组件行为，在编辑器中不会真实触发生效。
    
    **说明**
    
    -   交互模式下产生的组件样式变更不会被保存，关闭交互模式后，可按照界面指引刷新进行样式还原。
        
    -   交互模式开启后，画布缩放功能无法使用，需手动关闭交互模式后，缩放功能方可正常使用。
        
    
    示例：在画布编辑器通过交互模式，触发点击下拉框选择器。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4154538271/p855572.png)
    

4

页面配置

在画布中不选中组件时，页面右侧会显示**页面配置**面板。 您可在该面板中调整屏幕尺寸、设置背景不透明度、设置背景颜色、选择屏幕缩放方式及生成缩略图。

5

帮助页面

单击画布左下角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7014312761/p539819.png)图标，可打开帮助面板，查看新手引导、快速链接和编辑器功能介绍。

6

组件设置

单击画布中任意一个组件，即可在页面右侧的对话框设置该组件的**样式**、**数据源**和**高级**配置。配置方法请参见[配置项说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items)。