<!DOCTYPE html> 

宜搭是阿里巴巴自研的低代码应用构建平台，您可以通过可视化拖拽的方式，快速完成数据应用的搭建。本文为您介绍在DataV中添加和使用宜搭数据源的方法，以及相关参数配置说明。

## 前提条件

已使用钉钉账号登录[宜搭控制台](https://www.aliwork.com)，并成功创建了一个[宜搭数据表单](https://www.yuque.com/yida/support/ybuoxl)。

## 背景信息

宜搭数据源的数据调用遵循最小权限原则。当使用DataV调用数据源时，每个账号仅能访问该账号在宜搭中创建的应用下的表单数据，无法访问其他账号创建的表单数据。

## 使用限制

仅支持DataV企业版及以上版本。

## 添加宜搭数据源

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面，单击**数据准备** \> **数据源**，进入**数据源**页面，单击**新建数据源**。
3. 在**添加数据源**对话框中，**类型**选择**宜搭数据源**。
4. 填写宜搭数据源相关信息。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5643312761/p539768.png)

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **自定义数据源名称**    |    （必填）数据源的显示名称。    |
|    **应用编码**    |    （必填）宜搭应用平台中已创建表单的应用编码。在宜搭应用的**应用设置**中的**应用数据**页签获取应用编码，如下图所示。![应用编码](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9192172261/p279256.png)    |
|    **应用密钥**    |    （必填）宜搭应用平台中已创建表单的应用密钥。在宜搭应用的**应用设置**中的**应用数据**页签获取应用密钥，如下图所示。![应用密钥](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1316606261/p293380.png)    |
5. 信息填写完成后，单击**确定**，完成数据源的添加。  
新添加的数据源会自动显示在数据源列表中。

## 使用宜搭数据源

下面将通过柱状图组件演示如何在组件中接入宜搭数据源。

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面中，将鼠标移动至需要编辑的数据看板上，单击**编辑**。

**说明**  
如果您的**工作台**页面内还没有创建任何数据看板，请先[创建数据看板](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)。
3. 在画布编辑页面，单击画布中的某个组件（示例中使用柱状图）。

**说明**  
如果画布中没有组件，请先[添加组件](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-a-widget-2)。
4. 在画布右侧的组件配置面板中选择**数据源**。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0024312761/p539649.png)
5. 在**设置数据源**模块中，选择**数据源类型**为**宜搭数据源**。
6. 在**选择已有数据源**列表中选择一个配置完成的宜搭数据源。
7. 在页面右侧单击**数据配置**，打开图表数据配置对话框。在**选择数据集**列表中选择目标数据集后，字段列表会自动显示该数据集的所有字段。![{8A3328EC-585D-485F-A5E6-DC58D73D36A8}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2143872471/p929952.png)
8. 将数据字段拖放至右侧图表字段映射区域，并与相应的映射字段匹配，即可完成数据映射配置。  
可选：在数据映射下方，可以根据数据字段进行数据排序（升序/降序）和数据筛选的配置。  
配置完成后可在页面左侧的**查看数据返回结果**中，查看数据返回的结果。  
![{24568EBD-FC2C-4F5E-A13B-AD6E8B9A4556}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2143872471/p929998.png)
9. 完成数据映射配置后，您可以在画布编辑器中实时预览图表的样式和数据展示效果。![{B3DCA656-7C42-4FD4-930C-6744B794CA20}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2143872471/p929993.png)

## 后续步骤

获取原始数据后，可参见[组件数据源配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-data-source-configuration)进行组件数据的适配。

## 常见问题

更多问题，请参见[数据源配置和使用常见问题](https://help.aliyun.com/zh/datav/datav-7-0/support/faq-about-data-source-configuration)。