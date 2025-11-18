  为BI分析组件配置数据集并创建气泡图-DataV数据可视化-阿里云

本文以创建气泡图为例，按步骤介绍搭建一个BI分析组件并使用数据集字段数据的方法。

## 前提条件

数据集管理面板中已添加所需数据集内容，详情请参见[添加数据集](https://help.aliyun.com/document_detail/215456.html#task-2060897 "本文为您介绍如何在DataV中创建一个完整数据集。")。

## 背景信息

数据集仅可在BI分析组件中使用。

## 步骤一：添加气泡图

1.  登录[DataV控制台](https://datav.aliyun.com/)。
2.  在我的可视化页面，单击您创建的可视化应用项目上方的编辑按钮。
3.  在画布编辑器页面，单击左上角的资产列表图标，展开全部资产区域模块。
    
    在全部资产区域中，单击左侧导航栏内的BI分析。![选择气泡图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0498737261/p286500.png)
    
4.  在BI分析模块列表页面中，单击气泡图组件。

## 步骤二：选择数据集并添加字段

1.  在弹出的更改数据集对话框中，选择一个数据集。
    
    单击数据集右上角的![编辑图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6633307261/p261820.jpg)图标，即可查看并修改当前数据集的内容，详情请参见[编辑数据集](https://help.aliyun.com/document_detail/215457.html#task-2061309 "本文为您介绍在DataV中数据集管理面板内如何编辑已创建的数据集。")。
    
2.  **可选：**您也可以单击更改数据集对话框内的+创建数据集或右上角的管理进入数据集管理页面。自定义新建一个数据集后，再选择新创建后的数据集，具体创建数据集的方法请参见[添加数据集](https://help.aliyun.com/document_detail/215456.html#task-2060897 "本文为您介绍如何在DataV中创建一个完整数据集。")。
    
    ![创建数据集](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6633307261/p297194.png)
    
    组件成功创建后，画布右侧的面板会变成分析模式配置面板。![气泡图分析模式面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8090447261/p286515.jpg)
    
3.  在BI分析模式下的气泡图组件数据面板中，将左侧示例数据集中的发货日期和数量字段，拖拽至右侧图表配置的x和y字段映射虚线框处。
    
    ![添加字段](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8090447261/p270006.png)
    
    字段添加后，字段映射的数据就会自动显示到画布的气泡图组件中。
    

## 步骤三：调整字段配置

1.  单击图表配置区域中x字段映射区域内发货日期右侧的![列表缩略图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8090447261/p270117.jpg)图标。
2.  单击列表下方的粒度（年-月-日）下拉列表，选择年-月-日。
    
    ![选择字段粒度属性](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9090447261/p270133.png)
    
3.  调整发货日期的排序样式 升序。
    
    ![排序选择](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9090447261/p270135.png)
    
4.  单击图表配置区域中y字段映射区域内数量右侧的![列表缩略图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8090447261/p270117.jpg)图标。
5.  设置数量字段的聚合方式，选择计数的聚合方式。
    
    ![选择计数方式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9090447261/p270140.png)
    
    数据字段样式配置完后，画布中组件的结果示例如下：![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9090447261/p270142.jpg)
    

## 步骤四：添加视觉映射通道

1.  在气泡图组件数据面板中，将左侧示例数据集中的销售额、利润和类别字段，分别拖拽至右侧图表配置中对应的大小映射、颜色映射和形状映射字段映射虚线框处。
    
    ![拖动字段到映射字段中](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9090447261/p286582.png)
    
2.  单击大小映射右侧的![配置映射图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9090447261/p270231.jpg)图标，在气泡尺寸映射对话框中，您可以调整气泡尺寸的范围，如下图所示设置数据映射最小值为0；设置映射数据最大值为50。
    
    ![设置气泡映射范围](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9090447261/p270238.png)
    
    **说明** 大小映射具体使用说明请参见[尺寸映射器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/instructions-of-dimension-mapper#concept-2067399 "尺寸映射器用于调整图元尺寸大小，通过使用范围滑块决定图元尺寸范围，本文以配置基础平面地图-抢鲜版组件中的散点半径为例，为您介绍如何自定义数据值和尺寸的映射关系。")。
    
3.  单击颜色映射右侧的![配置映射图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9090447261/p270231.jpg)图标，在气泡颜色映射对话框中，您可以设置映射的类型为数值连续，在颜色模板中选择红蓝双向色板。如下图所示。
    
    图 1. 配置气泡颜色映射1
    
    ![配置气泡颜色映射1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9090447261/p270239.png)
    
    图 2. 配置气泡颜色映射2
    
    ![配置颜色映射2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9090447261/p270240.png)
    
    **说明** 颜色映射具体使用说明请参见[颜色映射器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/color-mapper-instructions#concept-2067387 "颜色映射器适用于设置组件内各种颜色和数据数值之间的映射配置样式，内置十余种颜色模板，同时支持自定义颜色和颜色的对应值，以满足用户不同的定制需求。本文以配置基础平面地图-抢鲜版组件中矢量散点层子组件的散点颜色为例，为您介绍如何使用颜色映射器实现数据与颜色之间的映射匹配。")。
    
4.  单击形状映射右侧的![配置映射图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9090447261/p270231.jpg)图标，在气泡形状映射对话框中，您可以调整所用气泡形状的个数和样式。如下图所示可将三角形改为菱形或六边形等。
    
    ![改动气泡形状](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0190447261/p270243.png)
    
    **说明** 形状映射具体使用说明请参见[形状映射器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/instructions-of-shape-mapper#concept-2067398 "形状映射器用于映射组件中数据值和图形之间的内容映射，图形包括矢量和图标两种。本文以配置基础平面地图-抢鲜版组件中的矢量散点层内的散点形状为例，为您介绍如何使用形状映射器实现数据与图形之间的映射匹配。")。
    
    配置结果示例：![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0190447261/p270244.jpg)
    

## 步骤五：添加筛选器

1.  在气泡图BI分析模式数据面板右下方的筛选器区域中，单击设置筛选器按键，打开筛选器设置面板。
    
    ![打开筛选器面板入口](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0190447261/p270252.png)
    
2.  在筛选器设置面板中，单击面板中筛选器系列右侧的![新增筛选器条件系列](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0190447261/p270254.jpg)图标，新增一个筛选器系列，在当前筛选器系列中设置筛选条件为：地区等于华东。
3.  您还可以双击当前筛选器系列内的条件名称处，自定义设置筛选器的名称。
    
    ![设置筛选器条件样例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0190447261/p270256.png)
    
    **说明** 筛选器具体使用说明请参见[条件树使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/instructions-of-conditional-tree#task-2099938 "条件树用于指定特定逻辑判断，用于组件进行条件样式修改或者设置筛选器样式。本文介绍条件树的具体使用方法。")。
    
    筛选器条件配置结果示例：![添加赛选条件后的结果示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0190447261/p270257.jpg)
    

## 步骤六：添加条件样式

1.  在气泡图BI分析模式数据面板右下方的数据条件系列区域中，单击设置数据条件系列，打开数据条件系列设置面板。
    
    ![数据条件设置入口](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0190447261/p270258.png)
    
2.  在数据条件系列设置面板中，单击面板中默认自带条件样式1内的![眼睛开关](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0190447261/p270259.jpg)图标，打开当前自带条件的样式面板。
3.  在当前条件内中设置组件的条件逻辑为：Y大于200。
    
    ![设置数据条件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0190447261/p270261.png)
    
4.  您可以对满足当前Y大于200条件下的气泡点数据，配置细节样式。打开面板下方的所需配置样式的![眼睛开关](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0190447261/p270259.jpg)开关图标，即可开启气泡点的配置样式功能。例如您可以设置成如下图所示的将气泡点描边调整为黄色，且气泡线条为10px的粗细。
    
    ![](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0190447261/p270274.png)
    
    **说明** 数据条件系列具体使用说明请参见[条件树使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/instructions-of-conditional-tree#task-2099938 "条件树用于指定特定逻辑判断，用于组件进行条件样式修改或者设置筛选器样式。本文介绍条件树的具体使用方法。")。
    
    条件配置结果示例：![设置样式及条件示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0190447261/p270275.jpg)