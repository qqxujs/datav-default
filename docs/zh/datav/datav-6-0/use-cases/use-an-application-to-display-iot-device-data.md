<!DOCTYPE html> 

本文介绍如何基于阿里云产品和服务实现设备数据大屏展示。

### 效果展示

![组件效果显示图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5027574751/p12680.png)

本案例的原理如下： 

1. 在设备端模拟两个字段，通过MQTT协议向阿里云物联网平台设备（高级版）发送数据。
2. 物联网平台接收到数据后通过规则引擎转发至DataHub。
3. 在DataHub中通过DataConnector将数据同步到RDS MySQL数据库中。
4. 使用DataV将RDS MySQL中的数据展示在大屏上。

**说明** 

物联网平台转发至DataHub，是因为DataHub可以将数据同步至MaxCompute，为后续数据计算做准备。

本案例的整体步骤如下： 

1. [创建RDS MySQL数据库表](/zh/datav/datav-6-0/use-cases/create-an-apsaradb-rds-for-mysql-database-table#task-srh-hxh-ffb)。
2. [创建DataHub项目](/zh/datav/datav-6-0/use-cases/create-a-datahub-project#task-dyg-dxh-ffb)。
3. [配置物联网平台设备](/zh/datav/datav-6-0/use-cases/configure-iot-platform-devices#task-e55-rnh-ffb)。
4. [运行MQTT客户端](/zh/datav/datav-6-0/use-cases/run-mqtt-client#task-zms-4xh-ffb)。
5. [配置DataV数据源](/zh/datav/datav-6-0/use-cases/configure-a-datav-data-source#task-arn-mxh-ffb)。
6. [查看结果](/zh/datav/datav-6-0/use-cases/view-the-results#task-nps-rxh-ffb)。