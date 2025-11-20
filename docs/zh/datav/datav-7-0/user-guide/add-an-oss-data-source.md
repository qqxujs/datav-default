<!DOCTYPE html> 

本文档为您介绍在DataV中添加对象存储OSS数据源的方法，以及相关参数配置说明。使用阿里云对象存储服务（Object Storage Service，简称OSS），您可以通过网络随时存储和调用文本、图片、音频和视频等各种非结构化数据文件。

## 前提条件

已准备好待添加的对象存储OSS数据源。

## 使用限制

仅支持企业版及以上版本。

## 添加对象存储OSS数据源

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面，单击**数据准备 > 数据源**，进入**数据源**页面，单击**新建数据源**。
3. 从**类型**列表中，选择**对象存储 OSS** 。
4. 填写OSS相关信息。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4314312761/p539746.png)

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **自定义数据源名称**    |    数据源的显示名称，您可以自由命名。    |
|    **AK ID**    |    拥有目标OSS访问权限的账号的AccessKey ID。    |
|    **AK Secret**    |    拥有目标OSS访问权限的账号的AccessKey Secret。    |
|    **Region**    |    目标OSS的外网访问Region信息。进入[OSS控制台](https://oss.console.aliyun.com/)，单击您的Bucket名称进行获取。![OSS Region信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8005964951/p32341.png)上图中的OSS Bucket位于上海区域，所以**Region**填写为**oss-cn-shanghai**。    |
5. 信息填写完成后，单击**确定**，完成数据源的添加。  
新添加的数据源会自动显示在数据源列表中。

## 使用对象存储OSS数据源

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面中，将鼠标移动至需要编辑的数据看板上，单击**编辑**。

**重要**  
如果您的**工作台**页面内还没有创建任何数据看板，请参见[使用模板创建PC端看板](/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)，创建一个数据看板。
3. 在画布编辑页面，单击画布中的某一组件。  
如果画布中还没有组件，请先添加组件，详情请参见[组件画布操作](/zh/datav/datav-7-0/user-guide/widget-operations-in-a-canvas#title-1c7-abe-n0m)。
4. 在画布右侧的组件配置面板中选择**数据源**。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0024312761/p539649.png)
5. 在**设置数据源**模块中，选择**数据源类型**为**对象存储 OSS**。
6. 在**选择已有数据源**列表中选择配置完成的**对象存储 OSS**数据源。
7. 在下方**文件路径**编辑框中，填写需要的文件路径。
8. 单击**查看数据返回结果**，查看数据返回结果。  
内容格式要求如下。  

  * 文件必须为JSON文本格式。
  * 文件路径格式：oss://bucket/file。例如您的Bucket名为myBucket，文件为test.json，应该填写oss://myBucket/test.json。

## 后续步骤

获取原始数据后，可参见[组件数据源配置](/zh/datav/datav-7-0/user-guide/widget-data-source-configuration)进行组件数据的适配。

## 常见问题

更多问题，请参见[数据源配置常见问题](/zh/datav/datav-7-0/support/faq-about-data-source-configuration)。