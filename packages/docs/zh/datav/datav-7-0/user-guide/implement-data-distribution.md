 

本文以**通用标题**组件请求数据，分发给**数字翻牌器**和**多行文本**组件，完成数据更新为例，介绍如何通过合并请求进行数据分发。

## **效果展示**![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3566330961/p697510.png)

## **使用场景**

多个组件的数据可以通过API或SQL数据源等一次获取，再进行数据分发，减少数据请求次数。

## **操作步骤**

1.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
2.  选择任一数据看板，单击**编辑**，进入画布编辑器页面。
    
3.  添加**通用标题**组件、**多行文本**组件和**数字翻牌器**组件到画布中。
    
4.  单击数字翻牌器组件，在样式配置面板中清空**标题内容**。
    
5.  单击多行文本组件，选择数据源页签，打开受控模式开关。
    
6.  移动通用标题组件到画布外，并修改静态数据。
    
    **说明**
    
    通用标题组件只用于请求数据，放置于画布外，在预览发布时不会显示在数字大屏上。
    
    ```
    [{
      "num": "123",
      "text": "这是多行文本组件",
      "value": "接收数据组件"
    }]
    ```
    
7.  切换到蓝图编辑器。
    
8.  添加所有图层节点到蓝图主画布中。
    
9.  单击**逻辑节点**，添加1个序列执行节点到蓝图主画布中，新增一个事件接口并重命名。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3566330961/p697500.png)
    
10.  连接组件。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2049083961/p714697.png)
     
11.  配置序列执行节点的处理方法。
     
     -   获取文本
         
         ```
         return [{value: data[0].text}];
         ```
         
     -   获取数字
         
         ```
         return [{value: data[0].num}];
         ```
         
12.  单击页面右上角的**预览**图标，预览展示结果。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3566330961/p697507.png)