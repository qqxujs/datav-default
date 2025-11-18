  添加并使用阿里云Elastic Search数据源-DataV数据可视化-阿里云

本文介绍在DataV中添加并使用阿里云Elastic Search数据源的方法。通过Elastic Search和DataV结合使用，可以实现数据分析和搜索结果的大屏展示。

## 前提条件

已准备好待添加的Elastic Search数据源。

## 使用限制

仅支持企业版及以上版本。

## 添加阿里云Elastic Search数据源

1.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
2.  在**工作台**页面，单击**数据准备 > 数据源**，进入**数据源**页面，单击**新建数据源**。
    
3.  从**类型**列表中，选择**Elastic Search**。
    
4.  填写Elastic Search数据服务项目信息。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5114312761/p539754.png)
    
    **重要**
    
    为了让DataV服务能够使用Elastic Search数据源，需要让DataV获取阿里云Elastic Search数据服务的访问权限，从而获得关联的RAM角色。
    
    在**添加数据源**对话框中，单击**获取实例列表**，在弹出的对话框中查看服务关联角色的介绍信息。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6114312761/p539755.png)
    
    -   **角色名称**：AliyunServiceRoleForDataVDataSourceES
        
    -   **系统权限策略**：AliyunServiceRolePolicyForDataVDataSourceES
        
    -   **权限说明**：允许DataV服务使用此角色访问您的Elastic Search/RDS/ADS产品服务。
        
        权限说明内容：
        
        ```
        {
            "Statement": [
                {
                    "Effect": "Allow",
                    "Action": [
                        "elasticsearch:ListInstance",
                        "elasticsearch:DescribeInstance",
                        "rds:DescribeDBInstanceAttribute",
                        "adb:DescribeDBClusterAttribute",
                        "gpdb:DescribeDBInstanceNetInfo"
                    ],
                    "Resource": "*"
                },
                {
                    "Action": "ram:DeleteServiceLinkedRole",
                    "Resource": "*",
                    "Effect": "Allow",
                    "Condition": {
                        "StringEquals": {
                            "ram:ServiceName": "datasource-es.datav.aliyuncs.com"
                        }
                    }
                }
            ],
            "Version": "1"
        }
        ```
        
        如果您需要删除AliyunServiceRoleForDataVDataSourceES（服务关联角色），请参见[删除服务关联角色](https://help.aliyun.com/zh/ram/user-guide/service-linked-roles#concept-2448621/section-b9f-8dv-b5q)。
        
        更多关于服务关联角色的信息，请参见[服务关联角色](https://help.aliyun.com/zh/ram/user-guide/service-linked-roles#concept-2448621)。
        
    
    **参数**
    
    **说明**
    
    **自定义数据源名称**
    
    数据源的显示名称，可以自由命名。
    
    **Region**
    
    Elastic Search实例的地域（默认选择**华东1区**）。
    
    **实例ID**
    
    用于查询可用的Elastic Search实例ID。单击**获取实例列表**即可获取到Elastic Search的实例列表并进行查询，单击右侧下拉框选择列表中某一实例（或直接输入数据库名称选择已有实例）。 当单击**获取实例列表**时会自动创建角色访问权限，授权允许DataV使用此角色访问Elastic Search。
    
    请参见[查看实例的基本信息](https://help.aliyun.com/zh/es/user-guide/view-the-basic-information-of-a-cluster-1#task-2449896)获取Elastic Search实例的ID。
    
    **密码**
    
    所选Elastic Search实例在被创建时设置的密码，不同实例的密码不同。
    
    配置成功后，系统会自动进行测试连接。
    
5.  信息填写完成后，单击**确定**，完成数据源的添加。
    
    新添加的数据源会自动显示在数据源列表中。
    

## 使用阿里云Elastic Search数据源

1.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
2.  在**工作台**页面中，将鼠标移动至需要编辑的数据看板上，单击**编辑**。
    
    **重要**
    
    如果您的**工作台**页面内还没有创建任何数据看板，请参见[使用模板创建PC端看板](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)，创建一个数据看板。
    
3.  在画布编辑页面，单击画布中的某一组件。
    
    如果画布中还没有组件，请先添加组件，详情请参见[组件画布操作](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-operations-in-a-canvas#title-1c7-abe-n0m)。
    
4.  在画布右侧的组件配置面板中选择**数据源**。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0024312761/p539649.png)
    
5.  在**设置数据源**模块中，选择**数据源类型**为**Elastic Search**。
    
6.  在**选择已有数据源**列表中选择配置完成的Elastic Search数据源。
    
7.  在**index**输入框中填写查询索引。
    
8.  在**Query**输入框中填写查询体，查询体为JSON对象。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5114312761/p539757.png)
    
9.  单击**查看数据返回结果**，查看数据返回结果。
    

## 后续步骤

获取原始数据后，可参见[组件数据源配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-data-source-configuration)进行组件数据的适配。

## 常见问题

更多问题，请参见[数据源配置常见问题](https://help.aliyun.com/zh/datav/datav-7-0/support/faq-about-data-source-configuration)。