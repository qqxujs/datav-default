<!DOCTYPE html> 

本文为您介绍，如何在请求数据接口时传递动态参数，实现**Tab列表**和基础平面地图下的**区域热力层**联动。

## **效果展示**![动态传参](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0390032861/p636341.png)

## **操作步骤**

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 选择任一可视化应用，单击编辑，进入画布编辑器页面。
3. 添加**Tab列表**组件和**基础平面地图**组件到画布中。
4. 单击Tab列表组件，选择数据面板，修改静态数据。  
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
5. 单击基础平面地图组件下的区域热力层子组件，选择**数据**面板下的**地理边界geojson数据接口**，设置数据源为API，输入URL地址。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1390032861/p636370.png)  
```  
https://geo.datav.aliyun.com/areas_v3/bound/geojson?code=:code  
```
6. 在图层面板，全选所有组件，右键单击**导出到蓝图编辑器**。
7. 连接组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1390032861/p636375.png)
8. 配置串行数据处理节点的处理方法。  
```  
return { code: data.content };  
```
9. 单击页面右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0390032861/p636376.png)图标，预览展示结果。![动态传参](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8290032861/p636377.png)