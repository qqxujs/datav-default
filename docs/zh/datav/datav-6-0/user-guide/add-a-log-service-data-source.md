# 添加日志服务SLS数据源 %{#100102}% 

本文档介绍在DataV中添加日志服务SLS数据源的方法，以及相关参数配置说明。日志服务（Log Service，简称SLS）是针对实时数据的一站式服务。

## 前提条件

已准备好待添加的日志服务SLS数据源。 

## 添加日志服务SLS数据源操作步骤

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在我的数据页面中，单击添加数据。
3. 从类型列表中，选择简单日志服务SLS。
4. 填写简单日志服务SLS相关信息。  
![添加SLS数据源](http://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1505964951/p34422.png)

|    参数    |    说明    |
|    ----    |    ----    |
|    自定义数据源名称    |    数据源的显示名称，您可以自由命名。    |
|    AppKey    |    拥有目标SLS访问权限的账号的AccessKey ID。    |
|    AppSecret    |    拥有目标SLS访问权限的账号的AccessKey Secret。    |
|    EndPoint    |    填写SLS服务的EndPoint。请参见[日志服务入口文档](/zh/sls/endpoints#reference-wgx-pwq-zdb "本文介绍了日志服务不同网络类型的服务入口。")，根据您SLS服务的网络类型和所在区域进行填写。 例如VPC网络下，上海区域的EndPoint 填写为https://cn-shanghai-intranet.log.aliyuncs.com。    |
5. 信息填写完成后，单击确定，完成数据源的添加。  
新添加的数据源会自动显示在数据源列表中。

## 使用日志服务SLS数据源操作步骤

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在我的可视化页面中，将鼠标移动至需要编辑的可视化应用上，单击编辑。
3. 在画布编辑页面，单击画布中的某一组件。  
如果画布中还没有组件，请先添加组件，详情请参见[添加组件](/zh/datav/datav-6-0/user-guide/add-a-widget-1/#task-2375434 "本文档介绍在画布编辑器中添加组件的方法。通过添加组件功能，您可以在DataV可视化应用项目中添加可视化组件，配置所需要的应用样式。")。
4. 在画布右侧的组件配置面板中，单击数据 \> 配置数据源。  
![配置数据源](http://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2637420061/p65745.png)
5. 在设置数据源页面中，选择数据源类型为简单日志服务SLS。
6. 在选择已有数据源列表中选择配置完成的日志服务数据源。
7. 在下方查询编辑框中输入查询参数 。  
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

**说明** 其中query参数的查询语法请参见[查询语法](/zh/sls/query-syntax/#concept-tnd-1jq-zdb "日志服务提供一套查询语法用于设置查询条件，帮助您更有效地查询日志。")。
8. 单击预览数据源返回结果，查看数据返回结果。