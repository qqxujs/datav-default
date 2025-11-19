<!DOCTYPE html> 

本案例使用阿里云DTS将您的增量数据同步到DataHub上，再通过阿里云实时计算Flink订阅DataHub的数据进行实时计算，并将结果插入到RDS数据库中，最终通过DataV大屏进行展示。

### 效果展示

![验证结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/23955/156620197913985_zh-CN.png)

**说明** 

本案例仅提供具体的操作指导，业务场景和数据与实际情况会有一定偏差。具体业务场景可参考[电商之订单与销量统计](https://help.aliyun.com/document%5Fdetail/65670.html)。

本案例的整体步骤如下： 

1. [准备工作](/zh/datav/datav-6-0/use-cases/preparations-for-using-a-datav-application-to-display-real-time-data#concept-z1b-l1y-nfb)：完成阿里云RDS实例和流计算项目的创建。
2. [数据采集](/zh/datav/datav-6-0/use-cases/collect-data-by-using-dts#concept-bmk-lpy-nfb)：通过阿里云DTS的数据同步功能，将RDS中的数据同步到DataHub中，完成数据采集。
3. [数据订阅](/zh/datav/datav-6-0/use-cases/subscribe-to-datahub-data-for-real-time-computing#concept-ol4-mpy-nfb)：通过阿里云实时计算Flink，订阅DataHub数据进行实时计算，插入到RDS实例的目标表中。
4. [数据展示](/zh/datav/datav-6-0/use-cases/display-data-by-using-datav#concept-cyk-npy-nfb)：通过DataV大屏，对数据进行处理并展示。