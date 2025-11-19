<!DOCTYPE html> 

数据看板的交互事件让组件间有了互动，帮助用户更直观便捷地进行数据探查和分析。本文介绍组件高级面板下的交互事件和关联全局变量功能。

## **使用场景**

没有交互时，组件之间是独立的个体，无法进行组件的联动。当您需要如下类似场景时，您可使用组件交互配置增强数据看板能力。

* 点击开关，控制图层显示隐藏；
* 点击TAB标签，展示不同含义下的数据；
* 点击不同地图区域，透视表仅展示所点击省份的明细数据；
* 通过时间选择器选择时间，查看不同时间点的销量数据；

总之，当您希望控制展示数据看板的内容时，您需要组件的高级配置以实现组件间的交互。

## **相关概念**

**交互事件**

事件是用户或浏览器在网页上发生的某种行为，比如点击、鼠标移动、键盘按下、请求数据完成等。事件可以被监听，当事件发生时，可以触发某些代码来执行特定的操作。这些行为本身不做任何事情，它们只是一个信号，表示某个特定的时刻发生了一些事情。

**交互动作**

动作是指在事件发生时，组件所作出的响应。例如，当用户点击按钮（事件），图表显示（动作）。

**两者关系**

两者为触发与响应的关系，事件是触发器，动作是响应。事件发生时，动作随之执行。

**动作触发条件**

触发条件是事件和动作之间的一个判断条件。若设置了动作触发条件时，事件触发且满足动作触发条件时，动作才会执行。

## **原理说明**

组件的交互配置原理是用户主动触发交互事件，当系统判断满足**动作触发条件**时，**接收对象**即会响应事件，作出预期的**交互动作**；若不满意**动作触发条件**，则自动结束。用户也可不设置**动作触发条件**，**接收对象**将直接执行**交互动作**。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3532494371/CAEQURiBgID86OLGmhkiIGFmMjZlNTlhOTYwOTQ3M2E5ODllMWMwYjA5M2EwNTlh4689365_20240925113547.432.svg)

例如，点击Tab列表的第一个Tab时，柱状图组件显示，整体原理如下。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3532494371/CAEQURiBgICD9OHGmhkiIGMyMDQyMzFmN2U3NDRlNTNiNDIyOTJkZDI4OWI1YjBj4689365_20240925113547.432.svg)

## **操作流程**

选择数据看板中的组件（即**触发对象**），在组件的高级面板下配置**交互事件**、**动作触发条件**、**交互动作**、接收**对象**，即可完成交互事件的配置。可选择全局变量作为接收对象，实现全局变量的更新。

**重要** 

接收对象支持**图层组件**和**全局变量**。

### **前提条件**

* 已登录[DataV控制台](https://datav.aliyun.com)。
* 已进入[画布编辑器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/overview-of-canvas-editor-on-pcs)页面。

### 交互事件

## 组件间的交互

下面以点击Tab显示或隐藏柱状图为例，演示用交互事件实现组件间的交互。

![2024-09-26_14-59-20 (1)](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p854231.gif)

组件中的关系如下：

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3532494371/CAEQURiBgMDpudPGmhkiIDIxNDU4YWI2ZDRlMDQwY2ViNTNiZGViNDAwZDYyNmQw4689365_20240925113547.432.svg)
1. 添加**柱状图**组件和**Tab列表**组件（在**控件** \> **选择类**下）到画布中。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p853575.png)
2. 选中**Tab列表**组件后，修改Tab列表的数据源，将Tab改成显示和隐藏。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p853615.png)
3. 给**Tab列表**点击添加显示交互事件：当点击Tab的ID为1时，柱状图响应显示动作。

  1. 选中**Tab列表**，选择右侧**高级**面板，单击**交互事件**右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p787211.png)图标，给Tab点击添加交互事件。**启用事件**开关默认打开。
  2. 选择**事件类型**，添加**当点击Tab时**事件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p787317.png)

**说明**  
  单击事件右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p853579.png)图标，可以查看当前事件的出参说明。
  3. 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p787217.png)图标，打开**动作触发条件**开关。
  4. 单击**新增条件**，设置条件配置项当`id等于1`，即当点击的Tab是第一个Tab时。详细使用方法请参见[条件树使用说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/conditional-tree-instructions)。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p787318.png)

**说明**  
  您也可以切换至代码编辑模式，使用JavaScript语法进行配置。
  5. 单击**交互动作**右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p787211.png)图标，添加一个交互动作。
  6. 选择需要响应的组件和动作，设置为柱状图的显示。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p853609.png)

**说明**  
  单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p787283.png)图标，跳转至蓝图查看交互动作。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p787284.png)图标，查看当前动作的入参说明。  
  不同的动作交互动作的配置不同，请以实际为准。
4. 同理，再给**Tab列表**添加一个交互事件：当点击Tab的ID为2时，柱状图响应隐藏动作。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p853623.png)
5. 单击右上角**预览**，进行预览效果查看。点击显示Tab，柱状图则显示；点击隐藏Tab，柱状图则隐藏。
6. 单击页面左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p787285.png)图标，进入蓝图编辑器。查看系统自动生成的交互关系。即**单路判断**节点的条件为**动作触发条件**内容。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p853624.png)
7. （可选）您也可以在自动逻辑关系的基础上修改触发条件、响应动作和对应的过滤器，当此处的配置变化时，相对应的高级面板的配置项也会变化。

**说明**  
  * 当您需要较复杂的交互时，请在[蓝图编辑器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/blueprint-editor-features-of-datav-7#33c87b8250iar)中进行设置。

## 组件和全局变量的交互

下面以**通用标题**组件展示点击**Tab列表**组件的内容为例，演示用交互事件实现组件和全局变量的交互。通用标题的作用是直观展示全局变量的变化。

**说明** 

您也可以使用蓝图编辑器实现该交互场景，详细操作请参见[案例演示](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/general-title#b031155036tkq)。

![2024-09-26_15-57-03 (1)](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p854324.gif)

三者的关系图如下：

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3532494371/CAEQURiBgMCpjsnGmhkiIDQ1Y2QxMTU5YmIwMTRlOTM5M2YwOGUwMjU0YjJlNjJh4689365_20240925113547.432.svg)
1. 在**全局变量**中添加一个名为`content`的全局变量。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p854269.png)
2. 添加**Tab列表**组件（在**控件** \> **选择类**下）和**通用标题**组件到画布中。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p854266.png)
3. 选中**通用标题**组件，在右侧数据源面板，关联上**全局变量**`content`。并设置过滤器，将`content`处理成正确的格式传给组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p854319.png)  
```  
// data入参表示content变量传入的值，经过过滤器处理后，给组件正确的格式。  
function filter(data) {  
   return [{  
      value: data  
  }];  
}  
```
4. 给**Tab列表**组件添加交互事件，触发全局变量`content`的值变化。

  1. 选中**Tab列表**组件，选择右侧**高级**面板，单击**交互事件**右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p787211.png)图标，给Tab点击添加交互事件。**启用事件**开关默认打开。
  2. 选择**事件类型**，添加**当点击Tab时**事件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p787317.png)

**说明**  
  单击事件右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p853579.png)图标，可以查看当前事件的出参说明。
  3. 单击**交互动作**右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p787211.png)图标，添加一个交互动作。
  4. 选择需要响应的对象为**全局变量**`content`，动作为**导入数据**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p854301.png)
  5. 参数配置**切换至动态参数配置**，创建过滤器，添加代码如下。将Tab点击抛出的结果进行处理，返回的值就导入给**全局变量**`content`。  
  ```  
  // 经过过滤器处理后，获取全局变量最终需要的值。  
  function filter(data) {  
    return data.content;  
  }  
  ```
5. 单击右上角**预览**，进行预览效果查看。点击不同Tab，通用标题显示点击Tab的内容。

### 关联全局变量（不推荐使用）

**重要** 

交互事件模块已覆盖关联全局变量功能。该模块即将做下线处理，不建议再使用。

下面以点击柱状图更新全局变量为例，演示关联全局变量操作。

1. 添加**柱状图**组件到画布中。
2. 选中组件后，选择右侧**高级**面板，定位到**关联全局变量**，打开**当图例被点击时**的交互开关。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p853658.png)
3. 在`value`字段下选中事先创建好的全局变量。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p787208.png)

**说明**  
  * 变量名称修改为全局变量后，在需要响应全局变量的组件中即可使用当前变量来获取参数值。可以通过设置不同的全局变量名称，以区分使用不同参数。
  * 全局变量具体使用方法请参见[使用全局变量](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-global-variables)。
4. 选中当前组件，右键单击**进入蓝图编辑器**。可以看到全局变量和组件已自动使用虚线连接。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p787209.png)
5. （可选）您可以再添加**数据处理**节点或其他**逻辑节点**进行二次操作。示例请参见[作为交互事件参数传递](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-global-variables#fba45a00666xv)。

上述方案不再建议使用，替代方案为交互事件实现关联全局变量。用交互事件配置来实现时，配置项如下。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4388247271/p853686.png)

当柱状图的**当图例被点击时**事件触发时，**对象**全局变量`var_r9r54`执行了`导入变量数据`**动作**。导入的数据由事件抛出的结果经过过滤器处理而得。

```
// 点击事件抛出的结构
{
  "value": "",
  "checked": false
}
```

```
// 经过过滤器处理后，获取全局变量最终需要的值。
function filter(data) {
  return data.value;
}
```

## **常见问题**

**当我配置完高级交互后，切换到蓝图编辑器发现有些连线无法删除。**

交互中关联全局变量的设置，无法在蓝图编辑器删除。需要您在高级面板中关闭。