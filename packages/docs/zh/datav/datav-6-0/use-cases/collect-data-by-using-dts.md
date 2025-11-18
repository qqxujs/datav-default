  使用DTS将RDS数据实时同步至DataHub-DataV数据可视化-阿里云

通过阿里数据传输中的数据同步（DTS），将RDS的数据实时传输至DataHub中。

1.  创建DataHub项目。
    1.  登录[DataHub控制台](https://datahub.console.aliyun.com/datahub)。
    2.  在项目管理中，选择区域，本案例选择华东1区。
    3.  单击创建Project，输入名称和描述，创建一个DataHub项目。本案例的项目名称为datahub\_test\_datav。  
        ![创建DataHub项目](http://help-static-aliyun-doc.aliyuncs.com/assets/img/23955/156455580913861_zh-CN.png)  
        
2.  配置DTS数据同步作业。
    1.  登录[DTS控制台](https://dts.console.aliyun.com/)。
    2.  选择数据同步 > 创建同步作业。
    3.  选择同步作业的基本配置。本案例的配置如下图所示，其中源实例选择MySQL，源实例地域选择华东1区，目标实例选择DataHub。  
        ![配置DTS数据同步作业](http://help-static-aliyun-doc.aliyuncs.com/assets/img/23955/156455581013863_zh-CN.png)  
        
    4.  返回数据同步页面，单击实例右侧的配置同步链路。
    5.  选择同步通道的源及目标实例，完成后单击授权白名单并进入下一步。  
        ![配置同步链路和目标实例](http://help-static-aliyun-doc.aliyuncs.com/assets/img/23955/156455581013869_zh-CN.png)  
        
        系统会自动为您创建同步账号，创建过程需要30秒左右，请耐心等待。当进度条显示为100%时，单击下一步。  
        ![创建同步账号](http://help-static-aliyun-doc.aliyuncs.com/assets/img/23955/156455581013870_zh-CN.png)  
        
    6.  选择同步对象，单击\>图标按钮，此时需要同步的对象会出现在已选择对象列表中。本案例的同步对象为datav\_test数据库中的mytable表，如下图所示。  
        ![选择同步对象](http://help-static-aliyun-doc.aliyuncs.com/assets/img/23955/156455581013871_zh-CN.png)  
        
    7.  单击预检查并启动，预检查成功后，系统会自动跳转回数据同步页面。正常情况下，可以看到实例的状态为初始化中或同步中，且延时为0毫秒。  
        ![预检查并启动](http://help-static-aliyun-doc.aliyuncs.com/assets/img/23955/156455581113872_zh-CN.png)  
        
3.  查看数据采集结果。
    1.  回到[DataHub控制台](https://datahub.console.aliyun.com/datahub)，查看通过DTS创建的数据结构是否有缺失。  
        ![查看数据采集结果](http://help-static-aliyun-doc.aliyuncs.com/assets/img/23955/156455581113873_zh-CN.png)  
        
    2.  在RDS数据库中插入一条数据，单击数据抽样，查看增量数据同步结果。  
        ![查看增量数据](http://help-static-aliyun-doc.aliyuncs.com/assets/img/23955/156455581113874_zh-CN.png)  
        
        **注意**
        
        -   DataHub同步的是增量数据，您的数据库中必须插入、删除或更新一条或多条数据后，才会同步到DataHub中。本案例采用手动插入数据的方法，但在实际情况中，都是将用户的购买行为，通过程序的方式动态同步到数据库中的。
        -   进行数据抽样时，指定的时间必须在您插入数据之前。
        -   参考[创建 MySQL 到 MaxCompute 数据实时同步作业](https://help.aliyun.com/zh/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-mysql-instance-to-a-maxcompute-project)的同步原理章节，了解DataHub中各字段的含义。