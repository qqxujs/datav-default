  通过DataWorks数据服务生成API供DataV调用-DataV数据可视化-阿里云

本文为您介绍如何通过DataWorks的数据服务，生成并发布数据API，用于在DataV中进行调用并展示。

## 前提条件

在开始本案例前，您需要首先完成[准备工作](https://help.aliyun.com/zh/datav/datav-6-0/use-cases/preparations-for-calling-dataworks-api-to-display-data#concept-q3d-5l2-qgb "本文为您介绍在使用 DataV 调用 DataWorks 数据服务 API 展示数据成果前，需要完成的准备工作。")。

## 背景信息

**注意** 按照本文档操作后，可以获取到您数据API的AppCode、AppKey和AppSecret，请妥善保管，谨防泄露。

通过DataWorks数据服务生成API主要包含以下三个步骤。

1.  [创建数据源](#step1)：新建MaxCompute Lightning数据源。
2.  [配置API](#step2)：创建好数据源后，在数据服务页面，以向导模式生成并配置API。
3.  [发布API](#step3)：API配置完成并测试成功后，就可以进行发布，提供给DataV调用。

## 操作步骤

1.  创建数据源。
    1.  进入[DataWorks的数据服务控制台](https://ds-cn-hangzhou.data.aliyun.com/)，单击新建 > 新建数据源。  
        ![创建数据源](http://help-static-aliyun-doc.aliyuncs.com/assets/img/122941/156455593638484_zh-CN.png)  
        
    2.  在新开的数据集成页面，单击数据源 > 新增数据源。
    3.  在新增数据源弹出框中，单击大数据存储模块下的Lightning。
    4.  在新增Lightning数据源弹出框中，输入数据源名称、Lightning Endpoint等相关信息，完成后单击测试连通性，连通性测试通过后即可完成数据源的创建。
        
        **说明** 参考[配置 JDBC 连接](https://help.aliyun.com/zh/maxcompute/configure-a-jdbc-connection#table-qwb-xkk-z2b)获取Lightning的连接信息，如Lightning Endpoint、Port等。
        
        本案例的配置如下图所示。  
        ![案例配置样式](http://help-static-aliyun-doc.aliyuncs.com/assets/img/122941/156455593638478_zh-CN.png)  
        
        **注意** JDBC扩展参数中的sslmode=require&prepareThreshold=0是必须的，不可删除，否则会无法连接。
        
2.  新建API。
    1.  在DataWorks的数据服务页面，单击新建 > 生成API > 向导模式。  
        ![新建API](http://help-static-aliyun-doc.aliyuncs.com/assets/img/122941/156455593738485_zh-CN.png)  
        
        **说明** 本案例以向导模式为例生成API，您也可以使用脚本模式。
        
    2.  在生成API 弹出框中，输入相关信息，单击确认。
        
        本案例的配置信息如下图所示。  
        ![API弹框信息](http://help-static-aliyun-doc.aliyuncs.com/assets/img/122941/156455593738489_zh-CN.png)  
        
    3.  在API配置页面配置API。
        
        1.  选择表。
            -   数据源类型为Lightning(MaxCompute)。
            -   数据源名称为您之前步骤新建的数据源。
            -   数据表名称为您已经准备的数据表。
        2.  选择参数。
            
            选择好表之后，会自动展示表的字段列表。勾选您要作为API请求参数的字段和作为返回参数的字段。
            
            本案例是为了查询成交金额趋势，因此要返回所有数据，即将日期和成交金额都作为返回参数，不设请求参数。
            
            本案例的最终配置如下图所示。  
            ![最终配置样式](http://help-static-aliyun-doc.aliyuncs.com/assets/img/122941/156455593738513_zh-CN.png)  
            
        3.  单击页面右侧的返回参数，设置参数描述信息。
            
            **注意** 如果不设置请求参数，则需要勾选返回结果分页，进行分页查询，以避免单次查询返回数据量过大影响性能。  
            ![返回参数信息描述](http://help-static-aliyun-doc.aliyuncs.com/assets/img/122941/156455593738518_zh-CN.png)  
            
        
    4.  API测试。
        
        单击页面工具栏最右侧的测试，填写API请求参数（由于打开了分页查询开关，系统会自动添加两个分页参数），单击开始测试。
        
        测试成功后，系统返回请求数据，并显示测试成功和 API调用延迟时间，如下图所示，可以看到通过Lightning查询MaxCompute表只花费了不到1秒，比直接通过MaxCompute SQL查询快了几十上百倍。  
        ![API测试](http://help-static-aliyun-doc.aliyuncs.com/assets/img/122941/156455593738519_zh-CN.png)  
        
3.  发布API。
    
    1.  单击页面工具栏最右侧的发布，即可进行发布。  
        ![发布API](http://help-static-aliyun-doc.aliyuncs.com/assets/img/122941/156455593838520_zh-CN.png)  
        
    2.  发布成功后，单击页面右上角的服务管理，再单击API名称，查看API详情。  
        ![查看API详情](http://help-static-aliyun-doc.aliyuncs.com/assets/img/122941/156455593838522_zh-CN.png)  
        
    3.  单击左侧导航栏的API调用，获取AppCode（简单身份认证）和 AppKey、AppSecret（加密签名身份认证），在调用API时需要进行认证。  
        ![获取身份认证](http://help-static-aliyun-doc.aliyuncs.com/assets/img/122941/156455593838525_zh-CN.png)  
        
        **注意** 请妥善保管您的AppCode、AppKey和AppSecret，谨防泄露。
        
    
    发布成功后，系统显示发布成功。