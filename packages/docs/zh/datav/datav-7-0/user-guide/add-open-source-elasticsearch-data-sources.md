  添加并使用开源 Elastic Search数据源-DataV数据可视化-阿里云

通过开源Elastic Search和DataV结合使用，可以实现数据分析和搜索结果的大屏展示。本文介绍在DataV中添加并使用开源Elastic Search数据源的方法。

## 前提条件

已准备好待添加的开源Elastic Search数据源。

## 使用限制

仅支持企业版及以上版本。

## 添加开源Elastic Search数据源

1.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
2.  在**工作台**页面，单击**数据准备 > 数据源**，进入**数据源**页面，单击**新建数据源**。
    
3.  从**类型**列表中，选择**开源Elastic Search**。
    
4.  填写开源Elastic Search数据服务项目信息。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8172082761/p539758.png)
    
    **参数**
    
    **说明**
    
    **名称**
    
    数据源的显示名称，可自定义命名。
    
    **域名**
    
    连接数据源的地址。
    
    **重要**
    
    该地址是需要DataV服务器能够通过公网或阿里云部分Region内网访问您数据源的域名或IP地址。
    
    **用户名**
    
    登录数据源的用户名。
    
    **密码**
    
    登录数据源的密码。
    
    **端口**
    
    数据源设置的端口。
    
    配置成功后，系统会自动进行测试连接。
    
5.  信息填写完成后，单击**确定**，完成数据源的添加。
    
    新添加的数据源会自动显示在数据源列表中。
    

## 使用开源Elastic Search数据源

1.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
2.  在**工作台**页面中，将鼠标移动至需要编辑的数据看板上，单击**编辑**。
    
    **重要**
    
    如果您的**工作台**页面内还没有创建任何数据看板，请参见[使用模板创建PC端看板](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)，创建一个数据看板。
    
3.  在画布编辑页面，单击画布中的某一组件。
    
    如果画布中还没有组件，请先添加组件，详情请参见[组件画布操作](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-operations-in-a-canvas#title-1c7-abe-n0m)。
    
4.  在画布右侧的组件配置面板中选择**数据源**。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0024312761/p539649.png)
    
5.  在**设置数据源**模块中，选择**数据源类型**为**开源Elastic Search**。
    
6.  在**选择已有数据源**列表中选择配置完成的开源Elastic Search数据源。
    
7.  在**index**输入框中填写查询索引。
    
8.  在**Query**输入框中填写查询体，查询体为JSON对象。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8172082761/p539760.png)
    
9.  单击**查看数据返回结果**，查看数据返回结果。
    

## 后续步骤

获取原始数据后，可参见[组件数据源配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-data-source-configuration)进行组件数据的适配。

## 常见问题

更多问题，请参见[数据源配置常见问题](https://help.aliyun.com/zh/datav/datav-7-0/support/faq-about-data-source-configuration)。