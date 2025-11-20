# 状态卡片 %{#92975}% 

本文介绍状态卡片组件的图表样式和各配置项的含义。

## **图表样式**

状态卡片是文字组件的一种，支持多系列的状态类别配置，能够以彩色圆点的形式在可视化应用中直观地展示多种类别的状态信息，比如展示一个集群中多台服务器的运行状态。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9172039761/p606581.png)

## 配置面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8172039761/p606584.png)
* **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
* **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
* **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
* **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。  
  * 手动输入角度值，控制组件的旋转角度。
  * 拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
  * 单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
  * 单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
* **不透明度**：取值范围为0\~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
* **全局**

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **自动排列**    |    打开开关，系统会自动排列各状态；关闭开关，可自定义各状态的排列方式。    |
|    **布局方式**    |    组件状态的布局方式，可选**横向布局**和**纵向布局**。    |
|    **每行个数**    |    一行显示的状态数量，仅当关闭**自动排列**配置项后有效。    |
* **间距**

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **横向**    |    多个状态之间的横向间距，取值范围为0\~100。    |
|    **竖向**    |    多个状态之间的纵向间距，仅当状态排列为多行时有效，取值范围为0\~100。    |
* **文本样式**

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **字体**    |    状态文本的字体系列，默认为**微软雅黑**。    |
|    **字号**    |    状态文本的大小。    |
|    **字体颜色**    |    状态文本的颜色，请参见[颜色选择器说明](/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改。    |
|    **字体粗细**    |    状态文本的字体粗细。    |
* **状态种类**：单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一个状态类别。 单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个状态种类系列的排列样式。单击图标，即可复制当前选中状态种类系列配置内容并新增一个同样配置的状态种类系列。单击![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5896941261/p271562.jpg)图标，即可复制当前选中状态种类配置内容并新增一个同样配置的状态种类。![状态卡片的种类](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6762800461/p13474.png)

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **状态类型名**    |    状态的类型名称，需要与数据中的value字段值对应。    |
|    **状态圆点颜色**    |    此类型下，状态圆点的颜色。    |
* **圆点样式**：状态卡片中的圆点样式。

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **位置**    |    圆点相对于文本的位置，可选：**在前**或**在后**。    |
|    **圆角大小**    |    圆点的圆角大小，为0时显示为方形，为1时显示为圆形。    |
|    **旋转角度**    |    圆点的旋转角度，单位°。    |
|    **间距**    |    文字到状态点之间的间距，单位px。    |

## 数据面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8172039761/p606586.png)

### **配置字段说明**

|    **字段**    |    **说明**    |
|    ----    |    ----    |
|    name    |    （可选）设置状态的文本内容。    |
|    value    |    （可选）设置状态的种类，需要与**状态种类**  \>   **状态类型名**配置项的内容对应，并且使用状态种类中定义的样式进行渲染。    |

__表 1\. 配置项说明__
|    **配置项**    |    **说明**    |
|    ----    |    ----    |
|    **受控模式**    |    打开开关，资产初始化状态下不请求数据，仅通过回调ID或蓝图编辑器配置的方法发起请求数据；关闭开关，可以使用自动更新请求数据。开关默认为关闭状态。    |
|    **自动更新请求**    |    选中后可以设置动态轮询，还可以手动输入轮询的时间频次。取消选中后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和回调ID事件来触发请求更新数据。    |
|    **数据源**    |    单击**配置数据源**，可在**设置数据源**面板中修改数据源类型和数据查询代码、预览数据源返回结果以及查看数据响应结果，详情请参见[配置资产数据](/zh/datav/datav-6-0/user-guide/configure-widget-data#task-2376875)。    |
|    **数据过滤器**    |    数据过滤器提供数据结构转换、筛选和一些简单的计算功能。单击**添加过滤器**，可在**设置数据源**面板配置数据过滤器脚本，详情请参见[过滤器使用说明](/zh/datav/datav-6-0/user-guide/use-the-data-filter#task-1322674)。    |
|    **数据响应结果**    |    展示数据请求的响应结果。当数据源发生改变时，可单击右侧的![刷新图标 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0376703061/p89093.png)图标，实时查看数据响应结果。    |

## 交互面板

此组件没有交互事件。

## 蓝图编辑器交互配置

1. 在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2. 单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的**状态卡片**组件，在画布中可以看到如下图所示的状态卡片的蓝图编辑器配置参数。![状态卡片蓝图参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6762800461/p69950.jpg)

  * **事件**

|    **事件**    |    **说明**    |
|    ----    |    ----    |
|    **当数据请求完成时**    |    数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
|    **当数据请求失败时**    |    数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
  * **动作**

|    **动作**    |    **说明**    |
|    ----    |    ----    |
|    **请求数据接口**    |    重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如状态卡片配置了API数据源为https://api.test，传到**请求数据接口**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。    |
|    **导入数据接口**    |    按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。    |
|    **更新组件配置**    |    动态更新组件的样式配置。需要先在组件的**配置**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。    |
|    **显示**    |    显示组件，参考数据示例如下。return {   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" };    |
|    **隐藏**    |    隐藏组件，参考数据示例如下。return {   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" };    |
|    **切换显隐状态**    |    切换组件显示或者隐藏，参考数据示例如下。return {   "animationIn": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   },   "animationOut": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   } };    |
|    **移动**    |    将组件移动到指定位置，参考数据示例如下。return {   // 移动方式。绝对定位：to，相对定位：by。默认值：to。   "positionType": "to",   // 指定位置。x坐标，y坐标。   "attr": {     "x": 0,     "y": 0   },   // 动画方式。   "animation": {     "enable": false,     // 动画延时。     "animationDuration": 1000,     // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。     "animationEasing": "linear"   } };    |

## **案例演示**

本案例通过单击轮播列表的某一行，实现状态卡片的动态展示。

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 选择任一可视化应用，单击编辑，进入画布编辑器页面。
3. 添加**轮播列表**和**状态卡片**两个组件到画布中。
4. 单击轮播列表，选择配置面板，修改**自定义列**，设置三个标签。修改**全局 > 表格行数**为3。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7507739761/p606637.png)

**说明**  
  * Cluster-集群
  * VM-虚拟机
  * Status-状态
5. 选择数据面板，修改静态数据。  
```  
[  
  {  
    "Cluster": "华东",  
    "VM": "vm-001",  
    "Status": "正常"  
  },  
  {  
    "Cluster": "华南",  
    "VM": "vm-002",  
    "Status": "未连接"  
  },  
  {  
    "Cluster": "华西",  
    "VM": "vm-003",  
    "Status": "故障"  
  },  
  {  
    "Cluster": "华北",  
    "VM": "vm-004",  
    "Status": "正常"  
  }  
]  
```
6. 单击状态卡片，修改状态种类。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7507739761/p606648.png)

**说明**  
  * 正常-绿色
  * 故障-红色
  * 未连接-白色
7. 右键单击组件，将两个组件导入蓝图编辑器中。
8. 连接组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7507739761/p606641.png)
9. 配置串行数据处理节点的处理方法。  
```  
return [  
  {  
    "name": data.VM,  
    "value": data.Status,  
  }  
]  
```
10. 单击页面右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0269688761/p589281.png)图标，预览展示结果。![这一块拍_Trim](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7507739761/p606655.gif)