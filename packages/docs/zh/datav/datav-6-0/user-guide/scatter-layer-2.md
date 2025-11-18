  配置散点层（v1.x版本）的样式数据与交互-DataV数据可视化-阿里云

散点层是基础平面地图的子组件，支持独立的样式、数据和交互配置，包括散点层的散点样式、标注样式、弹框样式以及交互变量等，能够以散点的形式表现地理位置上的点数据信息。本文介绍散点层各配置项的含义。

**重要** 当前为v1.x版本的散点层子组件指导文档，如需查看该子组件v2.x版本的文档内容详情，请参见[混合散点层（v2.x版本）](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/mixed-scatter-layer#concept-2401384)。

单击子组件管理下方的散点层，进入配置面板配置散点层的样式和数据。

**说明** 如果子组件管理中没有散点层，说明您还未添加散点层子组件，请参见[地图容器（v1.x版本）](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/map-container-2#concept-z4z-2f5-q2b)进行添加。

## 配置

-   搜索配置：单击配置面板右上角的搜索配置，可在搜索配置面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
-   默认配置
    -   回调ID：设置组件之间数据联动的变量，需要配置为数据中的某一个字段。
        
        **重要** 此功能已更新到交互面板中，配置面板的该功能将弃用，请尽快升级。新版本的交互功能支持配置多个字段。
        
    -   标注：散点的文字注释。单击标注右侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制标注的显隐。
        -   标注字段：与数据面板中的数据源配合使用，需要与数据中的某个字段名匹配。例如设置为name，那么可视化应用上的散点标注会显示为name字段的值。
            
            图 1. 散点层的标注字段
            
            ![散点层的标注字段](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8658068951/p34187.png)
            
            图 2. 散点层数据
            
            ![散点层数据源](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8658068951/p34188.png)
            
        -   颜色：标注文字的颜色，请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改。
        -   阴影色：标注文字的阴影色。
        -   字体：标注文字的字体。
        -   字号：标注文字的大小。
        -   标注位置：标注文字相对于散点的位置，包括中心、顶部居中、底部居中、左侧、右侧。
    -   图标：打开开关，散点以图标的形式显示，您可以在图标配置中设置图标图片、图标大小、偏移方式、以及标注的偏移。去勾选，散点以圆点的形式显示，您可以在散点配置中配置散点的颜色、大小和边线。
        -   图标配置
            -   图标大小：散点图标的大小。
            -   图标图片
                -   鼠标移动到图片位置，单击删除可删除当前图片，然后单击图片区域或者拖动本地图片到区域内即可添加一个散点图标。
                -   鼠标移动到图片位置，单击更改可重新上传本地图片。
                -   您也可以输入图片的URL地址，将远程服务器上的图片作为散点图标。
            -   图标位置：图标的位置，可选择底部居中和中心
            -   标注X偏移：标注相对于散点的X偏移量，取值范围为-100~100，单位为px。
            -   标注Y偏移：标注相对于散点的Y偏移量，取值范围为-100~100，单位为px。
        -   散点配置
            -   数据映射：打开开关，可以根据数据源中value值的大小，设置散点的颜色和大小。
            -   填充颜色：设置数据源中value值为最大、最小和空时对应散点的颜色。对于value值介于最大值和最小值之间的散点，系统会根据比例将该散点的颜色设置成最大值颜色到最小值颜色的渐变色。只有开启了数据映射，此选项才会显示。
            -   散点大小：设置数据源中value值为最大、最小和空时对应散点的大小。对于value值介于最大值和最小值之间的散点，系统会根据比例将该散点的大小设置成最大和最小的散点之间。只有开启了数据映射，此选项才会显示。
            -   边线选项：设置散点边线的颜色和粗细。
    -   弹框样式：在预览或发布页面，单击散点出现的弹框样式。
        -   字体颜色：弹框文字的颜色。
        -   字体大小：弹框文字的大小。
-   系列配置：单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，增加或删除一个系列。单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个系列的排列样式。
    -   类型过滤值：与数据源中的type字段对应，配置您所设置的type值对应散点的样式。
        
        图 3. 散点层类型过滤值样式
        
        ![散点层类型过滤值配置项](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9658068951/p34237.png)
        
        图 4. 散点层类型过滤值数据
        
        ![散点层数据源](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9658068951/p34238.png)
        
    -   图标：打开开关，散点以图标的形式显示，您可以在图标配置中设置图标图片、图标大小、偏移方式、以及标注的偏移。关闭开关，散点以圆点的形式显示，您可以在散点配置中配置散点的颜色、大小和边线，详细配置方法请参见[默认配置](#default)。

## 数据

![散点层数据面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9658068951/p34239.png)

单击[此处](http://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/attach/30366/cn_zh/1557041796492/Basicmap_scatter_layer_example.json)下载上图中的示例JSON代码。

表 1. 参数说明

参数

说明

lat

散点的纬度。

lng

散点的经度。

type

（可选）多系列配置，与配置面板的系列配置配合使用，来配置散点的类型。

**说明** 没有配置系列值或者不在系列值之内的数据点，会使用配置面板中的默认配置进行渲染。

info

（可选）单击散点，出现的弹窗信息。

iconUrl

（可选）散点图标的URL地址。

value

（可选）散点数据映射，与配置面板中散点配置的最大值、最小值和无数据配置项配合使用，来设置散点的颜色和大小。

name

（可选）散点的标注名称，可以用于显示点位标注，与配置面板中的标注字段对应，来设置特定散点的标注信息样式。

rotationAngle

（可选）散点图标的旋转角度，单位默认为度（°）。需要在配置面板中开启图标配置项，并进行图标配置（上传一个自定义图标或者在数据源中自定义iconUrl），此参数才会生效。

表 2. 配置项说明

配置项

说明

受控模式

打开开关，资产初始化状态下不请求数据，仅通过回调ID或蓝图编辑器配置的方法发起请求数据；关闭开关，可以使用自动更新请求数据。开关默认为关闭状态。

自动更新请求

选中后可以设置动态轮询，还可以手动输入轮询的时间频次。取消选中后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和回调ID事件来触发请求更新数据。

数据源

单击配置数据源，可在设置数据源面板中修改数据源类型和数据查询代码、预览数据源返回结果以及查看数据响应结果，详情请参见[配置资产数据](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-widget-data#task-2376875)。

数据过滤器

数据过滤器提供数据结构转换、筛选和一些简单的计算功能。单击添加过滤器，可在设置数据源面板配置数据过滤器脚本，详情请参见[过滤器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-the-data-filter#task-1322674)。

数据响应结果

展示数据请求的响应结果。当数据源发生改变时，可单击右侧的![刷新图标 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0376703061/p89093.png)图标，实时查看数据响应结果。

## 交互

选中启用，开启组件交互功能。散点层子组件拥有交互配置，可单击某个散点抛出回调值，默认抛出数据中的lng和lat字段。具体配置请参见[组件回调ID配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards#concept-m2n-fy3-52b)。

![散点层交互面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9658068951/p34252.png)

## 蓝图编辑器交互配置

1.  在画布编辑器页面，单击基础平面地图子组件管理列表中散点层右侧的![导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89089.jpg)图标。
2.  单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89087.jpg)图标。
3.  在蓝图编辑器配置页面，单击导入节点栏内的散点层组件，在画布中可以看到如下图所示的散点层的蓝图编辑器配置参数。![平面地图散点层蓝图编辑器参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9658068951/p69515.jpg)
    -   事件
        
        事件
        
        说明
        
        当数据接口请求完成时
        
        数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据请参见上文的[数据示例](#section-n5y-mzm-cgb)。
        
        当点击点时
        
        当单击散点层的点时抛出的事件，同时抛出该散点对应的数据项。
        
    -   动作
        
        动作
        
        说明
        
        请求数据接口
        
        重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如散点层配置了API数据源为`http://api.test`，传到请求数据接口动作的数据为`{ id: '1'}`，则最终请求接口为`http://api.test?id=1`。
        
        导入数据接口
        
        按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据请参见上文的[数据示例](#section-n5y-mzm-cgb)。
        
        显示
        
        显示组件，不需要参数。
        
        隐藏
        
        隐藏组件，不需要参数。