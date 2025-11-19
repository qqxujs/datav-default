<!DOCTYPE html> 

逻辑节点可以帮助您设置组件和组件、组件和变量或变量和变量之间的交互逻辑，实现看板内所有元素的交互。本文介绍在蓝图编辑器中，如何配置和使用逻辑节点。

## 使用逻辑节点

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在**我的可视化**页面中，选择一个可视化应用，单击**编辑**。
3. 在画布编辑器页面，单击顶部工具栏的**蓝图编辑器**图标。  
![蓝图编辑器图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7338872261/p80688.png)
4. 在蓝图编辑器页面中，单击顶部工具栏的**逻辑节点**图标。  
![逻辑节点图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6176329461/p66611.png)

**说明**  
  * 如果逻辑节点面板已经显示，可忽略此步骤。
  * 在配置逻辑节点前，请确保您已经添加了对应的导入节点。如果还未添加，请参见[什么是蓝图编辑器](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/what-is-blueprint-editor#task-2517085)进行添加。
5. 在**逻辑节点**面板中，将需要使用的逻辑节点拖入中间画布中。  
逻辑节点包括了**全局节点**、**流程控制**、**数据处理**以及**输入设备**。各节点的使用方法以及参数详情，请分别参见[全局节点](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/global-nodes#concept-2333443)、[流程控制](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/process-control-1#concept-2333444)、[数据处理](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/process-data-1#concept-2333445)和[输入设备](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/input-devices#concept-2333446)。

## 配置逻辑节点

在画布中单击或拖动逻辑节点到画布中，即可在右侧的配置面板中配置节点交互逻辑（**全局节点**不需要配置）。各节点的共同配置如下。

![配置逻辑节点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2901888951/p66648.png)

| **参数**       | **说明**                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---- | ---- |
| **节点名称**     | 自定义逻辑节点的名称，不同的逻辑节点，图标也不同。重命名后可根据图标分辨节点类别和功能。                                                                                                                                                                                                                                                                                                                                                                                                                |
| **上游组件事件说明** | 选择上游组件和事件，并查看参数说明。                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **下游组件动作说明** | 选择下游组件和动作，并查看参数说明。                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **处理方法**     | 新增并配置处理方法，实现各节点的逻辑交互功能。支持的操作如下： **新建**：单击**+**，新增一个处理方法。**重命名**：单击**重命名**（![重命名图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2901888951/p66650.png)）图标，修改处理方法名称。**创建代码片段**：处理方法保存后，单击**创建代码片段**（![创建代码片段图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2901888951/p66651.png)）图标，保存当前**处理方法**到控制台代码片段管理处，实现代码片段的复用。**导入代码片段**：在处理方法编辑框内，右键单击空白处，在**导入代码片段**列表中，选择已保存的代码片段进行导入。**重要** 输入设备类节点和WebSocket节点不需要配置**处理方法**。 |