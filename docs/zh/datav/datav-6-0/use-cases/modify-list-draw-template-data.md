# 修改名单抽奖数据 %{#406484}% 

本文为您介绍在DataV名单抽奖模板可视化应用中修改抽奖名单具体数据的方法。

## 前提条件

已完成可视化应用的创建，详情请参见[创建模板可视化应用](/zh/datav/datav-6-0/getting-started/create-list-draw-template-applications#task-2040709 "本文为您介绍使用名单抽奖模板创建可视化应用的方法。")。 

## 背景信息

* 本案例默认使用的是静态数据源，因此可以直接在组件的数据配置区域粘贴准备好的数据。如果您的数据源为CSV文件、数据库等其他类型的数据，需要首先添加数据源，详情请参见[添加数据源](/zh/datav/data-sources-overview#concept-ldr-4gp-p2b "本文档为您介绍DataV支持的所有数据源，帮助您选择合适的数据源进行大屏项目的开发。")。
* 如果您需要使用数据源为API，直接在数据配置栏输入API即可。具体配置API数据源时，是否勾选服务器代理请求等操作，详情请参见[跨域数据配置](https://help.aliyun.com/document%5Fdetail/64140.html?spm=a2c4g.11186623.6.791.28d524a3MrlT6u)。

## 操作步骤

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在我的可视化页面内，单击名单抽奖可视化应用，进入画布编辑器内。
3. 以画布中抽奖池组件为例，单击选中该组件后，在画布右侧的数据面板中，单击配置数据源。  
![配置组件数据源入口](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8884862161/p237411.png)
4. 在设置数据源页面中，选择数据源类型为静态数据。  
![选择静态数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8884862161/p237412.png)
5. 在下方的数据配置区域内，按照您的需求自定义修改模板已有的数据，或直接粘贴准备好的JSON格式的数据。  
![修改数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8884862161/p237414.jpg)

**说明** 添加数据时的字段名要和系统设置保持一致。  
数据配置完成后，您可以在设置数据源页面单击数据响应结果的![刷新](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8092333951/p95948.png)图标刷新数据响应结果。  
数据响应成功后，在数据页签会显示配置完成。![匹配成功](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9884862161/p237422.png)
6. 您还可以在组件设置数据源页面中，选择数据源类型为您自定义添加的动态数据源类型（如数据库、API等），使得数据接口获得的是整个抽奖池数据，即所有能参与抽奖的人员名单。  
![配置动态数据源内容](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9884862161/p238448.png)  
通过配置动态数据源内容，可动态获取抽奖名单数据，实现公平随机抽奖。如何配置动态数据源， 请参见[添加API数据源](/zh/datav/datav-6-0/user-guide/add-an-api-data-source-1#task-2556009 "本文档介绍在DataV中添加API数据源的方法，以及相关参数配置说明。API指通用的数据接口，如果您已有可用的API接口，可在DataV中使用自己的API数据源连接。")或[添加兼容MySQL数据库的数据源](/zh/datav/datav-6-0/user-guide/add-a-mysql-compatible-data-source-1#task-2470476 "本文档介绍在DataV中添加兼容MySQL数据库数据源的方法，以及相关参数配置说明。通过兼容MySQL数据库的数据源，您可以使用旧版本的MySQL数据库作为组件的数据源。")。