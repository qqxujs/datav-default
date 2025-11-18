  在蓝图编辑器中配置全局节点以设置回调ID和页面临时变量-DataV数据可视化-阿里云

全局节点可以帮助您在蓝图编辑器中，设置组件的初始化状态，并使用页面的回调ID和临时变量等。本文介绍在蓝图编辑器中，配置全局节点的方法。

添加全局节点到画布中，可查看全局节点支持的事件和动作。添加方式请参见[使用逻辑节点](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/logic-nodes-overview#section-5b3-w0u-ud7)

![全局节点中国站样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8720082261/p280495.jpg)

  

类型

事件/动作

说明

事件

全部组件初始化完成

可视化应用上所有组件初始化完成后，抛出的事件，无参数。

数据加载完成

可视化应用上所有组件数据接口加载完成后，抛出的事件，无参数。

动作

设置回调id

与画布编辑器的交互面板联通，可设置回调ID。回调ID的变化，会引起监听该回调ID的组件重新请求数据。回调值仅支持字符串、数字、单层对象、单层数组，不支持嵌套。参数举例说明如下。

```
{  
  data: [{    
   // 回调ID变量名。    
   name: "productName",    
   // 回调ID值。    
   value: "DataV"  
  }]
}
```

取值方式

在编辑处理方法时，可通过 `getCallbackValue("productName")` 取值，详情请参见[配置蓝图编辑器](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/what-is-blueprint-editor#task-2517085 "蓝图编辑器一般称为visual programming或者flow based programming，即通过可视化连线的方式，定义图层与图层之间的交互行为。本文为您介绍DataV蓝图编辑器的使用方法，帮助您自由管理可视化应用中多个组件之间的交互关系。")。

设置页面临时变量

页面级的全局变量，支持复杂的嵌套数据，用作简单的数据存储。参数举例说明如下。

```
{
  data: [{
// 临时变量名
    name: "product",
// 临时变量值
    value: [{
      "productName": "DataV",
      "companyName": "Alibaba"
    }]
  }]
}
```

取值方式

在编辑处理方法时，可通过`getLocalValue("product")`取值。

**说明** 如果一个事件的连线同时触发设置页面临时变量和其他动作，则优先执行设置页面临时变量动作。

更新全部组件

刷新可视化应用，所有组件的所有数据接口重新请求数据，重新渲染，无参数。