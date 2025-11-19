<!DOCTYPE html> 

自定义路径组件可用于呈现两点之间的物体运动轨迹或路径情况。本文为您介绍如何添加并配置自定义路径组件。

## **图表样式**

自定义路径支持设置运动物体的样式及运动轨迹，可直观的呈现物体的整个运动过程。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9112489271/p863396.png)

## **前提条件**

已创建数据看板，支持[使用模板创建](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)、[使用空白画布创建](https://help.aliyun.com/zh/datav/datav-7-0/getting-started/use-a-canvas-to-create-a-dashboard#639c36877c6jr)、[使用AI智能生成](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-ai-to-intelligently-generate-pc-side-kanban)。

## **添加自定义路径组件**

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台** \> **全部应用** \> **数据看板**单击目标看板，进入看板的画布编辑页面。
3. 在左侧导航栏，按下图步骤添加**自定义路径**组件至画布。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6422847571/p1005695.png)

您也可[使用全局搜索](https://help.aliyun.com/zh/datav/global-search)添加相关组件。

## 配置自定义路径组件

单击自定义路径组件，即可在右侧面板配置组件的基础样式、全局变量和交互事件等高级配置，以及蓝图交互配置。

### **样式配置**

相关配置项介绍如下。

| **配置项** | **描述**                                                                                                                                                                                                                                                                                                                                                                                                                                  | **图示**                                                                                        |
| ---- | ---- | ---- |
| 基础配置    | 定义组件在数据看板中的位置分布、透明程度、交互穿透。不透明度：数值越小，组件越透明。取值范围为0\~1内的数值。交互穿透：开启后，鼠标可穿透该组件，避免看板中组件较多时，该组件会遮挡鼠标与下层组件的交互。                                                                                                                                                                                                                                                                                                                                  | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9112489271/p863179.png) |
| 全局配置    | 定义组件呈现的运动路径及路径的显示样式（实线或虚线、线的粗细、线的颜色等）。可通过如下形式定义路径轨迹：文件上传：仅支持上传SVG格式文件，且需包含用来描述二维矢量图形的SVG标签文件。鼠标悬停至图片上方，单击**更改**，即可上传[官方或您本地的设计资源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/features-on-the-usage-page)。字符串：输入SVG路径数据。例如，M433.771416,3.94926004 C347.141186,5.69356279 274.845026,48.3758822 216.882935,131.996218 C158.920845,215.616554 86.6246843,258.267568 -0.00554592745,259.94926。**说明** SVG为可缩放矢量图形，通常表示一条复杂的曲线或路径。 | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9112489271/p863207.png) |
| 图片配置    | 定义组件中描述运动轨迹的物体样式，可使用圆形、矩形或自定义图片。鼠标悬停至图片上方，单击**更改**，即可上传[官方或您本地的设计资源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/features-on-the-usage-page)。同时，支持设置图片/图形的宽度、高度、颜色、边框粗细等样式。**说明** 运动物体不同，样式配置项存在差异，具体请以实际界面为准。                                                                                                                                                                                                                | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9112489271/p863348.png) |
| 动画配置    | 定义组件运动轨迹的动画效果。包括，运动方向、时长、路径范围、速度等。运动方向：包括正向单向、逆向单向、正向往返、逆向往返等。路径范围：取值为0\~100。0：表示仅位于起点不移动。100：表示仅位于终点不移动。50：表示每次运动仅会从起点移动至中间位置便停止，不会继续向终点位置移动。路径移速：可按需设置运动物体的移动速度。                                                                                                                                                                                                                                                                      | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9112489271/p863220.png) |

### **高级配置**

相关配置项介绍如下。

| **配置项** | **描述**                                                                                                                                                                                                                                                                                     | **图示**                                                                                        |
| ---- | ---- | ---- |
| 交互事件    | 定于与其他组件间的[交互行为](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)，实现组件联动。例如，该组件可用于航班信息展示，可实现当**自定义路径**组件开始运动时，**轮播列表**显示当前航班的位置信息。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9112489271/p863382.png)图标，即可定义相关交互事件及交互动作。 | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9112489271/p863375.png) |
| 关联全局变量  | 可在组件中关联全局参数，实现组件间的参数传递，进行组件交互。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9112489271/p863389.png)图标，即可开启相应指令，并为该指令关联所需[全局变量](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-global-variables)。                                                      | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9112489271/p863377.png) |

### **蓝图交互**

可通过[蓝图编辑器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/what-is-blueprint-editor-1)使用可视化连线方式，定义组件间的交互关系及行为逻辑。操作步骤如下：

1. 在画布编辑页面，单击顶部菜单栏左侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9112489271/p863403.png)图标，进入蓝图编辑器。
2. 在图层节点列表，鼠标悬停至自定义路径组件，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9112489271/p863408.png)图标，添加该组件至主画布。
3. 通过连线方式，按需配置相关组件的蓝图交互效果。  
示例如下。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9112489271/p863415.png)