<!DOCTYPE html> 

本文介绍添加数据源后，如何执行数据源的列表查看、搜索、筛选、编辑、删除等管理操作。

## **前提条件**

已[添加数据源](/zh/datav/datav-7-0/user-guide/add-a-data-source/)。

## **进入数据源管理页面**

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在左侧导航栏单击**数据准备** \> **数据源**，进入数据源管理页面。

## **管理数据源**

在数据源管理页面，您可查看已添加的数据源列表，或执行数据源的搜索、筛选、编辑、删除等管理操作。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5153893371/p886161.png)

### **全局数据源管理**

添加的数据源会按照类型分别放至数据库、其他、应用网关、文件等页签，平台支持以页签为单位（即相关操作的结果会展示在相应页签下），执行如下全局操作：

* 查看数据源：可查看当前已添加的数据源名称、类型、创建时间等基本信息。
* 数据源排序：单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5153893371/p886152.png)图标，可按照名称、修改时间、创建时间进行数据源排序。默认按照修改时间倒序排序。
* 筛选数据源：单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5153893371/p886153.png)图标，可按照类型筛选数据源。默认展示所有类型的数据源；下拉列表仅可选择已添加的数据源类型。
* 搜索数据源：单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5153893371/p886178.png)图标，可按照名称搜索目标数据源，搜索支持模糊匹配。

### **单个数据源管理**

鼠标悬停至目标数据源，可按需执行如下操作：

* 重命名数据源：单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5153893371/p886183.png)图标，可更改当前数据源的名称。
* 编辑数据源：单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5153893371/p886184.png)图标，可修改数据源的配置信息。

**说明**  
不同数据源的配置存在差异，具体请以实际界面为准。
* 删除数据源：单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5153893371/p886194.png)图标，可删除当前数据源。

**重要**  
若数据源已被组件引用，则删除数据源后相应组件会报错。数据源删除后无法恢复，请谨慎操作。