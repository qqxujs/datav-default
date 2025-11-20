# Tab列表（v3.0及以上版本） %{#188137}% 

本文介绍Tab列表组件的图表样式和各配置项的含义。

## **图表样式**

Tab列表可以通过交互配置，与其他组件配合使用，在可视化应用中展示所选择Tab的标签内容。Tab列表支持自定义Tab的颜色、数量、类型以及标签样式等。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7261150861/p615731.png)

**重要** 

本文介绍v3.0及以上版本的Tab列表的配置项，如需查看v3.0以下版本，请参见[Tab列表（v3.0以下版本）](/zh/datav/datav-6-0/user-guide/tab-list#concept-wp5-zqs-gfb)。

## 配置面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7261150861/p615734.png)
* **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
* **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
* **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
* **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。  
  * 手动输入角度值，控制组件的旋转角度。
  * 拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
  * 单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
  * 单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
* **不透明度**：取值范围为0\~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
* **通用**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7261150861/p615735.png)

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **初始选中**    |    自定义输入期望的初始化选中的标签ID值。    |
|    **轮播**    |    Tab列表的轮播间隔时间，单位为ms。单击左侧![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)可以选择开启或关闭轮播效果。    |
|    **tab方向**    |    Tab列表的排列方式，可选：**垂直**和**水平**。    |
|    **tab样式**    |    Tab列表的样式配置，包括Tab列表的边框圆角大小样式和tab列表的背景颜色。    |
|    **尺寸自适应**    |    Tab列表中的内容在水平和垂直方向的边距值，单位px。单击左侧![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)可以选择开启或关闭尺寸自适应效果。    |
|    **文字排列**    |    文字的对齐排列方式，包括**左对齐**、**居中对齐**和**右对齐**。    |
|    **tab图标**    |    Tab列表的图标配置样式。单击左侧![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)可以选择开启或关闭图标配置样式。图片配置如果是在数据面板中配置，与数据面板内的imgSrc字段内容相匹配。**宽度**：设置图标的宽度值，单位为px。**高度**：设置图标的高度值，单位为px。**图标位置**：设置图标的位置，可选**上方**、**下方**、**左侧**和**右侧**。**距离文字间隔**：设置图标和文字之间的间隔，单位为px。    |
|    **箭头按钮配置**    |    tab列表左右两侧的箭头按钮配置，仅在开启了**尺寸自适应**后可配置。**按钮宽度**：箭头按钮的宽度值，单位px。**默认样式**：箭头按钮的默认样式，包括箭头的粗细样式、箭头的大小值、箭头的颜色和箭头的背景颜色。**悬浮样式**：鼠标悬浮移动到箭头按钮时的样式，包括悬浮时箭头的粗细样式、箭头的大小值、箭头的颜色和箭头的背景颜色。    |
* **未选中**：Tab列表未被选中时的默认样式。![未选中](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0402580461/p161787.png)

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **文本样式**    |    Tab列表中列表项未被选中时的文本样式，包括设置文本的字体样式、文字的粗细、字号的大小和文本的颜色。    |
|    **背景色**    |    Tab列表中列表项未被选中时的背景颜色。    |
* **选中**：Tab列表内列表项被选中时的样式。![选中样式界面](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0402580461/p161791.png)

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **选中装饰条**    |    Tab列表被选中列表项的装饰线样式，包括装饰线的粗细值、圆角的值、装饰线的颜色和装饰线所在的位置，可选**tab底部**或**tab顶部**两位置。单击左侧![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)可以选择开启或关闭选中装饰条样式。    |
|    **默认样式**    |    Tab列表被选中时的默认样式。**文本样式**：Tab列表内被选中的列表项文本样式，包括设置文本字体的样式、文字的粗细值、文字的字号大小和文本的颜色。**背景色**：Tab列表被选中列表项的背景颜色。    |
|    **背景色**    |    Tab列表中被选中列表项的背景色。    |

## 数据面板（默认模式）

**说明** 

组件数据面板默认是**默认模式**，您可以单击切换数据面板右上角的**分析模式**，即可在弹窗对话框内，确认将组件**转为分析模式并创建分析器**，并单击**确认变更**，使用DataV数据集提供的分析模式功能后，当前组件会转换成BI分析模式组件，组件数据面板变为**分析模式**。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7261150861/p615739.png)

### **配置字段说明**

|    **字段**    |    **说明**    |
|    ----    |    ----    |
|    id    |    Tab选项卡的标签ID，配置面板中**初始化值**配置项需要使用此变量的值，来定义初始化选中的Tab标签。    |
|    content    |    Tab选项卡的标签名称。    |
|    imgSrc    |    Tab选项卡内的图标URL地址，当在数据面板内配置完成后的图标，可在配置面板内的**图标配置**中修改图片的大小和放置位置等参数内容。    |

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

在使用DataV数据集提供的BI分析功能之前，系统会对Tab列表进行以下变更。

* 数据源**Tab列表数据接口**由静态数据切换至DataV数据集。
* 更新DataV数据集配置（此操作不会使字段配置丢失）。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7261150861/p615740.png)

BI分析数据配置面板中的详细操作说明，请参见[BI分析模式数据面板功能介绍](/zh/datav/datav-6-0/user-guide/introduction-to-features-of-the-data-panel-in-bi-analysis-mode#task-2098468)。

### **配置字段说明**

|    **字段**    |    **说明**    |
|    ----    |    ----    |
|    标签ID    |    Tab选项卡的标签ID，配置面板中**初始化值**配置项需要使用此变量的值，来定义初始化选中的Tab标签。    |
|    标签值    |    Tab选项卡的标签名称。    |
|    图标地址    |    （可选）Tab选项卡内的图标URL地址，当在数据面板内配置完成后的图标，可在配置面板内的**图标配置**中修改图片的大小和放置位置等参数内容。    |

**说明** 

当组件是以分析模式添加后，您可以单击切换数据面板右上角的**默认模式**，即可在弹窗对话框内确认退出分析模式并删除该BI分析组件对应的分析器。退出分析模式后，组件数据面板为默认模式。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8482398761/p595791.png)

## 交互面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7261150861/p615744.png)

选中**启用**，开启组件交互功能。当单击Tab标签时，会触发数据请求，抛出回调值，动态加载标签的内容。默认抛出数据中的`id`和`content`值，具体配置请参见[如何配置数字翻牌器组件的回调ID](/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards)。

## 蓝图编辑器交互配置

1. 在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2. 单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的**Tab列表**组件，在画布中可以看到如下图所示的Tab列表的蓝图编辑器配置参数。![tab列表蓝图参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1402580461/p161795.jpg)

  * **事件**

|    **事件**    |    **说明**    |
|    ----    |    ----    |
|    **当数据接口请求完成时**    |    数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
|    **当数据接口请求失败时**    |    数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
|    **当点击Tab时**    |    当单击Tab时抛出的事件，同时抛出该Tab对应的数据项。    |
  * **动作**

|    **动作**    |    **说明**    |
|    ----    |    ----    |
|    **请求数据接口**    |    重新请求服务端数据，上游转换器或图层节点抛出的数据将作为参数。例如Tab列表配置了API数据源为https://api.test，传到**请求数据接口**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。    |
|    **导入数据接口**    |    按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
|    **设置选择项**    |    表示选择某一个或者多个Tab选项，可为数组或单个对象。    |
|    **开启轮播**    |    Tab列表开启轮播样式。    |
|    **关闭轮播**    |    Tab列表关闭轮播样式。    |
|    **更新组件配置**    |    动态更新组件的样式配置。需要先在组件的**配置**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在节点编程配置页面的转换器中更改对应样式的字段值。    |
|    **显示**    |    显示组件，参考数据示例如下。return {   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" };    |
|    **隐藏**    |    隐藏组件，参考数据示例如下。return {   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" };    |
|    **切换显隐状态**    |    切换组件显示或者隐藏，参考数据示例如下。return {   "animationIn": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   },   "animationOut": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   } };    |
|    **移动**    |    将组件移动到指定位置，参考数据示例如下。return {   // 移动方式。绝对定位：to，相对定位：by。默认值：to。   "positionType": "to",   // 指定位置。x坐标，y坐标。   "attr": {     "x": 0,     "y": 0   },   // 动画方式。   "animation": {     "enable": false,     // 动画延时。     "animationDuration": 1000,     // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。     "animationEasing": "linear"   } };    |

## **案例演示**

本案例通过Tab列表控制组内轮播和组的显示隐藏，实现组件的动态展示效果。

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 选择任一可视化应用，单击编辑，进入画布编辑器页面。
3. 添加**柱状图**、**折线图**、**环图**和两个**Tab列表**组件到画布中。
4. 将柱状图、折线图和环图成组，设置组内轮播触发方式为事件触发。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7261150861/p618097.png)
5. 单击任意一个Tab列表组件，选中数据面板，修改静态数据，同步修改名称为**显示/关闭**。  
```  
[  
  {  
    "id": 1,  
    "content": "显示"  
  },  
  {  
    "id": 2,  
    "content": "关闭"  
  }  
]  
```
6. 单击另一个Tab列表，修改名称为**轮播控制**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7261150861/p618249.png)
7. 将轮播控制、显示/关闭和组，三个组件导入蓝图编辑器中。
8. 连接组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7261150861/p618251.png)
9. 配置逻辑节点处理方法。

  * 判断显示  
  ```  
  return data.id == 1;  
  ```
  * 判断关闭  
  ```  
  return data.id == 2;  
  ```
  * 串行数据处理  
  ```  
  return {  
    index: data.id - 1  
  };  
  ```
10. 单击页面右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7261150861/p618256.png)图标，预览展示结果。![tab_Trim](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7261150861/p618269.png)