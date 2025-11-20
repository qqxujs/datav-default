# 添加宜搭数据源 %{#256361}% 

宜搭是阿里巴巴自研的低代码应用构建平台，您可以通过可视化拖拽的方式，快速完成数据应用的搭建。本文为您介绍在DataV中添加和使用宜搭数据源的方法，以及相关参数配置说明。

## 前提条件

已通过钉钉登录[宜搭控制台](https://www.aliwork.com)创建一个宜搭应用数据表单。新建表单详情请参见[新建宜搭数据表单](https://www.yuque.com/yida/support/ybuoxl)。 

## 背景信息

宜搭数据源内数据的调用权限使用最小可用原则。在DataV调用数据源时，同一账号只能调用本账号在宜搭中搭建的应用下的表单数据，无法调用其他账号创建的表单数据。 

## 添加宜搭数据源

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在我的数据页签中选择数据源管理，单击添加数据。
3. 在添加数据对话框中，类型选择宜搭数据源。
4. 填写宜搭数据源相关信息。  
![添加宜搭/有数数据集面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0316606261/p279190.jpg)

|    参数    |    说明    |
|    ----    |    ----    |
|    自定义数据源名称    |    （必填）数据源的显示名称。    |
|    应用编码    |    （必填）宜搭应用平台中已创建表单的应用编码。 在宜搭应用的应用设置中的应用数据页签获取应用编码，如下图所示。 ![应用编码](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9192172261/p279256.png)    |
|    应用密钥    |    （必填）宜搭应用平台中已创建表单的应用密钥。 在宜搭应用的应用设置中的应用数据页签获取应用密钥，如下图所示。 ![应用密钥](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1316606261/p293380.png)    |
|    表单ID    |    （非必填）宜搭应用平台中已创建表单的表单ID。填写了应用编码后可在列表中选择对应表单。    |
5. 信息填写完成后，单击确定，完成数据源的添加。  
新添加的数据源会自动显示在数据源列表中。![展示实例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9192172261/p279242.png)

## 使用宜搭数据源

以下为您介绍在组件中如何接入宜搭数据源。

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在我的可视化页面中，将鼠标移动至需要编辑的可视化应用上，单击编辑。
3. 在画布编辑页面，单击画布中的某一组件。  
如果画布中还没有组件，请先添加组件，详情请参见[添加组件](/zh/datav/datav-6-0/user-guide/add-a-widget-1/#task-2375434 "本文介绍在画布编辑器中添加组件的方法。通过添加组件功能，您可以在DataV可视化应用项目中添加可视化组件，配置所需要的应用样式。")。
4. 在画布右侧的组件配置面板中选择数据，并单击配置数据源。  
![配置数据源](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6028370261/p65745.png)
5. 在设置数据源页面中，选择数据源类型为宜搭数据源。
6. 在选择已有数据源列表中选择一个配置完成的宜搭数据源。  
![选择数据源](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9501213261/p279259.png)
7. 单击下方的进入配置，打开图表数据配置对话框。
8. 在对话框左上角的数据集列表中选择一个目标数据集，选中后在下方字段列表处系统会默认排列当前选中数据集内的所有字段。  
![选择数据集](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9192172261/p280301.png)
9. 拖拽某个数据字段到右侧的图表字段映射下方对应的映射字段中。  
![拖动字段数据映射字段内容](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9192172261/p279366.png)
10. 单击映射字段右侧的![配置数据缩略图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0292172261/p279370.jpg)图标，选择配置数据字段聚合方式（默认选择求和）。  
![聚合方式选择](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0292172261/p279372.png)
11. **可选：**单击映射字段右侧的![配置数据缩略图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0292172261/p279370.jpg)图标，选择加入排序条件即可将该字段加入到下方排序列表中，排序模式可选降序（默认）和升序。  
![排序](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0292172261/p280322.png)
12. 配置映射数据后，在右侧图表预览区域，可实时预览图表数据的样式。  
![预览图表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0292172261/p279378.png)
13. 单击对话框右下角的确定完成图表数据映射配置。
14. 配置完成后可在组件数据配置面板的数据响应结果中，看数据返回的结果。  
![返回数据响应结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9501213261/p279383.jpg)