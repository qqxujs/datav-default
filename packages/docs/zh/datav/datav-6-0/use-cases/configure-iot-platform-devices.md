<!DOCTYPE html> 

物联网平台主要负责获取设备端数据，并通过规则引擎将数据转发至Table Store、DataHub、RDS、Message Service、Message Queue、TSDB、FC以及另外一个Topic。

## 前提条件

您已经完成了[DataHub项目的创建](https://help.aliyun.com/zh/datav/datav-6-0/use-cases/create-a-datahub-project#task-dyg-dxh-ffb "阿里云流数据处理平台DataHub是流式数据（Streaming Data）的处理平台，提供对流式数据的发布（Publish），订阅（Subscribe）和分发功能，让您可以轻松构建基于流式数据的分析和应用。")。 

## 操作步骤

1. 创建产品。
  1. 登录阿里云[物联网平台控制台](https://iot.console.aliyun.com/)。
  2. 在控制台左上方，选择物联网平台所在地域，在实例概览页面，单击公共实例。![物联网平台](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5211550661/p477514.jpg)
  3. 选择左侧菜单栏的设备管理 \> 产品，单击创建产品。
  4. 在新建产品页面，配置参数后，单击确认。本文示例的产品名称为DataV可视化大屏，所属品类为自定义品类，其他参数使用默认值，如下图所示。![新建产品](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5211550661/p477517.jpg)
2. 添加设备。
  1. 在创建产品页面，单击前往添加。![添加设备](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5211550661/p477520.jpg)
  2. 在设备列表页签，单击添加设备，输入设备名称（DeviceName）为Demo，设置备注名称为Demo1，单击确认。![设备列表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4211550661/p477521.jpg)创建设备成功后，在弹出的添加完成对话框，单击一键复制设备证书获取设备证书。您也可单击前往查看，在设备详情页面，单击DeviceSecret右侧查看，获取设备证书。![添加完成](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7091550661/p477536.jpg)
3. 创建并配置规则引擎。
  1. 选择左侧菜单栏的规则引擎 \> 云产品流转，单击创建解析器。
  2. 输入解析器名称，单击确定，完成解析器的创建。![解析器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5211550661/p477531.jpg)
  3. 在解析器详情页面，单击关联数据源。![关联数据源](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7091550661/p477542.jpg)
  4. 单击数据目的，进入数据目的页面，单击关联数据目的。选择数据目的后，单击确定。若要创建数据目的，在创建数据目的窗口，在选择操作下选择发送数据到DataHub中。![关联数据目的](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7091550661/p477544.jpg)
  5. 单击解析器脚本，进入解析器脚本页面。
  6. 输入脚本内容，单击发布，完成解析器配置。
4. 单击左侧菜单栏的云产品流转，回到解析器详情页面。单击已经创建解析器右侧的启动，启动解析器。