  配置showInPanel控制自定义组件控件的动态显隐-DataV数据可视化-阿里云

通过showInPanel字段，您可以定义对应控件（组件配置项）的显隐规则。

## 使用场景

当一些配置项在某些条件下为无效配置，但在其他条件下为有效配置时，可以使用`showInPanel`字段，控制自身是否在配置面板中显示。使用`showInPanel`字段，可以减少信息干扰。其中条件为配置中其他配置的值。例如，当数据类型从数值型切换为时间型时，数据格式配置项会显示出来，提供给您进行配置。

![showInPanel使用场景](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9457788951/p93121.png)

## 配置规则

```
{
  "conditions": [
    [ "path", "operator", "value" ],
    ...
  ],
  "logicalType": "logicalType"
}
```

参数

说明

`conditions`

配置条件，array类型。其中的每一项用长度为3的数组描述一个判断条件，数组中包含`path`、`operator`和`value`。

`path`

配置条件依赖的配置项的路径，支持绝对路径和相对路径：

-   绝对路径：从顶层根节点开始，使用`.`来拼接路径，例如`chart.legend`。
-   相对路径：从当前配置开始，用`.`来定位路径，例如`.type ..legend.show`。

`operator`

操作符，支持的类型包括：

-   `eq`：相等
-   `$ne`：不相等
-   `$gt`：大于
-   `$lt`：小于
-   `$gte`：大于等于
-   `$lte`：小于等于
-   `$in`：在数组中
-   `$nin`：不在数组中

`value`

配置项的值。

以[使用场景](#section-9fz-qsx-0nl)为例，当`dataType`与`time`同级，且`dataType`值等于`time`时，显示数据格式。`conditions`配置如下。

-   相对路径
    
    ```
    [".type", "$eq", "time"]
    ```
    
-   绝对路径
    
    ```
    ["options.axis.xaxis.type", "$eq", "time"]
    ```
    

`logicalType`

`conditions`定义了若干条件，`logicalType`则定义了条件之间的逻辑关系。可选值包括`$and`（与）和`$or`（或），默认为`$and`。

当`logicalType`为`$and`时，可以只配置`conditions`数组。例如当`b.switch`等于`true`并且`a.switch`不等于`false`时，显示对应的配置项，`showInPanel`配置如下。

```
[["b.switch", "$eq", true], ["a.switch", "$ne", false]]
```

## 示例一

例如配置简写如下。

```
{
  chart: {
   font: {},
   margin: {}
  },
  legend: {
   switch: {},
   color: {}
  }
}
```

想实现的效果：当switch等于true ，或者font不等于pingfang时，margin出现在⾯板中，否则不出现。

此时可以按照以下方式配置`showInPanel`字段：

-   绝对路径
    
    ```
    {
      conditions:  [[ 'legend.switch', '$eq', true ], [ 'chart.font', '$ne', 'pingfang' ]],
      logicalType: '$or'
    }
    ```
    
-   相对路径
    
    ```
    {
      conditions: [[ '..legend.switch', '$eq', true ], [ '.font', '$ne', 'pingfang' ]],
      logicalType: '$or'
    }
    ```
    

## 示例二

如下图所示，textA的显示条件为switchA为true或switchB为true。

![showInPanel示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9457788951/p93125.png)

```
{
  "a": {
    "type": "suite",
    "name": "suiteA",
    "children": {
      "switchA": {
        "type": "switch",
        "name": "switchA",
        "default": true,
        "col": 8
      },
      "textA": {
        "type": "text",
        "name": "textA",
        "default": "A",
        "col": 16,
        "showInPanel": {
          "conditions": [
            [
              "b.switchB",
              "$eq",
              true
            ],
            [
              "a.switchA",
              "$ne",
              false
            ]
          ],
          "logicalType": "$or"
        }
      }
    }
  },
  "b": {
    "type": "suite",
    "name": "suiteB",
    "children": {
      "switchB": {
        "type": "switch",
        "name": "switchB",
        "default": false,
        "col": 8
      },
      "textB": {
        "type": "text",
        "name": "textB",
        "default": "B",
        "col": 16
      }
    }
  }
}
```