<!DOCTYPE html> 

本文介绍通用标题组件的图表样式和各配置项的含义。

## **图表样式**

通用标题是文字组件的一种，支持自定义标题的内容、位置、颜色、超链接等，支持在可视化应用中添加多个通用标题组件，展示可视化应用和可视化应用中各个模块的标题。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8482398761/p595784.png)

## 配置面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8482398761/p595785.png)

* **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
* **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
* **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
* **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。  
  * 手动输入角度值，控制组件的旋转角度。
  * 拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
  * 单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
  * 单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
* **不透明度**：取值范围为0\~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
* **标题名**：标题的名称，支持从数据面板中获取内容。  

**说明**  
  * 标题名内容获取优先级是：**数据** \> **样式** 。
  * 只有清空**数据**面板中`value`字段内容后，才会显示**配置**面板中**标题名**的内容。
* **文本样式**

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **字体**    |    标题文本的字体系列，默认为**微软雅黑**。    |
|    **字号**    |    标题文本的字体大小。    |
|    **字体颜色**    |    标题文本的颜色，请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改。    |
|    **字体粗细**    |    标题文本的字体粗细。    |
* **对齐方式**：标题文本的对齐方式，可选**左对齐**、**右对齐**和**居中对齐**。
* **文字排列方式**：标题文本的排列方式，可选**水平**或**垂直**。
* **文字间隔**：标题文本之间的距离，单位px。
* **背景样式**：标题的背景样式，可单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制背景样式的显隐。

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **背景色**    |    标题背景框内的颜色，请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改。    |
|    **圆角**    |    标题背景框的圆角大小，单位为px。数值为0的时候没有圆角，背景框为方形，设置值越大，圆角弧度值越大。    |
|    **背景边框**    |    标题的背景边框样式，包括边框的线条粗细值、线条的颜色和线条样式，可选**实线**、**虚线**和**点线**。    |
* **省略号**：打开开关，标题内文本溢出的时候，溢出部分以省略号显示；关闭开关，标题开头和结尾溢出部分内容无法显示在标题框内。  
图 1\. 开启省略号示例样式![开启省略号示例样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1032800461/p202904.png)  
图 2\. 关闭省略号示例样式![关闭省略号示例样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1032800461/p202905.png)
* **超链接配置**：单击标题区域可跳转至设定的超链接。  

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **超链接**    |    URL链接地址，也可在数据中进行配置，优先使用数据中的配置。    |
|    **是否新开窗口**    |    打开开关，在预览或发布页，单击标题区域可跳转至新的页面显示链接内容。关闭开关，仅在当前页面进行跳转。    |

## 数据面板（默认模式）

**说明** 

组件数据面板默认是**默认模式**，您可以单击切换数据面板右上角的**分析模式**，即可在弹窗对话框内，确认将组件**转为分析模式并创建分析器**，并单击**确认变更**，使用DataV数据集提供的分析模式功能后，当前组件会转换成BI分析模式组件，组件数据面板变为**分析模式**。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8482398761/p595786.png)

### **配置字段说明**

|    **字段**    |    **说明**    |
|    ----    |    ----    |
|    value    |    （可选）标题的内容，配置后会覆盖**标题名**配置项的内容。为空时，会读取**标题名**配置项的内容进行显示。    |
|    url    |    （可选）标题跳转的超链接地址，配置后会覆盖**超链接**配置项的URL。    |

__表 1\. 配置项说明__
|    **配置项**    |    **说明**    |
|    ----    |    ----    |
|    **受控模式**    |    打开开关，资产初始化状态下不请求数据，仅通过回调ID或蓝图编辑器配置的方法发起请求数据；关闭开关，可以使用自动更新请求数据。开关默认为关闭状态。    |
|    **自动更新请求**    |    选中后可以设置动态轮询，还可以手动输入轮询的时间频次。取消选中后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和回调ID事件来触发请求更新数据。    |
|    **数据源**    |    单击**配置数据源**，可在**设置数据源**面板中修改数据源类型和数据查询代码、预览数据源返回结果以及查看数据响应结果，详情请参见[配置资产数据](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-widget-data#task-2376875)。    |
|    **数据过滤器**    |    数据过滤器提供数据结构转换、筛选和一些简单的计算功能。单击**添加过滤器**，可在**设置数据源**面板配置数据过滤器脚本，详情请参见[过滤器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-the-data-filter#task-1322674)。    |
|    **数据响应结果**    |    展示数据请求的响应结果。当数据源发生改变时，可单击右侧的![刷新图标 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0376703061/p89093.png)图标，实时查看数据响应结果。    |

## 数据面板（分析模式）

**重要** 

在使用DataV数据集提供的BI分析功能之前，系统会对通用标题进行以下变更。

* 数据源**通用标题数据接口**由静态数据切换至DataV数据集。
* 更新DataV数据集配置（此操作不会使字段配置丢失）。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8482398761/p595790.png)

BI分析数据配置面板中的详细操作说明，请参见[BI分析模式数据面板功能介绍](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/introduction-to-features-of-the-data-panel-in-bi-analysis-mode)。

### **配置字段说明**

|    **字段**    |    **说明**    |
|    ----    |    ----    |
|    值    |    （可选）标题的内容，配置后会覆盖**标题名**配置项的内容。为空时，会读取**标题名**配置项的内容进行显示。    |
|    超链接地址    |    （可选）标题跳转的超链接地址，配置后会覆盖**超链接**配置项的URL。    |

**说明** 

当组件是以分析模式添加后，您可以单击切换数据面板右上角的**默认模式**，即可在弹窗对话框内确认退出分析模式并删除该BI分析组件对应的分析器。退出分析模式后，组件数据面板为默认模式。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8482398761/p595791.png)

## 交互面板

此组件没有交互事件。

## 蓝图编辑器交互配置

1. 在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2. 单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的**通用标题**组件，在画布中可以看到如下图所示的通用标题蓝图编辑器配置参数。![通用标题蓝图编辑器参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2091988061/p69889.jpg)

  * **事件**

|    **事件**    |    **说明**    |
|    ----    |    ----    |
|    **当数据接口请求完成时**    |    数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
|    **当数据接口请求失败时**    |    数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
  * **动作**

|    **动作**    |    **说明**    |
|    ----    |    ----    |
|    **请求数据接口**    |    重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如通用标题配置了API数据源为https://api.test，传到**请求数据接口**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。    |
|    **导入数据接口**    |    按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
|    **更新组件配置**    |    动态更新组件的样式配置。需要先在组件的**配置**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。    |
|    **显示**    |    显示组件，参考数据示例如下。return {   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" };    |
|    **隐藏**    |    隐藏组件，参考数据示例如下。return {   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" };    |
|    **切换显隐状态**    |    切换组件显示或者隐藏，参考数据示例如下。return {   "animationIn": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   },   "animationOut": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   } };    |
|    **移动**    |    将组件移动到指定位置，参考数据示例如下。return {   // 移动方式。绝对定位：to，相对定位：by。默认值：to。   "positionType": "to",   // 指定位置。x坐标，y坐标。   "attr": {     "x": 0,     "y": 0   },   // 动画方式。   "animation": {     "enable": false,     // 动画延时。     "animationDuration": 1000,     // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。     "animationEasing": "linear"   } };    |

## **案例演示**

本案例通过Tab列表的轮播功能实现通用标题的动态展示。

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 选择任一可视化应用，单击编辑，进入画布编辑器页面。
3. 添加**Tab列表**和**通用标题**两个组件到画布中。
4. 单击Tab列表，选择配置面板，打开Tab列表的轮播功能，间隔时间默认。
5. 右键单击组件，将两个组件导入蓝图编辑器中。
6. 连接组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8018398761/p595844.png)
7. 配置串行数据处理的处理方法。  
```  
return [{value:data.content}];  
```
8. 单击页面右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0269688761/p589281.png)图标，预览展示结果。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8018398761/p595862.png)
9. 可选，如果需要跳转特定Tab页签，可以在串行数据处理节点前加入**分支判断**节点，满足时再执行处理方法；不满足显示默认值。例如：不显示第一个Tab页签内容。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8018398761/p595869.png)

  * 分支判断节点  
  ```  
  return data.id > 1;  
  ```
  * 处理方法-满足  
  ```  
  return [{value:data.content}];  
  ```
  * 处理方法-不满足  
  ```  
  return [{value: "我是标题数据"}];  
  ```
10. 单击页面右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0269688761/p589281.png)图标，预览展示结果。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8018398761/p595871.png)