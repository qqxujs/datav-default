<!DOCTYPE html> 

本文档介绍如何在DataV中添加并使用实时数仓Hologres数据源。 

## 前提条件

已准备好待添加的实时数仓Hologres数据源。

**重要** 

您必须先将对应区域的白名单IP地址添加到您的数据源白名单中，以确保DataV-Board能正常访问您的数据库。详情请参见[配置数据库白名单](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configure-a-database-whitelist-for-datav-7)。

## 使用限制

仅支持企业版及以上版本。

## 添加实时数仓Hologres数据源

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面，单击**数据准备 > 数据源**，进入**数据源**页面，单击**新建数据源**。
3. 从**类型**列表中，选择**实时数仓Hologres**。
4. 在列表中选择**内网**，并选择实例所在的区域。
5. 选择内网数据库的网络类型（包括**专有网络**和**经典网络**）。

  * **专有网络**

    1. 打开**VPC**开关，进入**专有网络**模式。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9593458861/p690291.png)
    2. 填写数据库信息。  

| **参数**    | **说明**                                                                                                                               |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| VPC ID    | Hologres实例绑定的指定VPC的VPC ID。进入[Hologres管理控制台](https://hologram.console.aliyun.com/#/instance)的实例详情页，从**网络信息**的指定VPC的**使用场景**列获取VPC ID。 |
| VPC 实例 ID | Hologres实例绑定指定VPC后生成的ID。进入[Hologres管理控制台](https://hologram.console.aliyun.com/#/instance)的实例详情页，从**网络信息**的指定VPC的**使用场景**列获取VPC实例ID。  |
| 名称        | 数据源的显示名称，可以自由命名。                                                                                                                     |
| 域名        | Hologres实例的域名。进入[Hologres管理控制台](https://hologram.console.aliyun.com/#/instance)的实例详情页，从**网络信息**的指定VPC的**域名**列获取域名。                   |
| 用户名       | 登录实时数仓Hologres实例账号的AccessKey ID。                                                                                                     |
| 密码        | 登录实时数仓Hologres实例账号的AccessKey Secret。                                                                                                 |
| 端口        | Hologres实例的指定VPC网络端口。进入[Hologres管理控制台](https://hologram.console.aliyun.com/#/instance)的实例详情页，从**网络信息**的指定VPC的**域名**列获取指定VPC的域名的端口。   |
| 数据库       | 当前所选数据库的名称。                                                                                                                          |
    3. 数据库信息填写完成后，系统会自动进行测试连接，验证数据库是否能连通正常。

**重要**  
      当数据库测试连接时，出现报错信息**Access VPC instance fail** 后，您可以在**实例ID**信息后面加上**\-1**后缀，并再次尝试测试连接数据库。
  * **经典网络**

    1. 关闭**VPC**开关，进入**经典网络**模式。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9593458861/p690297.png)
    2. 填写数据库信息。

| **参数** | **说明**                                                                                                                  |
| ------ | ----------------------------------------------------------------------------------------------------------------------- |
| 名称     | 数据源的显示名称，可以自由命名。                                                                                                        |
| 域名     | Hologres实例的域名。进入[Hologres管理控制台](https://hologram.console.aliyun.com/#/instance)的实例详情页，从**网络信息**的经典网络域名中获取域名。            |
| 用户名    | 登录实时数仓Hologres实例账号的AccessKey ID。                                                                                        |
| 密码     | 登录实时数仓Hologres实例账号的AccessKey Secret。                                                                                    |
| 端口     | Hologres实例的经典网络端口。进入[Hologres管理控制台](https://hologram.console.aliyun.com/#/instance)的实例详情页，从**网络信息**的经典网络域名中获取经典网络域名的端口。 |
| 数据库    | 当前所选数据库的名称。                                                                                                             |
    3. 数据库信息填写完成后，系统会自动进行测试连接，验证数据库是否能连通正常。

**重要**  
      当数据库测试连接时，出现报错信息**Access VPC instance fail** 后，您可以在**实例ID**信息后面加上**\-1**后缀，并再次尝试测试连接数据库。
6. 测试连接通过后，单击**确定**，完成数据源添加。  
新添加的数据源会自动列在数据源列表中。

## 通过外网添加数据源

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面，单击**数据准备 > 数据源**，进入**数据源**页面，单击**新建数据源**。
3. 从**类型**列表中，选择**实时数仓Hologres**。
4. 在列表中选择**外网**。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9593458861/p690300.png)
5. 填写数据库信息。

| **参数** | **说明**                                                                                                              |
| ------ | ------------------------------------------------------------------------------------------------------------------- |
| 名称     | 数据源的显示名称，可以自由命名。                                                                                                    |
| 域名     | Hologres实例的域名。进入[Hologres管理控制台](https://hologram.console.aliyun.com/#/instance)的实例详情页，从**网络信息**的公网域名中获取域名。          |
| 用户名    | 登录实时数仓Hologres实例账号的AccessKey ID。                                                                                    |
| 密码     | 登录实时数仓Hologres实例账号的AccessKey Secret。                                                                                |
| 端口     | Hologres实例的公网网络端口。进入[Hologres管理控制台](https://hologram.console.aliyun.com/#/instance)的实例详情页，从**网络信息**的公网域名中获取公网域名的端口。 |
| 数据库    | 当前所选数据库的名称。                                                                                                         |  
数据库信息填写完成后，系统会自动进行测试连接，验证数据库是否能连通正常。
6. 测试连接通过后，单击**确定**，完成数据源添加。  
新添加的数据源会自动列在数据源列表中。

## 后续步骤

获取原始数据后，可参见[组件数据源配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-data-source-configuration)进行组件数据的适配。

## 常见问题

更多问题，请参见[数据源配置常见问题](https://help.aliyun.com/zh/datav/datav-7-0/support/faq-about-data-source-configuration)。