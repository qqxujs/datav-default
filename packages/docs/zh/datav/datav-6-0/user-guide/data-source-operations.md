  管理数据源-DataV数据可视化-阿里云

本文介绍添加数据源后，如何执行数据源的列表查看、筛选、编辑、删除等管理操作。

## **前提条件**

已[添加数据源](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/add-data-sources/)。

## **进入数据源管理页面**

1.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
2.  选择**我的数据** > **数据源管理**，进入数据源管理页面。
    

## **管理数据源**

在数据源管理页面，您可查看已添加的数据源列表，或执行数据源的筛选、编辑、删除等管理操作。![{C2B30E5C-E949-4B52-9E94-AE14EE51A7AE}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9305463471/p936299.png)

### **全局数据源管理**

数据源管理页展示已添加数据源的基本信息（名称、类型、创建时间），支持以下全局操作：

-   **数据源排序**：可按照名称、修改时间、创建时间进行数据源排序。
    
-   **筛选数据源**：可按照类型筛选数据源。默认展示所有类型的数据源；下拉列表仅可选择已添加的数据源类型。
    

### **单个数据源管理**

鼠标悬停至目标数据源，可按需执行如下操作：

-   **编辑数据源**：单击![{38981B1C-0FE0-46BE-AA8C-3737DD789FBF}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9305463471/p936334.png)图标，可更改当前数据源的名称和配置信息。
    
    **说明**
    
    不同数据源的配置信息存在差异，具体请以实际界面为准。
    
-   **删除数据源**：单击![{9AD3C56B-2C5E-431C-8277-5E50BA83CDC0}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9305463471/p936335.png)图标，可删除当前数据源。
    
    **重要**
    
    若数据源已被资产引用，则删除数据源后相应资产会报错。数据源删除后无法恢复，请谨慎操作。
    

## **相关文档**

数据源配置完成后，可通过画布编辑器[配置为资产数据](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-widget-data)。