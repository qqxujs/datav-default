<!DOCTYPE html> 

本文介绍如何在场景编辑器中配置并使用区块接口。

## **操作步骤**

1. 在**场景编辑器**页面内，单击页面右上角工具栏内的![数据设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7062268461/p422233.jpg)图标。打开**数据接口设置**弹窗，在弹窗内您可以配置数据接口的具体内容，配置详情说明请参见[数据接口配置说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configure-data-interfaces)。  
![数据设置面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8814371561/p422236.png)
2. 单击页面右上角工具栏内的![事件设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7062268461/p422238.jpg)图标。打开**事件设置**对话框，在弹窗内您可以配置事件接口的具体内容，配置详情说明请参见[事件接口配置说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configure-the-event-interface)。![事件设置面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8814371561/p422240.png)
3. 单击页面右上角工具栏内的![动作设置入口](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7062268461/p422241.jpg)图标。打开**动作设置**对话框，在弹窗内您可以配置动作接口的具体内容，配置详情说明请参见[动作接口配置说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configure-the-action-interface)。![动作接口面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8814371561/p422245.png)
4. 配置完接口内容后，您可以单击**场景编辑器**页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标，进入蓝图编辑器页面。
5. 单击**逻辑节点**面板中的**区块接口**，即可配置交互接口节点的蓝图配置，详情接口蓝图配置请参见[使用区块接口](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-block-interfaces)。  
![交互接口蓝图配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8062268461/p422371.jpg)
6. 配置完区块接口蓝图配置后，您可以单击页面右上角的![预览区块图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4123054261/p254797.jpg)图标，进入三维场景预览页面，单击左侧的**测试区块接口**，打开测试区块接口面板。  
![测试区块接口入口](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2621411561/p435091.jpg)
7. 在**测试区块接口**面板中，您可以查看三维场景内配置的区块接口整体样式，并通过测试使用预览页面左侧的**数据**、**事件**和**动作**页签中的内容，测试区块接口内各配置的可用性，本文以**三维图标**图层在蓝图编辑器中配置的效果为例。  
![交互示例连线](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9816221561/p435708.png)

|    **测试**    |    **操作**    |
|    ----    |    ----    |
|    测试数据    |    在数据页签内，输入不同的数据内容，并查看内部图层的数据配置是否符合调整的预期。在左侧数据页签输入额外的数据，单击下方的**测试**按钮，即可查看**三维图标**图层中显示数据内容的变更。 输入数据示例![输入不同数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9816221561/p435614.png) 测试删除数据成果示例![测试数据结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9816221561/p435616.png)    |
|    测试事件    |    在事件页签中，单击对应区块接口中的某个事件，查看区块接口内部抛出的数据在事件页签中是否正确。单击**三维图标**图层中的一个图标，可以在左侧**三维图标点击时**事件页签中的**事件响应结果**处，监听图标被单击时抛出的数据。![监听事件响应示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9816221561/p435688.png)    |
|    测试动作    |    在动作页签中，针对某个动作输入不同的参数，查看该动作对应内部组件的行为是否符合修改预期。在左侧动作页签的**隐藏/显示三维图标**下的**测试参数**输入框中输入隐藏参数，把**三维图标**图层的所有图标隐藏起来。![修改动作参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9816221561/p435705.png)    |
8. 参见[预览、发布和使用项目](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/preview-publish-and-use-a-project)，将配置完成的三维城市构建器项目添加到画布编辑器中，您可以在画布编辑器右侧配置面板的数据面板和交互面板中，查看在项目中自定义配置的数据接口内容及事件设置内容。  
### **数据接口内容面板**![应用到画布编辑器中的数据接口内容面板展示](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8814371561/p435932.png)  
### **事件设置交互面板**![三维项目应用到画布编辑器中场景事件设置交互面板展示](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8814371561/p435933.png)
9. 将三维城市构建器导出到蓝图编辑器，单击画布编辑器左上角的![蓝图编辑器入口](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5749371561/p436033.jpg)图标，进入蓝图编辑器页面，单击导入三维城市构建器项目节点，即可查看自定义配置的动作设置内容。 ![三维项目应用到画布编辑器中场景动作设置交互面板展示](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8814371561/p435938.png)