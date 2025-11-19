<!DOCTYPE html> 

本文档以基础平面地图为例，为您介绍如何通过**区域热力层**子组件自定义地图边界。

## 操作步骤

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在**我的可视化**页面，单击已创建的可视化应用项目上方的**编辑**。
3. 在画布编辑器页面，单击左上角的![组件列表](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8451419161/p267288.png)图标，展开**资产列表**。
4. 单击**地图 >** **基础平面地图**，将基础平面地图组件添加到画布中。
5. 单击**区域热力层**子组件的**数据**面板，选择**地理边界geojson数据接口**，设置**数据源类型**为**API**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8133781861/p633776.png)
6. 登录[DataV.GeoAtlas](http://datav.aliyun.com/static/tools/atlas)，选择**范围选择器**，复制浙江省的JSON API。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8133781861/p633783.png)
7. 返回区域热力层的**数据**配置面板。
8. 将已复制的API链接粘贴到**地理边界geojson数据接口**的URL输入框中。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8133781861/p633788.png)
9. 单击页面右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9133781861/p633789.png)图标，调整地图缩放和位置，预览自定义边界数据设置结果。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8133781861/p633790.png)