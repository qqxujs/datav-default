  使用蓝图编辑器实现柱状图的联动高亮-DataV数据可视化-阿里云

本文以**柱状图**组件之间相互控制柱体高亮为例，实现组件数据的动态高亮。

## **效果展示**![动态高亮_Trim](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1440891861/p634887.png)

## **操作步骤**

1.  登录[DataV控制台](https://datav.aliyun.com/)。
2.  选择任一可视化应用，单击编辑，进入画布编辑器页面。
    
3.  添加两个**柱状图**组件到画布中。关闭所有动画效果并修改组件名称为**柱状图-1**和**柱状图-2**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1440891861/p634908.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1440891861/p634910.png)
    
4.  在图层面板，全选所有组件，右键单击**导出到蓝图编辑器**。
    
5.  连接组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1440891861/p634903.png)
    
6.  配置两个串行数据处理节点处理方法。
    
    ```
    return {
      "data": {
        "x": data.x,
        "y": data.y,
        "colorField": data.colorField
      },
      "style": {
        "fillStyle": "#f00"//高亮颜色
      }
    }
    ```
    
7.  单击页面右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1440891861/p634905.png)图标，预览展示结果。![2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0440891861/p634906.png)