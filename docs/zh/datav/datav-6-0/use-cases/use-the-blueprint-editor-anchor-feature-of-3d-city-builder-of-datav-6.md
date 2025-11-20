# 使用三维城市构建器场景蓝图屏幕定位锚点功能教程 %{#427437}% 

屏幕定位锚点功能是为了实现二、三维组件联动，典型的应用案例是：在三维场景中单击二维图标（不含文本信息），通用标题组件（显示文本信息）将被吸附在被单击的图标上，二者的相对位置关系不会随着相机观察视角的改变而变化。本文介绍该案例的具体实现方法。

## 操作步骤

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在控制台页面，单击**三维城市构建器** \> **+创建三维城市场景**，创建一个三维城市构建器项目，具体创建方法请参见[创建三维城市构建器项目](/zh/datav/datav-6-0/user-guide/getting-started-with-3d-city-builder-professional-edition)。![创建三维城市场景](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1713381561/p436003.png)
3. 在三维城市场景编辑器中，单击**当前场景图层**后面的图标![添加](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1713381561/p436177.png)，单击**选择组件**，并在**选择组件**弹框中，选择**数据图元** \> **二维图标层**，添加二维图标层。具体配置方法请参见[二维图标层](/zh/datav/datav-6-0/user-guide/2d-icon-layer-of-professional-edition)。
4. 添加完成后，在图层名称后面单击![导出蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1713381561/p436185.png)，将图层**导出到蓝图编辑器**。
5. 单击左上角![蓝图编辑器按钮](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1713381561/p436006.png)图标，进入蓝图编辑器。
6. 在蓝图编辑器导入节点栏，拖拽**二维图标层**节点和**三维城市构建器**节点，在**逻辑节点**栏拖拽添加**动作接口**、**事件接口**和**串行数据处理**到画布中。
7. 在蓝图编辑器中，选中动作接口，单击右上角![新增动作图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1713381561/p436411.png)图标，为动作接口新增**开关定位锚点**的动作，并将该动作连线到三维城市构建器的**开关屏幕定位锚点**动作；将二维图标层的**点击事件**通过串行数据处理节点连线到三维城市构建器的**添加屏幕定位锚点**动作，并为串行数据处理节点按照如下代码添加方法来设置屏幕定位锚点。![设置屏幕定位锚点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1713381561/p436425.png)  
```  
const { data: rawData } = data;  
const { lng, lat, altitude } = rawData;  
const result = {  
  "anchors": [{ lng, lat, altitude }]  
}  
return result;  
```
8. 再添加一个串行数据处理节点，并修改事件接口的事件名为**定位锚点屏幕位置改变**，将三维城市构建器中的**定位锚点屏幕位置改变时**事件通过串行数据处理节点与事件接口连线，该设置可以完成在三维场景中拖拽缩放时，通过事件接口向外抛出锚点的屏幕坐标改变的事件，其它非三维组件就可以根据该事件更新屏幕坐标的功能，具体蓝图连线方法请参见[蓝图编辑器详细功能介绍](/zh/datav/datav-6-0/user-guide/features-1)。![更新屏幕坐标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1713381561/p436435.png)
9. 配置完成后，在画布编辑器右上角单击![发布](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1713381561/p436439.png)，将该三维城市构建器项目发布。
10. 在控制台界面，选择**我的可视化**页面，创建可视化项目，详细创建方法请参见[创建可视化应用](/zh/datav/use-a-blank-template-to-create-a-project)。
11. 在画布编辑器页面，单击**控件** \> **按钮**，添加按钮组件；单击**信息** \> **通用标题**，添加通用标题组件；单击**城市**，选择上步已创建好的三维城市构建器项目。![添加组件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1713381561/p436454.png)
12. 右键单击将这三个组件导出到蓝图编辑器，通过托拽分别将这三个节点添加到画布中，并添加两个串行数据处理节点。将按钮中的**点击按钮时**事件通过串行数据处理节点和屏幕定位锚点中的**开关定位锚点**动作连线，并通过以下代码为串行数据处理节点添加方法实现开启屏幕定位锚点开关的功能。  
```  
return { flag: true };  
```  
![蓝图配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1713381561/p436492.png)  
再将屏幕定位锚点中的**定位锚点屏幕位置改变**事件通过另一个串行数据处理节点和通用标题中的**移动**动作连线。按照如下代码为串行数据处理节点添加处理方法实现在定位锚点屏幕位置改变时，更新通用标题的屏幕位置功能。  
```  
 const result = {  
  "positionType": "to",  
  "attr": {  
    "x": data[0] && data[0].x,  
    "y": data[0] && data[0].y  
  },  
  "animation": {  
    "enable": false,  
    "animationDuration": 1000,  
    "animationEasing": "linear"  
  }  
}  
return result;  
```
13. 实现效果如下图，您在三维场景中单击二维图标后，通用标题将会被固定在被单击的二维图标处。![效果展示](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1713381561/p436569.gif)