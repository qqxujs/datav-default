<!DOCTYPE html> 

图层配置节点是蓝图编辑器中用于定义和管理可视化项目图层属性的核心组件，支持通过配置图层样式、交互逻辑及数据关联实现动态可视化效果。本文详细介绍其操作方法和应用场景。

## **前提条件**

已创建数据看板，支持使用[模板创建PC端看板](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)、[空白画布创建数据看板](https://help.aliyun.com/zh/datav/datav-7-0/getting-started/use-a-canvas-to-create-a-dashboard#639c36877c6jr)、[AI智能生成PC端看板](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-ai-to-intelligently-generate-pc-side-kanban)。

## 进入图层节点

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**全部应用**界面，鼠标悬停至目标看板，单击**编辑**。
3. 在数据看板的编辑页面，单击顶部菜单栏的![{AD873037-9EA0-4A33-B42B-33F18C7AE3DD}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2374097471/p957309.png)图标，进入蓝图编辑器，主画布左侧默认显示**图层节点配置**。

当组件被添加至画布编辑器后，**蓝图编辑器** \> **图层节点**列表会同步展示当前看板已使用的组件。若组件间存在业务交互，您可将所需组件拖拽至蓝图编辑器的主画布，配置交互行为。

进行图层节点配置前，您需先了解蓝图编辑器的[界面布局](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/blueprint-editor-features-of-datav-7#section-lh4-o9o-299)及[操作介绍](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/blueprint-editor-features-of-datav-7#section-w05-9to-kmy)。

## 操作指南

图层节点配置的功能介绍如下表。

| **操作**    | **说明**                                                                                                                                                                    |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 添加        | 单击图层节点右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2502919661/p521438.png)图标或直接拖拽至蓝图画布中，实现添加操作。                                               |
| 删除        | 在蓝图画布中，右键单击指定节点，选择**删除选中**，可将当前节点从蓝图画布中移除。**重要** 移除节点时，会同时移除选中的连线，且无法恢复，请谨慎操作。                                                                                            |
| 搜索        | 在蓝图编辑器的主画布上方单击**搜索**，进入搜索面板，使用全局搜索功能，输入需要查找的图层节点。详情请参见[界面功能索引](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/blueprint-editor-features-of-datav-7#93d8769ba1ukz)。 |
| 聚焦        | 鼠标悬浮在节点上方。单击![{6D8C7713-5E6F-49D9-B20F-13A9DA2B3C8D}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2374097471/p915190.png)图标，在蓝图画布中定位当前图层节点。              |
| 在画布编辑器中定位 | 鼠标悬浮在节点上方，单击![{D16EF17A-AE37-42F3-85E9-B1B784CCA144}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2374097471/p915198.png)图标，在画布编辑器中定位当前图层节点的位置。          |
| 主画布       | 蓝图编辑器的主画布中其它操作请参见[主画布操作](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/blueprint-editor-features-of-datav-7#d777870f4914m)。                                       |