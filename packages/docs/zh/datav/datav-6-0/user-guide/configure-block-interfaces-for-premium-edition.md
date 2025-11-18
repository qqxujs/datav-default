  配置三维城市构建器的区块接口实现交互联动-DataV数据可视化-阿里云

如果您需要与三维城市构建器项目外的其他可视化组件之间进行交互联动，则需要为项目配置数据接口、事件和动作设置。三维城市构建器项目场景编辑器中提供了区块接口设置的功能，可用于自定义设置项目的数据接口、事件和动作。本文介绍在项目中区块接口的设置及使用方法。

您可以在三维城市构建器项目场景编辑器页面内，为项目配置数据接口设置、事件设置与动作设置，配置完成后，切换进入到蓝图编辑器面板中，添加接口节点和其他可视化组件节点编排蓝图交互效果，详细操作步骤如下。

1.  在项目场景编辑器页面内，单击页面右上角工具栏内的![数据设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7062268461/p422233.jpg)图标。即可打开数据接口设置对话框，在配置数据对话框内您可以配置数据接口的具体内容，配置详情说明请参见[数据接口配置说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-a-data-interface#concept-2087397 "本文介绍区块内部的数据接口的配置的方法，帮助您理解区块的数据接口功能。")。![数据设置面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8814371561/p422236.png)
2.  单击页面右上角工具栏内的![事件设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7062268461/p422238.jpg)图标。即可打开事件设置对话框，在配置事件对话框内您可以配置事件接口的具体内容，配置详情说明请参见[事件接口配置说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-an-event-interface#concept-2087447 "本文介绍区块内部的事件接口的配置的方法，帮助您理解区块的事件接口功能。")。![事件设置面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8814371561/p422240.png)
3.  单击页面右上角工具栏内的![动作设置入口](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7062268461/p422241.jpg)图标。即可打开动作设置对话框，在配置动作对话框内您可以配置动作接口的具体内容，配置详情说明请参见[动作接口配置说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-an-action-interface#concept-2087448 "当区块需要暴露接口供外部其他组件调用时，可创建一个动作接口。例如当外部组件需要控制区块内部垂直胶囊柱状图组件的颜色时，可创建一个更新样式的动作，在可视化应用的蓝图编辑器中使用。本文介绍区块内部的动作接口的配置的方法，帮助您理解区块的动作接口功能。")。![动作接口面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8814371561/p422245.png)
4.  配置完接口内容后，您可以单击场景编辑器页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
5.  切换进入蓝图编辑器页面，单击逻辑节点面板中的区块接口，即可配置交互接口节点的蓝图配置，详情接口蓝图配置请参见[使用区块接口](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-a-block-interface#task-2098200 "本文通过一个具体配置示例介绍配置完区块中的数据接口、事件接口及动作接口后，如何通过区块编辑器内的蓝图编辑器实现区块内部和外部的数据传输。")。![交互接口蓝图配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8062268461/p422371.jpg)
6.  配置完区块接口蓝图配置后，您可以单击页面右上角的![预览区块图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4123054261/p254797.jpg)图标，进入三维场景预览页面，单击左侧的测试区块接口按键，打开测试区块接口面板。![测试区块接口入口](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2621411561/p435091.jpg)
7.  在测试区块接口面板中，您可以查看三维场景内配置的区块接口整体样式，并通过测试使用预览页面左侧的数据、事件和动作页签中的内容，测试区块接口内各配置的可用性，本文以三维图标图层在蓝图编辑器中配置的效果为例。![交互示例连线](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9816221561/p435708.png)
    
     
    
    测试
    
    操作
    
    测试数据
    
    在数据页签内，输入不同的数据内容，并查看内部图层的数据配置是否符合调整的预期。
    
    如下图所示，可以在左侧数据页签输入额外的数据，单击下方的测试按钮，即可查看三维图标图层中显示数据内容的变更。
    
    图 1. 输入不同数据
    
    ![输入不同数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9816221561/p435614.png)
    
    图 2. 测试删除数据成果
    
    ![测试数据结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9816221561/p435616.png)
    
    测试事件
    
    在事件页签中，单击对应区块接口中的某个事件，查看区块接口内部抛出的数据在事件页签中是否正确。
    
    如下图所示，单击三维图标图层中的一个图标，可以在坐侧三维图标点击时事件页签中的事件响应结果处，监听图标被单击时抛出的数据。![监听事件响应示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9816221561/p435688.png)
    
    测试动作
    
    在动作页签中，针对某个动作输入不同的参数，查看该动作对应内部组件的行为是否符合修改预期。
    
    如下图所示，可以在左侧动作页签的隐藏/显示三维图标下的测试参数输入框中输入隐藏参数，把三维图标图层的所有图标隐藏起来。
    
    ![修改动作参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9816221561/p435705.png)
    
8.  参见[发布与使用项目](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/publish-and-use-dashboards#concept-2193334 "通过三维城市构建器项目的发布功能，可以将已经开发完成的三维城市构建器项目发布到线上环境，后续在资产面板直接查看并消费使用。本文介绍如何发布一个三维城市构建器项目以及如何在画布编辑器中使用该项目。")，将配置完成的三维城市构建器项目添加到画布编辑器中，您可以在画布编辑器右侧配置面板的数据面板和交互面板中，查看在项目中自定义配置的数据接口内容及事件设置内容。
    
    图 3. 三维项目应用到画布编辑器中场景数据接口内容面板展示
    
    ![应用到画布编辑器中的数据接口内容面板展示](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8814371561/p435932.png)
    
    图 4. 三维项目应用到画布编辑器中场景事件设置交互面板展示
    
    ![三维项目应用到画布编辑器中场景事件设置交互面板展示](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8814371561/p435933.png)
    
9.  将三维城市构建器项目导出到蓝图编辑器，单击画布编辑器左上角的![蓝图编辑器入口](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5749371561/p436033.jpg)图标，进入蓝图编辑器页面，单击导入三维城市构建器项目节点，即可查看自定义配置的动作设置内容。
    
    图 5. 三维项目应用到画布编辑器中场景动作设置蓝图面板展示
    
    ![三维项目应用到画布编辑器中场景动作设置交互面板展示](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8814371561/p435938.png)