  蓝图编辑器精选案例实战-DataV数据可视化-阿里云

针对蓝图编辑器的常见问题，本文通过理论介绍及实操演示提出问题的解决方法。

## **视频链接**

DataV小课堂直播视频：[蓝图编辑器精选案例实战直播视频使用教程](https://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/d/ud/352167881203.mp4)。

## 案例概览

### 利用Tab列表控制组件显隐

本案例通过蓝图实现用**Tab列表**组件控制多个组件切换显示和隐藏。![组件显示和隐藏](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4533641461/p379198.png)

**说明**

当单击**TAB1**时，显示柱状图组件；切换单击**TAB2**时，则展示折线图组件。

配置案例交互，具体实操请参见[利用Tab列表控制组件显隐](#title-uup-a1l-79d)。

方法一：利用分支判断节点

1.  在画布编辑器中添加需要配置交互的组件，以**柱状图**、**Tab列表**和**区域图**组件为例，并右键单击分别将组件都导出到蓝图编辑器。
    
2.  按照下图在蓝图编辑器画布中将节点之间进行连线，并在分支判断节点中编辑处理方法。 ![控制显隐蓝图编辑器连线](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4533641461/p379208.png)
    
    **说明**
    
    -   如果**Tab列表**的参数`id=1`触发执行，**区域图**组件的显示动作，不满足则触发隐藏动作。
        
    -   如果**Tab列表**的参数 `id=2`触发执行，**柱状图**组件的显示动作，不满足则触发隐藏动作。
        
    

方法二：利用串行处理节点

1.  在画布编辑器中添加需要配置交互的组件，将**区域图**和**柱状图**组件重叠放置，右键单击**成组**。![成组](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4533641461/p379272.png)
    
2.  在**图层**中，单击成组后的对象，打开**组内对象轮播**并将**触发方式**设置为**事件触发**。![设置触发方式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4533641461/p379274.png)
    
3.  将**Tab列表**和**组**，右键单击导出到蓝图编辑器，按照下图进行节点之间的连线，并在串行处理节点中编写处理方法。 ![串行节点处理](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4533641461/p379214.png)
    
    **说明**
    
    当单击Tab时，事件内的 `{id:“1”}` 参数传递给串行数据处理节点后变成 `{index:0}`，其中`0`代表组内的组件索引是以0开始的。
    

### 如何通过合并请求进行数据分发

本案例是通过蓝图编辑器实现以**通用标题**组件请求数据，并分发给**数字翻牌器**和**多行文本**组件的功能。![案例二样例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4533641461/p379217.png)

配置案例交互操作步骤如下，具体实操请参见[如何通过合并请求进行数据分发](#title-d95-m8m-jp9)。

1.  在画布编辑器中添加**数字翻牌器**和**通用标题**组件，并清空**数字翻牌器**组件的标题名内容和前后缀内容，同时将**通用标题**组件放在画布编辑器外，并修改组件数据内容。![修改数据内容](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4533641461/p379223.png)
    
2.  将组件导出到蓝图编辑器，单击添加一个**序列执行**节点，填写节点的处理方法。![序列执行方法](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4533641461/p379226.png)
    

### 如何实现跨屏联动

本案例是通过蓝图编辑器中的**WebSocket节点**实现跨屏联动的效果。

配置案例交互操作步骤如下，具体实操请参见 [如何实现跨屏联动](#title-80m-p9x-8kf)。

1.  建立两个屏幕的WebSocket服务，其中自建和下载DataV-WS服务包的方法请参见
    
    [自建WebSocket节点服务说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/process-data-1#concept-2333445/section-lun-rky-rx9)和[下载DataV-WS服务包](https://help.aliyun.com/document_detail/164991.html)。
    
2.  分别创建控制端和接收端2个可视化应用。
    
3.  控制端使用**Tab列表**组件导出到蓝图编辑器，接收端使用**通用标题**组件导出到蓝图编辑器。
    
4.  配置发送端的蓝图配置。![蓝图配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4533641461/p379232.png)
    
5.  配置接收端的蓝图配置。![配置接收端蓝图配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5533641461/p379250.png)
    

## 实操演示

### 利用Tab列表控制组件显隐

方法一：

1.  在画布编辑器页面，选择**全部资产**栏，单击添加需要配置交互的组件至画布编辑器中，以**Tab列表**、**轮播列表**和**转盘抽奖**组件为例。
    
2.  组件添加完成后 ，在左侧**图层**栏中选择组件，右键单击**导出到蓝图编辑器**。![导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5533641461/p379306.png)
    
3.  在蓝图编辑器页面，从左侧**导入节点栏**选择组件，单击添加至蓝图编辑器画布中，并添加两个**分支判断**节点，按照下图进行连线。![蓝图配置分值判断](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5533641461/p379315.png)
    
4.  单击上方的分支判断节点，在右侧**配置**面板，**其他配置**模块添加处理方法，代码请参见：
    
    ```
    return data.id == 1;
    ```
    
    使用同样的方法，为下方的分支判断节点添加处理方法，代码请参见：
    
    ```
    return data.id == 2;
    ```
    
5.  在蓝图编辑器右上方单击预览![预览](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5533641461/p379329.png)图标，查看分支判断节点实现Tab列表控制组件显隐预览效果。![预览方法一](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5533641461/p379326.png)
    

方法二：利用串行处理节点

1.  在画布编辑器页面，选择**全部资产**栏，单击添加需要配置交互的组件至画布编辑器中，以**Tab列表**、**进度条表格**和**键值表格**组件为例。
    
2.  在画布编辑器中将**进度条表格**和**键值表格**组件重叠放置，在左侧的**图层**栏同时选中两个组件，并在画布中右键单击**成组**。![成组 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4533641461/p379272.png)
    
3.  在**图层**栏中，单击成组后的对象，打开**组内对象轮播**并将**触发方式**设置为**事件触发**。![设置触发方式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4533641461/p379274.png)
    
4.  将**Tab列表**和**组**右键单击选择**导出到蓝图编辑器**，在蓝图编辑器页面左侧的**导入节点**栏，将组件节点添加到画布中。
    
5.  在蓝图编辑器画布中，添加一个**串行数据处理**节点，按照如下图连线，并为串行数据处理节点添加一个方法，代码请参见：
    
    ```
    return {
      "index": data.id - 1
    } 
    ```
    
    **说明**
    
    当单击Tab时，事件内的 `{id:“1”}` 参数传递给串行数据处理节点后变成 `{index:0}`，其中`0`代表组内的组件索引是以0开始的。
    
6.  在蓝图编辑器右上方单击预览![预览](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5533641461/p379329.png)图标，查看串行节点实现Tab列表控制组件显隐预览效果。![展示效果 串行处理节点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5533641461/p379425.png)
    
    **说明**
    
    当选中**TAB1**时画布显示**进度条表格**组件，选中**TAB2**时画布显示**键值表格**组件。
    
7.  如果您想查看**如何利用Tab列表控制组件显隐**的详细方法，请参见：[如何利用Tab列表控制组件显隐](https://help.aliyun.com/document_detail/128332.html)。
    

### 如何通过合并请求进行数据分发

1.  在画布编辑器页面，选择**全部资产**栏，单击添加需要配置交互的组件至画布编辑器中，以**通用标题**、**多行文本**和**数字翻牌器**组件为例。
    
2.  选择通用标题组件，在右侧数据配置面板单击配置数据源，按照如下方法设置数据源。
    
    ```
    [
        {
            "num": "123",
            "text": "这是多行文本组件",
            "value": "接收数据组件"
        }
    ]
    ```
    
3.  在画布编辑器页面，选择**图层**栏3个组件，并分别右键单击**导出到蓝图编辑器**。
    
4.  在蓝图编辑器页面的**导入节点**栏，单击三个组件节点，分别添加到蓝图编辑器画布中，并在画布中添加一个**序列执行**节点，按照如下图连线。![合并请求数据分发蓝图连线](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5533641461/p379454.png)
    
5.  节点之间连线完成后，在右侧**其它配置**模块，为序列执行节点添加两个方法，代码请参见：
    
    -   取文本数据
        
        ```
        return [{
          value:data[0].text
        }];
        ```
        
    -   取数字翻牌器数据
        
        ```
        return [{
          value:data[0].num
        }];
        ```
        
6.  在蓝图编辑器配置页面右上角，单击预览![预览](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5533641461/p379508.png)图标，查看数据的分发效果。![数据分发结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5533641461/p379462.png)
    
7.  如果您想查看**如何通过合并请求进行数据分发**的详细方法，请参见：[如何通过合并请求进行数据分发](https://help.aliyun.com/document_detail/151281.html)。
    

### 如何实现跨屏联动

1.  建立两个可视化应用的WebSocket服务，其中自建和下载DataV-WS服务包的方法请参见
    
    [自建WebSocket节点服务说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/process-data-1#concept-2333445/section-lun-rky-rx9)和[下载DataV-WS服务包](https://help.aliyun.com/document_detail/164991.html)。
    
2.  分别创建控制端和接收端2个可视化应用。
    
3.  在控制端可视化应用中，添加**Tab列表**组件，并将其导出到蓝图编辑器。
    
4.  在蓝图编辑器画布中添加**串行数据处理**以及**WebSocket**节点，按照如下图连线。![跨屏联动蓝图配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6533641461/p379471.png)
    
    **说明**
    
    -   您需要在右侧其它配置模块配置WebSocket节点服务的IP地址，有如下两种情况：
        
        -   用HTTP打开可视化应用，请使用ws协议，如：ws://127.0.0.1:8181。
            
        -   用HTTPS打开可视化应用，请使用wss协议，如：wss://xxx。
            
    -   屏幕ID和屏幕名称会自动填充。![配置WebSocket节点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6533641461/p379489.png)
        
    
5.  设置完**WebSocket**节点后，您需要在**其它配置**模块为串行数据处理节点添加一个方法，代码请参见：
    
    ```
    return [{"value":data.content}]; 
    ```
    
6.  控制端配置完成后，打开接收端可视化应用，在画布编辑器中添加**通用标题**组件，并将其导出到蓝图编辑器。
    
7.  在蓝图编辑器页面，在左侧**导入节点**栏的**通用标题**节点添加到画布中，并添加一个**WebSocket**节点，按照如下图连线。![接收端配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6533641461/p379497.png)
    
8.  按照同样的方法配置接收端的**WebSocket**节点，节点内所配置**接受消息**的**消息名**与**发送消息**的**消息名**需要保持一致，设为test。
    
9.  设置完成后，在蓝图编辑器配置页面右上角，单击预览![预览](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6533641461/p379507.png)图标，查看分屏联动效果。![分屏联动效果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6533641461/p379506.png)
    
10.  如果您想查看**如何实现跨屏联动**的详细方法，请参见：[如何实现跨屏联动](https://help.aliyun.com/document_detail/151313.html)。