 

本文为您介绍动态轨迹层各配置项的含义。

## **图表样式**

动态轨迹层是3D平面地图（v3.x版本）的子组件，支持独立的样式和数据配置，能够以两点之间的水平连线的形式表示人或物体移动的轨迹。

![动态(2).gif](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4878931961/p703326.gif)

## 样式面板![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4878931961/p703327.png)

-   **搜索配置**：单击**样式**面板右上角的搜索配置项图标![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5013889661/p527384.png)，可在搜索配置面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索配置项](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。
    
-   **通用**：设置动态轨迹层的通用配置参数项。
    
    **参数**
    
    **说明**
    
    **混合模式**
    
    设置动态轨迹层的混合模式，可选**默认**和**添加**。
    
-   **图形**：设置动态轨迹层的图形样式参数项。
    
    **参数**
    
    **说明**
    
    **随距衰减**
    
    打开开关，设置随距衰减；关闭开关，关闭随距衰减。推荐开启，开启后支持符号展示。
    
    **轨迹样式**
    
    设置动态轨迹层的轨迹样式。
    
    -   **轨迹线型**：单击下拉框，选择一种轨迹线类型样式。
        
    -   **轨迹颜色**：请参见[颜色映射器使用说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/instructions-of-color-mapper)，配置不同轨迹线的映射颜色样式。
        
    -   **轨迹粗细**：设置轨迹线的粗细大小值，参见[尺寸映射器使用说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/dimension-mapper-instructions)，配置不同轨迹线的粗细大小映射样式。
        
    -   **轨迹长度**：拖动滑块设置飞线的粗细值，取值范围为0~100，单位px。
        
    -   **边缘模糊**：拖动滑块设置虚化宽度比例值，取值范围为0~1。
        
    
    **线头样式**
    
    设置线头的样式。单击**线头样式**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制**线头样式**的显隐。
    
    -   **线头颜色**：线头的颜色。
        
    -   **线头比例**：拖动滑块设置线头比例，取值范围为0~100。
        
    
    **符号样式**
    
    设置动态轨迹层的符号样式。单击**符号样式**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制**符号样式**的显隐。仅在打开**随距衰减**开关时，可显示该配置项。
    
    -   **符号颜色**：动态轨迹层的符号颜色。
        
    -   **符号贴图**：设置符号贴图的类型。
        
    
-   **动效**：设置动态轨迹层的动效参数。
    
    **参数**
    
    **说明**
    
    **轨迹速度**
    
    拖动滑块，设置动态轨迹层中正负控制方向的轨迹速度，取值范围为-100~100。
    
    **符号速度**
    
    拖动滑块，设置动态轨迹层中正负控制方向的符号速度，取值范围为-100~100。
    
-   **条件**：条件样式说明。
    
    **条件样式**：单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528933.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528934.png)图标，添加或删除一个条件样式。 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528936.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528937.png)图标配置多个条件样式的排列样式。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528938.png)图标，即可复制当前选中条件样式配置内容并新增一个同样配置的条件样式。具体样式配置说明，请参见[条件树使用说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/conditional-tree-instructions)。
    
    **图形**：打开开关，配置该条件样式中的图形配置项；关闭开关，无法配置该条件样式下的图形配置项。
    
    **参数**
    
    **说明**
    
    **轨迹样式**
    
    单击**轨迹样式**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制该条件下的轨迹样式的显隐，包括轨迹线的类型，颜色、长度、粗细和轨迹线边缘模糊的虚化比例。
    
    **线头样式**
    
    单击**线头样式**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制该条件下的轨迹线线线头样式的显隐，包括线头的颜色和线头的比例。
    
    **符号样式**
    
    单击**符号样式**左侧的![眼睛图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8648413261/p89095.jpg)图标，可控制该条件下的符号样式的显隐，包括符号的颜色和符号的贴图类型。
    

## 数据源面板![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4878931961/p703328.png)

**字段**

**说明**

`geometry`

轨迹线的平面空间数据。

`name`

（可选）轨迹线的名称。

`id`

（可选）轨迹线的ID唯一标识码。

`sizeField`

（可选）轨迹线的粗细大小映射字段。

`colorField`

（可选）轨迹线的颜色映射字段。

**数据项配置**

**说明**

**数据源**

组件的数据源中通过**代码编辑**或**可视化编辑**展示了组件所包含的数据字段。也可以修改**数据类型**，灵活配置组件数据。

**数据映射**

当您需要自定义图表字段配置时，可以在**数据映射**模块设置不同的字段映射内容，将这些字段映射到组件对应的字段上。无需修改数据源中的字段，就可以实现数据的实时匹配。也可以单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9633269661/p524955.png)图标对字段分别样式配置。

**过滤器**

打开**过滤器**，选择已创建的数据过滤器或新建数据过滤器，并配置数据过滤器脚本，实现数据的筛选功能。详情请参见[管理数据过滤器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/manage-filters-1)。

**数据响应结果**

实时展示了组件所使用的数据。当组件数据源发生变化时，数据响应结果会对应展示最新的数据。如果系统反应延迟，您可以单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8276202761/p538806.png)图标，查看数据响应结果，也可以单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8276202761/p538808.png)图标，获取组件的最新数据。您也可以单击查看示例，查看当前组件的响应结果示例。

**禁止加载态**

勾选复选框，在组件更新和预览数据看板时，将看不到组件初始化时的加载内容，去勾选则相反。默认为去勾选状态。

**受控模式**

勾选复选框，组件初始化状态下不请求数据，仅通过全局变量或蓝图编辑器配置的方法发起请求数据；去勾选复选框，可以使用自动更新请求数据。默认为去勾选状态。

**自动更新请求**

勾选复选框，可以手动输入轮询的时间频次设置动态轮询。清除后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和全局变量事件来触发请求更新数据。

## 高级面板

此组件没有交互事件。

## 蓝图交互

1.  单击页面左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7498599661/p528973.png)图标，进入**蓝图**页面。
    
2.  在**图层节点**页签下，添加当前组件至主画布中。
    
3.  查看蓝图配置参数。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2449421071/p742845.png)
    
    -   **事件**
        
        **事件**
        
        **说明**
        
        **当数据接口请求完成时**
        
        数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据源**页签的**数据响应结果**轨迹线。
        
    -   **动作**
        
        **动作**
        
        **说明**
        
        **请求数据接口**
        
        重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如动态轨迹层配置了API数据源为`https://api.test`，传到**请求数据接口**动作的数据为`{ id: '1'}`，则最终请求接口为`https://api.test?id=1`。
        
        **导入数据接口**
        
        按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据源**页签的**数据响应结果**轨迹线。
        
        **切换显隐**
        
        切换组件显示或者隐藏，不需要参数。
        
        **显示**
        
        显示组件，参考数据示例。
        
        ```
        {
          "animationType": "",//动画方式，可选值：fade，不填无动画。
          "animationDuration": 1000,//动画延迟，单位ms。
          "animationEasing": ""//动画曲线
        }
        ```
        
        **隐藏**
        
        隐藏组件，参考数据示例。
        
        ```
        {
          "animationType": "",//动画方式，可选值：fade，不填无动画。
          "animationDuration": 1000,//动画延迟，单位ms。
          "animationEasing": ""//动画曲线
        }
        ```
        
        **更新组件配置**
        
        动态更新组件的样式配置。需要先在组件的**样式**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。