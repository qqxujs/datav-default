<!DOCTYPE html> 

本文为您介绍在DataV中添加PolarDB for MySQL数据源的方法，以及相关参数配置说明。云原生关系型数据库PolarDB是阿里巴巴自主研发的下一代云原生关系型数据库，100%兼容MySQL语法。

## 前提条件

已准备好待添加的PolarDB for MySQL数据源。

**重要** 

您必须先将对应区域的白名单IP地址添加到您的数据源白名单中，以确保DataV-Board能正常访问您的数据库。详情请参见[配置数据库白名单](/zh/datav/datav-7-0/user-guide/configure-a-database-whitelist-for-datav-7)。

## 使用限制

仅支持DataV企业版及以上版本。

## 通过内网添加数据源

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面，单击左侧导航栏中的**数据准备** \> **数据源**，进入**数据源**页面，单击**新建数据源**。
3. 从**类型**列表中，选择**PolarDB for MySQL** 。
4. 网络选择**内网**，并选择PolarDB实例所在的区域。
5. 填写数据库信息。

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **名称**    |    数据源的显示名称，可以自由命名。    |
|    **VPC ID**    |    VPC实例的ID，此VPC为您的PolarDB for MySQL实例所在的VPC。可进入[PolarDB 控制台](https://polardb.console.aliyun.com/)，在实例基本信息页面中获取，您可以配置添加实例所在区域的DataV VPC内网地址的白名单，即可获取查看到实例的VPC ID和VPC Instance ID。![获取实例id](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2625909261/p303768.png)    |
|    **VPC 实例 ID**    |    VPC下数据库实例的ID，可在[PolarDB 控制台](https://polardb.console.aliyun.com/)的实例基本信息页面获取。    |
|    **域名**    |    连接数据库的内网地址。 **重要** 该地址是DataV服务器能够通过公网或阿里云部分Region内网访问您数据库的域名或IP地址。例如使用内网环境下的阿里云PolarDB for MySQL，域名示例为：xxxxxxxx.mysql.polardb.rds.aliyuncs.com，可在[PolarDB 控制台](https://polardb.console.aliyun.com/)的实例基本信息页面，单击配置添加实例所在地域的DataV VPC内网地址的白名单，在内网地址生效后即可使用。    |
|    **端口**    |    数据库设置的端口，默认为3306。    |
|    **用户名**    |    登录数据库的用户名。    |
|    **密码**    |    登录数据库的密码。    |
|    **数据库**    |    当前所选数据库的名称。    |
6. 数据库信息填写完成后，系统会自动进行测试连接，验证数据库是否能连通正常。
7. 测试连接通过后，单击**确定**，完成数据源添加。  
新添加的数据源会自动列在数据源列表中。

## 通过外网添加数据源

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面，单击左侧导航栏中的**数据准备** \> **数据源**，进入**数据源**页面，单击**新建数据源**。
3. 从**类型**列表中，选择**PolarDB for MySQL** 。
4. 在列表中选择**外网**。
5. 填写PolarDB for MySQL数据源相关信息。

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **名称**    |    数据源的显示名称，可以自由命名。    |
|    **域名**    |    连接数据库的外网地址。 **重要** 该地址是DataV服务器能够通过公网或阿里云部分Region内网访问您数据库的域名或IP地址。例如使用外网环境下的阿里云PolarDB for MySQL，域名示例为：xxxxxxxx.mysql.polardb.rds.aliyuncs.com，可在[PolarDB 控制台](https://polardb.console.aliyun.com/)的实例基本信息页面，单击申请外网地址，并配置添加DataV外网的白名单，在外网地址生效后即可使用。    |
|    **端口**    |    数据库设置的端口。    |
|    **用户名**    |    登录数据库的用户名。    |
|    **密码**    |    登录数据库的密码。    |
|    **数据库**    |    当前所选数据库的名称。    |
6. 信息填写完成后，单击**确定**，完成数据源的添加。  
新添加的数据源会自动显示在数据源列表中。

## 后续步骤

获取原始数据后，可参见[组件数据源配置](/zh/datav/datav-7-0/user-guide/widget-data-source-configuration)进行组件数据的适配。

## 常见问题

更多问题，请参见[数据源配置和使用常见问题](/zh/datav/datav-7-0/support/faq-about-data-source-configuration)。