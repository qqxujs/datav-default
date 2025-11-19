<!DOCTYPE html> 

数据处理类节点包括页面导航节点、并行数据处理节点、串行数据处理节点、序列执行节点和WebSocket节点。本文介绍在蓝图编辑器中，配置数据处理类节点的方法。

## 页面导航节点

****页面导航**节点，可用于实现页面跳转的功能，支持新开浏览器标签页跳转或在当前标签页内跳转，并支持页面跳转时带入自定义参数。

使用场景：****页面导航**节点在跳转新页面时使用较多。例如以下场景，单击地图上的一个区域，即可跳转到已配置的区域下级页面内。当单击地图区域时，可通过****串行数据处理**节点得到当前区域的adcode字段值，返回参数数据为`return {adcode: data.area_id};`，然后在****导航节点**的配置面板中，设置好下级跳转页面链接地址为`https://www.other-page.com`，同时自定义带入的参数变量名adcode，最后将串行数据处理返回的结果输入****页面导航**节点的****打开页面**即可。

添加****页面导航**节点至画布中，可查看****页面导航**节点支持的事件或动作，以及配置参数。添加方式请参见[使用逻辑节点](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/logic-nodes-overview#task-2518858/section-5b3-w0u-ud7)。

![页面导航处理面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5195329461/p426528.jpg)

| 参数         | 说明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---- | ---- |
| ****链接地址** | 目标跳转页面的链接地址。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ****新开页面** | 打开开关，新开一个网页页面打开跳转链接地址；关闭开关，在原有网页页面打开跳转链接地址。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ****请求参数** | 跳转页面时可自定义请求参数的****参数名**和****参数值**内容。单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一个请求参数。单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个请求参数的排列样式。单击![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5896941261/p271562.jpg)图标，即可复制当前选中请求参数配置内容并新增一个同样配置的请求参数。 |

表格中仅提供****其他配置**中的参数说明，其他参数配置请参见[公共参数说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/logic-nodes-overview#concept-2333441/table-d04-vmz-ldb)。

输出结果：无。

## 并行数据处理节点

****并行数据处理**节点，是使用并行方式来处理多个事件，各事件之间互不影响。

使用场景：****并行数据处理**节点在数据分发场景中使用较多。例如一个组件接口返回的数据为`{name: '蓝图编辑器', version: 'v1.0' }`，分发到2个通用标题组件中，一个取的是name字段，另一个取的是version字段。可以使用该节点新增两个处理方法，一个为`return [{value: data.name}]`，另一个为`return [{value: data.version}]`。

添加****并行数据处理**节点至画布中，可查看****并行数据处理**节点支持的事件或动作，以及配置参数。添加方式请参见[使用逻辑节点](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/logic-nodes-overview#task-2518858/section-5b3-w0u-ud7)。

![并行数据处理面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7911888951/p66549.png)

| 事件或动作      | 说明                                                                                 |
| ---- | ---- |
| ****处理方法** | 并行的数据处理方法。可在配置面板中添加多个处理方法，添加后，****并行数据处理**节点中显示您添加的处理方法；不同处理方法可连接不同的上游节点，实现数据并行处理。 |

| 参数         | 说明                          |
| ---- | ---- |
| ****处理方法** | 编写JavaScript函数体，返回结果可为任意类型。 |

表格中仅提供****其他配置**中的参数说明，其他参数配置请参见[公共参数说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/logic-nodes-overview#concept-2333441/table-d04-vmz-ldb)。

输出结果：每个处理方法对相应上游节点的输出结果进行计算后，得到的输出结果。

## 串行数据处理节点

****串行数据处理**节点，是使用串行方式来处理一个事件。

使用场景：例如，小数0.835要转换成整数百分比83%，可经过：单位转换（83.5） -> 取整（83）-> 添加字符串后缀（83%），一系列串行操作完成。

添加****串行数据处理**节点至画布中，可查看****串行数据处理**节点支持的事件或动作，以及配置参数。添加方式请参见[使用逻辑节点](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/logic-nodes-overview#task-2518858/section-5b3-w0u-ud7)。 

![串行数据处理面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7911888951/p66543.png)

| 事件或动作      | 说明                                                                   |
| ---- | ---- |
| ****处理方法** | 串行的数据处理方法。可在配置面板中添加多个处理方法，添加后，****串行数据处理**节点中显示您添加的处理方法；各方法共同实现数据处理。 |

| 参数         | 说明                          |
| ---- | ---- |
| ****处理方法** | 编写JavaScript函数体，返回结果可为任意类型。 |

表格中仅提供****其他配置**中的参数说明，其他参数配置请参见[公共参数说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/logic-nodes-overview#concept-2333441/table-d04-vmz-ldb)。

输出结果：上游节点的输出结果经过所有处理方法计算后，得到的输出结果。

## 序列执行节点

当您对下游节点的动作执行有顺序要求时，可使用****序列执行**节点，保证动作从上到下依次执行。

使用场景：例如，当您需要切换不同场景的数据面板时，每个场景有很多数据面板，先把场景A相关的数据面板切出，再把场景B相关的数据面板切进。可使用****序列执行**节点，对不同场景的数据面板进行分组，再按照先A后B的顺序执行。

添加****序列执行**节点至画布中，可查看****序列执行**节点支持的事件或动作，以及配置参数。添加方式请参见[使用逻辑节点](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/logic-nodes-overview#task-2518858/section-5b3-w0u-ud7)。

![序列执行面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6720082261/p66539.png)

| 事件或动作      | 说明                                                                       |
| ---- | ---- |
| ****执行**   | 输入上游节点的输出结果，用于该节点的结果计算。                                                  |
| ****数据处理** | 序列执行节点的数据处理方法。可在配置面板中添加多个处理方法，添加后，****序列执行**节点中显示您添加的处理方法；各方法按照顺序进行数据处理。 |

| 参数         | 说明                                                                               |
| ---- | ---- |
| ****处理方法** | 编写JavaScript函数体，返回结果支持任意类型。可叠加，每个处理方法独立计算，输入均为上一个节点的输出结果，输出为每个处理方法自己的计算结果，相互不影响。 |

表格中仅提供****其他配置**中的参数说明，其他参数配置请参见[公共参数说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/logic-nodes-overview#concept-2333441/table-d04-vmz-ldb)。

输出结果：每个处理方法按照顺序，对上游节点的输出结果进行计算后，得到的输出结果。

## WebSocket节点

****WebSocket**节点为屏间通信节点。每个消息由消息名称和数据组成，消息名称在配置项中自定义，数据为上一个节点的输出结果。

使用场景：****WebSocket**节点用于多端之间的命令和数据传输。例如大屏与移动端、大屏与触摸屏端的数据传输等。

添加****WebSocket**节点至画布中，可查看****WebSocket**节点的配置参数。添加方式请参见[使用逻辑节点](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/logic-nodes-overview#task-2518858/section-5b3-w0u-ud7)。

![websocket](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6720082261/p280491.png)

| 参数               | 说明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---- | ---- |
| ****socket服务地址** | socket后端服务的地址。我们提供了DataV-WS工具包供您选择，具体操作请参见[如何使用DataV-WS服务](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-the-datav-ws-service)。                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ****屏幕ID**       | 该****WebSocket**节点所在屏幕的ID号，自定义输入。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ****屏幕名称**       | 该****WebSocket**节点所在屏幕的名称，自定义输入。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ****分组**         | ****WebSocket**节点消息只在同socket服务下的同分组中进行广播。一般同一项目约定一个分组名称。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ****接收消息**       | 该****WebSocket**节点接收来自其他端的消息名称。 单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一个接受消息。单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个接收消息的排列样式。单击![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5896941261/p271562.jpg)图标，即可复制当前选中接收消息配置内容并新增一个同样配置的接收消息。 |
| ****发送消息**       | 该****WebSocket**节点发送到其他端的消息名称。单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一个发送消息。单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个发送消息的排列样式。单击![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5896941261/p271562.jpg)图标，即可复制当前选中发送消息配置内容并新增一个同样配置的发送消息。   |

表格中仅提供****其他配置**中的参数说明，其他参数配置请参见[公共参数说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/logic-nodes-overview#concept-2333441/table-d04-vmz-ldb)。

输出结果：无。

## 自建WebSocket节点服务说明

如果您已经创建了WebSocket节点服务，那么您无需编写任何前端代码，即可将服务接入DataV提供的WebSocket节点中。前提是您的Webocket服务符合以下格式。

 配置示例![配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7911888951/p92836.png)

* 注册消息  
WebSocket节点发送消息格式如下。  
```  
{  
  event: "register",  
  data: {  
    sid: 407194,                                      //屏幕的ID  
    name: "数据源受控模式测试",                        //屏幕的名称  
    group: "默认分组"                                 //默认分组  
  },  
  callback: "callback_15832235175585251131307383912" //当前注册时间戳，自动生成  
}  
```  
WebSocket节点服务获取注册消息之后，需返回如下消息才能成功注册。  
```  
{  
  event: "callback_15832235175585251131307383912",   //返回与之前同样的注册时间戳  
  data: {  
    isError: false,                                  //置为false  
    data: "ok"  
  }  
}  
```
* 发送消息  
WebSocket节点发送消息格式如下。  
```  
{  
  event: 'broadcast',  
  data: {  
    event: "发送出去的消息1",                         //发送消息名称  
    data: {}                                         //data为任意格式  
  }  
}  
```
* 接收消息  
WebSocket节点接收消息格式如下。  
```  
{  
  event: "broadcast_接收到的消息1",                  //broadcast_${接收消息名称}  
  data: {}                                          //data为任意格式  
}  
```

## 无法正常连接WebSocket的服务端时，可根据以下步骤排查问题

1. WS服务不能直接在HTTPS协议下访问，需要用****WSS**服务，在使用自己的SSL证书去代理WS服务地址后，才能在HTTPS下访问。
2. 使用功能键F12，打开浏览器调试页面，查看浏览器****network**页签下的WS标签连接提示信息，检查是否因跨域未配置以及在连接返回的****response**的****header**里是否有设置Sec-WebSocket-Protocol为echo-protocol。
3. 连接成功后，根据文档中的消息格式传递参数即可。