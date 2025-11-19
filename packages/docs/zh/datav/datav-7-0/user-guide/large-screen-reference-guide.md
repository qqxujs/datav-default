<!DOCTYPE html> 

您可使用大屏嵌入功能，在当前数据看板（即主看板）中嵌入多个已发布的数据看板（即子看板），从而实现将多个数据看板集中展示或交付至一个看板内。同时，您还可结合组件（例如，按钮、TAB列表）实现子看板的加载/卸载效果，并通过交互事件、全局变量、蓝图交互等功能，实现子看板之间的数据及行为交互。

## **效果展示及逻辑实现**

### **效果展示**

* **大屏嵌入前**：三个看板独立开发、独立展示。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6529792471/p932029.png)
* **大屏嵌入后**：三个看板独立开发，集中展示，且支持添加交互效果。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6529792471/p932030.png)  
最终呈现效果如下：  
![D89A55A0-2429-46E0-8223-AF0900FCCDBB](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6529792471/p931798.gif)

### **逻辑实现**

以上文动图为例，介绍大屏嵌入的相关实现逻辑。

示例：主看板中添加了一个3D地图组件作为整体背景，嵌入了两个子看板（即子看板1、子看板2），并通过5个按钮组件控制子看板的显隐、加载、卸载效果。同时，实现单击子看板1内的按钮，将子看板1的折线图数据传递给子看板2的折线图（序号1\~7为数据传递过程）。其逻辑关系如下。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6439792471/CAEQVRiBgMCut6DerRkiIGUwYjFlZWY3YTkxYTQ5MWE5ODJiMjg0NjM0YWZkN2Rm4980673_20250321102807.922.svg)

**说明** 
* 主看板和子看板的本质均为数据看板，且功能一致。为了便于理解及区分，故将被嵌入的看板命名为子看板。
* 子看板的显示/隐藏与加载/卸载呈现的效果类似，但其性能存在如下差异：

  * **显示/隐藏**：隐藏后，看板本身并未清除，只是不对用户展示，单击即可实现看板的秒切。但该方式会占用部分系统内存或显卡内存，适用于高性能机器。
  * **加载/卸载**：卸载后，看板的所有内容将被清除；加载后，将重新请求看板内容。该方式可能导致加载过程不够流畅，但不会占用过多系统内存或显卡内存，适用于性能一般的机器。

## **使用场景**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6439792471/CAEQVRiBgID7qsDKrRkiIGRjOTVhYWNjODdjZTQyZjA5NDY5NTUxN2Q2ZDM5YTUy4980673_20250317163246.144.svg)
* **并行开发，提升开发效率。**  
若您的主看板模块较多，则可将各模块通过子看板的形式交由不同团队并行开发，后续可将所有子看板嵌入主看板，进行整体展示或交付。
* **内容复用，节省人力资源。**  
若您的多个数据看板均包含相同的可视化内容（例如，相同组件、数据等），则可将该内容通过子看板的形式进行封装，通过大屏嵌入，实现复用至不同的数据看板中。
* **动态切换多个看板。**  
若您的业务需交付多个不同场景的数据看板、且需要在演示过程中动态切换展示，则可通过大屏嵌入功能，将所有看板集成至一个看板中，通过加载（即展示）、卸载（即清除）机制动态切换。

**说明** 

子看板的所有变更发布后，将会实时更新至嵌入该子看板的主看板中。您无需发布主看板，即可看到其所嵌入的子看板的最新发布内容。

## **使用限制**

* 仅支持**专业版**及以上版本的用户使用大屏嵌入功能。若您的产品版本较低，可参考[产品升级](https://help.aliyun.com/zh/datav/datav-7-0/product-overview/service-upgrades-and-downgrades#54e7660095c9p)操作。
* 仅支持嵌入当前工作空间内已[发布](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/manage-a-data-dashboard#59ef26706323x)的数据看板。
* 不支持循环引用。若出现循环引用，编辑页面会提示报错，预览和发布状态下会自动隐藏产生循环引用的内容。例如，当前有A、B、C三个看板，A引用B，B引用C，则C无法再去引用A、B，B无法再去引用A。

## **前提条件**

* 已[开通](https://help.aliyun.com/zh/datav/datav-7-0/getting-started/activate-datav-1)专业版及以上版本的DataV-Board 7.0产品。
* 已规划并创建相关看板。

  * 子看板：作为在主看板中被嵌入的目标看板。请按需创建并完成配置及发布操作，详情请参见[操作指引](https://help.aliyun.com/zh/datav/datav-7-0/getting-started/function-overview)。
  * 主看板：作为大屏嵌入的操作方。请按需选择[使用模板](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)、[使用空白画布](https://help.aliyun.com/zh/datav/datav-7-0/getting-started/use-a-canvas-to-create-a-dashboard#639c36877c6jr)或[使用AI智能生成](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-ai-to-intelligently-generate-pc-side-kanban)等方式创建。

## **操作流程**

主看板嵌入子看板的操作流程如下。

**说明** 

在主看板中，除了嵌入子看板外，您也可添加其他组件并进行相关配置，该操作与通用数据看板操作一致，不在此处过多介绍。相关操作可参见[配置数据看板](https://help.aliyun.com/zh/datav/datav-7-0/getting-started/function-overview#99c3f41a51699)。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6439792471/CAEQVRiBgICTx_7drRkiIDdiNjc3NzI0M2U2ODRlNzg4OGIyODQ1YzNhYjJhMTky4980673_20250318110201.438.svg)
1. [步骤一：嵌入子看板](#b39f148ab9ngs)
2. [步骤二：配置子看板](#18b499bc81698)
3. [步骤三：配置蓝图交互](#21ce8dd788vy5)
4. [步骤四：预览及发布主看板](#3b9c80fd48elz)

## **步骤一：嵌入子看板**

1. 进入主看板的画布编辑页。

  1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
  2. 在**工作台**页面的**数据看板**区域，鼠标悬停至目标看板，单击**编辑**，进入看板的画布编辑页面。
2. 嵌入子看板。  
单击画布编辑页面左侧导航栏的**大屏嵌入**，鼠标悬停至目标看板，单击**添加到画布**，即可将该子看板嵌入至主看板中。

**说明**  
  * 大屏嵌入区域，仅展示当前工作空间下所有已发布的数据看板，且默认嵌入所选看板的最新发布内容。
  * 不支持循环引用。若出现循环引用，编辑页面会提示报错，预览和发布状态下会自动隐藏产生循环引用的内容。例如，当前有A、B、C三个看板，A引用B，B引用C，则C无法再去引用A、B，B无法再去引用A。
  * 您可单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6529792471/p930162.png)图标切换项目分组，或单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7529792471/p930163.png)图标，通过名称快速查找目标数据看板。

## **步骤二：配置子看板**

子看板被嵌入后，该看板的组件、数据等将作为一个整体呈现至主看板中，您可按需进行看板的显示样式及高级交互配置。

### **样式配置**

单击子看板，即可在右侧的**样式**页签配置该看板的位置、透明度、ID等信息。

**说明** 

您也可单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879258.png)图标，通过关键词搜索，快速定位到所需配置项，搜索支持模糊匹配。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7529792471/p930167.png)

相关配置项介绍如下。

|    **配置项**    |    **描述**    |
|    ----    |    ----    |
|    **全局配置**    |    定义子看板在主看板中的位置分布、透明程度、交互穿透。不透明度：数值越小，子看板越透明。取值范围为0\~1内的数值。交互穿透：开启后，鼠标可穿透该子看板，避免主看板中子看板较多时，该看板会遮挡鼠标与下层看板的交互。    |
|    **切换大屏**    |    可快速切换当前工作空间下已发布的数据看板。切换后，当前子看板的显示区域将被所选看板替代，即会呈现您所选的看板内容。    |
|    **大屏ID**    |    系统自动生成，不可编辑。后续可用于交互配置使用。    |
|    **按需加载**    |    开启后，在预览或发布主看板时，将不显示当前子看板。**说明** 后续可通过蓝图驱动，加载子看板内容，该加载过程被认为是一次冷启动（即系统在初始化状态下重新启动）。冷启动加载过程，相较于显隐效果耗时较长。冷启动之后，再进行加载、卸载，由于缓存原因，耗时会相对减少。    |
|    **前往大屏编辑页**    |    单击即可进入当前子看板的画布编辑页面，您可按需编辑看板内容。    |
|    **刷新**    |    当子看板内容变动时，用于获取子看板的最新内容。    |

### **高级配置**

单击子看板，在右侧的**高级**页签可定义子看板与其他子看板/组件间的交互，以及数据传递关系。相关配置项介绍如下。

|    **配置项**    |    **描述**    |    **图示**    |
|    ----    |    ----    |    ----    |
|    交互事件    |    定义与其他子看板/组件间的[交互行为](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)，实现联动。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879478.png)图标，即可定义相关交互事件及交互动作。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6529792471/p930264.png)    |
|    关联全局变量    |    可在子看板中关联全局参数，实现看板/组件间的参数传递，进行交互。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879477.png)图标，即可开启相应指令，并为该指令关联所需[全局变量](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-global-variables)。开启**抛出数据**，默认将看板数据传递给相应全局变量，配置详情请参见[交互配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)。    |    |

## **步骤三：配置蓝图交互**

通过[蓝图交互](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/what-is-blueprint-editor-1)，可实现**组件与子看板**、**不同子看板间**的数据交互或事件透传。

### **操作步骤**

1. 在画布编辑页面，单击顶部菜单栏左侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879479.png)图标，进入蓝图编辑器。
2. 在图层节点列表，鼠标悬停至目标看板/组件，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2907643371/p879480.png)图标，添加所需子看板/组件至主画布。
3. 通过连线方式，按需配置蓝图交互关系及行为逻辑。

  * **示例一**：组件和子看板进行交互，实现当单击按钮时加载子看板1。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7529792471/p930336.png)
  * **示例二**：在子看板之间进行交互。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6529792471/p930372.png)

    1. 子看板1：定义了**抛出折线数据事件**，该事件用于实现单击按钮后，抛出子看板1的折线图数据。
    2. 子看板2：定义了**设置折线图数据动作**，触发该动作后，会将获取到的数据导入至子看板2的折线图。
    3. 主看板：通过蓝图交互，子看板1触发**抛出折线数据事件**，子看板2执行**设置折线图数据动作，**将子看板1的折线图数据导入至子看板2的折线图，实现看板间的数据传递。

### **配置项介绍**

大屏嵌入相关的接口，除系统默认的动作外，您也可按需自定义事件或动作。

**说明** 

可在蓝图配置界面右侧，单击相应动作或事件后的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0734883371/p884551.png)图标，查看相关参数的详细介绍。

配置项介绍如下。

|    **类别**    |    **子类别**    |    **描述**    |
|    ----    |    ----    |    ----    |
|    **系统默认动作**    |    **加载**    |    大屏嵌入特有的接口，用于重新请求子看板的内容并呈现至主看板。    |
|    **卸载**    |    大屏嵌入特有的接口，用于从主看板中彻底清除子看板的所有内容。    |    |
|    **移动**    |    将组件移动到指定位置，数据示例如下。{    // 移动方式。绝对定位：to，相对定位：by。默认值：to。     "positionType": "to",   // 指定位置。x坐标，y坐标。   "attr": {    "x": 0,    "y": 0    },   // 动画方式。   "animation": {     "enable": false,     // 动画延时。    "animationDuration": 1000,     // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。    "animationEasing": "linear"   } }    |    |
|    **切换显隐**    |    切换组件为显示或隐藏，数据示例如下。{   "animationType": "fade",   "animationDuration": 1000,   "animationEasing": "linear" }animationType：动画方式。可配置为appear（出现/消失）、fade（渐隐渐现）、slideToUp（飞入/飞出），不配置表示无动画。animationDuration：动画延时，默认为1000ms。animationEasing：动画曲线。可配置为linear（匀速）、easeInOutQuad（平滑）、easeInOutExpo（慢快慢）。    |    |
|    **显示**    |    |    |
|    **隐藏**    |    |    |
|    **自定义事件或动作**    |    **事件接口**    |    用于上游触发行为。可将子看板内部的处理行为封装为事件，用于在子看板之间进行触发。    |
|    **动作接口**    |    用于将上游的行为传递给下游执行。可将子看板内部的操作封装为动作，用于在子看板之间进行传递。    |    |

### **使用自定义接口**

自定义接口通常用于实现子看板间的交互。您需先在子看板的蓝图编辑器中定义所需的事件或动作，然后进入主看板的蓝图编辑器进行子看板间的交互配置。

1. 子看板定义接口。

  1. 进入相关数据看板的蓝图编辑页面。
  2. 单击左侧导航栏的**大屏接口**，按需定义所需的动作或事件。

**重要**  
    * 支持新增多个事件或动作。若已定义的事件接口/动作接口变更（例如，修改事件名称、新增事件），则蓝图中与该事件/动作交互的内容可能会失效，您需重新配置交互。
    * 事件或动作相关的数据处理逻辑（例如，串行数据处理），请根据自身业务需要配置。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6529792471/p930723.png)
2. 主看板实现交互。  
进入主看板的蓝图编辑页面，通过连线方式配置子看板的交互逻辑。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6529792471/p930753.png)

## **步骤四：预览及发布主看板**

主看板配置完成后，单击看板编辑页面右上角的预览，即可预览数据看板的效果。您可将其[发布](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/publish-and-snapshot-management)上线，部署至相关设备使用。

## **查看引用关系**

您可通过如下两种方式，查看数据看板的引用关系。单击相应编辑页或发布页，即可快速跳转至相应内容。

* **方式一**：在画布编辑页面查看。

**说明**  
该方式仅能通过主看板查看引用关系。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6529792471/p931512.png)
* **方式二**：在工作台页面查看。

**说明**  
该方式支持通过主看板或子看板查看引用关系。若主看板已产生快照，则子看板会将主看板的编辑页、发布页、快照页均统计至引用次数中。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6529792471/p931947.png)

## **管理看板**

登录[DataV控制台](https://datav.aliyun.com/v/console/)，在**工作台** \> **数据看板**区域，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6529792471/p931571.png)图标，即可按需执行数据看板的复制、删除、拷屏等管理操作。使用大屏嵌入功能后，看板的相关管理操作说明如下。

|    **操作**    |    **描述**    |    **说明**    |
|    ----    |    ----    |    ----    |
|    **复制看板**    |    在复制主看板时，系统将自动生成该看板的副本，此副本也将保持与子看板之间的引用关系。    |    不涉及    |
|    **拷屏**    |    拷贝主看板给其他用户时，可按需选择是否将主看板所嵌入的子看板一并拷贝。    |    若（**主看板数量** \+ **子看板数量** \+ **接收看板的工作空间已有的数据看板数量**）超出了该工作空间支持的看板总数量，则此次拷贝会失败。    |
|    **拷屏到工作空间**    |    拷贝主看板到其他工作空间时，会将该看板所嵌入的子看板一并拷贝。    |    |
|    **删除看板**    |    删除看板前，请先关闭相关看板的发布状态。删除子看板后，嵌入该看板的主看板，原有引用内容会以空白展示。删除主看板后，其相关子看板的引用关系会自动断开。    |    **重要** 删除操作不可逆，请谨慎执行。    |

## **案例演示**

### **案例介绍**

本案例是一个端到端的完整流程，将通过一个主看板嵌入两个子看板（子看板1、子看板2），实现如下效果：

* 在主看板中集中展示两个子看板；
* 单击子看板1的按钮，将子看板1的折线图数据传递给子看板2的折线图；
* 在主看板中添加4个按钮组件，分别控制子看板1和子看板2的加载、卸载效果。

您需按照下文，依次完成子看板及主看板的相关配置。

![C5856A1E-C306-4F63-B9EF-C8506FCDC6B2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6529792471/p932079.gif)

### **创建并配置子看板1**

1. 创建数据看板。

  1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
  2. 单击**全部应用** \> **创建PC端看板**，在空白看板处单击**+创建看板**，按照界面指引创建看板，其中，看板名称配置为**子看板1。**创建完成后将默认进入看板的画布编辑页面。
2. 添加并配置组件。  
在该步骤，我们将添加折线图和按钮组件，用于后续进行组件交互。

  * 按下图步骤添加折线图，并替换其数据为我们的测试数据。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6529792471/p931215.png)  
  折线图测试数据  
  ```  
  [  
    {  
      "x": "00:00",  
      "y": 7,  
      "colorField": "标签A"  
    },  
    {  
      "x": "00:00",  
      "y": 18,  
      "colorField": "标签B"  
    },  
    {  
      "x": "01:00",  
      "y": 7,  
      "colorField": "标签A"  
    },  
    {  
      "x": "01:00",  
      "y": 17,  
      "colorField": "标签B"  
    },  
    {  
      "x": "02:00",  
      "y": 12,  
      "colorField": "标签A"  
    },  
    {  
      "x": "02:00",  
      "y": 15,  
      "colorField": "标签B"  
    },  
    {  
      "x": "03:00",  
      "y": 15,  
      "colorField": "标签A"  
    },  
    {  
      "x": "03:00",  
      "y": 15,  
      "colorField": "标签B"  
    },  
    {  
      "x": "04:00",  
      "y": 22,  
      "colorField": "标签A"  
    },  
    {  
      "x": "04:00",  
      "y": 11,  
      "colorField": "标签B"  
    },  
    {  
      "x": "05:00",  
      "y": 25,  
      "colorField": "标签A"  
    },  
    {  
      "x": "05:00",  
      "y": 9,  
      "colorField": "标签B"  
    },  
    {  
      "x": "06:00",  
      "y": 21,  
      "colorField": "标签A"  
    },  
    {  
      "x": "06:00",  
      "y": 10,  
      "colorField": "标签B"  
    },  
    {  
      "x": "07:00",  
      "y": 20,  
      "colorField": "标签A"  
    },  
    {  
      "x": "07:00",  
      "y": 11,  
      "colorField": "标签B"  
    },  
    {  
      "x": "08:00",  
      "y": 20,  
      "colorField": "标签A"  
    },  
    {  
      "x": "08:00",  
      "y": 11,  
      "colorField": "标签B"  
    },  
    {  
      "x": "09:00",  
      "y": 18,  
      "colorField": "标签A"  
    },  
    {  
      "x": "09:00",  
      "y": 15,  
      "colorField": "标签B"  
    },  
    {  
      "x": "10:00",  
      "y": 12,  
      "colorField": "标签A"  
    },  
    {  
      "x": "10:00",  
      "y": 17,  
      "colorField": "标签B"  
    },  
    {  
      "x": "11:00",  
      "y": 10,  
      "colorField": "标签A"  
    },  
    {  
      "x": "11:00",  
      "y": 16,  
      "colorField": "标签B"  
    },  
    {  
      "x": "12:00",  
      "y": 15,  
      "colorField": "标签A"  
    },  
    {  
      "x": "12:00",  
      "y": 15,  
      "colorField": "标签B"  
    },  
    {  
      "x": "13:00",  
      "y": 12,  
      "colorField": "标签A"  
    },  
    {  
      "x": "13:00",  
      "y": 16,  
      "colorField": "标签B"  
    },  
    {  
      "x": "14:00",  
      "y": 10,  
      "colorField": "标签A"  
    },  
    {  
      "x": "14:00",  
      "y": 16,  
      "colorField": "标签B"  
    },  
    {  
      "x": "15:00",  
      "y": 20,  
      "colorField": "标签A"  
    },  
    {  
      "x": "15:00",  
      "y": 12,  
      "colorField": "标签B"  
    },  
    {  
      "x": "16:00",  
      "y": 24,  
      "colorField": "标签A"  
    },  
    {  
      "x": "16:00",  
      "y": 7,  
      "colorField": "标签B"  
    },  
    {  
      "x": "17:00",  
      "y": 28,  
      "colorField": "标签A"  
    },  
    {  
      "x": "17:00",  
      "y": 8,  
      "colorField": "标签B"  
    },  
    {  
      "x": "18:00",  
      "y": 20,  
      "colorField": "标签A"  
    },  
    {  
      "x": "18:00",  
      "y": 10,  
      "colorField": "标签B"  
    },  
    {  
      "x": "19:00",  
      "y": 16,  
      "colorField": "标签A"  
    },  
    {  
      "x": "19:00",  
      "y": 14,  
      "colorField": "标签B"  
    },  
    {  
      "x": "20:00",  
      "y": 14,  
      "colorField": "标签A"  
    },  
    {  
      "x": "20:00",  
      "y": 15,  
      "colorField": "标签B"  
    },  
    {  
      "x": "21:00",  
      "y": 12,  
      "colorField": "标签A"  
    },  
    {  
      "x": "21:00",  
      "y": 17,  
      "colorField": "标签B"  
    },  
    {  
      "x": "22:00",  
      "y": 15,  
      "colorField": "标签A"  
    },  
    {  
      "x": "22:00",  
      "y": 15,  
      "colorField": "标签B"  
    },  
    {  
      "x": "23:00",  
      "y": 20,  
      "colorField": "标签A"  
    },  
    {  
      "x": "23:00",  
      "y": 12,  
      "colorField": "标签B"  
    },  
    {  
      "x": "24:00",  
      "y": 23,  
      "colorField": "标签A"  
    },  
    {  
      "x": "24:00",  
      "y": 10,  
      "colorField": "标签B"  
    }  
  ]  
  ```
  * 按下图步骤添加按钮，并替换为我们所需的样式。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6529792471/p931224.png)
3. 配置组件蓝图交互。  
在该步骤，我们会使用全局变量和大屏嵌入事件接口辅助进行数据传递。先将折线图的数据传递给全局变量**comData**，再定义一个大屏嵌入事件**抛出折线图数据**，实现单击按钮获取全局变量**comData**的数据并抛出给事件**抛出折线图数据**。后续可通过该事件实现与子看板2的数据传递。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6439792471/CAEQVRiBgMDVqsLIrRkiIDQ5MjczMGRkM2ZmMDQ2MDU4NmQ0MWFlM2ZmODc0M2E54980673_20250320132914.439.svg)
  1. 单击画布编辑器左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7529792471/p931238.png)图标，进入蓝图编辑器。
  2. 添加组件至画布。  
  在左侧**图层节点**页签，鼠标悬停至组件，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6529792471/p931298.png)图标，添加组件至画布。  
  您需依次执行该操作，添加折线图、按钮组件至画布。
  3. 创建并添加全局变量。  
  按下图步骤创建全局变量**comData**，创建完成后，鼠标悬停至变量名称，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6529792471/p931288.png)图标，添加全局变量至画布。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6529792471/p931287.png)
  4. 添加数据处理节点。  
  在左侧**逻辑节点**页签，鼠标悬停至**串行数据处理**节点，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6529792471/p931298.png)图标，添加节点至画布。
  5. 创建并添加大屏嵌入事件。  
  按下图步骤，创建并添加**抛出折线图数据**事件至画布**。**  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7529792471/p931310.png)
  6. 按下图连线，并配置串行数据处理节点获取全局变量数据。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7529792471/p931327.png)
4. 单击蓝图编辑页面右上角的**发布**，发布子看板1。

### **创建并配置子看板2**

1. 创建数据看板。

  1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
  2. 单击**全部应用** \> **创建PC端看板**，在空白看板处单击**+创建看板**，按照界面指引创建看板，其中，看板名称配置为**子看板2。**创建完成后将默认进入看板的画布编辑页面。
2. 按下图步骤添加折线图至画布，用于后续进行组件交互。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7529792471/p931353.png)
3. 定义大屏嵌入的动作接口，并配置相关交互。  
在该步骤，我们将自定义一个动作**设置折线图数据**，后续与子看板1的**抛出折线图数据**事件进行交互**，**将该事件抛出的数据，通过该接口传递给子看板2的折线图。

  1. 单击画布编辑器左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7529792471/p931238.png)图标，进入蓝图编辑器。
  2. 添加组件至画布。  
  在左侧**图层节点**页签，鼠标悬停至折线图组件，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6529792471/p931298.png)图标，添加组件至画布。
  3. 创建并添加大屏嵌入动作接口。  
  按下图步骤，创建并添加**设置折线图数据**动作至画布**。**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6529792471/p931397.png)
  4. 按下图连线，实现将动作接口接收到的数据导入至折线图。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6529792471/p931398.png)
4. 单击蓝图编辑页面右上角的**发布**，发布子看板2。

### **创建并配置主看板**

1. 创建数据看板。

  1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
  2. 单击**全部应用** \> **创建PC端看板**，在空白看板处单击**+创建看板**，按照界面指引创建看板，其中，看板名称配置为**主看板。**创建完成后将默认进入看板的画布编辑页面。
2. 嵌入子看板并添加按钮组件。

  * 嵌入子看板：按下图步骤，依次将子看板1、子看板2嵌入至主看板，通过主看板集中呈现两个子看板的内容。

**说明**  
  请合理调整子看板大小，避免图层遮盖，导致功能有误。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6529792471/p931408.png)
  * 添加组件：按下图步骤，依次添加4个按钮组件至主看板，并修改组件的显示名称。后续将使用按钮控制子看板的加载、卸载效果。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6529792471/p931437.png)
3. 配置蓝图交互。

  1. 单击画布编辑器左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7529792471/p931238.png)图标，进入蓝图编辑器。
  2. 在左侧**图层节点**页签，鼠标悬停至相应节点，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6529792471/p931298.png)图标，依次添加所有节点至画布。
  3. 按照下图连线，配置子看板及组件之间的交互。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6529792471/p931455.png)

    1. 将子看板1的折线图数据，传递给子看板2的折线图。
    2. 通过按钮组件，控制子看板的加载、卸载效果。
4. 单击右上角的**预览**，查看主看板的展示效果。您可按需调整看板内容。![C5856A1E-C306-4F63-B9EF-C8506FCDC6B2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6529792471/p932079.gif)
5. 单击右上角的**发布**，发布主看板。