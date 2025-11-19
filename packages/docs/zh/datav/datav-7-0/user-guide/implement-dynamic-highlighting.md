<!DOCTYPE html> 

## **效果展示**![dfcv_Trim.gif](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2929420961/p696831.gif)

## **操作步骤**

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 选择任一数据看板，单击**编辑**，进入画布编辑器页面。
3. 添加两个**柱状图**组件到画布中。关闭所有动画效果并修改组件名称为`柱状图-1`和`柱状图-2`。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2929420961/p696812.png)![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2929420961/p696813.png)
4. 切换到蓝图编辑器。
5. 将图层节点的两柱状图节点添加到蓝图主画布中。
6. 单击**逻辑节点**，添加2个串行数据处理节点到蓝图主画布中。
7. 连接组件。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2929420961/p696819.png)
8. 配置两个串行数据处理节点处理方法。  
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
9. 单击页面右上角的**预览**图标，预览展示结果。![dfcv_Trim.gif](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2929420961/p696829.gif)