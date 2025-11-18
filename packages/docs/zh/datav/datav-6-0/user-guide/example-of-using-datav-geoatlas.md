  使用地理小工具实现行政区与自定义区域的地图下钻-DataV数据可视化-阿里云

本文通过**行政区下钻到区县**和**自定义区域下钻**两个案例结合基础平面地图，演示如何使用地理小工具。

## **行政区下钻到区县**

本案例以现有的行政区边界按照**省级 > 市级 > 区县级**顺序，自制一份层级下钻数据，演示完整的层级制作过程。

1.  登录[DataV控制台](https://datav.aliyun.com/)。
2.  在DataV控制台，选择一个可视化应用，单击**编辑**。
    
3.  在**全部资产**栏，选中**地图** > **基础平面地图**，单击添加到画布编辑器中。
    
4.  在**配置**面板，单击**+子组件管理**，选择**自定义区域下钻层**，单击**+添加子组件**。![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2963935761/p555082.jpg)
    
5.  单击选择**自定义区域下钻层**子组件，切换到组件的**数据**面板，单击打开**自定义topojson数据接口**。
    
6.  登录[DataV.GeoAtlas](http://datav.aliyun.com/static/tools/atlas)，选择**层级生成器**。
    
    1.  在根区域处单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3963935761/p555302.png)图标，绑定数据。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1802933371/p883888.png)
        
    2.  在弹窗中输入**中国**，不勾选**同时添加所有下游节点**，单击**确认**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4621567761/p574799.png)
        
    3.  单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3963935761/p555315.png)图标，添加子节点，即省层级。
        
    4.  在弹窗中输入**浙江省**，不勾选**同时添加所有下游节点**，单击**确认**。
        
    5.  在浙江省层级右侧单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3963935761/p555315.png)图标，添加**杭州市**和**绍兴市**，即市层级。
        
    6.  在杭州市层级右侧单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3963935761/p555315.png)图标，添加**西湖区**和**淳安县**，即区县层级。
        
    7.  在绍兴市层级右侧单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3963935761/p555315.png)图标，添加**余姚市**和**新昌县**，即区县层级。
        
    8.  单击**导出层级（DataV专有）**，将层级json文件导出到本地保存。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4621567761/p574813.png)
        
7.  选择**自定义区域下钻层**的**数据**面板下的**自定义topojson数据接口**，单击**配置数据源**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4621567761/p574786.png)
    
8.  设置**数据源类型**为静态数据。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4621567761/p574787.png)
    
9.  打开地理工具中下载的层级文件，复制内容粘贴至静态数据输入窗口处。
    
10.  刷新数据响应结果右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4621567761/p574795.png)图标，刷新结果。
     
11.  单击右上角的预览![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2963935761/p555119.png)图标，预览配置效果。双击区域完成下钻，双击非选中区域完成回滚。![3月1日](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4621567761/p574832.gif)
     

## **自定义区域下钻**

本案例以浙江省行政区边界为基础，自定义框选几何图形及层级，完整展示下钻到杭州灵隐寺的层级制作过程。

1.  登录[DataV控制台](https://datav.aliyun.com/)。
2.  在DataV控制台，选择一个可视化应用，单击**编辑**。
    
3.  在**全部资产**栏，选中**地图** > **基础平面地图**，单击添加到画布编辑器中。
    
4.  在**配置**面板，单击**+子组件管理**，选择**自定义区域下钻层**，单击**+添加子组件**。![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2963935761/p555082.jpg)
    
5.  单击选择**自定义区域下钻层**子组件，切换到组件的**数据**面板，单击打开**自定义topojson数据接口**。
    
6.  登录[DataV.GeoAtlas](http://datav.aliyun.com/static/tools/atlas)，选择**范围选择器**。
    
    1.  在左侧地图面板单击**浙江省**区域，单击**选择需要的数据格式**模块下的下载图标![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4621567761/p574861.png)，将浙江省地图json文件保存到本地。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4621567761/p574862.png)
        
    2.  选择**边界生成器**，在地图面板的左侧单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4621567761/p574863.png)图标，将上述保存的json文件导入到地图中。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4621567761/p574865.png)
        
    3.  在下方属性表面板中选择**杭州市**，单击**定位**，放大杭州市区域。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4621567761/p574867.png)
        
    4.  在地图面板左侧单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4621567761/p574868.png)图标，使用圆形区域框选中杭州市的东北部，修改`name`字段为**杭州市东北部**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4621567761/p574870.png)
        
    5.  在下方属性表面板中选择圆形区域，单击**定位**，放大当前区域。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4621567761/p574871.png)
        
    6.  在地图面板左侧单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4621567761/p574872.png)图标，使用多边形工具框选出**杭州西湖风景名胜区**，修改`name`字段为**西湖景区**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4621567761/p574874.png)
        
    7.  重复上一步，在西湖景区内使用多边形工具框选灵隐寺附近区域并放大，修改`name`字段为**灵隐寺**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4621567761/p574880.png)
        
    8.  选择对应区域，单击属性表面板的**导出GeoJSON**，分别导出杭州市、杭州市东北部、西湖景区、灵隐寺的GeoJSON文件到本地。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4621567761/p574884.png)
        
    9.  选择**层级生成器**，参考[层级树面板功能详解](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/introduction-to-features-of-a-layer-generator#section-fgj-tld-qb1)，依次绑定浙江省、杭州市、杭州市东北部、西湖景区和灵隐寺的GeoJSON文件到层级节点中。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4621567761/p574893.png)
        
    10.  单击**导出层级（DataV专有）**，将已制作的层级数据保存到本地。
         
7.  选择**自定义区域下钻层**的**数据**面板下的**自定义topojson数据接口**，单击**配置数据源**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4621567761/p574786.png)
    
8.  设置**数据源类型**为静态数据。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4621567761/p574787.png)
    
9.  打开地理工具中下载的层级文件，复制内容粘贴至静态数据输入窗口处。
    
10.  刷新数据响应结果右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4621567761/p574795.png)图标，刷新结果。
     
11.  单击右上角的预览![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2963935761/p555119.png)图标，预览配置效果。双击区域完成下钻，双击非选中区域完成回滚。![3月1日(1)](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4621567761/p574910.gif)