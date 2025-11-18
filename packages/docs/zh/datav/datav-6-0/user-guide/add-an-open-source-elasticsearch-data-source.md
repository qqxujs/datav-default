  添加并使用开源Elasticsearch数据源-DataV数据可视化-阿里云

通过开源Elastic Search和DataV结合使用，可以实现数据分析和搜索结果的大屏展示。本文介绍在DataV中添加并使用开源Elastic Search数据源的方法。

## 前提条件

已准备好待添加的开源Elastic Search数据源。

## 添加开源Elastic Search数据源

1.  登录[DataV控制台](https://datav.aliyun.com/)。
2.  在我的数据页签中选择数据源管理，单击添加数据。
3.  从类型列表中，选择开源Elastic Search。
4.  填写开源Elastic Search数据服务项目信息。
    
    ![添加开源ES数据源](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2315246261/p295137.jpg)
    
     
    
    参数
    
    说明
    
    名称
    
    数据源的显示名称，可自定义命名。
    
    域名
    
    连接数据源的地址。
    
    **注意** 该地址是需要DataV服务器能够通过公网或阿里云部分Region内网访问您数据源的域名或IP地址。
    
    用户名
    
    登录数据源的用户名。
    
    密码
    
    登录数据源的密码。
    
    端口
    
    数据源设置的端口。
    
    配置成功后，系统会自动进行测试连接。
    
5.  信息填写完成后，单击确定，完成数据源的添加。
    
    新添加的数据源会自动显示在数据源列表中。
    

## 使用开源Elastic Search数据源

1.  登录[DataV控制台](https://datav.aliyun.com/)。
2.  在我的可视化页面中，将鼠标移动至需要编辑的可视化应用上，单击编辑。
3.  在画布编辑页面，单击画布中的某一组件。
    
    如果画布中还没有组件，请先添加组件，详情请参见[添加组件](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/add-a-widget-1/#task-2375434 "本文介绍在画布编辑器中添加组件的方法。通过添加组件功能，您可以在DataV可视化应用项目中添加可视化组件，配置所需要的应用样式。")。
    
4.  在画布右侧的组件配置面板中选择数据，并单击配置数据源。
    
    ![配置数据源](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6028370261/p65745.png)
    
5.  在设置数据源页面中，选择数据源类型为开源Elastic Search。
6.  在选择已有数据源列表中选择配置完成的开源Elastic Search数据源。
7.  在index输入框中填写查询索引。
8.  在Query输入框中填写查询体，查询体为JSON对象。
    
    ![选择所需开源数据源](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3315246261/p295436.png)
    
9.  单击预览数据源返回结果，查看数据返回结果。