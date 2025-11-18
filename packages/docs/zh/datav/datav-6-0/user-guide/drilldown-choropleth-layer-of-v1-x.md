  使用与配置区域下钻热力层（v1.x版本）-DataV数据可视化-阿里云

区域下钻热力层是基础平面地图的子组件，支持独立的样式、数据和交互配置，包括下钻区域的标注、边线、鼠标交互事件以及位置信息等，可直接作为省或直辖市级、地市级区域热力层使用。本文介绍区域下钻热力层各配置项的含义。

**重要**

当前为v1.x版本的**区域下钻热力层**子组件指导文档，如需查看该子组件v2.x版本的文档内容详情，请参见[区域下钻热力层（v2.x版本）](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/drilldown-choropleth-layer-of-v2-x#concept-2404137)。

单击**子组件管理**下方的**区域下钻热力层**，进入配置面板配置**区域下钻热力层**的样式和数据。

**说明**

如果**子组件管理**中没有**区域下钻热力层**，说明您还未添加**区域下钻热力层**子组件，请参见[地图容器（v1.x版本）](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/map-container-2#concept-z4z-2f5-q2b)进行添加。

## 配置

-   **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
    
-   **标注**
    
    -   **标注字段**：下钻区域的标注字段，需要与地理数据中字段名称匹配。
        
    -   **颜色**：标注的颜色，请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#section-kdw-vj4-t2b)进行修改。
        
    -   **阴影色**：标注的阴影色。
        
    -   **字体**：标注的字体。
        
        **说明**
        
        请选择系统中的字体，如果您的系统中没有所选的字体，标注会使用默认字体。
        
    -   **字号**：标注文字的大小。
        
-   **填充颜色**：数据中最大、最小及为空的value值对应区域的颜色。
    
-   **边线选项**：下钻热力层各区域边线的颜色、粗细和虚线线型。
    
-   **交互配置**
    
    -   **悬停**：鼠标悬停区域的颜色，仅在预览或发布时可以看到效果。
        
    -   **显示弹窗**：打开开关，显示弹窗信息；关闭开关，关闭弹窗信息。
        
    -   **聚焦范围比**：所点击区域的聚焦范围。
        
    -   **双击回调 ID**：设置组件之间数据联动的变量，这里的变量不需要跟数据中的字段对应，默认回传区域的adcode，例如双击浙江省，会回传330000。
        
        **说明**
        
        此功能已更新到**交互**面板中， **配置**面板的该功能将弃用，请尽快升级。新版本的交互功能支持配置多个字段。
        
    -   **单击回调 ID**：设置组件之间数据联动的变量，需要配置为数据中的某一个字段。
        
        **说明**
        
        此功能已更新到**交互**面板中， **配置**面板的该功能将弃用，请尽快升级。新版本的交互功能支持配置多个字段。
        

## 数据

-   **默认区域**
    
    1.  选择**数据** > **默认区域**，单击**配置数据源**。
        
    2.  在**设置数据源**面板中，选择**数据源类型**为**静态数据**。
        
        区域下钻热力层默认显示全国范围内各省和直辖市区域热力层数据，如下图所示。![区域下钻热力层默认区域数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9068068951/p8632.png)
        
    3.  如果您需要使用地市级区域热力层，可修改adcode值。
        
        以浙江省为例，得到浙江省的adcode为330000，区域下钻热力层定位至浙江省范围内的所有地级市范围，可以作为地市级区域热力层来使用，其他省或直辖市以此类推。![浙江省下钻热力层数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9068068951/p8633.png)
        
-   **自定义区域数据**：自定义区域数据包括area\_tree和area\_topo\_json两个字段。![自定义区域数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9068068951/p53654.png)
    
    DataV默认显示全国范围内的各省和直辖市的URL链接，层级关系为**国家** > **省或直辖市** > **地市级** > **区县级**，默认的示例数据如下。
    
    ```
    [
      {
        "area_tree": "https://sh-conf.oss-cn-shanghai.aliyuncs.com/map/area_drill/area_tree.json",
        "area_topo_json": "https://sh-conf.oss-cn-shanghai.aliyuncs.com/map/area_drill/china.topo.new.json"
      }
    ]
    ```
    
    您也可以修改默认数据来自定义下钻区域。以下以浙江省为例，为您展示自定义数据的配置方法。
    
    1.  修改默认数据的adcode为浙江省的adcode（330000）。
        
    2.  修改默认全国范围的area\_tree.json文件，提取浙江省范围的数据。区域层级关系为**省或直辖市** > **地市级** > **区县级**。
        
        **重要**
        
        -   用户如果有自定义的层级关系，可以自定义**area\_id**，只要保证**area\_id**是唯一值。
            
        -   由于获取的JSON数据量比较大，不支持静态数据等配置，只能通过`URL`链接来访问。
            
        
        下载完整[示例JSON文件](http://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/attach/64800/cn_zh/1557287159809/zhejiang_area_tree.json)。
        
    3.  发布area\_json数据文件，并获取URL。
        
        通过在线静态数据服务，将area\_json发布成相应的文件，并获取URL，推荐您使用阿里云的OSS在线静态数据服务。关于文件URL的介绍请参见[上传Object后如何获取访问URL](https://help.aliyun.com/zh/oss/user-guide/how-to-obtain-the-url-of-a-single-object-or-the-urls-of-multiple-objects#concept-39607-zh)。
        
        **重要**
        
        通过该服务发布的`URL`链接，必须使用HTTPS协议，并且必须使用SSL证书的域名。
        
    4.  获取topo\_json数据文件。
        
        1.  登入[DataV.GeoAtlas](http://datav.aliyun.com/static/tools/atlas)，获取得到浙江省范围的JSON数据（复制如下图所示API地址后打开该网址，另存为.json文件即可。）![获取topo_json数据文件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9944126461/p46746.png)
            
        2.  登入[geojson.io](http://geojson.io/#map=2/20.0/0.0)网站，单击左上角**Open** > **File**，将获取到的浙江省范围的JSON数据添加到geojson.io右侧编辑框内。
            
        3.  单击左上角**Save** > **TopoJSON**，得到浙江省的topo\_json文件。![得到浙江省的topo_json文件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9372684261/p39295.png)
            
            **说明**
            
            自定义区域合并，可能需要使用[turfjs.org](https://turfjs.org/docs/api/union)这个方法合并两个相邻的区域，得到新的GeoJSON边界数据。
            
        4.  打开获取到的topo\_json文件，在最前面加上浙江省的adcode（330000），并用`:`分隔，`{ }`整合，如下图所示。![topo_json文件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4168068951/p46748.png)
            
            上面得到的topo\_json文件仅包含了浙江省各市级的区域数据，无法下钻到区县级，如果您需要下钻到区县级区域，需要继续配置topo\_json文件。下面以杭州市为例，为您介绍下钻到区县级的数据配置方法。
            
        5.  参见步骤a~步骤c，得到杭州市的topo\_json文件。
            
        6.  在杭州市的topo\_json文件前加上杭州市的adcode（330100），并用`:`分隔，`{ }`整合，如下图所示。![杭州市的topo_json文件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4168068951/p46950.png)
            
        7.  将处理后的杭州市的topo\_json文件，复制粘贴到浙江省的topo\_json文件后面，用英文逗号隔开（注意括号要对应）。![添加杭州市的topo_json文件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5168068951/p46951.png)
            
            单击下载最终的[topo\_json文件](http://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/attach/64800/cn_zh/1557396165677/zhejiang.topojson)。
            
    5.  发布topo\_json数据文件，并获取URL。
        
        关于文件URL的介绍请参见[上传Object后如何获取访问URL](https://help.aliyun.com/zh/oss/user-guide/how-to-obtain-the-url-of-a-single-object-or-the-urls-of-multiple-objects#concept-39607-zh)。
        
        重复步骤iii获取最终的topo\_json文件的**URL**链接。
        
    6.  配置下钻热力层的自定义区域数据。
        
        使用新发布出来的两个文件的URL，替换下钻热力层的自定义区域数据的URL，单击**预览**查看地图上的效果，即可完成自定义数据配置。![配置下钻热力层的自定义区域数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5168068951/p46786.png)
        
        预览成功的效果图如下，双击杭州市区域，可进入杭州市地图页面。双击空白处，可回到浙江省地图页面。![配置成功结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5168068951/p46776.png)
        
        **重要**
        
        如果预览时无法显示自定义的下钻区域，可能是所配置的URL存在跨域问题，可在OSS中进行跨域配置，详情请参见[设置跨域资源共享](https://help.aliyun.com/zh/oss/configure-cors-rules#concept-pbw-4df-vdb)。
        
    7.  预览成功后，可单击**发布**，发布大屏。
        
    
    使用同样的方式可配置其他省市级的下钻区域数据，数据的规律为**国家** > **省或直辖市** > **地市级** > **区县级**，即上一级必须包含下一级的区域数据（adcode和位置数据等）才可下钻。
    
-   **映射数据接口**：请参见[区域热力层](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/regional-thermal-layer#ol-trc-zsy-lfb)。
    

## 交互

-   **当区域被点击触发**
    
    选中**启用**，开启组件交互功能。**区域下钻热力层**子组件拥有交互配置，可单击某个区域，触发数据请求，抛出回调值，实现在单击某个区域时，动态加载不同区域的数据。
    
    默认抛出所单击区域的adcode值，具体配置请参见[组件回调ID配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards#concept-m2n-fy3-52b)。
    
-   **当区域被双击触发**
    
    选中**启用**，开启组件交互功能。**区域下钻热力层**子组件拥有交互配置，可双击某个区域，触发数据请求，抛出回调值，实现在双击某个区域时，动态加载不同区域的数据。
    
    默认抛出所双击区域的adcode值，具体配置请参见[组件回调ID配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards#concept-m2n-fy3-52b)。
    
    **说明**
    
    此回调ID不需要跟数据中的字段对应，默认回传区域的adcode。例如双击浙江省，会回传330000。
    

## 蓝图编辑器交互配置

1.  在画布编辑器页面，单击**基础平面地图**子组件管理列表中**区域下钻热力层**右侧的![导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89089.jpg)图标。
    
2.  单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89087.jpg)图标。
    
3.  在蓝图编辑器配置页面，单击导入节点栏内的**区域下钻热力层**组件，在画布中可以看到如下图所示的区域下钻热力层的蓝图编辑器配置参数。![区域下钻热力层蓝图参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0168068951/p70083.jpg)
    
    -   **事件**
        
        **事件**
        
        **说明**
        
        **当默认区域请求完成时**
        
        默认区域数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。
        
        **当自定义区域数据请求完成时**
        
        自定义区域数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。
        
        **当映射数据接口请求完成时**
        
        映射数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。
        
        **当区域被点击触发**
        
        当区域下钻热力层某一块区域块被单击时候触发的事件。
        
        **当区域被双击触发**
        
        当区域下钻热力层某一区域块被双击时候触发的事件。
        
    -   **动作**
        
        **动作**
        
        **说明**
        
        **请求默认区域**
        
        重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如区域下钻热力层配置了API数据源为`http://api.test`，传到**请求默认区域**动作的数据为`{ id: '1'}`，则最终请求接口为`http://api.test?id=1`
        
        **请求自定义区域数据**
        
        重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如区域下钻热力层配置了API数据源为`http://api.test`，传到**请求自定义区域数据**动作的数据为`{ id: '1'}`，则最终请求接口为`htp://api.test?id=1`。
        
        **请求映射数据**
        
        重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如区域下钻热力层配置了API数据源为`http://api.test`，传到**请求映射数据**动作的数据为`{ id: '1'}`，则最终请求接口为`htp://api.test?id=1`。
        
        **导入默认区域**
        
        按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。
        
        **导入自定义区域数据**
        
        按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。
        
        **导入映射数据**
        
        按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。
        
        **显示**
        
        显示组件，不需要参数。
        
        **隐藏**
        
        隐藏组件，不需要参数。