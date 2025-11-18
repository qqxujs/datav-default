  使用蓝图编辑器通过一次请求为多个组件分发数据-DataV数据可视化-阿里云

本文以**通用标题**组件请求数据，分发给**数字翻牌器**和**多行文本**组件，完成数据更新为例，介绍如何通过合并请求进行数据分发。

## **效果展示**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6148322861/p635984.png)

## **使用场景**

多个组件的数据可以通过API或SQL数据源等一次获取，再进行数据分发，减少数据请求次数。

## **操作步骤**

1.  登录[DataV控制台](https://datav.aliyun.com/)。
2.  选择任一可视化应用，单击编辑，进入画布编辑器页面。
    
3.  添加**通用标题**组件、**多行文本**组件和**数字翻牌器**组件到画布中。
    
4.  选择数字翻牌器组件，清空**标题名**、**前缀内容**和**后缀内容**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6148322861/p635996.png)
    
5.  移动**通用标题**组件到画布外，并修改静态数据。
    
    **说明**
    
    **通用标题**组件只用于请求数据，放置于画布外，在预览发布时不会显示在数字大屏上。
    
    ```
    [{
      "num": "123",
      "text": "这是多行文本组件",
      "value": "接收数据组件"
    }]
    ```
    
6.  选中所有组件，右键单击**导出到蓝图编辑器**。
    
7.  添加**序列执行节点**，连接组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6148322861/p635998.png)
    
8.  配置序列执行节点的处理方法。
    
    -   取文本数据
        
        ```
        return [{value: data[0].text}];
        ```
        
    -   取翻牌器数据
        
        ```
        return [{value: data[0].num}];
        ```
        
9.  单击页面右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6148322861/p635999.png)图标，预览展示结果。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7148322861/p636000.png)