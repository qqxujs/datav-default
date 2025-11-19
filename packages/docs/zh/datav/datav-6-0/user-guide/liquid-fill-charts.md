<!DOCTYPE html> 

本文介绍水波图组件的图表样式和各配置项的含义。

## **图表样式**

水波图以动态水波的填充方式展示一组数据的百分比值或项目的进度情况。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2180940861/p614547.png)

## **配置面板**

* **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
* * **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
  * **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
  * **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。  
    * 手动输入角度值，控制组件的旋转角度。
    * 拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
    * 单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
    * 单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
  * **不透明度**：取值范围为0\~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
* **图形**

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **图表边距**    |    单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标，控制图表边距的显隐。打开开关后，可配置水波图区域与组件上下左右四个边界之间的距离，单位默认px。    |
|    **背景颜色**    |    设置水波图组件的背景颜色，请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)进行修改。    |
|    **外环半径**    |    设置水波图组件相对于组件边框的外环半径，范围值可选0\~100，单位%。    |
|    **投影样式**    |    设置水波图组件外环的平面投影样式，包括外环的颜色、模糊半径以及外环圆心相对于组件本身圆心X轴和Y轴上的偏移量。    |
|    **水波样式**    |    设置水波图的颜色、波形个数和波浪长度。**说明** 当**贴图**配置打开时，水波颜色不支持渐变色。    |
|    **外框**    |    设置水波图的外框样式。**外框形状**：设置外框的形状样式，包括圆形、菱形、三角形、大头针和矩形。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2180940861/p614549.png)**外框描边**：设置外框的描边样式，包括描边的粗细、描边间距和描边颜色。**虚线描边**：设置外框的虚线描边样式，包括描边分段长度和分段间隔。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2180940861/p614550.png)    |
|    **标注**    |    设置水波图的标题样式和数据内容样式。**标题** **内容**：设置水波图标注的标题的文本内容。**文本样式**：设置水波图标注的标题内容的文本样式。**位置**：设置水波图标注的标题内容相对于水波图组件的X偏移、Y偏移和旋转角度。**数据内容** **内容**：设置水波图标注的数据内容的文本内容。**文本样式**：设置水波图标注的数据内容的文本样式。**位置**：设置水波图标注的数据内容相对于水波图组件的X偏移、Y偏移和旋转角度。    |
|    **贴图**    |    设置水波图的贴图样式。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2180940861/p614551.png)**类型**：设置水波图贴图的类型，包括点形、线性和正方形。**填充样式**：设置水波图贴图的填充样式，包括填充色和宽度。**额外样式**：设置水波图贴图的线间距和旋转角度样式。    |
* **动画**

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **动画开关**    |    打开开关，可配置水波图的动画效果。    |
|    **动画效果**    |    动画的效果类型，仅在打开动画开关后可配置。    |
|    **动画时长**    |    组件动画效果的持续时间，单位为ms，仅在打开动画开关后可配置。    |

## **数据面板**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2180940861/p614552.png)

`percent`：展示水波所占图表的百分比，值为小数，1表示100%。

|    **配置项**    |    **说明**    |
|    ----    |    ----    |
|    **受控模式**    |    打开开关，资产初始化状态下不请求数据，仅通过回调ID或蓝图编辑器配置的方法发起请求数据；关闭开关，可以使用自动更新请求数据。开关默认为关闭状态。    |
|    **自动更新请求**    |    选中后可以设置动态轮询，还可以手动输入轮询的时间频次。取消选中后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和回调ID事件来触发请求更新数据。    |
|    **数据源**    |    单击**配置数据源**，可在**设置数据源**面板中修改数据源类型和数据查询代码、预览数据源返回结果以及查看数据响应结果，详情请参见[配置资产数据](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-widget-data#task-2376875)。    |
|    **数据过滤器**    |    数据过滤器提供数据结构转换、筛选和一些简单的计算功能。单击**添加过滤器**，可在**设置数据源**面板配置数据过滤器脚本，详情请参见[过滤器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-the-data-filter#task-1322674)。    |
|    **数据响应结果**    |    展示数据请求的响应结果。当数据源发生改变时，可单击右侧的![刷新图标 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0376703061/p89093.png)图标，实时查看数据响应结果。    |

## **交互面板**

此组件没有交互事件。

## **蓝图编辑器交互配置**

1. 在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2. 单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2180940861/p614553.png)图标。
3. 在蓝图编辑器配置页面，单击导入节点栏内的**水波图**组件，在画布中可以看到如下图所示的水波图的蓝图编辑器配置参数。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2180940861/p614559.png)

  * 事件

|    **事件**    |    **说明**    |
|    ----    |    ----    |
|    **当数据接口请求完成时**    |    数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板数据源页签的数据响应结果区域。    |
|    **当数据接口请求失败时**    |    数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板数据源页签的数据响应结果区域。    |
  * 动作

|    **动作**    |    **说明**    |
|    ----    |    ----    |
|    **导入数据接口**    |    按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据源**页签的**数据响应结果**区域。    |
|    **请求数据接口**    |    重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如水波图配置了API数据源为https://api.test，传到**请求数据接口**动作的数据为{ id: '1'}，则最终请求接口为https://api.test?id=1。    |
|    **更新组件配置**    |    动态更新组件的样式配置。需要先在组件的**样式**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。    |
|    **显示**    |    显示组件，参考数据示例如下。return {   "animationType": "",   "animationDuration": 1000,   "animationEasing": "" }    |
|    **隐藏**    |    隐藏组件，参考数据示例如下。return {   "animationType": "",   "animationDuration": 1000,   "animationEasing": "" }    |
|    **切换显隐状态**    |    切换组件显示或者隐藏，参考数据示例如下。return {   "animationIn": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   },   "animationOut": {     "animationType": "",     "animationDuration": 1000,     "animationEasing": "linear"   } }    |
|    **移动**    |    将组件移动到指定位置，参考数据示例如下。    return {             // 移动方式。绝对定位：to，相对定位：by。默认值：to。         "positionType": "to",       // 指定位置。x坐标，y坐标。       "attr": {         "x": 0,         "y": 0       },       // 动画方式。       "animation": {         "enable": false,         // 动画延时。         "animationDuration": 1000,         // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。         "animationEasing": "linear"       }     }    |

## **案例演示**

本案例通过多个水波图组件展示各国人对世乒赛的关注程度。

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 选择任一可视化应用，单击编辑，进入画布编辑器页面。
3. 在上方工具栏单击**搜索**，输入水波图，单击添加到画布中。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2180940861/p614572.png)
4. 重复上述操作，再添加6个水波图组件、1个多维度饼图组件。
5. 单击多维度饼图组件，选择数据页签，修改静态数据。  
```  
[  
  {  
    "x": "中国",  
    "y": "89%"  
  },  
  {  
    "x": "巴西",  
    "y": "53%"  
  },  
  {  
    "x": "西班牙",  
    "y": "18%"  
  },  
  {  
    "x": "法国",  
    "y": "10%"  
  },  
  {  
    "x": "意大利",  
    "y": "20%"  
  },  
  {  
    "x": "日本",  
    "y": "34%"  
  },  
  {  
    "x": "美国",  
    "y": "4%"  
  }  
]  
```
6. 选择配置页签，增加一个数据系列。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2180940861/p614585.png)
7. 分别修改7个水波图组件的水波样式的颜色值和名称，保证颜色和名称两两不相同。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2180940861/p614586.png)
8. 分别修改7个水波图**样式 > 标注 > 标题**下的标题内容与多维度饼图数据源中的`x`参数字段一致。例如：水波图1：中国。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2180940861/p614587.png)
9. 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2180940861/p614588.png)图标，切换至蓝图中。
10. 在**导入节点**页签下，拖拽所有组件到蓝图画布中。
11. 单击逻辑节点页签，添加序列执行节点到主画布中，并连接组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2180940861/p614589.png)
12. 配置序列执行节点处理方法。  
```  
//水波图-1  
return [{  
  "percent": (data[0].y) / 100  
}]  
//水波图-2  
return [{  
  "percent": (data[1].y) / 100  
}]  
//水波图-3  
return [{  
  "percent": (data[2].y) / 100  
}]  
//水波图-4  
return [{  
  "percent": (data[3].y) / 100  
}]  
//水波图-5  
return [{  
  "percent": (data[4].y) / 100  
}]  
//水波图-6  
return [{  
  "percent": (data[5].y) / 100  
}]  
//水波图-7  
return [{  
  "percent": (data[6].y) / 100  
}]  
```
13. 单击页面右上角的**预览**。查看展示结果。![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1595894861/p674646.png)
14. （可选）添加时间器、通用标题等其他组件使得数字大屏更加饱满。![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1595894861/p674653.png)