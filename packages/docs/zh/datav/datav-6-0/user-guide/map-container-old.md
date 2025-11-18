  3D平面世界地图（已下线）的地图容器配置指南-DataV数据可视化-阿里云

地图容器是3D平面世界地图中用于承载地图本身和各子组件的容器，支持添加散点层、飞线层、柱状图层等子组件，支持配置地图的位置和颜色等，能够以3D立体多角度多形式地渲染全世界地理位置的实时数据。本文介绍3D平面世界地图容器各配置项的含义。

## 配置

-   子组件管理
    -   添加子组件：
        1.  在控制台中单击3D平面世界地图组件，进入右侧的配置页面。
        2.  单击子组件管理左侧的![添加](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9968068951/p127829.png)图标。
        3.  选择一个或多个子组件，单击添加子组件。添加成功后，子组件会显示在子组件管理中。![添加3D平面世界地图子组件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3868068951/p21566.png)
        4.  单击已经添加的子组件，配置子组件参数。![3D平面地图地图子组件配置面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3868068951/p46166.png)
        5.  配置完成后，单击左上角的![返回图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3868068951/p89177.jpg)图标，返回到3D平面世界地图配置面板，配置其他子组件。
    -   复制、编辑、删除子组件：鼠标移至已经添加的子组件上，单击右侧的![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6278068951/p39964.png)图标，复制子组件。单击![编辑图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7278068951/p39965.png)图标，修改子组件名称。单击![删除图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7278068951/p39966.png)图标，删除子组件。
-   搜索配置：单击配置面板右上角的搜索配置，可在搜索配置面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索组件配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842 "通过搜索组件配置功能，您可以快速定位到组件的对应配置项，在搜索配置页面直接修改配置样式，也可以复用同类型的配置样式。")。
-   图表尺寸：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
-   图表位置：包括组件的横坐标和纵坐标，单位为px。横坐标为组件左上角距离页面左边界的像素距离，纵坐标为组件左上角距离页面上边界的像素距离。
-   旋转角度：以组件的中心为中心点，进行旋转，单位为度（°）。
    -   手动输入角度值，控制组件的旋转角度。
    -   拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
    -   单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
    -   单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
-   透明度：取值范围为0~1。为0时，图表隐藏；为1时，图表全部显示。默认为1。
-   全局设置![全局设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4868068951/p21567.png)
    -   相机旋转
        
         
        
        参数
        
        说明
        
        水平方向
        
        相机水平方向的旋转角度，取值范围为-180~180。
        
        垂直方向
        
        相机垂直方向的旋转角度，取值范围为-90~90。
        
    -   相机中心
        
         
        
        参数
        
        说明
        
        纬度
        
        相机中心纬度数值，取值范围为-90~90。
        
        经度
        
        相机中心经度数值，取值范围为-180~180。
        
    -   相机距离：相机距离大小，单位为px，取值范围为18~420。
    -   地图交互：打开开关，开启地图交互功能，在预览或发布页面支持鼠标等点击交互事件。关闭开关，关闭地图交互功能。
-   填充设置![填充设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4868068951/p21568.png)
    -   填充颜色
        
         
        
        参数
        
        说明
        
        最小值
        
        数据的value值最小时对应国家区域的颜色，请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改。
        
        最大值
        
        数据的value值最大时对应国家区域的颜色 。
        
        **说明** 数据面板中不同国家根据value字段值大小来分别渲染不同颜色。
        
        无数据
        
        在数据面板中未定义相应国家的value字段时的国家区域颜色。
        
        背面
        
        地图背面的颜色以及旋转至背面可以看见的颜色。
        
    -   边线选项
        
         
        
        参数
        
        说明
        
        颜色
        
        地图边线的颜色。
        
        宽度
        
        地图边线的宽度，单位为px。
        
        透明度
        
        地图边线的透明度，取值范围为0~1。
        

## 数据

地图容器默认数据可以配置两个字段：id和value。![地图容器数据面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4868068951/p21585.png)下载上图中的[示例JSON代码](http://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/attach/30366/cn_zh/1557023845170/3D_flat_map_data_example.json)。

表 1. 字段说明  

字段

说明

id

地图上的国家简称。

value

该国家所对应的数值，和最大值、最小值和无数据配置项相匹配来决定区域的颜色。

name

（可选）国家全称。

表 2. 配置项说明  

配置项

说明

受控模式

打开开关，资产初始化状态下不请求数据，仅通过回调ID或蓝图编辑器配置的方法发起请求数据；关闭开关，可以使用自动更新请求数据。开关默认为关闭状态。

自动更新请求

选中后可以设置动态轮询，还可以手动输入轮询的时间频次。取消选中后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和回调ID事件来触发请求更新数据。

数据源

单击配置数据源，可在设置数据源面板中修改数据源类型和数据查询代码、预览数据源返回结果以及查看数据响应结果。详情请参见[配置组件数据](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-widget-data#task-2376875 "本文档介绍配置组件数据的方法，以及组件数据面板的内容，包括数据接口、数据源、数据过滤器和数据轮询频次等。")。

数据过滤器

数据过滤器提供数据结构转换、筛选和一些简单的计算功能。单击添加过滤器，可在设置数据源面板配置数据过滤器脚本，详情请参见[过滤器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-the-data-filter#task-1322674 "本文档介绍新版DataV组件数据过滤器的使用方法。您可以使用数据过滤器，自定义数据过滤代码，实现数据结构转换、数据筛选展示和一些简单的计算。")。

数据响应结果

展示数据请求的响应结果。当数据源发生改变时，可单击右侧的![刷新图标 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0376703061/p89093.png)图标，实时查看数据响应结果。

## 交互

此组件没有交互事件。

## 蓝图编辑器交互配置

1.  在画布编辑器页面，右键单击组件，选择导出到蓝图编辑器。
2.  单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89087.jpg)图标。
3.  在蓝图编辑器配置页面，单击导入节点栏内的3D平面世界地图组件，在画布中可以看到如下图所示的3D平面世界地图的蓝图编辑器配置参数。![3D平面世界地图蓝图编辑器参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4868068951/p69384.jpg)
    -   事件
        
        当热力值数据接口请求完成时：数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据请参见上文的[数据示例](#section-w1h-wqr-gfb)。
        
    -   动作
        
         
        
        动作
        
        说明
        
        请求热力值数据接口
        
        重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如3D平面世界地图配置了API数据源为`http://api.test`，传到请求热力值数据接口动作的数据为`{ id: '1'}`，则最终请求接口为`http://api.test?id=1`。
        
        导入热力值数据接口
        
        按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据请参见上文的[数据示例](#section-w1h-wqr-gfb)。
        
        更新组件配置
        
        动态更新组件的样式配置。需要先在组件的配置面板中，单击复制配置到剪贴板，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。
        
        显示
        
        显示组件，不需要参数。
        
        隐藏
        
        隐藏组件，不需要参数。
        
        切换显隐状态
        
        切换组件显示或者隐藏。
        
        移动
        
        将组件移动到指定位置。参数示例如下。
        
        ```
            {
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