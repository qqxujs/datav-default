<!DOCTYPE html> 

DataV数据代理服务用于解决数据可视化项目中常见的数据访问和传输问题（例如，数据安全、跨域请求），无需暴露数据库的公网IP，就可以连接自建的数据库，提高数据安全。本文介绍如何配置DataV数据代理服务，以及如何在DataV-Board 7.0中添加数据代理服务。

## **背景信息**

DataV Proxy是DataV数据代理服务的配置工具，可帮助DataV访问本地或内网等不对外开放且无外网访问地址的数据库，保证数据安全。

### **工作原理**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5753912471/CAEQVRiBgIDEivb6qxkiIDRlMjk5OTAyMzg0NTQ2MzBiZmU0ZGY0YzZiZjU1ZDgw4963127_20250307164231.150.svg)
1. 用户在DataV执行相关查询操作，DataV会将**加密的SQL查询字符串**和**数据库ID值**传递给DataV Proxy应用程序。
2. DataV Proxy解析加密信息，建立与指定数据库的连接，并发送SQL查询字符串。
3. 数据库执行SQL查询并返回查询结果给DataV Proxy。
4. DataV Proxy将查询结果返回至DataV。

### **使用场景**

数据代理服务常用于以下场景：

* 跨域请求

  * 解决浏览器的同源策略限制，允许前端应用从不同域名的服务获取数据。
  * 通过代理服务器转发请求，使客户端能够顺利访问跨域资源。
* 数据安全

  * 身份验证和授权：对请求进行身份验证，确保只有经过认证的用户才能访问数据。
  * 数据加密：对传输中的数据进行加密，保护数据不被窃取或篡改。
  * 隐藏敏感信息：代理服务可以隐藏后端数据库的真实地址和结构，减少直接暴露的风险。

## 使用限制

仅支持企业版及以上版本使用DataV数据代理服务。

## **前提条件**

已准备好待访问的数据库。

**重要** 

您必须先将对应区域的白名单IP地址添加到您的数据源白名单中，以确保DataV-Board能正常访问您的数据库。详情请参见[配置数据库白名单](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configure-a-database-whitelist-for-datav-7)。

## 配置DataV Proxy

添加DataV数据代理服务前，您需先完成DataV Proxy的相关配置。

### **步骤一：启动DataV Proxy**

请根据您的业务需要部署DataV Proxy（例如，部署至ECS、本地环境）并启动该服务。

* **Windows：**  

  1. 下载[DataV Proxy应用安装包](https://sh-conf.oss-cn-shanghai.aliyuncs.com/doc%5Ffiles/datav%5Fproxy.zip)。
  2. 存放至所需位置，解压后双击`datav_proxy_win32_x64.exe`文件，系统将自动创建代理并启动服务。
* **Linux/Mac：**  

  1. 执行如下命令，下载DataV Proxy应用。  
  ```  
  wget https://sh-conf.oss-cn-shanghai.aliyuncs.com/doc_files/datav_proxy.zip  
  ```
  2. 解压安装包，并定位到项目所在目录。
  3. 执行如下命令，启动服务。DataV Proxy服务默认在`8001`端口启动。  
  ```  
  chmod 777 ./*    //表示所有用户对当前目录下的文件和子目录均具备读、写、执行权限。  
  sh exec.sh start  
  ```

**说明**  
    * 可通过`sh exec.sh start -p [端口号]`命令，设置端口号并启动。例如，`sh exec.sh start -p 8080`。
    * 执行`sh exec.sh stop`命令，可停止服务。

### **步骤二：进入DataV Proxy配置页面**

服务启动成功后，需在浏览器中访问`http://{服务器所在的域名/IP地址}:端口`（例如，`http://10.10.10.10:8001`）。访问成功，将进入DataV Proxy应用配置页面。 ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5753912471/p926452.png)

**说明** 

首次访问需按照界面指引进行注册，注册成功后登录服务。

* 域名/IP：安装DataV Proxy的服务器的域名/IP地址。请根据您的网络环境配置相应域名，当您处于内网环境时，请使用内网IP。
* 端口：DataV Proxy服务的启动端口。

### **步骤三：配置DataV Proxy数据源**

根据业务需要，新建所需类型的数据源，以便DataV Proxy通过该数据源访问相应数据库。DataV Proxy支持创建多种类型的数据源，本文以RDS MySQL为例，为您介绍数据源配置操作。

**说明** 

不同数据源的参数存在差异，具体请以实际界面为准。

1. 数据库添加白名单。  
为避免DataV Proxy访问数据库存在限制，您需将DataV Proxy服务所在IP地址添加至RDS MySQL数据库的[白名单](https://help.aliyun.com/zh/rds/apsaradb-rds-for-mysql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-mysql-instance#concept-rpj-hs4-ydb)。
2. 在DataV Proxy配置页面的左侧导航栏，单击**数据源配置**，选择**mysql**，单击**新增**。
3. 在**新建数据源**对话框配置参数信息。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5753912471/p926561.png)

| **参数**          | **说明**                                                                                                                                                   |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **id**          | 自定义的数据源ID，不可重复。                                                                                                                                          |
| **host**        | 数据库所在服务器的IP地址或域名。此处需填写RDS MySQL实例的**外网地址**，可在[RDS管理控制台](https://rdsnext.console.aliyun.com/)的实例基本信息页获取。例如，rm-bp1xxxxxxxxxxxxxhmo.mysql.rds.aliyuncs.com。 |
| **user**        | 登录数据库的账号名称。                                                                                                                                              |
| **password**    | 登录数据库的密码。                                                                                                                                                |
| **database**    | 数据库名称。                                                                                                                                                   |
| **port**        | 数据库端口号。 RDS MySQL端口号通常为3306。                                                                                                                             |
| **maxPoolSize** | 连接池中允许的最大数据库连接数量。                                                                                                                                        |
| **timeout**     | 等待获取连接的最长时间，单位为ms。                                                                                                                                       |
4. 测试数据源连通性。  

  * 单击**SQL测试**，可在弹出的对话框中输入SQL语句，测试数据库中的数据是否符合要求。
  * 单击**连接池信息**，查看数据库的连接数量。

### **步骤四：其他配置**

在DataV Proxy配置页面的左侧导航栏，进行如下配置：

* **密钥及跨域设置**：

  * **密钥**：用于[添加DataV数据代理服务](#steps-xnb-yjb-f44)时配置相关参数。单击**一键生成新Key/Secret** ，生成新的Access Key和Access Secret。

**重要**  
  原始密钥为空，首次单击**一键生成新 Key/Secret**，会生成原始密钥。后续再单击，会生成新的密钥，新密钥生成后旧密钥将失效。
  * **跨域设置：**跨域Origins配置为`http://datav.aliyun.com`，允许DataV-Board访问到当前数据代理服务。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5753912471/p926576.png)
* **查询日志 ：**可按需查看指定日志信息。

**重要**  
Linux及Mac查询时支持指定日志行数范围、匹配关键字。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5753912471/p926579.png)

## **配置浏览器**

可根据您访问数据代理服务的网络环境，进行相关浏览器的使用及配置。

### **公网环境访问**

公网环境访问数据代理服务时，请使用浏览器（例如，Chrome、Firefox）访问<http://datav.aliyun.com/>。

### **内网环境访问**

使用内网地址访问数据代理服务，且使用高版本Chrome浏览器，需完成下述配置：

1. 私有网络请求的跨域资源共享（CORS）设置。
* **Chrome 94以上版本**：访问`chrome://flags/#block-insecure-private-network-requests`，将状态设置为`disable`，并重启浏览器。使浏览器不会阻止从不安全的上下文（HTTP）发起的对私有网络的请求。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2351361471/p860307.png)
* **Chrome 108以上版本**：访问`chrome://flags/#unsafely-treat-insecure-origin-as-secure`，在`unsafely-treat-insecure-origin-as-secure`中设置DataV-Board的HTTP地址，并重启浏览器。使浏览器允许将`http://datav.aliyun.com` 这个不安全的源（HTTP）视为安全的源（HTTPS），从而允许其使用某些仅限于安全上下文的功能。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7776731471/p860305.png)
1. 在DataV Proxy中配置允许跨域访问。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7912171471/p860309.png)

## 添加DataV数据代理服务

在此步骤中，将在DataV中添加DataV数据代理服务。通过该代理服务，无需暴露数据库的公网IP，即可连接自建数据库，从而提升数据安全性。

**重要** 

数据代理服务只提供HTTP服务，请使用`http://`协议访问DataV控制台，以确保能够正常连接到Datav Proxy数据源。

* 若在Chrome浏览器中打开HTTP网站时，始终跳转至HTTPS，请参见[常见问题](#68558e47fc4ev)处理。
* 若您要使用HTTPS服务，则需申请一个Chrome认可的HTTPS证书，申请方法请在谷歌浏览器中搜索。

1. 登录[DataV控制台](http://datav.aliyun.com)。
2. 在**工作台**页面，单击**数据准备 > 数据源**，进入**数据源**页面，单击**新建数据源**。
3. 在**类型**列表中，选择**DataV数据代理服务**。
4. 配置DataV数据代理服务所要访问的数据库信息。

| **参数**             | **说明**                                                                                                                                                                                              |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **名称**             | 自定义的数据源名称。                                                                                                                                                                                          |
| **域名**             | DataV Proxy启动时的IP地址或域名。若您使用的是ECS服务器，则此处配置为ECS服务器的公网IP。                                                                                                                                              |
| **端口**             | DataV Proxy启动时的端口号，默认为8001。                                                                                                                                                                         |
| **路径**             | （可选）DataV Proxy启动时指定的[prefix](https://help.aliyun.com/zh/datav/datav-7-0/support/faq-about-data-proxy-requests#5559e6ee008a9)值。若未指定，则不填。**说明** Prefix是一个URL路径的前缀，指定后，所有匹配该前缀的请求都会被转发到DataV Proxy服务。 |
| **Method**         | （可选）请求的方法。默认为GET，当请求参数过长时建议选择POST。                                                                                                                                                                  |
| **Key**和**Secret** | DataV Proxy生成的**Access Key**和**Access Secret**。可参见[密钥配置](#bdb67e7c16k1m)。                                                                                                                           |
| **数据库**            | 单击**获取数据列表**，选择DataV Proxy中已添加的数据库。该数据库即为DataV通过数据代理服务所访问的数据库。                                                                                                                                      |
5. 连接成功后，单击**确定**，完成数据源的添加。

## 后续步骤

获取原始数据后，可参见[组件数据源配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-data-source-configuration)进行组件数据的适配。

## **常见问题**

* **问题描述**：如果在Chrome浏览器中打开HTTP网站时，始终自动跳转至HTTPS，该如何处理？
* **解决方案**：由于浏览器安全限制，HTTP网站会自动跳转至HTTPS。请进入`chrome://net-internals/#hsts`，删除该域名的安全策略，并在新页签下重新访问。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2995659271/p860243.png)

更多添加数据代理服务的常见问题，请参见[数据代理请求常见问题](https://help.aliyun.com/zh/datav/datav-7-0/support/faq-about-data-proxy-requests)。