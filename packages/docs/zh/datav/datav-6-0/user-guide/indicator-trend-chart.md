# 业务指标趋势 %{#156580}% 

本文介绍业务指标趋势的图表样式和各配置项的含义。

## **图表样式**

业务指标趋势是以标题、图标和数值的形式表现业务指标趋势关系的组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4468488761/p588759.png)

## 配置面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4468488761/p588760.png)

* **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
* **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
* **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
* **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。  
  * 手动输入角度值，控制组件的旋转角度。
  * 拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
  * 单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
  * 单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
* **不透明度**：取值范围为0\~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
* **对齐方式**：组件的对齐方式，包括垂直和水平两个方向。  

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **垂直方向**    |    组件的垂直方向对齐方式，可选：**上对齐**、**居中对齐**和**下对齐**。    |
|    **水平方向**    |    组件的水平方向对齐方式，可选：**左对齐**、**居中对齐**和**右对齐**。    |
* **间距**：组件内标题、图标和数值之间的水平和垂直间距值，单位px。
* **标题**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4468488761/p588761.png)

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **标题内容**    |    标题内容值。    |
|    **内容样式**    |    标题内容样式，包括字体样式、文字粗细、字号和颜色。    |
|    **标题换行**    |    打开开关，标题字数过多可换行；关闭开关，标题文字不可换行。    |
* **图标**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4468488761/p588763.png)

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **图标选择**    |    图标样式选择，共五种样式。    |
|    **图标大小**    |    图标大小值，单位px。    |
|    **图标颜色**    |    图标颜色，包括趋势上升时的颜色、趋势持平的颜色和趋势下降时候的颜色。    |
|    **是否同步文字颜色**    |    打开开关，开启图标颜色与数值文字颜色同步；关闭开关，颜色不同步。    |
* **数值**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4468488761/p588765.png)

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **内容样式**    |    数值内容样式，包括字体样式、文字粗细、字号和颜色。    |
|    **基础值**    |    以此数值为基础，来计算图标走势，默认基础值为**0**（优先使用数据面板中的初始值）。    |
|    **千分位**    |    当数据位数大于4时，系统会使用默认的分隔符进行分隔显示，数字分隔符符号号可自定义。单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制千分位配置项的显隐。    |
|    **数值后缀**    |    数值后缀样式，默认为%。    |
|    **显示**    |    打开开关，可以此判断不合法数据的显示，如果为合法数据则忽略此配置项。    |

## 数据面板（默认模式）

**说明** 

当组件以**默认模式**添加后，您可以单击数据面板右上角的**分析模式**，切换到分析模式数据面板。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4468488761/p588766.png)

### **配置字段说明**

|    **字段**    |    **说明**    |
|    ----    |    ----    |
|    value    |    数值内容。    |
|    base    |    （可选）基础值数据。    |

__表 1\. 配置项说明__
|    **配置项**    |    **说明**    |
|    ----    |    ----    |
|    **受控模式**    |    打开开关，资产初始化状态下不请求数据，仅通过回调ID或蓝图编辑器配置的方法发起请求数据；关闭开关，可以使用自动更新请求数据。开关默认为关闭状态。    |
|    **自动更新请求**    |    选中后可以设置动态轮询，还可以手动输入轮询的时间频次。取消选中后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和回调ID事件来触发请求更新数据。    |
|    **数据源**    |    单击**配置数据源**，可在**设置数据源**面板中修改数据源类型和数据查询代码、预览数据源返回结果以及查看数据响应结果，详情请参见[配置资产数据](/zh/datav/datav-6-0/user-guide/configure-widget-data#task-2376875)。    |
|    **数据过滤器**    |    数据过滤器提供数据结构转换、筛选和一些简单的计算功能。单击**添加过滤器**，可在**设置数据源**面板配置数据过滤器脚本，详情请参见[过滤器使用说明](/zh/datav/datav-6-0/user-guide/use-the-data-filter#task-1322674)。    |
|    **数据响应结果**    |    展示数据请求的响应结果。当数据源发生改变时，可单击右侧的![刷新图标 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0376703061/p89093.png)图标，实时查看数据响应结果。    |

## 数据面板（分析模式）

**重要** 

在使用DataV数据集提供的BI分析功能之前，系统会对业务指标趋势进行以下变更。

* 数据源**业务指标趋势数据接口**由静态数据切换至DataV数据集。
* 更新DataV数据集配置（此操作不会使字段配置丢失）。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4468488761/p588779.png)

BI分析数据配置面板中的详细操作说明，请参见[BI分析模式数据面板功能介绍](/zh/datav/datav-6-0/user-guide/introduction-to-features-of-the-data-panel-in-bi-analysis-mode)。

### **配置字段说明**

|    **字段**    |    **说明**    |
|    ----    |    ----    |
|    数值    |    数值内容。    |
|    基础值    |    （可选）基础值数据。    |

**说明** 

您可以单击切换数据面板右上角的**默认模式**，即可在弹窗对话框内确认退出分析模式并删除该BI分析组件对应的分析器。退出分析模式后，组件数据面板为默认模式。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4468488761/p588831.png)

## 交互面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4468488761/p588834.png)

**当点击时**：选中**启用**，开启组件交互功能。可在单击业务指标趋势组件时抛出回调值，默认抛出数据中的所有自定义列字段。具体配置请参见[如何配置数字翻牌器组件的回调ID](/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards)。

## 蓝图编辑器交互配置

1. 在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2. 单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的**业务指标趋势**组件，在画布中可以看到如下图所示的业务指标趋势的蓝图编辑器配置参数。![业务指标趋势蓝图参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7037518361/p88443.jpg)

  * **事件**

|    **事件**    |    **说明**    |
|    ----    |    ----    |
|    **当接口描述请求完成时**    |    数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
|    **当接口描述请求失败时**    |    数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
|    **当点击时**    |    当单击业务指标趋势时抛出当前节点的数据。    |
  * **动作**

|    **动作**    |    **说明**    |
|    ----    |    ----    |
|    **请求接口描述**    |    重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如业务指标趋势配置了API数据源为https://api.test，传到**请求数据接口**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。    |
|    **导入接口描述**    |    按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
|    **更新组件配置**    |    动态更新组件的样式配置。需要先在组件的**配置**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。    |
|    **显示**    |    显示组件，参考数据示例如下。return {   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" }    |
|    **隐藏**    |    隐藏组件，参考数据示例如下。return {   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" }    |
|    **切换显隐状态**    |    切换组件显示或者隐藏，参考数据示例如下。return {   "animationIn": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   },   "animationOut": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   } }    |
|    **移动**    |    将组件移动到指定位置，参考数据示例如下。 return {   // 移动方式。绝对定位：to，相对定位：by。默认值：to。   "positionType": "to",   // 指定位置。x坐标，y坐标。   "attr": {     "x": 0,     "y": 0   },   // 动画方式。   "animation": {     "enable": false,     // 动画延时。     "animationDuration": 1000,     // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。     "animationEasing": "linear"   } }    |

## **案例演示**

本案例通过Tab列表的轮播功能实现业务指标趋势的动态展示。

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 选择任一可视化应用，单击编辑，进入画布编辑器页面。
3. 添加**Tab列表**和**业务指标趋势**两个组件到画布中。
4. 选择**业务指标趋势**组件的数据面板，复制静态数据到剪贴板。  
```  
[  
  {  
    "value": 12,  
    "base": 0  
  },  
  {  
    "value": 1,  
    "base": 10  
  },  
  {  
    "value": 10,  
    "base": -7  
  },  
  {  
    "value": 16,  
    "base": 110  
  },  
  {  
    "value": 37,  
    "base": 279  
  }  
]  
```
5. 将静态数据粘贴至**Tab列表**的静态数据输入框中，设置`id`字段的映射字段为**value**，`content`字段的映射字段为**base**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0269688761/p589277.png)
6. 选择配置面板，打开Tab列表的轮播功能，间隔时间默认。
7. 右键单击组件，将两个组件导入蓝图编辑器中。
8. 连接组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0269688761/p589259.png)
9. 配置串行数据处理的处理方法。  
```  
return [{"value": data.value - data.base}]  
```
10. 单击页面右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0269688761/p589281.png)图标，预览展示结果。![动态显示涨跌_Trim](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0269688761/p589325.gif)

**说明**  
若只需要动态展示指标趋势，可以在画布页右键单击**隐藏**，将Tab列表隐藏。