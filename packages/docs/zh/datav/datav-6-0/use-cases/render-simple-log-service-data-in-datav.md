  使用DataV可视化日志服务数据实现实时监控-DataV数据可视化-阿里云

本文档为您介绍如何使用DataV完成日志服务数据的展示，实现实时业务监控。

## 概述

本案例的整体步骤如下。

1.  [准备工作](#section-pfg-8qe-bpo)。
2.  [配置日志服务](#section-u2j-mde-sme)。
3.  [配置DataV](#section-exc-tcs-86b)。

## 准备工作

完成[为Kubernetes和日志服务配置Log4JAppender](https://help.aliyun.com/zh/ack/ack-managed-and-ack-dedicated/user-guide/configure-log4jappender-for-kubernetes-and-log-service#concept-eky-j3b-wdb)中的步骤，并且服务运行正常。

## 配置日志服务

1.  登录[日志服务控制台](https://sls.console.aliyun.com/lognext/open)。
2.  在Project列表区域，单击目标Project。
3.  在**日志存储** > **日志库**页签中，单击目标Logstore。
4.  进入索引配置页面，为所有必填字段创建索引。
    
    -   如果您还未开启索引，请在Logstore的查询和分析页面，单击**开启索引**。![开启索引](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8144108461/p421742.png)
    -   如果您已开启索引，请在Logstore的查询和分析页面，选择**查询分析属性** > **属性** 。![查询分析页面](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8144108461/p421743.png)
    
5.  在**查询分析**页面，配置参数，然后单击**确定**验证数据。

## 配置DataV

1.  登录[DataV控制台](https://datav.aliyun.com/)。
2.  在**我的可视化**页面中，单击**PC端创建**。
    
3.  选择空白画布模板，并单击**创建项目**。
    
4.  在**创建数据大屏**对话框中，输入大屏名称，单击**创建**。
5.  在画布中添加一个**基本折线图**组件。
    
    ![画布添加组件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0431839061/p8045.png)
    
    该组件默认显示静态数据集。![组件静态数据显示的内容](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0431839061/p8046.png)
    
6.  单击该组件，在右侧的**数据**面板中，单击**配置数据源**。
7.  在**设置数据源**页面中，选择**数据源类型**为**简单日志服务 SLS**。
    
    ![添加简单日志服务数据源](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0431839061/p8047.png)
    
8.  单击**新建**，在**添加数据**对话框中，填入数据源相关信息，单击**确定**。
    
    ![添加数据源数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0431839061/p51174.png)
    
    **参数**
    
    **说明**
    
    **自定义数据源名称**
    
    数据源的显示名称，您可以自由命名。
    
    **AppKey**
    
    拥有目标SLS访问权限的账号的AccessKey ID。
    
    **AppSecret**
    
    拥有目标SLS访问权限的账号的AccessKey Secret。
    
    **EndPoint**
    
    填写SLS服务的EndPoint。请参见[日志服务入口文档](https://help.aliyun.com/zh/sls/endpoints#reference-wgx-pwq-zdb)，根据您SLS服务的网络类型和所在区域进行填写。
    
    例如VPC网络下，上海区域的**EndPoint** 填写为**https://cn-shanghai-intranet.log.aliyuncs.com**。
    
9.  选择添加完成的数据源，并在数据查询框中输入如下示例脚本进行查询。
    
    ```
    {
    "projectName": "k8s-logs",
    "logStoreName": "k8s-logstore",
    "topic": "",
    "from": "1518883200",
    "to": "1518969600",
    "query": "* | select count(1) as pv, date_format(from_unixtime(__time__ - __time__%3600) ,'%Y/%m/%d %H:%i:%s')   as time group by time  order by time limit 1000" ,
    "line": 100,
    "offset": 0
    }
    ```
    
    **说明** `from`和`to`是时间戳，可以用来检查**查询**中的原始数据。
    
10.  单击**预览数据源返回结果**，查看数据返回结果。
11.  选中**数据过滤器**，单击**+**添加过滤器，确保`pv`为整数，单击**保存**。
     
     ```
     return Object.keys(data).map((key) => {
      let d= data[key];
      d["pv"] = parseInt(d["pv"]);
      return d;
     }
     )
     ```
     
     ![添加过滤器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9924386851/p8050.png)
     
12.  设置坐标轴并验证是否正确。
     
     ![设置坐标轴并验证](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9924386851/p8052.png)
     
13.  单击**预览**。
     
     您可以看到x和y使用正确的数据类型，并且pv为整数。![预览数据图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9924386851/p8054.png)
     
14.  单击界面右上角的**发布**，发布该应用项目，使得您可以公开访问该可视化应用。

## 查看结果

本案例的发布结果如下图所示。![查看结果视图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9924386851/p8057.png)

您已在阿里云上成功配置DataV和Log Service，并使用Log Service通过自定义DataV可视化应用实现了实时监控。

## 参考文档

有关日志服务和容器服务的更多信息，请参见：

-   [日志服务](https://www.aliyun.com/product/sls)
-   [容器服务](https://www.aliyun.com/product/containerservice)