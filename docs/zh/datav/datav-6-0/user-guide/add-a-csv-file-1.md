# 添加CSV文件 %{#59775}% 

本文档介绍在DataV中添加CSV文件的方法。

## 前提条件

已准备好待添加的CSV文件数据源。

## 操作步骤

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在**我的数据**页签中选择**数据源管理**，单击**添加数据**。
3. 从**类型**列表中，选择**CSV文件**。
4. 上传CSV文件。

**说明**  
CSV文件大小不能超过**512KB**，暂时不支持上传超出512KB的CSV文件。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7724817661/p509968.png)
5. 单击**确定**，完成数据源添加。

## **常见问题**

* CSV文件格式问题  
需要将原始Excel文件或其他数据格式的文件另存为CSV文件，不能通过直接修改后缀改变CSV文件格式，会出现错误。
* DataV控制台兼容问题  
由于谷歌浏览器对HTTP协议限制，需要使用HTTPS网址打开DataV控制台，再添加CSV文件数据源。

## **静态数据示例**

```
[
  {
    "x": "1月",
    "y": 2,
    "s": "降水量"
  },
  {
    "x": "1月",
    "y": 2.6,
    "s": "蒸发量"
  },
  {
    "x": "2月",
    "y": 4.9,
    "s": "降水量"
  },
  {
    "x": "2月",
    "y": 5.9,
    "s": "蒸发量"
  },
  {
    "x": "3月",
    "y": 7,
    "s": "降水量"
  },
  {
    "x": "3月",
    "y": 9,
    "s": "蒸发量"
  },
  {
    "x": "4月",
    "y": 23.2,
    "s": "降水量"
  },
  {
    "x": "4月",
    "y": 26.4,
    "s": "蒸发量"
  },
  {
    "x": "5月",
    "y": 25.6,
    "s": "降水量"
  },
  {
    "x": "5月",
    "y": 28.7,
    "s": "蒸发量"
  },
  {
    "x": "6月",
    "y": 76.7,
    "s": "降水量"
  },
  {
    "x": "6月",
    "y": 70.7,
    "s": "蒸发量"
  },
  {
    "x": "7月",
    "y": 135.6,
    "s": "降水量"
  },
  {
    "x": "7月",
    "y": 175.6,
    "s": "蒸发量"
  }
]
```

## **数据格式示例**

CSV文件中的第一行x，y，s，表示字段名，第二行开始表示字段值。以上文中的静态数据为例，对应到 CSV的文件内容如下。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5050456761/p562957.png)

## **案例演示**

以**折线图**为例，我现在有一份1月到7月的每月降水量和蒸发量的CSV数据，请参见如下步骤导入DataV。

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在**我的可视化**页面，选择任一可视化应用，单击**编辑**。
3. 在画布编辑器页面，添加**折线图**组件。
4. 选择数据源面板，单击配置数据源。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9484356761/p562850.png)
5. 设置数据源类型为**CSV文件**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9484356761/p562851.png)
6. 在选择已有数据源单击**新建**，添加CSV数据源。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9484356761/p562852.png)
7. 将本地的**降水量和蒸发量.csv**文件导入系统中，单击**确定**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9484356761/p562857.png)
8. 在**选择已有数据源**中选择已导入的CSV文件的数据源，此时发现图表无内容显示。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7625356761/p562868.png)
9. 修改`colorField`字段映射为字段`s`。如图所示，图表正常显示。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8484356761/p562861.png)