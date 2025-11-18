  使用蓝图编辑器通过柱状图筛选轮播列表数据-DataV数据可视化-阿里云

本文以**柱状图**控制**轮播列表**组件数据更新为例，实现数字大屏中的自定义数据筛选。

## **效果展示**![筛选_Trim](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0181770861/p620499.png)

## **操作步骤**

1.  登录[DataV控制台](https://datav.aliyun.com/)。
2.  选择任一可视化应用，单击编辑，进入画布编辑器页面。
    
3.  添加**柱状图**组件和**轮播列表**组件到画布中。
    
4.  单击轮播列表组件，选择配置面板，修改**全局>表格行数**为2，打开**空值隐藏行**开关，修改自定义列标签的**列字段名**和**列显示名**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0181770861/p620211.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0181770861/p620214.png)
    
    **说明**
    
    -   列字段名-列显示名：name-名称。
        
    -   列字段名-列显示名：value-指标。
        
    -   列字段名-列显示名：city-城市。
        
    
5.  单击柱状图组件，选择数据面板，修改静态数据。
    
    ```
    [
      {
        "x": "上海",
        "y": 100,
        "colorField": 100
      },
      {
        "x": "深圳",
        "y": 75,
        "colorField": 200
      },
      {
        "x": "合肥",
        "y": 30,
        "colorField": 300
      },
      {
        "x": "成都",
        "y": 65,
        "colorField": 400
      },
      {
        "x": "安徽",
        "y": 50,
        "colorField": 500
      },
      {
        "x": "北京",
        "y": 70,
        "colorField": 600
      }
    ]
    ```
    
6.  全选组件，右键导出到蓝图编辑器中。
    
7.  在**逻辑节点**下选择**全局节点**添加至蓝图画布中，做自身连接。修改处理方法为**设置轮播数据**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0181770861/p620222.png)
    
8.  配置串行数据处理节点处理方法。
    
    ```
    return {
      data: [{
        name: "carouselData",
        value: [
          {
            "name": "上海项目1",
            "value": 111,
            "type": "上海"
          },
          {
            "name": "上海项目2",
            "value": 222,
            "type": "上海"
          },
          {
            "name": "深圳项目1",
            "value": 111,
            "type": "深圳"
          },
          {
            "name": "深圳项目2",
            "value": 222,
            "type": "深圳"
          },
          {
            "name": "合肥项目1",
            "value": 111,
            "type": "合肥"
          },
          {
            "name": "合肥项目2",
            "value": 222,
            "type": "合肥"
          },
          {
            "name": "成都项目1",
            "value": 111,
            "type": "成都"
          },
          {
            "name": "成都项目2",
            "value": 222,
            "type": "成都"
          },
          {
            "name": "安徽项目1",
            "value": 111,
            "type": "安徽"
          },
          {
            "name": "安徽项目2",
            "value": 222,
            "type": "安徽"
          },
          {
            "name": "北京项目1",
            "value": 111,
            "type": "北京"
          },
          {
            "name": "北京项目2",
            "value": 222,
            "type": "北京"
          }
        ]
      }]
    }
    ```
    
9.  将柱状图组件和轮播列表组件添加至蓝图画布中，连接组件。修改处理方法为数据筛选。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0181770861/p620243.png)
    
10.  配置串行数据处理节点处理方法。
     
     ```
     const allData = getLocalValue("carouselData");
     return allData ? allData.filter(d => {
       return d.type == data.x;
     }) : [];
     ```
     
11.  单击页面右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0181770861/p620256.png)图标，预览展示结果。![筛选_Trim](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0181770861/p620499.png)