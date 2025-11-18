 

## **效果展示**![dv_Trim.gif](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3446330961/p697461.gif)

## 操作步骤

1.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
2.  选择任一数据看板，单击**编辑**，进入画布编辑器页面。
    
3.  添加3个**数字翻牌器**组件到画布中。
    
4.  单击任一数据翻牌器，选择**样式**面板，修改**标题 > 标题名**为**上半年销售额**，在图层面板双击修改组件名称为**数字翻牌器-上半年**。重复操作配置其他两个数字翻牌器组件。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2446330961/p697121.png)
    
5.  选择全局变量页签，单击**新建变量**，创建1个来源为**数据源请求**类型的命名为A的动态变量。
    
6.  以数据库为例，输入SQL命令。
    
    ```
    select floor(rand()*(1000)+1) as value
    ```
    
7.  重复上述操作，再创建一个命名为B的动态变量。
    
8.  切换到蓝图编辑器。
    
9.  添加所有图层节点、所有全局变量、2个定时器节点和2个串行数据处理节点到蓝图主画布中。
    
10.  连接组件。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3446330961/p697447.png)
     
11.  选择**定时器**节点，在右侧配置面板中打开**是否循环**，设置**延迟时间**为3秒。
     
12.  配置串行数据处理节点处理方法。
     
     -   A+变量B
         
         ```
         return [{
           value: data[0].value + getCallbackValue("B")[0].value
         }]
         ```
         
     -   B+变量A
         
         ```
         return [{
           value: data[0].value + getCallbackValue("A")[0].value
         }]
         ```
         
13.  单击页面右上角的**预览**图标，预览展示结果。![dv_Trim.gif](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3446330961/p697459.gif)