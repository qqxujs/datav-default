  解决因发布分享页域名变更导致的跨域与无法访问问题-DataV数据可视化-阿里云

本文介绍DataV-Board数据看板分享链接的域名，从**datav.aliyuncs.com**变更为**b.datav.run**后无法正常运行的解决方案。

## **背景信息**

为更好地支持数据看板分享功能，DataV-Board计划于**2024年11月20日**起将[发布分享页](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/publish-and-snapshot-management)的域名由**datav.aliyuncs.com**变更为**b.datav.run**。详情请参见[分享页域名变更公告](https://help.aliyun.com/zh/datav/datav-7-0/product-overview/product-bulletin)。

域名变更后，如下场景可能会因存在跨域访问限制，导致新域名无法正常访问，您可参考本文按需进行排查处理：

-   [组件使用API作为数据源](#99c1a35f7ev08)
    
-   [组件使用DataV 数据代理服务作为数据源](#a20b156ecfqip)
    
-   [使用轮播页面或iframe组件](#5115fa1dfbxxc)
    

## **组件使用API作为数据源**

组件使用[API](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-api-data-sources)作为数据源，可能会因域名变更导致跨域请求被拦截。您可根据组件配置数据源时是否勾选**需要cookie**进行排查处理：

**说明**

-   需要cookie，表示调用API时不选择代理且需要获取cookie信息进行身份验证或保存状态。
    
-   本文以折线图示例数据源配置，其他组件配置类似。
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6385841371/p872020.png)

-   未勾选**需要cookie**：请确保请求响应头`response headers`中包含`Access-Control-Allow-Origin: *`，即浏览器允许来自任何源（网站）的请求访问该资源，用于实现跨源资源共享（CORS）。
    
-   勾选**需要cookie**：需根据请求字段`request.headers.referer`动态返回可被跨域请求的响应头`response headers`，示例如下。
    
    **当前页面地址**
    
    请求字段**request.headers.referer**
    
    **满足要求的响应头response headers**
    
    编辑页：
    
    ```
    https://datav.aliyun.com/v/editor/216787
    ```
    
    ```
    https://datav.aliyun.com/admin/screen/216787
    ```
    
    ```
    Access-Control-Allow-Origin: https://datav.aliyun.com
    ```
    
    发布分享页（域名变更前）：
    
    ```
    https://datav.aliyuncs.com/share/xxx
    ```
    
    ```
    https://datav.aliyuncs.com/share/xxx
    ```
    
    ```
    Access-Control-Allow-Origin: https://datav.aliyuncs.com
    ```
    
    发布分享页（域名变更后）：
    
    ```
    https://b.datav.run/share/xxx
    ```
    
    ```
    https://b.datav.run/share/xxx
    ```
    
    ```
    Access-Control-Allow-Origin: https://b.datav.run
    ```
    

## 组件使用DataV 数据代理服务作为数据源

组件使用[DataV 数据代理服务](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-a-datav-proxy-service)作为数据源，可能会因域名变更导致跨域请求被拦截。您可按照如下步骤排查处理：

-   若DataV数据代理服务中未配置[跨域Origins](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-a-datav-proxy-service#02633cda34oqr)（即该配置为空），则无需更改。
    
    **说明**
    
    跨域Origin是指在不同域名、协议或端口之间进行网络请求，实现资源共享。
    
-   若DataV数据代理服务中配置了跨域Origins，请将以下两个地址添加至相应配置中。
    
    -   `http://b.datav.run`
        
    -   `https://b.datav.run`
        
    
    **DataV数据代理服务**
    
    **旧跨域Origins配置**
    
    **新跨域Origins配置**
    
    未配置跨域Origins
    
    不涉及
    
    不涉及
    
    已配置跨域Origins
    
    ```
    https://datav.aliyuncs.com
    http://datav.aliyuncs.com
    https://datav.aliyun.com
    http://datav.aliyun.com
    ```
    
    ```
    https://datav.aliyuncs.com
    http://datav.aliyuncs.com
    https://datav.aliyun.com
    http://datav.aliyun.com
    https://b.datav.run
    http://b.datav.run
    ```
    

## 使用轮播页面或iframe组件

使用[轮播页面](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/page-carousel)或[iframe](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/iframe)组件，可能会因为跨域限制，导致页面无法在新域名**b.datav.run**下被访问，内面内容无法正常加载。

**说明**

本文以iframe组件示例相关排查处理操作，轮播页面操作类似。

访问新版分享链接，若iframe页面内容无法正常加载，表示该页面在响应头里添加了**X-Frame-Options**限制，您输入的iframe页面地址不支持在**b.datav.run**下被访问。

请删除响应头中的**X-Frame-Options**字段，或修改**X-Frame-Options**字段的内容，增加跨域支持。示例如下。

**说明**

**X-Frame-Options**字段用于保护网页免受某些类型的网络攻击，提高网页的安全性。X-Frame-Options可设置为如下值：

-   X-Frame-Options：DENY，表示不允许任何网站在iframe中嵌入该页面。
    
-   X-Frame-Options：SAMEORIGIN，表示仅允许同源网站在iframe中嵌入该页面。
    
-   X-Frame-Options：ALLOW-FROM URL，表示允许指定的源（URI）在iframe中嵌入该页面。
    

**当前页面地址**

**request.headers.referer**

**满足要求的响应头 response headers**

编辑页：

```
https://datav.aliyun.com/v/editor/216787
```

```
https://datav.aliyun.com/v/editor/216787
```

```
X-Frame-Options: ALLOW-FROM https://datav.aliyun.com
```

发布分享页（域名变更前）：

```
https://datav.aliyuncs.com/share/xxx
```

```
https://datav.aliyuncs.com/share/xxx
```

```
X-Frame-Options: ALLOW-FROM https://datav.aliyuncs.com
```

发布分享页（域名变更后）：

```
https://b.datav.run/share/xxx
```

```
https://b.datav.run/share/xxx
```

```
X-Frame-Options: ALLOW-FROM https://b.datav.run
```