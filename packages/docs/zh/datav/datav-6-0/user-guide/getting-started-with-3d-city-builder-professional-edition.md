  使用三维城市构建器创建并发布三维城市场景-DataV数据可视化-阿里云

三维城市构建器提升了三维资产的易用性、渲染视效、支持更多精准时空数据、扩大城市基础数据资产库，真正降低“数字孪生城市”的构建门槛，使得“数字孪生城市”成为一项技术普惠。本文为您演示如何在DataV产品内使用三维城市构建器的具体步骤。

## 创建三维城市构建器项目

**说明** 三维城市构建器仅专业版及以上版本支持使用。

1.  登录[DataV控制台](https://datav.aliyun.com/)。
2.  在控制台内，单击切换到三维城市构建器页面，单击+创建三维城市场景。![创建三维城市构建器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6477620561/p431012.png)
3.  在弹窗的创建三维城市场景对话框内，输入三维城市场景项目的名称以及选择一个项目分组，项目配置完成后，单击右下角的完成。![创建三维城市场景项目](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5105086461/p411939.jpg)
4.  在下一步弹窗的选择创建方式对话框内，选择一个数据来源模式，并单击创建，可选官方基底数据和空间构建数据。
    
    ![选择数据界面](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9001624261/p239634.png)
    
    -   官方基底数据：官方提供的城市基底数据，仅支持在现有数据页面框选所需数据。
        1.  您可以在选择城市基底对话框中，单击一个或多个城市基底子组件；您也可以单击选中对话框右上角全选按钮，选中所有的城市基底子组件，完成选择后单击下一步即可完成子组件的添加。
            
            **说明** 您可以在提供数据精度的子组件右下角，查看组件自带的精度选项，并选择您所需的数据精度，选择高精度可以使数据更准确，但是数据量会较大，请谨慎选择。
            
            ![选择子组件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6680149461/p180192.png)
        2.  单击选择范围对话框左上角的城市列表，在列表内已有的城市选项中，选择一个城市选项，地图将快捷定位并跳转至所选对应城市。
            
            **说明** 目前已开放可使用的城市有21个，后续将不定期持续更新更多的城市，敬请期待。
            
        3.  在左侧框选工具处选择一个框选工具，在城市地图中框选所需的场景范围。
        4.  完成区域框选后，单击右下角的确定即可完成三维城市构建器项目的创建，并加载框选的数据范围区域。![选择数据范围步骤](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5105086461/p181898.png)
            
            创建三维城市构建器项目和框选数据范围的功能的详细介绍请参见[使用官方基底数据方式创建](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/create-3d-city-projects#section-bsj-xjl-qx7)。
            
    -   空间构建数据：支持自动导入账号下的空间构建平台数据。
        1.  在选择空间数据项目对话框中，单击选中一个已有的空间项目，并单击右下角的下一步。![选择项目](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1343458461/p239760.png)
            
            **说明**
            
            -   如果在选择空间数据项目对话框内，空间数据项目较多，可以在选择空间数据项目对话框左上角的搜索项目处，输入项目名称即可定位所需项目的内容，再进行选中。
            -   如果在选择空间数据项目对话框内，没有任何已创建的空间数据项目，您可以单击对话框右上角的前往空间构建平台创建项目，进入空间构建平台自定义创建项目数据，详情请参见[创建项目](https://help.aliyun.com/zh/datav/manage-project-panels#section-cmp-zfn-iwo)。
            
        2.  进入某个空间数据项目添加图层对话框，可以在城市基底数据页签，自定义选择对话框内的基底数据和基底模型，在单击选中某个基底数据类后，您可以单击其右下角的精度下拉列表选择一个所需精度，也可以单击数据下拉列表，选择一个所需的数据集。完成选择后，单击击右下角的确定。![添加图层](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1343458461/p244211.png)
            
            **说明** 基于空间构建数据创建的三维城市构建器项目，可进入空间构建平台编辑所需数据。
            
    
5.  在经过一段时间的场景加载后，即可进入场景编辑器页面。
    
    ![加载进入场景编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5105086461/p181900.png)
    
    **说明** 进入场景编辑器面板时，场景内所有数据会有一定的渲染加载时间，此时场景内容正在加载中，画布中会出现场景载入提示说明，请您耐心等待。
    

## 编辑三维城市构建器项目

1.  在进入创建的三维城市构建器项目场景编辑器内，你可以新建或删除场景，场景管理功能详情请参见[场景管理](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/scene-management-of-professional-edition#concept-1988442 "三维城市构建器项目的场景编辑器中可查看已有的各个场景，默认将初始化的图层都添加到场景1内。您可以在场景编辑器内进行新增场景、切换场景、删除场景、重命名场景、设置默认场景和导出场景到蓝图编辑器等操作。本文介绍三维城市构建器组件场景管理功能的使用方法。")。
    
    ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5105086461/p181901.png)
    
2.  在三维视图与相机编辑面板中，通过拖动鼠标或者滑动滚轮，手动调整地图的视角和缩放大小，也可以通过路径面板与高程面板支持编辑出想要的任意空间曲线，具体视角调整及相机编辑功能详情请参见[场景编辑器概览](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/overview-of-scene-editor-of-professional-edition#concept-1986574 "三维城市构建器场景编辑器内提供了场景区域数据编辑、场景编辑、分镜与关键帧编辑等功能，使用户可以所见即所得地进行三维场景搭建，并能与可视化应用中其他二维图表交互串联。本文为您介绍场景编辑器的结构和功能，帮助您快速使用场景编辑器从而搭建城市的三维场景。")和[三维视图与相机编辑面板管理](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/3d-view-and-camera-editing-panel-management-of-professional-edition#concept-2193331 "三维城市构建器中，场景编辑的大部分操作在相机编辑面板完成，具体分为三维视图、相机路径面板、相机高程面板，提供对三维场景全方位的视觉呈现和控制能力。本文介绍三维城市构建器三维视图与相机编辑面板内相机视角调整与编辑功能的使用方法。")。
    
    ![查看预览视角](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1343458461/p181902.png)
    
3.  在场景编辑器左侧的图层列表内，您可以对图层栏内的场景图层和全局图层进行配置管理，图层管理功能详情请参见[图层面板管理](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/layer-panel-management-of-professional-edition#concept-1988433 "三维城市构建器项目场景编辑器左侧的图层面板承载了管理图层的功能。本文介绍三维城市构建器图层面板内各个功能的使用方法。")。
    
    **说明** 子组件被添加完成后即变为图层。
    
    ![图层栏面板管理](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1343458461/p181903.png)
    
4.  在场景编辑器右侧面板内，对三维城市构建器项目的场景基础配置项和每个被添加的图层配置项进行参数调整，具体参数配置说明请参见[场景配置项说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/scene-configuration-items-of-professional-edition#concept-1989092 "本文介绍三维城市构建器项目场景配置项的含义，帮助您快速了解场景配置页签内的参数用途，合理使用三维城市构建器项目。")和[图层配置项说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/layer-configuration-items-of-professional-edition#concept-1988930 "本文对三维城市构建器项目内的图层配置项进行了概括性说明。")。
    
    ![右侧配置面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1343458461/p181905.png)
    
5.  在场景管理器下方的分镜与关键帧面板内，可以为当前场景设置多个不同的分镜和关键帧内容，并可以预览播放场景在不同关键帧时的动画样式。具体分镜与关键帧面板内功能说明，请参见[分镜与关键帧面板管理](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/storyboard-and-keyframe-panel-management-of-professional-edition#concept-1988931 "场景编辑器下方的分镜与关键帧面板，重新梳理了图层、场景和分镜的概念及功能，每个场景下可以创建多个相同图层要素的动画。本文介绍三维城市构建器分镜与关键帧面板内各个模块功能的使用方法。")。
    
    ![关键帧配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6105086461/p181906.png)
    
6.  单击场景编辑器右上角的项目设置![项目设置按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6105086461/p412002.jpg)按键，在弹窗内可设置包括项目尺寸大小、发布和预览时的页面缩放设置、缩略图等设置，详情请参见[项目设置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/project-settings-of-professional-edition#concept-2193333 "本文介绍三维城市构建器的项目设置面板中各配置项的含义，帮助您快速了解项目基本参数配置的用途，合理配置三维城市构建器项目内容。")。
7.  单击场景编辑器右上角的数据接口设置、事件设置与动作设置三个按键，即可自定义配置项目接口内容，详情请参见[数据接口配置说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-a-data-interface#concept-2087397 "本文介绍区块内部的数据接口的配置的方法，帮助您理解区块的数据接口功能。")、[事件接口配置说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-an-event-interface#concept-2087447 "本文介绍区块内部的事件接口的配置的方法，帮助您理解区块的事件接口功能。")和[动作接口配置说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-an-action-interface#concept-2087448 "当区块需要暴露接口供外部其他组件调用时，可创建一个动作接口。例如当外部组件需要控制区块内部垂直胶囊柱状图组件的颜色时，可创建一个更新样式的动作，在可视化应用的蓝图编辑器中使用。本文介绍区块内部的动作接口的配置的方法，帮助您理解区块的动作接口功能。")。![数据接口面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1343458461/p424127.png)
8.  当场景编辑器内场景配置完成后，可单击左上角的![蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6105086461/p412008.jpg)按键，切换进入蓝图编辑器页面进行项目内的蓝图交互配置，详情请参见[蓝图编辑器配置说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/blueprint-editor-configuration#concept-2193562 "三维城市构建器项目内的蓝图编辑器功能，用于编辑项目黑盒产物中的逻辑控制。本文介绍三维城市构建器项目中蓝图编辑器的使用方法。")。

## 发布并使用项目

1.  三维城市构建器项目内容编辑完成后，在场景编辑器中，单击页面工具栏右上角的![发布图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1343458461/p422384.jpg)图标。
2.  在弹窗的发布对话框中，输入本次项目发布的备注说明内容，再单击发布，即可完成发布项目。![发布世界对话框](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1343458461/p412010.jpg)
3.  切换到DataV控制台我的可视化页面中，选择一个可视化应用，单击编辑。
4.  在画布编辑器页面，单击资产列表 > 全部资产 > 城市，即可查看到已发布的所有三维城市构建器项目内容。![选择已发布城市项目](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1343458461/p413855.png)
5.  您可以单击城市模块中某个已有的三维城市构建器项目，即可将其添加到画布编辑器中，在画布中可参考其他资产的配置方法，对三维城市构建器进行后续其他操作，详情请参见[资产管理](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/components-overview#concept-r3t-w4m-q2b "本文为您介绍DataV支持的组件类型，以及每个类型下所包含的具体组件，帮助您了解各组件的位置分类，更加高效地开发可视化应用。")。