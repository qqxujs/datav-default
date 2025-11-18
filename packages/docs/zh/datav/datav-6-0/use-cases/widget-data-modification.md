  配置DataV组件的数据-DataV数据可视化-阿里云

本文档为您介绍在DataV疫情模板可视化应用中修改组件数据的方法。

## 前提条件

已完成可视化应用的创建，详情请参见[创建可视化应用](https://help.aliyun.com/zh/datav/datav-6-0/getting-started/create-an-application-by-using-the-epidemic-situation-control-template#task-2477417 "本文为您介绍使用疫情态势管控模板创建可视化应用的方法。")。

## 背景信息

-   本案例使用的是静态数据源，因此可以直接在组件的数据配置区域粘贴准备好的数据。如果您的数据源为CSV文件、数据库等其他类型的数据，需要首先添加数据源，详情请参见[添加数据源](https://help.aliyun.com/zh/datav/data-sources-overview#concept-ldr-4gp-p2b "本文档为您介绍DataV支持的所有数据源，帮助您选择合适的数据源进行大屏项目的开发。")。
-   如果您需要使用数据源为API，直接在数据配置栏输入API即可。具体配置API数据源时，是否勾选服务器代理请求等操作，详情请参见[跨域数据配置](https://help.aliyun.com/document_detail/64140.html?spm=a2c4g.11186623.6.791.28d524a3MrlT6u)。

## 操作步骤

1.  登录[DataV控制台](https://datav.aliyun.com/)。
2.  以模板画布中轮播列表组件为例，单击选中该组件后，在画布右侧配置面板的数据页签中，单击配置数据源。![配置数据源入口](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5256822951/p51528.png)
3.  在设置数据源页面中，选择数据源类型为静态数据。![选中静态数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5256822951/p81109.png)
4.  在下方的数据配置区域内，按照您的需求修改模板已有的数据，或粘贴准备好的JSON格式的数据。![修改数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6256822951/p81112.png)
    
    **说明** 添加数据时的字段名要和系统设置保持一致。
    
    数据配置完成后，您可以在设置数据源页面单击数据响应结果的![刷新](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8092333951/p95948.png)图标刷新数据响应结果。
    
    数据响应成功后，在数据页签会显示配置完成。
    
    ![匹配成功](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6256822951/p81113.png)
    
5.  使用同样的方式，配置画布中所有组件的数据。