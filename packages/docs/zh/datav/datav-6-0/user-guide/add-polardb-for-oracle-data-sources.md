<!DOCTYPE html> 

本文为您介绍在DataV中添加PolarDB for Oracle数据源的方法，以及相关参数配置说明。云原生关系型数据库PolarDB是阿里巴巴自主研发的下一代云原生关系型数据库，100%兼容Oracle语法。

## 通过外网添加数据源操作步骤

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在我的数据页签中选择数据源管理，单击添加数据。
3. 从类型列表中，选择PolarDB for Oracle 。
4. 在列表中选择外网。
5. 填写PolarDB for Oracle数据源相关信息。  
![外网配置面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2325909261/p304052.png)

| 参数  | 说明                                                                                                                                                                                                                                                 |
| ---- | ---- |
| 名称  | 数据源的显示名称，可以自由命名。                                                                                                                                                                                                                                   |
| 域名  | 连接数据库的外网地址。 **注意** 该地址是DataV服务器能够通过公网或阿里云部分Region内网访问您数据库的域名或IP地址。 例如使用外网环境下的阿里云PolarDB for Oracle，域名示例为：xxxxxxxx.o.polardb.rds.aliyuncs.com，可在[PolarDB 控制台](https://polardb.console.aliyun.com/)的实例基本信息页面，单击申请外网地址，并配置添加DataV外网的白名单，在外网地址生效后即可使用。 |
| 端口  | 数据库设置的端口。                                                                                                                                                                                                                                          |
| 用户名 | 登录数据库的用户名。                                                                                                                                                                                                                                         |
| 密码  | 登录数据库的密码。                                                                                                                                                                                                                                          |
| 数据库 | 当前所选数据库的名称。                                                                                                                                                                                                                                        |
6. 信息填写完成后，单击确定，完成数据源的添加。  
新添加的数据源会自动显示在数据源列表中。

## 通过内网添加数据源操作步骤

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在我的数据页签中选择数据源管理，单击添加数据。
3. 从类型列表中，选择PolarDB for Oracle 。
4. 在列表中选择内网，并选择PolarDB实例所在的区域。  
![选择内网](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2325909261/p304054.png)
5. 填写数据库信息。![内网配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3325909261/p304056.png)

| 参数     | 说明                                                                                                                                                                                                                                                                          |
| ---- | ---- |
| 名称     | 数据源的显示名称，可以自由命名。                                                                                                                                                                                                                                                            |
| VPC ID | VPC实例的ID，此VPC为您的PolarDB for Oracle实例所在的VPC。可进入[PolarDB 控制台](https://polardb.console.aliyun.com/)，在实例基本信息页面中获取，您可以配置添加实例所在区域的DataV VPC内网地址的白名单，即可获取查看到实例的VPC ID和VPC Instance ID。![获取ID](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3325909261/p304055.png) |
| 实例ID   | VPC下数据库实例的ID，可在[PolarDB 控制台](https://polardb.console.aliyun.com/)的实例基本信息页面获取。                                                                                                                                                                                               |
| 域名     | 连接数据库的内网地址。 **注意** 该地址是DataV服务器能够通过公网或阿里云部分Region内网访问您数据库的域名或IP地址。 例如使用内网环境下的阿里云PolarDB for Oracle，域名示例为：xxxxxxxx.o.polardb.rds.aliyuncs.com，可在[PolarDB 控制台](https://polardb.console.aliyun.com/)的实例基本信息页面，单击配置添加实例所在地域的DataV VPC内网地址的白名单，在内网地址生效后即可使用。                     |
| 端口     | 数据库设置的端口。                                                                                                                                                                                                                                                                   |
| 用户名    | 登录数据库的用户名。                                                                                                                                                                                                                                                                  |
| 密码     | 登录数据库的密码。                                                                                                                                                                                                                                                                   |
| 数据库    | 当前所选数据库的名称。                                                                                                                                                                                                                                                                 |
6. 数据库信息填写完成后，系统会自动进行测试连接，验证数据库是否能连通正常。
7. 测试连接通过后，单击确定，完成数据源添加。  
新添加的数据源会自动列在数据源列表中。