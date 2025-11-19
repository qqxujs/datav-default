# 创建RDS MySQL数据库表 %{#92037}% 

本文档为您介绍创建RDS MySQL数据库表的具体步骤。

## 操作步骤

1. 登录阿里云[云数据库RDS控制台](https://rdsnext.console.aliyun.com)。
2. 单击创建实例，创建RDS MySQL实例。![创建RDS for MySQL实例](http://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5617574751/p12612.png)
3. 单击RDS MySQL实例链接，进入基本信息页面。  

**说明** 您需要记录RDS MySQL实例的内网和外网地址，后面在DataV中创建数据源时会用到。
4. 单击左侧菜单栏的账号管理，创建账号。
5. 单击左侧菜单栏的数据库管理，创建数据库。
6. 单击左侧菜单栏的数据安全性，参考[设置白名单](/zh/rds/use-a-database-client-or-the-cli-to-connect-to-an-apsaradb-rds-for-mysql-instance-2#concept-pdr-k2f-vdb "创建RDS实例后，您需要设置RDS实例的白名单，以允许外部设备访问该RDS实例。")，添加数据库白名单。  
根据您数据库所在的网络类型，将DataV的白名单添加到RDS MySQL数据库中，详情请参见[配置数据库白名单](/zh/datav/datav-6-0/user-guide/configure-a-database-whitelist-for-datav-6#concept-hcq-ymz-q2b "本文档为您介绍配置DataV数据库白名单的方法。在添加数据源之前，您必须先将对应区域的白名单IP地址添加到您的数据源白名单中，以确保DataV能正常访问您的数据库。")。
7. 单击左侧菜单栏的基本信息，获取RDS实例的基本信息。  

**说明** 此信息需要填入DataHub的DataConnector中，用于同步数据到RDS MySQL。
8. 单击基本信息页面右上角的登录数据库，输入账号和密码，进入DMS系统。
9. 创建表mytable，包含两个字段，如下图所示。![创建表mytable](http://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5617574751/p12615.png)