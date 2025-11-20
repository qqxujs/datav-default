# 配置DataV数据源 %{#92041}% 

本文档为您介绍在DataV中使用RDS MySQL数据源的方法。

## 操作步骤

1. 登录[Datav控制台](https://datav.aliyun.com/)。
2. 选择我的数据 \> 添加数据。
3. 填写您已经创建完成的数据库的相关信息，单击确定。  
![创建数据源](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9312440561/p431886.png)

**说明**  
  * 进入[云数据库RDS控制台](https://rdsnext.console.aliyun.com)，单击RDS MySQL实例链接，进入实例的基本信息页面，获取以上信息。
  * 如果您的网络类型为内网，则对应的域名为RDS MySQL实例的内网地址。
  * 如果您的网络类型为外网，则对应的域名为RDS MySQL实例的外网地址。
4. 单击我的可视化 \> 新建可视化，选择云资源监控模板，单击创建。
5. 在创建数据大屏弹出框中，输入数据大屏名称，单击创建。
6. 配置组件样式。  
![配置轮播列表组件样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5917574751/p12667.png)

  1. 选择运行耗时最长任务下的轮播列表组件，单击画布右侧的配置图标（![配置按钮样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5917574751/p14282.png)）。
  2. 在组件配置页面，单击自定义列。
  3. 单击标签1，设置列字段名为c1，列显示名为content。
  4. 单击标签2，设置列字段名为c2，列显示名为age。
7. 配置组件数据。
  1. 单击画布右侧的数据图标（![数据按键样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6917574751/p14283.png)）。
  2. 在组件的数据配置面板中，单击配置数据源。
  3. 在设置数据源页面中，选择数据源类型为数据库，已有数据源为您前面步骤中创建的数据源。  
  ![添加数据库数据源](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6917574751/p12650.png)
  4. 在SQL输入区域输入以下SQL语句。  
  ```  
  SELECT c1,c2 FROM mytable  
  ```
  5. 单击预览数据源返回结果，查看数据源返回结果。  
  ![查看响应结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6917574751/p12668.png)  
最终组件显示效果如下图所示。  
![显示效果图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6917574751/p12669.png)