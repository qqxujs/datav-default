<!DOCTYPE html> 

本文档介绍在DataV中添加Oracle数据源的方法，以及相关参数配置说明。

## 前提条件

已准备好待添加的Oracle数据源。

**重要** 

您必须先将对应区域的白名单IP地址添加到您的数据源白名单中，以确保DataV-Board能正常访问您的数据库。详情请参见[配置数据库白名单](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configure-a-database-whitelist-for-datav-7)。

## 使用限制

仅支持企业版及以上版本。

## 操作步骤

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面，单击**数据准备 > 数据源**，进入**数据源**页面，单击**新建数据源**。
3. 从**类型**列表中，选择**Oracle**。
4. 填写数据库信息。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5762082761/p539727.png)

| **参数**           | **说明**                                                             |
| ---- | ---- |
| **名称**           | 数据源的显示名称，可以自由命名。                                                   |
| **域名**           | 连接数据库的地址。 **重要** 该地址是需要DataV服务器能够通过公网或阿里云部分Region内网访问您数据库的域名或IP地址。 |
| **端口**           | 数据库设置的端口。                                                          |
| **用户名**          | 登录数据库的用户名。                                                         |
| **密码**           | 登录数据库的密码。                                                          |
| **Service Name** | 当前所选数据库的服务名称。                                                      |  
数据库信息填写完成后，系统会自动进行测试连接，验证数据库是否能连通正常。
5. 连接成功后，单击**确定**，完成数据源添加。

## 后续步骤

获取原始数据后，可参见[组件数据源配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-data-source-configuration)进行组件数据的适配。

## 常见问题

更多问题，请参见[数据源配置和使用常见问题](https://help.aliyun.com/zh/datav/datav-7-0/support/faq-about-data-source-configuration)。