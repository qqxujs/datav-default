# 快速入门 %{#193467}% 

城市三维场景构建器组件提升了组件的易用性、渲染视效、支持更多精准时空数据、扩大城市基础数据资产库，真正降低“数字孪生城市”的构建门槛，使得“数字孪生城市”成为一项技术普惠。本文为您演示如何在DataV产品内使用城市三维场景构建器组件的具体步骤。

## 搭建城市三维场景构建器

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在**我的可视化**页面中，单击**PC端创建**。
3. 选择空白画布模板，并单击**创建项目**。
4. 在**创建数据大屏**对话框中，输入可视化应用名称，单击**创建**。  
应用创建成功后会跳转到应用编辑器页面。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8495304761/p551474.png)
5. 在画布右侧**全部资产**栏，单击**地图** \> **城市三维场景构建器**。  
![添加三维城市组件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9001624261/p285022.png)
6. 在**选择创建方式**对话框内选择一个数据源来源模式并单击**创建**，可选**官方基底数据**和**空间构建数据**。  
![选择数据界面](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9001624261/p239634.png)
  * **官方基底数据**：组件自带默认的官方城市基底数据，仅支持在现有数据页面框选所需数据。

    1. 您可以在**选择子组件**对话框中，单击一个或多个城市基底子组件；您也可以单击选中对话框右上角**全选**按钮，选中所有的城市基底子组件完成选择后单击**下一步**即可完成子组件的添加。![选择子组件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6680149461/p180192.png)
    2. 单击**选择范围**对话框内的**数据版本**下拉列表，选择您已购买的数据版本，并单击对话框左上角城市列表，在列表内已有的城市选项中，选择您想展示的三维城市选项。

**重要**  
      城市数据使用需要额外付费，请先联系DataV工作人员授权购买。
    3. 在左侧框选工具处选择一个框选工具，在城市地图中框选所需的场景范围。
    4. 完成区域框选后，单击右下角的**确定**即可在画布编辑器内，完成城市三维场景构建器组件的添加并加载组件框选的数据范围区域。![选择数据范围步骤](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5105086461/p181898.png)  
      添加组件和框选数据范围的功能的详细介绍请参见[使用官方基底数据方式创建](https://help.aliyun.com/document%5Fdetail/193468.html#section-bsj-xjl-qx7)。
  * **空间构建数据**：支持自动导入账号下的空间构建平台数据项目。

    1. 在**选择空间数据项目**对话框中，单击选中一个已有的空间项目，并单击右下角的**下一步**，完成空间项目的的添加。![选择项目](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1343458461/p239760.png)

**说明**  
      如果在**选择空间数据项目**对话框内，没有任何已创建的空间数据项目，您可以单击对话框右上角的**前往空间构建平台创建项目**，进入空间构建平台自定义创建项目数据，详情请参见[创建项目](/zh/datav/manage-project-panels#section-cmp-zfn-iwo)。
    2. 进入某个空间数据项目**添加图层**对话框，可以在**城市基底数据**页签，自定义选择所需的城市基底数据，在每一类选中的城市基底部数据中，单击单个虚拟对象的右下角都可以打开数据下拉列表，选择一个所需的基底数据。完成选择后，单击击右下角的**确定**。![添加图层](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6063968461/p425224.jpg)

**说明**  
      基于**空间构建数据**创建的城市三维场景构建器组件，可进入空间构建平台编辑数据。
7. 单击画布编辑器右侧面板的**进入场景编辑器**。  
![进入场景编辑器入口](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6063968461/p425225.png)
8. 在场景编辑器内，你可以新建或删除组件的场景。场景管理功能详情请参见[场景管理](/zh/datav/datav-6-0/user-guide/scene-management-of-previous-edition#concept-1988442)。  
![场景](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6063968461/p425227.jpg)
9. 在场景预览画布中，通过拖动鼠标或者滑动滚轮，手动调整地图的视角和缩放大小。视角调整功能详情请参见[场景编辑器概览](/zh/datav/datav-6-0/user-guide/overview-of-scene-editor-of-previous-edition#concept-1986574)。  
![查看预览视角](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6063968461/p425228.jpg)
10. 在场景编辑器左侧的图层列表内，您可以对图层栏内图层进行配置管理，图层管理功能详情请参见[图层面板管理](/zh/datav/datav-6-0/user-guide/layer-panel-management-of-previous-edition#concept-1988433)。

**说明**  
子组件被添加完成后即变为图层。  
![图层栏面板管理](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6063968461/p425229.jpg)
11. 在场景编辑器右侧面板内，对城市三维场景构建器组件的场景基础配置项和每个被添加的子组件配置项进行参数调整。具体参数配置说明，请参见[场景配置项说明](/zh/datav/datav-6-0/user-guide/scene-configuration-items-of-previous-edition#concept-1989092)和[图层配置项说明](/zh/datav/datav-6-0/user-guide/layer-configuration-items-of-previous-edition#concept-1988930)。  
![右侧配置面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6063968461/p425230.jpg)
12. 在场景管理器下方的关键帧面板内，可以为组件当前场景设置多个不同的镜头关键帧、关键帧事件、时间系统关键帧和组件属性关键帧内容，并预览播放组件在不同关键帧时的动画样式。具体关键帧面板内功能说明，请参见[分镜与关键帧面板管理](/zh/datav/datav-6-0/user-guide/storyboard-and-keyframe-panel-management-of-previous-edition#concept-1988931)。  
![关键帧面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6063968461/p425231.jpg)
13. 城市三维场景构建器组件配置完成并预览播放效果后，鼠标悬停至页面左上角的**返回**上方，可切换回**画布编辑器**或者**蓝图编辑器**进行可视化应用内后续的样式、数据和交互配置。  
![切换编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6063968461/p425232.png)