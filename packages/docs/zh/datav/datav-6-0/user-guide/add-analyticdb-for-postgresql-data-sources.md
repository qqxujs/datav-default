<!DOCTYPE html> 

本文为您介绍在DataV中添加AnalyticDB for PostgreSQL数据源的方法。

## 前提条件

已准备好待添加的AnalyticDB for PostgreSQL数据源。

## 通过内网添加数据源操作步骤

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在**我的数据**页签中选择**数据源管理**，单击**添加数据**。
3. 从**类型**列表中，选择**AnalyticDB for PostgreSQL**。
4. 在**网络**列表中选择**内网**，并选择实例所在的区域（默认为**华东2**）。  
![选择内网](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2837465261/p290322.png)
5. 填写数据库信息。  
![添加数据面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3837465261/p290325.jpg)

| **参数**     | **说明**                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **名称**     | 数据源的显示名称，可以自由命名。                                                                                                                                                                                                                                                                                                                                                                                                          |
| **VPC ID** | VPC实例的ID，此VPC为您的AnalyticDB for PostgreSQL实例所在的VPC。可进入[AnalyticDB for PostgreSQL控制台](https://gpdbnext.console.aliyun.com/gpdb/)中获取。                                                                                                                                                                                                                                                                                        |
| **实例ID**   | VPC下数据库实例的ID，可在[AnalyticDB for PostgreSQL控制台](https://gpdbnext.console.aliyun.com/gpdb/)中获取。**说明** 通常您可以直接在数据库产品的控制台查看数据库实例的VPC实例ID。但是由于VPC网络实现机制的原因，有时控制台显示的实例ID并不是DataV数据源配置VPC网络需要的实例ID。因此您需要通过数据库产品的OpenAPI获取DataV需要的VPC实例ID，通常为数据库实例详情中的**VPCCloudInstanceId**或**VPCInstanceId**，具体数据库产品获取VPC实例ID的接口，请使用[DescribeDBInstanceNetInfo](https://help.aliyun.com/zh/analyticdb/api-describedbinstancenetinfo)接口获取VPC实例ID。 |
| **域名**     | 连接数据库的URL地址。 **重要** 此处的URL地址不是官网页面的URL，也不是本机的IP，是需要DataV服务器能够通过公网或阿里云部分Region内网访问您数据库的URL地址。例如使用外网环境下的阿里云AnalyticDB for PostgreSQL，域名示例为：gp-bp1uxxxxxxxxxxxxxx0o.gpdb.rds.aliyuncs.com，可在[AnalyticDB for PostgreSQL控制台](https://gpdbnext.console.aliyun.com/gpdb/)的基本信息页面获取。                                                                                                                                              |
| **端口**     | 数据库设置的端口。                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **用户名**    | 登录数据库的用户名。                                                                                                                                                                                                                                                                                                                                                                                                                |
| **密码**     | 登录数据库的密码。                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **数据库**    | 当前所选数据库的名称。                                                                                                                                                                                                                                                                                                                                                                                                               |  
数据库信息填写完成后，系统会自动进行测试连接，验证数据库是否能够连通正常。
6. 测试连接通过后，单击**确定**，完成数据源添加。  
新添加的数据源会自动列在数据源列表中。

## 通过外网添加数据源操作步骤

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在**我的数据**页签中选择**数据源管理**，单击**添加数据**。
3. 从**类型**列表中，选择**AnalyticDB for PostgreSQL**。
4. 在**网络**列表中选择**外网**。
5. 填写数据库信息。  
![外网数据面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3837465261/p290328.jpg)

| **参数**  | **说明**                                                                                                                                                                                                                                                                       |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **名称**  | 数据源的显示名称，可以自由命名。                                                                                                                                                                                                                                                             |
| **域名**  | 连接数据库的URL地址。 **重要** 此处的URL地址不是官网页面的URL，也不是本机的IP，是需要DataV服务器能够通过公网或阿里云部分Region内网访问您数据库的URL地址。例如使用外网环境下的阿里云AnalyticDB for PostgreSQL，域名示例为：gp-bp1uxxxxxxxxxxxxxx0o.gpdb.rds.aliyuncs.com，可在[AnalyticDB for PostgreSQL控制台](https://gpdbnext.console.aliyun.com/gpdb/)的基本信息页面获取。 |
| **端口**  | 数据库设置的端口。                                                                                                                                                                                                                                                                    |
| **用户名** | 登录数据库的用户名。                                                                                                                                                                                                                                                                   |
| **密码**  | 登录数据库的密码。                                                                                                                                                                                                                                                                    |
| **数据库** | 当前所选数据库的名称。                                                                                                                                                                                                                                                                  |  
数据库信息填写完成后，系统会自动进行测试连接，验证数据库是否能连通正常。
6. 测试连接通过后，单击**确定**，完成数据源添加。  
新添加的数据源会自动列在数据源列表中。