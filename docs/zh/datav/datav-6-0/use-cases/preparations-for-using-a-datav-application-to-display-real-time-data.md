# 准备工作 %{#94276}% 

在开始本案例前，您需要首先完成以下工作。

1. 在[云数据库RDS控制台](https://rdsnext.console.aliyun.com)上，创建RDS MySQL实例，并新建数据库和表。  
本案例使用的表结构如下图所示，其中已经插入了几条数据。![创建数据库和表](http://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1227574751/p13868.png)
2. [购买实时计算服务](/zh/flink/activate-realtime-compute-for-apache-flink-and-create-a-project)，并创建项目。  
本案例购买了一个共享模式的Flink服务，区域为华东2，计算资源为4 CU。并创建了一个名称为doc\_flink的项目。![创建项目](http://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2227574751/p13986.png)