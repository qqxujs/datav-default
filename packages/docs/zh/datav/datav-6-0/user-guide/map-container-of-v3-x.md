  3D平面地图的地图容器（v3.x版本）配置项详解-DataV数据可视化-阿里云

地图容器是3D平面地图（v3.x版本）组件中用于承载地图本身和各子组件的容器，可以选择中国地图和世界地图。均支持添加区域热力层、单点柱状层、呼吸气泡层等子组件，支持配置地图的通用、自然、地形和装饰样式，能够多角度、多形式地渲染平面地图的3D效果。本文介绍3D平面地图容器各配置项的含义。

## 镜头设置

1.  单击画布中****3D平面地图****组件右上方的![进入镜头设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7809385061/p184080.png)按键或者双击组件进入镜头设置界面。
    
    -   中国地图初始界面![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7654538761/p580598.png)
        
    -   世界地图初始界面![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7654538761/p580599.png)
        
2.  在镜头设置界面，您可以自由改变地图的镜头视角，更改完成后需要将设定的地图镜头视角保存。
    
    通过鼠标更改地图镜头视角的方法有如下几种：
    
    -   双击地图中的省或直辖市区域及地市级区域，即可下钻定位并放大该区域视角到地图正中间。
        
    -   双击地图空白处，即可上钻一级且定位并放大该上钻后区域视角到地图正中间。
        
    -   单击并按住鼠标右键，可以拖动平移地图。
        
    -   上下滚动鼠标滑轮，可以缩放地图的大小。
        
    -   单击并按住鼠标左键，可以旋转地图。
        
3.  设置完地图镜头后，单击镜头设置界面右上角的![保存镜头](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5996632361/p306211.jpg)图标，即可保存地图镜头后关闭镜头设置界面。
    
    **说明**
    
    退出镜头设置界面后，依旧可以重新进入修改地图镜头样式。每次新进入镜头设置页面，镜头视角如有改动都需要重新保存。
    

## 配置面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7654538761/p580606.png)

-   ****子组件管理****
    
    -   添加子组件
        
        1.  在控制台中单击****3D平面地图****组件，进入右侧的****配置****页面。
            
        2.  单击****子组件管理****左侧的![添加](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6701884261/p289478.png)图标。
            
        3.  选中一个或多个子组件，单击下方的****+添加子组件****。添加成功后，子组件会显示在****子组件管理****列表中。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7654538761/p580613.png)
            
        4.  单击****添加子组件****面板左上角的****以分析模式创建****按键，即可切换到分析模式子组件面板中，同样可参见上述步骤添加一个或多个分析模式的子组件。
            
        5.  单击已经添加的子组件，配置子组件参数。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7654538761/p580616.png)
            
        6.  配置完成后，单击![返回](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8558068951/p134118.png)图标，返回到3D平面地图配置面板，配置其他子组件。
            
    -   复制、重命名、删除子组件：鼠标移至已经添加的子组件上，单击右侧的![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6278068951/p39964.png)图标，复制子组件。单击![编辑图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7278068951/p39965.png)图标，修改子组件名称。单击![删除图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7278068951/p39966.png)图标，删除子组件。
        
        **说明**
        
        更多子组件的相关操作请参见[管理地图子组件](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/manage-child-widgets-of-a-map-widget#task-2376365)。
        
-   **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
-   **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
-   **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
-   **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。
    -   手动输入角度值，控制组件的旋转角度。
    -   拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
    -   单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
    -   单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
-   **不透明度**：取值范围为0~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
-   ****快速样式****：您可以自定义选择一款地图的快速风格样式，可选****极夜黑****、****湛蓝****、****松绿石蓝****、****紫魅****和****黑金****五种样式。
    
-   ****通用****：地图容器的通用配置。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7654538761/p580619.png)
    
    **参数**
    
    **说明**
    
    ****视图偏移****
    
    地图视图偏移样式，配置地图在视觉上的水平和垂直方向的偏移量值、取值范围-100~100。
    
    ****视图角度****
    
    地图的倾斜角度和旋转角度值。
    
    ****视图缩放****
    
    地图的地图距离视线的比例大小值，取值范围0.5~2。
    
    ****背景颜色****
    
    地图的背景颜色，请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改。
    
    ****场景交互****
    
    地图场景交互功能，包括可选中场景拖拽、缩放和旋转的交互配置，在预览或发布页面下，可实现交互效果。
    
-   ****自然****：地图的自然效果配置。
    
    -   ****光照****：地图光照效果。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7654538761/p580621.png)
        
        **参数**
        
        **说明**
        
        ****环境光****
        
        设置环境光的颜色和光照强度值，取值范围0~100。
        
        ****平行光****
        
        设置平行光沿着x轴、y轴和z轴三个方向的角度值、光照颜色和光照强度值，取值范围0~100。
        
    -   ****水体****：地图中的水体效果样式，可单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制水体样式的显隐。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7654538761/p580622.png)
        
        **参数**
        
        **配置**
        
        ****水体颜色****
        
        地图水体的颜色。
        
        ****法线贴图****
        
        地图水体的法线贴图样式，目前只有一种样式可选。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7654538761/p580671.png)
        
        ****光照颜色****
        
        水体的光照颜色。
        
        ****光照方向****
        
        拖动滑块，设置水体在x、y、z三个方向的光照范围。
        
        ****流动速度****
        
        拖动滑块，设置水体在水平和垂直方向的流动速度值，取值范围-100~100。
        
        ****波浪大小****
        
        拖动滑块，设置水体波浪样式大小值，取值范围1~100。
        
        ****倒影畸变****
        
        拖动滑块，设置水体倒影影像畸变程度值，取值范围0~10。
        
    -   ****雾化效果****：地图雾化效果样式，可单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制雾化效果的显隐。
        
        **参数**
        
        **说明**
        
        ****颜色****
        
        设置地图雾化的颜色。
        
        ****距离****
        
        拖动滑块，设置地图雾化距离，取值范围0~100。
        
-   ****地形****：设置地图地形的样式参数。
    
    -   ****主体地形****：设置当前所有子组件数据显示的区域地形的样式，在主体地形内可以配置交互操作，单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制主体地形的显隐。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7654538761/p580625.png)
        
        -   ****地形高度比****：拖动滑块，设置地形的高度范围值和高度拉低比例值。
            
            **参数**
            
            **说明**
            
            ****范围****
            
            主体地形高度比例范围值，默认值1，取值范围0.01~1。
            
            ****拉低比例****
            
            小面积区域相对于主体地形高度的比例值，取值范围0.01~1。
            
        -   ****区域边界****
            
            **参数**
            
            **说明**
            
            ****描边样式****
            
            地图中区域边界的描边样式，包括设置描边线的粗细值和描边线的颜色，可单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制描边样式的显隐。
            
            ****飞线样式****
            
            地图中区域边界内的飞线样式，包括设置飞线的类型、选择飞线的混合模式、飞线的长度值、飞线的粗细值大小、飞线的颜色和飞线在正负控制方向上的飞行速度值，可单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制飞线样式的显隐。
            
            ****文字标注****
            
            地图中区域边界内的文字标注样式，包括设置文字的字体样式。文字粗细样式、字号大小、文字的颜色、文字描边粗细值和描边的颜色，可单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制文字标注的显隐。
            
        -   ****顶面样式****：设置主体地形顶面样式参数，包括可自定义调整顶面的金属质感范围值、粗糙程度范围值、材质的颜色；还可以单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制顶面纹理贴图、法线贴图、发光贴图样式和蒙版遮罩样式的显隐，选择不同贴图的类型及贴图强度值以及颜色。
            
            **说明**
            
            ****纹理贴图****、****法线贴图****、****发光贴图****在配置样式时，支持****单纹理贴图****和****栅格瓦片服务地址****两种形式，其中栅格瓦片服务地址为xyz瓦片服务，URL链接中必须包含{x}{y}{z}占位符， 如果您使用自有栅格服务，则需要提供至少12层的瓦片。
            
        -   ****侧面样式****：设置主体地形侧面样式参数，包括可自定义开启或关闭侧面倒影的效果、侧面材质的颜色、选择侧面纹理贴图的样式和发光贴图的样式、设置发光贴图颜色、强度值和在水平及垂直方向的发光速率值。单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制纹理贴图和发光贴图的显隐。
            
        -   ****发光围栏****：设置主体地形发光围栏样式参数，包括可自定义开启或关闭发光围栏倒影的效果、主体地形底部高度值、高度比例范围的值、围栏材质的颜色、围栏纹理贴图的样式以及发光贴图的样式、设置发光贴图颜色、强度值和在水平及垂直方向的发光速率值。单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制发光贴图的显隐。
            
    -   ****背景地形****：设置地图除了主体地形以外的背景地形区域的样式，背景地形设置不会响应交互事件，可单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制背景地形的显隐。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7654538761/p580626.png)
        
        -   ****地形高度比****：拖动滑块，设置背景地形相对于主体地形的高度比例值。
            
        -   ****区域边界****：背景地形中区域边界的描边样式，包括设置描边线的粗细值和描边线的颜色，可单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制描边样式的显隐。
            
        -   ****顶面样式****：设置背景地形顶面样式参数，包括可自定义调整顶面的金属质感范围值、粗糙程度范围值、材质的颜色；还可以单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制顶面纹理贴图、法线贴图和发光贴图样式的显隐，选择不同贴图的类型及贴图强度值以及颜色。
            
            **说明**
            
            ****纹理贴图****、****法线贴图****、****发光贴图****在配置样式时，支持****单纹理贴图****和****栅格瓦片服务地址****两种形式，其中栅格瓦片服务地址为xyz瓦片服务，URL链接中必须包含{x}{y}{z}占位符， 如果您使用自有栅格服务，则需要提供至少12层的瓦片。
            
        -   ****侧面样式****：设置背景地形侧面样式参数，包括可自定义开启或关闭侧面倒影的效果、侧面材质的颜色、选择侧面纹理贴图的样式和发光贴图的样式、设置发光贴图颜色和强度值。单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制发光贴图的显隐。
            
-   ****装饰****：设置地图装饰样式的参数。
    
    -   ****动态装饰****：单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制动态装饰的显隐。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7654538761/p580669.png)
        
        **参数**
        
        **说明**
        
        ****底部高度比****
        
        拖动滑块，调整底部高度比例值，取值范围0.01~10。
        
        ****旋转速度****
        
        设置动态装饰的旋转速度值，取值范围-100~100，单位度/每帧。
        
        ****呼吸速度****
        
        设置动态装饰的呼吸速度值，取值范围0~100。
        
        ****缩放比例****
        
        设置动态装饰的缩放比例值，取值范围0~2。
        
        ****材质颜色****
        
        设置动态装饰材质的颜色。
        
        ****纹理贴图****
        
        设置动态装饰材质的纹理贴图样式，可选四种类型的贴图。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7654538761/p580680.png)
        
        ****粗糙程度****
        
        拖动滑块，调整动态装饰的粗糙程度范围值，取值范围0~100。
        
        ****金属质感****
        
        拖动滑块，调整动态装饰的金属质感范围值，取值范围0~100。
        
        ****发光效果****
        
        设置动态装饰材质的发光贴图的颜色、可选四种类型的贴图样式、贴图强度值。单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制发光贴图的显隐。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7654538761/p580684.png)
        
    -   ****背景网格****：单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制背景网格的显隐。
        
        **参数**
        
        **说明**
        
        ****底部高度比****
        
        拖动滑块，调整底部高度比例值，默认值为0，取值范围0.01~10。
        
        ****材质颜色****
        
        设置背景网格材质的颜色。
        
        ****纹理贴图****
        
        设置背景网格材质的纹理贴图样式，可选四种类型的贴图、设置在水平和垂直方向平铺的值。单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制纹理贴图的显隐。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7654538761/p580686.png)
        
        ****粗糙程度****
        
        拖动滑块，调整背景网格的粗糙程度范围值，取值范围0~100。
        
        ****金属质感****
        
        拖动滑块，调整背景网格的金属质感范围值，取值范围0~100。
        
        ****发光效果****
        
        设置背景网格材质的发光贴图的颜色、可选四种类型的贴图样式、贴图强度值、在水平和垂直方向平铺的值以及在水平和垂直方向的发光速率值。单击![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标控制发光贴图的显隐。
        
-   **边界**：设置**国界**、**海岸**和**省界**的边界颜色和边界线的粗细值。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7654538761/p580689.png)
    

## 数据面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7654538761/p580691.png)

您可以参见[层级生成器功能介绍](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/introduction-to-features-of-a-layer-generator)，自定义设置边界和下钻层级（最大到区县）。

表 1. 配置项说明

**配置项**

**说明**

**受控模式**

打开开关，资产初始化状态下不请求数据，仅通过回调ID或蓝图编辑器配置的方法发起请求数据；关闭开关，可以使用自动更新请求数据。开关默认为关闭状态。

**自动更新请求**

选中后可以设置动态轮询，还可以手动输入轮询的时间频次。取消选中后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和回调ID事件来触发请求更新数据。

**数据源**

单击**配置数据源**，可在**设置数据源**面板中修改数据源类型和数据查询代码、预览数据源返回结果以及查看数据响应结果，详情请参见[配置资产数据](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-widget-data#task-2376875)。

**数据过滤器**

数据过滤器提供数据结构转换、筛选和一些简单的计算功能。单击**添加过滤器**，可在**设置数据源**面板配置数据过滤器脚本，详情请参见[过滤器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-the-data-filter#task-1322674)。

**数据响应结果**

展示数据请求的响应结果。当数据源发生改变时，可单击右侧的![刷新图标 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0376703061/p89093.png)图标，实时查看数据响应结果。

## 交互面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7654538761/p580718.png)

**事件**

**说明**

****当区域被点击时触发****

选中****启用****，开启组件交互功能。当****当区域被点击时触发****时，会抛出`treeID`和`adcode`变量值。具体配置请参见[如何配置数字翻牌器组件的回调ID](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards)。

****当区域被双击触发****

选中****启用****，开启组件交互功能。当****当区域被双击触发****时，会抛出`treeID`和`adcode`变量值。具体配置请参见[如何配置数字翻牌器组件的回调ID](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards)。

****当区域上钻触发****

选中****启用****，开启组件交互功能。当****当区域上钻触发****时，会抛出`treeID`和`adcode`变量值。具体配置请参见[如何配置数字翻牌器组件的回调ID](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards)。

## 蓝图编辑器交互配置

1.  在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2.  单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
3.  在蓝图编辑器配置页面，单击导入节点栏内的****3D平面地图****组件，在画布中可以看到如下图所示的3D平面地图组件的蓝图编辑器配置参数。![蓝图参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5978348461/p411797.jpg)
    
    -   ****事件****
        
        **事件**
        
        **说明**
        
        ****当自定义下钻层级数据接口请求完成时****
        
        数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板****数据****页签的****数据响应结果****区域。
        
        ****当自定义下钻层级数据接口请求失败时****
        
        数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板****数据****页签的****数据响应结果****区域。
        
        ****当区域被点击时触发****
        
        当单击某一块区域时触发事件并抛出数据。
        
        ****当区域被双击触发****
        
        当双击某一块区域时触发事件并抛出数据。
        
        ****当区域上钻触发****
        
        当区域上钻时触发事件并抛出数据。
        
    -   ****动作****
        
        **动作**
        
        **说明**
        
        ****请求自定义下钻层级数据接口****
        
        重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如地图容器配置了API数据源为`https://api.test`，传到****请求自定义下钻层级数据接口****动作的数据为`{ id: '1'}`，则最终请求接口为`https://api.test?id=1`。
        
        ****导入自定义下钻层级数据接口****
        
        按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板****数据****页签的****数据响应结果****区域。
        
        ****更新自定义区域****
        
        更新自定义区域，存在以下三种配置自定义区域字段的情况。
        
        -   `defaultArea`：不改变区域数据，仅改变当前主体地形区域。
            
        -   `data`：设置区域数据并显示根节点。
            
        -   `data`和`defaultArea`：设置区域数据，并显示设置的主体地形区域。
            
        
        参考数据示例如下。
        
        ```
        return
        {  
          "data": {},  //TopoJSON对象
          "defaultArea": "" //默认区域数节点编码，取数据中treeID或adcode字段
        }
        ```
        
        ****设置相机****
        
        设置相机，参考数据示例如下。
        
        ```
        return {"maxDistance": 200000000}
        ```
        
        ****更新配置****
        
        更新配置，不需要参数。
        
        ****更新组件配置****
        
        动态更新组件的样式配置。需要先在组件的****配置****面板中，单击****复制配置到剪贴板****，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。
        
        ****显示****
        
        显示组件，参考数据示例如下。
        
        ```
        return{
          "animationType": "",
          "animationDuration": 1000,
          "animationEasing": "linear"
        }
        ```
        
        ****隐藏****
        
        隐藏组件，参考数据示例如下。
        
        ```
        return{
          "animationType": "",
          "animationDuration": 1000,
          "animationEasing": "linear"
        }
        ```
        
        ****切换显隐状态****
        
        切换组件显示或者隐藏，参考数据示例如下。
        
        ```
        return {
          "animationIn": {
            "animationType": "",
            "animationDuration": 1000,
            "animationEasing": "linear"
          },
          "animationOut": {
            "animationType": "",
            "animationDuration": 1000,
            "animationEasing": "linear"
          }
        }
        ```
        
        ****移动****
        
        将组件移动到指定位置，参考数据示例如下。
        
        ```
            return{      
              // 移动方式。绝对定位：to，相对定位：by。默认值：to。
                "positionType": "to",
              // 指定位置。x坐标，y坐标。
              "attr": {
                "x": 0,
                "y": 0
              },
              // 动画方式。
              "animation": {
                "enable": false,
                // 动画延时。
                "animationDuration": 1000,
                // 动画曲线。可选值为：linear|easeInOutQuad|easeInOutExpo。
                "animationEasing": "linear"
              }
            }
        ```