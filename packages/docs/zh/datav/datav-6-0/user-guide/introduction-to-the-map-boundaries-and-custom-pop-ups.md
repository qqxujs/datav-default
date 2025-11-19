<!DOCTYPE html> 

本文通过基础内容及实操演示两部分介绍基础平面地图自定义边界以及自定义弹窗样式实现的方法。

## 基础内容介绍

### 课程说明

* **自定义区域下钻层**子组件自定义边界，分为两部分内容介绍：

  * 在原有的边界上不下钻到区县，仅下钻到市。
  * 自定义边界处理。
* **基础平面地图**组件弹窗自定义样式，有以下几种方法：

  * 数据过滤器实现。
  * 蓝图编辑器实现弹窗。
  * Hook二次开发实现弹窗绑定。

### 边界数据说明

* **基础平面地图**组件所使用的边界数据是基于GeoJSON的数据格式，GeoJSON是一种对各种地理数据结构进行编码的格式，使用JavaScript对象表示法的地理空间信息数据交换格式。GeoJSON对象可以表示几何、特征或者特征集合，支持的几何类型包括：点、线、面、多点、多线、多面和几何集合。
* **自定义区域下钻层**子组件所使用的topojson是基于GeoJSON数据的扩展，增加了拓扑逻辑的编码，即topojson是带有嵌套的GeoJSON面数据。

### 区域下钻自定义边界（仅下钻到市）

**自定义区域下钻层**子组件只需要下钻到市一级，不需要下钻到区县。通过在[DataV.GeoAtlas](http://datav.aliyun.com/static/tools/atlas)进行设置，使用对应的API接口或静态数据替换原始自定义topojson数据接口数据就可以实现该需求。具体操作步骤请参见`自定义区域下钻层（仅下钻到市）`。

### 区域下钻自定义边界（自定义边界）

**自定义区域下钻层**子组件需要下钻到镇一级或者自己定义的边界时，通过在[DataV.GeoAtlas](http://datav.aliyun.com/static/tools/atlas)进行设置，使用对应的API接口或静态数据替换原始自定义topojson数据接口数据就可以实现该需求。具体操作步骤请参见`自定义区域下钻层（自定义边界）`。

### 自定义弹窗（数据过滤器实现）

**基础平面地图**组件中部分子组件本身支持弹窗效果展示，只需要修改子组件数据源，添加对应的`info`字段数据，其中`info`字段代表弹窗内容展示。如果需要设置弹窗样式，可以在数据过滤器里给`info`字段添加html和css代码来实现。具体操作步骤请参见`自定义弹窗（数据过滤器实现）`。 

### 自定义弹窗（专业版蓝图编辑器实现）

蓝图编辑器实现弹窗效果是基于控制组件的显示和隐藏样式来展示。通过在可视化应用编辑页面中预先设置好展示的组件，对其设置为隐藏。通过基础平面地图的子组件点击事件来触发隐藏的组件显示，即可实现类似的弹窗效果。具体操作步骤请参见`自定义弹窗（蓝图编辑器实现）`。

### 自定义弹窗（尊享版Hook实现）

Hook中自定义弹窗展示需要先在可视化应用编辑页面预先设置一个弹窗组，在拥有弹窗组的地图子组件数据中设置`type`字段作为绑定条件，设置完成后在hook中写子组件的bindGroup方法来绑定对应的弹窗内容，即可实现弹窗内容展示。具体操作步骤请参见`自定义弹窗（Hook实现）`。

**说明** 

hook详细代码说明如下：

```
let q =stage.get('group_1yGJW');//组件成组后的对象
或者组件对象
let w =stage.get(‘datavmap-canvas2d-area_uRMk3’);//区域热力层对象或者散点层组件对象
//拿到组件对象的最上层div也就是container对象 然后设置type这个type要与区域热力层的热力值接口里设置type字段对应上
//点击触发时，需要该区域有热力值数据，并且type字段为ok(可自定义)那么就可以正常示，
//散点层也是同理跟type绑定
w.bindGroup({
type: "ok", container:q.container});
```

## 实操演示

### 自定义区域下钻层（仅下钻到市）

1. 在DataV控制台，选择您的一个可视化应用，单击**编辑**。
2. 在**全部资产**栏，选中**地图** \> **基础平面地图**，单击添加到画布编辑器中。
3. 在**配置**面板，单击**+子组件管理**，选择**自定义区域下钻层**，单击**+添加子组件**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0825833371/p883721.png)
4. 单击选择**自定义区域下钻层**子组件，切换到组件的**数据**面板，单击打开**自定义topojson数据接口**。
5. 登录[DataV.GeoAtlas](http://datav.aliyun.com/static/tools/atlas)，选择**层级生成器**。

  1. 在根区域处单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3963935761/p555302.png)图标，绑定数据。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0825833371/p882479.png)
  2. 在弹窗中输入**浙江省**，不勾选**同时添加所有下游节点**，单击**确认**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2963935761/p555306.png)
  3. 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3963935761/p555315.png)图标，添加子节点，即省份下的所有市。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2963935761/p555314.png)
  4. 依次绑定浙江省下所有的市级区域，以杭州市和绍兴市为例。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3963935761/p555316.png)
  5. 单击**导出层级（DataV专有）**，将层级json文件导出到本地保存。
6. 打开文件，复制内容粘贴至**自定义topojson数据接口**处。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3963935761/p555329.png)
7. 画布编辑器右上角单击预览![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2963935761/p555119.png)图标，预览配置效果。双击区域完成下钻，双击非选中区域完成回滚。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0825833371/p882481.png)

### 自定义区域下钻层（自定义边界）

1. 在DataV控制台，选择您的一个可视化应用，单击**编辑**。
2. 在**全部资产**栏，选中**地图** \> **基础平面地图**，单击添加到画布编辑器中。
3. 在**配置**面板，单击**+子组件管理**，选择**自定义区域下钻层**，单击**+添加子组件**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0825833371/p883720.png)
4. 单击选择**自定义区域下钻层**子组件，切换到组件的**数据**面板，单击打开**自定义topojson数据接口**。
5. 登录[DataV.GeoAtlas](http://datav.aliyun.com/static/tools/atlas)，选择**层级生成器**。

  1. 在根区域处单击三次![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3963935761/p555315.png)图标，添加三个子节点。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0825833371/p882480.png)
  2. 依次绑定陕西省、甘肃省和宁夏回族自治区，并选中同时添加所有下游节点。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3963935761/p555354.png)
  3. 单击**范围选择器**，在地图中分别下钻至陕西省、甘肃省和宁夏回族自治区，单击如图位置，将三者json文件导出到本地备用。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3963935761/p555359.png)
  4. 选择**边界生成器**，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2963935761/p555362.png)图标，将已保存的三个省份的json文件导入到地图中。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0825833371/p883680.png)
  5. 在下侧的属性表面板中全选所有内容，在地图上单击**合并**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0825833371/p883679.png)
  6. 在属性表面板中选择已合并的区域，单击**导出GeoJSON**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0825833371/p883677.png)
  7. 返回层级生成器，将导出的数据绑定到根区域。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2963935761/p555380.png)
  8. 以同样的方式将需要下钻的镇级等内容添加到对应区县的下面即可完成下钻，此处不再赘述。
  9. 单击**导出层级（DataV专有）**，将层级json文件导出到本地保存。
6. 打开文件，复制内容粘贴至**自定义topojson数据接口**处。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3963935761/p555386.png)
7. 画布编辑器右上角单击预览![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2963935761/p555119.png)图标，预览配置效果。双击区域完成下钻，双击非选中区域完成回滚。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0825833371/p883674.png)

### 自定义弹窗（数据过滤器实现）

1. 在画布编辑器中，选择添加一个**基础平面地图**组件，在组件的右侧**配置**面板，单击**+子组件管理**，选择**图标散点层**，单击**+添加子组件**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0825833371/p883709.png)
2. 单击图标散点层名称，进入**数据**面板，单击**配置数据源**，在设置数据源模块，勾选**数据过滤器**，单击![添加](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2235502461/p383707.png)图标添加一个过滤器，用于过滤展示指定的图标散点层弹窗样式内容，添加完成后，单击**保存**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2963935761/p555541.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2963935761/p555543.png)
3. 为方便观察，可以在静态数据模块保留一个点位数据，单击预览![预览 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3586219361/p361550.png)图标，查看展示效果。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0825833371/p883672.png)

**说明**  
如果需要设置弹窗的展示样式，可以在**配置**页面，修改自定义弹框样式下的弹框样式模块。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2963935761/p555546.png)

### 自定义弹窗（蓝图编辑器实现）

1. 首先，按照下图在画布编辑器中预设一个包括**按钮**、**柱状图**、**通用标题**以及**自定义背景块**组件的组，再添加**基础平面地图**组件并添加**图标散点层**子组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0825833371/p883688.png)
2. 将组调整至如图样式并隐藏，关闭基础平面地图的自定义弹框。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3963935761/p555566.png)
3. 单击选择**组**、**基础平面地图**、**图标散点层**以及组中的**按钮**组件，右键单击导出到蓝图编辑器。
4. 在蓝图编辑器中，单击组件节点，添加到画布中，按照如下图连线。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2963935761/p555557.png)
5. 单击预览![预览 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3235502461/p377533.png)图标，查看预览效果。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0825833371/p883697.png)

### 自定义弹窗（尊享版Hook实现）

1. 在画布编辑器，单击添加一个**基础平面地图**组件，在组件的**配置**面板，单击**区域热力层**子组件名称，在配置页面关闭**弹框**的按钮开关。
2. 在区域热力层子组件的**数据**面板，选择**热力值数据接口**，单击**配置数据源**，在静态数据中参考下图为浙江省添加`type`字段并配置为`ok`。![浙江省字段](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3235502461/p383776.png)
3. 设置完成后，在画布编辑器添加包含柱状图和通用标题的组，复制组的ID。

**说明**  
  * 对于windows系统，复制组ID的快捷键为：ctrl+c+i。
  * 对于mac操作系统，复制组ID的快捷键为：cmd+c+i。
  * 您也可以打开浏览器控制台，在控制台中找到Console信息，单击组件，可以查看并复制组的ID。
4. 复制成功后，打开Hook页面，配置组ID和区域热力层ID。登录Hook页面的方法请参见：[DataV二次开发教程使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/datav-custom-development-instructions)。

**说明**  
hook页面中详细代码说明如下：  
```  
let q =stage.get('group_1yGJW');//组件成组后的对象  
或者组件对象  
let w =stage.get(‘datavmap-canvas2d-area_uRMk3’);//区域热力层对象或者散点层组件对象  
//拿到组件对象的最上层div也就是container对象 然后设置type这个type要与区域热力层的热力值接口里设置type字段对应上  
//点击触发时，需要该区域有热力值数据，并且type字段为ok(可自定义)那么就可以正常示，  
//散点层也是同理跟type绑定  
w.bindGroup({  
type: "ok", container:q.container});  
```
5. 设置完成后可以将**区域热力层**组件配置页面的**弹框**按钮打开。
6. 单击预览![预览 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3235502461/p377533.png)图标，查看预览效果。![Hook设置预览](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3235502461/p383779.png)
7. 对于其它组件，您也可以参照上述方法设置自定义弹窗。

## **视频链接**

DataV小课堂直播视频：[基础平面地图自定义边界以及弹窗样式介绍直播视频使用教程](https://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/d/ud/351640492530.mp4)。

## **自定义弹窗总结**

* 数据过滤器实现：适合展示简单的文字弹窗内容，支持所有版本，但展示内容丰富程度取决于个人前端开发能力。
* 蓝图编辑器实现：适合展示图表与文字，能使用现有的组件来丰富弹窗内容，需要专业版及以上版本支持，操作难度较为简单，但弹窗效果会比较突兀。
* Hook实现：与蓝图编辑器相同，能使用现有的组件来丰富弹窗内容，需要尊享版Hook权限支持，需要基本的前端开发能力，弹窗效果更接近于组件原生效果。