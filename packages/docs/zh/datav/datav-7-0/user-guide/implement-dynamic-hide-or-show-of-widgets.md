<!DOCTYPE html> 

本文档以**Tab列表**控制**区域图**和**基本柱状图**的显隐为例，实现组件显隐的动态展示。

## **效果展示**

* Tab列表ID实现![dd_Trim.gif](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3422810961/p696847.gif)
* 轮播容器实现![w1w_Trim.gif](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3422810961/p696873.gif)

## **操作步骤**

### **Tab列表ID实现**

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 选择任一数据看板，单击**编辑**，进入画布编辑器页面。
3. 添加**Tab列表**组件、**区域图**组件和**柱状图**组件到画布中。
4. 切换到蓝图编辑器。
5. 添加全部图层节点和逻辑节点页签下的3个条件判断节点到蓝图主画布中。
6. 连接组件。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3422810961/p696841.png)
7. 配置条件判断节点处理方法。  
```  
return data.id == 1;//显示柱状图  
return data.id == 2;//显示区域图  
return data.id == 3;//全部显示  
```
8. 单击页面右上角的**预览**图标，预览展示结果。![dd_Trim.gif](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3422810961/p696846.gif)

### **轮播容器实现**

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 选择任一数据看板，单击**编辑**，进入画布编辑器页面。
3. 添加**Tab列表**组件、**区域图**组件和**柱状图**组件到画布中。
4. 选中Tab列表组件，修改静态数据。  
```  
[  
  {  
    "id": 1,  
    "content": "TAB1"  
  },  
  {  
    "id": 2,  
    "content": "TAB2"  
  }  
]  
```
5. 全选区域图和柱状图，右键单击**成组**，在右侧面板单击**使用轮播容器**。
6. 在轮播容器的样式页签，设置触发方式为**事件触发**。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3422810961/p696853.png)
7. 切换到蓝图编辑器。
8. 添加Tab列表节点、轮播容器节点和**逻辑节点**页签下的1个串行数据处理节点到蓝图主画布中。
9. 连接组件。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3422810961/p696866.png)
10. 配置串行数据处理节点处理方法。  
```  
return {  index: data.id - 1 };  
```
11. 单击页面右上角的**预览**图标，预览展示结果。![w1w_Trim.gif](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2422810961/p696872.gif)