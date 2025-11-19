<!DOCTYPE html> 

本文介绍在DataV中连接数据源时，遇到的常见问题及相应的解决方法。

## 数据库连接不成功，如何解决？

请根据数据库的网络类型和所在地域，将相应的DataV服务器IP地址加入到您的数据库白名单或ECS的安全组设置中，或者使用代理工具来连接您的数据库，具体请参见[如何使用DataV Proxy](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/how-to-use-datav-proxy#concept-wws-yvg-chb "DataV Proxy应用是一个可视化的DataV Proxy（DataV数据代理服务）配置工具，您可以通过DataV Proxy应用访问本地或内网等不对外开放且无外网访问地址的数据库，保证数据的安全性。本文档为您介绍DataV Proxy应用的启动方法和相关功能，帮助您快速准确地使用DataV Proxy应用来配置DataV数据代理服务。")。 

## 如何配置CSV数据来源？

保留CSV的首行作为表头，并且每一个列的列名，需要和相应图表中要求的数据结构的字段名保持一致。

## 目前，数据库通过阿里云经典网络内网连接支持哪些机房？

目前支持华东1、华东2、华北2三个机房。 

## DataV能否连接在ECS或其他机器上部署的数据库？

可以。需要开放您数据库的公网IP，但目前不支持白名单。如果考虑到安全性，可以使用阿里云提供的代理工具连接数据库，具体请参见[如何使用DataV Proxy](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/how-to-use-datav-proxy#concept-wws-yvg-chb "DataV Proxy应用是一个可视化的DataV Proxy（DataV数据代理服务）配置工具，您可以通过DataV Proxy应用访问本地或内网等不对外开放且无外网访问地址的数据库，保证数据的安全性。本文档为您介绍DataV Proxy应用的启动方法和相关功能，帮助您快速准确地使用DataV Proxy应用来配置DataV数据代理服务。")。 

## 在使用数据源时，API、阿里云API网关和Open API这三种类型该如何选择？

| 数据源类型    | 介绍                                                               | 在DataV中的应用场景                                                                                                                                                                                                                                                                                                                                                                              |
| -------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| API      | 通用的数据接口。                                                         | 如果您有直接可用的API，可使用DataV的API数据源连接。例如，已有站点提供的接口，或已购买的云服务搭建的接口等。具体使用操作请参见[添加API数据源](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/add-an-api-data-source-1#task-2556009 "本文档介绍在DataV中添加API数据源的方法，以及相关参数配置说明。API指通用的数据接口，如果您已有可用的API接口，可在DataV中使用自己的API数据源连接。")。                                                                                                                        |
| 阿里云API网关 | 阿里云的一款云产品，提供API托管服务。                                             | 如果您已有API中的逻辑在使用DataV的API数据源时不支持（例如计算签名等），可使用阿里云API网关托管您的API，DataV连接阿里云API网关数据源时可以间接调用您在API网关中托管的API，此时阿里云API网关相当于API的代理。具体使用操作请参见[添加阿里云API网关数据源](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/add-an-api-gateway-data-source#task-2471948 "本文档介绍在DataV中添加阿里云API网关数据源的方法，以及相关参数配置说明。阿里云API网关即API托管服务，涵盖API发布、管理、运维、售卖的全生命周期管理。")。                                                 |
| Open API | 阿里云提供的云产品开放接口的调用方式。使用Open API可以方便地调用各云产品提供的API接口，通常用于获取阿里云产品的信息。 | 如果您想获取阿里云产品的数据信息（例如ECS负载状况、SLS日志统计），在DataV中可以使用 Open API数据源。Open API仅支持调用阿里云产品提供的API。具体使用操作请参见[添加Open API数据源](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/add-an-openapi-explorer-data-source#task-2471948 "本文为您介绍在DataV中添加Open API数据源的方法，以及相关参数配置说明。Open API是阿里云提供的云产品开放接口的调用方式，使用Open API可以方便地调用各云产品提供的API接口，轻松实现控制及查询等功能。在DataV中，最常见的场景是使用Open API调用其他的云产品的API，获取数据并展示出来。")。 |

## 什么情况下DataV不能直接使用API数据源，只能使用阿里云API网关数据源？

API的调用方式多种多样，DataV无法直接调用所有的API，但可将这些API通过阿里云API网关进行托管，DataV对接阿里云API网关即可调用API。您可以根据实际情况进行选择是否使用阿里云API网关托管您的API，包含但不限于以下几种情况：

1. 如果您的API基于自定义算法进行过签名鉴权，DataV无法直接调用此类API。阿里云API网关可以实现自定义算法逻辑，满足您API的鉴权计算，这样DataV就可以直接对接阿里云API网关调用您的API。
2. 如果DataV无法直接访问到您的API（例如，您的API在专有网络VPC内），可通过阿里云API网关进行托管。
3. 如果您不愿将API的调用细节透露给DataV，可通过阿里云API网关隐藏实际的调用细节，从而实现与DataV对接。
4. 如果您的API使用了DataV暂不支持的数据源或接口，例如调用函数计算等，此类API也可以通过阿里云API网关中的数据源来获取数据。

## 数据库数据源配置时报timeout，该如何处理？

1. 确认您是否已经完成[数据库白名单的配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-a-database-whitelist-for-datav-6#concept-hcq-ymz-q2b "本文档为您介绍配置DataV数据库白名单的方法。在添加数据源之前，您必须先将对应区域的白名单IP地址添加到您的数据源白名单中，以确保DataV能正常访问您的数据库。")。
2. 如果您的数据源为阿里云RDS，需要[配置RDS白名单](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-a-database-whitelist-for-datav-6#concept-hcq-ymz-q2b "本文档为您介绍配置DataV数据库白名单的方法。在添加数据源之前，您必须先将对应区域的白名单IP地址添加到您的数据源白名单中，以确保DataV能正常访问您的数据库。")，并确认您是否使用的是VPC专有网络。  
  * 是，在添加数据源时，需要打开VPC开关，并填入VPC ID和实例 ID。  

**说明** 您可以在阿里云VPC/RDS控制台中，获取VPC ID/实例 ID。在输入ID时需要去掉前后空格。
  * 否，联系阿里云技术工程师解决。

##  回调ID为数组时如何写SQL？

* 普通SQL  
```  
 select * from tb where id in (:idList)  
```
* 存储过程  
```  
function(concat_ws(',', :idList))  
```

**说明** `idList`为您配置的回调ID数组。

## 轮播表格的数据应该如何传入？

通过轮播列表组件来实现。

使用查询二维表格的方式进行SQL查询即可，其中别名都会作为表头。 

```
select field1 as “列1”, filed2 as "列2", field3 as "列3" from table
```

## 飞线图层的数据应该如何传入？

通过SQL来传入数据。您只需要获取到from和to两个字段的数据，字段内用逗号把经度、纬度拼接起来即可（和静态数据及API会略有不同）。 

## 组件数据请求报timeout，该如何处理？

* 可能原因：数据查询超时。DataV设置了向数据库发起的请求不能超过10s的限制，即如果数据查询时间超过10s，就会报请求超时的错误。  
解决方法：此限制为DataV后台服务设置，用户无法修改。建议您优化查询SQL语句，或者调整表结构来缩短查询时长。
* 可能原因：组件数据查询时间较长，而组件自动更新请求设置间隔较短。Chrome浏览器同一域名同一时间最多可以发起6个HTTP请求，所以后面的请求将pending在浏览器中无法发送至数据中心。  
解决方法：建议您调整自动更新请求间隔时长，或优化SQL语句来缩短数据返回时间。

**说明** 需要长时间查询的解决方案：  
  * 自建数据接口API 服务（需要支持跨域）。
  * 优化数据库查询：例如根据常用SQL查询条件，建立相关索引加速查询。