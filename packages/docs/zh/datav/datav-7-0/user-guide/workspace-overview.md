 

工作空间是DataV-Board 7.0（数据看板）进行项目管理、成员管理、数据源管理、配额管理的基本单元，所有项目开发工作都将在具体的工作空间内完成。本文为您介绍如何创建工作空间、调整空间配额、添加成员并授权，以及管理工作空间等相关操作。

## **工作空间基本操作**

工作空间的主要操作如下。

操作

说明

[创建工作空间](#5d30aa2016vc1)

开通DataV-Board 7.0后，系统会为您提供一个默认的工作空间，您可直接使用。若您希望基于业务粒度划分，使用多个工作空间管理不同类型的项目，实现项目数据隔离，则可创建新的工作空间。

[配置基本信息](#6b3aea1ddfpiv)

工作空间创建完成后，可查看空间识别码，并按需配置工作空间的相关配额。

[（可选）添加成员并授权](#48ac5a26491a9)

如需使用RAM用户（即子账号）在指定工作空间中进行协同开发，则可将该账号添加为该工作空间的成员并授予相应权限。

[管理工作空间](#5c266f3042lfy)

工作空间创建完成后，可按需查看、修改工作空间的配置，删除无用的工作空间。

切换工作空间

登录[DataV控制台](https://datav.aliyun.com/v/console/)，单击左上角工作空间名称后的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927392.png)图标，选择目标工作空间进行切换。您也可通过关键词搜索，查找目标工作空间。

## **使用限制**

不同版本DataV-Board 7.0支持的工作空间数量（包含默认工作空间）如下。

**DataV-Board 7.0版本**

**工作空间数量**

**专业版试用**

1个

**说明**

系统默认工作空间，无需手动创建。

**个人版**

**企业版**

2个

**专业版**

5个

**尊享版**

100个

## **前提条件**

-   已[开通DataV-Board服务](https://help.aliyun.com/zh/datav/datav-7-0/getting-started/activate-datav-1)。
    
-   （可选）[创建RAM用户](https://help.aliyun.com/zh/ram/user-guide/create-a-ram-user)。若工作空间需要添加成员进行协同开发，请先创建相应RAM用户。
    

## **进入工作空间管理**

**说明**

个人版不支持进入工作空间管理页面。

1.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
2.  单击左上角工作空间名称后的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927476.png)图标，选择**管理**，进入工作空间管理页面。
    

**说明**

当您的角色为**运营者**时，需[登录可视化应用中心](https://datav.aliyun.com/v/appcenter/)，单击左上角的**管理工作空间**，进入工作空间管理页面。

## **创建工作空间**

1.  [进入工作空间管理](#58b0a04016ok1)。
    
2.  在**工作空间管理**页面左侧，单击**新建空间**。
    
3.  在**新建空间**对话框中输入空间名称，单击**确定**，进入空间详情页。
    
4.  在空间详情页，可按需配置工作空间的基本信息及成员信息。
    
    -   **配置基本信息**
        
        可查看当前工作空间的识别码，并配置相关配额。工作空间的识别码是空间的唯一标识，不支持修改，后续可通过识别码进行[拷屏](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/manage-a-data-dashboard#d3e7b59063o77)操作。
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927540.png)
        
        **说明**
        
        当存在多个工作空间时，会共享配额数量。
        
        工作空间涉及的配额如下。
        
        **参数**
        
        **描述**
        
        **配置原则**
        
        **版本最大配额（即所有工作空间的配额总数上限）**
        
        **数据看板配额**
        
        当前工作空间可创建的数据看板数量。
        
        所有类型的配额均需遵循如下原则：
        
        -   当前已购买的DataV-Board 7.0版本中所有工作空间的配额总数，不超过该版本支持的最大配额。
            
            **说明**
            
            例如，您购买的**企业版**产品中，所有工作空间的**数据看板配额**总数不得超过`20`个。
            
        -   当前工作空间的配额，不超过所购版本的剩余配额数量。
            
            **说明**
            
            例如，您购买了**企业版**产品，其**数据看板配额**上限为`20`个。若您当前的产品中已有工作空间所配置的**数据看板配额**总数为`15`个，则该版本**剩余的数据看板配额**为5个。此时，若您新建一个工作空间，则该工作空间的**数据看板配额**不得超过`5`个。
            
        
        -   **专业版试用：**5个
            
        -   **个人版**：5个
            
        -   **企业版**：20个
            
        -   **专业版**：40个
            
        -   **尊享版：**1000个
            
        
        **收藏组件配额**
        
        当前工作空间可收藏的组件数量。
        
        -   **专业版试用**：5个
            
        -   **个人版**：不支持
            
        -   **企业版：**20个
            
        -   **专业版**：40个
            
        -   **尊享版**：1000个
            
        
        **三维城市配额**
        
        当前工作空间可创建的三维城市数量。
        
        -   **专业版试用**：1个
            
        -   **个人版**：不支持
            
        -   **企业版**：不支持
            
        -   **专业版：**10个
            
        -   **尊享版：**50个
            
        
        **预案配额**
        
        当前工作空间可配置的[预案](https://help.aliyun.com/zh/datav/datav-7-0/product-overview/terms-for-datav-board-7#a7e9f61fc5x44)数量。
        
        -   **专业版试用**：5个
            
        -   **个人版**：不支持
            
        -   **企业版**：20个
            
        -   **专业版：**40个
            
        -   尊享版：100个
            
        
    -   **（可选）添加成员并授权**
        
        您可将目标RAM用户添加为某工作空间的成员，并授予相应权限，以便使用此账号在该工作空间中进行协同开发。添加成员以工作空间为管控粒度，通过授予用户不同角色，实现对工作空间内各功能点的权限控制。
        
        **说明**
        
        添加成员前，请先[创建RAM用户](https://help.aliyun.com/zh/ram/user-guide/create-a-ram-user)。
        
        -   **角色权限说明**：某成员加入工作空间后，即拥有该工作空间的相关操作权限，且不同角色拥有的权限存在差异。DataV-Board 7.0支持的角色如下：
            
            -   **所有者**：拥有当前工作空间的所有权限，默认开通DataV-Board 7.0的阿里云主账号为**所有者**。
                
            -   **管理员**：拥有当前工作空间的添加成员，管理及删除空间资源等权限，但不具备创建或删除工作空间的权限。
                
            -   **开发者**：拥有当前工作空间的创建及编辑数据看板权限，不具备其他更高的权限。主要用于协同开发数据看板。
                
            -   **运营者**：拥有当前工作空间的数据看板、演示预案的查看权限，不具备其他更高的权限。主要用于协助业务方日常运营看板。
                
            
            **不同角色对于具体功能模块的细分权限详情如下。**
            
            **功能模块**
            
            **权限点**
            
            **所有者**
            
            **管理员**
            
            **开发者**
            
            **运营者**
            
            **工作空间管理**
            
            进入工作空间管理页
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            创建工作空间
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927892.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927893.png)
            
            分配工作空间的数据看板配额
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png)
            
            删除工作空间
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png)
            
            创建和编辑工作空间内的其他资源（例如，设计资源）。
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png)
            
            删除工作空间内的如下资源：
            
            -   数据看板
                
            -   收藏的组件
                
            -   数据源
                
            -   项目分组
                
            -   其他资源（例如，设计资源）
                
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png)
            
            **成员管理**
            
            查看成员列表
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            添加成员
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png)
            
            移除成员
            
            除自己外，可移除任何成员。
            
            除所有者外，可移除任何成员（包括自己）。
            
            仅支持移除自己。
            
            仅支持移除自己。
            
            修改成员角色
            
            除自己外，可修改任何成员的角色。
            
            除所有者和自己外，可修改任何成员的角色。
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png)
            
            修改成员到期时间
            
            除自己外，可修改任何成员的到期时间。
            
            除所有者外，可修改任何成员的到期时间（包括自己）。
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png)
            
            **数据看板管理**
            
            创建数据看板
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png)
            
            编辑数据看板，包括：
            
            -   添加组件
                
            -   编辑组件
                
            -   删除组件
                
            -   分享数据看板
                
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png)
            
            重命名数据看板
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png)
            
            **项目分组**
            
            重命名项目分组
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png)
            
            **组件包**
            
            为组件包授权
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png)
            
            在组件包中上传组件
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png)
            
            **可视化应用中心**
            
            -   访问权限：查看数据看板及演示预案。
                
            -   运营权限：查看并进行访问统计。
                
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            **可视化演播厅**
            
            -   使用权限：查看与投屏。
                
            -   编辑权限：新增、删除、修改。
                
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png)
            
        -   **操作指引**：可参考下图步骤添加成员并授权。成员添加完成后，您可在成员列表修改成员角色及到期时间，也可删除无用成员。
            
            **说明**
            
            成员添加后，默认无到期时间限制。若配置了到期时间，超期后，该成员的相关权限将会失效，无法再进入当前工作空间。
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0231310571/p968578.png)
            

## **管理工作空间**

[进入工作空间管理](#58b0a04016ok1)页面，在左侧的工作空间列表，可执行如下操作：

-   **查看与修改工作空间**：单击目标工作空间，可查看空间的识别码、配额、成员列表。您可按需修改配额或成员信息。
    
-   **重命名工作空间**：鼠标悬停至目标工作空间，单击![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8289981471/p746697.png)图标，可修改工作空间名称。
    
-   **删除工作空间**：鼠标悬停至目标工作空间，单击![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6293342071/p746694.png)图标，可删除该工作空间。
    
    **重要**
    
    工作空间一旦删除将无法恢复，请谨慎操作。
    
    -   仅工作空间**所有者**有权限删除工作空间。
        
    -   不支持删除默认工作空间。
        
    -   若工作空间已创建项目资源（例如，数据看板、三维城市、数据源、项目分组、已收藏组件），则无法删除。删除工作空间前，请先删除该类资源。
        
-   **搜索工作空间**：[登录DataV控制台](https://datav.aliyun.com/v/console/)，单击左上角工作空间名称后的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p928081.png)图标，可按照名称或ID搜索目标工作空间。
    

## **后续步骤**

工作空间创建完成后，您可根据业务需要接入所需[数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/data-source/)，并[创建数据看板](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)。更多开发参考，请参见[核心功能概览](https://help.aliyun.com/zh/datav/datav-7-0/getting-started/introduction-to-core-competencies)、[操作指引](https://help.aliyun.com/zh/datav/datav-7-0/getting-started/function-overview)、[空白画布搭建数据看板](https://help.aliyun.com/zh/datav/datav-7-0/getting-started/use-a-canvas-to-create-a-dashboard)。