# 实现定点彩蛋 %{#200113}% 

本文以**定时器**逻辑节点为主要节点，实现**单张图片**组件的定时彩蛋展示效果。

## 效果展示

![彩蛋_Trim](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6691770861/p621212.png)

## **操作步骤**

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 选择任一可视化应用，单击编辑，进入画布编辑器页面。
3. 添加3个**通用标题**组件和1个**单张图片**组件到画布中。
4. 单击单张图片组件，选择配置面板，修改背景图为事先准备的彩蛋动图。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6691770861/p621242.png)
5. 单击任一通用标题组件，选择配置面板，修改**标题名**为需要设置的数字，例如：3。并将组件名称修改为3。重复操作设置其他两个通用标题组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6691770861/p621250.png)
6. 在图层面板，全选所有组件，右键单击导出到蓝图编辑器并隐藏组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6691770861/p621256.png)
7. 切换至蓝图编辑器中，将所有组件节点添加至蓝图画布中。
8. 连接组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6691770861/p621269.png)
9. 配置定时器的延迟时间。定时器1为1秒，定时器2为2秒，定时器3为3秒。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6691770861/p621278.png)
10. （可选）您也可以设置为定点定时，根据当前时间自行计算需要显示彩蛋的时间，此处不再赘述。
11. 单击页面右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6691770861/p621301.png)图标，预览展示结果。![彩蛋_Trim](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6691770861/p621212.png)