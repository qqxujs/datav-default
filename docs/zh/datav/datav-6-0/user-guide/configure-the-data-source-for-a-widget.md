# 设置资产数据源 %{#129707}% 

本文介绍DataV设置资产数据源的方法，以及设置数据源页面的内容，包括数据源、数据过滤器以及数据响应结果等。 

## 配置资产数据源

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在我的可视化页面，单击您创建的可视化应用项目上方的编辑按钮。
3. 在画布编辑器页面，单击图层栏或画布中的某一个资产。

**注意** 在搜索资产配置之前，请确保您的可视化应用项目中已经添加了相应的资产，否则需要首先添加资产，详情请参见[添加资产](/zh/datav/datav-6-0/user-guide/add-a-widget-1/#task-2375434 "通过添加资产功能，您可以在DataV可视化应用项目中添加可视化资产，配置资产所需要的应用样式。本文以添加一个组件类型的资产为例，介绍在画布编辑器中添加资产的方法。")。
4. 单击编辑器右侧的数据图标。
5. 在数据面板中，单击配置数据源。  
![进入设置数据源页面](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2510921061/p54852.png)
6. 在设置数据源页面中，可修改数据源的类型和脚本、配置数据过滤器并查看数据响应结果。

## 修改数据源的类型和脚本

1. 在设置数据源页面中，在数据源类型列表中可修改数据源类型。  
系统支持的数据源类型以及各数据源的配置详情，请参见[管理数据源](/zh/datav/data-sources-overview#concept-ldr-4gp-p2b "本文档为您介绍DataV支持的所有数据源，帮助您选择合适的数据源进行大屏项目的开发。")章节。  

**说明** 如果您使用的是API数据源，还可以根据需要，进行跨域数据配置以及获取用户cookie，详情请参见[跨域数据配置](/zh/datav/datav-6-0/user-guide/how-to-configure-cross-domain-data#concept-k5l-ckz-q2b "当您在DataV中使用API数据源时，可能会遇到跨域的问题。本文档为您介绍跨域问题的产生背景，并提供几种解决跨域问题的方法供您参考。")和[使用cookie实现可视化应用数据隔离](/zh/datav/datav-6-0/user-guide/how-to-use-cookies-to-achieve-visual-application-data-isolation#concept-2379937 "当您在DataV中使用API数据源时，可以使用cookie，实现不同的用户登录系统时，只能看到自己的数据，保证可视化应用数据的安全性。")。
2. 在编辑框中，修改数据源脚本。  
单击数据源脚本编辑框右下角的![全屏](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5429559951/p132694.png)图标，全屏编辑数据源；单击![复制](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5429559951/p132696.png)图标，复制数据源脚本。
3. 配置完成后，可单击预览数据源返回结果，查看数据响应结果。  
![编辑数据源](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5306073061/p54865.png)

## 配置数据过滤器

通过数据过滤器，您可以实现数据结构转换、筛选和一些简单的计算功能。

1. 在设置数据源页面中，选中数据过滤器，启用数据过滤器功能。  
![配置数据过滤器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7749822951/p54866.png)
2. 单击右侧的+，添加一个数据过滤器。
3. 在过滤器代码编辑框中，输入当前资产数据的过滤代码。
4. 单击测试，查看数据过滤效果。  
数据过滤器详情请参见[数据过滤器使用说明](/zh/datav/datav-6-0/user-guide/use-the-data-filter#task-1322674 "您可以使用数据过滤器，自定义数据过滤代码，实现数据结构转换、数据筛选展示和一些简单的计算。本文介绍新版DataV资产数据过滤器的使用方法。")章节。

## 查看数据响应结果字段列表

DataV资产的数据响应结果一般为列表形式。数据响应结果列表中展示了资产的字段、映射以及对字段的说明，只可查看不可编辑。![数据响应结果字段列表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4429559951/p54867.png)

## 查看数据响应结果

在设置数据源页面的数据响应结果区域，可实时查看数据响应结果。 

数据响应结果实时展示了资产所使用的数据。当资产数据源发生变化时，数据响应结果会对应展示最新的数据。如果系统反应延迟，您可以单击右侧的![刷新](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4429559951/p132699.png)图标，获取资产的最新数据。 

可单击数据框右下角的![全屏](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5429559951/p132694.png)图标，全屏查看数据响应结果；单击![复制](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5429559951/p132696.png)图标，复制数据响应结果。![数据响应结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5429559951/p54868.png)