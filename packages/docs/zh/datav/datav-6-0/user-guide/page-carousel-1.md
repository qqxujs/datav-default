<!DOCTYPE html> 

本文介绍轮播页面组件的图表样式和各配置项的含义。

## **图表样式**

轮播页面是基础交互组件的一种，仅支持在数据中配置页面的属性，包括ID、页面名称和链接，适用于在可视化应用中轮播展示多个网页。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9201610861/p613075.png)

## 配置面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9201610861/p613077.png)
* **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
* **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
* **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
* **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。  
  * 手动输入角度值，控制组件的旋转角度。
  * 拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
  * 单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
  * 单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
* **不透明度**：取值范围为0\~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
* **自动轮播**：打开开关，多个轮播页面内容开启自动轮播。
* **间隔时间（s）**：页面自动轮播的间隔时间，仅在开启**自动轮播**后可配置。

## 数据面板（默认模式）

**说明** 

组件数据面板默认是**默认模式**，您可以单击切换数据面板右上角的**分析模式**，即可在弹窗对话框内，确认将组件**转为分析模式并创建分析器**，并单击**确认变更**，使用DataV数据集提供的分析模式功能后，当前组件会转换成BI分析模式组件，组件数据面板变为**分析模式**。

轮播页面组件的数据包括**大屏轮播数据接口**和**当前大屏数据接口**。

* ### ****大屏轮播数据接口**![大屏轮播数据接口](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0483380461/p47080.png)  
#### **配置字段说明**

| **字段**    | **说明**          |
| --------- | --------------- |
| id        | 可视化应用中各轮播页面的ID。 |
| serieName | 可视化应用中各轮播页面的名称。 |
| url       | 可视化应用中各轮播页面的链接。 |
* ### ****当前大屏数据接口**![当前大屏数据接口](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0483380461/p47103.png)  
`id`：可视化应用中各轮播页面的ID。  

  * 当使用静态数据时，此`id`仅可定义轮播页面初始化时显示的页面，需要与**大屏轮播数据接口**中的页面`id`对应。
  * 当使用动态数据时，如数据库或API数据，可以通过交互组件（如时间轴、Tab列表等）动态获取此`id`值，实现改变交互组件中的某个元素，跳转到对应的轮播页面。其中动态数据返回的`id`值的格式要与此`id`保持一致，并与**大屏轮播数据接口**中的页面`id`对应。  
建议您使用动态数据，请参见[DataV回调ID实现图表联动功能](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/how-to-use-callback-ids-to-implement-component-linkage#concept-pbb-2vk-q2b)和[如何配置数字翻牌器组件的回调ID](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards#task-2479340)进行配置。

__表 1\. 配置项说明__
| **配置项**    | **说明**                                                                                                                                                                |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **受控模式**   | 打开开关，资产初始化状态下不请求数据，仅通过回调ID或蓝图编辑器配置的方法发起请求数据；关闭开关，可以使用自动更新请求数据。开关默认为关闭状态。                                                                                              |
| **自动更新请求** | 选中后可以设置动态轮询，还可以手动输入轮询的时间频次。取消选中后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和回调ID事件来触发请求更新数据。                                                                                            |
| **数据源**    | 单击**配置数据源**，可在**设置数据源**面板中修改数据源类型和数据查询代码、预览数据源返回结果以及查看数据响应结果，详情请参见[配置资产数据](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-widget-data#task-2376875)。 |
| **数据过滤器**  | 数据过滤器提供数据结构转换、筛选和一些简单的计算功能。单击**添加过滤器**，可在**设置数据源**面板配置数据过滤器脚本，详情请参见[过滤器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-the-data-filter#task-1322674)。 |
| **数据响应结果** | 展示数据请求的响应结果。当数据源发生改变时，可单击右侧的![刷新图标 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0376703061/p89093.png)图标，实时查看数据响应结果。                                |

## 数据面板（分析模式）

**重要** 

在使用DataV数据集提供的BI分析功能之前，系统会对轮播页面进行以下变更。

* 数据源**轮播页面数据接口**由静态数据切换至DataV数据集。
* 更新DataV数据集配置（此操作不会使字段配置丢失）。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9201610861/p613092.png)

BI分析数据配置面板中的详细操作说明，请参见[BI分析模式数据面板功能介绍](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/introduction-to-features-of-the-data-panel-in-bi-analysis-mode#task-2098468)。

### **配置字段说明**

| **字段** | **说明**          |
| ------ | --------------- |
| 大屏ID   | 可视化应用中各轮播页面的ID。 |
| 大屏名称   | 可视化应用中各轮播页面的名称。 |
| 大屏链接   | 可视化应用中各轮播页面的链接。 |

**说明** 

当组件是以分析模式添加后，您可以单击切换数据面板右上角的**默认模式**，即可在弹窗对话框内确认退出分析模式并删除该BI分析组件对应的分析器。退出分析模式后，组件数据面板为默认模式。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8482398761/p595791.png)

## 交互面板

该组件没有交互事件。

## 蓝图编辑器交互配置

1. 在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2. 单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的**轮播页面**组件，在画布中可以看到如下图所示的轮播页面的蓝图编辑器配置参数。![节点编程参数配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0483380461/p50868.jpg)

  * **事件**

| **事件**             | **说明**                                                                                                           |
| ------------------ | ---------------------------------------------------------------------------------------------------------------- |
| **当大屏轮播数据接口请求完成时** | 数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。                           |
| **当当前大屏数据接口请求完成时** | 数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。                           |
| **当大屏轮播数据接口请求失败时** | 数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。 |
| **当当前大屏数据接口请求失败时** | 数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。 |
  * **动作**

| **动作**         | **说明**                                                                                                                                                                                                                                                                                                                                      |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **请求大屏轮播数据接口** | 重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如轮播页面配置了API数据源为https://api.test，传到**请求数据接口**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。                                                                                                                                                                                                              |
| **请求当前大屏数据接口** | 重新请求当前大屏的接口数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如轮播页面配置了API数据源为https://api.test，传到**请求当前大屏数据接口**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。                                                                                                                                                                                                      |
| **导入大屏轮播数据接口** | 按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。                                                                                                                                                                                                                                                           |
| **导入当前大屏数据接口** | 按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。                                                                                                                                                                                                                                                           |
| **获取当前页面信息**   | 返回当前页面的id和url等参数值。                                                                                                                                                                                                                                                                                                                          |
| **更新组件配置**     | 动态更新组件的样式配置。需要先在组件的**配置**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。                                                                                                                                                                                                                                                     |
| **显示**         | 显示组件，参考数据示例如下。return {   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" };                                                                                                                                                                                                                                 |
| **隐藏**         | 隐藏组件，参考数据示例如下。return {   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" };                                                                                                                                                                                                                                 |
| **切换显隐状态**     | 切换组件显示或者隐藏，参考数据示例如下。return {   "animationIn": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   },   "animationOut": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   } };                                                                             |
| **移动**         | 将组件移动到指定位置，参考数据示例如下。return {   // 移动方式。绝对定位：to，相对定位：by。默认值：to。   "positionType": "to",   // 指定位置。x坐标，y坐标。   "attr": {     "x": 0,     "y": 0   },   // 动画方式。   "animation": {     "enable": false,     // 动画延时。     "animationDuration": 1000,     // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。     "animationEasing": "linear"   } }; |

## **案例演示**

本案例通过轮播列表的轮播功能，将链接到的网页内容展示在轮播页面组件上。

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 选择任一可视化应用，单击编辑，进入画布编辑器页面。
3. 添加**轮播列表**和**轮播页面**两个组件到画布中。
4. 单击轮播列表，选择数据面板，修改静态数据。  
```  
[  
  {  
    "id": 1,  
    "serieName": "数字大屏1",  
    "url": "https://www.aliyun.com/product/bigdata/datav?spm=5176.8789780.J_3207526240.51.3dbb45b5OHdxMq"  
  },  
  {  
    "id": 2,  
    "serieName": "数字大屏2",  
    "url": "https://www.aliyun.com/activity/intelligent/datavedition"  
  },  
  {  
    "id": 3,  
    "serieName": "数字大屏3",  
    "url": "https://developer.aliyun.com/article/1168335"  
  },  
  {  
    "id": 4,  
    "serieName": "数字大屏4",  
    "url": "https://datav.aliyun.com/portal/school/atlas/area_selector"  
  },  
  {  
    "id": 5,  
    "serieName": "数字大屏5",  
    "url": "https://www.aliyun.com/activity/intelligent/datav-card?spm=5176.14082271.J_5834642020.4.4e684dcf3XqP8D"  
  }  
]  
```
5. 选择配置面板，修改自定义列下的系列对齐数据参数字段`id`、`serieName`和`url`，并设置列显示名。修改**全局 > 表格行数**为3，打开轮播开关，打开**全局 > 高亮**开关。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9201610861/p613341.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9201610861/p613347.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9201610861/p613355.png)
6. 单击轮播页面组件，选择配置面板，打开自动轮播开关，设置间隔时间为2。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9201610861/p613350.png)
7. 右键单击组件，将两个组件导入蓝图编辑器中。
8. 连接组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9201610861/p613351.png)
9. 配置串行数据处理节点处理方法。  
```  
return data.data;  
```
10. 单击页面右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9201610861/p613357.png)图标，预览展示结果。![轮播页面_Trim](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9201610861/p613395.png)