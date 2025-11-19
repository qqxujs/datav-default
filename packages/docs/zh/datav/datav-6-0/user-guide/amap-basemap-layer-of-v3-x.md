# 高德底图层（v3.x版本） %{#313890}% 

本文介绍高德底图层的图表样式和各配置项的含义。

## **图表样式**

高德底图层是基础平面地图 3.0的子组件，支持独立的样式和交互配置，包括底图的模板、显示内容以及滤镜等，支持接入最新的高德在线地图作为底图，可以根据需要自定义地图样式。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8441833371/p883435.png)

## 配置面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6252577761/p575306.png)

* **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
* **通用**：高德底图层通用配置参数。

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **可见级别**    |    设置高德底图层的可见级别值，取值范围为3\~20，单位级，在设定的级别范围内高德底图层可见，级别之外不可见。    |
|    **不透明度**    |    设置高德底图层的不透明度值，取值范围为0\~100，单位%。数值越大地图样式越不透明。    |
* **图形**：高德底图层图形样式配置参数。

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **地图样式**    |    选择设置地图的样式，包括**标准模板**和**自定义样式**。    |
|    **标准模板**    |    提供多个标准模板样式的地图，可选**标准**、**幻影黑**、**靛青蓝**、**极夜蓝**、**雅士灰**、**月光银**、**青草色**、**涂鸦**、**远山黛**、**马卡龙**和**酱籽**。仅在**地图样式**选择**标准模板**时可配置。    |
|    **高德Key** **/** **高德密钥**    |    **说明** 仅在**地图样式**选择**自定义样式**时可配置。输入已提前申请好的高德地图key，申请方法请参考以下步骤。单击[高德开放平台](http://lbs.amap.com)，注册成为高德开发者。登录**高德开放平台控制台**，在左侧导航栏依次单击应用管理 > 我的应用 > 创建新应用，输入**应用名称**和**应用类型**，完成后单击**新建**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6252577761/p575311.png)单击应用列表右侧的**添加**，在弹出框中输入**Key名称**，选择**服务平台**，并选中页面最下方的**阅读并同意**，完成后单击**提交**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6252577761/p575328.png)提交成功后，在**我的应用**页面进行查看，并将自动生成的key内容保存到本地。![p575331](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0214455071/p759289.png)登录[DataV控制台](https://datav.aliyun.com/)。将上述获取到的key和密钥分别粘贴到高德底图层的**高德key**和**高德密钥**位置。成功后高德在线地图会成为基础平面地图的底图。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8441833371/p883437.png)**重要** 同一个大屏中若存在多个**高德在线底图层**，需要配置相同的**高德Key**和**高德密钥**。    |
|    **地图样式ID**    |    **说明** 仅在**地图样式**选择**自定义样式**时可配置。当您需要使用默认样式时请参见[默认地图样式](#65734e40b8rsp)，使用**样式ID**替换图中的**地图样式ID**。输入已提前创建好的地图样式ID，申请方法请参考以下步骤。登录[高德开放平台自定义地图](https://lbs.amap.com/product/mapstyle#/)，单击**创建地图样式**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6252577761/p575342.png)在左侧选择地图面板导航栏，选择一个模板并单击**创建**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6252577761/p575347.png)创建成功后，可在模板的基础上进行自定义配置。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6252577761/p575360.png)配置完成后，在页面右上角单击保存图标![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6252577761/p575362.png)，再次单击发布图标![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6252577761/p575365.png)。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6252577761/p575367.png)发布成功后，系统弹出**发布成功**对话框。单击**如何自定义地图**，进入使用与分享页面。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6252577761/p575371.png)单击样式ID右侧的**复制**，即可复制样式ID。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8441833371/p882648.png)将上述获取到的样式ID粘贴到**高德底图层**的**地图样式ID**位置。单击配置面板中空白区域，底图层样式就会生效。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8441833371/p883443.png)**说明** 底图层样式显示需要配合高德key和高德密钥使用。    |
|    **显示内容**    |    选择地图上要显示的内容，包括**背景**、**道路**、**建筑物**、**标注**和**路况**等。    |
|    **风格滤镜**    |    单击左侧![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，即可开启风格滤镜配置。开启后，可以为高德底图层添加滤镜效果，设置滤镜的**亮度**、**对比度**、**灰度**、**色相**、**反转**、**饱和度**和**墨度**。    |    
### **默认地图样式**

|    **样式名称**    |    **样式ID**    |
|    ----    |    ----    |
|    标准    |    normal    |
|    幻影黑    |    dark    |
|    靛青蓝    |    blue    |
|    极夜蓝    |    darkblue    |
|    雅士灰    |    grey    |
|    月光银    |    light    |
|    草色青    |    fresh    |
|    涂鸦    |    graffiti    |
|    远山黛    |    whitesmoke    |
|    马卡龙    |    macaron    |
|    酱籽    |    wine    |

## 数据面板

此组件不需要配置数据。

## 交互面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6252577761/p575402.png)

选中**启用**，开启组件交互功能。**高德底图层**子组件拥有交互配置，可单击某个室内地图楼层，触发数据请求，抛出回调值，实现在切换楼层时，动态加载不同楼层的数据。默认抛出`indoormapFloor`字段。具体配置请参见[如何配置数字翻牌器组件的回调ID](/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards)。 

**说明** 

交互需要显示地图楼层时，需要在配置面板的地图样式选择**标准模板**才可以触发。

## 蓝图编辑器交互配置

1. 在画布编辑器页面，单击**基础平面地图 3.0**子组件管理列表中**高德底图层**右侧的![导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89089.jpg)图标。
2. 单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89087.jpg)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的**高德底图层**组件，在画布中可以看到如下图所示的高德底图层的蓝图编辑器配置参数。![高德底图层蓝图参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6158632361/p306867.jpg)

  * **事件**

**室内地图楼层被点击触发**：当单击高德底图层中的某个室内地图楼层时触发回调ID获取楼层内信息。
  * **动作**

|    **动作**    |    **说明**    |
|    ----    |    ----    |
|    **显示组件**    |    显示组件，不需要参数。    |
|    **隐藏组件**    |    隐藏组件，不需要参数。    |