<!DOCTYPE html> 

颜色映射器适用于设置组件内各种颜色和数据数值之间的映射配置样式，内置十余种颜色模板，同时支持自定义颜色和颜色的对应值，以满足用户不同的定制需求。本文以配置**基础平面地图 3.0**组件中**矢量散点层**子组件的散点颜色为例，为您介绍如何使用颜色映射器实现数据与颜色之间的映射匹配。

## 配置颜色映射

配置地图子组件内散点颜色时，您可以通过以下两种颜色配置方法调整散点的颜色。

* 方法一：单击关闭**散点颜色**配置项左侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4379980761/p521846.png)图标，在鼠标悬浮态提示**开启视觉映射**时，使用[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)，无需数据驱动，单纯的自定义样式配置，进行单个颜色调整，可以配置成单色或渐变色。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4379980761/p521845.png)
* 方法二：单击打开**散点颜色**配置项左侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4379980761/p521848.png)图标，在鼠标悬浮态提示**关闭视觉映射**时，使用颜色映射器，由散点的数据驱动映射，可对散点颜色进行多选配置。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4379980761/p521850.png)

## **颜色映射器功能说明**

|    **功能**    |    **说明**    |
|    ----    |    ----    |
|    面板折叠时切换配置颜色映射    |    在颜色映射器折叠状态时，单击颜色显示条，打开多色颜色模板。首行显示当前映射的颜色结果，下方显示多个可供您选择的颜色模板。单击模板内颜色条，即可快速切换配置映射颜色。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4379980761/p521856.png)    |
|    面板展开配置映射细节    |    在颜色映射器展开状态时，系统自动读取数据，进行颜色和数据的映射匹配，您可进行如下映射细节的配置。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4379980761/p521857.png)**映射类型**：颜色的映射类型，可选**名词分类**、**数值连续**和**数值分区**。详情请参见[颜色映射分类](#section-b7c-hhf-ahj)。**颜色模板**：单击颜色模板条，打开多色颜色模板，即可快速切换配置数据映射颜色。选中一个颜色模板后，您可以在下方颜色映射列表内，单击某个颜色，使用[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)，修改颜色或直接自定义输入色值修改颜色。**说明** 单击模板中某个颜色右侧的![钉住图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4553257261/p260511.jpg)图标，即可钉住当前选中颜色的色值，使得该颜色不会随着模板切换而更改。未钉住的单个颜色会随着模板切换而更改。![钉住状态](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6763257261/p260521.jpg)**数量**：您可以自定义设置颜色模板中的整体颜色的阶数数量。**反序**：单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4379980761/p521858.png)图标，即可倒序排列颜色映射列表。**异常值条目映射**：单击颜色模块，用于定义undefined、null、NaN等异常值的映射状态。详情请参见[颜色映射分类](#section-b7c-hhf-ahj)。![其他值颜色映射](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6763257261/p260539.png)**自定义映射**：打开开关，您可以自定义修改数据和颜色的映射匹配，设置映射颜色的样式，用于满足您的定制需求。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4379980761/p533822.png)**删除整行映射条目**：单击某一行映射条目左侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4379980761/p533824.png)图标，即可删除整行映射颜色条目。**设置映射字段**：您可以在某一行映射条目右侧的输入框，自定义输入与该颜色对应的数据字段值。根据颜色的**映射类型**不同，您需要输入不同的文本或数值类型的数据字段值内容。**添加映射条目**：单击颜色映射列表下方的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4379980761/p521860.png)图标，即可添加一行颜色映射条目。    |

**说明** 

颜色映射器中内置了十余种丰富多彩的颜色模板，同时还支持自定义颜色和颜色的对应值，用于满足您不同的定制需求。

## 颜色映射分类

颜色映射类型分为三大类：**名词分类**型、**数值连续**型和**数值分区**型。

|    **类型**    |    **说明**    |
|    ----    |    ----    |
|    **名词分类**    |    适用于需要给名称和类别等分类型的数据，提供颜色上的区分。色板上各个颜色之间互相区分度较大。**名词分类颜色模板样式**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4379980761/p533826.png) **名词分类型数据示例图**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4379980761/p533834.png)    |
|    **数值连续**    |    适用于给数值型数据分配连续渐变颜色的情况，且数值和颜色在映射空间内为一一对应的关系。 **数值连续颜色模板样式**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4379980761/p533827.png) **数值连续型数据示例图**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4379980761/p533835.png)    |
|    **数值分区**    |    适用于在数值连续型映射的基础上，对连续的数值进行分区，将同一数值区间内的数据归为一类，并将此区间内的数据填充相同颜色的情况。使用数值分区型映射，可以减少颜色数量，避免视觉混乱。 **数值分区颜色模板样式**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4379980761/p533829.png) **数值分区型数据示例图**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4379980761/p533837.png)    |