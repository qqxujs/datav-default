<!DOCTYPE html> 

本文通过一个具体配置示例介绍配置完区块中的数据接口、事件接口及动作接口后，如何通过区块编辑器内的蓝图编辑器实现区块内部和外部的数据传输。

## 背景信息

以[区块示例说明](https://help.aliyun.com/zh/datav/block-overview#title-cqr-u4k-znf)中定义的区块需求为例，在区块编辑器中配置区块接口并使用示例接口。

## 在区块编辑器中配置使用区块接口

1. 参见[创建空白区块](https://help.aliyun.com/zh/datav/create-blank-blocks)，创建一个区块。
2. 单击新创建的空白区块，进入区块编辑器。
3. 在区块编辑器中，添加**轮播列表**、**ECharts玫瑰图**和**垂直胶囊柱状图**三个组件。  
![添加组件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2123054261/p283858.png)
4. 全选这三个组件，右键选择**导出到蓝图编辑器**。  
![导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4077864261/p283894.png)
5. 单击区块编辑器右上角的![数据接口设置图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2123054261/p283576.jpg)图标，在**数据接口设置**页签中配置如下图所示的数据接口样式。区块内数据接口具体配置操作，请参见[数据接口配置说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configure-data-interfaces)。  
![数据接口配置样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4077864261/p283872.png)
6. 单击区块编辑器右上角的![事件接口图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2123054261/p283762.jpg)图标，在**事件设置**页签中配置如下图所示的事件样式。区块内事件接口具体配置操作，请参见[事件接口配置说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configure-the-event-interface)。  
![事件配置示例样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5077864261/p283881.jpg)
7. 单击区块编辑器右上角的![动作图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2123054261/p283789.jpg)图标，在**动作设置**页签中配置如下图所示的动作样式。区块内动作接口具体配置操作，请参见[动作接口配置说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configure-the-action-interface)。  
![动作配置样式面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5077864261/p283885.jpg)
8. 完成区块各接口的配置后，单击区块编辑器左上角的![蓝图编辑器入口](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2123054261/p283888.jpg)图标，进入蓝图编辑器页面。
9. 将蓝图编辑器页面中的三个区块接口，分别拖入到蓝图编辑器画布中。可查看到每个区块接口都是对应上述步骤定义完成的内容。  
![拖入画布](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2123054261/p283897.png)
10. 您可以通过蓝图编辑器节点连线的方法，将区块接口节点与对应的组件节点连线，完成所需的业务逻辑的配置。当前区块示例需求的业务逻辑如下图所示。如何配置蓝图连线请参见[功能介绍](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/blueprint-editor-features-of-datav-7)。  
![完成蓝图连线](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3123054261/p283912.jpg)

## 在画布编辑器中配置使用区块接口

1. 在区块编辑器中，配置完示例区块各接口内容和区块内部蓝图逻辑交互后，您可以对区块进行预览和测试各接口内容，接口内容测试无误后，再发布该示例区块，详情请参见[预览区块](https://help.aliyun.com/zh/datav/preview-blocks)和[发布区块](https://help.aliyun.com/zh/datav/publish-blocks)。
2. 切换到**工作台**页面，您可以单击选择一个数据看板，单击**编辑**进入画布编辑器中。
3. 单击**组件库**页签，选择**区块**模块，在区块列表内可查看到发布后的所有区块内容。
4. 单击所需示例区块，即可添加该区块到画布编辑器中。
5. 单击画布中的区块，在右侧配置面板中选中**数据源**页签，在**数据源**页签可查看到该区块的数据接口中的所有配置信息。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4262082761/p524140.png)
6. 单击**高级**页签，在**高级**页签可查看到该区块的事件接口中的所有配置信息。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4262082761/p524141.png)
7. 在画布中单击选中目标区块，右键选择**导出到蓝图**。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4262082761/p524143.png)
8. 单击画布编辑器页面左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4262082761/p524144.png)图标进入蓝图编辑器。
9. 将示例区块节点拖动到蓝图编辑器的画布中，即可查看区块内所有事件和动作接口的信息。区块蓝图参数中的事件动作接口，可以在蓝图编辑器内通过连线和配置逻辑节点的方法，被其他组件调用，详情请参见[功能介绍](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/blueprint-editor-features-of-datav-7)。  
![区块动作信息面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2204285261/p290537.jpg)