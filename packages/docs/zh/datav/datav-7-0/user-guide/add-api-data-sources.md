  在DataV-Board中添加API数据源并配置跨域与cookie-DataV数据可视化-阿里云

当您需要对数据进行聚合计算，或需集成第三方数据，或考虑高性能、高安全性、日志监控、流量控制等因素时，可将业务数据发布为API，接入DataV-Board。本文档介绍在DataV-Board中添加API数据源的方法，以及相关参数配置说明。

## 前提条件

**重要**

请确保API地址能被 DataV 服务访问：若为本地部署，可访问本地API服务；否则，请确保API地址为公网能访问。

-   已准备好待添加的API数据源。
    
    **说明**
    
    支持HTTP/HTTPS协议API，返回格式和数据类型无特殊要求。API 可由第三方直接提供，或者根据业务自行生成。API自行生成由选择数据来源、设计API、实现API、测试API、部署API等步骤组成，具体可咨询相关研发人员。
    
-   已创建数据看板并添加相应组件。详情请参见[使用模板创建PC端看板](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)、[组件画布操作](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-operations-in-a-canvas)、[配置组件](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items)。
    

## 使用限制

仅支持企业版及以上版本。

## **使用场景**

当您使用API时，可能存在跨域或者需要cookie获取信息情况，系统通过**服务器代理请求**和**需要cookie**配置项支持。具体操作参见下表。

**跨域情况**

**cookie情况**

**支持情况**

不跨域

不需要cookie

支持，无需勾选。

不跨域

需要cookie

支持，仅勾选**需要cookie**。

跨域

不需要cookie

支持，仅勾选**服务器代理请求**。

跨域

需要cookie

不支持，请先解决跨域问题。详情请参见[跨域资源共享](#bf0e860b5fbrs)。

## 操作步骤

1.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
2.  选择目标组件，在画布右侧的组件配置面板中选择**数据源**。
    
3.  在**设置数据源**模块中，选择**数据源类型**为**API**。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1714394371/p890893.png)
    
4.  按实际情况填写API参数。
    
    **参数名称**
    
    **描述**
    
    **请求方式**
    
    选择API接口的请求类型，支持**GET**和**POST**两种类型，默认为**GET**。
    
    -   **GET**：从服务器请求数据。
        
    -   **POST**：向服务器提交要被处理的数据。
        
    
    具体这两种请求方式的解释说明，请参见[常用的请求方式](https://developer.aliyun.com/article/89289?spm=a2c6h.14164896.0.0.58601967lZKOcf)。
    
    **URL**
    
    输入API接口的请求地址。
    
    **Headers**
    
    请求头参数，即包含在HTTP请求中的元数据，用于传递附加信息。
    
    **Body**
    
    请求体参数，即请求中实际传输的数据部分。仅POST请求方式时需设置。
    
    **服务器代理请求**
    
    URL地址跨域无法访问时，勾选。
    
    **重要**
    
    此时**需要cookie**选项不生效。
    
    **需要cookie**
    
    可使用cookie实现数据权限控制，保证数据安全性。此时不可勾选**服务器代理请求**，具体场景和原理见[cookie使用说明](#23542716e8zbd)。
    
    **说明**
    
    Headers和Body参数格式为key&value格式，可**使用JSON编辑器**直接输入JSON格式数据。一旦切换，无法返回可视化编辑模式，请谨慎切换。
    
5.  单击**查看数据返回结果**，查看数据源的返回结果。
    

## **跨域问题说明**

### **什么是跨域**

网站`http://exampleA.com`访问网站`http://exampleB.com`的数据接口，将无法获取数据。打开浏览器，您可以看到如下标记为红色的文字 （Chrome）。 这意味着我们遇到了跨域问题。

```
XMLHttpRequest 无法加载 http://exampleB.com。所请求的资源不带有“Access-Control-Allow-Origin”报头。因此不允许源站点“http://exampleA.com”进行访问。
```

**说明**

跨域：若两个页面的协议（HTTP）、端口（80） 和域名（example.com）任意一个不相同，则该页面之间的资源请求被认为是跨域。

### **解决方式**

当API地址存在跨域问题时，通过以下两种方式解决：

-   可直接勾选**服务器代理请求**解决。
    
    **重要**
    
    请确保API地址能被 DataV 服务访问：若为本地部署，可访问本地API服务；否则，请确保API地址为公网能访问。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1714394371/p891504.png)
    
-   通过跨域资源共享方式解决。
    
    **重要**
    
    当API同时**需要cookie**信息时，只能通过跨域资源共享的**方式一**和**方式二**解决，必须明确返回需要被支持的跨域域名。
    

#### **跨域资源共享**

跨域资源共享（CORS, Cross-Origin Resource Sharing）是一种机制，使得浏览器可以请求来自与其所在的服务器不同的域上资源。基本原理为在源站点（被请求一方）中加入自定义的HTTP头部，使其他网站可以访问其资源。配置方法如下：

-   方法一：若源站点的接口数据需要被某一个网站使用，在数据服务器返回的报头信息中加入以下内容。
    
    ```
    Access-Control-Allow-Origin: http://exampleA.com
    ```
    
-   方法二：若源站点的接口数据需要被多个网站使用，必须使用一个程序来动态生成报头信息。以PHP代码为例。
    
    ```
    <?php 
    if (is_my_code($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    }
    ?>
    ```
    
-   方法三：若源站点的接口数据需要被所用的网站使用，可以使用`“*”`。
    
    ```
    Access-Control-Allow-Origin: *
    ```
    

## **cookie使用说明**

当数据看板通过**iframe**嵌入业务系统时，可使用cookie实现数据隔离。即在用户登录的情况下，业务系统中带有用户登录信息`Session_Id`的**cookie**。此时，可通过cookie获取对应用户信息。

1.  当使用API数据源，并且选中了**需要cookie（不选择代理并且需要获取cookie时使用）**时，DataV-Board会在HTTPS请求中带上该页面包含用户登录信息的**cookie**。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1714394371/p891506.png)
    
    **重要**
    
    -   当选中**需要cookie**时，不可同时选中**服务器代理请求**。
        
    
2.  此时服务端会对请求进行用户验证，通过后返回该用户的数据，从而实现不同用户登录只看到自己数据，而看不到其他用户的数据。![原理说明](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9409788951/p75822.png)
    

## 后续步骤

获取原始数据后，可参见[组件数据源配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-data-source-configuration)进行组件数据的适配。

## 常见问题

更多问题，请参见[数据源配置常见问题](https://help.aliyun.com/zh/datav/datav-7-0/support/faq-about-data-source-configuration)。