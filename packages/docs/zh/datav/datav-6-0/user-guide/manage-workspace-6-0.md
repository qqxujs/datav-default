<!DOCTYPE html> 

工作空间是DataV-Board 6.0（数据看板）进行项目管理、成员管理、数据源管理、配额管理的基本单元，所有项目开发工作都将在具体的工作空间内完成。本文为您介绍如何创建工作空间、调整空间配额、添加成员并授权，以及管理工作空间。

## **工作空间基本操作**

| 操作                            | 说明                                                                                                                                                                                               |
| ---- | ---- |
| [创建工作空间](#c29820c9fenaj)      | 开通DataV-Board 6.0后，系统会为您提供一个默认的工作空间，您可直接使用。若您希望基于业务粒度划分，使用多个工作空间管理不同类型的项目，实现项目数据隔离，则可创建新的工作空间。                                                                                                   |
| [配置基本信息](#30a9f31fbechh)      | 可查看空间识别码，并按需配置工作空间的相关配额。                                                                                                                                                                         |
| [（可选）添加成员并授权](#a70686c171lui) | 如需使用RAM用户（即子账号）在指定工作空间中进行协同开发，则可将该账号添加为该工作空间的成员并授予相应权限。                                                                                                                                          |
| [管理工作空间](#5c266f3042lfy)      | 可按需查看、修改工作空间的配置，删除无用的工作空间。                                                                                                                                                                       |
| 切换/搜索工作空间                     | 登录[DataV控制台](https://datav.aliyun.com/v/console/)，单击左上角工作空间名称后的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927392.png)图标，选择目标工作空间进行切换。您也可通过关键词搜索，查找目标工作空间。 |

## **使用限制**

不同版本DataV-Board 6.0支持的工作空间数量（包含默认工作空间）如下。

| **DataV-Board 6.0版本** | **工作空间数量** |
| ---- | ---- |
| **企业版**               | 2个         |
| **专业版**               | 5个         |
| **尊享版**               | 100个       |

## **前提条件**

* 已[开通DataV-Board服务](https://help.aliyun.com/zh/datav/datav-6-0/getting-started/activate-datav)。
* （可选）[创建RAM用户](https://help.aliyun.com/zh/ram/user-guide/create-a-ram-user)。若工作空间需要添加成员进行协同开发，请先创建相应RAM用户。

## **进入工作空间管理**

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**我的可视化**页面，单击**管理项目配额**，即可进入工作空间管理页面。

## **创建工作空间**

1. 在**工作空间管理**页面左侧，单击**新建空间**。
2. 在**新建空间**对话框中输入空间名称，单击**确定**，进入空间详情页。
3. 在空间详情页，可按需配置工作空间的基本信息及成员信息。  
### **配置基本信息**  
可查看当前工作空间的识别码，并配置相关配额。工作空间的识别码是空间的唯一标识，后续可通过识别码进行[拷屏](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/group-function-and-move-function/#53024cbcfcbey)操作。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927540.png)  
工作空间涉及的配额如下。

| **参数**     | **描述**            | **配置原则**                                                                                                                                                                                                                                                                             | **版本最大配额（即所有工作空间的配额总数上限）**          |
| ---- | ---- | ---- | ---- |
| **数据看板配额** | 当前工作空间可创建的数据看板数量。 | 所有类型的配额均需遵循如下原则：当前已购买的DataV-Board 版本中所有工作空间的配额总数，不超过该版本支持的最大配额。**说明** 例如，您购买的**企业版**产品中，所有工作空间的**数据看板配额**总数不得超过20个。当前工作空间的配额，不超过所购版本的剩余配额数量。**说明** 例如，您购买了**企业版**产品，其**数据看板配额**上限为20个。若您当前的产品中已有工作空间所配置的**数据看板配额**总数为15个，则该版本**剩余的数据看板配额**为5个。此时，若您新建一个工作空间，则该工作空间的**数据看板配额**不得超过5个。 | 企业版：不超过20个。专业版：不超过40个。尊享版：不超过1000个。 |
| **收藏组件配额** | 当前工作空间可收藏的组件数量。   | 企业版：不超过20个。专业版：不超过40个。尊享版：不超过1000个。                                                                                                                                                                                                                                                  |                                     |
| **三维城市配额** | 当前工作空间可创建的三维城市数量。 | 企业版：不支持此功能。专业版：不超过10个。尊享版：不超过50个。                                                                                                                                                                                                                                                    |                                     |  
### **（可选）添加成员并授权**  
您可将目标RAM用户添加为某工作空间的成员，并授予相应权限，以便使用此账号在该工作空间中进行协同开发。添加成员以工作空间为管控粒度，通过授予用户不同角色，实现对工作空间内各功能点的权限控制。

**说明**  
添加成员前，请先[创建RAM用户](https://help.aliyun.com/zh/ram/user-guide/create-a-ram-user)。

  * **角色权限说明**：某成员加入工作空间后，即拥有该工作空间的相关操作权限，且不同角色拥有的权限存在差异。DataV-Board 支持的角色如下：

    * **所有者**：拥有当前工作空间的所有权限，默认开通DataV-Board 的阿里云主账号为**所有者**。
    * **管理员**：拥有当前工作空间的添加成员，管理及删除空间资源等权限，但不具备创建或删除工作空间的权限。
    * **开发者**：拥有当前工作空间的创建及编辑数据看板权限，不具备其他更高的权限。主要用于协同开发数据看板。
    * **运营者**：拥有当前工作空间的数据看板、演示预案的查看权限，不具备其他更高的权限。主要用于协助业务方日常运营看板。

**不同角色对于具体功能模块的细分权限详情如下。**

| **功能模块**                                   | **权限点**                                                                                       | **所有者**                                                                                       | **管理员**                                                                                       | **开发者**                                                                                       | **运营者**                                                                                       |
| ---- | ---- | ---- | ---- | ---- | ---- |
| **工作空间管理**                                 | 进入工作空间管理页                                                                                     | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) |
| 创建工作空间                                     | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927892.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927893.png) |                                                                                               |
| 分配工作空间的数据看板配额                              | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png) |                                                                                               |
| 删除工作空间                                     | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png) |                                                                                               |
| 创建和编辑工作空间内的其他资源（例如，设计资源）。                  | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png) |                                                                                               |
| 删除工作空间内的如下资源：数据看板收藏的组件数据源项目分组其他资源（例如，设计资源） | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png) |                                                                                               |
| **成员管理**                                   | 查看成员列表                                                                                        | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) |
| 添加成员                                       | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png) |                                                                                               |
| 移除成员                                       | 除自己外，可移除任何成员。                                                                                 | 除所有者外，可移除任何成员（包括自己）。                                                                          | 仅支持移除自己。                                                                                      | 仅支持移除自己。                                                                                      |                                                                                               |
| 修改成员角色                                     | 除自己外，可修改任何成员的角色。                                                                              | 除所有者和自己外，可修改任何成员的角色。                                                                          | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png) |                                                                                               |
| 修改成员到期时间                                   | 除自己外，可修改任何成员的到期时间。                                                                            | 除所有者外，可修改任何成员的到期时间（包括自己）。                                                                     | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png) |                                                                                               |
| **数据看板管理**                                 | 创建数据看板                                                                                        | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png) |
| 编辑数据看板，包括：添加组件编辑组件删除组件分享数据看板               | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png) |                                                                                               |
| 重命名数据看板                                    | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png) |                                                                                               |
| **项目分组**                                   | 重命名项目分组                                                                                       | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png) |
| **组件包**                                    | 为组件包授权                                                                                        | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png) |
| 在组件包中上传组件                                  | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927885.png) | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927891.png) |                                                                                               |
  * **操作指引**：可参考下图步骤添加成员并授权。成员添加完成后，您可在成员列表修改成员角色及到期时间，也可删除无用成员。

**说明**  
  成员添加后，默认无到期时间限制。若配置了到期时间，超期后，该成员的相关权限将会失效，无法再进入当前工作空间。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9953391471/p927880.png)

## **管理工作空间**

在左侧的工作空间列表，可执行如下操作：

* **查看与修改工作空间**：单击目标工作空间，可查看空间的识别码、配额、成员列表。您可按需修改配额或成员信息。
* **重命名工作空间**：鼠标悬停至目标工作空间，单击![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8289981471/p746697.png)图标，可修改工作空间名称。
* **删除工作空间**：鼠标悬停至目标工作空间，单击![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6293342071/p746694.png)图标，可删除该工作空间。  

**重要**  
工作空间一旦删除将无法恢复，请谨慎操作。

  * 仅工作空间**所有者**有权限删除工作空间。
  * 不支持删除默认工作空间。
  * 若工作空间已创建项目资源（例如，数据看板、三维城市、数据源、已收藏组件），则无法删除。删除工作空间前，请先删除该类资源。

## **拷屏到工作空间**

在DataV控制台中，支持将可视化应用跨工作空间复制迁移。

1. 在**我的可视化**页面，将鼠标移动到需要拷贝的可视化应用上，单击![拷屏](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4707722261/p278190.png)图标。
2. 在**拷屏到工作空间**对话框中，选择目标工作空间后，单击**确定**。
3. 进入目标工作空间，即可查看被拷屏过来的可视化应用。

## **后续步骤**

工作空间创建完成后，您可根据业务需要接入所需[数据源](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/add-data-sources/)，并[通过模板搭建可视化应用](https://help.aliyun.com/zh/datav/datav-6-0/getting-started/template-to-build-a-visual-application)。更多开发参考，请参见[功能概览](https://help.aliyun.com/zh/datav/datav-6-0/getting-started/getting-started)、[空白画布搭建可视化应用](https://help.aliyun.com/zh/datav/datav-6-0/getting-started/build-a-visual-application-on-a-blank-canvas)。