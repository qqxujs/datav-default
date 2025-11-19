<!DOCTYPE html> 

本文以**数字翻牌器**组件展示其他两个数字翻牌器组件的实时数据相加结果为例，实现动态数据加和效果。

## **效果展示**![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4266602861/p635811.png)

## 操作步骤

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 选择任一可视化应用，单击编辑，进入画布编辑器页面。
3. 添加3个**数字翻牌器**组件到画布中。
4. 单击任一数据翻牌器，选择配置面板，修改**标题 > 标题名**为**上半年销售额**，在图层面板双击修改组件名称为**数字翻牌器-上半年**。重复操作配置其他两个数字翻牌器组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4266602861/p635815.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3266602861/p635813.png)
5. 选中所有组件，右键单击**导出到蓝图编辑器**。
6. 添加串行处理节点和序列执行节点，连接组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3266602861/p635816.png)

  * 串行处理节点：实现单击数字翻牌器随机生成数据。两个节点处理方法一致，在上半年的基础上再次加和随机数生成下半年数据。  
  ```  
  var value = Math.random() * 10000  
  return [  
   {  
   "name": "",  
   "value": 12345 + value  
   }  
  ]  
  ```
  * 序列执行节点：首先将数据保存为临时变量，接着将两个数字翻牌器进行加法运算，导入显示组件中。  
  ```  
  //变量A  
  return {  
   data: [  
   {  
   name: "up",  
   value: data[0].value || 0  
   }  
   ]  
  };  
  ```  
  ```  
  //变量B  
  return {  
   data: [  
   {  
   name: "down",  
   value: data[0].value || 0  
   }  
   ]  
  };  
  ```  
  ```  
  //A+变量B  
  let dowm = getLocalValue('dowm') || 0;  
  let res = data && data.length !== 0 ? data[0].value + dowm : down  
  return [{ value: res }];  
  ```  
  ```  
  //B+变量A  
  let up = getLocalValue('up') || 0;  
  let res = data && data.length !== 0 ? data[0].value + up : up  
  return [{ value: res }];  
  ```
7. 单击页面右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3266602861/p635814.png)图标，预览展示结果。![翻牌器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3266602861/p635818.png)