<!DOCTYPE html> 

本文为您概要介绍DataV-Board 7.0（数据看板）的产品功能架构及核心能力，助力您快速了解产品并投入使用。

## **产品**功能**架构**

DataV-Board 7.0的产品功能架构如下。

![Board核心功能介绍](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7017517271/p849446.png)

1. **底层输入：资产沉淀与数据准备**  
数据看板的本质是由多个组件构成，添加组件后，可通过组件接入多种类型的数据，在看板中展示。您需先将所需组件及数据集成至DataV-Board 7.0：

  * 组件：支持使用[内置组件](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-management/)或自定义的[设计资源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/overview-of-design-resources)、[组件](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/get-started-with-widget-development-of-datav-7)、[区块](https://help.aliyun.com/zh/datav/block-overview)开发可视化应用。
  * [数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/data-source-categories)：支持静态数据、数据库等丰富的数据类型。
2. **搭建过程：可视化低代码搭建**  
您可通过可视化、低代码的方式，根据业务需要将所需组件添加至看板编辑器中，并定义组件的样式、接入的数据，及组件间的交互行为，完成目标看板的搭建。核心功能模块如下。

| **功能类别**                                                                                        | **功能介绍**                                                                                                                                                                                                                                                       | **细分功能**                                                                                                        | **描述**                                                                                                                                                                                                                                                                         |
| ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 可视化编辑器                                                                                          | 数据看板的核心编辑区域。                                                                                                                                                                                                                                                   | 画布编辑器                                                                                                           | 主要用于添加并管理组件、接入数据源、配置组件样式、发布及分享看板等。DataV-Board 7.0支持创建PC端或移动端看板，不同类型看板的编辑操作存在差异，可按需选择。[PC端画布编辑器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/canvas-editor-on-pcs/)[移动端画布编辑器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/canvas-editor-on-mobile-devices/) |
| [三维城市构建器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/create-a-3d-city)               | 用于将实际的城市地理信息、建筑信息和交通信息等数据进行数字化处理，创建出一个真实感的虚拟城市模型。常用于城市规划、土地利用规划、建筑设计、环境监测等方面。可基于官方基底数据或[空间数据项目](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/getting-started-with-spatial-data-construction-platform-of-datav-7)构建三维城市。**说明** 创建的三维城市可作为城市组件添加至画布中展示。 |                                                                                                                 |                                                                                                                                                                                                                                                                                |
| [组件库](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-management/)                 | DataV-Board 7.0提供的主要基础组件如下：图表组件库：可将复杂的数据以直观的图形方式展示。地理组件库：提供丰富的地理信息处理能力，帮助您更好地使用及展示地理数据。[交互组件库](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-operations-in-a-canvas)：提供多种与界面进行交互的元素，可进行操作、输入数据、控制视图等，提升产品的可用性。                                  |                                                                                                                 |                                                                                                                                                                                                                                                                                |
| 蓝图交互编辑器                                                                                         | 数据看板中组件交互的核心配置区域。                                                                                                                                                                                                                                              | [图层节点](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configure-layer-nodes)                             | 用于进行交互的主体。画布编辑器中添加的组件，将在蓝图编辑器中生成对应图层节点。                                                                                                                                                                                                                                        |
| [逻辑节点](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/logical-node-configuration/)       | 用于设置组件和组件、组件和变量、变量和变量之间的交互逻辑，实现看板内所有元素的交互。                                                                                                                                                                                                                     |                                                                                                                 |                                                                                                                                                                                                                                                                                |
| [逻辑组合](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/logical-combination-configuration) | 用于将部分节点和连线（即逻辑关系）封装和复用。若数据之间的处理过程类似、交互复杂，可将相关处理操作生成逻辑组合，进行封装及复用。**说明** 添加至主画布的**逻辑组合节点**与**逻辑组合**为引用关系，修改逻辑组合的名称、内容，均会影响主画布上所有相关的逻辑节点。                                                                                                                         |                                                                                                                 |                                                                                                                                                                                                                                                                                |
| [过滤器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/filters/)                           | 用于自定义过滤代码，实现数据结构转换、数据筛选、展示和简单的计算。可被画布编辑器/蓝图编辑器中的组件/节点调用。                                                                                                                                                                                                       |                                                                                                                 |                                                                                                                                                                                                                                                                                |
| [全局变量](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/global-variable-configuration)     | 用于定义全局参数，可在目标组件中关联，实现组件间的参数传递，进行组件交互。可被画布编辑器/蓝图编辑器中的组件/节点关联。                                                                                                                                                                                                   |                                                                                                                 |                                                                                                                                                                                                                                                                                |
| AI设计辅助                                                                                          | 使用AI方式辅助创建看板并美化样式。                                                                                                                                                                                                                                             | [AI大屏生成](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-ai-to-intelligently-generate-pc-side-kanban) | 通过对话方式提出需求，AI助手将根据您的需求自动生成符合要求的看板。                                                                                                                                                                                                                                             |
| [一键美化](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/one-click-beautification)          | 快速调整看板布局，通过内置样式丰富看板内容，解决设计看板时的整体样式配置问题。                                                                                                                                                                                                                        |                                                                                                                 |                                                                                                                                                                                                                                                                                |
| [智能主题](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/smart-theme-for-canvas-on-pcs)     | 快速切换大屏整体色彩方案。                                                                                                                                                                                                                                                  |                                                                                                                 |                                                                                                                                                                                                                                                                                |
| 可视化应用中心                                                                                         | 数据看板的展示区域。                                                                                                                                                                                                                                                     | [可视化演播厅](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/visual-studio)                                   | 将已创建的看板按照期望顺序排列，进行投屏展示。                                                                                                                                                                                                                                                        |
| 私有部署                                                                                            | 可将已创建的看板打包，部署至其他应用。                                                                                                                                                                                                                                            | \-                                                                                                              | \-                                                                                                                                                                                                                                                                             |
3. **结果产出：数据看板**  
通过DataV-Board 7.0，您可生成覆盖多种行业的数据看板。例如，演示汇报系统、领导驾驶舱等。

## 核心能力介绍

### **数据接入与准备**

* 提供丰富的数据接入能力，支持阿里云及各类开源数据源。
* 提供数据集的管理与轻量化加工能力，使业务人员可快速处理数据，满足可视化分析与展示需求。
* 提供组件级别的数据处理、代码智能生成能力，实现业务数据自动适配。

![e8525b14-11b5-40a0-a941-1a7b5ef3b4e6](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7017517271/p849479.gif)

### **可视化渲染**

* 提供400多种可视化组件、100多种地理图元，可高效地帮助您实现数据精准表达，呈现数据之美。
* 自研二三维一体化渲染引擎，实现海量时空数据实时渲染。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7017517271/p849475.png)

### **低代码搭建**

* 提供低代码的蓝图编辑器，初级开发人员也能快速上手进行交互开发。
* 丰富的组件与蓝图配合，轻松构建具备复杂交互的可视化应用。
* 交互逻辑可视化呈现，便于业务理解、项目交接与运维。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7017517271/p849476.png)

### **AI设计辅助**

* 提供“对话式”大屏生成方式。​通过“业务对话”生成数据大屏，覆盖指标、布局、图表及风格，支持在一个上下文环境内迭代改进大屏。​
* 提供智能配色能力，可识别您上传的图片，提取色彩主题，快速应用到页面中。
* 提供一键美化能力，帮助开发者快速完成设计优化。

![8cb45d74-e306-49ac-aa66-a2a6c4dbce93](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7017517271/p849478.gif)

## **后续步骤**

熟悉DataV-Board 7.0产品的功能架构及核心能力后，您可参考[操作指引](https://help.aliyun.com/zh/datav/datav-7-0/getting-started/function-overview)，了解数据看板的完整搭建流程。