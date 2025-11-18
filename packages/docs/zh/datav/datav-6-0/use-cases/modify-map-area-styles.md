  修改地图组件的默认显示区域-DataV数据可视化-阿里云

可视化应用创建完成后，您可以通过本文的操作步骤，将可视化应用的地图组件修改为您所需的区域地图的样式。

## 前提条件

已完成可视化应用的创建，详情请参见[创建可视化应用](https://help.aliyun.com/zh/datav/datav-6-0/getting-started/create-an-application-by-using-the-epidemic-situation-control-template#task-2477417)。

## 背景信息

可视化应用模板提供的地图区域为浙江省区域的地图，如果您需要将地图区域修改为其他区域地图，可以进行如下操作。

## 操作步骤

1.  登录[DataV控制台](https://datav.aliyun.com/)。
2.  在**我的可视化**页面中，选择一个可视化应用，单击**编辑**。
    
3.  进入创建完成的可视化应用的画布编辑器内，单击打开图层栏内的地图面板组合组件，选择下方基础平面地图组件。![选择地图组件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6256822951/p81123.png)
    
4.  在右侧的**配置**页签中，单击**子组件管理**下的**区域下钻热力层**。![配置地图子组件样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6256822951/p81124.png)
    
5.  单击**数据**页签。
    
6.  修改**默认区域**数据。
    
    1.  在**默认区域**下单击**配置数据源**。
        
        ![默认区域数据面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6256822951/p81125.png)
    2.  在**设置数据源**页面，将数据框内的adcode字段值修改为对应区域的adcode值。
        
        ![修改ADCODE字段值](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7256822951/p81126.png)
        
        不同区域的adcode值不同，您可以借助[DataV.GeoAtlas地理小工具系列](http://datav.aliyun.com/tools/atlas/#&lat=33.521903996156105&lng=104.29849999999999&zoom=3)，获取不同地区的adcode值。打开工具，在右侧选择所需地区的名字，例如广东省，下方就会显示广东省地区的adcode值。![广东省举例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9405111561/p434347.png)
        
7.  修改**自定义区域**数据。
    
    1.  在**设置数据源**页面，单击右上角的![关闭](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0456822951/p95902.png)图标返回**数据**配置页签。
        
    2.  在**自定义区域**下，单击**配置数据源**。
        
    3.  在**设置数据源**页面，将数据框内的area\_tree和area\_topo\_json字段值修改为对应区域的字段值。
        
        DataV默认显示全国范围内的各省和直辖市的URL链接，层级关系为**国家** > **省或直辖市** > **地市级** > **区县级**，默认的示例数据如下。
        
        ```
        [
          {
            "area_tree": "https://sh-conf.oss-cn-shanghai.aliyuncs.com/map/area_drill/area_tree.json",
            "area_topo_json": "https://sh-conf.oss-cn-shanghai.aliyuncs.com/map/area_drill/china.topo.new.json"
          }
        ]
        ```
        
        如果您想将地图自定义下钻到一个小范围的区域，请参见[区域下钻热力层文档](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/drilldown-choropleth-layer-of-v1-x)进行配置。
        
8.  修改**映射数据**数据。
    
    1.  在**设置数据源**页面，单击右上角的![关闭](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0456822951/p95902.png)图标返回**数据**配置页签。
        
    2.  在**映射数据**下单击**配置数据源**。
        
    3.  在**设置数据源**页面，将数据框内的area\_id和value字段值修改为对应区域的字段值。
        
        -   area\_id：
            
            area\_id字段的数据必须从属于**默认数据**内的adcode值。例如在**默认数据**内设置的adcode值是浙江省330000，**映射数据**栏内的area\_id字段数值必须在浙江省范围内的区域数值，如台州市331000数值。
            
            ![area_id值示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7256822951/p81130.png)
        -   value
            
            value字段有以下两个作用：
            
            -   根据value值大小，映射对应区域的填充颜色区间范围值。![颜色区间数值](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7256822951/p81131.png)
                
            -   发布或预览可视化应用的时候，单击对应的地图区域，系统会在弹框内展示该区域的value值。![弹框数值](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7256822951/p81132.png)