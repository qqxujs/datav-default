<!DOCTYPE html> 

布局容器与资产管理作为移动端画布编辑器的核心功能，支持可视化元素的层级化组织和精细化控制。本文详细介绍布局容器与资产的添加、管理及画布编辑操作。

## 进入画布编辑器

如果页面中没有移动端数据看板，您需要先[创建移动端看板](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-a-template-to-create-a-pc-side-visual-application#0a0ccb98baplq)。

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**我的可视化**界面，鼠标悬停至目标移动端看板，单击**编辑**，进入看板画布编辑器页面。

## **添加布局容器**

布局容器面板，主要用于展示容器的种类和添加容器内容到流式布局画布中。

在移动端画布编辑器中，您可以通过以下两种方式添加布局容器。

**说明** 

若页面未显示布局容器面板，请单击画布编辑器顶部工具栏的![{CEA7821A-3813-4979-AD88-9FA0A7C7482F}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3184097471/p957909.png)图标打开面板。

* 在移动端画布编辑器中，单击**布局容器**面板内的某一种类型的容器，即可直接添加容器到流式布局画布中。例如添加**多行容器**。  
使用单击方式直接添加到流式布局画布中的容器，会自动展示在流式布局画布的尾部位置。您可以通过[图层位置移动](#5e67f75d7dqli)操作，调整容器在流式布局画布的位置。
* 在移动端画布编辑器中，您可以通过拖拽布局容器面板中的特定容器类型至流式布局画布的指定位置或空格子内，实现容器的精准插入或在目标格子内新建容器。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4491209471/p959765.png)

## **添加资产**

资产列表面板，主要用于添加移动端资产内容到流式布局画布中。

在移动端画布编辑器中，您可以通过以下3种方式添加资产。

* 单击**资产列表**面板内的某个资产，可以直接在流式布局画布尾部添加一个普通容器，并将资产加入普通容器内的格子中。例如添加**基础区域图**。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4491209471/p959766.png)
* 用鼠标拖动**资产列表**面板内的某个资产到流式布局画布指定位置中的某个空格子内，即在该格子内置入该资产。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4491209471/p959767.png)
* 用鼠标拖动**资产列表**面板内的某个资产到流式布局画布指定位置中的某个非空格子内，即在该格子后新添加一个空格子用于放置该资产。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4491209471/p959769.png)

## **流式布局画布编辑**

流式布局画布编辑是DataV移动端编辑器提供的核心功能，包含容器布局、格子和资产三个核心部分。通过容器布局建立基础框架，利用格子划分内容区域，最后通过资产实现具体内容的填充与展示，三者协同工作形成完整的流式布局编辑体系。

### **容器布局**

DataV的流式布局画布支持容器的自由移动与高度调整功能，可通过鼠标拖拽实现直观的布局编辑。支持的操作介绍如下。

| **操作** | **描述**                                                                                                                                                                                                                                                                                                                                           |
| ---- | ---- |
| 高度调整   | **重要** 容器高度调整仅针对图层栏最外层容器生效。当选中一个布局容器时，您可以上下拖动容器下方的边界把手调整容器高度。![调整高度](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0819089951/p148287.png)当选中任意图层内一个布局容器时，可在右侧容器配置面板中，调整容器高度。当选中多个布局容器时，则只能通过配置右侧出现的**容器批量配置**面板中的**高度**值进行多个容器高度的调整。![多个容器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0819089951/p148288.png) |
| 上移     | 在图层栏或流式布局画布内选中一个布局容器后，将鼠标移动到容器边缘的弹框![上移图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0819089951/p148289.png)处，单击该图标即可将容器向上移动一层。                                                                                                                                                                                               |
| 下移     | 在图层栏或流式布局画布内选中一个布局容器后，将鼠标移动到容器边缘的弹框![下移图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0819089951/p148290.png)处，单击该图标即可将容器向下移动一层。                                                                                                                                                                                               |
| 复制     | 在图层栏或流式布局画布内选中一个布局容器后，将鼠标移动到容器边缘的弹框![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0819089951/p148291.png)处，单击该图标即可复制当前容器所有内容并插入复制后的容器到后方位置。在图层栏或流式布局画布内选中一个布局容器后，通过Ctrl+C复制资产，如果立刻使用Ctrl+V粘贴，则被复制的新容器将添加于当前容器后方；如果是在选中空格子后使用Ctrl+V粘贴，则被复制的新容器将置于格子内；如果选中的是非空格子或对象后使用Ctrl+V粘贴，则被复制的新容器将添加于当前格子后方。                           |
| 删除     | 在图层栏或流式布局画布内选中一个布局容器后，将鼠标移动到容器边缘的弹框![删除容器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0819089951/p148292.png)处，单击该图标即可删除当前容器。在图层栏或流式布局画布内选中一个布局容器后，通过单击键盘上的Delete，即可删除被选中的容器。                                                                                                                                                  |
| 修改容器名  | 在图层栏内选中一个布局容器后，双击容器的标题处，即可在弹窗内修改容器的名称。                                                                                                                                                                                                                                                                                                           |

### **格子**

DataV支持在流式布局画布中对格子进行高度调整、分裂等操作，通过鼠标拖拽即可实现灵活的布局控制。支持的操作介绍如下。

| **操作** | **描述**                                                                                                                                                                                                                                                                                                                          |
| ---- | ---- |
| 高度调整   | 选中一个格子，您可以通过拖动流式布局画布中格子的把手，调整格子的宽高。![格子把手](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2539089951/p148300.png)                                                                                                                                                                                                 |
| 分裂格子   | 选中一个格子，您可以单击格子右上角的![纵向分裂图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2539089951/p148302.png)或![横向分裂图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2539089951/p148303.png)，将当前格子在纵或横的方向分为两个格子。![分裂图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2539089951/p148301.png) |
| 删除格子   | 选中一个格子，您可以单击格子右上角的![删除格子图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2539089951/p148304.png)，将当前格子删除。![删除格子入口](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2539089951/p148305.png)                                                                                                         |

### **资产**

DataV支持在流式布局画布中对资产进行位置调整和复制等操作，通过鼠标拖拽即可实现灵活的资产布局。支持的操作介绍如下。

| **操作**       | **描述**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ---- | ---- |
| 调整资产位置       | 在流式布局画布中，通过拖拽画布中的资产到空格子内，可以调整资产到指定的位置。在流式布局画布中，通过拖拽画布中的资产到已填充资产的格子内，可以交换两个资产的位置。选中流式布局画布中的某个资产，通过资产提示框中的![上移](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9249089951/p148369.png)、![下移](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9249089951/p148370.png)、![左移](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9249089951/p148371.png)、![右移](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9249089951/p148372.png)，在容器内调整资产的位置。![组件上移图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9249089951/p148365.png) |
| 复制资产         | 选中一个资产，您可以单击资产提示框中的![复制](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9249089951/p148374.png)，复制当前资产，复制后的资产将添加在当前资产的后方。![复制组件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0349089951/p148387.png)选中一个资产，您可以通过Ctrl+C复制当前选中资产，如果在空格子内Ctrl+V粘贴，则新资产将添加于空格子内；如果在非空格子Ctrl+V粘贴，则在当前非空格子后添加新格子，存放被复制出来的新资产。                                                                                                                                                                                                                                                         |
| 删除资产         | 选中一个资产，您可以单击资产提示框中的![删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0349089951/p148392.png)，删除当前资产。选中资产，通过单击键盘上的**Delete**键，删除当前资产。                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 更改资产配置、数据和交互 | 选中一个资产，您可以在右侧配置面板中，设置资产的**配置**、**数据**和**交互**面板，详细配置方法请参见[配置项说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items)。                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## **图层位置移动**

移动编辑器图层栏（又称元素大纲树面板），主要用于管理画布中的容器层级关系，移动端的可视化应用页面内是由一个个容器堆叠而成的，容器中可以配置多个格子，用于承载可视化资产。![图层栏功能图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1849089951/p148281.png)

* 可单击选中图层栏内的容器、格子或资产。
* 单击选中最外层容器后，鼠标拖拽上下调整最外层容器的位置。
* 单击选中最外层容器后，选择单击图层栏顶部的**置顶**、**置底**、**上移一层**、**下移一层**功能按键，可调整最外层容器的位置。
* 单击选中图层栏或流式布局画布内的最外层容器后，通过流式布局画布中的上下移按钮可调整最外层容器的位置。![上下移](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1849089951/p148297.png)