  使用蓝图编辑器实现组件跨屏联动-DataV数据可视化-阿里云

本文档以数字大屏1上的**Tab列表**组件控制数字大屏2上的**通用标题**组件为例，实现跨屏联动功能。

## **效果展示**![4月4日 (1)](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2148950861/p619339.png)

## 使用场景

当您有多个可视化应用，并希望多个可视化应用内的组件能展示相互联动的效果。

## **操作步骤**

1.  登录[DataV控制台](https://datav.aliyun.com/)。
2.  选择任一可视化应用，重命名为**主屏幕**，单击编辑，进入画布编辑器页面。
    
3.  添加**Tab列表**组件，并将其导出到蓝图编辑器中。
    
4.  单击页面左上角的![蓝图编辑器图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3571888951/p67020.png)图标，切换到蓝图页面。
    
5.  在逻辑节点页签单击**串行数据处理节点**和**Websocket节点**到蓝图画布中。
    
6.  连接组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3148950861/p619101.png)
    
7.  配置串行数据处理节点处理方法。
    
    ```
    return [{"value":data.content}]; 
    ```
    
8.  配置WebSocket节点。
    
    在**socket服务地址**区域，输入事先获得的测试地址。添加一个**发送消息**，并将**消息名**命名为**下一个**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3148950861/p619196.png)
    
    **说明**
    
    **socket服务地址**请参见[如何使用DataV-WS服务](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-the-datav-ws-service)获取。
    
9.  重新选择一个可视化应用，重命名为副屏幕，单击编辑，进入画布编辑器页面。
    
10.  添加**通用标题**组件并导出到蓝图。
     
11.  添加WebSocket组件到蓝图画布中，连接组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3148950861/p619201.png)
     
12.  配置WebSocket节点。
     
     在**socket服务地址**区域，输入和主屏幕相同的地址，添加一个**接收消息**，并将**消息名**命名为**下一个**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2148950861/p619207.png)
     
     **重要**
     
     主屏幕和副屏幕的分组要一致，因为副屏幕是接收端，所以配置接收消息即可。
     
13.  单击两个屏幕页面右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3148950861/p619209.png)图标，预览展示结果。![4月4日 (1)](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2148950861/p619339.png)
     

## **无法正常连接WebSocket的服务端时，可根据以下步骤排查问题**

1.  WS服务不能直接在HTTPS协议下访问，需要用**WSS**服务，再使用自己的SSL证书去代理WS服务地址后，才能在HTTPS下访问。
    
2.  使用功能键F12，打开浏览器调试页面，查看浏览器**Network**页签下的WS标签连接提示信息，检查是否因跨域未配置以及在连接返回的**Response**的**Header**里是否有设置Sec-WebSocket-Protocol为`echo-protocol`。
    
3.  连接成功后，根据文档中的消息格式传递参数即可。