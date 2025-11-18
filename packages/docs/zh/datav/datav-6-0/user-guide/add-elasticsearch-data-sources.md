  在DataV中添加并使用阿里云Elasticsearch数据源-DataV数据可视化-阿里云

本文介绍在DataV中添加并使用阿里云Elastic Search数据源的方法。通过Elastic Search和DataV结合使用，可以实现数据分析和搜索结果的大屏展示。

## 前提条件

已准备好待添加的Elastic Search数据源。

## 添加阿里云Elastic Search数据源操作步骤

1.  登录[DataV控制台](https://datav.aliyun.com/)。
2.  在我的数据页签中选择数据源管理，单击添加数据。
3.  从类型列表中，选择Elastic Search。
4.  填写Elastic Search数据服务项目信息。
    
    ![添加Elasticsearch数据源](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0586079951/p47872.png)
    
    **注意** 为了让DataV服务能够使用Elastic Search数据源，需要让DataV获取阿里云Elastic Search数据服务的访问权限，从而获得关联的RAM角色。
    
    在添加数据对话框中，单击获取实例列表，在弹出的对话框中查看服务关联角色的介绍信息。![查看关联角色信息](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2090880661/p164509.jpg)
    
    -   角色名称：AliyunServiceRoleForDataVDataSourceES
    -   系统权限策略：AliyunServiceRolePolicyForDataVDataSourceES
    -   权限说明：允许DataV服务使用此角色访问您的Elastic Search/RDS/ADS产品服务。
        
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
        
        如果您需要删除AliyunServiceRoleForDataVDataSourceES（服务关联角色），请参见[删除服务关联角色](https://help.aliyun.com/zh/ram/user-guide/service-linked-roles#section-b9f-8dv-b5q)。
        
        更多关于服务关联角色的信息，请参见[服务关联角色](https://help.aliyun.com/zh/ram/user-guide/service-linked-roles#concept-2448621 "受信云服务可以通过扮演RAM角色来访问其他的云资源。可信实体为阿里云服务的RAM角色分为普通服务角色和服务关联角色两种。本文主要介绍服务关联角色。")。
        
    
     
    
    参数
    
    说明
    
    自定义数据源名称
    
    数据源的显示名称，可以自由命名。
    
    Region
    
    Elastic Search实例的地域（默认选择华东1区）。
    
    实例ID
    
    用于查询可用的Elastic Search实例ID。单击获取实例列表即可获取到Elastic Search的实例列表并进行查询，单击右侧下拉框选择列表中某一实例（或直接输入数据库名称选择已有实例）。 当单击获取实例列表时会自动创建角色访问权限，授权允许DataV使用此角色访问Elastic Search。
    
    请参见[查看实例的基本信息](https://help.aliyun.com/zh/es/user-guide/view-the-basic-information-of-a-cluster-1#task-2449896 "当您需要使用阿里云Elasticsearch实例的公网或内网地址、端口号、版本、类型等信息时，可在实例的基本信息页面获取。本文为您介绍实例基本信息页面的参数说明。")获取Elastic Search实例的ID。
    
    密码
    
    所选Elastic Search实例在被创建时设置的密码，不同实例的密码不同。
    
    配置成功后，系统会自动进行测试连接。
    
5.  信息填写完成后，单击确定，完成数据源的添加。
    
    新添加的数据源会自动显示在数据源列表中。
    

## 使用阿里云Elastic Search数据源操作步骤

1.  登录[DataV控制台](https://datav.aliyun.com/)。
2.  在我的可视化页面中，将鼠标移动至需要编辑的可视化应用上，单击编辑。
    
    **注意** 如果您的我的可视化页面内还没有创建任何可视化应用，请参见[使用模板创建PC端可视化应用](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-a-template-to-create-a-pc-side-visual-application#task-2354861 "DataV支持使用模板和识图两种方式创建PC端可视化应用，本文介绍使用模板创建PC端可视化应用的方法。")，创建一个可视化应用。
    
3.  在画布编辑页面，单击画布中的某一组件。
    
    如果画布中还没有组件，请先添加组件，详情请参见[添加资产](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/add-a-widget-1/#task-2375434 "通过添加资产功能，您可以在DataV可视化应用项目中添加可视化资产，配置资产所需要的应用样式。本文介绍在画布编辑器中添加资产的方法。")。
    
4.  在画布右侧的组件配置面板中选择数据，并单击配置数据源。
    
    ![配置数据源](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6028370261/p65745.png)
    
5.  在设置数据源页面中，选择数据源类型为Elastic Search。
6.  在选择已有数据源列表中选择配置完成的Elastic Search数据源。
7.  在index输入框中填写查询索引。
8.  在Query输入框中填写查询体，查询体为JSON对象。
    
    ![选择数据源类型](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5606068951/p47902.png)
    
9.  单击预览数据源返回结果，查看数据返回结果。