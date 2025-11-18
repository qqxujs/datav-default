  蓝图编辑器中导入数据接口与请求数据接口的区别-DataV数据可视化-阿里云

本文介绍在蓝图编辑器内，导入数据接口和请求数据接口的区别。

## 接口区别示意图

![接口区别示意图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0651379461/p428311.jpg)

## 接口区别详细介绍

-   ### **请求数据接口**
    
    重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如数字翻牌器配置了API数据源为`https://api.test`，传到请求数据接口动作的数据为`{ id:"1" }`，则最终请求接口为`https://api.test?id=1`。蓝图请求接口示例详细请参见[如何在请求数据接口时传递动态参数](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/how-do-i-pass-dynamic-parameters-when-a-data-interface-is-requested)。
    
    图 1. 数字翻牌器数据源配置示例![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2126132861/p636642.png)
    
    图 2. 请求数据接口示例图![请求数据接口示例图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4480769461/p428308.png)
    
-   ### **导入数据接口**
    
    按组件绘制格式，处理数据后，导入组件，重新绘制，不需要重新请求服务端的数据。 例如数字翻牌器组件，导入数据接口，串行处理节点传值示例如下。
    
    ```
    [
      {
         "name": "",  //可选字段name可以没有
         "value":232425
       }
    ]
    ```
    
    图 1 导入数据接口示例图![导入数据接口示例图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4480769461/p428306.png)
    
    **说明**
    
    导入数据接口，不会执行数据过滤器，请求数据接口服务端返回的数据会执行数据过滤器。