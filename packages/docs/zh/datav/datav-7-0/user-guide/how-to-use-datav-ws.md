 

本文介绍DataV-WS服务的详细功能。

## **服务范围**

-   WebSocket服务
    
-   静态文件服务（模型/图片/视频等）
    

## 文档目录

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2387852961/p708309.png)

**重要**

请勿删除DataV-WS服务下的`assets`目录。

## 启停服务

-   Windows：
    
    1.  下载[DataV-WS服务安装包](https://sh-conf.oss-cn-shanghai.aliyuncs.com/doc_files/datav_ws%401.0.0.zip)。
        
    2.  解压后双击打开`datav_ws_win.exe`文件。
        
    3.  等待系统开启。
        
    4.  在浏览器地址栏输入`http://127.0.0.1:8181`，显示以下内容表示服务开启成功。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2387852961/p708321.png)
        
        **重要**
        
        启动后请勿关闭cmd运行框。
        
    5.  在DataV-WS服务开启后，可完成WebSocket服务、模型服务和静态资源服务的开发和演示等功能操作，详情请参见[配置服务](#section-cku-pi5-2ni)。
        
-   linux/mac：
    
    1.  执行如下命令，下载DataV-WS服务应用。
        
        ```
        wget http://sh-conf.oss-cn-shanghai.aliyuncs.com/doc_files/datav_ws@1.0.0.zip   
        ```
        
    2.  解压安装包，打开终端，进入到服务所在目录，如datav-ws。
        
    3.  执行如下命令，服务默认在8181端口启动。
        
        ```
        chmod 777 *
        sh exec.sh start
        ```
        
        您可以通过`sh exec.sh stop`命令，停止服务。
        
        您可以通过`sh exec.sh restart`命令，重启服务。
        
    4.  在DataV-WS服务开启后，可完成WebSocket服务、模型服务和静态资源服务的开发和演示等功能操作，详情请参见[配置服务](#section-cku-pi5-2ni)。
        

## 配置服务

### **配置WebSocket服务**

-   开发阶段：
    
    1.  在本地启动DataV-WS服务，详情请参见[启停服务](#section-r1q-sp5-4o7)。
        
    2.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
        
    3.  选择任一数据看板，单击**编辑**，进入画布编辑器页面。
        
    4.  单击**画布编辑器**页面左上角的![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2113173861/p669736.png)图标，切换到**蓝图**页面。
        
    5.  在**蓝图**页面，将左侧**逻辑节点**栏内的**WebSocket**节点添加至画布中。
        
    6.  设置蓝图编辑器内**WebSocket**节点的**服务地址**为：`ws://127.0.0.1:8181`。![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3892173861/p669722.png)
        

-   演示阶段：
    
    1.  在演示机器上或同网段机器启动DataV-WS服务，详情请参见[启停服务](#section-r1q-sp5-4o7)。
        
    2.  根据演示机器的IP地址，在演示机器的蓝图编辑器内添加一个**WebSocket**节点，并变更**WebSocket**节点的**socket服务地址**为：`ws://机器IP地址:8181`，即可完成多个同网段数据看板的互相通信功能。
        
        **说明**
        
        跨屏演示请参见[实现跨屏联动](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/implement-interactions-between-widgets-in-two-projects)。
        

### **配置模型服务**

-   开发阶段：
    
    1.  在本地启动DataV-WS服务，详情请参见[启停服务](#section-r1q-sp5-4o7)。
        
    2.  将模型放入DataV-WS服务中的`assets`文件夹内。
        
    3.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
        
    4.  选择任一数据看板，单击**编辑**，进入画布编辑器页面。
        
    5.  单击上方菜单栏的搜索图标![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2387852961/p708353.png)，将**模型查看器**组件添加到画布中。
        
    6.  设置**模型查看器**组件的模型地址为：`http://IP地址:8181/模型文件名`。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2387852961/p708355.png)
        
-   演示阶段：
    
    1.  将在开发阶段生成的`datav_ws`文件夹复制到同网段演示机器上。
        
    2.  在数据看板演示机器上启动DataV-WS服务，详情请参见[启停服务](#section-r1q-sp5-4o7)。
        
    3.  打开需要演示的数据看板即可获取服务上的模型内容。
        

### **配置静态资源服务**

1.  在本地启动DataV-WS服务，详情请参见[启停服务](#section-r1q-sp5-4o7)。
    
2.  将静态资源（例如图片）放入DataV-WS服务中的`assets`文件夹内。
    
3.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
4.  选择任一数据看板，单击**编辑**，进入画布编辑器页面。
    
5.  单击上方菜单栏的搜索图标![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2387852961/p708353.png)，将**单张图片**组件添加到画布中。
    
6.  设置**单张图片**组件背景图编辑框的文件地址为：`http://IP地址:8181/图片文件名`，即可直接获取服务上的图片内容。