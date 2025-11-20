# 添加数据源 %{#59709}% 

本文档为您介绍DataV支持的所有数据源，帮助您选择合适的数据源进行大屏项目的开发。

进入[DataV控制台](https://datav.aliyun.com/)，单击**我的数据**，可以对接入的数据源进行统一管理。

DataV支持以下数据源的接入。

|    **数据源类型**    |    **数据源**    |    **说明**    |
|    ----    |    ----    |    ----    |
|    数据库类 **说明** 如果您在其它地域，或者没有使用阿里云数据库，想连接自建数据库，那就需要暴露数据库的公网IP进行连接。DataV当前不支持IP白名单，如果您担心安全性问题，可以使用阿里云提供的数据库连接代理工具来连接，具体请参见[如何使用DataV Proxy](/zh/datav/datav-6-0/user-guide/how-to-use-datav-proxy#concept-wws-yvg-chb)。    |    [AnalyticDB for MySQL](/zh/datav/datav-6-0/user-guide/add-an-analyticdb-for-mysql-data-source-1#concept-jmg-1lp-p2b)    |    无。    |
|    [RDS for MySQL](/zh/datav/datav-6-0/user-guide/add-an-apsaradb-rds-for-mysql-data-source-1#concept-xdt-blp-p2b)    |    无。    |    |
|    [RDS for PostgreSQL](/zh/datav/datav-6-0/user-guide/add-an-apsaradb-rds-for-postgresql-data-source-1#concept-dnv-clp-p2b)    |    无。    |    |
|    [RDS for SQLServer](/zh/datav/datav-6-0/user-guide/add-an-apsaradb-rds-for-sql-server-data-source-1#concept-e5r-2lp-p2b)    |    无。    |    |
|    [AnalyticDB for PostgreSQL](/zh/datav/datav-6-0/user-guide/add-analyticdb-for-postgresql-data-sources#concept-ylx-hlp-p2b)    |    无。    |    |
|    [TableStore](/zh/datav/datav-6-0/user-guide/add-a-tablestore-data-source-1#concept-e42-c5h-wfb)    |    无。    |    |
|    [Oracle](/zh/datav/datav-6-0/user-guide/add-an-oracle-data-source-1#concept-bmw-3lp-p2b)    |    无。    |    |
|    [兼容MySQL数据库](/zh/datav/datav-6-0/user-guide/add-a-mysql-compatible-data-source-1#concept-vt5-flp-p2b)    |    无。    |    |
|    [对象存储OSS](/zh/datav/datav-6-0/user-guide/add-an-oss-data-source-1#concept-bgl-qcv-vfb)    |    无。    |    |
|    [交互式分析Hologres](/zh/datav/datav-6-0/user-guide/add-hologres-data-sources#task-2471948)    |    无。    |    |
|    文件类 **说明** DataV目前不支持从其他文件存储中读取大型的数据文件。    |    [CSV文件](/zh/datav/datav-6-0/user-guide/add-a-csv-file-1#concept-tdw-llp-p2b)    |    无。    |
|    [静态JSON](/zh/datav/datav-6-0/user-guide/add-a-static-json-file#concept-lz2-jbq-p2b)    |    无。    |    |
|    API类    |    [添加API数据源](/zh/datav/datav-6-0/user-guide/add-an-api-data-source-1#task-2556009)    |    您可以在组件配置页面的**数据**面板中选择一种GET或POST任意一种请求方式，并将API地址直接粘贴到**URL**字段中。    |
|    [添加Open API数据源](/zh/datav/datav-6-0/user-guide/add-an-openapi-explorer-data-source#task-2471948)    |    无。    |    |
|    [添加阿里云API网关数据源](/zh/datav/datav-6-0/user-guide/add-an-api-gateway-data-source#task-2471948)    |    无。    |    |
|    其它    |    [DataV数据代理服务](/zh/datav/datav-6-0/user-guide/add-a-datav-proxy-data-source#concept-ltx-glp-p2b)    |    DataV数据代理服务提供了一个开源的数据库代理服务，可以在ECS上进行部署。通过数据代理服务，可以降低数据库暴露公网IP带来的风险。关于DataV数据代理服务的部署安装，请参见[如何使用DataV Proxy](/zh/datav/datav-6-0/user-guide/how-to-use-datav-proxy#concept-wws-yvg-chb)。    |
|    [业务实时监控服务ARMS](/zh/datav/datav-6-0/user-guide/add-arms-data-sources-discontinued#concept-syl-pw4-1gb)    |    无。    |    |
|    [日志服务SLS](/zh/datav/datav-6-0/user-guide/add-a-log-service-data-source#concept-z2h-vgt-cgb)    |    无。    |    |
|    [DataWorks数据服务](/zh/datav/datav-6-0/user-guide/add-a-dataworks-data-source#concept-dj2-g4z-ngb)    |    无。    |    |
|    [阿里云Elasticsearch](/zh/datav/datav-6-0/user-guide/add-elasticsearch-data-sources#concept-303795)    |    无。    |    |
|    [区块链服务](/zh/datav/datav-6-0/user-guide/add-a-baas-data-source#task-2471948)    |    无。    |    |