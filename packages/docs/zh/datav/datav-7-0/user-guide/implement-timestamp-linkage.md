 

本文档以**时间器**组件和**通用标题**组件之间联动查询组件，实现每隔3秒动态显示当前时间戳。

## **效果展示**![1dde_Trim.gif](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2163910961/p697041.gif)

## 操作步骤

1.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
2.  选择任一数据看板，单击**编辑**，进入画布编辑器页面。
    
3.  添加**时间器**组件和**通用标题**组件到画布中。
    
4.  单击时间器组件，在右侧样式面板中打开**回调配置>定时回调设置**开关，并将**回调抛出间隔**设置为3000ms。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2163910961/p696930.png)
    
5.  选择通用标题组件，选择**数据源**页签，设置数据源类型为**数据库**，在SQL输入框中输入以下SQL语句。
    
    ```
    select unix_timestamp() as value//获取当前时间戳
    ```
    
6.  切换到蓝图编辑器。
    
7.  添加所有图层节点和**逻辑节点**页签下的1个串行数据处理节点到蓝图主画布中。
    
8.  连接组件。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3163910961/p697038.png)
    
9.  配置串行数据处理节点的处理方法。
    
    ```
    return {
      start_time:new Date(data.time).valueOf() - 60 * 1000, // 当前时间前 60s
      end_time:new Date(data.time).valueOf() // 当前时间
    } 
    ```
    
    原理：
    
    -   **时间器**组件在设置了定时触发后，每3s会抛出一次**当时间变化时**的事件，事件中包含**time: 当前时间**。
        
    -   **通用标题**组件的**请求数据接口**动作接收到上游传过来的内容后，将上游内容比如**x: 1**作为发起请求时的**query**参数， 并发起请求。
        
    -   **串行数据处理**节点负责将上游抛出的事件内容进行加工处理，传递给**通用标题**组件作为请求时的**query**参数，也就是替换掉第二步操作中填写的**变量名**。
        
10.  单击页面右上角的**预览**图标，预览展示结果。![1dde_Trim.gif](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2163910961/p697040.gif)