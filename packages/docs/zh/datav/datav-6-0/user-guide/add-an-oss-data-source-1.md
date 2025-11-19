<!DOCTYPE html> 

本文档为您介绍在DataV中添加对象存储OSS数据源的方法，以及相关参数配置说明。使用阿里云对象存储服务（Object Storage Service，简称OSS），您可以通过网络随时存储和调用文本、图片、音频和视频等各种非结构化数据文件。

## 前提条件

已准备好待添加的对象存储OSS数据源。 

## 添加对象存储OSS数据源操作步骤

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在我的数据页签中选择数据源管理，单击添加数据。
3. 从类型列表中，选择对象存储 OSS 。
4. 填写OSS相关信息。  
![添加OSS数据源](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8005964951/p32329.png)

| 参数        | 说明                                                                                                                                                                                                                                  |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 名称        | 数据源的显示名称，您可以自由命名。                                                                                                                                                                                                                   |
| AK ID     | 拥有目标OSS访问权限的账号的AccessKey ID。                                                                                                                                                                                                        |
| AK Secret | 拥有目标OSS访问权限的账号的AccessKey Secret。                                                                                                                                                                                                    |
| Region    | 目标OSS的外网访问Region信息。进入[OSS控制台](https://oss.console.aliyun.com/)，单击您的Bucket名称进行获取。![OSS Region信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8005964951/p32341.png)上图中的OSS Bucket位于上海区域，所以Region填写为oss-cn-shanghai。 |
5. 信息填写完成后，单击确定，完成数据源的添加。  
新添加的数据源会自动显示在数据源列表中。

## 使用对象存储OSS数据源操作步骤

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在我的可视化页面中，将鼠标移动至需要编辑的可视化应用上，单击编辑。
3. 在画布编辑页面，单击画布中的某一组件。  
如果画布中还没有组件，请先添加组件，详情请参见[添加资产](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/add-a-widget-1/#task-2375434 "通过添加资产功能，您可以在DataV可视化应用项目中添加可视化资产，配置资产所需要的应用样式。本文以添加一个组件类型的资产为例，介绍在画布编辑器中添加资产的方法。")。
4. 在画布右侧的组件配置面板中选择数据，并单击配置数据源。  
![配置数据源](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6028370261/p65745.png)
5. 在设置数据源页面中，选择数据源类型为对象存储 OSS。
6. 在选择已有数据源列表中选择配置完成的对象存储 OSS数据源。
7. 在下方文件路径编辑框中，填写需要的文件路径。
8. 单击预览数据源返回结果，查看数据返回结果。  
内容格式要求如下。  
  * 文件必须为JSON文本格式。
  * 文件路径格式：oss://bucket/file。例如您的Bucket名为myBucket，文件为test.json，应该填写oss://myBucket/test.json。