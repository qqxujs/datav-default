  通过模板搭建并发布可视化应用-DataV数据可视化-阿里云

本文以搭建**双11狂欢节**可视化应用为例，为您演示如何使用DataV提供的模板来开发可视化应用项目。

## 背景信息

-   示例使用**静态数据源**，因此可以直接在组件的数据配置区域粘贴准备好的数据。如果您的数据源为**CSV文件**、**数据库**等其他类型，需要先[添加数据源](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/add-data-sources/)。
    
-   如果您需要使用**API**数据源，可直接在数据配置栏输入API地址。具体配置时，如需启用**服务器代理请求**等操作，请参见[配置跨域数据](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/how-to-configure-cross-domain-data#concept-k5l-ckz-q2b)。
    

## **效果展示**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8250593761/p551402.png)

## **操作流程**

您可通过如下操作，完成对模板可视化应用的创建，快速体验DataV-Board的相关功能。

1.  [步骤一：创建可视化应用](#steps-qlz-1u9-jmy)
    
2.  [步骤二：配置组件样式](#steps-63e-r43-zqm)
    
3.  [步骤三：适配组件数据](#steps-dpf-zqs-xib)
    
4.  [步骤四：预览并发布可视化应用](#steps-hvc-ijx-ung)
    

## 步骤一：创建可视化应用

1.  登录[DataV控制台](https://datav.aliyun.com/)。
    
2.  在**我的可视化**页面中，单击**PC端创建**。选择一个合适的模板，此处以选择**2017双11狂欢节**模板为例，单击**创建项目**。
    
3.  在**创建数据大屏**对话框中，输入可视化应用名称并选择[项目分组](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/group-function-and-move-function/#e0e555ac04gch)，未创建分组时可选择**未分组**。
    
4.  单击**创建**。
    
    应用创建成功后跳转到画布编辑器页面，可以看到一款满足展示企业新零售业务相关数据且设计精良的模板。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2867504761/p551396.png)
    

## 步骤二：配置组件样式

可视化应用创建完成后，您可以通过以下方式修改组件样式。

1.  在左侧**图层**栏中单击选中组件后，可通过右侧样式面板调整其样式配置。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7557504761/p551397.png)
    
    **说明**
    
    您可以双击画布编辑器图层侧的组件名称，重命名当前组件。
    
2.  根据需求，使用同样的方式调整其他组件的配置。
    

## 步骤三：适配组件数据

您可以根据实际需要通过以下方式修改组件数据内容。

1.  在左侧图层栏中，单击选中某一组件。例如：双十一气泡图。
    
2.  在右侧样式面板中选择**数据**页签，单击**配置数据源**。在**设置数据源**对话框中，**数据源类型**选择**静态数据**。
    
3.  在下方的数据配置区域内，按照您的需求修改模板已有的数据，或粘贴准备好的JSON格式的数据。
    
    **说明**
    
    添加数据时的字段名要和系统设置保持一致。
    
4.  数据配置完成后，您可以在**设置数据源**页面单击**数据响应结果**后的![刷新](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8092333951/p95948.png)图标刷新数据响应结果。
    
    数据响应成功后，在**数据**页面会显示**配置完成**和**匹配成功**。
    
5.  使用同样的方式，配置可视化应用中所有组件的数据。
    

## 步骤四：预览并发布可视化应用

组件的样式和数据源都配置完成后，您可以预览并发布可视化应用，实现看板的在线播放和演示。本步骤为您介绍预览并发布可视化应用的方法。

1.  单击画布编辑器右上角的![{FA4AF138-6B6B-4DF3-AA90-521D2359AFB3}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6862120571/p973550.png)图标，跳转至新页面预览可视化应用。
    
    预览成功后，可按照以下步骤发布可视化应用。
    
2.  单击画布编辑器右上角的![{F18FCB2F-9D3E-4A35-9995-D9A7EFEA0EF6}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6862120571/p973551.png)图标，在弹出的对话框中单击**发布大屏**以打开发布页面。
    
3.  在发布页面中单击**分享链接**右侧的![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7824997471/p960080.png)图标复制链接。
    
    **说明**
    
    在发布页面中，可以按需进行[发布信息和快照管理](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-a-template-to-create-a-pc-side-visual-application#d6096c2851ggr)。
    
4.  打开浏览器，将复制的链接粘贴到地址栏中，即可在线观看发布成功的可视化应用。