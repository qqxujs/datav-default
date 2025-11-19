<!DOCTYPE html> 

条件树用于指定特定逻辑判断，用于组件进行条件样式修改或者设置筛选器样式。本文介绍条件树的具体使用方法。

条件树采用两层嵌套的**并且**或者**或者**连接各个条件，以便组合成各种复杂的逻辑判断（使用合取范式或者析取范式可以组合出任意条件）。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7382919661/p521892.png)

## 条件树示例说明

条件树常用于指定满足特定要求的图元的条件样式，替代以往的组件系列功能。条件样式提供比系列更丰富的样式选项，可以同时改变包括尺寸、颜色、形状在内的各个映射通道。以**气泡图**组件为例，示例步骤如下。

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面，选择任一数据看板，单击**编辑**，进入**画布编辑器**页面。
3. 单击左侧导航栏的**组件库**页签，选择**气泡图**添加至画布中。
4. 单击右侧的**样式**配置面板，单击面板左下方的**标注**。  
![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4256630961/p698179.png)
5. 单击打开条件样式下方的![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0498737261/p261610.jpg)开关，在当前条件样式面板中，配置条件树样式，设置指定条件如下图所示，将**y>6**且**shapeField** **\=家具**的气泡点设置为绿色填充、白色粗边框的样式。  
![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4256630961/p698182.png)