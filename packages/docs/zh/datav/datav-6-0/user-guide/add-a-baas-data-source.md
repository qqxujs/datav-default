<!DOCTYPE html> 

本文档为您介绍在DataV中添加区块链服务数据源的方法，以及相关参数配置说明。使用阿里云区块链服务（Blockchain as a Service，简称BaaS），您可以通过REST API调用智能合约，查询链上信息，也可以查询区块及交易信息。 

## 前提条件

已准备好待添加的区块链服务数据源。 

## 添加区块链服务数据源操作步骤

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在我的数据页面中，单击添加数据。
3. 从类型列表中，选择区块链服务。
4. 填写区块链服务相关信息。  
![添加区块链服务参数面板](http://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3818984951/p111292.png)

|    参数    |    说明    |
|    ----    |    ----    |
|    自定义数据源名称    |    区块链服务数据源的显示名称，您可以自由命名。    |
|    Endpoint    |    区块链服务数据源的REST API地址。进入[区块链服务控制台](https://baas.console.aliyun.com/?spm=a2c4g.11186623.2.12.6e46395bYwIk5T&accounttraceid=45adc0f6ade24db2a61c3808d346968fvrwe)，单击您的组织 \> 用户 \> REST API \> REST API 地址中进行获取。![REST API地址步骤图](http://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3818984951/p103804.png)    |
|    refreshToken    |    访问当前区块链服务数据源的Access Token信息，用来做请求发起者的身份认证。进入[区块链服务控制台](https://baas.console.aliyun.com/?spm=a2c4g.11186623.2.12.6e46395bYwIk5T&accounttraceid=45adc0f6ade24db2a61c3808d346968fvrwe)，单击您的组织 \> REST-API，单击侧边栏的生成Token，在下方展示生成的Token信息中获取。![token获取](http://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3818984951/p103812.png)    |
|    network    |    区块链服务数据源的通道名称。进入[区块链服务控制台](https://baas.console.aliyun.com/?spm=a2c4g.11186623.2.12.6e46395bYwIk5T&accounttraceid=45adc0f6ade24db2a61c3808d346968fvrwe)，单击您的组织 \> 已加入的通道 \> 通道中进行获取。![通道获取步骤](http://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3818984951/p103798.png)    |
5. 信息填写完成后，单击确定，完成数据源的添加。  
新添加的数据源会自动显示在数据源列表中。

## 使用区块链服务数据源操作步骤

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在我的可视化页面中，将鼠标移动至需要编辑的可视化应用上，单击编辑。
3. 在画布编辑页面，单击画布中的某一组件。  
如果画布中还没有组件，请先添加组件，详情请参见[添加组件](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/add-a-widget-1/#task-2375434 "本文档介绍在画布编辑器中添加组件的方法。通过添加组件功能，您可以在DataV可视化应用项目中添加可视化组件，配置所需要的应用样式。")。
4. 在画布右侧的组件配置面板中，单击数据 \> 配置数据源。  
![配置数据源](http://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2637420061/p65745.png)
5. 在设置数据源页面中，选择数据源类型为区块链服务。
6. 在选择已有数据源列表中选择配置完成的区块链服务数据源。
7. 在下方查询参数编辑框中，填写需要的查询的区块链参数内容。

**说明** 由于查询区块链数据的方式多样化，您需要根据数据类型填写对应的查询参数方式。
8. 单击预览数据源返回结果，查看数据返回结果。