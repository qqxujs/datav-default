<!DOCTYPE html> 

本文档以数据看板1上的**Tab列表**组件控制数据看板2上的**通用标题**组件为例，实现跨屏联动功能。

## **效果展示**![4月4日 (1)](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2148950861/p619339.png)

## 使用场景

当您有多个数据看板，并希望多个数据看板内的组件能展示相互联动的效果。

## **操作步骤**

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 配置主屏幕

  1. 选择任一数据看板，重命名为**主屏幕**，单击**编辑**，进入画布编辑器页面。
  2. 添加**Tab列表**组件到画布中。
  3. 单击页面左上角的![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1356610961/p696634.png)图标，切换到蓝图页面。
  4. 在**图层节点**页签，将Tab列表节点添加到蓝图主画布中。
  5. 单击**逻辑节点**页签，将**串行数据处理**和**websocket**添加到蓝图主画布中。
  6. 选中**websocket**节点，在右侧配置面板的**服务地址**区域，输入事先获得的测试地址；重命名动作为**下一个**；删除多余事件节点和动作节点。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1356610961/p696640.png)

**说明**  

**服务地址**请参见[如何使用DataV-WS服务](/zh/datav/datav-6-0/user-guide/use-the-datav-ws-service)获取。
  7. 连接组件。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2356610961/p696638.png)
  8. 配置串行数据处理节点处理方法。  
  ```  
  return [{"value":data.content}];  
  ```
3. 配置副屏幕

  1. 重新选择一个数据看板，重命名为**副屏幕**，单击**编辑**，进入画布编辑器页面。
  2. 添加**通用标题**组件到画布中。
  3. 单击页面左上角的![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1356610961/p696634.png)图标，切换到蓝图页面。
  4. 在**图层节点**页签，将通用标题节点添加到蓝图主画布中。
  5. 单击**逻辑节点**页签，将**websocket**添加到蓝图主画布中。
  6. 选中**websocket**节点，在右侧配置面板的**服务地址**区域，输入和主屏幕相同的地址；重命名事件为**下一个**。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1356610961/p696643.png)

**重要**  
  主屏幕和副屏幕的分组要一致，因为副屏幕是接收端，所以配置接收消息即可。
  7. 连接组件。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1356610961/p696644.png)
4. 单击两个屏幕页面右上角的**预览**图标，预览展示结果。![4月4日 (1)](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2148950861/p619339.png)

## **异常排查**

1. WS服务不能直接在HTTPS协议下访问，需要用**WSS**服务，再使用自己的SSL证书去代理WS服务地址后，才能在HTTPS下访问。
2. 使用功能键F12，打开浏览器调试页面，查看浏览器**Network**页签下的WS标签连接提示信息，检查是否因跨域未配置以及在连接返回的**Response**的**Header**里是否有设置Sec-WebSocket-Protocol为`echo-protocol`。
3. 连接成功后，根据文档中的消息格式传递参数即可。