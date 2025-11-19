<!DOCTYPE html> 

本文介绍在DataV中添加DataWorks数据服务数据源，并将通过DataWorks数据表生成的API，快速地展示在DataV可视化大屏中的方法。

## 前提条件

已准备好待添加的[DataWorks数据服务](https://help.aliyun.com/zh/dataworks/user-guide/getting-started-with-dataservice-studio)。

## **使用限制**

仅支持DataV企业版及以上版本。

## 背景信息

* DataWorks数据服务生成的API默认不支持HTTPS协议，所以请您在HTTP协议下打开DataV，即单击[登录控制台](https://datav.aliyun.com/v/console/)打开DataV。
* 如果您需要在HTTPS协议下使用DataWorks数据服务生成的API，请绑定证书到API网关，详细绑定过程请参见[如何使您的API支持HTTPS](https://help.aliyun.com/zh/api-gateway/traditional-api-gateway/support/api-definition-issues#621cb3fdefule)。
* DataWorks数据服务生成的API发布后会对接到API网关，直接使用API网关默认提供的二级域名会有每天限流1000次的限制，您可以在[API网关控制台](http://apigateway.console.aliyun.com)中为分组绑定独立域名来解除限流限制。

## 添加DataWorks数据服务数据源

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面，单击左侧导航栏中的**数据准备** \> **数据源**，进入**数据源**页面，单击**新建数据源**。
3. 从**类型**列表中，选择**DataWorks数据服务**。
4. 填写**DataWorks数据服务**相关信息。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4414312761/p539763.png)

| **参数**        | **说明**                                                          |
| ------------- | --------------------------------------------------------------- |
| **自定义数据源名称**  | 数据源的显示名称，可以自由命名。                                                |
| **Region**    | DataWorks项目所在的地域。                                               |
| **项目**        | DataWorks项目（工作空间）。                                              |
| **AppKey**    | 拥有DataWorks数据服务中，某一项目访问权限的账号的AppKey，用于API调用（从DataWorks数据服务台获取）。 |
| **AppSecret** | 拥有DataWorks数据服务中，某一项目访问权限的账号的AppSecret（从DataWorks数据服务台获取）。      |

**说明**  
获取**AppKey**和**AppSecret**：在[DataWorks数据服务控制台](http://ds-cn-shanghai.data.aliyun.com)中，单击**服务管理API调用**，可获取您的**AppKey**和**AppSecret**。  
![获取APPKey和APPSecret](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2605964951/p37990.png)
5. 信息填写完成后，单击**确定**，完成数据源的添加。  
新添加的数据源会自动显示在数据源列表中。

## 使用DataWorks数据服务数据源

1. 准备通过**DataWorks数据服务**生成的API数据。  
登录[DataWorks数据服务控制台](http://ds-cn-shanghai.data.aliyun.com)，参见[生成API概述](https://help.aliyun.com/zh/dataworks/generate-api-overview#concept-rt5-k5h-r2b)，使用数据服务生成API。
2. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
3. 在**工作台**页面中，将鼠标移动至需要编辑的数据看板上，单击**编辑**。

**重要**  
如果您的**工作台**页面内还没有创建任何数据看板，请参见[使用模板创建PC端看板](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)，创建一个数据看板。
4. 在画布编辑页面，单击画布中的某一组件。  
如果画布中还没有组件，请先添加组件，详情请参见[组件画布操作](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-operations-in-a-canvas#title-1c7-abe-n0m)。
5. 在画布右侧的组件配置面板中选择**数据源**。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0024312761/p539649.png)
6. **数据源类型**选择**DataWorks数据服务**。
7. 在**选择已有数据源**列表中，选择您已经添加的DataWorks数据服务数据源。
8. 在**选择API**列表中选择上述已生成的DataWorks数据服务API 。
9. 单击**查看数据返回结果**，查看数据返回结果。

## 后续步骤

获取原始数据后，可参见[组件数据源配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-data-source-configuration)进行组件数据的适配。

## 常见问题

更多问题，请参见[数据源配置和使用常见问题](https://help.aliyun.com/zh/datav/datav-7-0/support/faq-about-data-source-configuration)。