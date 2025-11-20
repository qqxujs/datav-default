<!DOCTYPE html> 

本文介绍在蓝图编辑器内，导入数据接口和请求数据接口的区别。

## 接口区别示意图

![接口区别示意图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0651379461/p428311.jpg)

## 接口区别详细介绍

* 请求数据接口：重新请求服务端数据，上游**数据处理**节点或**图层节点**抛出的数据将作为参数。例如数字翻牌器配置了API数据源为`https://api.test`，传到请求数据接口动作的数据为`{ id:"1" }`，则最终请求接口为`https://api.test?id=1`。蓝图请求接口示例详细请参见[实现传递动态参数](/zh/datav/datav-7-0/user-guide/implement-the-passing-of-dynamic-parameters)。  
数据源配置示例![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1765630961/p698033.png)  
请求数据接口示例![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2765630961/p698036.png)
* 导入数据接口：按组件绘制格式，处理数据后导入组件，重新绘制。不需要重新请求服务端的数据。 例如数字翻牌器组件，导入数据接口，串行数据处理节点传值示例如下。  
```  
[  
  {  
     "name": "",  //可选字段，可以为空值  
     "value":232425  
   }  
]  
```  
![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2765630961/p698042.png)

**说明** 
* 导入数据接口，不会执行数据过滤器。
* 请求数据接口，服务端返回的数据会执行数据过滤器。