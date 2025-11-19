<!DOCTYPE html> 

本文为您介绍在DataV中添加ClickHouse数据源的方法，以及相关参数配置说明。

## 前提条件

已准备好待添加的ClickHouse数据源。

**重要** 

您必须先将对应区域的白名单IP地址添加到您的数据源白名单中，以确保DataV-Board能正常访问您的数据库。详情请参见[配置数据库白名单](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configure-a-database-whitelist-for-datav-7)。

## 通过内网添加数据源

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面，单击**数据准备** \> **数据源**，进入**数据源**页面，单击**新建数据源**。
3. 从**类型**列表中，选择**ClickHouse**。
4. 在列表中选择**内网**，并选择ClickHouse实例所在的地域。
5. 选择内网数据库的网络类型（包括专有网络和经典网络）。  
## 专有网络

  1. 打开**VPC**开关，进入专有网络模式。
  2. 填写数据库配置信息。  

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **名称**    |    自定义的数据源名称。    |
|    **VPC ID**    |    VPC实例的ID，此VPC为您的ClickHouse实例所在的VPC。您可登录[云数据库ClickHouse控制台](https://clickhouse.console.aliyun.com/)，单击集群ID，在**集群信息**页的**网络信息**区域，获取VPC ID。    |
|    **VPC实例ID**    |    可选VPC数据库实例 ID、 VPC网络连接地址、VPC网络IP地址其中一种。    |
|    **域名**    |    访问ClickHouse数据库实例使用的VPC地址。您可登录[云数据库ClickHouse控制台](https://clickhouse.console.aliyun.com/)，单击集群ID，在**集群信息**页的**网络信息**区域，获取VPC地址。    |
|    **端口**    |    数据库设置的端口号。    |
|    **数据库登录信息**    |    输入需要访问的ClickHouse实例的登录用户及密码，自动获取数据库列表或自定义输入数据库名称。您可登录[云数据库ClickHouse控制台](https://clickhouse.console.aliyun.com/)，单击集群ID，在左侧导航栏的**账号管理**页，查看账号信息。    |    
## 经典网络

  1. 关闭**VPC**开关，进入经典网络模式。
  2. 填写数据库配置信息。

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **名称**    |    自定义的数据源名称。    |
|    **域名**    |    访问ClickHouse数据库实例使用的经典网络地址。    |
|    **端口**    |    数据库设置的端口号。    |
|    **数据库登录信息**    |    输入需要访问的ClickHouse实例的登录用户及密码，自动获取数据库列表或自定义输入数据库名称。您可登录[云数据库ClickHouse控制台](https://clickhouse.console.aliyun.com/)，单击集群ID，在左侧导航栏的**账号管理**页，查看账号信息。    |
6. 数据库信息填写完成后，单击**确定**，系统将自动测试连接。若测试通过，新添加的数据源将自动显示在数据源列表中。

## 通过外网添加数据源

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面，单击**数据准备** \> **数据源**，进入**数据源**页面，单击**新建数据源**。
3. 从**类型**列表中，选择**ClickHouse**。
4. 在列表中选择**外网**。
5. 填写数据库配置信息。

|    参数    |    说明    |
|    ----    |    ----    |
|    **名称**    |    自定义的数据源名称。    |
|    **域名**    |    访问ClickHouse数据库实例使用的外网地址。您可登录[云数据库ClickHouse控制台](https://clickhouse.console.aliyun.com/)，单击集群ID，在**集群信息**页的**网络信息**区域，获取外网地址。    |
|    **端口**    |    数据库设置的端口号。    |
|    **数据库登录信息**    |    输入需要访问的ClickHouse实例的登录用户及密码，自动获取数据库列表或自定义输入数据库名称。您可登录[云数据库ClickHouse控制台](https://clickhouse.console.aliyun.com/)，单击集群ID，在左侧导航栏的**账号管理**页，查看账号信息。    |
6. 数据库信息填写完成后，单击**确定**，系统将自动测试连接。若测试通过，新添加的数据源将自动显示在数据源列表中。

## 后续步骤

获取原始数据后，可参见[组件数据源配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-data-source-configuration)进行组件数据的适配。

## 常见问题

更多问题，请参见[数据源配置和使用常见问题](https://help.aliyun.com/zh/datav/datav-7-0/support/faq-about-data-source-configuration)。