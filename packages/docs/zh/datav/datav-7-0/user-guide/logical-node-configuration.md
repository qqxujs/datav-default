<!DOCTYPE html> 

逻辑节点用于构建看板元素间的交互逻辑，支持组件与组件、组件与变量、变量与变量之间的关联控制，实现看板内所有元素的交互。本文将介绍逻辑节点在蓝图编辑器中的配置与使用方法。

## **准备工作**

### **前提条件**

已经创建[数据看板项目](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)。

### **进入逻辑节点**

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**全部应用**界面，鼠标悬停至目标看板，单击**编辑**。
3. 在数据看板的编辑页面，单击顶部菜单栏的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6259567271/p853682.png)图标，进入蓝图编辑器，单击主画布左侧**逻辑节点**，显示**逻辑节点配置。**

## 配置逻辑节点

在蓝图编辑器中，节点和锚点是逻辑节点配置的核心要素。节点作为逻辑处理的基本单元，负责执行特定操作和数据处理；锚点则是节点的连接接口，用于构建节点间的逻辑关系。

**说明** 

在配置逻辑节点前，请确保您已经添加了对应的图层节点。如果还未添加，请参见[图层节点配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configure-layer-nodes)进行添加。

### **节点配置面板**

在蓝图画布中单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4820082761/p527027.png)图标或拖动逻辑节点到画布中，即可在右侧的**节点配置**面板中配置节点交互逻辑（**全局节点**不需要配置）。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9232680861/p624324.png)

| **参数**   | **说明**                                                                                                         |
| ---- | ---- |
| **判断类型** | 选择不同的判断类型，可以**同时满足所有条件**触发或者**满足任一条件**触发。                                                                      |
| **条件列表** | 设置不同的数据过滤器达到设置条件的目的，具体操作请参见[过滤器配置与应用](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/manage-filters-1)。 |

### **锚点配置面板**

以**多路判断**为例，介绍锚点配置的相关参数和操作。**新增事件**或**新增动作**可以新增多个锚点，方便与其他组件交互。您可以单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4820082761/p521471.png)图标重命名锚点名称，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4820082761/p521467.png)图标和![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4820082761/p521468.png)图标进行锚点排序，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4820082761/p521470.png)图标查看参数提示，也可以单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4820082761/p521469.png)图标删除锚点。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9232680861/p624326.png)

| **事件/动作** | **说明**             |
| ---- | ---- |
| **判断**    | 输入上游节点的输出结果，用于判断。  |
| **满足**    | 上游节点输出的结果，满足设定条件。  |
| **不满足**   | 上游节点输出的结果，不满足设定条件。 |

**说明** 

当**新增事件**或**新增动作**置灰时，无法添加节点，请增加其他节点或删除锚点重新配置。

## **使用逻辑节点**

1. 在蓝图编辑器的左侧导航栏中单击**逻辑节点**，进入逻辑节点页面。![{F2BEA415-299F-4AE8-B4C1-23C787978D2B}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1090475471/p916735.png)
2. 在**逻辑节点**面板中，将需要使用的逻辑节点拖入蓝图画布中。  
逻辑节点包括**全局管理**、**流程控制**、**数据处理**、**设备输入**和**工具方法**等类别。各节点的使用方法以及参数详情，请分别参见[全局管理](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/global-management)、[流程控制](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/process-control)、[数据处理](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/data-processing)、[设备输入](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/device-input)和[工具方法](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/tools-and-methods)。

## **操作案例**

本案例通过配置计时器逻辑节点实现交互效果：当用户点击按钮时触发计时器开始运行，经过2秒延时后自动切换柱状图的显示/隐藏状态，完成从触发到响应的完整交互。

1. 在主画布中添加需要使用的图层节点，示例中使用**按钮**和**柱状图**节点。  
单击顶部菜单栏中的![{CF99DEA7-1F70-499C-B305-121973EF06EB}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4610494471/p916239.png)图标，进入蓝图编辑器，添加图层节点到蓝图画布中。
2. 在**逻辑节点**面板中，将需要使用的逻辑节点拖入蓝图画布中，示例中使用**计时器**节点。
3. 配置蓝图编辑器连线，并将计时器延迟时间配置为2秒。如下图所示：  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1090475471/p948783.png)
4. 预览或发布当前数据看板，查看交互效果。![2025-04-24_14-52-42](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1090475471/p948799.gif)