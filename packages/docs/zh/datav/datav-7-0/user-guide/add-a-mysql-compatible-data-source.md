<!DOCTYPE html> 

本文档介绍在DataV中添加兼容MySQL数据库数据源的方法，以及相关参数配置说明。通过兼容MySQL数据库的数据源，您可以使用旧版本的MySQL数据库作为组件的数据源。

## 前提条件

已准备好待添加的兼容MySQL数据库数据源。

**重要** 

您必须先将对应区域的白名单IP地址添加到您的数据源白名单中，以确保DataV-Board能正常访问您的数据库。详情请参见[配置数据库白名单](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configure-a-database-whitelist-for-datav-7)。

## 使用限制

仅支持企业版及以上版本。

## 操作步骤

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面，单击**数据准备 > 数据源**，进入**数据源**页面，单击**新建数据源**。
3. 从**类型**列表中，选择**兼容MySQL数据库**。
4. 填写数据库信息。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2862082761/p539728.png)

| **参数**                          | **说明**                                                         |
| ------------------------------- | -------------------------------------------------------------- |
| **名称**                          | 数据源的显示名称，可以自由命名。                                               |
| **域名**                          | 连接数据库的地址。 **重要** 该地址是需要DataV服务器能够通过公网或阿里云部分地域内网访问您数据库的域名或IP地址。 |
| **端口**                          | 数据库设置的端口。                                                      |
| **用户名**                         | 登录数据库的用户名。                                                     |
| **密码**                          | 登录数据库的密码。                                                      |
| **数据库**                         | 当前所选数据库的名称。                                                    |
| **insecureAuth**                | 开启后，能够兼容旧版本的MySQL数据库（低于5.2版本，不保证全部兼容）。                         |
| **兼容 Azure Database for MySQL** | 开启后，能够兼容微软的MySQL数据库。                                           |  
数据库信息填写完成后，系统会自动进行测试连接，验证数据库是否能正常连通。
5. 连接成功后，单击**确定**，完成数据源添加。

## 后续步骤

获取原始数据后，可参见[组件数据源配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-data-source-configuration)进行组件数据的适配。

## 常见问题

更多问题，请参见[数据源配置常见问题](https://help.aliyun.com/zh/datav/datav-7-0/support/faq-about-data-source-configuration)。