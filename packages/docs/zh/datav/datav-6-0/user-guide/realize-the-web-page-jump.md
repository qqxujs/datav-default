# 实现网页跳转 %{#423343}% 

本文以**按钮**组件控制**页面导航**节点为例，实现数字大屏中的自定义网站跳转。

## **效果展示**![23](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0955950861/p619402.png)

## **操作步骤**

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 选择任一可视化应用，单击编辑，进入画布编辑器页面。
3. 添加按钮组件，并修改配置面板**全局样式>文字内容**为**点我跳转**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9855950861/p619360.png)
4. 右键组件，导出到蓝图编辑器。
5. 将左侧节点栏内的**按钮**节点和逻辑节点栏内的**页面导航**节点拖至蓝图画布中。
6. 连接组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9855950861/p619363.png)
7. 单击**页面导航**逻辑节点，进入右侧**配置面板**，选择面板内**其他配置**栏下方的**链接地址**，自定义输入所需跳转网页的URL地址。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9855950861/p619381.png)
8. （可选）实现带入参数到新打开的页面的效果：增加请求参数，设置参数名为`id`，参数值为`0`。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9855950861/p619380.png)
9. 添加一个**串行数据处理**节点到**按钮**和**页面导航**节点的连线之间，并设置**串行数据处理**节点的处理方法。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9855950861/p619371.png)  
串行数据处理节点处理方法  
```  
return { id: 'datav-hello' }  
```
10. 单击页面右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9855950861/p619373.png)图标，预览展示结果。![23](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0955950861/p619402.png)