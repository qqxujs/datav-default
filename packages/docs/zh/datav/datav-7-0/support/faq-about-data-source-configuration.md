<!DOCTYPE html> 

连接数据源时，可能遇到配置问题、性能问题、数据一致性问题等。本文介绍连接数据源和使用数据源时，遇到的常见问题及相应的解决方法。

## **连接问题**

### **数据源连接失败或超时**

若您在连接数据源时出现报错，请优先排查以下原因：

1. 对于数据库类的数据源，请确保正确[配置数据库白名单](/zh/datav/datav-7-0/user-guide/configure-a-database-whitelist-for-datav-7)。

  * **阿里云数据库**：请在数据库**白名单与安全组**配置中添加指定IP地址。
  * **阿里云ECS上自建数据库**：请在ECS的[添加安全组规则](/zh/ecs/user-guide/add-a-security-group-rule#concept-sm5-2wz-xdb)、系统防火墙和数据库白名单添加指定IP地址 。
  * **本地的自建数据库**：请在该物理机的系统防火墙、网络防火墙和数据库白名单添加指定IP地址。
2. 请确认网络类型与数据源实际类型是否一致。

  * 当填写外网地址时，网络类型请选择**外网**。
  * 当填写内网VPC地址时，网络类型请选择**内网**并开启**VPC**访问。
3. 数据库账号或者AccessKey ID没有需要的权限。

  * 请确保数据库用户名拥有**List**权限，以便获取数据表列表。
  * 请确保AccessKey ID拥有**Read**权限，以便访问实例。
4. 数据代理服务连接失败，请参见[数据代理请求常见问题](/zh/datav/datav-7-0/support/faq-about-data-proxy-requests)。
5. 若以下完全正确，仍然连接超时，可能是DataV-Board的10秒连接超时限制。超时问题，具体可参考[性能问题](#f66b447cc7ggf)。

若仍连接失败，请复制完整错误信息，[联系我们](/zh/datav/datav-7-0/support/contact-us-for-datav-7)进行问题排查。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5189846371/p899202.png)

### MySQL 8.0 数据库**报错**

在使用 MySQL 8.0 时，可能会遇到如下错误提示：

```
ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
```

这个错误是由于 MySQL 8.0 默认使用了一种新的认证插件（**caching\_sha2\_password**），而DataV-Board不支持这种加密方式，导致无法连接到数据库。将认证插件修改为较老版本的 **mysql\_native\_password**，即可解决问题。以下是步骤：

1. 登录MySQL数据库： 使用具有足够权限的用户（如root）登录到MySQL服务器。  
```  
mysql -u root -p  
```
2. 切换认证插件： 对于需要更改的特定用户，执行以下SQL语句来更新其认证插件：  
```  
ALTER USER 'your_username'@'host' IDENTIFIED WITH mysql_native_password BY 'your_password';  
```

  * your\_username：替换为目标用户的用户名。
  * host：替换为该用户连接到数据库的主机名（通常为localhost或%）。
  * your\_password：替换为该用户的密码。
3. 刷新权限： 确保更改立即生效，执行以下命令刷新权限：  
```  
FLUSH PRIVILEGES;  
```
4. 查看插件是否更新成功。  
```  
SELECT user, host, plugin FROM mysql. user WHERE user = 'your_username' ;  
```  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5189846371/p899400.png)
5. 退出MySQL： 完成配置更改后，退出MySQL客户端：  
```  
EXIT;  
```

## **性能问题**

DataV-Board设置了数据库请求时间限制，即如果数据查询时间超过10秒，就会报请求超时的错误。

### **业务数据表数量太大，导致SQL查询超时**

您可尝试通过以下几种方式提高查询性能：

* 针对查询条件所使用的字段添加索引，减少扫描行数，从而加速查询。
* 在数据库中增加定时任务，定时计算所需要的业务指标并更新结果表。组件直接查询结果表的数据，无需每次执行SQL查询获取组件数据。
* 通过自建API 服务（[需支持跨域](/zh/datav/datav-7-0/user-guide/add-api-data-sources#0d32c9a98a1l2)），从而避免查询超时。
* 通过[DataV数据代理服务](/zh/datav/how-to-use-datav-proxy)方式，突破系统10秒连接超时限制。

### **API接口内部业务调用链路较长，导致查询超时**

如果读取数据源超过了DataV的超时时间，就意味着查询数据的方式较为复杂，可以通过优化查询时间的方式来处理。您可尝试通过以下3种方式提高查询性能：

* 为API服务设计缓存空间，针对常用的数据进行高效缓存，减少多次调用读取耗时。
* 优化调用链路，将可以并行调用的过程并行化处理，压缩接口总时间。
* 增加数据中间层，将多次接口调用的中间链路复用，减少系统消耗。

具体的优化方案要结合查询本身的技术特征、业务数据的逻辑关系以及相关技术框架等来考虑和设计。

## **数据安全性问题** 

系统默认采取使用**TLS**加密协议，保护您的数据安全。 若您有所顾忌，可采取以下两种方式：

* 使用[DataV数据代理服务](/zh/datav/how-to-use-datav-proxy)方式，无需暴露数据库的公网IP，就可以连接自建的数据库，提高数据安全性。
* 可使用尊享版本进行本地部署，具体操作请参见[产品升级](/zh/datav/datav-7-0/product-overview/service-upgrades-and-downgrades)。

## **数据一致性问题**

系统不缓存任何数据，每次请求均获取数据源最新数据，以保证数据一致性。

## **数据配置问题**

当数据源添加成功后，进入画布中进行使用。您需通过数据映射、SQL语句、过滤器等各种方式将数据源数据改造成组件所支持数据结构，方可正常展示效果。

### **组件配置数据源时，请求报超时**

当数据源添加成功，但使用时存在连接超时。可能是以下几个原因：

* SQL语句过于复杂，导致连接超时。

  * 解决方法：建议您优化查询SQL语句，或者调整表结构来缩短查询时长。
* 组件**自动更新请求**设置间隔较短，同时组件数据查询时间较长，会触发Chrome浏览器同一域名同一时间最多只能发起6个HTTP请求的限制，导致后面的请求pending在浏览器中无法发送至服务端。

  * 解决方法：建议您调整自动更新请求间隔时长，或优化SQL语句来缩短数据返回时间。

### **配置CSV数据来源**

设置CSV的首行为表头，并且表头名需要和相应图表中要求的数据结构字段名保持一致。以Echarts 柱状图为例，表头应为**x坐标轴值**、**y坐标轴值**、**系列值**。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5189846371/p899312.png)

### **回调ID为数组时SQL编写**

假设`idList`为您配置的回调ID数组。

* 当您使用普通SQL查询时：  
```  
 select * from tb where id in (:idList)  
```  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5189846371/p899339.png)
* 当您使用数据库存储过程查询时：  
```  
call myFunc(concat_ws(',', :idList))  
```  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5189846371/p899345.png)

**说明**  
myFunc为自定义的存储过程名称。

### **轮播列表SQL编写**

通过SQL设置别名方式，将字段名设置成**列字段名**进行SQL查询即可。 

```
select field1 as “列1”, filed2 as "列2", field3 as "列3" from table
```

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5189846371/p899327.png)

### **组件配置API数据源时报错：Unexpected end of JSON input**

* **问题描述：**组件配置API数据源POST接口时提示数据源请求错误。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3239338471/p960502.png)
* **问题原因：**未明确指定请求体是JSON格式，服务器尝试以默认方式解析时触发错误**。**
* **解决方案：**DataV设置数据源时需要在Headers里加上 { "Content-Type": "application/json" }。

**说明**  
API 请求是指向应用程序编程接口（API）发送一种请求，需要根据API文档配置HTTP方法、URL、请求头、请求体等。出现**Unexpected end of JSON input**错误通常是因为请求头中缺少必要的Content-Type声明导致服务器未能正确解析请求体。请求头中的元数据（如内容类型、认证信息等）会指导服务器如何处理请求，因此只需在请求头中明确指定{"Content-Type": "application/json"}，即可确保服务器正确解析JSON请求体。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3239338471/p960466.png)