<!DOCTYPE html> 

本文以**定时器**逻辑节点为主要节点，实现**单张图片**组件的定时彩蛋展示效果。

## 效果展示

![cai_Trim.gif](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7829420961/p696674.gif)

## **操作步骤**

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 选择任一数据看板，单击**编辑**，进入画布编辑器页面。
3. 添加3个**通用标题**组件和1个**单张图片**组件到画布中。
4. 单击**单张图片**组件，选择配置面板，修改背景图为事先准备的彩蛋动图。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7829420961/p696656.png)
5. 单击任一通用标题组件，在右侧样式配置面板，修改标题名称和**标题内容**为需要设置的数字，例如：3。重复操作设置其他两个通用标题组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3184008571/p1007220.png)
6. 在**图层**面板，全选所有组件并隐藏。
7. 单击画布左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3184008571/p1007223.png)图标，切换至蓝图编辑器，将所有图层节点添加至蓝图主画布中。
8. 单击**逻辑节点**，添加3个定时器节点、1个全局节点和1个串行数据处理节点到蓝图主画布中。
9. 连接组件。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7829420961/p696665.png)
10. 配置定时器的延迟时间。定时器1为1秒，定时器2为2秒，定时器3为3秒。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7829420961/p696666.png)
11. （可选）您也可以设置为定点定时，根据当前时间自行计算需要显示彩蛋的时间，此处不再赘述。
12. 单击页面右上角的**预览**图标，预览展示结果。![cai_Trim.gif](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7829420961/p696674.gif)