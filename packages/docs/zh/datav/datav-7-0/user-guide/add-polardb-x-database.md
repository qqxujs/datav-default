  添加PolarDB-X为DataV数据源-DataV数据可视化-阿里云

在DataV-Board（数据看板）中使用PolarDB-X数据源之前，需要先将PolarDB-X数据源实例添加为DataV-Board的数据源。本文为您介绍如何添加PolarDB-X数据源。

## 前提条件

添加数据库前请先参见[创建PolarDB-X实例](https://help.aliyun.com/zh/polardb/polardb-for-xscale/create-polardb-x-instances)，开通对应的数据库服务。

**说明**

DataV-Board支持添加PolarDB-X 1.0和PolarDB-X 2.0数据源，本教程将使用PolarDB-X 2.0实例进行演示。

## 使用限制

仅支持DataV企业版及以上版本。

## 通过内网添加数据源

1.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
2.  在**工作台**页面，单击**数据准备** > **数据源** > **新建数据源**。
    
3.  从**类型**列表中，选择**PolarDB-X**。
    
4.  在列表中选择**内网**，并选择PolarDB-X实例所在的地域。
    
5.  填写数据库信息。选择内网数据库的网络类型（包括专有网络和经典网络）。
    
    ## 专有网络
    
    1.  打开**VPC**开关，进入专有网络模式。
        
    2.  填写数据库配置信息。
        
        **参数**
        
        **说明**
        
        **名称**
        
        自定义的数据源名称。
        
        **VPC ID**
        
        VPC实例的ID，此VPC为您的PolarDB-X实例所在的VPC。您可登录[PolarDB-X控制台](https://polardb-x.console.aliyun.com/cn-hangzhou/clustersX)，选择**PolarDB-X 2.0**页签，单击实例名称，在实例**基本信息**页查看VPC ID。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9119693371/p880918.png)
        
        **VPC实例ID**
        
        可选VPC数据库实例 ID、 VPC 网络连接地址、VPC 网络IP地址其中一种。通过OpenAPI使用接口[DescribeDBInstanceAttribute](https://help.aliyun.com/zh/polardb/api-describedbinstanceattribute#doc-api-polardbx-DescribeDBInstanceAttribute)查询实例属性信息，获取实例详情中的**VPCInstanceId**。
        
        **域名**
        
        访问PolarDB-X数据库实例使用的VPC地址。您可登录[PolarDB-X控制台](https://polardb-x.console.aliyun.com/cn-hangzhou/clustersX)，选择**PolarDB-X 2.0**页签，单击实例名称，在**基本信息** > **连接信息**区域，查看内网地址。
        
        **端口**
        
        数据库设置的端口号。
        
        **数据库登录信息**
        
        输入需要访问的PolarDB-X实例的登录用户及密码，自动获取数据库列表或自定义输入数据库名称。
        
        您可登录[PolarDB-X控制台](https://polardb-x.console.aliyun.com/cn-hangzhou/clustersX)，选择**PolarDB-X 2.0**页签，单击实例名称，在左侧导航栏的**配置与管理**目录下选择**数据库管理**、**账号管理**，查看数据库登录信息。
        
    
    ## 经典网络
    
    1.  关闭**VPC**开关，进入经典网络模式。
        
    2.  填写数据库配置信息。
        
        **参数**
        
        **说明**
        
        **名称**
        
        自定义的数据源名称。
        
        **域名**
        
        访问PolarDB-X数据库实例使用的经典网络地址。
        
        **端口**
        
        数据库设置的端口号。
        
        **数据库登录信息**
        
        输入需要访问的PolarDB-X实例的登录用户及密码，自动获取数据库列表或自定义输入数据库名称。
        
        您可登录[PolarDB-X控制台](https://polardb-x.console.aliyun.com/cn-hangzhou/clustersX)，选择**PolarDB-X 2.0**页签，单击实例名称，在左侧导航栏的**配置与管理**目录下选择**数据库管理**、**账号管理**，查看数据库登录信息。
        
    
6.  数据库信息填写完成后，单击**确定**，系统将自动测试连接。若测试通过，新添加的数据源将自动显示在数据源列表中。
    

## 通过外网添加数据源

1.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
2.  在**工作台**页面，单击**数据准备** > **数据源** > **新建数据源**。
    
3.  从**类型**列表中，选择**PolarDB-X**。
    
4.  在列表中选择**外网**。
    
5.  填写数据库配置信息。
    
    **参数**
    
    **说明**
    
    **名称**
    
    自定义的数据源名称。
    
    **域名**
    
    访问PolarDB-X数据库实例使用的外网地址。您可登录[PolarDB-X控制台](https://polardb-x.console.aliyun.com/cn-hangzhou/clustersX)，选择**PolarDB-X 2.0**页签，单击实例名称，在**基本信息** > **连接信息**区域，查看外网地址。
    
    **端口**
    
    数据库设置的端口号。
    
    **数据库登录信息**
    
    输入需要访问的PolarDB-X实例的登录用户及密码，自动获取数据库列表或自定义输入数据库名称。
    
    您可登录[PolarDB-X控制台](https://polardb-x.console.aliyun.com/cn-hangzhou/clustersX)，选择**PolarDB-X 2.0**页签，单击实例名称，在左侧导航栏的**配置与管理**目录下选择**数据库管理**、**账号管理**，查看数据库登录信息。
    
6.  数据库信息填写完成后，单击**确定**，系统将自动测试连接。若测试通过，新添加的数据源将自动显示在数据源列表中。
    

## **后续步骤**

数据源创建完成后，您可按需执行如下操作：

-   使用数据源：您可进入目标项目的编辑页面，添加组件并使用数据源。
    
-   管理数据源：根据需要执行数据源的编辑、删除等管理操作，详情请参见[数据源管理](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/manage-data-sources-1)。
    

## **相关文档**

-   如果您在使用DataV-Board产品时有任何疑惑或建议，请及时[联系我们](https://help.aliyun.com/zh/datav/datav-7-0/support/contact-us-for-datav-7)。
    
-   更多数据源的介绍，请参见[数据源说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/data-source/)。