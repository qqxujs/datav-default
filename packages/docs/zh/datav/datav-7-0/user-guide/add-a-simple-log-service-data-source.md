  添加日志服务SLS作为数据源-DataV数据可视化-阿里云

本文档介绍在DataV中添加日志服务SLS数据源的方法，以及相关参数配置说明。日志服务（Log Service，简称SLS）是针对实时数据的一站式服务。

## 前提条件

已准备好待添加的日志服务SLS数据源。

## 使用限制

仅支持企业版及以上版本。

## 添加日志服务SLS数据源

1.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
2.  在**工作台**页面，单击**数据准备 > 数据源**，进入**数据源**页面，单击**新建数据源**。
    
3.  从**类型**列表中，选择**简单日志服务SLS**。
    
4.  填写**简单日志服务SLS**相关信息。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9272082761/p539752.png)
    
    **参数**
    
    **说明**
    
    **自定义数据源名称**
    
    数据源的显示名称，您可以自由命名。
    
    **AppKey**
    
    拥有目标SLS访问权限的账号的AccessKey ID。
    
    **AppSecret**
    
    拥有目标SLS访问权限的账号的AccessKey Secret。
    
    **EndPoint**
    
    填写SLS服务的EndPoint。请参见[日志服务入口文档](https://help.aliyun.com/zh/sls/endpoints#reference-wgx-pwq-zdb)，根据您SLS服务的网络类型和所在区域进行填写。
    
    例如VPC网络下，上海区域的**EndPoint** 填写为**https://cn-shanghai-intranet.log.aliyuncs.com**。
    
5.  信息填写完成后，单击**确定**，完成数据源的添加。
    
    新添加的数据源会自动显示在数据源列表中。
    

## 使用日志服务SLS数据源

1.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
2.  在**工作台**页面中，将鼠标移动至需要编辑的数据看板上，单击**编辑**。
    
    **重要**
    
    如果您的**工作台**页面内还没有创建任何数据看板，请参见[使用模板创建PC端看板](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)，创建一个数据看板。
    
3.  在画布编辑页面，单击画布中的某一组件。
    
    如果画布中还没有组件，请先添加组件，详情请参见[组件画布操作](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-operations-in-a-canvas#title-1c7-abe-n0m)。
    
4.  在画布右侧的组件配置面板中选择**数据源**。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0024312761/p539649.png)
    
5.  在**设置数据源**模块中，选择**数据源类型**为**简单日志服务SLS**。
    
6.  在**选择已有数据源**列表中选择配置完成的日志服务数据源。
    
7.  在下方**查询**编辑框中输入查询参数 。
    
    支持以JSON对象为查询参数进行查询。 可填写的查询参数为：
    
    ```
    {
    "projectName": "test",
    "logStoreName": "access-log",
    "topic": "test",
    "from": 1509897600,
    "to": 1509984000,
    "query": "" ,
    "line": 100,
    "offset": 0
    }
    ```
    
    **说明**
    
    其中query参数的查询语法请参见[查询语法与功能](https://help.aliyun.com/zh/sls/query-syntax/#concept-tnd-1jq-zdb)。
    
8.  单击**查看数据返回结果**，查看数据返回结果。
    

## 后续步骤

获取原始数据后，可参见[组件数据源配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-data-source-configuration)进行组件数据的适配。

## 常见问题

更多问题，请参见[数据源配置常见问题](https://help.aliyun.com/zh/datav/datav-7-0/support/faq-about-data-source-configuration)。