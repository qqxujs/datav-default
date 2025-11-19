<!DOCTYPE html> 

本文档以**时间器**组件控制**通用标题**组件数据更新为例，实现**时间器**触发**通用标题**数据定时更新。

## **效果展示**![ssq_Trim.gif](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6583910961/p697051.gif)

## 操作步骤

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 选择任一数据看板，单击**编辑**，进入画布编辑器页面。
3. 添加**时间器**组件和**通用标题**组件到画布中。
4. 选择时间器组件，打开**回调设置>定点回调设置**开关，并设置定点抛出时间。例如：2023-07-24 16:05:00。
5. （可选）选择通用标题组件，清空标题。

**说明**  
可选，表示在活动未开始时，可视化应用上不显示通用标题的内容。您也可以自定义内容。
6. 切换至蓝图编辑器。
7. 添加所有图层节点和逻辑节点页签下的1个串行数据处理节点到蓝图画布中。
8. 连接组件。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7583910961/p697047.png)
9. 配置串行数据处理节点的处理方法。  
```  
return [{value: "活动开始"}];  
```
10. 单击页面右上角的**预览**图标，预览展示结果。![ssq_Trim.gif](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7583910961/p697053.gif)