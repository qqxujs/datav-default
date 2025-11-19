<!DOCTYPE html> 

Tab列表是基础交互组件的一种，支持自定义Tab的颜色、数量、类型以及标签样式等，可以通过交互配置，与其他组件配合使用，在可视化应用中展示所选择Tab的标签内容。本文介绍Tab列表各配置项的含义。

## 配置

**重要** 本文介绍v3.0以下版本的Tab列表的配置项，如需查看v3.0及以上版本，请参见[Tab列表（v3.0及以上版本）](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/tab-list-of-v3-0-and-later#concept-wp5-zqs-gfb)。

* **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
* **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
* **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
* **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。  
  * 手动输入角度值，控制组件的旋转角度。
  * 拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
  * 单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
  * 单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
* **不透明度**：取值范围为0\~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
* **字体**：组件的字体。
* **背景色**：组件的背景颜色。
* **行数**：Tab列表的行数。
* **列数**：Tab列表的列数。
* **选择类型**：Tab列表的选择类型，可选：**单选**和**多选**。
* **轮播**：Tab列表轮播间隔时间。单击左侧![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)可以选择开启或关闭轮播效果。
* **初始化值**：请填入期望初始化选中的标签ID值，需要与数据中id字段的值匹配。当组件的**选择类型**为**单选**时，该选项只能包括一个值。当组件的**选择类型**为**多选**时，该选项可以包含多个值，多个值之间用英文逗号（,）隔开。  
图 1\. 选择类型为单选![选择类型为单选](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p88215.png)  
图 2\. 选择类型为多选![选择类型为多选](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p88216.png)  
图 3\. Tab列表的初始化值![Tab列表的初始化值](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p88217.png)
* **全部按钮**：打开开关，Tab列表中会出现**ALL**的Tab选项卡。只有当组件的**选择类型**为**多选**时，此选项才会显示。![Tab列表全部按钮](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p12911.png)
* **初始化全选**：打开开关，组件初始化时会选中所有的Tab选项卡，且**初始化值**配置项隐藏。只有当组件的**选择类型**为**多选**时，此选项才会显示。![Tab列表初始化全选](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p12914.png)
* **标签默认配置**![Tab列表标签默认配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p12929.png)

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **字号**    |    组件标签的字号大小。    |
|    **字体颜色**    |    组件标签的字体颜色，请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改。    |
|    **字体粗细**    |    组件标签的字体粗细。    |
|    **背景颜色**    |    Tab选项卡的背景颜色。    |
|    **圆角半径**    |    Tab选项卡的圆角半径，值越大，边角越圆。默认为0，即为长方形。    |
|    **悬浮背景色**    |    Tab选项卡的悬浮背景色。只有在预览或者发布页面，才能看到配置效果。    |
|    **选中文字色**    |    Tab选项卡被选中时文字的颜色。    |
|    **选中背景色**    |    Tab选项卡被选中时的背景颜色。    |
|    **图标配置**    |    Tab标签图标的宽度、高度和图标距离文字之间的间隔。    |
* **回调ID**：组件之间数据联动的变量，需要配置为数据中的某一个字段。  

**重要** 此功能已更新到**交互**面板中， **配置**面板的该功能将弃用，请尽快升级。新版本的交互功能支持配置多个字段。

## 数据

![Tab列表数据面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p12930.png)

上图中的示例数据如下。

```
[
  {
    "id": 1,
    "content": "TAB1"
  },
  {
    "id": 2,
    "content": "TAB2"
  },
  {
    "id": 3,
    "content": "TAB3"
  }
]
```

__表 1\. 字段说明__
|    **字段**    |    **说明**    |
|    ----    |    ----    |
|    id    |    Tab选项卡的标签ID，**初始化值**配置项需要使用此变量的值，来定义初始化选中的Tab标签。    |
|    content    |    Tab选项卡的标签名称。    |

__表 1\. 配置项说明__
|    **配置项**    |    **说明**    |
|    ----    |    ----    |
|    **受控模式**    |    打开开关，资产初始化状态下不请求数据，仅通过回调ID或蓝图编辑器配置的方法发起请求数据；关闭开关，可以使用自动更新请求数据。开关默认为关闭状态。    |
|    **自动更新请求**    |    选中后可以设置动态轮询，还可以手动输入轮询的时间频次。取消选中后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和回调ID事件来触发请求更新数据。    |
|    **数据源**    |    单击**配置数据源**，可在**设置数据源**面板中修改数据源类型和数据查询代码、预览数据源返回结果以及查看数据响应结果，详情请参见[配置资产数据](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-widget-data#task-2376875)。    |
|    **数据过滤器**    |    数据过滤器提供数据结构转换、筛选和一些简单的计算功能。单击**添加过滤器**，可在**设置数据源**面板配置数据过滤器脚本，详情请参见[过滤器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-the-data-filter#task-1322674)。    |
|    **数据响应结果**    |    展示数据请求的响应结果。当数据源发生改变时，可单击右侧的![刷新图标 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0376703061/p89093.png)图标，实时查看数据响应结果。    |

## 交互

选中**启用**，开启组件交互功能。当单击Tab标签时，会触发数据请求，抛出回调值，动态加载标签的内容。默认抛出数据中的id和content值，具体配置请参见[组件回调ID配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards#concept-m2n-fy3-52b)。

## 蓝图编辑器交互配置

1. 在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2. 单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的**Tab列表**组件，在画布中可以看到如下图所示的Tab列表的蓝图编辑器配置参数。![Tab列表蓝图编辑器参数配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p88218.jpg)
  * **事件**

|    **事件**    |    **说明**    |
|    ----    |    ----    |
|    **当数据接口请求完成时**    |    数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据可参见上文的[数据示例](#section-llq-l3t-gfb)。    |
|    **当Tab点击时**    |    当单击Tab时抛出的事件，同时抛出该Tab对应的数据项。    |
  * **动作**

|    **动作**    |    **说明**    |
|    ----    |    ----    |
|    **请求数据接口**    |    重新请求服务端数据，上游转换器或图层节点抛出的数据将作为参数。例如Tab列表配置了API数据源为http://api.test，传到**请求地理搜索框接口**动作的数据为{ id: '1'}，则最终请求接口为http://api.test?id=1。    |
|    **导入数据接口**    |    按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。 具体数据可参见上文的[数据示例](#section-llq-l3t-gfb)。    |
|    **选择项**    |    表示选择某一个或者多个Tab选项，可为数组或单个对象。    |
|    **开启轮播**    |    Tab列表开启轮播样式。    |
|    **关闭轮播**    |    Tab列表关闭轮播样式。    |
|    **切换选择全部**    |    表示全选或取消全选。    |
|    **更新组件配置**    |    动态更新组件的样式配置。需要先在组件的**配置**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在节点编程配置页面的转换器中更改对应样式的字段值。    |
|    **显示**    |    显示组件，不需要参数。    |
|    **隐藏**    |    隐藏组件，不需要参数。    |
|    **切换显隐状态**    |    切换组件显示或者隐藏。参考数据示例如下。    {       // 显示为true，隐藏为false。       "status": true,       // 显示动画。       "animationIn": {         // 动画方式，可选fade，不填无动画。         "animationType": "fade",         // 显示延时，单位为ms。         "animationDuration": 1000,         // 显示动画函数，可选linear\|easeInOutQuad|easeInOutExpo。         "animationEasing": "linear"       },       // 隐藏动画。       "animationOut": {         // 动画方式，可选fade，不填无动画。         "animationType": "fade",         // 隐藏延时，单位为ms。         "animationDuration": 1000,         // 隐藏动画函数，可选linear|easeInOutQuad|easeInOutExpo。         "animationEasing": "linear"       }     }    |
|    **移动**    |    将组件移动到指定位置。参考数据示例如下。    {       // 移动方式。绝对定位：to，相对定位：by。默认值：to。         "positionType": "to",       // 指定位置。x坐标，y坐标。       "attr": {         "x": 0,         "y": 0       },       // 动画方式。       "animation": {         "enable": false,         // 动画延时。         "animationDuration": 1000,         // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。         "animationEasing": "linear"       }     }    |