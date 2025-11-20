<!DOCTYPE html> 

逻辑组合是通过可视化方式封装和复用节点连接的交互逻辑系统，用于构建数据驱动的动态交互效果。本文将详细介绍其新增、配置和管理等核心功能。

## **使用须知**

添加到主画布的**逻辑节点**与**逻辑组合**是引用关系，修改逻辑组合的名字、内容，均会影响主画布上所有的逻辑节点。

## **前提条件**

已创建数据看板，支持[使用模板创建](/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)、[使用空白画布创建](/zh/datav/datav-7-0/getting-started/use-a-canvas-to-create-a-dashboard#639c36877c6jr)、[使用AI智能生成](/zh/datav/datav-7-0/user-guide/use-ai-to-intelligently-generate-pc-side-kanban)。

## **进入逻辑组合**

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**全部应用**界面，鼠标悬停至目标看板，单击**编辑**。
3. 在数据看板的编辑页面，单击顶部菜单栏的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6259567271/p853682.png)图标，进入蓝图编辑器，单击主画布左侧的**逻辑组合**，显示逻辑组合配置**。**

进行逻辑组合配置前，您需先了解蓝图编辑器的[界面布局](/zh/datav/datav-7-0/user-guide/blueprint-editor-features-of-datav-7#section-lh4-o9o-299)及[操作介绍](/zh/datav/datav-7-0/user-guide/blueprint-editor-features-of-datav-7#section-w05-9to-kmy)。

## **新增逻辑组合**

1. 单击蓝图编辑器中的**逻辑组合** \> **新增逻辑组合**，逻辑组合画布中将出现**输入**和**输出**两个组件。
2. 可选，单击输入组件后，可在右侧锚点配置面板中新增输入锚点；单击输出组件后，可在右侧锚点配置面板中新增输出锚点。
3. 单击左侧导航栏的**逻辑节点**，进入逻辑节点页面添加需要的逻辑节点。例如：串行数据处理节点。
4. 如图连接节点，设置数据处理方法后，完成新增逻辑组合操作。![{017C849E-FAF6-45FA-91C4-BE25A4A2CA93}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2075147471/p916184.png)
5. 单击画布顶部的**回到主画布**，可以返回画布编辑页。

## **管理逻辑组合**

### **重命名逻辑组合**

在逻辑组合页面中，鼠标悬停至目标逻辑组合上，单击![{CC5CA1E9-372E-4A25-8A0D-2FCF7A3AC7EB}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4610494471/p916197.png)图标重命名逻辑组合。

### **删除逻辑组合**

在逻辑组合页面中，鼠标悬停至目标逻辑组合上，单击![{D6326526-56AA-40E2-8F70-5398F062FEC1}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4610494471/p916199.png)图标删除逻辑组合。

**重要** 

逻辑组合删除后无法恢复，请谨慎操作。

### **下钻逻辑组合**

在逻辑组合页面中，鼠标悬停至目标逻辑组合上，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9451380761/p521660.png)图标，下钻到逻辑组合画布中。

## **添加到蓝图主画布**

在逻辑组合页面中，鼠标悬停至目标逻辑组合上，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6202919661/p521667.png)图标，将逻辑组合添加到蓝图主画布中。

## **使用逻辑组合**

1. 在主画布中添加需要使用的图层节点，示例中使用数字翻牌器和柱状图节点。  
单击顶部菜单栏中的![{CF99DEA7-1F70-499C-B305-121973EF06EB}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4610494471/p916239.png)图标，进入蓝图编辑器，添加图层节点到蓝图画布中。
2. 单击蓝图编辑器中的**逻辑组合** \> **新增逻辑组合**，进入逻辑组合画布中，配置需要添加的逻辑节点。示例中添加计时器节点，并将延迟时间配置为2秒。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4610494471/p944169.png)
3. 配置完成后，单击**回到主画布**，进入蓝图主画布编辑页。
4. 在逻辑组合列表中，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6202919661/p521667.png)图标，将已完成的逻辑组合添加到蓝图主画布中。
5. 在主画布中配置蓝图编辑器，如下图所示：

**实现效果：**当点击翻牌器时，计时器开始计时，2秒后计时结束，切换柱状图的显隐效果。  
![{6E6DB52D-0E29-476B-B533-235E4299B22B}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4610494471/p944214.png)
6. 预览或发布当前数据看板，查看交互效果。![2025-04-17_11-13-21](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4610494471/p944170.gif)