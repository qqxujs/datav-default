 

本文介绍Tab列表的使用指南。

## 组件概述

Tab列表由多个标签组成，可通过交互配置与其他组件配合使用，实现将相关信息分组并以标签的形式呈现，快速切换不同视图或功能区域。

### 使用场景

Tab列表常用于信息组织、内容分类、数据展示等场景，方便您快速查找所需信息。具体如下：

-   信息组织：通过标签将相关内容分组。例如，设置“个人信息”、“账户设置”。
    
-   内容分类：通过标签区分不同内容类别。例如，电商平台的“电子产品”、“家居用品”。
    
-   数据展示：通过标签展示不同数据视图。例如，“某地区的小学分布”、“某地区的高中分布”。
    

### **效果展示**

-   示例通过Tab列表的不同标签展示不同图表。
    
    ![CA6A8B79-114E-48B2-8945-F0D345B490D7](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0734883371/p885813.gif)
    
-   Tab列表内置多种快速样式可供选择。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2426115371/p894205.png)
    

## **前提条件**

-   已创建数据看板，支持[使用模板创建](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)、[使用空白画布创建](https://help.aliyun.com/zh/datav/datav-7-0/getting-started/use-a-canvas-to-create-a-dashboard#639c36877c6jr)、[使用AI智能生成](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-ai-to-intelligently-generate-pc-side-kanban)。
    
-   已准备业务数据，详情请参见[数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/data-source/)。
    

## **添加**Tab列表

1.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
2.  在**工作台**页面的**数据看板**区域，鼠标悬停至目标看板，单击**编辑**，进入看板的画布编辑页面。
    
3.  在左侧导航栏，按下图步骤添加**Tab列表**组件至画布。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0851857571/p1006144.png)
    
    **说明**
    
    平台提供了多种内置的Tab列表样式（即快速样式）可直接使用，鼠标悬停至组件上的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2426115371/p892740.png)图标，即可按需选择。若快速样式不符合需求，您也可在添加组件后自定义组件样式，详情请参见[样式配置](#837e6d708aq1g)。
    

您也可[使用全局搜索](https://help.aliyun.com/zh/datav/global-search)添加相关组件。

## **接入业务数据**

添加组件后，您可将已准备的业务数据接入组件进行显示。单击Tab列表，在右侧的**数据源**页签，即可选择该组件所要呈现的数据。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0734883371/p882069.png)

-   Tab列表接收的数据字段介绍如下。
    
    **字段**
    
    **描述**
    
    `id`
    
    Tab列表中的标签ID。样式面板中的**通用** > **初始选中**配置项，需要使用此变量值来定义组件初始化时选中哪个标签。
    
    `content`
    
    Tab列表中的标签名称。
    
    `imgSrc`
    
    Tab列表中标签的图标URL地址。此处配置图标后，可在样式面板的**通用** > **图标**中修改图片的大小、位置等信息。
    
    示例Tab列表的数据结构及效果展示如下。
    
    ```
    [
      {
        "id": 1,
        "content": "销售数据",
        "imgSrc": "&#xe8fc"
      },
      {
        "id": 2,
        "content": "客户数据",
        "imgSrc": "&#xe7b1"
      },
      {
        "id": 3,
        "content": "市场数据",
        "imgSrc": "&#xe7b1"
      },
      {
        "id": 4,
        "content": "生产数据",
        "imgSrc": "&#xe7b1"
      }
    ]
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0734883371/p882084.png)
    
-   数据源的核心配置项介绍如下。
    
    **配置项**
    
    **描述**
    
    选择数据源
    
    Tab列表支持接入CSV文件、API、各类数据库等多种类型数据，详情请参见[支持的数据源类型](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-a-data-source/)。您可使用可视化表格或代码方式编辑数据字段。
    
    配置过滤器（可选）
    
    用于自定义过滤代码，实现数据的结构转换、筛选、展示和简单的计算，详情请参见[管理数据过滤器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/manage-filters-1)。
    
    配置数据映射
    
    用于将所选数据源中的字段映射至组件对应的字段上，实现数据的实时匹配。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9633269661/p524955.png)图标可配置字段样式。
    
    查看响应结果
    
    用于实时展示组件所接入的数据。当组件数据源发生变化时，此处会对应展示最新数据。
    
    -   单击数据响应结果，可查看编写的数据字段代码。
        
    -   单击查看示例，可查看数据源接收的数组类型及代码示例。您可参考示例编写相关字段。
        
    
    其他数据请求配置：
    
    -   禁止加载态：勾选后，在组件更新或预览数据看板时，将不呈现组件初始化时的加载内容。
        
    -   受控模式：勾选后，组件在初始化状态下不会请求数据。此时仅支持通过蓝图编辑器或全局变量事件发起数据请求。
        
    -   自动更新请求：勾选后，平台会根据您设置的轮询时间，动态轮询更新数据；不勾选，则需手动刷新页面，或通过蓝图编辑器和全局变量事件来触发请求更新数据。
        
    

## **配置**Tab列表

单击Tab列表组件，即可在右侧面板配置组件的基础样式、全局变量和交互事件等高级配置，以及蓝图交互配置。

### **样式配置**

在**样式**面板，可配置Tab列表的文字大小、背景、动画效果等样式，相关配置项介绍如下。

**说明**

您也可单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879258.png)图标，通过关键词搜索，快速定位到所需配置项，搜索支持模糊匹配。详情请参见[搜索配置项](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。

**配置项**

**描述**

**图示**

全局配置

定义组件在数据看板中的位置分布、透明程度、交互穿透。

-   不透明度：数值越小，组件越透明。取值范围为`0~1`内的数值。
    
-   交互穿透：开启后，鼠标可穿透该组件，避免看板中组件较多时，该组件会遮挡鼠标与下层组件的交互。
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0734883371/p882238.png)

通用配置

定义Tab列表的整体显示样式，包括Tab容器的背景、边框，标签的尺寸、排布位置等。

-   初始选中：配置组件初始化时选中哪个标签。此处需输入标签ID，ID可在数据源面板查看。
    
-   尺寸自定义：开启后，可自定义Tab列表各标签的大小；关闭则使用系统自适应的尺寸。
    
-   全局样式：可设置Tab列表的背景、边框样式及标签间距，支持上传本地图片作为背景。
    
-   图标：您可先在[iconfont](https://www.iconfont.cn/)制作图标，并在此处输入图标项目的Unicode字体文件（.woff），将图标添加至Tab列表中使用。
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0734883371/p882241.png)

未选中配置

预览Tab列表时，选中某个标签则会显示该标签的相关内容，其他标签将视为未选中。此处用于定义未选中标签的显示样式。

-   默认样式：未选中标签默认呈现的字体大小、背景颜色等样式。
    
-   悬浮样式：鼠标悬浮至未选中的标签，对应呈现的样式。
    

**说明**

支持上传本地图片作为背景。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0734883371/p882242.png)

选中配置

预览Tab列表时，选中某个标签则会显示该标签的相关内容，其他标签将视为未选中。此处用于定义选中标签的显示样式。

-   选中装饰条：可设置选中标签时，是否添加装饰线。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0734883371/p884280.png)
    
-   默认样式：选中标签默认呈现的字体大小、背景颜色等样式。
    
-   悬浮样式：鼠标悬浮至选中的标签，对应呈现的样式。
    

**说明**

支持上传本地图片作为背景。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0734883371/p882243.png)

交互配置

设置Tab列表的轮播间隔时长，以及提示框位于各个标签的相对位置。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0734883371/p882262.png)

### **高级配置**

可定义Tab列表与其他组件间的交互，以及数据传递关系，相关配置项介绍如下。

**配置项**

**描述**

**图示**

交互事件

定义与其他组件间的[交互行为](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)，实现组件联动。例如，可使用Tab列表和折线图展示某企业的经营状况，通过单击不同标签，展示销售数据、客户数据、市场数据、生产数据的波动情况。

单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879478.png)图标，即可定义相关交互事件及交互动作。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0734883371/p884035.png)

关联全局变量

可在组件中关联全局参数，实现组件间的参数传递，进行组件交互。全局变量的介绍，请参见[全局变量](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-global-variables)。

单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879477.png)图标，即可开启相应指令。当单击Tab标签时，会触发数据请求，抛出临时变量，动态加载标签内容。默认抛出数据中的`id`和`content`值，详情请参见[组件交互配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)。

### **蓝图交互**

可通过[蓝图编辑器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/what-is-blueprint-editor-1)使用可视化连线方式，定义组件间的交互关系及行为逻辑。

#### **操作步骤**

1.  在画布编辑页面，单击顶部菜单栏左侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879479.png)图标，进入蓝图编辑器。
    
2.  在图层节点列表，鼠标悬停至Tab列表组件，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2907643371/p879480.png)图标，添加该组件至主画布。
    
3.  通过连线方式，按需配置相关组件的蓝图交互效果。
    
    示例如下。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0734883371/p883998.png)
    

#### **配置项介绍**

相关交互事件及动作的介绍如下。

**说明**

您也可在蓝图配置界面右侧，单击相应事件或动作后的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0734883371/p884551.png)图标，查看相关参数详细介绍。

**类别**

**子类别**

**描述**

**事件**

**当数据更新时**

当组件数据更新时抛出该事件。

**当数据请求状态变化时**

当数据请求状态变化时抛出该事件。状态值包括Loading、Success、Error。

**当点击Tab时**

当单击Tab时抛出的事件，同时抛出该Tab对应的数据项，数据示例如下。

```
{
  "id": "1",
  "content": "标签1"
}
```

**动作**

**导入数据**

按组件绘制格式处理数据后，导入组件，重新绘制。无需重新请求服务端数据，数据示例如下。

```
[
  {
    "id": "1",
    "content": "标签1",
    "imgSrc": "https://img.alicdn.com/imgextra/i3/O1CN016hZVyj29jgY7SqaJn_!!6000000008104-55-tps-200-200.svg"
  }
]
```

**请求数据**

重新请求服务端数据，上游转换器或图层节点抛出的数据将作为参数。例如，Tab列表配置了API数据源为`https://api.test`，传到**请求数据**动作的数据为`{ id: '1'}`，则最终请求接口为`https://api.test?id=1`。

**设置选择项**

选择某一个或多个Tab选项，可以是数组或单个对象，数据示例如下。

```
{
  "id": "1"
}
```

**开启轮播**

Tab列表开启自动轮播，数据示例如下。

```
{
  "duration": 2000  //轮播时间，单位ms
}
```

**关闭轮播**

Tab列表关闭轮播样式，无需参数。

**移动**

将组件移动至指定位置，数据示例如下。

```
    {
      // 移动方式。绝对定位：to，相对定位：by。默认值：to。
        "positionType": "to",
      // 指定位置。x坐标，y坐标。
      "attr": {
        "x": 0,
        "y": 0
      },
      // 动画方式。
      "animation": {
        "enable": false,
        // 动画延时。
        "animationDuration": 1000,
        // 动画曲线。可选值为：linear|easeInOutQuad|easeInOutExpo。
        "animationEasing": "linear"
      }
    }
```

**切换显隐**

切换组件为显示或隐藏，数据示例如下。

```
{
  "animationType": "fade",
  "animationDuration": 1000,
  "animationEasing": "linear"
}
```

-   animationType：动画方式。可配置为appear（出现/消失）、fade（渐隐渐现）、slideToUp（飞入/飞出），不配置表示无动画。
    
-   animationDuration：动画延时，默认为1000ms。
    
-   animationEasing：动画曲线。可配置为linear（匀速）、easeInOutQuad（平滑）、easeInOutExpo（慢快慢）。
    

**显示**

**隐藏**

**更新组件配置**

动态更新组件的样式配置。

1.  先在组件的**样式**面板中，单击**复制配置到剪贴板**，获取组件的配置数据。
    
2.  根据需要，在蓝图编辑器配置页面的数据处理节点，更改对应样式的字段值。
    

## **案例演示**

本案例通过Tab列表控制组内轮播和组的显示隐藏，实现组件的动态展示效果。

1.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
2.  选择任一数据看板，单击**编辑**，进入画布编辑器页面。
    
3.  添加**柱状图**、**折线图**、**进度环图**和两个**Tab列表**组件到画布中。
    
4.  将柱状图、折线图和环图成组，设置轮播容器的触发方式为**事件触发**。
    
5.  单击任意一个Tab列表组件，选中数据源面板，修改静态数据，同步修改名称为**显示/关闭**。
    
    ```
    [
      {
        "id": 1,
        "content": "显示"
      },
      {
        "id": 2,
        "content": "关闭"
      }
    ]
    ```
    
6.  单击另一个Tab列表，修改名称为**轮播控制**。
    
7.  单击页面左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7498599661/p528973.png)图标，进入**蓝图**页面。
    
8.  在**图层节点**页签下，添加轮播容器、显示/关闭和轮播控制至主画布中。
    
9.  在**逻辑节点**页签下，添加1个串行数据处理节点和2个条件判断节点到主画布中。
    
10.  连接组件。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0682891961/p705501.png)
     
11.  配置处理方法。
     
     -   显示
         
         ```
         return data.id == 1;
         ```
         
     -   隐藏
         
         ```
         return data.id == 2;
         ```
         
     -   串行数据处理
         
         ```
         return {
           index: data.id - 1
         };
         ```
         
12.  单击页面右上角的**预览**，预览展示结果。![tab(2).gif](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0682891961/p705502.gif)