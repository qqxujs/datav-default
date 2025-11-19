<!DOCTYPE html> 

数据管理功能，以数据源维度展示了数据看板中所有组件使用的数据源合集，您可在该界面查看/编辑数据源配置，或批量替换目标组件所使用的数据源类型。批量替换数据源时，仅会更改数据来源（例如，由Hologres更改为RDS for MySQL），数据源已配置的过滤器、数据映射等功能会延用至新的数据中。

## **前提条件**

* 已将所需数据添加为DataV-Board 7.0的数据源，详情请参见[数据源分类](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/data-source-categories)。
* 已创建数据看板并添加相应组件。详情请参见[使用模板创建PC端看板](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)、[配置组件](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items)。

## **进入数据管理**

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**全部应用** \> **数据看板**区域，鼠标悬停至已创建的目标看板，单击**编辑**，进入看板编辑界面。
3. 在左侧导航栏单击**数据管理**，进入数据管理界面。  
在该页面，您可查看当前看板所使用的数据源概况，也可按需配置数据源信息，详情请参见[查看及配置数据源](#046c62aff1sve)。

## **查看及配置数据源**

### **查看数据源**

在数据管理界面，您可查看当前数据看板所使用的所有数据源类型、数量，以及使用该数据源的组件。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5343893371/p886951.png)图标，可通过数据源的配置信息或内容（例如，数据源名称、SQL语句、CSV文件内容，静态数据内容等）搜索目标数据源，搜索支持模糊匹配。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9067047271/p853254.png)

### **配置数据源**

您可按需配置单个数据源信息，也可批量更改数据源信息。

* **配置单个数据源**  
单击目标数据源类型下的组件，即可在右侧**数据源**页签按需配置数据源的数据类型、过滤器、数据映射等信息，详情请参见[组件数据源配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-data-source-configuration)。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9067047271/p853236.png)
* **批量修改数据源**  
通常，如需统一多个组件的数据来源（例如，将所有使用静态数据的组件，更改为使用同一个RDS for MySQL数据库数据），可通过批量操作快速实现，操作步骤如下图。

**说明**  
批量操作目前仅支持更新数据源的数据来源。数据源已配置的过滤器、数据映射等内容不变，且会延用至新的数据中。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9067047271/p853234.png)