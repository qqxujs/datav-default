# 添加TableStore数据源 %{#97683}% 

本文档介绍在DataV中添加TableStore数据源的方法，以及相关参数配置说明。

## 前提条件

已准备好待添加的TableStore数据源。

## 添加TableStore数据源操作步骤

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在**我的数据**页签中选择**数据源管理**，单击**添加数据**。
3. 从**类型**列表中，选择**TableStore**。
4. 填写TableStore相关信息。

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **名称**    |    数据源的显示名称，您可以自由命名。    |
|    **AK ID**    |    拥有TableStore访问权限的账号的AccessKey ID。    |
|    **AK Secret**    |    拥有TableStore访问权限的账号的AccessKey Secret。    |
|    **外网**    |    TableStore的[服务地址](/zh/tablestore/endpoints#concept-bsx-btj-bfb)，需要根据访问的TableStore实例来填写。    |
5. 信息填写完成后，单击**确定**，完成数据源的添加。  
新添加的数据源会自动显示在数据源列表中。

## 使用TableStore数据源操作步骤

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在**我的可视化**页面中，将鼠标移动至需要编辑的可视化应用上，单击**编辑**。

**重要**  
如果您的**我的可视化**页面内还没有创建任何可视化应用，请参见[使用模板创建PC端可视化应用](/zh/datav/datav-6-0/user-guide/use-a-template-to-create-a-pc-side-visual-application#task-2354861)，创建一个可视化应用。
3. 在画布编辑页面，单击画布中的某一组件。  
如果画布中还没有组件，请先添加组件，详情请参见[添加资产](/zh/datav/datav-6-0/user-guide/add-a-widget-1/#task-2375434)。
4. 在画布右侧的组件配置面板中选择**数据**，并单击**配置数据源**。
5. 在**设置数据源**页面中，选择**数据源类型**为**TableStore**。
6. 在**选择已有数据源**列表中选择配置完成的TableStore数据源。
7. 在**选择操作**列表中选择需要的操作。  
系统支持以下两种操作：  

  * `getRow`：对应TableStore的GetRow API，详情请参见[GetRow API 参考](/zh/tablestore/developer-reference/getrow#reference-oty-2q3-bfb)。
  * `getRange`：对应TableStore的GetRange API，详情请参见[GetRange API 参考](/zh/tablestore/developer-reference/getrange#reference3923)。
8. 在**选择操作**编辑框中输入查询语句。

  * 查询参数必须为JSON对象。
  * 选择`getRow`操作时，需要根据指定的主键读取单行数据。  
  参数格式如下。  
  ```  
  {  
      "table_name": "test",  
      "rows": {  
          "id": "1"  
      },  
      "columns": [  
          "id",  
          "test"  
      ]  
  }  
  ```

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    table\_name    |    待查询TableStore的表名称。    |
|    rows    |    行的主键。**重要** 当表中存在多个主键列时，设置的主键列个数与数据类型必须和数据表的主键列个数与数据类型一致。    |
|    columns    |    填写需要返回的列名。    |
  * 选择`getRange`操作，可读取指定主键范围内的数据，参数格式如下。  
  ```  
  {  
      "table_name": "test",  
      "direction": "FORWARD",  
      "columns": [  
          "id",  
          "test"  
      ],  
      "range": {  
          "limit": 4,  
          "start": {  
              "id": "InfMin"  
          },  
          "end": {  
              "id": "3"  
          }  
      }  
  }  
  ```

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    table\_name    |    待查询TableStore的表名称。    |
|    direction    |    读取方向。如果值为正序（FORWARD），则起始主键必须小于结束主键，返回的行按照主键由小到大的顺序进行排列。如果值为逆序（BACKWARD），则起始主键必须大于结束主键，返回的行按照主键由大到小的顺序进行排列。例如同一表中有两个主键A和B，A<B。如正序读取\[A, B)，则按从A至B的顺序返回主键大于等于A、小于B的行；逆序读取\[B, A)，则按从B至A的顺序返回大于A、小于等于B的数据。    |
|    columns    |    读取的列集合，列名可以是主键列或属性列。 如果不设置返回的列名，则返回整行数据。如果某行数据的主键属于读取范围，但是该行数据不包含指定返回的列，那么返回结果中不包含该行数据。    |
|    limit    |    数据的最大返回行数，此值必须大于0。 表格存储按照正序或者逆序返回指定的最大返回行数后即结束该操作的执行，即使该区间内仍有未返回的数据。    |
|    start    |    本次范围读取的起始主键和结束主键，起始主键和结束主键需要是有效的主键或者是由InfMin和InfMax类型组成的虚拟点，虚拟点的列数必须与主键相同。 其中InfMin表示无限小，任何类型的值都比它大；InfMax表示无限大，任何类型的值都比它小。**重要** 当表中存在多个主键列时，设置的主键列个数与数据类型必须和数据表的主键列个数与数据类型一致。start表示起始主键，如果该行存在，则返回结果中一定会包含此行。end表示结束主键，无论该行是否存在，返回结果中都不会包含此行。    |
|    end    |    |
9. 单击**预览数据源返回结果**，查看数据返回结果。

## 调用示例

1. 准备TableStore数据。

  1. 登录[TableStore控制台](https://otsnext.console.aliyun.com/)。
  2. 在TableStore控制台中创建实例和数据表，具体请参见[创建实例](/zh/tablestore/create-instances#task472)和[创建数据表](/zh/tablestore/create-tables#task-55212-zh)。  
  如下图创建了一个名称为**test**的实例，里面有3行数据，每行数据有两个列：`id(主键, integer)`和`test(string)`。![Table Store数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6028370261/p32810.png)
2. 配置数据源。
3. 查询参数。

  * 使用`getRow`方式查询。![getRow方式查询数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6028370261/p32812.png)  
  数据响应结果如下。![getRow查询响应结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0281594951/p32813.png)
  * 使用`getRange`方式查询。![getRange方式查询数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7028370261/p32814.png)  
  数据响应结果如下。![getRange查询响应结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7028370261/p32815.png)

**说明**  
在使用getRange方式查询参数的时候，过滤条件start为id：InfMin，end为id：3，最后查出来 id为1和2两行记录。因为getRange并不包含end的行，即不包含id为3的行。