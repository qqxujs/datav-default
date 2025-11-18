  创建DataHub项目并配置DataConnector同步数据到RDS MySQL-DataV数据可视化-阿里云

阿里云流数据处理平台DataHub是流式数据（Streaming Data）的处理平台，提供对流式数据的发布（Publish），订阅（Subscribe）和分发功能，让您可以轻松构建基于流式数据的分析和应用。

## 前提条件

您已经完成了[创建RDS MySQL数据库表](https://help.aliyun.com/zh/datav/datav-6-0/use-cases/create-an-apsaradb-rds-for-mysql-database-table)。

## 操作步骤

1.  登录[阿里云DataHub控制台](https://datahub.console.aliyun.com/)。
    
2.  在**项目管理**中，选择**华东2**，单击**创建Project**。
    
3.  选择项目右侧的**查看**，单击**创建Topic**。
    
4.  在**创建Topic**页面，输入**Topic名称**及**Schema**，单击**创建**。
    
5.  选择Topic右侧的**查看**，单击页面右上角的**\+ DataConnector**，选择**同步到RDS Mysql**。
    
6.  在**创建DataConnector**页面，输入RDS MySQL数据库的相关信息。
    
    **参数**
    
    **说明**
    
    **Mysql Host**
    
    RDS数据库的内网地址。
    
    **Mysql Port**
    
    RDS数据库的端口号，一般为3306。
    
    **Mysql Database**
    
    RDS数据库的名称。
    
    **Mysql Table**
    
    RDS数据库表的名称。
    
    **User**
    
    登录RDS数据库的账号。
    
    **Password**
    
    登录RDS数据库的密码。
    
    您可以在[云数据库RDS控制台](https://rdsnext.console.aliyun.com)中，单击RDS实例链接，获取以上数据库信息。