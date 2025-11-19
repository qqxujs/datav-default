<!DOCTYPE html> 

本文以**柱状图**控制**轮播列表**组件数据更新为例，实现数字大屏中的自定义数据筛选。

## **效果展示**![筛选_Trim](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0181770861/p620499.png)

## **操作步骤**

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 选择任一数据看板，单击**编辑**，进入画布编辑器页面。
3. 添加**柱状图**组件和**轮播列表**组件到画布中。
4. 单击**轮播列表**组件，选择**样式**面板，修改**全局>表格行数**为2，打开**空值隐藏行**开关，修改自定义列标签的**列字段名**和**列显示名**。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6890489861/p695951.png)![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6890489861/p695955.png)

**说明**  
  * 列字段名-列显示名：name-名称。
  * 列字段名-列显示名：value-指标。
  * 列字段名-列显示名：type-城市。
5. 单击**柱状图**组件，选择**数据源**面板，修改静态数据。  
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
6. 单击**柱状图**组件，选择**样式**面板，关闭**扫光动画**。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4116604961/p716240.png)
7. 单击左上角的![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6890489861/p695958.png)图标，进入蓝图。
8. 选择**全局变量**页签，单击**新建变量**。
9. 重命名变量名称为`x`，修改变量初始值。  
```  
[  
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
```
10. 添加两个图层节点和一个串行数据处理节点到蓝图主画布中，并连接节点。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6890489861/p696018.png)
11. 配置串行数据处理节点处理方法。  
```  
const allData = getLocalValue("x");//获取全局变量静态值  
return allData ? allData.filter(d => {  
  return d.type == data.x;//匹配柱状图x字段的值与全局变量静态值的type字段的值，实现数据筛选  
}) : [];  
```
12. 单击页面右上角的**预览**图标，预览展示结果。![筛选_Trim](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0181770861/p620499.png)