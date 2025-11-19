<!DOCTYPE html> 

本文介绍进度环图全量选择时各配置项的含义。

## **图表样式**

进度环图以旋转柱型条的填充方式用于在数字大屏中直观地展示工作任务的进度情况。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6929559761/p608914.png)

## **样式面板**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6895666071/p764138.png)

* **搜索配置**：单击**样式**面板右上角的搜索配置项图标![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5013889661/p527384.png)，可在搜索配置面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索配置项](/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。
* * **尺寸**：包括组件的宽度和高度，单位为px。
  * **定位**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
  * **旋转**：以组件的中心为中心点，进行旋转，单位为度（°）。  

    * 手动输入角度值，控制组件的旋转角度。
    * 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8222919661/p521797.png)图标，控制组件左右翻转样式。
    * 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8222919661/p521798.png)图标，控制组件上下翻转样式。
  * **不透明度**：取值范围为0\~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
* **图形**

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **图表边距**    |    单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标，控制图表边距的显隐。打开开关后，可配置进度环图区域与组件上下左右四个边界之间的距离，单位默认px。    |
|    **半径尺寸**    |    设置进度环图的内径尺寸和外径尺寸，单位%。    |
|    **环形颜色**    |    设置进度环图存在进度时的背景色和无进度时的背景色，请参见[颜色选择器说明](/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)进行修改。    |
|    **环形描边**    |    设置进度环图的环形描边的描边样式，包括描边的线型、描边粗细和描边颜色。    |
|    **投影样式**    |    设置进度环图组件的平面投影样式，包括模糊颜色、模糊半径以及环图圆心相对于组件边框中心的X轴和Y轴上的偏移量。    |
|    **中心内容**    |    设置进度环图的中心内容的文本样式和图形样式。**文本** **标题**：设置中心内容文本的标题名称。**标题样式**：设置中心内容文本的标题的标题样式，包括字体、文字粗细、字号和颜色。**位置**：设置中心内容文本相对于组件中心点的X轴偏移量和Y轴偏移量。**数字**：设置数字内容的前缀样式和后缀样式。**数字样式**：设置数字内容的数字样式，包括字体、文字粗细、字号和颜色。**位置**：设置数字内容文本相对于组件中心点的X轴偏移量和Y轴偏移量。**图形** **图片链接**：设置进度环图中心的图片链接。如果您需要使用远程服务器上的图片，请在上方的输入框中输入图片的URL地址；单击图片输入框下方的**更改**或**删除**，更改或删除图片。其他设计资产详细功能请参见[使用界面功能说明](/zh/datav/datav-7-0/user-guide/features-on-the-usage-page)。**图片样式**：设置进度环图中心的图片样式。包括图片的宽度、高度、透明度和圆角样式。**偏移量**：设置进度环图中心的图片相对于组件图表边界的水平位置、垂直位置、水平偏移量和垂直偏移量。    |
* **条件**：条件样式说明。

**条件样式**：单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528933.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528934.png)图标，添加或删除一个条件样式。 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528936.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528937.png)图标配置多个条件样式的排列样式。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528938.png)图标，即可复制当前选中条件样式配置内容并新增一个同样配置的条件样式。具体的条件样式配置说明，请参见[条件树使用说明](/zh/datav/datav-7-0/user-guide/conditional-tree-instructions)。

**进度颜色**：打开开关，配置该系列条件样式中的进度颜色；关闭开关，无法配置该系列条件下的颜色。

## **数据源面板**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6895666071/p764139.png)

`percent`：展示进度环图相对于整个环图的百分比，值为小数，1表示100%。

|    **数据项配置**    |    **说明**    |
|    ----    |    ----    |
|    **数据源**    |    组件的数据源中通过**代码编辑**或**可视化编辑**展示了组件所包含的数据字段。也可以修改**数据类型**，灵活配置组件数据。    |
|    **数据映射**    |    当您需要自定义图表字段配置时，可以在**数据映射**模块设置不同的字段映射内容，将这些字段映射到组件对应的字段上。无需修改数据源中的字段，就可以实现数据的实时匹配。也可以单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9633269661/p524955.png)图标对字段分别样式配置。    |
|    **过滤器**    |    打开**过滤器**，选择已创建的数据过滤器或新建数据过滤器，并配置数据过滤器脚本，实现数据的筛选功能。详情请参见[管理数据过滤器](/zh/datav/datav-7-0/user-guide/manage-filters-1)。    |
|    **数据响应结果**    |    实时展示了组件所使用的数据。当组件数据源发生变化时，数据响应结果会对应展示最新的数据。如果系统反应延迟，您可以单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8276202761/p538806.png)图标，查看数据响应结果，也可以单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8276202761/p538808.png)图标，获取组件的最新数据。您也可以单击查看示例，查看当前组件的响应结果示例。    |
|    **禁止加载态**    |    勾选复选框，在组件更新和预览数据看板时，将看不到组件初始化时的加载内容，去勾选则相反。默认为去勾选状态。    |
|    **受控模式**    |    勾选复选框，组件初始化状态下不请求数据，仅通过全局变量或蓝图编辑器配置的方法发起请求数据；去勾选复选框，可以使用自动更新请求数据。默认为去勾选状态。    |
|    **自动更新请求**    |    勾选复选框，可以手动输入轮询的时间频次设置动态轮询。清除后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和全局变量事件来触发请求更新数据。    |

## **高级面板**

此组件没有关联全局变量。

## **蓝图交互**

1. 单击页面左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7498599661/p528973.png)图标，进入**蓝图**页面。
2. 在**图层节点**页签下，添加当前组件至主画布中。
3. 查看蓝图配置参数。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4582501071/p741953.png)

  * 事件

|    **事件**    |    **说明**    |
|    ----    |    ----    |
|    **当接口描述请求完成时**    |    数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据源**页签的**数据响应结果**区域。    |
  * 动作

|    **动作**    |    **说明**    |
|    ----    |    ----    |
|    **导入接口描述**    |    按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据源**页签的**数据响应结果**区域。    |
|    **请求接口描述**    |    重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如进度环图配置了API数据源为https://api.test，传到**请求接口描述**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。    |
|    **移动**    |    将组件移动到指定位置，参考数据示例。{             // 移动方式。绝对定位：to，相对定位：by。默认值：to。         "positionType": "to",       // 指定位置。x坐标，y坐标。       "attr": {         "x": 0,         "y": 0       },       // 动画方式。       "animation": {         "enable": false,         // 动画延时，单位ms。         "animationDuration": 1000,         // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。         "animationEasing": "linear"       }     }    |
|    **切换显隐**    |    切换组件显示或者隐藏，不需要参数。    |
|    **显示**    |    显示组件，参考数据示例。{   "animationType": "",//动画方式，可选值：fade，不填无动画。   "animationDuration": 1000,//动画延迟，单位ms。   "animationEasing": ""//动画曲线 }    |
|    **隐藏**    |    隐藏组件，参考数据示例。{   "animationType": "",//动画方式，可选值：fade，不填无动画。   "animationDuration": 1000,//动画延迟，单位ms。   "animationEasing": ""//动画曲线 }    |
|    **更新组件配置**    |    动态更新组件的样式配置。需要先在组件的**样式**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。    |

## **案例演示**

本案例通过多个进度环图组件展示一个项目中三个功能的同步研发进度和截止时间。

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面，选择任一数据看板，单击**编辑**，进入画布编辑器。
3. 在上方工具栏单击**搜索**，输入进度环图，单击添加到画布中。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6895666071/p764140.png)
4. 重复上述操作，再次添加2个进度环图组件、1个玉珏图组件和1个倒计时组件。
5. 单击玉珏图，选择**数据源**面板，修改静态数据。  
```  
[  
  {  
    "r": "多频调制功能",  
    "t": 0.86,  
    "colorField": 100  
  },  
  {  
    "r": "蓝牙传输功能",  
    "t": 0.64,  
    "colorField": 200  
  },  
  {  
    "r": "掩码分发功能",  
    "t": 0.49,  
    "colorField": 300  
  }  
]  
```
6. 单击进度环图，修改**图形 > 中心内容 > 文本**下的标题为**多频调制功能**，修改组件名称为进度环图-1。重复操作完成其他2个进度环图中心内容文本和名称的设置。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4094659761/p609081.png)
7. 单击倒计时组件，选择数据源面板，修改静态数据。  
```  
[  
  {  
    "endTime": "2023-06-20 00:00:00"  
  }  
]  
```
8. 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5144559761/p608814.png)图标，切换至蓝图中。
9. 在**图层节点**页签下，拖拽除倒计时外其他所有组件到主画布中。
10. 单击**逻辑节点**页签，添加序列执行节点到主画布中，并连接组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4094659761/p609093.png)
11. 配置序列执行节点处理方法。  
```  
//进度环图-1  
return [{  
  "percent": data[0].t  
}]  
//进度环图-2  
return [{  
  "percent": data[1].t  
}]  
//进度环图-3  
return [{  
  "percent": data[2].t  
}]  
```
12. 单击页面右上角的**预览**。查看展示结果。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4094659761/p609109.png)
13. （可选）调整全部组件样式和位置，添加其他装饰组件，使得数字大屏更加饱满。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4094659761/p609151.png)