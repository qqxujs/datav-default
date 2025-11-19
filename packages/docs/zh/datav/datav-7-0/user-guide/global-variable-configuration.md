<!DOCTYPE html> 

在蓝图编辑器中，全局变量是在整个蓝图范围内共享和使用的变量，用于实现组件之间的参数传递。其值可以在运行时动态更新，从而实现交互逻辑的动态响应。本文介绍全局变量的概念及其在蓝图编辑器的使用方法。

## **准备工作**

### **前提条件**

已经创建[PC端数据看板项目](/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)。

### **进入全局变量页面**

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**全部应用**界面，鼠标悬停至目标看板，单击**编辑**。
3. 在数据看板的编辑页面，单击顶部菜单栏的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6259567271/p853682.png)图标，进入蓝图编辑器，单击主画布左侧**全局变量**，显示**全局变量配置。**

进行全局变量配置前，您需先了解蓝图编辑器的[界面布局](/zh/datav/datav-7-0/user-guide/blueprint-editor-features-of-datav-7#section-lh4-o9o-299)及[操作介绍](/zh/datav/datav-7-0/user-guide/blueprint-editor-features-of-datav-7#section-w05-9to-kmy)。

## **配置全局变量**

### **新建全局变量**

单击**新建变量**，根据如下字段，配置变量说明。

|    参数    |    说明    |
|    ----    |    ----    |
|    **变量名**    |    全局变量的名称。    |
|    **描述**    |    全局变量的描述信息。    |
|    **来源**    |    全局变量的来源，包括**静态值**、**数据源请求**和**从 url 查询条件获取**。**说明** 不同来源类型使用方式，请参见[全局变量](/zh/datav/datav-7-0/user-guide/use-global-variables)。    |
|    **初始值**    |    全局变量初始默认值。    |
|    **过滤器**    |    可选，通过添加数据过滤器进一步筛选所需数据。详情请参见[过滤器配置与使用](/zh/datav/datav-7-0/user-guide/use-filters-in-canvas-on-pcs)。    |
|    **数据响应结果**    |    在全局变量的参数设置完成后，系统的响应结果，不同的变量类型响应结果不同。    |
|    **受控模式**    |    开启后，变量初始值无效。    |
|    **自动更新**    |    开启后，可设置动态轮询，还可以手动输入轮询的时间频次。    |

### **管理全局变量**

**说明** 

单击已创建的全局变量名称，可以展开或收起该变量的详细信息。

* 鼠标悬浮在变量上时，单击变量右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3900845471/p916276.png)图标，对变量进行重命名操作。
* 鼠标悬浮在变量上时，单击变量右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3900845471/p916275.png)图标，对变量进行复制操作。
* 鼠标悬浮在变量上时，单击变量右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3900845471/p916274.png)图标，对变量进行删除操作。
* 鼠标悬浮在变量上时，单击变量右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6202919661/p521667.png)图标，添加变量到蓝图主画布中。

**重要**  
  * 删除变量无法恢复，请谨慎操作。
  * 删除变量前，需要取消引用当前变量，详情请参见[组件交互配置](/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)。

## **使用全局变量**

1. 在主画布中添加需要使用的图层，单击顶部菜单栏中的![{CF99DEA7-1F70-499C-B305-121973EF06EB}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4610494471/p916239.png)图标进入蓝图编辑器。示例中使用Tab列表和通用标题组件。![{E6BB06E3-2100-4175-96A9-3AAB8454A61E}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3900845471/p916471.png)
2. 单击左侧导航栏的**全局变量**，进入全局变量页面。
3. 在全局变量列表中，[新建全局变量](#06f2c371e5xrq)。
4. 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6202919661/p521667.png)图标，将全局变量添加到蓝图主画布中并连线。例如：通过点击**Tab列表**，将事件传递给**全局变量**，经过全局变量处理后，处理后的数据将通过数据接口导入**通用标题**组件中。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3900845471/p916643.png)
5. 预览或发布当前数据看板，查看交互效果。![2025-02-14_10-29-49](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3900845471/p916648.gif)

## **相关案例**

您可以参考以下案例了解更多全局变量能力：

* [全局变量案例演示](/zh/datav/datav-7-0/user-guide/example-of-using-global-variables)
* [如何使用全局变量实现按日期查询](/zh/datav/datav-7/videos/how-to-use-global-variables-to-query-by-date)
* [如何使用全局变量实现数据筛选](/zh/datav/datav-7/videos/how-to-use-global-variables-to-filter-data)
* [如何使用全局变量实现数据分发和数据相加](/zh/datav/datav-7/videos/how-to-use-global-variables-to-distribute-data-and-sum-data)