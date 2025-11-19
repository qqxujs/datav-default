<!DOCTYPE html> 

本文示例将云数据库RDS MySQL存储的用户数据接入DataV-Board 7.0（数据看板），通过空白画布创建PC端数据看板，使用折线图、轮播列表、通用标题等组件进行数据适配及可视化展示分析，实现企业经营大屏的搭建。

## **概述**

**说明** 

示例数据仅用于展示及体验产品功能，实际业务使用时，请以您的真实数据为准。

### **架构说明**

按照本文提供的配置完成部署后，搭建的运行环境将与下图的架构相似。实际部署时，您也可根据具体的资源规划调整配置。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0968205371/CAEQUBiBgIDNhta3lBkiIGVjNDdkZDg3YTM3MTQ3Y2VhYmYyYTU3ODA1ZGQwMjEw4684953_20241014110409.071.svg)

### **效果展示**

按照本文提供的配置完成部署后，将生成如下效果的数据看板。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9892409271/p859386.png)

**说明** 

数据看板涉及的配置较多，不同配置最终生成的看板存在差异，本文仅用于了解相关功能及操作流程，实际效果请以您的操作为准。

## **准备工作**

### **云数据库RDS MySQL侧**

1. [创建RDS MySQL实例](/zh/rds/apsaradb-rds-for-mysql/step-1-create-an-apsaradb-rds-for-mysql-instance-and-configure-databases)。  
示例在华东1（杭州）地域创建实例，且使用平台自动创建的专有网络及交换机。
2. 在实例中创建所需[数据库账号](/zh/rds/apsaradb-rds-for-mysql/step-1-create-an-apsaradb-rds-for-mysql-instance-and-configure-databases#dfcaa5aa632wq)及[数据库](/zh/rds/apsaradb-rds-for-mysql/step-1-create-an-apsaradb-rds-for-mysql-instance-and-configure-databases#c8c8beda5dwet)，并准备示例数据。  
本文示例创建内容如下：

  * 数据库账号：`user_test`。
  * 数据库名称：`mysqltest`。
  * 示例数据：在`mysqltest`数据库创建一个账单表`Bill`，并生成100条模拟账单数据，日期范围设定在`2023年1月1号~2023年1月10号`之间。  
  SQL语句如下。  
  ```  
  CREATE TABLE IF NOT EXISTS Bill (  
      `id` INT AUTO_INCREMENT PRIMARY KEY,  
      `bill_date` DATE NOT NULL COMMENT '账单日期',  
      `amount` DECIMAL(10, 2) NOT NULL COMMENT '金额'  
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='账单信息表';  
  DELIMITER ;;  
  CREATE PROCEDURE GenerateBillData()  
  BEGIN  
      DECLARE v_counter INT DEFAULT 1;  
      DECLARE v_random_date DATE;  
      DECLARE v_random_amount DECIMAL(10, 2);  
          
      WHILE v_counter <= 100 DO  
          SET v_random_date = DATE_ADD('2023-01-01', INTERVAL FLOOR(RAND() * 10) DAY);  
          SET v_random_amount = ROUND(RAND() * 1000, 2);  
              
          INSERT INTO Bill (bill_date, amount)  
          VALUES (v_random_date, v_random_amount);  
              
          SET v_counter = v_counter + 1;  
      END WHILE;  
  END;;  
  DELIMITER ;

-- 调用存储过程生成数据  
  CALL GenerateBillData();  
  ```
3. 配置白名单。  
为确保在DataV-Board 7.0创建数据源时能正常访问RDS MySQL实例，您需将RDS MySQL数据库所在地域的白名单IP地址，添加至实例白名单中。  
本文示例数据库部署在**华东1（杭州）**地域，且使用内网VPC网络，因此需添加的白名单为`100.104.70.0/24`。

**说明**  
可参考[配置数据库白名单](/zh/datav/datav-6-0/user-guide/configure-a-database-whitelist-for-datav-6)，查看各地域白名单地址。添加白名单操作，请参见[设置IP白名单](/zh/rds/apsaradb-rds-for-mysql/configure-an-ip-address-whitelist-for-an-apsaradb-rds-for-mysql-instance)。

您也可根据业务需要配置实例及数据库信息。

### **DataV-Board 7.0侧**

1. [开通DataV-Board服务](/zh/datav/datav-7-0/getting-started/activate-datav-1)。
2. [创建RDS MySQL数据源](/zh/datav/datav-7-0/user-guide/add-an-apsaradb-rds-for-mysql-data-source)。  
数据源的核心参数配置如下。

|    **参数**    |    **描述**    |
|    ----    |    ----    |
|    **类型**    |    选择RDS MySQL，网络类型选择**内网**的**华东1**（即杭州地域）。    |
|    **名称**    |    自定义数据源名称。本文示例为mysql\_data。    |
|    **VPC ID**及**VPC实例ID**    |    VPC ID：RDS MySQL实例所绑定的专有网络ID。VPC实例ID：RDS MySQL实例ID。您可进入[RDS实例列表](https://rdsnext.console.aliyun.com/rdsList/basic?spm=a2c4g.11186623.0.0.4c5d4fa0BACSmz)查看。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6951214271/p828085.png)    |
|    **域名**及**端口**    |    域名：RDS MySQL实例所绑定专有网络的内网地址。端口：RDS MySQL实例所绑定专有网络的内网端口。您可在[RDS实例列表](https://rdsnext.console.aliyun.com/rdsList/basic?spm=a2c4g.11186623.0.0.4c5d4fa0BACSmz)，单击目标实例名称，进入实例详情页，按下图步骤查看。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6951214271/p828086.png)    |
|    **用户名**及**密码**    |    数据库登录账号及密码。本示例数据库账号为user\_test，密码为您自定义的数据库密码。    |
|    **数据库**    |    单击**获取数据列表**，在下拉框选择已创建的数据库。本示例为mysqltest。    |

## **步骤一：创建数据看板**

1. 登录[DataV-Board 7.0控制台](https://datav.aliyun.com/v/console/)。
2. 创建数据看板。

  1. 单击**全部应用** \> **创建PC端看板**。
  2. 在空白看板上单击**创建看板**。
  3. 输入看板名称，使用默认的项目分组，单击**创建看板**。  
  本示例看板名称为`mysql_display`。

看板创建后，将自动跳转至画布编辑器页面，您可按需接入数据源并配置画布信息。

**说明** 

画布尺寸默认为1920\*1080，您可在画布编辑器右侧的**页面配置**区域按需调整。

## **步骤二：添加并配置组件**

您需先确定接入数据的组件，后续会通过该组件适配数据并配置展示样式。本文以折线图、轮播列表、通用标题组件为例，展示如何接入数据，具体操作如下。

**说明** 
* 本文以RDS MySQL数据示例，实际使用时，您可按需选择[数据源](/zh/datav/datav-7-0/user-guide/data-source/)。
* 本文配置的组件样式仅用作介绍功能，若组件样式不符合您的业务需要，您可参考[组件配置项说明](/zh/datav/datav-7-0/user-guide/configuration-items)修改。

### **使用折线图接入数据**

折线图可按需查看指定条件下的数据增长趋势。示例：查看`Bill`表中`2023年01月03日`相较`2023年01月02日`总账单金额的趋势。

1. 添加折线图至画布。  
在看板编辑页面，按下图步骤，添加折线图。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9892409271/p858936.png)  
单击折线图，即可在右侧组件编辑区域按需调整组件的样式、数据源等信息。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9892409271/p858943.png)
2. 接入数据源数据。

  1. 接入数据源并查看数据。  
  在**数据源**区域，选择已创建的数据源，并通过查询语句查看数据表的字段情况。示例配置如下：

    * 数据源类型：`RDS for MySQL`
    * 数据源名称：`mysql_data`
    * 查询语句：查看`Bill`表中`2023年01月01日`\~`2023年01月08日`每天的总账单金额。

**说明**  
      假设当天的账单金额会在后一天统计，因此查看`2023年01月01日`\~`2023年01月08日`的账单，实际显示为`2022年12月31日`\~`2023年01月07日`的账单。  
      SQL语句如下。  
      ```  
      SELECT  
          DATE(bill_date) AS 日期,  
          SUM(amount) AS 日总金额  
      FROM  
          Bill  
      WHERE  
          bill_date BETWEEN '2023-01-01' AND '2023-01-08'  
      GROUP BY  
          DATE(bill_date)  
      ORDER BY  
          日期;  
      ```  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9892409271/p859010.png)
  2. 使用过滤器适配数据源数据。  
  若您的数据表字段与组件字段不一致，需使用[过滤器](/zh/datav/datav-7-0/user-guide/filter-configuration-and-application/)自定义过滤代码，将数据源数据适配至组件中。  
  勾选**过滤器**，即可通过手动**新建**或**智能推荐**方式自定义过滤代码，配置完成后单击**保存**。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9892409271/p859011.png)  
  本文示例的过滤代码如下。  
  ```  
  var result = [];  
  for (var i = 0; i < data.length; i++) {  
    result.push({  
      x: data[i].日期,  
      y: data[i].日总金额,  
      colorField: "type1"  
    });  
  }  
  return result;  
  ```

    * X轴：展示购买日期。
    * Y轴：展示日总金额。
    * 字段颜色：定义为固定颜色`type1`。
3. 修改组件样式。  
配置组件X、Y轴字体为`15px`；并在折线图上显示Y轴对应的数值。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0968205371/p859385.png)

### **使用轮播列表接入数据**

轮播列表可动态展示数据表中的所有信息。示例：轮播`Bill`表中所有账单记录。

1. 添加轮播列表至画布。  
在看板编辑页面，按下图步骤，添加轮播列表。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9892409271/p858973.png)  
单击轮播列表，即可在右侧组件编辑区域按需调整组件的样式、数据源等信息。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9892409271/p858975.png)
2. 接入数据源数据。  
在**数据源**区域，选择已创建的数据源，并通过查询语句查看数据表的字段情况。示例配置如下：

  * 数据源类型：`RDS for MySQL`
  * 数据源名称：`mysql_data`
  * 查询语句：查看`Bill`表中所有账单记录，语句如下。  
  ```  
  select * from Bill;  
  ```  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9892409271/p859035.png)
3. 修改组件样式。  
由于RDS MySQL表需展示三个字段（id、bill\_date、amount）数据，因此我们需在组件样式中更改列标题，操作方法如下。

  * 列字段名：RDS MySQL数据表的字段名称，需将相应字段接入对应列。三个标签依次更改为”id、bill\_date、amount“。
  * 列显示名：轮播列表展示的列名称。三个标签依次更改为“用户ID、消费日期、金额”。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9892409271/p859073.png)

### **使用通用标题**

本文示例将通用标题作为数据看板的标题栏展示。

1. 在看板编辑页面，按下图步骤添加通用标题至画布。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9892409271/p859115.png)
2. 单击通用标题，即可在右侧组件编辑区域按需调整组件的样式、数据源等信息。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9892409271/p859117.png)  
示例配置样式如下。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9892409271/p859132.png)

## **步骤三：预览数据看板**

组件配置完成后，单击看板编辑页面右上角的预览，即可预览数据看板的效果。您也可在看板编辑页面，按需拖动组件，调整组件在数据看板中的位置、大小等布局信息。

示例生成的看板如下。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9892409271/p859386.png)

## **步骤**四**：发布及部署数据看板**

数据看板创建完成后，需将其[发布](/zh/datav/datav-7-0/user-guide/publish-and-snapshot-management)上线，部署至相关设备使用。

1. 单击看板编辑页面右上角的**发布**，选择**发布大屏**。
2. 获取看板访问信息并配置访问限制。  
发布后，您可在看板编辑页面右上角单击**已发布**，获取访问信息并配置访问权限。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9892409271/p859087.png)

  * 支持通过二维码、链接地址等方式访问。
  * 可按需配置访问权限（例如，密码验证、通过Token验证）。通常，如需与其他系统整合并控制访问权限，可开启Token验证。
  * 可在发布快照区域，查询看板发布版本，也可执行新增版本、回滚至历史版本等管理操作。
3. 获取看板访问信息后（例如，访问地址），您可将其投放至渲染主机、PC、手机等设备进行访问。

## 步骤五：投屏展示数据看板

数据看板发布后，您可进入[可视化应用中心](/zh/datav/datav-7-0/user-guide/features)，投屏展示看板。

1. 进入可视化应用中心。

  1. 登录[DataV-Board 7.0控制台](https://datav.aliyun.com/v/console/)。
  2. 在界面顶部导航栏，单击右侧的**可视化应用中心**。
2. 按下图操作创建演示预案并投屏展示。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9892409271/p859095.png)

## **相关文档**

* 更多看板的创建方式，请参见[使用模板创建PC端看板](/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)、[使用模板创建移动端看板](/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-a-mobile-device)、[使用AI智能生成PC端看板](/zh/datav/datav-7-0/user-guide/use-ai-to-intelligently-generate-pc-side-kanban#t2727273.html)。
* 更多看板的配置操作（例如，组件配置、蓝图应用、全局变量），请参见[可视化工作台](/zh/datav/datav-7-0/user-guide/visualization-console/)、[进阶教程](/zh/datav/datav-7/videos/advanced-tutorials/)。