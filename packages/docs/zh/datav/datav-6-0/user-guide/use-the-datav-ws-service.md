<!DOCTYPE html> 

本文您介绍DataV-WS服务的详细功能。

## DataV-WS服务结构

DataV-WS服务整合了静态文件服务和WebSocket服务。静态文件服务主要用于本地模型地址的加载，WebSocket服务符合蓝图编辑器WebSocket节点规范，使用该服务后，无需额外开发，在蓝图编辑器中能够直接使用该服务跨越多个同网段下的可视化应用进行通信。

## DataV-WS服务文档目录

![文档目录](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6399676261/p296744.png)

**重要** 

请勿删除DataV-WS服务下的`assets`目录。

## 启动与停止DataV-WS服务

* Windows：  

  1. 下载[DataV-WS服务安装包](https://sh-conf.oss-cn-shanghai.aliyuncs.com/doc%5Ffiles/datav%5Fws.zip)。
  2. 解压后双击打开`datav_ws_win.exe`文件。
  3. 打开文件后，看到如下指令，表示启动成功。  
  ```  
  Server listen on IP地址（如：127.0.0.1）:8181  
  ```

**重要**  
  启动后请勿关闭cmd运行框。
  4. 在DataV-WS服务开启后，可完成WebSocket服务、模型服务和静态资源服务的开发和演示等功能操作，详情请参见[配置DataV-WS服务](#title-jfv-w2l-brt)。
* linux/mac：  

  1. 执行如下命令，下载DataV-WS服务应用。  
  ```  
  wget http://sh-conf.oss-cn-shanghai.aliyuncs.com/doc_files/datav_ws.zip  
  ```
  2. 解压安装包，打开终端，进入到服务所在目录，如datav-ws。
  3. 执行如下命令，服务默认在`8181`端口启动。  
  ```  
  chmod 777 *  
  sh exec.sh start  
  ```

**说明**  
    * 您可以通过`sh exec.sh stop`命令，停止服务。
    * 您可以通过`sh exec.sh restart`命令，重启服务。
  4. 在DataV-WS服务开启后，可完成WebSocket服务、模型服务和静态资源服务的开发和演示等功能操作，详情请参见[配置DataV-WS服务](#title-jfv-w2l-brt)。

## 配置DataV-WS服务

可配置的服务包括WebSocket、模型服务和静态资源服务。

* 配置WebSocket服务。  

  * 开发阶段：  

    1. 在本地启动DataV-WS服务，详情请参见[启动与停止DataV-WS服务](#title-6zl-uwm-gj0)。
    2. 登录[DataV控制台](https://datav.aliyun.com/)。
    3. 创建[空白可视化应用](https://help.aliyun.com/zh/datav/use-a-blank-template-to-create-a-project#task-2462286)。
    4. 单击**画布编辑器**页面左上角，单击**蓝图编辑器**图标，切换到**蓝图编辑器配置**页面。![蓝图编辑器界面入口](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7358788951/p66701.png)
    5. 在**蓝图编辑器配置**页面，将左侧逻辑节点栏内的**WebSocket**节点拖至画布中。
    6. 设置蓝图编辑器内**WebSocket**节点的**socket服务地址**为：`ws://127.0.0.1:8181`。![设置socket服务地址](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7788676261/p280732.png)
  * 演示阶段：  

    1. 在演示机器上或同网段机器启动DataV-WS服务，详情请参见[启动与停止DataV-WS服务](#title-6zl-uwm-gj0)。
    2. 根据演示机器的IP地址，在演示机器的蓝图编辑器内添加一个**WebSocket**节点，并变更**WebSocket**节点的**socket服务地址**为：`ws://机器IP地址:8181`，即可完成多个同网段可视化应用的互相通信功能。
* 配置模型服务。  

  * 开发阶段：  

    1. 在本地启动DataV-WS服务，详情请参见[启动与停止DataV-WS服务](#title-6zl-uwm-gj0)。
    2. 将模型放入DataV-WS服务中的`assets`文件夹内。![模型放入目录](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9530776261/p296749.png)
    3. 登录[DataV控制台](https://datav.aliyun.com/)。
    4. 创建[空白可视化应用](https://help.aliyun.com/zh/datav/use-a-blank-template-to-create-a-project#task-2462286)。
    5. 参见画布编辑器[添加资产](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/add-a-widget-1/#task-2375434)，在画布编辑器页面搭建所需要的**DataV 3D引擎**组件，并选择添加**模型加载器**子组件。  

**说明**  

**DataV 3D引擎**为产品非通用组件。如有使用该组件的需求，请联系DataV销售人员进行线下购买后再使用。
    6. 设置**模型加载器**组件内的模型地址为：`http://IP地址:8181/模型文件名`。![模型加载器地址](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7358788951/p103218.png)
  * 演示阶段：  

    1. 将在开发阶段生成的`datav_ws`文件夹复制到同网段演示机器上。
    2. 在可视化应用演示机器上启动DataV-WS服务，详情请参见[启动与停止DataV-WS服务](#title-6zl-uwm-gj0)。
    3. 打开需要演示的可视化应用即可获取服务上的模型内容。
* 配置静态资源服务。  

  1. 在本地启动DataV-WS服务，详情请参见[启动与停止DataV-WS服务](#title-6zl-uwm-gj0)。
  2. 将静态资源（如图片）放入DataV-WS服务中的`assets`文件夹内。![图片资源目录](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9530776261/p296756.png)
  3. 登录[DataV控制台](https://datav.aliyun.com/)。
  4. 创建[空白可视化应用](https://help.aliyun.com/zh/datav/use-a-blank-template-to-create-a-project#task-2462286)。
  5. 参见画布编辑器[添加资产](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/add-a-widget-1/#task-2375434)，在画布编辑器页面搭建所需要的**单张图片**组件。
  6. 设置**单张图片**组件背景图编辑框的文件地址为：`http://IP地址:8181/p2544435894.webp`，即可直接获取服务上的图片内容。![图片地址](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7358788951/p103210.png)

## 相关文档

其他相关文档链接：[自建WebSocket节点服务说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/process-data-1#section-lun-rky-rx9)。