<!DOCTYPE html> 

DataV 数据集功能提供统一的数据源接入和管理平台。本文将详细介绍其使用说明和管理操作。

## **背景信息**

### **数据集介绍**

DataV数据集是基于原始数据源创建的、经过结构化处理的可视化数据集合。支持接入多种数据源，包括数据库、Excel表格文件等，并提供数据结构化存储及元数据统一管理功能，确保数据的高效组织和访问。

### **应用场景**

数据集深度应用于企业数据可视化分析领域，涵盖实时业务监控、经营分析看板及智能决策支持等核心场景，为用户提供灵活、自动化的数据处理能力，实现高效的数据洞察与可视化呈现。

## **准备工作**

### **前提条件**

已准备好待添加的[数据源](#30dea4c7f3tat)或本地数据集文件（.xls/.xlsx）。

### **进入数据集管理**

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**功能导航**模块单击**数据集**，进入数据集管理页面。

## **新建数据集**

1. 在数据集管理页面中，单击**新建数据集**，进入创建页面。
2. 在**创建数据集**页面内，输入**数据集名称**信息，选择一种创建方式，可选**数据源导入**或**本地上传**。

  * **数据源导入**：选择**数据源导入**创建方式，可快速导入已添加完成的[适配数据源](#30dea4c7f3tat)中的数据表内容。![{E5A92713-79FF-4B48-A529-796E034E3AA2}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5589954471/p939121.png)
  * **本地上传**：选择**本地上传**创建方式，可将本地Excel表格中的数据上传至数据集。

**说明**  
  本地上传**.xls**或**.xlsx**两种格式的Excel表格文件。
3. 单击**导入数据表**，在导入数据表页面中，您可以浏览所有数据表的基本信息。通过左侧搜索框列表的滚动条选择目标数据表，或直接在搜索框中输入数据表名称并单击![搜索图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5853896161/p254078.jpg)图标进行快速定位。![{F9031AFD-B566-42FA-BE03-9B698BBD4E41}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5589954471/p939162.png)
4. 选择数据表后，单击右侧表格数据展示区域的表头行图标，即可修改对应字段类型；双击表头行内的字段名，可对该字段重命名。
5. 数据表编辑完成后，单击页面右下角的**创建**即可保存当前数据集。  
创建并保存完成后的数据集会自动排列显示在**数据集管理**页面中，每一个保存的数据集后面都会自动显示数据集内的数据信息数量。

## **管理数据集**

数据集管理提供统一的数据源接入和管理平台，支持数据集的编辑和删除等操作，帮助用户高效管理和组织数据。

### **添加适配数据源**

在使用数据集前需要先添加支持的数据源内容，下文介绍添加适配数据源的方法。如果通过上传本地数据源文件方式创建数据集请跳过本章节。

1. 在数据源管理页面中，单击**添加数据**。
2. 在弹出的添加**数据对话框**中，选择需要添加的数据源类型，支持添加[RDS for PostgreSQL数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-an-apsaradb-rds-for-postgresql-data-source)、[RDS for MySQL数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-an-apsaradb-rds-for-mysql-data-source)、[兼容MySQL数据库的数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-a-mysql-compatible-data-source)、[实时数仓Hologres数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-a-hologres-data-source)、[AnalyticDB for MySQL数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-an-analyticdb-for-mysql-data-source)。

### **操作数据集**

在数据集管理页面右上角可以做以下操作。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5472082761/p522267.png)

* **排序数据集：**单击修改时间，可以按**名称**、**修改时间**和**创建时间**对当前数据集进行排序。
* **筛选数据集：**单击筛选，可以根据需要，筛选出特定数据集。
* **搜索数据集**：输入数据集名称，快速定位所需数据集。

### **重命名数据集**

1. 在数据集管理页面中，鼠标移动到需要编辑的数据集上，单击数据集名称后的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3756871761/p522237.png)图标。
2. 修改完成后，单击`Enter`键完成确认。

**说明**  
修改数据集**描述**步骤类似，请参见重命名数据集。

### **编辑数据集**

1. 在数据集管理页面中，鼠标移动到需要编辑的数据集上，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3756871761/p522244.png)图标。
2. 单击右侧表格数据展示区域的表头行图标，即可修改对应字段类型；双击表头行内的字段名，可对该字段重命名。不同的数据集编辑的参数字段不同。![{B495A8F2-F891-4A83-B959-49E0E593C121}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5589954471/p939176.png)
3. 修改完成后，单击**更新**。

### **删除数据集**

1. 在数据集管理页面中，鼠标移动到需要编辑的数据集上，单击数据集名称后的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3756871761/p522247.png)图标。
2. 在弹出的确认删除对话框中，单击右下角的**确认**即可删除当前选中的数据集；单击**取消**即可取消删除该数据集。

**重要**  
数据集删除后无法恢复，请谨慎操作。