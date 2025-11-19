<!DOCTYPE html> 

本文以**按钮**组件控制**页面导航**节点为例，实现数字大屏中的自定义网站跳转。

## **效果展示**![23](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0955950861/p619402.png)

## **操作步骤**

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 选择任一数据看板，单击**编辑**，进入画布编辑器页面。
3. 添加**按钮**组件，并修改**样式**面板**全局样式>文字内容**为**点我跳转**。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7230299861/p696249.png)
4. 单击左上角的![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7230299861/p696250.png)图标，进入蓝图。
5. 将左侧**图层节点**页签下的按钮节点和**逻辑节点**栏内的**导航**节点和**串行数据处理**节点拖至蓝图画布中。
6. 连接组件。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7230299861/p696257.png)
7. 配置串行数据处理节点处理方法。  
```  
return { id: 'datav-hello' }  
```
8. 单击**导航**节点，打开右侧**配置面板**，在面板的**链接地址**内，自定义输入需要跳转网页的URL地址。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8230299861/p696252.png)
9. （可选）实现带入参数到新打开的页面的效果：增加请求参数，设置参数名为`id`，参数值为`0`。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8230299861/p696254.png)
10. 单击页面右上角的**预览**图标，预览展示结果。![23](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0955950861/p619402.png)