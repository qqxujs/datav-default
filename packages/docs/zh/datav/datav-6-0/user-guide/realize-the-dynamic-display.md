  使用蓝图编辑器实现Tab列表控制组件显隐-DataV数据可视化-阿里云

本文档以**Tab列表**控制**区域图**和**基本柱状图**的显隐为例，实现组件显隐的动态展示。

## **效果展示**

-   Tab列表的id实现![动态显隐_Trim](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6190891861/p634952.png)
    
-   组内轮播翻页实现![仙音2_Trim](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6190891861/p634980.png)
    

## **操作步骤**

1.  登录[DataV控制台](https://datav.aliyun.com/)。
2.  选择任一可视化应用，单击编辑，进入画布编辑器页面。
    
3.  添加**Tab列表**组件、**区域图**组件和**柱状图**组件到画布中。
    
4.  在图层面板，全选所有组件，右键单击**导出到蓝图编辑器**。
    
5.  连接组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6190891861/p635011.png)
    
6.  配置分支判断节点处理方法。
    
    ```
    return data.id == 1;//显示柱状图
    return data.id == 2;//显示区域图
    return data.id == 3;//全部显示
    ```
    
7.  单击页面右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5190891861/p635019.png)图标，预览展示结果。![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5190891861/p635020.png)
    
8.  （可选）修改tab列表的数据值为两个，将区域图和柱状图成组，在**组内对象轮播**的**基础设置**中设置触发方式为**事件触发**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7190891861/p635014.png)
    
9.  （可选）将组导出到蓝图中并连线。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5190891861/p635017.png)
    
10.  （可选）配置串行数据处理节点处理方法。
     
     ```
     return {  index: data.id - 1 };
     ```
     
11.  （可选）单击页面右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6190891861/p635023.png)图标，预览展示结果。![2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5190891861/p635024.png)