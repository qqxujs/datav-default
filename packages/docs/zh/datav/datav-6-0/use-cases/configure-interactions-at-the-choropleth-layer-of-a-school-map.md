<!DOCTYPE html> 

本文档为您介绍当鼠标划过地图的区域热力层子组件时，切换展示当前区域对应的学校数据的方法。

## 前提条件

完成[配置学区地图单选框交互](https://help.aliyun.com/zh/datav/datav-6-0/use-cases/configure-interactive-radio-buttons-for-a-school-map#task-1681262)操作，本文档将在其基础上继续添加节点和连线。

## 背景信息

本文档包括以下两个场景的配置。 
* [切换展示学校基本信息](#section-ktq-hht-0ya)。
* [切换展示学校对应的学区房信息](#section-r1k-yws-fm6)。

## 切换展示学校基本信息

需要实现的交互：鼠标滑过学校区域时，在可视化应用左下角切换展示学校的基本信息，包括学校的名称、地址和属性。

实现方案：划过地图的区域热力层子组件时，获取当前区域内对应学校的全量数据，将数据字段导入对应的组件中，并显示在可视化应用左下角。

1. 在画布编辑器图层栏内，选中左侧学校信息弹窗-L下的单张图片、name、children、address和type组件，右键单击选择导出到蓝图编辑器。  
![学校信息弹窗-L下的节点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0228135361/p55425.png)
2. 在画布编辑器页面左上角，单击蓝图编辑器图标（![蓝图编辑器图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3571888951/p67020.png)），切换到蓝图编辑器配置页面。
3. 在蓝图编辑器页面，将左侧学校信息弹窗-L下的单张图片、name、children、address和type组件节点拖至画布中。
4. 将公办小学的鼠标移入区域触发事件分别与上一步中添加的五个节点的导入数据接口动作连线。
5. 连线完成后，每条连线中间会自动添加一个串行数据处理节点，将节点分别命名为logo、name、children、address和type。  
具体操作方法请参见[什么是蓝图编辑器](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/what-is-blueprint-editor#task-2517085)。
6. 将公办初中的鼠标移入区域触发事件分别与上一步中添加的五个串行数据处理节点连线。  
连线完成后的结果如下图所示。![区域面与具体信息组件连线样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2237716951/p54872.png)
7. 配置串行数据处理节点。
  1. 右键单击名称为logo的串行数据处理节点，进入右侧配置面板，选择面板内其他配置栏下方的处理方法，单击右侧箭头打开脚本编辑区域。
  2. 在脚本编辑区域，输入代码，完成后单击保存。![logo转换器代码](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2237716951/p54904.png)  
  当前处理方法的示例代码如下。  
  ```  
  return [{  
    "img": data.logo  
  }];  
  ```  
  转换器从上游获取的data结构样式如下显示，转换器代码配置时候可按需选择。  
  ```  
  {  
    "id":xxx,  
    "name":"xxx小学",  
    "distance":"",  
    "public_or_private":"",  
    "is_primary":1,  
    "is_middle":0,  
    "is_nursery":0,  
    "is_high":0,  
    "location":"",  
    "address":"",  
    "logo":""  
  }  
  ```
  3. 使用同样的方式，配置其他四个串行数据处理节点，示例代码如下。

    * name的串行数据处理节点：  
      ```  
      return [{  
        "value": data.name  
      }];  
      ```
    * children的串行数据处理节点：  
      ```  
      let res = `${data.is_primary && data.is_primary == 1 ? "小学" : ""}${data.is_middle && data.is_middle == 1 ? "/初中" : ""}${data.is_high && data.is_high == 1 ? "/高中" : ""}${data.is_nursery && data.is_nursery == 1 ? "/幼儿园" : ""}`;  
      return [{  
        "value": `${res[0] == "/" ? res.substring(1) : res}`  
      }];  
      ```
    * type的串行数据处理节点：  
      ```  
      return [{  
        "value": `学校属性：${data.public_or_private}`  
      }];  
      ```
    * address的串行数据处理节点：  
      ```  
      return [{  
        "value": `学校地址：${data.address}`  
      }];  
      ```

## 切换展示学校对应的学区房信息

需要实现的交互：鼠标滑过学校区域时，在可视化应用右上角切换展示对应学区房成交量排行榜信息和房价趋势图。 

实现方案：划过地图的区域热力层子组件时，获取当前区域内对应学校的ID，从临时变量（全量学区数据）中过滤出对应数据并分发给组件，显示在可视化应用右上角。

1. 配置全局节点的临时变量。
  1. 在蓝图编辑器页面，将左侧的全局节点拖至画布中。
  2. 将全局节点的全部组件初始化完成事件和设置临时变量动作进行连线。
  3. 连线完成后，在连线中会自动添加一个串行数据处理节点，并命名为top3全量数据。  
  ![全局连线](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1228135361/p54913.png)
  4. 配置串行数据处理节点，设置临时变量的数据结构。  
  ![全局变量转换器代码](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3237716951/p54912.png)  
  数据结构包含以下内容：
    * 临时变量名（图示中①）
    * 学校对应的ID（图示中②）
    * 学区信息（图示中③）  
  可[下载上图中的示例代码](http://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/attach/30361/cn%5Fzh/1565771129688/data.json)。
2. 在蓝图编辑器页面左上角，单击画布编辑器图标（![画布编辑器图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8137716951/p135694.png)），切换到画布编辑器配置页面。
3. 在画布编辑器图层栏内，分别选中左侧成交量 \> NO.1、成交量 \> NO.2和成交量 \> NO.3文件夹下的name、average和count共九个组件，右键单击选择导出到蓝图编辑器。  
![成交量下的节点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1228135361/p135719.png)
4. 在画布编辑器页面左上角，单击蓝图编辑器图标（![蓝图编辑器图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3571888951/p67020.png)），再切换到蓝图编辑器配置页面。
5. 在蓝图编辑器页面，将左侧成交量 \> NO.1、成交量 \> NO.2和成交量 \> NO.3文件夹下的name、average和count共九个组件节点都拖至画布中。
6. 将公办小学或公办初中与上一步中拖入的任意一个组件节点连线。
7. 在连线中添加串行数据处理节点，并命名为top3。
8. 按照以下说明完成top3的串行数据处理节点的连线。

  * 将top3的串行数据处理节点分别与公办小学和公办初中的鼠标移入区域触发事件连接。
  * 将top3的串行数据处理节点分别与[第五步](#step-dae-fbu-fxs)中所有的name、average和count节点的导入数据接口动作连线。  
部分连线结果如下。![top3转换器连线结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3237716951/p55471.png)
9. 在上一步的九条连线中各添加一个串行数据处理节点，分别命名为1-name、1-count、1-average、2-name、2-count、2-average、3-name、3-count和3-average。  
连线完成后，结果如下图所示。![学区top3数据分发](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3237716951/p54936.png)
10. 配置串行数据处理节点。

  * 配置top3的串行数据处理节点。![top3转换器代码](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3237716951/p54937.png)  
  ```  
  let res = getLocalValue("sale_detail")[data.id] ? getLocalValue("sale_detail")[data.id].list : [];  
  return res;  
  ```
  * 配置1-name的串行数据处理节点。  
  ```  
  return data.length >= 1 ? [  
    {  
      value: `${data[0].district}区 ${data[0].name}`  
    }  
  ] : [{ value: "" }];  
  ```
  * 配置1-count的串行数据处理节点。  
  ```  
  return data.length >= 1 ? [  
    {  
      value: `成交量：${data[0].count}`  
    }  
  ] : [{ value: "" }];  
  ```
  * 配置1-average的串行数据处理节点。  
  ```  
  return data.length >= 1 ? [  
    {  
      value: `平均单价：${(data[0].sumPrice / data[0].area).toFixed(2)}万`  
    }  
  ] : [{ value: "" }];  
  ```
  * 配置2-name的串行数据处理节点。  
  ```  
  return data.length >= 2 ? [  
    {  
      value: `${data[1].district}区 ${data[1].name}`  
    }  
  ] : [{ value: "" }];  
  ```
  * 配置2-count的串行数据处理节点。  
  ```  
  return data.length >= 2 ? [  
    {  
      value: `成交量：${data[1].count}`  
    }  
  ] : [{ value: "" }];  
  ```
  * 配置2-average的串行数据处理节点。  
  ```  
  return data.length >= 2 ? [  
    {  
      value: `平均单价：${(data[1].sumPrice / data[1].area).toFixed(2)}万`  
    }  
  ] : [{ value: "" }];  
  ```
  * 配置3-name的串行数据处理节点。  
  ```  
  return data.length >= 3 ? [  
    {  
      value: `${data[2].district}区 ${data[2].name}`  
    }  
  ] : [{ value: "" }];  
  ```
  * 配置3-count的串行数据处理节点。  
  ```  
  return data.length >= 3 ? [  
    {  
      value: `成交量：${data[2].count}`  
    }  
  ] : [{ value: "" }];  
  ```
  * 配置3-average的串行数据处理节点。  
  ```  
  return data.length >= 3 ? [  
    {  
      value: `平均单价：${(data[2].sumPrice / data[2].area).toFixed(2)}万`  
    }  
  ] : [{ value: "" }];  
  ```

**说明** 此步骤使用到了蓝图编辑器的数据分发功能，详情请参见[如何通过合并请求进行数据分发](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/how-do-i-merge-requests-to-distribute-data#task-2340806)。