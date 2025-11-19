<!DOCTYPE html> 

## **背景信息**

通过蓝图调试功能，用户可以在编辑器内直接调试组件和变量间的交互逻辑，减少编辑页面的切换，让搭建和调试更加流畅。

## **前提条件**

* 用户购买**企业版**、**专业版**、**尊享版**等产品版本。
* 已创建数据看板，支持[使用模板创建](/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)、[使用空白画布创建](/zh/datav/datav-7-0/getting-started/use-a-canvas-to-create-a-dashboard#639c36877c6jr)、[使用AI智能生成](/zh/datav/datav-7-0/user-guide/use-ai-to-intelligently-generate-pc-side-kanban)。
* 已经添加组件并配置[蓝图](/zh/datav/datav-7-0/user-guide/blueprint-editor-features-of-datav-7)交互事件或动作。

## **进入蓝图调试页面**

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**全部应用**页面，将鼠标悬停至目标数据看板上，单击**编辑**，进入画布编辑器页面。
3. 在数据看板的编辑页面，有四种方式进入蓝图调试。

  1. **方式一：**通过交互模式，在开启交互模式后，显示“蓝图调试”。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1023923.png)图标，显示蓝图调试窗口。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1023791.png)
  2. **方式二：**通过图层/变量面板，点击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1023942.png)图标，显示蓝图调试窗口。

**说明**  
  组件或变量在完成交互配置后，会显示“蓝图调试”按钮图标。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1023788.png)
  3. **方式三：**通过组件交互面板，点击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1023942.png)图标，显示蓝图调试窗口。

**说明**  
  组件完成交互配置后，会显示“蓝图调试”按钮图标。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1023787.png)
  4. **方式四：**在蓝图编辑器中，悬停组件或变量节点，显示“蓝图调试”图标，单击蓝图调试![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1023942.png)图标，显示蓝图调试窗口。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1023786.png)
4. 开启蓝图调试后，编辑器会自动初始化蓝图交互。初始化完成后会触发全局节点、组件/变量请求数据等相关事件。
5. 当进入蓝图调试时，会对如下编辑操作进行限制。

  1. 组件大纲树不可编辑。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1024038.png)
  2. 组件样式不可编辑，单击“**退出蓝图调试”**，可进行编辑。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1024040.png)
  3. 数据源不可编辑，单击“**退出蓝图调试”**，可进行编辑。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1024041.png)
  4. 组件高级面板：“禁止关联全局变量”、“禁止添加、更改交互动作”、“仅可更改交互事件的过滤器、动作配置、条件配置”。单击“**退出蓝图调试”**，可进行编辑。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1024043.png)

## **页面介绍**

进入蓝图调试页面界面后，可对蓝图事件进行调试。页面功能详情如下所示。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1024292.png)

|    **序号**    |    **说明**    |
|    ----    |    ----    |
|    1    |    调试对象筛选工具栏，进行调试对象的选择以及交互路径上下游过滤。    |
|    2    |    交互调试路径画布，展示交互调试路径及调试启动。    |
|    3    |    调试结果窗口，展示调试内容包括“动作/事件参数信息”、“定位参数来源”等。    |

## **蓝图调试流程**

### **选择调试对象**

1. 在数据看板中，完成了交互配置，如下图蓝图配置案例效果。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1023813.png)
2. 在数据看板编辑器上，打开蓝图调试窗口。
3. 在蓝图调试窗口，选择调试对象。

  1. 单击下拉框，将以 Tab 列表形式展示组件和变量，供选择调试对象。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1024118.png)
  2. 选择调试对象后，画布以该节点为中心，展示交互路径。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1024873.png)

**说明**  
  交互路径采用树形结构展示，其中上游仅显示直接关联的一级，下游则展示所有交互路径。
4. 过滤上下游，通过图谱或者下拉框中多选节点，进行路径过滤。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1023826.png)
5. 快速跳转，图谱节点支持以下功能的快速跳转：

  * 查看交互配置，对于由组件交互面板配置的节点，可以快速索引至交互配置。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1023827.png)
  * 查看变量，所有变量可快速索引至相关配置。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1023828.png)
  * 跳转蓝图，所有节点可跳转至蓝图。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1023829.png)

**重要** 
* 调试图谱采用树形结构展示交互路径（每个下游节点仅允许一个父节点），以保持层级清晰。当某个交互实例被多个路径共享时，图谱会以“多副本”的形式呈现。此时，悬停任意一个副本节点，所有属于同一交互实例的节点都会同步高亮。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1023815.png)
* 存在多副本的场景：

  * 蓝图节点实例有多个不同的来源时，如上图。
  * 回环时，解除循环：

    * 蓝图编辑时回环结构如下：  
      ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1023817.png)
    * 蓝图调试视图如下：  
      ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1023818.png)

### **发起调试**

选择调试对象后，有两种发起调试的方式：

* 方式一：通过画布页面操作发起，直接对页面元素进行操作，触发相关事件。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1023811.png)
* 方式二：对于交互调试画布中的节点，悬停在节点的锚点，输入事件或动作参数，点击“运行调试”按钮以触发相关事件或动作。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1025089.png)

**说明**  
节点锚点默认填充最近一次调试参数。

### **查看调试结果**

1. 实时调试结果  
若选中当前调试节点，调试内容会在右侧面板实时展示，同时调试图谱也会展示调试状态。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1023800.png)

  1. 查看动作/事件参数  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1023801.png)
  2. 定位参数来源  
  查看参数来源进一步定位问题，定位跳转逻辑采取以下策略：

    * 从当前参数向上回溯，逐层比对，直到参数发生变化。
    * 选取回溯路径中最后一个相同层级的记录。
    * 判断该记录是否可在组件交互面板呈现。
    * 若可以则打开交互面板，否则跳转至蓝图。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1024881.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1023804.png)
2. 调试历史

  1. 全局调试历史：通过右上角查看全部调试历史，选择目标进行定位。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1024889.png)

    * 默认仅展示已绑定有效动作的事件调试记录，未绑定动作的事件不显示。
    * 定位后，视图会切换至该交互记录的根节点，并过滤掉无关的交互路径，过滤效果对比：  
      ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1023807.png)
  2. 通过节点查看调试历史

    * 选中节点后，右侧显示最新的调试记录，支持切换历史记录查看。  
      ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1023808.png)
    * 若选中的节点不是当前执行记录的根节点，会显示“查看完整执行过程”按钮。  
      ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1024896.png)
* 调试状态重置

  1. 可回退状态，在调试期间产生以下变更可以通过此操作回退。包括“组件样式、位置、显隐变更”、“组件/变量数据变更”。  
  ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1023830.png)
  2. 不可回退状态，部分状态由组件实例维护，需刷新后恢复。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1726472671/p1024899.png)