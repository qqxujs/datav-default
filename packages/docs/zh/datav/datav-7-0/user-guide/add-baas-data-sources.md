<!DOCTYPE html> 

本文档为您介绍在DataV中添加区块链服务数据源的方法，以及相关参数配置说明。使用阿里云区块链服务（Blockchain as a Service，简称BaaS），您可以通过REST API调用智能合约，查询链上信息，也可以查询区块及交易信息。

## 前提条件

已准备好待添加的区块链服务数据源。

## 使用限制

仅支持企业版及以上版本。

## 添加区块链服务数据源

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面，单击**数据准备 > 数据源**，进入**数据源**页面，单击**新建数据源**。
3. 从**类型**列表中，选择**区块链服务**。
4. 填写区块链服务相关信息。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5172082761/p539643.png)

| **参数**           | **说明**                                                                                                                                                                                                                                                                                                                                      |
| ---- | ---- |
| **自定义数据源名称**     | 区块链服务数据源的显示名称，您可以自由命名。                                                                                                                                                                                                                                                                                                                      |
| **Endpoint**     | 区块链服务数据源的REST API地址。进入[区块链服务控制台](https://baas.console.aliyun.com/?spm=a2c4g.11186623.2.12.6e46395bYwIk5T&accounttraceid=45adc0f6ade24db2a61c3808d346968fvrwe)，单击您的**组织用户REST APIREST API 地址**中进行获取。![REST API地址步骤图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3818984951/p103804.png)                                    |
| **refreshToken** | 访问当前区块链服务数据源的Access Token信息，用来做请求发起者的身份认证。进入[区块链服务控制台](https://baas.console.aliyun.com/?spm=a2c4g.11186623.2.12.6e46395bYwIk5T&accounttraceid=45adc0f6ade24db2a61c3808d346968fvrwe)，单击您的**组织REST-API**，单击侧边栏的**生成Token**，在下方展示生成的Token信息中获取。![token获取](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3818984951/p103812.png) |
| **network**      | 区块链服务数据源的通道名称。进入[区块链服务控制台](https://baas.console.aliyun.com/?spm=a2c4g.11186623.2.12.6e46395bYwIk5T&accounttraceid=45adc0f6ade24db2a61c3808d346968fvrwe)，单击您的**组织** \> **已加入通道**中进行获取。![通道获取步骤](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3818984951/p103798.png)                                                         |
5. 信息填写完成后，单击**确定**，完成数据源的添加。  
新添加的数据源会自动显示在数据源列表中。

## 使用区块链服务数据源

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面中，将鼠标移动至需要编辑的数据看板上，单击**编辑**。

**重要**  
如果您的**工作台**页面内还没有创建任何数据看板，请参见[使用模板创建PC端看板](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)，创建一个数据看板。
3. 在画布编辑页面，单击画布中的某一组件。  
如果画布中还没有组件，请先添加组件，详情请参见[组件画布操作](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-operations-in-a-canvas#title-1c7-abe-n0m)。
4. 在画布右侧的组件配置面板中选择**数据源**。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0024312761/p539649.png)
5. 在**设置数据源**模块中，选择**数据源类型**为**区块链服务**。
6. 在**选择已有数据源**列表中选择配置完成的**区块链服务**数据源。
7. 在下方**查询参数**编辑框中，填写需要的查询的区块链参数内容。

**说明**  
由于查询区块链数据的方式多样化，您需要根据数据类型填写对应的查询参数方式。
8. 单击**查看数据返回结果**，查看数据返回结果。

## 后续步骤

获取原始数据后，可参见[组件数据源配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-data-source-configuration)进行组件数据的适配。

## 常见问题

更多问题，请参见[数据源配置常见问题](https://help.aliyun.com/zh/datav/datav-7-0/support/faq-about-data-source-configuration)。