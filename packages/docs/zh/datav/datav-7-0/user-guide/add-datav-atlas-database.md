<!DOCTYPE html> 

在DataV-Board（数据看板）中使用DataV Atlas地理数据服务之前，需要先将DataV Atlas地理数据服务添加为DataV-Board的数据源。本文为您介绍如何添加DataV Atlas地理数据服务。

## **适用场景**

通过DataV Atlas地理数据服务通过在各种业务场景下使用地理数据，帮助用户提升效率和决策能力。

* **海量数据实时交互**：支持数据瓦片按需加载，实时渲染可交互，解决展示海量地理数据时的性能和效率问题。
* **数据安全**：支持二进制编码数据返回，提供访问控制和管理功能，防止未经授权的访问。
* **实时数据更新与分析**：支持快速更新和复杂空间分析，满足实时展示和分析动态信息的需求。
* **多源数据整合**：支持快速集成不同格式的地理数据（CSV、TSV、GeoJSON、SHP），提升数据管理能力。

## 前提条件

* [开通DataV Atlas服务](/zh/datav/datav-atlas/getting-started/activate-and-purchase-datav-atlas)。
* DataV Atlas产品中创建项目、发布数据服务并添加数据服务令牌，请参见[创建及管理项目](/zh/datav/datav-atlas/user-guide/manage-projects-1)、[数据服务管理](/zh/datav/datav-atlas/user-guide/data-service-management)、[数据服务令牌管理](/zh/datav/datav-atlas/user-guide/data-service-token-management)。

## **使用限制**

* **版本限制**：DataV Atlas地理数据服务功能仅支持 DataV-Board 企业版及以上版本使用。更多版本信息，请参见[规格说明](/zh/datav/datav-7-0/product-overview/datav-editions#DAS)。
* **图层限制**：DataV Atlas地理数据服务仅支持在基础平面地图4.0子组件中使用，包括点热力层、轨迹线层、符号聚合层、矢量散点层、帧动画层、图标散点层、信息标签层、等值面层、呼吸气泡层、飞线层、格网聚合层、基础多边形层、基础散点层。

## 添加DataV Atlas数据服务

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面，单击**数据准备** \> **数据源** \> **新建数据源**。
3. 从**类型**列表中，选择**DataV Atlas地理数据服务**。
4. 填写数据源配置信息。

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **自定义数据源名称**    |    自定义的数据源名称。    |
|    **服务地址**    |    DataV Atlas提供的服务地址和数据服务访问令牌。您可登录[DataV Atlas控制台](https://atlas.datav.aliyun.com/)，在**开放中心** \> **数据服务** \> **数据服务令牌**中获取服务地址和访问令牌。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3769394371/p886860.png)    |
|    **访问令牌**    |    |
5. 配置信息填写完成后，单击**确定**，完成数据源的添加。新添加的数据源会自动显示在数据源列表中。

## 使用DataV Atlas数据服务

下面将使用基础平面地图4.0中的矢量散点层子组件演示配置和使用DataV Atlas地理数据服务。

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面中，将鼠标移动至需要编辑的数据看板上，单击**编辑**。

**说明**  
如果您的**工作台**页面内还没有创建任何数据看板，请参见[使用模板创建PC端看板](/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)，创建一个数据看板。
3. 在画布中添加基础平面地图4.0组件并添加矢量散点层子组件。添加组件操作请参见[组件画布操作](/zh/datav/datav-7-0/user-guide/widget-operations-in-a-canvas#title-1c7-abe-n0m)。
4. 单击选中矢量散点层，在画布右侧的组件配置面板中选择**数据源**，配置数据源连接信息。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3769394371/p892283.png)

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **数据源类型**    |    选择DataV Atlas地理数据服务。    |
|    **选择已有数据源**    |    选择已经创建的DataV Atlas地理数据服务，单击**创建**可以[创建数据源](#step-a2u-zlg-ewm)。    |
|    **选择API**    |    下拉选择已授权给服务令牌的数据服务。**重要** 数据服务必须在DataV Atlas中处于在线状态才能被选择。    |
|    **要素ID字段**    |    配置该项作为地理要素唯一标识，以保证跨瓦片交互选中正常运行。    |
|    **数据映射**    |    选择要可视化的数据字段，字段列表是在DataV Atlas中发布数据服务时勾选的统计字段。    |
5. 进入**样式** \> **图形**页，对配置的映射字段开启视觉映射。颜色映射选择的是数值字段，需要选择数值连续或数值分区类型；形状映射选择的是文本字段，需要选择名词分类。数据映射相关配置，请参见[数据视觉映射](/zh/datav/datav-6-0/user-guide/visual-mapping-of-data-of-datav-6/#DAS)。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3769394371/p891302.png)

如果您在使用DataV-Board产品时有任何疑惑或建议，请及时[联系我们](/zh/datav/datav-7-0/support/contact-us-for-datav-7)。