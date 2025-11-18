  在蓝图编辑器中使用时间器实现通用标题定时更新-DataV数据可视化-阿里云

本文档以**时间器**组件控制**通用标题**组件数据更新为例，实现**时间器**触发**通用标题**数据定时更新。

## **效果展示**![时间器_Trim](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3449502861/p635538.png)

## 操作步骤

1.  登录[DataV控制台](https://datav.aliyun.com/)。
2.  选择任一可视化应用，单击编辑，进入画布编辑器页面。
    
3.  添加**时间器**组件和**通用标题**组件到画布中。
    
4.  选择时间器组件，打开**回调设置>定点回调设置**开关，并设置定点抛出时间。例如：2023-04-21 13:45:00。
    
5.  （可选）选择通用标题组件，清空标题。
    
    **说明**
    
    可选，表示在活动未开始时，可视化应用上不显示通用标题的内容。您也可以自定义内容。
    
6.  在图层面板，全选所有组件，右键单击**导出到蓝图编辑器**。
    
7.  连接组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4449502861/p635541.png)
    
8.  配置串行数据处理节点的处理方法。
    
    ```
    return [{value: "活动开始"}];
    ```
    
9.  单击页面右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4449502861/p635542.png)图标，预览展示结果。![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4449502861/p635543.png)