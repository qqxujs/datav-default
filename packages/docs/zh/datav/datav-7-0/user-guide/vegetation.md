<!DOCTYPE html> 

植被是三维城市构建器的基底图层，支持独立的样式和数据配置，包括植被的阴影和植被的模型映射。本文介绍植被配置项的含义。

在场景编辑器左侧图层列表中，单击**植被**图层，进入配置面板配置**植被**图层的配置和数据面板。 

**说明** 

如果图层列表中没有**植被**，说明您还未添加**植被**图层，请参见[添加子组件](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/layer-panel-management#section-1yb-xd4-pfe)进行添加。

## 样式面板![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8194039861/p693752.png)

* **通用**：设置植被的通用配置参数项。

| **参数** | **说明**                                                                                             |
| ---- | ---- |
| **阴影** | 设置植被的阴影样式，包括lod阈值和发射阴影。**lod阈值**：拖拽滑块设置植被的lod阈值，取值范围为1\~5。**发射阴影**：通过打开或关闭**发射阴影**的开关，控制植被的阴影效果样式。 |
* **模型**：设置植被的模型样式。

| **参数**      | **说明**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---- | ---- |
| **lod切换系数** | 设置lod的切换系数，取值范围为5\~1000。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **模型映射**    | 单击**模型映射**右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一个模型映射。 单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个模型映射的排列方式。单击![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5896941261/p271562.jpg)图标，即可复制当前选中的模型映射进行配置并新增一个同样配置的模型映射。**模型资源链接**：模型映射的资源URL链接。**缩放大小**：设置模型映射在x方向，y方向和z方向的缩放比例。取值范围为0.01\~100。 |

## 数据面板![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8194039861/p693753.png)

**重新选择数据**：在数据面板内可以单击下方**重新选择数据**，打开**选择范围**对话框，重新选择仅针对植被图层的数据范围，详情请参见[使用官方基底数据创建](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/create-a-3d-city#6623dda05fs3d)中的选择场景范围区域的操作步骤。

**刷新数据**：刷新数据面板上已添加的数据内容。

## 蓝图交互

1. 在当前场景编辑器页面，单击左侧图层列表中**植被**右侧的![导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89089.jpg)图标。
2. 单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2434449951/p89087.jpg)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的**植被**图层，在画布中可以看到如下图所示的植被的蓝图编辑器配置参数。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8194039861/p693754.png)

  * **事件**

| **事件**         | **说明**                                                                                 |
| ---- | ---- |
| **当数据接口请求完成时** | 数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。 |
  * **动作**

| **动作**     | **说明**                                                                                                                       |
| ---- | ---- |
| **请求数据接口** | 重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如植被配置了API数据源为https://api.test，传到**请求数据接口**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。 |
| **导入数据接口** | 按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。                                            |
| **显示组件**   | 显示组件，不需要参数。                                                                                                                  |
| **隐藏组件**   | 隐藏组件，不需要参数。                                                                                                                  |