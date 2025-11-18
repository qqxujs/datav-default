 

数据源负责从各种数据存储系统中提取数据，包括数据库（如MySQL、PostgreSQL）、大数据存储（如TableStore）、API、文件等。本文为您介绍DataV-Board支持的所有数据源，并提供数据源的选型指导。

## **使用限制**

-   数据源支持情况因不同版本而异，详情请参见[规格说明](https://help.aliyun.com/zh/datav/datav-7-0/product-overview/datav-editions)。
    
-   部分数据源存在区域限制，详情请参见[地域支持](#cd859ecf0fzjh)。
    
-   数据库类数据源需要能通过外网访问，并配置访问白名单，详情请参见[配置数据库白名单](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configure-a-database-whitelist-for-datav-7)。
    
-   数据库类数据源的连接有10秒超时限制。
    

## **选择数据源接入方式**

### **接入数据库**

DataV-Board支持接入自建数据库。当您使用虚拟机或者ECS自建数据库时，请根据公网访问情况进行选择：

-   **公网能访问到数据库地址**：可采用[兼容MySQL数据库的数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-a-mysql-compatible-data-source)方式或对应数据库的外网连接方式（例如，接入公网的MySQL库可选择[RDS for MySQL数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-an-apsaradb-rds-for-mysql-data-source)的公网连接方式）。
    
-   **无法使用外网或不想开放外网访问时**：可采用[DataV数据代理服务](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-a-datav-proxy-service)。
    

**重要**

若SQL查询需突破10秒超时限制，请选择[DataV数据代理服务](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-a-datav-proxy-service)。

### **接入API**

在使用数据源时，API、阿里云API网关和Open API这三种类型该如何选择？

**数据源类型**

**类型说明**

**使用场景**

API

通用的数据接口。

若您有直接可用的API，可使用API数据源连接。例如，已有站点提供的接口，或已购买的云服务搭建的接口等。具体使用操作请参见[添加API数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-api-data-sources)。

阿里云API网关

阿里云的一款云产品，提供API托管服务。

若您已有API中的逻辑在使用API数据源时不支持（例如计算签名等），可使用阿里云API网关托管您的API。DataV-Board连接阿里云API网关数据源时可以间接调用您在API网关中托管的API，此时阿里云API网关相当于API的代理。具体使用操作请参见[添加阿里云API网关数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-api-gateway-data-sources)。

Open API

阿里云提供的云产品开放接口的调用方式。使用Open API可以方便地调用各云产品提供的API接口，通常用于获取阿里云产品的信息。

若您想获取阿里云产品的数据信息（例如ECS负载状况、SLS日志统计），可以使用Open API数据源。Open API仅支持调用阿里云产品提供的API。具体使用操作请参见[添加Open API数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-an-api-data-source)。

API的调用方式多种多样，DataV-Board无法直接调用所有的API，但可将这些API通过阿里云API网关进行托管。您可以根据实际情况选择是否使用阿里云API网关托管您的API，包含但不限于以下几种情况：

-   若您的API基于自定义算法进行过签名鉴权，DataV-Board无法直接调用此类API。阿里云API网关可以实现自定义算法逻辑，满足您API的鉴权计算，这样DataV-Board可直接对接阿里云API网关调用您的API。
    
-   若系统无法直接访问到您的API（例如，您的API在专有网络VPC内），可通过阿里云API网关进行托管。
    
-   若您不愿将API的调用细节透露，可通过阿里云API网关隐藏实际的调用细节。
    
-   若您的API使用了DataV-Board暂不支持的数据源或接口，例如调用函数计算等，此类API也可通过阿里云API网关中的数据源来获取数据。
    

## **数据源支持列表**

DataV-Board支持的数据源非常丰富，包含数据库类、大数据存储类、API类、文件类等。

**说明**

-   ![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)代表支持，![不支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1128623461/p393957.png)代表不支持。
    
-   勾选白名单设置的数据源，一定要在数据库配置白名单方可正常连接。
    

**数据源类型**

**数据源**

**公网连接**

**VPC连接**

**白名单设置**

**备注说明**

数据库类

[添加RDS for MySQL数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-an-apsaradb-rds-for-mysql-data-source)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

无。

[添加RDS for PostgreSQL数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-an-apsaradb-rds-for-postgresql-data-source)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

无。

[添加RDS for SQLServer数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-an-apsaradb-rds-for-sql-server-data-source)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

当 SQLServer 是微软 Azure 时必须勾选**encrypt**。

[添加PolarDB for MySQL数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-a-polardb-for-mysql-data-source)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

无。

[添加PolarDB for PostgreSQL数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-a-polardb-for-postgresql-data-source)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

无。

[添加PolarDB for Oracle数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-a-polardb-for-oracle-data-source)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

无。

[添加AnalyticDB for MySQL数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-an-analyticdb-for-mysql-data-source)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

无。

[添加AnalyticDB for PostgreSQL数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-an-analyticdb-for-postgresql-data-source)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

无。

[添加OceanBase for MySQL数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-an-oceanbase-for-mysql-data-source)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

无。

[添加Oracle数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-an-oracle-data-source)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![不支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1128623461/p393957.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

无。

[添加兼容MySQL数据库的数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-a-mysql-compatible-data-source)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![不支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1128623461/p393957.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

可兼容旧版MySQL，需开启**insecureAuth**。

可支持兼容 **Azure Database for MySQL**。

[添加达梦数据库](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-dm-database)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

国产数据库。

[添加人大金仓数据库](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-kingbase-database)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

国产数据库。

[添加PolarDB-X数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-polardb-x-database)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

国产数据库。

[添加实时数仓Hologres数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-a-hologres-data-source)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

无。

[添加ClickHouse数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-a-clickhouse-data-source-1)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

无。

大数据存储类

[添加TableStore数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-a-tablestore-data-source)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![不支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1128623461/p393957.png)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

无。

[添加对象存储OSS数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-an-oss-data-source)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![不支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1128623461/p393957.png)

![不支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1128623461/p393957.png)

无。

[添加日志服务SLS数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-a-simple-log-service-data-source)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![不支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1128623461/p393957.png)

![不支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1128623461/p393957.png)

无。

文件和静态数据

[添加CSV文件](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-a-csv-file)

不涉及

不涉及

不涉及

文件大小不得超过512KB。

[添加静态数据](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-static-data)

不涉及

不涉及

不涉及

JSON格式数据，仅在组件数据源配置面板。

通用API类

[添加API数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-api-data-sources)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![不支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1128623461/p393957.png)

不涉及

支持GET或POST，仅在组件数据源配置面板。

[添加Open API数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-an-api-data-source)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![不支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1128623461/p393957.png)

不涉及

无。

[添加阿里云API网关数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-api-gateway-data-sources)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

![不支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1128623461/p393957.png)

不涉及

无。

三方API类

[添加DataV数据代理服务](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-a-datav-proxy-service)

不涉及

不涉及

不涉及

DataV数据代理服务提供了一个开源的数据库代理服务，可以在ECS上进行部署。通过数据代理服务，可以降低数据库暴露公网IP带来的风险。

关于DataV数据代理服务的部署安装，请参见[配置DataV数据代理服务](https://help.aliyun.com/zh/datav/how-to-use-datav-proxy)。

[添加DataWorks数据服务数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-dataworks-data-sources)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

不涉及

不涉及

暂时不支持DataWorks API服务的POST请求。

地域支持见[DataWorks服务支持地域](#2319f51b41l0q)。

[添加DataV Atlas地图服务数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-datav-atlas-database)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

不涉及

不涉及

无。

其他

[添加阿里云Elastic Search数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-an-elasticsearch-data-source)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

不涉及

不涉及

地域支持见[Elastic Search服务支持地域](#839fa9c717oa3)。

[添加开源Elastic Search数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-open-source-elasticsearch-data-sources)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

不涉及

不涉及

无。

[添加区块链服务数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-baas-data-sources)

![支持](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0128623461/p393956.png)

不涉及

不涉及

无。

**重要**

数据库类的数据源，请确保能被正常访问：

-   数据库没有被防火墙禁止。
    
-   数据库域名能够被解析。
    

## **地域支持**

**数据库类数据源支持地域：**

地域

地域 ID

华东1（杭州）

cn-hangzhou

华东2（上海）

cn-shanghai

华南1（深圳）

cn-shenzhen

华北1（青岛）

cn-qingdao

华北2（北京）

cn-beijing

华北3（张家口）

cn-zhangjiakou

华北5（呼和浩特）

cn-huhehaote

华东2 金融云

cn-shanghai-finance-1

华南1 金融云

cn-shenzhen-finance-1

中国香港

cn-hongkong

**DataWorks服务支持地域：**

地域

地域 ID

华东1（杭州）

cn-hangzhou

华东2（上海）

cn-shanghai

华南1（深圳）

cn-shenzhen

华北2（北京）

cn-beijing

**Elastic Search服务支持地域：**

地域

地域 ID

华东1（杭州）

cn-hangzhou

华东2（上海）

cn-shanghai

华南1（深圳）

cn-shenzhen

华北1（青岛）

cn-qingdao

华北2（北京）

cn-beijing

华北3（张家口）

cn-zhangjiakou

中国香港

cn-hongkong

新加坡

ap-southeast-1

马来西亚（吉隆坡）

ap-southeast-3

印度尼西亚（雅加达）

ap-southeast-5

日本（东京）

ap-northeast-1

德国（法兰克福）

eu-central-1

美国（硅谷）

us-west-1

## **常见问题**

关于数据源配置的更多问题，请参见[数据源配置和使用常见问题](https://help.aliyun.com/zh/datav/datav-7-0/support/faq-about-data-source-configuration)。