# 常见问题 %{#94306}% 

本文档根据实践，介绍了本案例中比较常见的两个问题及解决方法。

1. 流计算中注册**RDS数据存储**失败。  
可能原因：您的RDS数据库与流计算项目不在同一区域。  
解决方法：需要手动将流计算服务的白名单添加到RDS白名单中，详情请参见[数据存储白名单配置](/zh/flink/configure-a-whitelist-for-accessing-storage-resources-1#concept-92261-zh)。
2. 源表数据无法同步到目标表中。  
可能原因：源表的数据类型与目标表不一致，在进行类型转换时出错。例如源表中的create\_time字段为DATETIME类型，通过DTS同步到DataHub中时，自动转换成TIMESTAMP类型，而目标表为DATETIME类型。此时需要通过SQL函数将TIMESTAMP类型的数据转换成DATETIME类型，在转换的过程中会出现各种预料不到的错误。  
解决方法：目标表中最好不要使用TIMESTAMP或DATETIME类型的字段，而是使用VARCHAR类型代替。