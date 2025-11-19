# 蓝图编辑器常见案例教学 %{#387437}% 

针对蓝图编辑器常见的问题，本文通过理论介绍及实操演示提出问题的解决方法。

## **视频链接**

DataV小课堂直播视频：[蓝图编辑器常见案例教学直播视频使用教程](https://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/d/ud/345576104195.mp4)。

## 案例概览

### 请求数据接口时动态传递参数 

本案例是在请求数据接口时传递动态参数，实现Tab列表和数字翻牌器的数据联动。![案例一](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3038821461/p378448.png)

配置案例交互操作步骤如下，具体实操请参见[请求数据接口时动态传递参数](#title-lp3-hdk-s6p)。

**说明** 

在做以下步骤前，您需要先在画布编辑器中添加完成组件并配置好组件的数据源。

1. 在画布编辑器中添加**Tab列表**和**数字翻牌器**组件，并且配置数据源。其中动态参数需要用冒号+参数名的形式配置。
2. 将需要配置交互的组件导入到蓝图编辑器，将**当点击Tab时**与翻牌器的**请求数据接口**相连，并且在串行节点中写入处理方法。![处理方法](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3038821461/p378474.png)

**说明**  
当单击Tab时，触发翻牌器的数据请求，翻牌器将添加参数`year:data.content`，重新请求数据。例如 `data.content`为`2020`，请求API的`post`参数变为`year:2020`，`sql`的条件为`where year=2020`。

### 动态控制组件样式

本案例是通过蓝图实现动态控制数字翻牌器组件样式，当数值大于60时显示红色，否则显示绿色。![案例二](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3038821461/p378480.png)

配置案例交互操作步骤如下，具体实操请参见[动态控制组件样式](#title-rm2-36n-vqg)。

**说明** 

在做以下步骤前，您需要先在画布编辑器中添加完成组件并配置好组件的数据源。

1. 在A组翻牌器配置面板中将组件配置复制，根据层级关系，观察配置查看需要修改的字段，本案例中需要修改的是`value`字段。
2. 将需要配置交互的组件导入到蓝图编辑器，将翻牌器中**当数据接口请求完成时**与串行数据处理节点中的**更新翻牌器配置**相连，并在串行节点中写入处理方法。![写入方法](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4038821461/p378490.png)

**说明**  
翻牌器在请求完成后，判断数据中的`value`值，如果大于60则更新数字颜色为红色，否则为绿色。  
![判断方法](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4038821461/p378491.png)

### 多个组件数据累加展示

本案例是通过蓝图实现用名称为total的数字翻牌器展示A、B两个数字翻牌器实时数据相加的结果。![案例三](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4038821461/p378492.png)

配置案例交互操作方法如下，具体实操请参见[ 多个组件数据累加展示](#title-kdg-osb-n1s)。

您需要先在画布编辑器中添加完成组件并配置好组件的数据源，然后将需要配置交互的组件导入到蓝图编辑器，将组件之间的交互按照如下图相连，并在串行节点中写入处理方法。![组件累加展示蓝图配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0268631461/p379628.png)翻牌器A序列执行节点处理方法：![翻牌器A处理方法](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4038821461/p378609.png)翻牌器B序列执行节点处理方法：![翻牌器B处理方法](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4038821461/p378610.png)

**说明** 
* 数字翻牌器A、B当数据接口请求完成时，通过序列执行第一个节点分别保存页面临时变量`data_a`和`data_b`。
* 第二个节点的处理方法实现将当前数字翻牌器请求到的数据与另外一份保存的数据相加后，导入名称为total的数字翻牌器组件接口中。

## 实操演示

### 请求数据接口时动态传递参数

1. 在画布编辑器中添加**Tab列表**和**数字翻牌器**组件，并配置组件的数据源。  

**说明**  
  * 输入动态参数需要调试，您可以直接在URL中更改后缀预览。
  * 如果出现报错是由于编辑页面参数没有带上，您可以直接忽略。
2. 组件配置完成后 ，在左侧图层中选择**Tab列表**和**数字翻牌器**组件，右键单击**导出到蓝图编辑器**。![导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4038821461/p378856.png)
3. 在蓝图编辑器页面，从左侧导入节点栏中选择组件节点，单击添加至蓝图编辑器画布中，并添加一个**串行数据管理**节点，按照下图进行连线。同时，您需要为串行数据处理节点设置动态传参及请求数据接口的方法。![动态传参蓝图设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1268631461/p379632.png)动态传参的方法，请参见：  
```  
return { year：data.content };  
```  
请求数据接口的方法，请参见：  
```  
return { year：data.content };  
```
4. 配置完成后，您可以在连线上右键单击**记录日志**设置蓝图日志，并单击右上角调试预览![调试预览](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4038821461/p378868.png)图标，查看预览效果。![调试预览结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4038821461/p378869.png)
5. 如果您想查看**请求数据接口时动态传递参数**的详细方法，请参见：[如何在请求数据接口时传递动态参数](https://help.aliyun.com/document%5Fdetail/151285.html)。

### 动态控制组件样式

1. 在蓝图编辑器画布中，单击添加两个**串行数据处理**节点 ，按照如下图连线。并为串行数据处理节点添加方法。![控制组件样式蓝图连线](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1268631461/p379636.png)  
代码示例如下，可以用于在数据接口请求完成时根据`value`值大小配置数字颜色样式。  
```  
return data[0].value - 40 >= 0 ? {  
  "counter": {  
    "numbers": {  
      "textStyle": {  
        "color": "#18F8B8"//将要修改的数据颜色  
      }  
    }  
  }  
} : {  
    "counter": {  
      "numbers": {  
        "textStyle": {  
          "color": "#00C0FF"  
        }  
      }  
    }  
  }  
```
2. 如果您想查看**动态控制组件样式**的详细方法，请参见：[如何动态控制组件样式](https://help.aliyun.com/document%5Fdetail/151280.html)。

###  多个组件数据累加展示

1. 在画布编辑器页面，添加一个**数字翻牌器**组件并命名为**total翻牌器**，并右键单击组件，选择**导出到蓝图编辑器**。
2. 在蓝图编辑器页面左侧的**导入节点**栏，单击将**total翻牌器**节点添加到蓝图编辑器画布中。
3. 在蓝图画布编辑器中单击添加一个**全局节点**和**序列执行节点**，按照下图连线。设置页面临时变量的方法请参见：[全局节点](https://help.aliyun.com/document%5Fdetail/142628.html)。![数据累加展示蓝图配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1268631461/p379639.png)
4. 连线完成后，为序列执行节点设置方法。

  * 设置B翻牌器连接的序列执行节点。示例代码如下：  
  ```  
  return {  
    data:[  
      {  
        name:"data_b",  //变量名可自定义，不重名即可  
        value:data[0].value    ||    0  
      }  
    ]  
  };  
  ```  
  第二个处理方法示例代码如下：  
  ```  
  let data_a = getLocalValue('data_a')    ||    0;  
  let res = data && data.length !== 0 ? data[0].value + data_a : data_a  
  return [{ value: res }];  
  ```
  * 用同样的方法设置A翻牌器连接的序列执行节点。示例代码如下：  
  ```  
  return {  
    data:[  
      {  
        name:"data_a",  //变量名可自定义，不重名即可  
        value:data[0].value    ||    0  
      }  
    ]  
  };  
  ```  
  第二个处理方法的示例代码：  
  ```  
  let data_b = getLocalValue('data_b')    ||    0;  
  let res = data && data.length !== 0 ? data[0].value + data_b : data_b  
  return [{ value: res }];  
  ```
5. 蓝图交互配置完成后，您可以查看预览效果。![预览](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5038821461/p378971.png)

**说明**  
如果数据源比较多的时候，在DataV实现比较麻烦，您可以提前设置好数据源。
6. 如果您想查看**多个组件数据累加展示**的详细方法，请参见：[如何展示多个实时数据相加结果](https://help.aliyun.com/document%5Fdetail/151284.html)。