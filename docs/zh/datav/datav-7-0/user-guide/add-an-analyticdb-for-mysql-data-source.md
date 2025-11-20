<!DOCTYPE html> 

本文为您介绍在DataV中添加AnalyticDB for MySQL数据源的方法。

## 前提条件

已准备好待添加的AnalyticDB for MySQL数据源。

**重要** 

您必须先将对应区域的白名单IP地址添加到您的数据源白名单中，以确保DataV-Board能正常访问您的数据库。详情请参见[配置数据库白名单](/zh/datav/datav-7-0/user-guide/configure-a-database-whitelist-for-datav-7)。

## 使用限制

仅支持DataV企业版及以上版本。

## 通过内网添加数据源

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面，单击左侧导航栏中的**数据准备** \> **数据源**，进入**数据源**页面，单击**新建数据源**。
3. 在**类型**列表中，选择**AnalyticDB for MySQL**。
4. 在**网络**列表中选择**内网**，并选择实例所在的区域（默认为华东2）。
5. 填写数据库信息。

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **名称**    |    数据源的显示名称，可以自由命名。    |
|    **VPC ID**    |    VPC实例的ID，此VPC为您的AnalyticDB for MySQL实例所在的VPC。可进入[AnalyticDB控制台](https://ads.console.aliyun.com/adb/instances)中获取。    |
|    **VPC 实例 ID**    |    VPC下数据库实例的ID，可在[AnalyticDB控制台](https://ads.console.aliyun.com/adb/instances)中获取。**说明** 通常您可以直接在数据库产品的控制台查看数据库实例的VPC实例ID。但是由于VPC网络实现机制的原因，有时控制台显示的实例ID并不是DataV数据源配置VPC网络需要的实例ID。因此您需要通过数据库产品的OpenAPI获取DataV需要的VPC实例ID，通常为数据库实例详情中的**VPCCloudInstanceId**或**VPCInstanceId**，具体数据库产品获取VPC实例ID的接口，请使用[DescribeDBClusterAttribute - 查询集群的详细属性](/zh/analyticdb/analyticdb-for-mysql/developer-reference/api-adb-2019-03-15-describedbclusterattribute)接口获取VPC实例ID。    |
|    **域名**    |    连接数据库的地址。 **重要** 该地址是需要DataV服务器能够通过公网或阿里云部分Region内网访问您数据库的域名或IP地址。例如使用外网环境下的阿里云AnalyticDB for MySQL，域名示例为：am-bp1uxxxxxxxxxxxxxx0o.ads.aliyuncs.com，可在[AnalyticDB控制台](https://ads.console.aliyun.com/adb/instances)的集群信息页面获取。    |
|    **端口**    |    数据库设置的端口，默认为3306。    |
|    **用户名**    |    登录数据库的用户名。    |
|    **密码**    |    登录数据库的密码。    |
|    **数据库**    |    当前所选数据库的名称。    |    
数据库信息填写完成后，系统会自动进行测试连接，验证数据库是否能够连通正常。
6. 测试连接通过后，单击**确定**，完成数据源添加。  
新添加的数据源会自动列在数据源列表中。

## 通过外网添加数据源

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面，单击左侧导航栏中的**数据准备** \> **数据源**，进入**数据源**页面，单击**新建数据源**。
3. 在**类型**列表中，选择**AnalyticDB for MySQL**。
4. 在**网络**列表中选择**外网**。
5. 填写数据库信息。

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **名称**    |    数据源的显示名称，可以自由命名。    |
|    **域名**    |    连接数据库的地址。 **重要** 该地址是需要DataV服务器能够通过公网或阿里云部分Region内网访问您数据库的域名或IP地址。例如使用外网环境下的阿里云AnalyticDB for MySQL，域名示例为：am-bp1uxxxxxxxxxxxxxx0o.ads.aliyuncs.com，可在[AnalyticDB控制台](https://ads.console.aliyun.com/adb/instances)的集群信息页面获取。    |
|    **端口**    |    数据库设置的端口。    |
|    **用户名**    |    登录数据库的用户名。    |
|    **密码**    |    登录数据库的密码。    |
|    **数据库**    |    当前所选数据库的名称。    |    
数据库信息填写完成后，系统会自动进行测试连接，验证数据库是否能连通正常。
6. 测试连接通过后，单击**确定**，完成数据源添加。  
新添加的数据源会自动列在数据源列表中。

## 后续步骤

获取原始数据后，可参见[组件数据源配置](/zh/datav/datav-7-0/user-guide/widget-data-source-configuration)进行组件数据的适配。

## 常见问题

更多问题，请参见[数据源配置和使用常见问题](/zh/datav/datav-7-0/support/faq-about-data-source-configuration)。