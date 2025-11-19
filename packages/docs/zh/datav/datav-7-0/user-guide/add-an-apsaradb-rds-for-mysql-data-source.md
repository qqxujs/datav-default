<!DOCTYPE html> 

本文为您介绍在DataV中添加RDS for MySQL数据源的方法。

## 前提条件

已准备好待添加的RDS for MySQL数据源。

**重要** 

您必须先将对应区域的白名单IP地址添加到您的数据源白名单中，以确保DataV-Board能正常访问您的数据库。详情请参见[配置数据库白名单](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configure-a-database-whitelist-for-datav-7)。

## 使用限制

仅支持DataV企业版及以上版本。

## 通过内网添加数据源

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面，单击左侧导航栏中的**数据准备** \> **数据源**，进入**数据源**页面，单击**新建数据源**。
3. 从**类型**列表中，选择**RDS for MySQL**。
4. 在列表中选择**内网**，并选择RDS实例所在的区域。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5862082761/p539570.png)
5. 选择内网数据库的网络类型（包括专有网络和经典网络）。  
## 专有网络

  1. 打开**VPC**开关，进入专有网络模式。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6536268271/p854483.png)
  2. 填写数据库信息。  

**说明**  
  如果您需要新建数据库，请参见[创建数据库](https://help.aliyun.com/zh/rds/apsaradb-rds-for-mysql/create-a-database-for-an-apsaradb-rds-for-mysql-instance#concept-cg3-ljq-wdb)。

| **参数**        | **说明**                                                                                                                                                                                                                                             |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **名称**        | 数据源的显示名称，可以自由命名。                                                                                                                                                                                                                                   |
| **VPC ID**    | VPC实例的ID，此VPC为您的RDS for MySQL实例所在的VPC。可进入[RDS管理控制台](https://rdsnext.console.aliyun.com/)，在实例详情的数据库连接中获取。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6536268271/p854487.png)                                              |
| **VPC 实例 ID** | VPC下数据库实例的ID，可在[RDS管理控制台](https://rdsnext.console.aliyun.com/)的实例基本信息页面获取。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6536268271/p854488.png)                                                                            |
| **域名**        | 连接数据库的地址。 内网环境下的阿里云RDS for MySQL地址，可在[RDS管理控制台](https://rdsnext.console.aliyun.com/)的实例详情数据库获取。**重要** 该地址是DataV服务器能够通过公网或阿里云部分Region内网访问您数据库的域名或IP地址。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6536268271/p854493.png) |
| **端口**        | 数据库设置的端口，默认为3306。                                                                                                                                                                                                                                  |
| **用户名**       | 登录数据库的用户名。                                                                                                                                                                                                                                         |
| **密码**        | 登录数据库的密码。                                                                                                                                                                                                                                          |
| **数据库**       | 当前所选数据库的名称。                                                                                                                                                                                                                                        |
  3. 数据库信息填写完成后，系统会自动进行测试连接，验证数据库是否能正常连通。  
## 经典网络

  1. 关闭**VPC**开关，进入经典网络模式。
  2. 填写数据库信息。

**说明**  
  如果您需要新建数据库，请参见[创建数据库](https://help.aliyun.com/zh/rds/apsaradb-rds-for-mysql/create-a-database-for-an-apsaradb-rds-for-mysql-instance#concept-cg3-ljq-wdb)。

| **参数**  | **说明**                                                                                                                                                                                                                                             |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **名称**  | 数据源的显示名称，可以自由命名。                                                                                                                                                                                                                                   |
| **域名**  | 连接数据库的地址。 内网环境下的阿里云RDS for MySQL地址，可在[RDS管理控制台](https://rdsnext.console.aliyun.com/)的实例详情数据库获取。**重要** 该地址是DataV服务器能够通过公网或阿里云部分Region内网访问您数据库的域名或IP地址。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6536268271/p854493.png) |
| **端口**  | 数据库设置的端口，默认为3306。                                                                                                                                                                                                                                  |
| **用户名** | 登录数据库的用户名。                                                                                                                                                                                                                                         |
| **密码**  | 登录数据库的密码。                                                                                                                                                                                                                                          |
| **数据库** | 当前所选数据库的名称。                                                                                                                                                                                                                                        |
  3. 数据库信息填写完成后，系统会自动进行测试连接，验证数据库是否能连通正常。
6. 测试连接通过后，单击**确定**，完成数据源添加。新添加的数据源会自动列在数据源列表中。

## 通过外网添加数据源

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面，单击左侧导航栏中的**数据准备** \> **数据源**，进入**数据源**页面，单击**新建数据源**。
3. 从**类型**列表中，选择**RDS for MySQL**。
4. 在列表中选择**外网**。  
如果需要设置外网地址，请参见[设置连接地址](https://help.aliyun.com/zh/rds/apsaradb-rds-for-mysql/configure-endpoints-1#concept-tv3-pq1-ydb)。
5. 填写数据库信息。

| **参数**  | **说明**                                                                                                                                                                                                                                                   |
| ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **名称**  | 数据源的显示名称，可以自由命名。                                                                                                                                                                                                                                         |
| **域名**  | 连接数据库的地址。 使用外网环境下的阿里云RDS for MySQL地址，可在[RDS管理控制台](https://rdsnext.console.aliyun.com/)的实例详情数据库连接页面获取。**重要** 该地址是DataV服务器能够通过公网或阿里云部分Region内网访问您数据库的域名或IP地址。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6536268271/p854500.png) |
| **端口**  | 数据库设置的端口。                                                                                                                                                                                                                                                |
| **用户名** | 登录数据库的用户名。                                                                                                                                                                                                                                               |
| **密码**  | 登录数据库的密码。                                                                                                                                                                                                                                                |
| **数据库** | 当前所选数据库的名称。                                                                                                                                                                                                                                              |  
数据库信息填写完成后，系统会自动进行测试连接，验证数据库是否能连通正常。
6. 测试连接通过后，单击**确定**，完成数据源添加。  
新添加的数据源会自动列在数据源列表中。

## 后续步骤

获取原始数据后，可参见[组件数据源配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-data-source-configuration)进行组件数据的适配。

## 常见问题

更多问题，请参见[数据源配置和使用常见问题](https://help.aliyun.com/zh/datav/datav-7-0/support/faq-about-data-source-configuration)。