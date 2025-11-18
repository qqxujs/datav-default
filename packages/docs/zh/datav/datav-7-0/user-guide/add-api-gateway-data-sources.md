  为DataV配置阿里云API网关数据源-DataV数据可视化-阿里云

本文档介绍在DataV中添加阿里云API网关数据源的方法，以及相关参数配置说明。阿里云API网关即API托管服务，涵盖API发布、管理、运维、售卖的全生命周期管理。

## 前提条件

已准备好待添加的阿里云API网关数据源。

## 使用限制

仅支持DataV企业版及以上版本。

## 添加阿里云API网关数据源

1.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
2.  在**工作台**页面，单击左侧导航栏中的**数据准备** > **数据源**，进入**数据源**页面，单击**新建数据源**。
    
3.  从**类型**列表中，选择**阿里云API网关**。
    
4.  填写API网关信息。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7443312761/p539733.png)
    
    **参数**
    
    **说明**
    
    **名称**
    
    数据源的显示名称，您可以自由命名。
    
    **域名**
    
    API网关的调用域名。您可以进入[API网关控制台](https://apigateway.console.aliyun.com/)查看。
    
    **AppKey**
    
    API网关接口的调用AppKey。请参见[通过API网关访问HTTP协议的后端服务](https://help.aliyun.com/zh/api-gateway/traditional-api-gateway/getting-started/create-an-api-with-a-backend-service-of-the-http)，获取相关接口的AppKey。
    
    **AppSecret**
    
    API 网关接口的调用AppSecret。请参见[通过API网关访问HTTP协议的后端服务](https://help.aliyun.com/zh/api-gateway/traditional-api-gateway/getting-started/create-an-api-with-a-backend-service-of-the-http)，获取相关接口的AppSecret 。
    
5.  信息填写完成后，单击**确定**，完成数据源的添加。
    
    新添加的数据源会自动显示在数据源列表中。
    

## 使用阿里云API网关数据源

1.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
2.  在**工作台**页面中，将鼠标移动至需要编辑的数据看板上，单击**编辑**。
    
    **重要**
    
    如果您的**工作台**页面内还没有创建任何数据看板，请参见[使用模板创建PC端看板](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)，创建一个数据看板。
    
3.  在画布编辑页面，单击画布中的某一组件。
    
    如果画布中还没有组件，请先添加组件，详情请参见[组件画布操作](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-operations-in-a-canvas#title-1c7-abe-n0m)。
    
4.  在画布右侧的组件配置面板中选择**数据源**。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0024312761/p539649.png)
    
5.  在**设置数据源**模块中，选择**数据源类型**为**阿里云API网关**。
    
6.  在**选择已有数据源**列表中选择配置完成的**阿里云API网关**数据源。
    
7.  在下方**HTTP Method**列表中选择一种请求方式，可选择**GET**、**POST**、**PATCH**、**PUT**、**DELETE**、**HEAD**和**OPTIONS**这七种请求方式，具体这几种请求方式的解释说明，请参见[常用的请求方式](https://developer.aliyun.com/article/53549?spm=a2c6h.14164896.0.0.5d4a5100YThAJM)。
    
8.  在下方**请求URL**编辑框中，填写需要请求的接口URL路径。
    
9.  根据您在**HTTP Method**内选择的不同请求方式，可在下方**Headers**（请求头）和**Body**（请求体）中填写相应的请求函数值。
    
    **说明**
    
    **GET**请求方式仅涉及**Headers**，不涉及**Body**，具体请以实际界面为准。
    
10.  单击**查看数据返回结果**，查看数据返回结果。
     

## 后续步骤

获取原始数据后，可参见[组件数据源配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-data-source-configuration)进行组件数据的适配。

## 常见问题

更多问题，请参见[数据源配置和使用常见问题](https://help.aliyun.com/zh/datav/datav-7-0/support/faq-about-data-source-configuration)。