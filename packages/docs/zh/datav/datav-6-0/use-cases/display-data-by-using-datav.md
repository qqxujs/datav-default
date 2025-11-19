<!DOCTYPE html> 

通过DataV的SQL语句功能，处理数据，并将结果展示在大屏上。

1. 添加DataV数据源。  

  1. 参考[配置数据库白名单](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-a-database-whitelist-for-datav-6#concept-hcq-ymz-q2b)，根据您数据库的网络类型，将DataV的白名单添加到您的RDS数据库中。
  2. 登录[DataV控制台](https://datav.aliyun.com/)。
  3. 选择**我的数据** \> **添加数据**。
  4. 填写RDS实例的相关信息，单击**确定**。

**说明**  
    * 进入[云数据库RDS控制台](https://rdsnext.console.aliyun.com)，单击RDS MySQL实例链接，进入实例的**基本信息**页面，获取以上信息。
    * 如果您的网络类型为**内网**，则对应的**域名**为RDS MySQL实例的内网地址。
    * 如果您的网络类型为**外网**，则对应的**域名**为RDS MySQL实例的外网地址。
2. 创建大屏项目。  

  1. 选择**我的可视化** \> **新建可视化**。
  2. 选择**全球贸易**模板（本案例以此为例），单击**创建**。
  3. 在**创建数据大屏**弹出框中，输入**数据大屏名称**，单击**创建**。
3. 配置数据源。  

  1. 在大屏编辑器页面，选择**单值百分比饼图**组件（本案例以此为例），单击画布右侧的**数据**图标。
  2. 在**数据**面板中，单击**配置数据源**。
  3. 在**设置数据源**面板中，选择**数据源类型**为**数据库**，**已有数据源**为第一步中创建的数据源。
  4. 在**SQL**脚本编辑区域，输入以下SQL语句。  
  ```  
  SELECT count(*)/100 as value FROM target_table where dts_operation_flag='I'  
  ```
  5. 单击**数据响应结果**右侧的**刷新**图标。  
  数据响应成功后的结果如下。![结果显示样式 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2427574751/p13982.png)