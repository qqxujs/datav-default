<!DOCTYPE html> 

本文为您介绍，如何在请求数据接口时传递动态参数，实现**Tab列表**和基础平面地图下的**区域热力层**联动。

## **效果展示**![2024-12-05_11-15-26](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5551833371/p883473.gif)

## **操作步骤**

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 选择任一数据看板，单击**编辑**，进入画布编辑器页面。
3. 添加**Tab列表**组件和**基础平面地图**组件到画布中。
4. 单击Tab列表组件，选择**数据源**面板，修改静态数据。  
```  
[  
  {  
    "id": 1,  
    "content": "610000"  
  },  
  {  
    "id": 2,  
    "content": "330000"  
  },  
  {  
    "id": 3,  
    "content": "320000"  
  }  
]  
```
5. 选择**全局变量**页签，单击**新建变量**，重命名为**code**。
6. 单击基础平面地图组件下的**区域热力层**子组件，选择**数据源**面板下的**地理边界geojson数据接口**，设置数据源为API，输入URL地址。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9992653961/p697934.png)  
```  
https://geo.datav.aliyun.com/areas_v3/bound/geojson?code=:code//使用全局变量code替换":code"  
```
7. 切换到蓝图编辑器。
8. 将区域热力层节点、Tab列表节点、全局变量节点和**逻辑节点**页签下的1个串行数据处理节点添加到蓝图主画布中。
9. 连接组件。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9992653961/p697937.png)
10. 配置串行数据处理节点的处理方法。  
```  
return data.content;  
```
11. 单击页面右上角的**预览**图标，预览展示结果。![2024-12-05_11-15-26](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5551833371/p883472.gif)