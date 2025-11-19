<!DOCTYPE html> 

本文介绍时间器组件的图表样式和各配置项的含义。

## **图表样式**

时间器是文字组件的一种，支持自定义时间器的图标样式和文本样式，包括图标的大小、颜色、位置以及时间的显示格式等，能够在可视化应用中展示系统的当前时间，帮助您合理控制可视化应用或可视化应用中某个模块的演示时间。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3902939761/p606969.png)

## 配置面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3902939761/p606972.png)
* **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
* **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
* **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
* **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。  
  * 手动输入角度值，控制组件的旋转角度。
  * 拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
  * 单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
  * 单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
* **不透明度**：取值范围为0\~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
* **图标样式**：时间器中图标的样式，单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制图标样式的显隐。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3902939761/p606973.png)

| **参数** | **说明**                                                                                                                        |
| ---- | ---- |
| **大小** | 图标的大小，若不需要图标则设置为0。                                                                                                            |
| **颜色** | 图标的颜色，请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改。 |
| **边距** | 图标与时间器文本之间的距离。                                                                                                                |
* **时间器**

| **参数**     | **说明**                                                                                                                                                                                                          |
| ---- | ---- |
| **文本样式**   | 设置时间器文本的字体、字号、字体颜色和字体粗细。                                                                                                                                                                                        |
| **格式化**    | 设置时间器文本的显示格式。默认为**yyyy-MM-dd HH:mm:ss**，表示“年月日时分秒”的时间格式，为24小时制的格式。如果为**hh:mm:ss**，表示12小时制的格式。                                                                                                                   |
| **间隔时间**   | 设置组件时间变化的间隔时间，单位为ms。例如设置为10000ms，那么组件的时间每隔10s变化一次。                                                                                                                                                              |
| **停住时间**   | 时间器中的时间是不断变化的，此配置项可以设置时间器的时间在什么时候停住，不再发生变化。需要与**格式化**配置项中配置的时间格式保持一致。 例如设置**停住时间**为**2023-05-27 11:52:00**，那么当时间器的时间变化到**2023-05-27 11:52:00**时，时间将停住，不再变化。                                                     |
| **停住显示时间** | 设置时间器的时间停住后，显示的时间，只有配置了**停住时间**后才会生效。需要与**格式化**配置项中配置的时间格式保持一致。 例如设置**停住时间**为**2023-05-27 11:52:00**，**停住显示时间**为**2023-05-28 12:00:00**，那么当时间器的时间变化到**2023-05-27 11:52:00**时，时间将停住，且显示为**2023-05-28 12:00:00**。 |
| **水平对齐**   | 时间器在水平方向的对齐样式，可选**左对齐**、**居中对齐**和**右对齐**。                                                                                                                                                                       |
| **垂直对齐**   | 时间器在垂直方向的对齐样式，可选**顶对齐**、**居中对齐**和**底对齐**。                                                                                                                                                                       |
* **回调配置**

| **参数**     | **说明**                                                                                                                                       |
| ---- | ---- |
| **定时回调设置** | 单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制定时回调设置的显隐。**回调抛出间隔**：每隔多久抛出一次回调值，单位为ms。     |
| **定点回调设置** | 单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制定点回调设置的显隐。**定点抛出时间**：回调值抛出的时间点，支持表示日期的字符串值。 |

## 数据面板

此组件不需要配置数据，默认读取系统当前时间。

## 交互面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3902939761/p606977.png)

| **交互事件**      | **说明**                                                                                                                                                                                                                                                                 |
| ---- | ---- |
| **当时间变化时**    | 选中**启用**，开启组件交互功能。在当前时间发生变化时，系统会自动抛出回调值，默认抛出time（当前时间）字段值。详细配置请参见[如何配置数字翻牌器组件的回调ID](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards)。**重要** 在当前时间发生变化时，系统会隔一段时间再抛出回调值，此时间可在配置面板的**回调配置**  \>   **回调抛出间隔**中设置，默认为3000ms。 |
| **当时间到设置时间时** | 选中**启用**，开启组件交互功能。当时间到设置的时间时，系统会自动抛出回调值，默认抛出time（当前时间）字段值。详细配置请参见[如何配置数字翻牌器组件的回调ID](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards)。                                                                                   |

## 蓝图编辑器交互配置

1. 在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2. 单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的**时间器**组件，在画布中可以看到如下图所示的**时间器**的蓝图编辑器配置参数。![时间器蓝图参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1978068951/p69952.jpg)

  * **事件**

| **事件**        | **说明**                         |
| ---- | ---- |
| **当时间变化时**    | 当时间变化时抛出的事件，同时抛出当前时间对应的数据项。    |
| **当时间到设置时间时** | 当时间到设置时间时抛出的事件，同时抛出当前时间对应的数据项。 |
  * **动作**

| **动作**     | **说明**                                                                                                                                                                                                                                                                                                                                      |
| ---- | ---- |
| **更新组件配置** | 动态更新组件的样式配置。需要先在组件的**配置**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。                                                                                                                                                                                                                                                     |
| **显示**     | 显示组件，参考数据示例如下。return {   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" };                                                                                                                                                                                                                                 |
| **隐藏**     | 隐藏组件，参考数据示例如下。return {   "animationType": "",   "animationDuration": 1000,   "animationEasing": "linear" };                                                                                                                                                                                                                                 |
| **切换显隐状态** | 切换组件显示或者隐藏，参考数据示例如下。return {   "animationIn": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   },   "animationOut": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   } };                                                                             |
| **移动**     | 将组件移动到指定位置，参考数据示例如下。return {   // 移动方式。绝对定位：to，相对定位：by。默认值：to。   "positionType": "to",   // 指定位置。x坐标，y坐标。   "attr": {     "x": 0,     "y": 0   },   // 动画方式。   "animation": {     "enable": false,     // 动画延时。     "animationDuration": 1000,     // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。     "animationEasing": "linear"   } }; |

## **案例演示**

本案例通过时间戳参数联动页面内与时间戳相关的组件数据查询。

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 选择任一可视化应用，单击编辑，进入画布编辑器页面。
3. 添加**时间器**和**通用标题**两个组件到画布中。
4. 单击时间器，选择配置面板，设置**回调配置 > 定时回调配置**下的`回调抛出间隔`为3000ms。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3902939761/p607064.png)
5. 单击通用标题，选择数据面板，单击**配置数据源**，配置数据源类型为数据库，并编写SQL。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3902939761/p607069.png)  
```  
select :start_time as value  
```
6. 右键单击组件，将两个组件导入蓝图编辑器中。
7. 连接组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3902939761/p607075.png)
8. 配置串行数据处理节点的处理方法。  
```  
return {  
  start_time:  
    new Date(data.time).valueOf() - 60 * 1000, // 当前时间前 60s  
  end_time:  
    new Date(data.time).valueOf() // 当前时间  
}  
```
9. 单击页面右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0269688761/p589281.png)图标，预览展示结果。![3月21日](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3902939761/p607085.gif)