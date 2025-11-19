<!DOCTYPE html> 

本文介绍3D地球组件地图容器的图标样式和各配置项的含义。

## **图表样式**

地球容器是3D地球中用于承载地图本身和各子组件的容器，支持添加球体层、大气层、飞线层等子组件，支持配置地图的渲染模式、背景、视点位置等，能够以3D立体的形式，多角度、多形式地渲染全世界地理位置的实时数据。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8234968761/p582066.png)

## 配置面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7234968761/p582067.png)

* **子组件管理**

  * 添加子组件

    1. 在控制台单击**3D地球**组件，进入右侧的配置页面。
    2. 单击**子组件管理**左侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8234968761/p582068.png)图标。
    3. 选中一个或多个子组件，单击下方的**添加子组件**。添加成功后，子组件会显示在**子组件管理**中。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8234968761/p582069.png)
    4. 单击已添加的子组件，配置子组件参数。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8234968761/p582083.png)
    5. 配置完成后，单击![返回](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8558068951/p134118.png)图标，返回到3D地球配置面板，配置其他子组件。
  * 复制、重命名、删除子组件：鼠标移至已经添加的子组件上，单击右侧的![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6278068951/p39964.png)图标，复制子组件。单击![编辑图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7278068951/p39965.png)图标，修改子组件名称。单击![删除图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7278068951/p39966.png)图标，删除子组件。
* **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
* **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
* **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
* **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。  
  * 手动输入角度值，控制组件的旋转角度。
  * 拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
  * 单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
  * 单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
* **不透明度**：取值范围为0\~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
* **启动投影变换**：打开开关，开启地图投影样式切换类型功能。
* **投影类型**：地图投影的类型选择，可选**球面**和**平面墨卡托**。仅在打开**启动投影变换**配置项后生效。
* **动画时间**：设置投影切换类型时的动画时间，取值范围为0\~100。仅在打开**启动投影变换**配置项后生效。
* **渲染模式**：渲染模式为您提供了更多的图形后期处理效果配置，您可以在渲染模式中选择**高级模式**激活这些配置。![3D地球的高级渲染模式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8468068951/p32091.png)

**高级渲染模式**

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **抗锯齿**    |    组件渲染时的抗锯齿效果，包括**SMAA 抗锯齿**、**FXAA 抗锯齿**和**无抗锯齿**，默认为**无抗锯齿**。    |
|    **bloom阈值**    |    bloom阈值，范围为0\~1。    |
|    **bloom半径**    |    bloom半径，范围为0\~5。    |
|    **bloom强度**    |    bloom强度，范围为0\~1。    |
* **背景设置**：3D地球的背景颜色，请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改。
* **视点设置**：视点包含了**视角**、**经度**、**纬度**和**距离**四个参数，您可以根据摄像机原理调整这些参数，使地球按照您期望的大小和方向展示在可视化应用中。  

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **视角（fov）**    |    表示相机的可视角度，可视角度越大，地球所占相机空间即越小。![视角说明图片](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8468068951/p21433.png)    |
|    **纬度**    |    表示相机视点在地球上的纬度。    |
|    **经度**    |    表示相机视点在地球上的经度。    |
|    **距离**    |    指相机距离地球的距离，距离越大地球显示越小。    |
* **自转速度**：地球的自转速度，范围为0\~10，为0时停止自转。
* **地图交互**：打开开关，开启地图交互功能，在预览或发布页面支持鼠标单击、缩放等交互事件。
* **子组件交互模式**：设置地球容器和子组件的交互模式，包括**鼠标点击**和**鼠标移动**。

## 数据面板

此组件不需要配置数据。

## 交互面板

此组件没有交互事件。

## 蓝图编辑器交互配置

1. 在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2. 单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89087.jpg)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的**3D地球**组件，在画布中可以看到如下图所示的3D地球的蓝图编辑器配置参数。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7234968761/p582084.png)

  * **事件**：无。
  * **动作**

|    **动作**    |    **说明**    |
|    ----    |    ----    |
|    **显示**    |    显示组件，不需要参数。    |
|    **隐藏**    |    隐藏组件，不需要参数。    |
|    **更新组件配置**    |    动态更新组件的样式配置。需要先在组件的**配置**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。    |
|    **切换显隐状态**    |    切换组件显示或者隐藏，参考数据示例如下。 return {   "animationIn": {     "animationType": "",// 动画方式，可选fade，不填无动画。     "animationDuration": 1000,// 显示延时，单位为ms。     "animationEasing": "linear"// 动画函数，可选linear\|easeInOutQuad|easeInOutExpo。   },   "animationOut": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   } }    |
|    **移动**    |    将组件移动到指定位置，参考数据示例如下。 return {   // 移动方式。绝对定位：to，相对定位：by。默认值：to。   "positionType": "to",   // 指定位置。x坐标，y坐标。   "attr": {     "x": 0,     "y": 0   },   // 动画方式。   "animation": {     "enable": false,     // 动画延时。     "animationDuration": 1000,     // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。     "animationEasing": "linear"   } }    |