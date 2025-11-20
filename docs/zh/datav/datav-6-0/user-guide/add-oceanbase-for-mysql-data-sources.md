# 添加OceanBase for MySQL数据源 %{#297361}% 

本文为您介绍在DataV中添加OceanBase for MySQL数据源的方法，以及相关参数配置说明。OceanBase具有数据强一致、高可用、高性能、在线扩展、高度兼容SQL标准和主流关系型数据库、低成本等特点。

## 通过外网添加数据源操作步骤

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在**我的数据**页签中选择**数据源管理**，单击**添加数据**。
3. 从**类型**列表中，选择**OceanBase for MySQL** 。
4. 在列表中选择**外网**。
5. 填写OceanBase for MySQL数据源相关信息。  
![外网配置参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9125909261/p304067.png)

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **名称**    |    数据源的显示名称，可以自由命名。    |
|    **域名**    |    连接数据库的外网地址。 **重要** 该地址是DataV服务器能够通过公网或阿里云部分Region内网访问您数据库的域名或IP地址。例如使用外网环境下的阿里云OceanBase for MySQL，域名示例为：xxxxxxxx.oceanbase.aliyuncs.com，可在[OceanBase控制台](https://oceanbasenext.console.aliyun.com/cn-hangzhou/overview)的**租户详情**页面，单击申请外网地址，并配置添加DataV外网的白名单，在外网地址生效后即可使用。    |
|    **端口**    |    数据库设置的端口，默认端口3306。    |
|    **用户名**    |    登录数据库的用户名。    |
|    **密码**    |    登录数据库的密码。    |
|    **数据库**    |    当前所选数据库的名称。    |
|    **insecureAuth**    |    当您的MySQL版本较低时，需要打开开关后才可以配置使用MySQL。    |
6. 信息填写完成后，单击**确定**，完成数据源的添加。  
新添加的数据源会自动显示在数据源列表中。

## 通过内网添加数据源操作步骤

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在**我的数据**页签中选择**数据源管理**，单击**添加数据**。
3. 从**类型**列表中，选择**OceanBase for MySQL** 。
4. 在列表中选择**内网**，并选择OceanBase实例所在的区域。  
![选择内网](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9125909261/p304955.png)
5. 填写数据库信息。![内网参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8125909261/p304953.png)

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **名称**    |    数据源的显示名称，可以自由命名。    |
|    **VPC ID**    |    VPC实例的ID，此VPC为您的OceanBase实例所在的VPC。可进入[OceanBase控制台](https://oceanbasenext.console.aliyun.com/cn-hangzhou/overview)，在**租户详情**页面的拓扑图里面的代理地址信息中获取，比如您要通过主地址的私网地址访问，VPC ID就填写主地址的VPC，如下图所示主地址卡片里面的《VPC网络：vpc-bp1\*\*\*\*\*\*》 ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5131345271/p844312.png)    |
|    **实例ID**    |    VPC下数据库实例的ID，跟填写VPC ID字段的查看方法一样，如果您要通过主地址的私网地址访问，VPC的实例ID就填写主地址的私网地址，如上图所示主地址卡片的私网地址《私网地址是t61j1\*\*\*\*\*\*1c.cn-hangzhou.oceanbase.aliyuncs.com》。    |
|    **域名**    |    连接数据库的内网地址。 **重要** 该地址是DataV服务器能够通过公网或阿里云部分Region内网访问您数据库的域名或IP地址。例如使用内网环境下的阿里云OceanBase for MySQL，域名示例为：xxxxxxxx.oceanbase.aliyuncs.com，可在[OceanBase控制台](https://oceanbasenext.console.aliyun.com/cn-hangzhou/overview)的**租户详情**页面，单击配置添加实例所在地域的DataV VPC内网地址的白名单，在内网地址生效后即可使用。    |
|    **端口**    |    数据库设置的端口，默认为3306。    |
|    **用户名**    |    登录数据库的用户名。    |
|    **密码**    |    登录数据库的密码。    |
|    **数据库**    |    当前所选数据库的名称。    |
|    **insecureAuth**    |    当您的MySQL版本较低时，需要打开开关后才可以配置使用MySQL。    |
6. 数据库信息填写完成后，系统会自动进行测试连接，验证数据库是否能连通正常。
7. 测试连接通过后，单击**确定**，完成数据源添加。  
新添加的数据源会自动列在数据源列表中。