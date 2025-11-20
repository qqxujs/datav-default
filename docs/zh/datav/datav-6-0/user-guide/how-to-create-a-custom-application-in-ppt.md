# 如何创建自定义PPT应用 %{#372542}% 

本教程主要以数据集为数据源，用分析模式来实现可交互的可视化应用。

## 视频链接

DataV小课堂直播视频：[数据源管理-自定义PPT应用](https://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/d/ud/353109523576.mp4)。

## 可视化应用直播案例功能说明

在可视化应用中，需要通过键盘的**↑**和**↓**方向键来控制**柱状图**的数据钻取、地图移动和饼图选中效果。按键盘的**←**方向键可重置可视化应用展示效果，还原到最开始的状态。![大屏功能说明](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6057469361/p360138.png)

## 可视化应用直播案例实际功能效果展示

您可以通过键盘上下键控制数据的整体切换，**地区**、**发货日期**、**类别/子类别**以及**利润率**随之发生切换。除此之外，继续通过键盘的上下键，您可以选择下钻，地图和柱状图组件等也会发生变化，同时您还可以单击重置键即键盘上的左键，重置可视化应用，回到初始状态。![功能效果展示](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6057469361/p365230.png)

## 配置数据源

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在控制台首页，单击**我的数据** \> **数据集管理**，选择您创建的数据源。![选择数据源](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6057469361/p365637.png)
3. 在**我的可视化**页面，单击**编辑**，进入到画布编辑器页面，由于时间关系，直播视频已经提前设置好组件的摆放位置和样式。![配置样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7991933371/p365927.png)
4. 单击选择**发货日期**对应的**柱状图**组件，配置数据源，详细配置方法请参见： [案例讲解：数据集组件生成-柱状图](/zh/datav/datav-6-0/user-guide/datav-6-0-dataset#task-2138931/section-jjr-fqo-2o0)。其中x字段配置为**发货日期**，并对其设置下钻，完成后分别由上往下依次设置粒度为**年**、**月**、**日**，对**年**的发货日期字段设置**权重**及**排序**效果；y字段设置为**销售额**。![发货日期柱状图图表配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6057469361/p365977.png)
5. 单击选择**类别/子类别**对应的**气泡图**组件，将x字段配置为**销售额**，y字段配置为**利润**，大小映射字段配置为**数量**，颜色映射字段配置为**类别**，形状映射字段配置为**子类别**后，将其形状配置为圆形。![类别子类别气泡图图表配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6057469361/p365979.png)
6. 单击选择**基础平面地图 3.0**组件，在**数据**面板中，将区域编号字段配置为**省/自治区**，设置下钻字段并配置为**城市**，将颜色映射字段配置为**销售额**。![地图图表配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6057469361/p365990.png)
7. 选择**地区**对应的**饼图**组件，将类字段配置为**地区**；值字段配置为**销售额**；颜色映射字段配置为**地区**。![地区饼图图表配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6057469361/p365992.png)
8. 选择**利润率TOP10城市**对应的**柱状图**组件，将x字段配置为**城市**；y字段配置为**利润率**；颜色映射字段配置为**利润率**，并设置排序为**降序**，将权重字段设置为**10**，将颜色字段设置为蓝色。![利润率TOP10图表配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6057469361/p365988.png)
9. 选择**利润率BOT10城市**对应的**柱状图**组件，将x字段配置为**城市**；y字段配置为**利润率**；颜色映射字段配置为**利润率**，并设置排序为**升序**，将权重字段设置为**10**，将颜色字段设置为红色。![利润率BOT10图表配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7057469361/p365989.png)

## 配置组件交互关系

直播案例内，组件在蓝图编辑器配置的所有动作和组件的关系连线请参见下图。

![蓝图编辑器设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7057469361/p367685.png)

1. 在画布编辑器右侧图层中选择您需要导入到蓝图编辑器的组件，右键单击选择**导出到蓝图编辑器**。
2. 单击画布编辑器左上角的![蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7057469361/p365902.png)图标，进入蓝图编辑器页面。单击**键盘**节点，在蓝图画布中添加一个**键盘**节点。选中**键盘**节点，并在右侧配置面板内的**其它配置**模块，单击![添加按键按钮](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7057469361/p365905.png)图标，添加一个新的按键，将**别名**配置项设置为向左。![添加按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7057469361/p365999.png)
3. 在蓝图编辑器画布中，您可以单击添加一个**全局节点**，将其记录到临时变量来控制当前所轮播的对象。单击添加**序列执行**节点，在节点右侧配置项内**其他配置**模块中添加方法，按照以下代码设置页面的临时变量。  
向上键：  
```  
let step = getLocalValue('step');  
```

**说明**  
设置页面的临时变量`step`并获取临时变量的步长。  
```  
if (typeof step === 'undefined') {  
  step = 0;  
} else {  
  step = step - 1;  
}  
```

**说明**  
判断临时变量`step`是否有值，若没有，则对其赋初始值；若有，说明已经操作过，则对临时变量实行减1的操作表示向上键。  
```  
return {  
  "data": [  
    {  
      "name": "step",  
      "value": step  
    }  
  ]  
};  
```

**说明**  
返回需要呈现的数据。  
向下键：  
```  
let step = getLocalValue('step');  
if (typeof step === 'undefined') {  
  step = 0;  
} else {  
  step = step + 1;  
}  
return {  
  "data": [  
    {  
      "name": "step",  
      "value": step  
    }  
  ]  
};  
```

**说明**  
您可以将向上键的代码复制粘贴到向下键中，但由于向下操作，需要将临时变量的值加1。  
向左键：  
```  
return {  
  "data": [  
    {  
      "name": "step",  
      "value": 0  
    }  
  ]  
};  
```

**说明**  
您可以将向上键的代码复制粘贴到向左键中，但由于向左操作，临时变量为最初始的状态，则直接返回初始值即可。
4. 临时变量设置完成后，单击添加一个触发相应动作的**序列执行**节点，您需要预先设置好需要展示的内容，并按照如下代码在节点右侧配置项内**其他配置**模块中进行设置。  
```  
  {  
    target: 'all',  
    action: 'drawBack',  
    "depth": 0,  
    "forceClear": true  
  }  
```

**说明**  
该段触发函数表示可视化应用最初始的位置，其中`target`表示当前触发的组件，`all`代表整体的组件，`depth`和`forceClear`表示回退。  
```  
{  
    target: 'region',  
    action: 'brush',  
    items: [{ type: '华东' }]  
  }  
```

**说明**  
该段触发函数表示饼图的选中，其中`action`对应的动作为选中，`items`表示选中的数据项。  
```  
  {  
    target: 'time',  
    action: 'drill',  
    id: "bar-basic_8qXv3",  
    items: [{ x: "2018" }]  
  }  
```

**说明**  
该段触发函数代表发货日期柱状图，`action`对应的动作为下钻，下钻到x轴中2018的数据。  
```  
{  
    target: 'region',  
    action: 'brush',  
    items: [{ type: '东北' }]  
  }  
```

**说明**  
该段触发函数表示饼图的选中，其中`action`对应的动作为选中，`items`表示选中的数据项。  
```  
 {  
    target: 'map',  
    action: 'drill',  
    id: "datav-2dmap-area_8z82o",  
    items: [{ "adcode-nvouqwi7": "黑龙江" }]  
  }  
```

**说明**  
该段触发函数表示基础平面地图，其中`action`对应的动作为下钻，由于地图具有多个子组件的特殊性，需要`id`进行区分。

  * `id`参数的获取：在画布编辑器页面，打开浏览器控制台，单击**区域热力层**，查看组件ID。![查看组件id](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7057469361/p366182.png)
  * `items`传递参数的获取：在组件分析模式下的**数据响应结果**中查询。![adcode的获取](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7057469361/p366186.png)  
```  
let step = data.step;  
```

**说明**  
获取当前步长的状态。  
```  
return steps[step - (steps.length * Math.floor(step / steps.length))];  
```

**说明**  
您可以通过该函数进行计算，在数组范围内返回对应的对象。
5. 单击添加一个**多路判断**节点，根据`action`判断触发条件，分为三种情况，在节点右侧配置项内**其他配置**模块中添加三种方法。

  * 第一种：判断`action`是否等于下钻。  
  ```  
  return data.action === 'drill';  
  ```  
  ![下钻函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7057469361/p366236.png)
  * 第二种：判断`action`是否等于回退。  
  ```  
  return data.action === 'drawBack';  
  ```  
  ![回退函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7057469361/p366242.png)
  * 第三种：判断`action`是否等于选中。  
  ```  
  return data.action === 'brush';  
  ```  
  ![选中函数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7057469361/p366243.png)  
三种方法添加完成后，对其它每一个组件复制粘贴该逻辑节点的设置，在蓝图编辑器画布中添加一个**分支判断**节点，根据多路节点传递的参数，在画布中将对应的方法和组件动作连接。
6. 您可以为每一个组件设置方法，共有六种，并将组件与对应的**多路判断**节点连接起来。

  * 第一种：利润  
  ```  
  return data.target === 'top';  
  ```  
  ![top](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7057469361/p366253.png)
  * 第二种：利润率  
  ```  
  return data.target === 'bot';  
  ```  
  ![bot](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8057469361/p366255.png)
  * 第三种：饼图  
  ```  
  return data.target === 'region';  
  ```  
  ![region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8057469361/p366257.png)
  * 第四种：地域分布  
  ```  
  return data.target === 'map';  
  ```  
  ![map](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8057469361/p366260.png)
  * 第五种：发货日期  
  ```  
  return data.target === 'time';  
  ```  
  ![time](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8057469361/p366261.png)
  * 第六种：气泡图  
  ```  
  return data.target === 'bubble';  
  ```  
  ![bubble](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8057469361/p366262.png)
7. 单击蓝图编辑器右上角的**调试预览**处，打开**蓝图日志&报错**，在蓝图**调试预览**页，通过键盘的上下按键查看运行的效果。

**说明**  
如果您在分析器的**交互**面板中，设置选中了**触发其它组件联动**（通常默认为全部选中状态），那么当一个组件被触发时，其它组件也会联动触发。
8. 在画布编辑器中将**基础平面地图 3.0**组件导出到蓝图编辑器，您可以参见以下代码，通过为地图组件设置坐标来控制地图移动，如果没有设置，会出现地区移动时地图没有移动的情况。![控制组件移动](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8057469361/p367691.png)

**说明**  
本案例中设置的变量`step`和之前设置的`step`保持一致，均有五个对象。  
```  
const steps = [  
  {  
    "zoom": 4.2,  
    "lng": 107.5,  
    "lat": 38.3,  
    "duration": 1  
  }  
```

**说明**  
全国视角下的坐标。  
```  
{  
    "zoom": 5.5,  
    "lng": 117.8,  
    "lat": 31.6,  
    "duration": 1  
  }  
```

**说明**  
华东地区的坐标。  
```  
 null,  
```

**说明**  
此处为柱状图下钻到2018时的数据区域，不需要控制地图移动，所以显示置空。  
```  
 {  
    "zoom": 5.3,  
    "lng": 121.8,  
    "lat": 46.4,  
    "duration": 1  
  }  
]  
```

**说明**  
东北地区的坐标。  
```  
{  
    "zoom": 5.3,  
    "lng": 121.8,  
    "lat": 46.4,  
    "duration": 1  
  }  
]  
```

**说明**  
黑龙江地区的坐标。
9. 地图坐标设置完成后，在蓝图编辑器画布内添加一个**分支判断**节点，用于判断传入对象是否为空，再添加一个**定时器**节点，用于设置延迟触发，并且为每一个触发器设置需要延迟的时间。
10. 配置完成后，您可以单击画布右上角**预览**按键，预览可视化应用。![预览可视化应用](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8057469361/p367687.png)

## 设置图片动态轮播

1. 在本案例中的画布编辑器中，将名称为**组件**、**动作**以及**通用标题**下**单张图片**的组件，全部单击右键**导出到蓝图编辑器**。![导出组件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8057469361/p367693.png)
2. 在蓝图编辑器页面，单击添加一个**序列执行**节点，将每一个组件抛出的数据都连接到该节点上，用来接受组件下钻、选中或者变动时候的数据，实现文字展示的效果。
3. 在蓝图编辑器画布内，单击添加一个**序列执行**节点，按照以下代码设置开始和结束两个函数，将静态图片改为动态图片，再单击添加一个**定时器**节点，用于设置延迟4秒，让动态再回归到静态图片，以此来实现单张图片的滚动效果。![动态图片实现效果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8057469361/p367347.png)  
开始函数：该函数主要实现将静态图片转换为动态图片。  
```  
return { "imageType": "bitmap", "background-image": "//cdn-upload.datav.aliyun.com/upload/download/1626663502030-23_00000_iSpt.png", "vectorImage": "https://img.alicdn.com/tfs/TB1nCWxMbH1gK0jSZFwXXc7aXXa-251-64.svg", "vectorFill": "#2483FF", "repeat": "no-repeat", "radius": 0, "inner-style": {}, "urlConfig": { "url": "", "ifBlank": false }, "cursor": true };  
```  
结束函数：该函数主要实现将动态图片转换为静态图片。  
```  
return { "imageType": "bitmap", "background-image": "//cdn-upload.datav.aliyun.com/upload/download/1626663502030-23_00000_iSpt.png?x-oss-process=image/resize,w_480,h_270,m_lfit", "vectorImage": "https://img.alicdn.com/tfs/TB1nCWxMbH1gK0jSZFwXXc7aXXa-251-64.svg", "vectorFill": "#2483FF", "repeat": "no-repeat", "radius": 0, "inner-style": {}, "urlConfig": { "url": "", "ifBlank": false }, "cursor": true };  
```

**说明**  
通过两个函数以及定时器的延迟触发功能，实现静态图片的滚动效果。
4. 在蓝图编辑器画布中，单击添加一个**序列执行**节点，用于实现直播案例内**组件**图片的数据导入。

**组件**：获取组件名可参考以下代码。  
```  
const { alias, brushes, drillStack } = data;  
const brushStr = Object.values(brushes).map(({ selections }) => {  
  return selections && selections[0].values[0];  
}).find(d => !!d);  
drillStr = drillStack.map(d => d.fields[0].values[0]).join('>');  
return [{  
  value: (brushStr    ||    drillStr) ? alias.slice(6) : '无',  
}];  
```

**动作**：设置动作可参考以下代码。  
```  
const { alias, brushes, drillStack } = data;  
const brushStr = Object.values(brushes).map(({ selections }) => {  
  return selections && selections.map(d => d.values[0]).join('X');  
}).find(d => !!d);  
drillStr = drillStack.map(d => d.fields[0].values[0]).join('>');  
const str = brushStr && `选择 ${brushStr}`    ||    drillStr && `下钻 ${drillStr}`;  
return [{  
  value: str    ||    '',  
}];  
```

**说明**  
通过这两个函数获取数据抛出的格式，然后通过使用键盘的上下键，可以在可视化应用展示页面，查看设置的效果。