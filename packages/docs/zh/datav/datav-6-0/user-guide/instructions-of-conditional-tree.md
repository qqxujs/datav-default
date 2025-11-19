<!DOCTYPE html> 

条件树用于指定特定逻辑判断，用于组件进行条件样式修改或者设置筛选器样式。本文介绍如何使用条件树。

## **条件树结构**

条件树采用两层嵌套的**并且**或者**或者**连接各个条件，以便组合成各种复杂的逻辑判断（使用合取范式或者析取范式可以组合出任意条件），具体使用详情可参见[配置筛选器](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/introduction-to-features-of-the-data-panel-in-bi-analysis-mode#section-ri4-pjm-jad)。![条件树样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0498737261/p261568.png)

## 条件树示例说明

条件树常用于指定满足特定要求的图元的条件样式，替代以往的组件系列功能。条件样式提供比系列更丰富的样式选项，可以同时改变包括尺寸、颜色、形状在内的各个映射通道。以BI分析模块中的**气泡图**组件为例，示例步骤如下。

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在**我的可视化**页面，单击已创建的可视化应用项目上方的**编辑**。
3. 在画布编辑器页面，单击左上角的![资产列表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4736786261/p297082.png)图标，展开**全部资产**区域。
4. 在**BI分析**模板页面中，单击**气泡图**组件。
5. 在**全部资产**区域中，单击左侧导航栏内的**BI分析**。
6. 在弹出的**更改数据集**对话框中，选择事先准备的数据集。
7. （可选）单击数据集右上角的![编辑图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6633307261/p261820.jpg)图标，即可查看并修改当前数据集的内容，详情请参见[编辑数据集](https://help.aliyun.com/document%5Fdetail/215457.html#task-2061309)。
8. （可选）单击**更改数据集**对话框内的**+创建数据集**或右上角的**管理**进入数据集管理页面。自定义新建一个数据集后，再选择新创建后的数据集，具体创建数据集的方法请参见[添加数据集](https://help.aliyun.com/document%5Fdetail/215456.html#task-2060897)。
9. 将数据集中的字段拖拽添加至图标配置中的相应位置。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1649881861/p634043.png)
10. 打开**条件样式**下方的![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0498737261/p261610.jpg)开关，在当前条件样式面板中，配置条件树样式，设置指定条件，将**y>15且y<31且形状等于技术**的气泡点设置为蓝色填充、橙色粗边框的样式。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1649881861/p634122.png)