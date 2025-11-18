  配置三维城市地图的粒子组件-DataV数据可视化-阿里云

粒子是三维城市地图的子组件，支持独立的样式和数据配置，包括粒子的叠加模式、默认样式和样式配置类型等。粒子的作用是表达区域范围内一些点数据的样式。本文介绍粒子配置项的含义。

## 配置

![粒子配置面板](http://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0818068951/p84929.png)

-   叠加模式：在列表中选择粒子的叠加模式，可选添加模式和正常模式。
-   点击交互：打开启用开关，实现单击粒子开启交互功能；关闭开关，交互功能无法使用。
-   默认样式：设置粒子默认样式参数。
    
     
    
    参数
    
    说明
    
    颜色
    
    设置粒子默认颜色，请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)，修改颜色。
    
    透明度
    
    拖动滑块修改数据，设置粒子的透明度值。取值范围围0~1。
    
    图标
    
    在图标设置区域。
    
    -   鼠标移动到图片位置，单击删除可删除当前图标，然后单击图标区域或者拖动本地图片到区域内即可添加一个粒子图标。
    -   鼠标移动到图片位置，单击更改可重新上传本地图片。
    -   您也可以输入图片的URL地址，将远程服务器上的图片作为粒子图标。
    
    **说明** 图标仅支持使用.png或者.jpg样式的图片。
    
    大小
    
    拖动滑块修改数据，设置粒子的大小值。取值范围围0~10000。
    
-   样式配置：单击右侧的![加号图标](http://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0818068951/p89097.jpg)或![垃圾桶图标](http://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0818068951/p89098.jpg)图标，增加或删除一个粒子样式类型。单击![横排列图标](http://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0818068951/p95437.jpg)或![竖排列图标](http://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0818068951/p94077.jpg)图标配置多个粒子类型的排列样式。
    
     
    
    参数
    
    说明
    
    type
    
    与数据源中的type字段对应，配置您所设置的type值对应粒子的样式。
    
    颜色/透明度/图标/大小
    
    设置每个类型的粒子样式，请参见[配置](#section-yaq-f0d-7l6)中的粒子默认样式。
    

## 数据

![粒子数据面板](http://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0818068951/p84533.jpg)

表 1. 字段说明  

字段

说明

x

粒子所处的经度。

y

粒子所处的纬度。

z

粒子距离地表面的高度。

type

粒子的多系列配置类型，与配置面板的样式配置配合使用，来配置粒子的类型。

## 交互

点击事件：选中启用，开启组件交互功能。可在单击粒子触发事件时抛出回调值，默认抛出数据中的data和clickPosition字段。具体配置请参见[组件回调ID配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards#concept-m2n-fy3-52b)。

## 蓝图编辑器交互配置

1.  在画布编辑器页面，单击三维城市子组件管理列表中粒子右侧的![导出到蓝图编辑器](http://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0818068951/p89089.jpg)图标。
2.  单击页面左上角的![蓝图图标](http://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0818068951/p89087.jpg)图标。
3.  在蓝图编辑器配置页面，单击导入节点栏内的粒子组件，在画布中可以看到如下图所示的粒子的蓝图编辑器配置参数。![粒子蓝图参数](http://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0818068951/p84438.jpg)
    -   事件
        
         
        
        事件
        
        说明
        
        当数据接口请求完成时
        
        数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据请参见上文的[数据示例](#section-97w-nxm-xdq)。
        
        点击事件
        
        当单击地图中的粒子触发事件时抛出当前粒子的数据。
        
    -   动作
        
         
        
        动作
        
        说明
        
        请求数据接口
        
        重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如粒子配置了API数据源为`http://api.test`，传到请求数据接口动作的数据为`{ id: '1'}`，则最终请求接口为`http://api.test?id=1`。
        
        导入数据接口
        
        按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据请参见上文的[数据示例](#section-97w-nxm-xdq)。
        
        显示组件
        
        显示组件，不需要参数。
        
        隐藏组件
        
        隐藏组件，不需要参数。