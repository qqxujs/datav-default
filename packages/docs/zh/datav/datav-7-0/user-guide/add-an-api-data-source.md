  添加Open API数据源并应用于数据看板-DataV数据可视化-阿里云

本文为您介绍在DataV中添加Open API数据源的方法，以及相关参数配置说明。Open API是阿里云提供的云产品开放接口的调用方式，使用Open API可以方便地调用各云产品提供的API接口，轻松实现控制及查询等功能。在DataV中，最常见的场景是使用Open API调用其他的云产品的API，获取数据并展示出来。

## 前提条件

已准备好待添加的Open API数据源。

## 使用限制

仅支持DataV企业版及以上版本。

## 添加Open API数据源

1.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
2.  在**工作台**页面，单击左侧导航栏中的**数据准备** > **数据源**，进入**数据源**页面，单击**新建数据源**。
    
3.  从**类型**列表中，选择**Open API**。
    
4.  填写Open API相关信息。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0587567571/p1006296.png)
    
    **参数**
    
    **说明**
    
    **自定义数据源名称**
    
    数据源的显示名称，您可以自由命名。
    
    **EndPoint**
    
    Open API的服务地址，需要您从云产品的API文档处获取。例如ECS的Open API服务地址为`ecs.aliyuncs.com`，云监控杭州region的Open API[服务地址](https://help.aliyun.com/zh/cms/developer-reference/request-methods#concept-hzl-jz5-zdb)为`metrics.cn-hangzhou.aliyuncs.com`。
    
    **APIVersion**
    
    云产品的API版本，您可以从云产品的API文档获取，如云监控的[API版本](https://help.aliyun.com/zh/cms/developer-reference/request-methods#concept-hzl-jz5-zdb)为`2017-03-01`。
    
    **AppKey**
    
    可以调用Open API的账号的AccessKey ID。
    
    **AppSecret**
    
    可以调用Open API的账号的AccessKey Secret。
    
    **请求风格**
    
    支持选择RPC和ROA。
    
5.  信息填写完成后，单击**确定**，完成数据源的添加。
    
    新添加的数据源会自动显示在数据源列表中。
    

## 使用Open API数据源

1.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
2.  在**工作台**页面中，将鼠标移动至需要编辑的数据看板上，单击**编辑**。
    
    **重要**
    
    如果您的**工作台**页面内还没有创建任何数据看板，请参见[使用模板创建PC端看板](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)，创建一个数据看板。
    
3.  在画布编辑页面，单击画布中的某一组件。
    
    如果画布中还没有组件，请先添加组件，详情请参见[组件画布操作](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-operations-in-a-canvas#title-1c7-abe-n0m)。
    
4.  在画布右侧的组件配置面板中选择**数据源**。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0024312761/p539649.png)
    
5.  **数据源类型**选择**Open API**。
    
6.  在**选择已有数据源**列表中选择配置完成的Open API数据源。
    
7.  在下方**请求方式**下拉列表中选择一种请求方式，可选择**GET**和**POST**两种，具体这几种请求方式的解释说明，请参见[常用的请求方式](https://developer.aliyun.com/article/53549?spm=a2c6h.14164896.0.0.5d4a5100YThAJM)。
    
8.  填写**接口名称**。
    
    在编辑框中填写需要调用的接口名称，即API调用中的Action参数。取值来自云产品提供的API列表，比如云监控的`DescribeMetricList`。
    
9.  （可选）填写**返回结果路径**。
    
    取Open API返回结果的一部分作为返回结果路径。
    
    例如Open API返回：
    
    ```
    {
        "data": [
            {
                "x": 1,
                "y": 2
            },
            {
                "x": 2,
                "y": 4
            }
        ]
    }
    ```
    
    如果**返回结果路径**中填写`data`，则数据响应结果为：
    
    ```
    [
        {
            "x": 1,
            "y": 2
        },
        {
            "x": 2,
            "y": 4
        }
    ]
    ```
    
    **说明**
    
    这个转换可以在过滤器中进行，此处可以留空不填。
    
10.  在下方的编辑框中输入查询参数。
     
     -   查询参数为Open API的接口参数，以JSON对象的形式填写。
         
     -   参数名参考云产品API的入参说明。
         
     -   回调ID在JSON对象的value中填写。
         
     
     以云监控的[DescribeMetricList](https://help.aliyun.com/zh/cms/cloudmonitor-1-0/api-describemetriclist-new#doc-api-988976) API为例，查询参数如下所示。
     
     ```
     {
       "MetricName": "cpu_idle",
       "Namespace": "acs_ecs_dashboard",
       "Dimensions": [
         {
           "instanceId": "i-j6c0kyh2qh7fi0r4k351"
         }
       ],
       "StartTime": "2021-01-27 14:00:00",
       "EndTime": "2021-01-27 15:00:00",
       "Period": "60"
     }
     ```
     
11.  单击选中下方**对象转数组**，可自动将返回的对象转换成数值。
     
     例如：
     
     ```
     // 原数据
     {
       "name": "..."
     }
      => 
     //转换后数据
     [{
       "name": "..."
     }]
     ```
     
     **说明**
     
     此配置项不常使用，建议您使用过滤器进行数据格式转换。
     
12.  单击**查看数据返回结果**，查看数据返回结果。
     

## 后续步骤

获取原始数据后，可参见[组件数据源配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-data-source-configuration)进行组件数据的适配。

## 常见问题

更多问题，请参见[数据源配置和使用常见问题](https://help.aliyun.com/zh/datav/datav-7-0/support/faq-about-data-source-configuration)。