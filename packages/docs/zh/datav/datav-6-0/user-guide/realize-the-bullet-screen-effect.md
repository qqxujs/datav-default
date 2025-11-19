# 实现弹幕效果 %{#407420}% 

本文档以**键盘**控制**通用标题**组件为例，实现数字大屏的弹幕效果。

## **效果展示**![4月4日](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1655950861/p619083.png)

## **操作步骤**

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 选择任一可视化应用，单击编辑，进入画布编辑器页面。
3. 添加6个通用标题组件到画布中，并修改标题文本颜色和组件名称。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2655950861/p619017.png)
4. 分别记录6个通用标题组件Y轴的位置，例如：通用标题-1:160。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2655950861/p619049.png)

**说明**  
通用标题组件的X轴位置均为1850，保证组件的初始位置在画布的右侧隐藏处。
5. 右键单击组件，将所有组件导入蓝图编辑器中。
6. 在逻辑节点页签，新增5个定时器后，将串行数据处理右侧节点连接至组件的**移动**动作处。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1655950861/p619021.png)
7. 配置串行数据处理节点处理方法，例如：通用标题-1。其余组件只需要修改Y轴位置即可。  
```  
return {  
  // 移动方式。绝对定位：to，相对定位：by。默认值：to。  
  "positionType": "to",  
  // 指定位置。x坐标，y坐标。  
  "attr": {  
    "x": -240,//保证组件从画布的左侧消失隐藏。  
    "y": 160//组件初始位置的Y轴信息，保证组件直线向左运动。  
  },  
  // 动画方式。  
  "animation": {  
    "enable": true,  
    // 动画延时。  
    "animationDuration": 6000,//设置组件的移动速度。  
    // 动画曲线。可选值为：linear|easeInOutQuad|easeInOutExpo。  
    "animationEasing": "linear"  
  }  
}  
```
8. 配置定时器的延迟时间。例如：通用标题-2在通用标题-1后延迟1秒再移动。其他组件可以自己设置延迟时间。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2655950861/p619070.png)
9. 单击页面右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2655950861/p619065.png)图标，预览展示结果。![4月4日](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1655950861/p619083.png)