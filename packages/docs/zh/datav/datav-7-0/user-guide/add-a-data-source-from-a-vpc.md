<!DOCTYPE html> 

本文介绍在DataV中配置专有网络VPC（Virtual Private Cloud）内数据源的方法。通过专有网络VPC数据源的配置，您可以将专有网络VPC内的数据库接入到DataV中，并作为组件的数据源进行大屏展示。

## 背景信息

了解专有网络VPC，详情请参见[什么是专有网络VPC](/zh/vpc/what-is-vpc#concept-kbk-cpz-ndb)。

## 操作步骤

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面，单击**数据准备 > 数据源**，进入**数据源**页面，单击**新建数据源**。
3. 从**类型**列表中，选择**RDS for MySQL**。
4. 在列表中选择**内网**，并选择RDS实例所在的区域。
5. 打开**VPC**开关，并填写数据库信息。  
除了传统的数据库配置外，您还需要配置数据库的**VPC ID**和**VPC 实例 ID**。这两种ID都可以在阿里云控制台中获取。

  * 通过[RDS控制台](https://rdsnext.console.aliyun.com/)获取**VPC ID**和**VPC 实例 ID**。  
  图 1\. 获取VPC下数据库的实例ID![获取VPC ID](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8775711951/p8636.png)  
  图 2\. 获取VPC ID![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7157197571/p1006721.png)
  * 如果您的数据库安装在VPC内的ECS上，则需要配置该ECS的**VPC ID**和**VPC 实例 ID**。  
  图 3\. 获取VPC下ECS的实例ID![配置ECS的VPC ID和实例ID](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8775711951/p8638.png)  
  图 4\. 获取ECS的VPC ID![配置ECS的VPC ID和实例ID](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8775711951/p8639.png)  
配置完成后，系统会自动进行测试连接，验证数据库是否能正常连通。  

**重要**  
如果您的RDS for MySQL数据库是从经典网络切换到专有网络VPC网络的，且通过以上方法无法连通数据源，则可调用RDS for MySQL的[查询实例详情](/zh/rds/api-query-instance-details#doc-api-Rds-DescribeDBInstanceAttribute)接口，获取**VPC ID**和**VPC 实例 ID**再重新测试连接。如果依然无法连通，可联系阿里云技术支持工程师解决。
6. 测试连接通过后，单击**确定**，完成数据源添加。  
配置完成后，您就可以使用该专有网络VPC内的数据库作为组件的数据源了。