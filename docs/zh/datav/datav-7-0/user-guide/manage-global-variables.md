<!DOCTYPE html> 

全局变量可以理解为参数变量，用于控制组件之间参数的传递，从而达到交互的目的。例如图表联动、自定义字段等功能。

## **前提条件**

* 登录[DataV控制台](https://datav.aliyun.com/)。
* 已进入画布编辑器页面。

## **新建变量**

1. 在**画布编辑器**中，单击左侧导航栏的**全局变量**，进入全局变量页面。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0169649761/p607705.png)
2. 单击**新建变量**，根据如下字段，配置变量说明。

|    **参数**    |    **说明**    |    **示例**    |
|    ----    |    ----    |    ----    |
|    **变量名**    |    全局变量的名称。    |    var\_ht15m    |
|    **描述**    |    全局变量的描述信息。    |    测试数据    |
|    **来源**    |    全局变量的来源，包括**静态值**、**数据源请求**和**从 url 查询条件获取**。**说明** 不同来源类型使用方式，请参见[使用全局变量](/zh/datav/datav-7-0/user-guide/use-global-variables)。    |    静态值    |
|    **初始值**    |    全局变量选择变量类型时的默认值。    |    "datav"    |
|    **过滤器**    |    可选，通过添加数据过滤器进一步筛选所需数据。详情请参见[使用数据过滤器](/zh/datav/datav-7-0/user-guide/filter-configuration-and-application)。    |    /    |
|    **数据响应结果**    |    在全局变量的参数设置完成后，系统的响应结果，不同的变量类型响应结果不同。    |    "datav"    |
|    **受控模式**    |    开启后，初始值无效。    |    /    |
|    **自动更新**    |    开启后，可设置动态轮询，还可以手动输入轮询的时间频次。    |    /    |
3. 待参数配置完成后，单击**Enter**即可。

## **管理变量**

* 单击变量右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8212919661/p520591.png)图标，可以对变量进行重命名操作。
* 单击变量右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8212919661/p520593.png)图标，可以对变量进行复制操作。
* 单击变量右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7212919661/p520594.png)图标，可以对变量进行删除操作。

**重要**  
  * 删除变量无法恢复，请谨慎操作。
  * 删除变量前，需要取消引用当前变量，详情请参见[组件交互配置](/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)。

## **编辑变量**

编辑全局变量的步骤与新建变量类似，具体操作请参见[新建变量](#2785682165s7u)。