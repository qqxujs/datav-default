<!DOCTYPE html> 

本文为您介绍在DataV快乐转转转模板可视化应用中修改转盘抽奖内具体奖品数据的方法。

## 前提条件

已完成可视化应用的创建，详情请参见[创建模板可视化应用](https://help.aliyun.com/zh/datav/datav-6-0/getting-started/create-happy-rotation-template-applications#task-2041978 "本文为您介绍使用快乐转转转模板创建可视化应用的方法。")。 

## 操作步骤

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在我的可视化页面内，单击快乐转转转可视化应用，进入画布编辑器内。
3. 单击画布中转盘抽奖组件，在画布右侧配置面板的数据面板中，单击配置数据源。  
![配置组件数据源入口](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3625862161/p238866.png)
4. 在设置数据源面板中，选中静态数据数据源，并在下方的数据配置区域内，按照您团队所需的奖品内容，自定义修改模板中已有的数据，或直接粘贴准备好的JSON格式的数据。  
![修改数据内容](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3625862161/p238868.png)

**注意** 当前抽奖模板不需要使用奖品图片的imgSrc字段数据。如果您需要在转盘上显示每种奖品的图片，可以在imgSrc字段的数据栏内配置奖品的图片的URL地址，并且在组件的配置面板内，打开转盘 \> 奖品图片是否显示的开关。  
![打开显示奖品图片开关](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3625862161/p238874.png)
5. 数据配置完成后，您可以在设置数据源页面单击数据响应结果的![刷新](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8092333951/p95948.png)图标刷新数据响应结果。  
数据响应成功后，在数据页签会显示配置完成。![配置完成样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4625862161/p238885.png)