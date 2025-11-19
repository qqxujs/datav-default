<!DOCTYPE html> 

本文档为您介绍在DataV中添加实时监控服务ARMS数据源的方法，以及相关参数配置说明。业务实时监控服务（Application Real-Time Monitoring Service，简称ARMS）是一款APM类的监控产品。用户可基于ARMS的前端、应用和自定义监控功能，快速构建实时的应用性能和业务监控能力。 

## 前提条件

已准备好待添加的业务实时监控服务ARMS数据源。 

## 添加业务实时监控服务ARMS数据源操作步骤

**重要** 由于业务实时监控服务（ARMS服务）已不支持自定义监控服务，请参见[添加Open API数据源](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/add-an-openapi-explorer-data-source#task-2471948)，使用OpenAPI方式进行数据监控。 

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在我的数据页签中选择数据源管理，单击添加数据。
3. 从类型列表中，选择业务实时监控服务。
4. 填写ARMS相关信息。  
![添加业务实时监控服务ARMS数据源](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1405964951/p34197.png)

| 参数        | 说明                                          |
| --------- | ------------------------------------------- |
| 自定义数据源名称  | 数据源的显示名称，您可以自由命名。                           |
| AK ID     | 拥有ARMS访问权限的账号的AccessKey ID（从ARMS控制台获取）。     |
| AK Secret | 拥有ARMS访问权限的账号的AccessKey Secret（从ARMS控制台获取）。 |
5. 单击确定，完成数据源的添加。

## 使用业务实时监控服务ARMS数据源操作步骤

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在我的可视化页面中，将鼠标移动至需要编辑的可视化应用上，单击编辑。

**重要** 如果您的我的可视化页面内还没有创建任何可视化应用，请参见[使用模板创建PC端可视化应用](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-a-template-to-create-a-pc-side-visual-application#task-2354861)，创建一个可视化应用。
3. 在画布编辑页面，单击画布中的某一组件。  
如果画布中还没有组件，请先添加组件，详情请参见[添加资产](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/add-a-widget-1/#task-2375434)。
4. 在画布右侧的组件配置面板中选择数据，并单击配置数据源。  
![配置数据源](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6028370261/p65745.png)
5. 在设置数据源页面中，选择数据源类型为业务实时监控服务。
6. 在选择已有数据源列表中选择配置完成的业务实时监控服务数据源。
7. 在下方请求URL编辑框中，填写ARMS数据集DataV接入链接。
8. 单击预览数据源返回结果，查看数据返回结果。