 

DataV-Board 7.0 （数据看板）提供完整的可视化搭建工具链，支持接入多种数据源（例如，静态数据、CSV文件、API、RDS for MySQL等各类数据库），支持通过图形化界面轻松搭建PC看板、移动端看板等多种应用，满足企业经营分析、展示汇报、业务监控、风险预警、地理信息分析、城市指挥等多种业务场景进行实时数据监控及决策分析。本文为您概要介绍DataV-Board 7.0的核心操作流程。

## **背景信息**

DataV-Board 7.0支持创建PC端看板及移动端看板，您可基于[业务场景](https://help.aliyun.com/zh/datav/datav-7-0/product-overview/application-scenarios)选择。

-   PC端看板：
    
    -   适用于通过PC访问的可视化应用。
        
    -   支持的界面元素及组件较多、支持多列布局、支持复杂功能。
        
-   移动端看板：
    
    -   适用于通过移动设备访问的可视化应用。
        
    -   支持的界面元素及组件较少、支持单列布局、支持的功能简单。
        

## **前提条件**

-   [已开通DataV-Board 7.0服务](https://help.aliyun.com/zh/datav/datav-7-0/getting-started/activate-datav-1)。
    
-   已准备业务数据。您需提前准备要接入DataV-Board 7.0的数据，并按需将数据存储至DataV支持的[数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/data-source/)（例如，RDS for MySQL数据库）。
    
-   （可选）若使用RAM账号创建看板，需添加该用户至相关工作空间并授予**开发者**角色权限。详情请参见[成员管理](https://help.aliyun.com/zh/datav/configure-a-workspace-1#f9d8de705fbys)。
    

## 操作流程

您可参考如下流程搭建数据看板。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8951825371/CAEQTxiBgMDnjoS6jxkiIGE2OTIxNTI4NWRmMzQzY2Y5NzFhYmVhZGNhMGQyMWZm4607569_20240821144151.511.svg)

## **准备工作**

创建数据看板前，您需先完成如下准备工作。

### **（可选）步骤一：新建工作空间**

工作空间是DataV-Board 7.0进行项目开发及管理的基本单元，开通DataV-Board 7.0后，系统会生成一个默认的工作空间，您可直接使用。您也可选择创建多个工作空间，通过不同工作空间管理不同项目，实现项目隔离。详情请参见[新增工作空间](https://help.aliyun.com/zh/datav/create-a-workspace-1)。

**说明**

工作空间之间相互独立，可按需设置看板、组件配额，管理空间成员权限。详情请参见[配置工作空间](https://help.aliyun.com/zh/datav/configure-a-workspace-1)。

### （可选）步骤二：新建项目分组

项目分组用于对已创建的数据看板（包括PC端看板、移动端看板）进行归类。开通DataV-Board 7.0后，系统自动生成一个名为**未分组**的分组，创建的看板默认放在该分组下。您可根据业务情况创建不同分组，将同类看板添加至相同分组管理。详情请参见[项目分组管理](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/manage-project-groups)。

### 步骤三：准备数据

DataV-Board 7.0支持接入多种来源数据（例如，静态数据、CSV文件、API、RDS for MySQL等各类数据库），您需先将各类数据创建为DataV的数据源，以便DataV通过该数据源访问相应数据，进行后续看板展示。

**说明**

-   静态数据直接添加至看板即可，不涉及创建数据源操作。
    
-   DataV-Board 7.0数据看板支持的数据源类型，请参见[数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/data-source/)。
    
-   您也可将`本地数据表`或`已创建数据源中的数据表`创建为[数据集](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/dataset-management)，用于后续看板展示。目前仅支持将RDS for PostgreSQL、RDS for MySQL、兼容MySQL数据库、实时数仓 Hologres、AnalyticDB for MySQL创建为数据集。
    

1.  配置数据源白名单。
    
    为确保DataV能正常访问您的数据源数据，在创建数据源之前，需先将`数据源所在区域的白名单IP地址`添加到您的数据源白名单中。不同地域、不同网络类型的白名单地址，请参见[配置数据库白名单](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configure-a-database-whitelist-for-datav-7)。
    
2.  创建数据源，详情请参见[数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/data-source/)。
    

## **创建及展示看板**

### **步骤四：创建数据看板**

您可按需选择合适的创建方式：

-   [基于内置模板创建](https://help.aliyun.com/zh/datav/create-a-data-dashboard-by-using-a-template)：平台提供了多种内置场景模板，可直接使用。
    
-   [基于空白看板创建](https://help.aliyun.com/zh/datav/create-a-data-dashboard-by-using-a-canvas)：可使用空白画布按需设计看板内容。
    
-   [使用AI智能生成](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-ai-to-intelligently-generate-pc-side-kanban)：可通过界面对话方式描述您的需求，AI助手将根据需求设计符合要求的看板。
    
    **说明**
    
    仅支持使用AI方式创建PC端看板。
    

### 步骤五：编辑数据看板

数据看板由各种组件构成，您需将所需组件添加至画布进行编辑，包括配置组件样式、接入业务数据进行展示等。DataV-Board 7.0为您提供了默认的内置组件，若内置组件无法满足您的业务需要，您也可通过[组件包](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-package/)、[区块](https://help.aliyun.com/zh/datav/block-overview)、[设计资源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/overview-of-design-resources)、[创建三维城市](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/create-a-3d-city)等方式自定义组件。

**说明**

-   更多画布的编辑操作，请参见[PC端画布编辑器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/canvas-editor-on-pcs/)、[移动端画布编辑器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/canvas-editor-on-mobile-devices/)。
    
-   PC端和移动端看板支持的组件类型、数据源类型不同，且不同组件及数据源的配置存在差异，具体请参考实际界面。如下步骤操作以PC端示例，移动端与PC端部分界面词存在差异，但配置思路类似。
    

1.  编辑组件样式。
    
    添加目标组件至画布，在右侧**样式**页签，按需配置组件的颜色、图表边距、坐标等样式。详情请参见[PC组件](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widgets-on-pcs/)、[移动组件](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widgets-on-mobile-devices/)。
    
2.  配置数据源。
    
    单击相应组件，在右侧**数据源**页签，按照界面指引添加相应[数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/data-source/)，将数据接入组件进行展示。
    
    -   可通过**代码方式**或**可视化方式**适配组件数据。详情请参见[组件数据源配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-data-source-configuration)。
        
    -   可使用过滤器自定义过滤代码，实现数据结构转换、数据筛选，并进行简单的计算，详情请参见[过滤器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/manage-filters-1)；也可使用[过滤器引用全局变量](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-global-variables#6215b1f0d7p0f)。
        
3.  （可选）高级配置。
    
    单击相应组件，在右侧**高级**页签，配置组件的全局变量或交互事件。
    
    -   [全局变量](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-global-variables)：用于定义全局参数，可在目标组件中关联，实现组件间的参数传递，进行组件交互。例如，图表联动、自定义字段等。
        
        **说明**
        
        仅PC端看板涉及配置全局变量。
        
    -   [交互事件](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)：用于定义当触发某事件时，进行指定组件间的交互。例如，在柱状图中，**当图例被点击时**，导入某字段的数据。
        
4.  （可选）蓝图配置。
    
    可通过[蓝图编辑器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/what-is-blueprint-editor-1)使用可视化连线方式，定义组件之间的交互关系及行为逻辑。例如，实现不同组件间数据合并、分发等。
    

### **步骤六：发布及分享**数据看板

1.  发布看板。
    
    数据看板编辑完成后，需执行发布操作。发布成功后会生成相应看板链接，通过该链接可访问看板。详情请参见[发布数据看板](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/manage-a-data-dashboard#59ef26706323x)。
    
    **说明**
    
    每次发布完成后，可通过[快照管理](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/publish-and-snapshot-management#c0fee50065jlh)同步当前发布内容。后续可通过快照返回目标看板版本进行编辑。
    
2.  分享看板。
    
    数据看板发布完成后，您可将看板的二维码、链接分享给其他用户使用。同时，支持设置访问密码，支持进行Token验证，支持按需配置访问白名单。详情请参见[分享信息](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/publish-and-snapshot-management#d387bed0b9wqc)。
    

### **步骤七：投屏展示**数据看板

数据看板发布后，您可进入[可视化演播厅](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/features)，将所需看板进行投屏展示。

1.  创建演示预案。
    
    可通过创建演示预案，将所需展示的数据看板按顺序排列，用于后续进行整体展示。详情请参见[新建预案](https://help.aliyun.com/zh/datav/create-presentations)。
    
2.  投屏演示预案。
    
    演示预案创建完成后，可通过投屏将预案以幻灯片的形式展示在大屏幕上。投屏操作支持设置访问密码及设置轮播效果。详情请参见[投屏预案-网页版](https://help.aliyun.com/zh/datav/mirror-the-screen-of-presentations-on-the-web-page)、[投屏预案-客户端版](https://help.aliyun.com/zh/datav/mirror-the-screen-of-presentations-on-the-client)。
    

## **后续步骤**

了解DataV-Board 7.0的操作流程后，您可参考如下内容进行实操体验。

-   [模板搭建数据看板](https://help.aliyun.com/zh/datav/datav-7-0/getting-started/use-a-template-to-create-a-dashboard)
    
-   [空白画布搭建数据看板](https://help.aliyun.com/zh/datav/datav-7-0/getting-started/use-a-canvas-to-create-a-dashboard)