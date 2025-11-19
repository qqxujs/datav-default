<!DOCTYPE html> 

本文通过区块基础知识介绍和实操案例讲解两部分介绍DataV区块编辑器的功能。

### 介绍

DataV区块编辑器是基于基础组件封装的一个黑盒，对内封装了业务相关的组件样式、组件布局、默认数据（不包含除静态数据和API外的数据源）以及蓝图逻辑。对外定义了业务相关的区块接口。内部和外部的数据传输依靠蓝图的数据接口、事件接口和动作接口节点进行。![区块编辑器介绍](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8650660461/p377190.png)

### 使用场景

区块编辑器主要针对常用场景组件，对其进行封装。支持保存蓝图配置并且可以自定义事件、动作以及数据接口，方便在不同的可视化应用中重复添加使用，相比组件收藏拥有更高的灵活度。下面将两种复用组件的方式进行对比。

* 组件收藏：一般只收藏组件的样式及数据源配置，不收藏蓝图的配置。![组件收藏](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8650660461/p377193.png)
* 区块编辑器：可以保存组件到区块中，包括组件的样式、数据源配置以及蓝图配置。![区块编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8650660461/p377195.png)

### 创建

在Datav控制台中区块编辑器有3种创建方式，包括：

* 在Datav控制台首页，单击**我的资产** \> **我的区块** \> **+新建区块**创建新区块。![创建区块](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8650660461/p377272.png)
* 在Datav控制台首页，单击**我的资产** \> **组件收藏夹** ，选择需要升级的组件，以**垂直胶囊柱状图**为例，单击![升级区块](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6918470461/p377431.png)图标，升级创建成区块。![升级区块](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6918470461/p377432.png)
* 在画布编辑器页面，选择需要导出成区块的组件，以**柱状图**为例，右键单击**导出成区块**来创建区块。![导出区块](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6918470461/p377433.png)

### 使用

在区块编辑器中可以编辑蓝图代码、自定义区块事件、动作和数据接口，以低代码的方式对组件进一步封装，更贴切我们常用场景的使用。![区块编辑器使用](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8650660461/p377198.png)

### 使用大纲

### ![编辑器使用大纲](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8650660461/p377187.png)

## 案例讲解

直播视频内以**折线图**组件为例展示公司年月日不同时间的数据图表。根据**Tab列表**组件切换图表展示，通过模拟该场景介绍区块编辑器的使用。![案例讲解](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7918470461/p377435.png)

## **创建区块**

1. 在Datav控制台首页，单击**我的资产** \> **我的区块** \> **+新建区块**，即可创建一个新区块。![新建区块](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7918470461/p377445.png)
2. 在**选择区块模板**对话框中，单击右下角的**直接创建**。![直接创建](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7918470461/p377447.png)
3. 您可以自定义输入**英文名**和**显示名**的具体内容，并选择一个**预设尺寸**大小，最后单击右下角的**确定**。![新建区块](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7918470461/p377449.png)
4. 创建完成后，您可以在**我的区块**面板中查看到区块的信息。![区块信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7918470461/p377500.png)

  * 删除：您可以单击此处删除创建的区块。
  * 编辑：您可以单击此处重命名编辑区块的名称。
  * 发布信息：您可以单击**查看历史**，查看区块的版本信息。
5. 单击区块，进入区块编辑页面。按照从左往右的顺序依次为图层栏、组件列表、画布编辑器和配置面板。![年度销售额](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8531249561/p474136.png)
  * 配置面板：设置组件的常用样式；
  * 图层栏：展示在画布编辑器中用到的组件；
  * 组件列表：展示常用的组件；
  * 画布编辑器：编辑添加到画布中的组件；
  * ![数据源](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0875821461/p377924.png)图标：数据源配置按钮，可以对组件的数据进行配置；
  * ![蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7918470461/p377532.png)图标：蓝图编辑器按钮，可以切换到蓝图编辑器中；![蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8531249561/p474142.png)

**说明**  
  区块的蓝图编辑器与普通蓝图编辑器的差别，主要在于新增区块接口：**数据接口**、**事件接口**以及**动作接口**。
  * ![预览](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7918470461/p377534.png)图标：预览按钮，可查看预览效果。![预览](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8531249561/p474152.png)

**说明** 

在本直播案例中，您可以单击**年**查看年度销售额；单击**季**，查看季度销售额；单击**月**，查看月度销售额。

## **设置数据接口**

数据接口一般主要用于**Tab列表**组件或者**基本折线图**组件的数据源配置。

1. 在蓝图编辑器中添加**数据接口**节点，单击编辑器右上方![数据接口设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8918470461/p377549.png)图标，对数据接口进行设置。![数据接口节点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1875821461/p377930.png)
2. 您可以在**视图模式**下修改**数据接口显示名**、**字段**及**默认数据**。

  * 数据接口显示名包括**名称**、**显示名**、**描述**以及**数据类型**。其中**数据类型**共有**对象**、**数组**、**任意值**和**无**四种。![修改名称](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8918470461/p377735.png)
  * 字段包括**字段名**、**中文名**、**说明**及**类型**。其中**类型**共有**字符串**、**数值**、**对象**、**数组**、**布尔值**和**二进制**六种。同时，您可以单击![增加](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8918470461/p377745.png)图标增加一个字段；单击![删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8918470461/p377746.png)图标，删除一个字段。![字段](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8918470461/p377757.png)
  * 在**默认数据**种设置静态数据。![静态数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8918470461/p377748.png)
3. 设置完成后，单击![预览](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7918470461/p377534.png)图标，查看预览效果。您也可以修改Tab列表的值，单击**测试**，查看改变后的效果。同时，您也可以在发布后，前往画布编辑器内查看效果。![大屏编辑页效果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8918470461/p377765.png)

**说明**  
  * 您可以通过**代码模式**完成数据接口的设置。
  * 您可以通过单击**新增数据接口**按键，新增一个数据接口。

## **设置事件接口**

将组件的事件定义到区块组件中，抛出该事件供可视化应用调用。

1. 在蓝图编辑器中添加事件接口节点，单击编辑器右上方![事件设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1875821461/p377934.png)图标，对事件接口进行设置。![事件接口节点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1875821461/p377932.png)
2. 您可以在**视图模式**下修改**示例事件名**、**字段**及**默认数据**。![事件接口名](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8918470461/p377770.png)

  * 示例事件名包括**名称**、**显示名**、**描述**及**数据类型**。其中，**数据类型**共有**对象**、**数组**、**任意值**和**无**四种。![示例事件名](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8918470461/p377855.png)
  * 字段包括**字段名**、**中文名**、**说明**及**类型**。其中**类型**共有**字符串**、**数值**、**对象**、**数组**、**布尔值**和**二进制**六种。同时，您可以单击![增加](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8918470461/p377745.png)图标，增加一个字段；单击![删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8918470461/p377746.png)图标，删除一个字段。![字段](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9918470461/p377856.png)
3. 设置完成后，单击![发布](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9918470461/p377859.png)图标，进行区块发布。
4. 区块发布成功后，在画布编辑器页面，选择该区块，右键单击**导出到蓝图编辑器**，在蓝图编辑器页面中可以看到在区块中设置的事件接口信息。![导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9918470461/p377869.png)
5. 您可以过调试预览验证事件触发的正确性。![验证事件接口](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9918470461/p377873.png)

## **设置动作接口**

1. 在区块的蓝图编辑器中，添加**动作接口**节点，并单击右上角动作设置![动作设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9918470461/p377878.png)图标。![动作接口](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9918470461/p377875.png)
2. 您可以在**视图模式**下修改**示例动作名**、**字段**及**默认数据**。

  * 示例动作名包括**名称**、**显示名**、**描述**及**数据类型**。其中**数据类型**共有**对象**、**数组**、**任意值**和**无**四种。![示例动作](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9918470461/p377882.png)
  * 字段包括**字段名**、**中文名**、**说明**、**类型**、**默认值**及**可选值**。其中**类型**共有**字符串**、**数值**、**对象**、**数组**、**布尔值**和**二进制**六种。同时，您可以单击![增加](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8918470461/p377745.png)图标增加一个字段；单击![删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8918470461/p377746.png)图标，删除一个字段。![字段](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9918470461/p377890.png)
3. 设置完成后，在预览页查看动作的设置效果。![预览动作](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9918470461/p377892.png)
4. 您可以对区块进行发布，发布成功后在画布编辑器页面，选择该区块，右键单击**导出到蓝图编辑器**，可以看到在区块中定义的动作。 ![导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9918470461/p377869.png)
5. 在蓝图编辑器中添加一个**串行数据处理**节点，在画布编辑器页面添加一个**Tab列表**组件，实现通过使用可视化应用内的Tab列表控制区块的Tab列表效果。![蓝图设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0028470461/p377904.png)
6. 在预览页查看预览效果。![预览tab](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0028470461/p377905.png)
7. 区块发布成功后，您可以回到DataV控制台，在**我的资产** \> **我的区块**中单击**查看历史**，并可以进行上线和下线发布的版本的操作。

**说明**  
下线版本后无法在资产中添加，但对于已添加的版本没有影响，可以正常使用。

## **视频链接**

DataV小课堂直播视频：[DataV区块编辑器直播视频使用教程](https://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/d/ud/346984755681.mp4)。