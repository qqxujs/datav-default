# 使用区块接口 %{#281126}% 

本文通过一个具体配置示例介绍配置完区块中的数据接口、事件接口及动作接口后，如何通过区块编辑器内的蓝图编辑器实现区块内部和外部的数据传输。

## 背景信息

以[区块示例说明](/zh/datav/overview-of-blocks#section-4kd-opa-5e3)中定义的区块需求为例，在区块编辑器中配置区块接口并使用示例接口。 

## 在区块编辑器中配置使用区块接口

1. 参见[创建空白区块](/zh/datav/datav-6-0/user-guide/create-a-blank-block#task-2059192 "本文介绍如何创建一个空白区块。")，创建一个区块。
2. 单击新创建的空白区块，进入区块编辑器。
3. 在区块编辑器中，添加轮播列表、ECharts玫瑰图和垂直胶囊柱状图三个组件。  
![添加组件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2123054261/p283858.png)
4. 全选这三个组件，右键选择导出到蓝图编辑器。  
![导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4077864261/p283894.png)
5. 单击区块编辑器右上角的![数据接口设置图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2123054261/p283576.jpg)图标，在数据接口设置页签中配置如下图所示的数据接口样式。区块内数据接口具体配置操作，请参见[数据接口配置说明](/zh/datav/datav-6-0/user-guide/configure-a-data-interface#concept-2087397 "本文介绍区块内部的数据接口的配置的方法，帮助您理解区块的数据接口功能。")。  
![数据接口配置样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4077864261/p283872.png)
6. 单击区块编辑器右上角的![事件接口图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2123054261/p283762.jpg)图标，在事件设置页签中配置如下图所示的事件样式。区块内事件接口具体配置操作，请参见[事件接口配置说明](/zh/datav/datav-6-0/user-guide/configure-an-event-interface#concept-2087447 "本文介绍区块内部的事件接口的配置的方法，帮助您理解区块的事件接口功能。")。  
![事件配置示例样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5077864261/p283881.jpg)
7. 单击区块编辑器右上角的![动作图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2123054261/p283789.jpg)图标，在动作设置页签中配置如下图所示的动作样式。区块内动作接口具体配置操作，请参见[动作接口配置说明](/zh/datav/datav-6-0/user-guide/configure-an-action-interface#concept-2087448 "当区块需要暴露接口供外部其他组件调用时，可创建一个动作接口。例如当外部组件需要控制区块内部垂直胶囊柱状图组件的颜色时，可创建一个更新样式的动作，在可视化应用的蓝图编辑器中使用。本文介绍区块内部的动作接口的配置的方法，帮助您理解区块的动作接口功能。")。  
![动作配置样式面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5077864261/p283885.jpg)
8. 完成区块各接口的配置后，单击区块编辑器左上角的![蓝图编辑器入口](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2123054261/p283888.jpg)图标，进入蓝图编辑器页面。
9. 将蓝图编辑器页面中的三个区块接口，分别拖入到蓝图编辑器画布中。可查看到每个区块接口都是对应上述步骤定义完成的内容。  
![拖入画布](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2123054261/p283897.png)
10. 您可以通过蓝图编辑器节点连线的方法，将区块接口节点与对应的组件节点连线，完成所需的业务逻辑的配置。当前区块示例需求的业务逻辑如下图所示。如何配置蓝图连线请参见[蓝图编辑器详细功能介绍](/zh/datav/datav-6-0/user-guide/features-1#concept-2334130 "本文为您介绍蓝图编辑器在使用过程中常用的功能详情，可以帮助您快速上手蓝图编辑器。")。  
![完成蓝图连线](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3123054261/p283912.jpg)

## 在画布编辑器中配置使用区块接口

1. 在区块编辑器中，配置完示例区块各接口内容和区块内部蓝图逻辑交互后，您可以对区块进行预览和测试各接口内容，接口内容测试无误后，再发布该示例区块，详情请参见[预览区块](/zh/datav/preview-a-block#task-2062250 "预览区块的目的是为了测试区块的功能可用性，模拟使用时的各种操作。本文介绍如何预览并测试一个配置完成的区块，帮助您及时了解区块的可用性，便于区块的及时修改和完善。")和[发布区块](/zh/datav/publish-a-block#task-2062363 "本文介绍如何发布一个区块，帮助您升级区块版本，可供后续在可视化应用中使用。")。
2. 切换到控制台上的我的可视化页面，您可以单击选择一个可视化应用，进入画布编辑器中。
3. 单击资产列表打开全部资产列表，选择区块模块，在区块列表内可查看到发布后的所有区块内容。
4. 在画布编辑器页面，单击左上角的![资产列表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4736786261/p297082.png)图标，展开全部资产区域。
5. 在全部资产区域中，单击左侧导航栏内的区块，在区块列表内可查看到发布后的所有区块内容。单击所需示例区块，即可添加该区块到画布编辑器中。
6. 单击画布中的区块，在右侧配置面板中选中数据页签，在数据页签可查看到该区块的数据接口中的所有配置信息，您可以参见[配置资产数据](/zh/datav/datav-6-0/user-guide/configure-widget-data#task-2376875 "本文档介绍配置资产数据的方法，以及资产数据面板的内容，包括数据接口、数据源、数据过滤器和数据轮询频次等。")和[设置资产数据源](/zh/datav/datav-6-0/user-guide/configure-the-data-source-for-a-widget#task-2376923 "本文介绍DataV设置资产数据源的方法，以及设置数据源页面的内容，包括数据源、数据过滤器以及数据响应结果等。")，修改区块的数据内容。  
![查看区块数据接口内容](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5643285261/p290515.png)
7. 单击交互页签，在交互页签可查看到该区块的事件接口中的所有配置信息，您可以参见[配置数字翻牌器组件的回调ID](/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards#task-2479340 "在DataV中，回调ID是指某个资产在响应用户操作或者自动触发更新时，向其它资产传递的参数，这个参数可以在其它资产中作为数据查询时的动态变量。本文档以数字翻牌器组件为例，为您介绍回调ID的使用方法。")，修改区块的交互事件内容。  
![交互面板事件信息查看](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0804285261/p290519.png)
8. 在画布中单击选中目标区块，右键选择导出到蓝图编辑器。  
![导出区块到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2204285261/p290533.png)
9. 单击画布编辑器页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标进入蓝图编辑器。
10. 将示例区块节点拖动到蓝图编辑器的画布中，即可查看区块内所有事件和动作接口的信息。区块蓝图参数中的事件动作接口，可以在蓝图编辑器内通过连线和配置逻辑节点的方法，被其他组件调用，详情请参见[蓝图编辑器详细功能介绍](/zh/datav/datav-6-0/user-guide/features-1#concept-2334130 "本文为您介绍蓝图编辑器在使用过程中常用的功能详情，可以帮助您快速上手蓝图编辑器。")。  
![区块动作信息面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2204285261/p290537.jpg)