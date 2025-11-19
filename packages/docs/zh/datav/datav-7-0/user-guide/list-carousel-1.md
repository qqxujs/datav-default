<!DOCTYPE html> 

本文介绍轮播列表的使用指南。

## 组件概述

轮播列表是一种表格组件，能够使用轮播动画的方式，将数据信息以列表的形式有序、清晰地展示在数据看板上。支持自定义行、列的样式和内容，支持将列表内容配置为超链接及图片。

### 使用场景

轮播列表适用于需要在指定区域内浏览大量信息的场景，该内容可通过自动或手动方式进行轮播切换。例如，电子商务网站可使用轮播列表展示热门商品、促销活动的相关信息。

### **效果展示**

![B12A90A2-8110-4594-B245-41A4FED8D106](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9958239371/p912149.gif)

## **前提条件**

* 已创建数据看板，支持[使用模板创建](/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)、[使用空白画布创建](/zh/datav/datav-7-0/getting-started/use-a-canvas-to-create-a-dashboard#639c36877c6jr)、[使用AI智能生成](/zh/datav/datav-7-0/user-guide/use-ai-to-intelligently-generate-pc-side-kanban)。
* 已准备业务数据，详情请参见[数据源](/zh/datav/datav-7-0/user-guide/data-source/)。

## **添加**轮播列表

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面的**数据看板**区域，鼠标悬停至目标看板，单击**编辑**，进入看板的画布编辑页面。
3. 在左侧导航栏，按下图步骤添加**轮播列表**组件至画布。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8792847571/p1005697.png)

您也可[使用全局搜索](/zh/datav/global-search)添加相关组件。

## **接入业务数据**

添加组件后，您可将已准备的业务数据接入组件进行显示。单击轮播列表，在右侧的**数据源**页签，即可选择该组件所要呈现的数据。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9958239371/p913248.png)

* 轮播列表接收的数据字段介绍如下。

|    **字段**    |    **说明**    |
|    ----    |    ----    |
|    自定义参数    |    轮播列表的表格内容。可自定义多个字段值，需要与**样式** \> **自定义列** \> **列字段名**匹配使用。 **说明** 字段内容可使用HTML标签。例如，使用<a>实现超链接效果的代码示例为"DataV": "<a href='https://www.aliyun.com/product/bigdata/datav?'>DataV官网</a>"。    |    
示例轮播列表的数据结构如下。  
```  
[  
  {  
    "area": "中国",  
    "pv": 688,  
    "attribute": "xxxxxxxxxxxxxxxxxxx"  
  },  
  {  
    "area": "美国",  
    "pv": 688,  
    "attribute": "xxxxxxxxxxxxxxxxxxx"  
  },  
  {  
    "area": "德国",  
    "pv": 688,  
    "attribute": "xxxxxxxxxxxxxxxxxxx"  
  },  
  {  
    "area": "英国",  
    "pv": 688,  
    "attribute": "xxxxxxxxxxxxxxxxxxx"  
  }  
]  
```
* 数据源的核心配置项介绍如下。

|    **配置项**    |    **描述**    |
|    ----    |    ----    |
|    **选择数据源**    |    支持接入CSV文件、API、各类数据库等多种类型数据，详情请参见[支持的数据源类型](/zh/datav/datav-7-0/user-guide/add-a-data-source/)。您可使用可视化表格或代码方式编辑数据字段。    |
|    **配置过滤器（可选）**    |    用于自定义过滤代码，实现数据的结构转换、筛选、展示和简单的计算，详情请参见[管理数据过滤器](/zh/datav/datav-7-0/user-guide/manage-filters-1)。    |
|    **配置数据映射**    |    用于将所选数据源中的字段映射至组件对应的字段上，实现数据的实时匹配。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9633269661/p524955.png)图标可配置字段样式。    |
|    **查看响应结果**    |    用于实时展示组件所接入的数据。当组件数据源发生变化时，此处会对应展示最新数据。单击数据响应结果，可查看编写的数据字段代码。单击查看示例，可查看数据源接收的数组类型及代码示例。您可参考示例编写相关字段。其他数据请求配置：**禁止加载态**：勾选后，在组件更新或预览数据看板时，将不呈现组件初始化时的加载内容。**受控模式**：勾选后，组件在初始化状态下不会请求数据。此时仅支持通过蓝图编辑器或全局变量事件发起数据请求。**自动更新请求**：勾选后，平台会根据您设置的轮询时间，动态轮询更新数据；不勾选，则需手动刷新页面，或通过蓝图编辑器和全局变量事件来触发请求更新数据。    |

## **配置**轮播列表

单击轮播列表组件，即可在右侧面板配置组件的基础样式、全局变量和交互事件等高级配置，以及蓝图交互配置。

### **样式配置**

在**样式**面板，可配置轮播列表的表格字体、颜色、轮播动画等样式，相关配置项介绍如下。

**说明** 

您也可单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879258.png)图标，通过关键词搜索，快速定位到所需配置项，搜索支持模糊匹配。详情请参见[搜索配置项](/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。

|    **配置项**    |    **描述**    |    **图示**    |
|    ----    |    ----    |    ----    |
|    全局配置    |    定义组件在数据看板中的位置分布、透明程度、交互穿透。**不透明度**：数值越小，组件越透明。取值范围为0\~1内的数值。**交互穿透**：开启后，鼠标可穿透该组件，避免看板中组件较多时，该组件会遮挡鼠标与下层组件的交互。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9958239371/p907435.png)    |
|    快速样式    |    平台内置了多种轮播列表样式，您可根据实际场景快速切换使用。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9958239371/p907506.png)    |
|    全局样式配置    |    定义轮播列表的表格行数、列间距、字体样式、轮播控制及动画样式、高亮显示等配置。是否轮播：开启后，轮播列表才会以动画样式进行轮播。可设置轮播的动画类型、间隔时间，以及单页是否需要轮播等。**轮播动画**：支持设置为逐条滚动和全部滚动。全部滚动是以当前页面为单位进行轮播，类似翻页效果。**单页不轮播**：开启后，若数据条数达不到表格行数（即数据只有一页），则不进行轮播。高亮配置：开启后，轮播到指定行时，该行将按照当前高亮样式配置（字体、背景色、边框等样式）进行高亮呈现。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9958239371/p913391.png)**自动依次高亮**：开启后，每一行内容轮播时自动依次高亮显示；关闭后，可指定某行高亮展示。**指定高亮序列号**：输入轮播列表某行的序列号，该序列号的行内容将高亮显示。仅在关闭**自动依次高亮**配置项时生效。其他配置：可设置空值行隐藏、溢出文本滚动样式、视图渲染更新时间、自定义列的图片配置等。**空值隐藏行**：开启后，若某行数据内容为空，则该行将自动隐藏。**溢出文本滚动**：若某字段数据内容较长，可设置溢出文本是否滚动呈现，以及滚动的速率或时长。若关闭滚动开关，则溢出的文本将会被截断，不会呈现。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9958239371/p913397.png)**即刻更新**：开启后，当数据更新时将立即更新视图渲染；关闭后，当数据更新时，视图将在下次轮播时更新。**默认图片**：当自定义列的内容类型为图片时，相应列内容所显示的默认图片。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9958239371/p913421.png)**说明** 图片支持**PNG**、**JPG**、**GIF**、**JPEG**等格式。此处的图片非真实图片地址，仅作为默认图片显示，您可在数据源中配置您实际需要展示的内容。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9958239371/p907439.png)    |
|    表头配置    |    定义轮播列表是否需要添加表头，以及设置表头的行高（占整个轮播列表高度的比例）、背景[颜色](/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)、文本样式（字体大小、颜色、粗细等）。关闭后，轮播列表将没有表头。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9958239371/p913441.png)    |
|    行配置    |    可分别设置奇数行、偶数行的背景颜色，以及所有行的回调字段（该字段将作为回调参数的取数字段）。**说明** 回调ID新版已迁移至交互面板中，样式面板交互功能将弃用，请尽快升级。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9958239371/p907451.png)    |
|    序号列配置    |    开启后，将在轮播列表最左侧生成一个序号列。可设置序号列的背景颜色、列宽、序号图标（即圆圈）半径，以及文本的字体、大小、颜色等样式。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9958239371/p913451.png)    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9958239371/p907450.png)    |
|    自定义列配置    |    定义轮播列表的列内容及样式。该配置项为一个数组，可配置多个标签（一个标签为一列），编辑器会遍历数据，使数据通过自定义列的配置循环渲染。标签的先后顺序即为列的展示顺序，您可按需调整相应顺序。支持定义列的字段名称、显示名称、列宽、内容类型（文本或图片）、是否换行、文本样式、图片样式等。列字段名：需要来源于数据源中的字段名称。配置后，轮播列表中该列才会获取数据源相应字段的内容进行显示。列显示名：作为该列的表头内容显示。文本样式：当**内容类型**选择**文本**时生效。可设置文本的对齐方式、字体、大小、颜色，以及是否自动换行等。开启自动换行后，当前列的数据内容溢出时，将进行换行展示。否则，溢出数据可能会被截断。图片样式：当**内容类型**选择**图片**时生效。可设置图片的宽度、边距等。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528933.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528934.png)图标，可添加或删除一个标签列；单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528936.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528937.png)图标，可更改自定义列配置区域的排列样式；单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528938.png)图标，可复制当前选中的标签列。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9958239371/p907449.png)    |

### **高级配置**

可定义轮播列表与其他组件间的交互，以及数据传递关系。相关配置项介绍如下。

|    **配置项**    |    **描述**    |    **图示**    |
|    ----    |    ----    |    ----    |
|    交互事件    |    定义与其他组件间的[交互行为](/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)，实现组件联动。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879478.png)图标，即可定义相关交互事件及交互动作。    |    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9958239371/p913523.png)    |
|    关联全局变量    |    可在组件中关联全局参数，实现组件间的参数传递，进行组件交互。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879477.png)图标，即可开启相应指令，并为该指令关联所需[全局变量](/zh/datav/datav-7-0/user-guide/use-global-variables)。**当点击单行时**：可单击轮播列表中的某一行抛出临时变量，默认抛出area、pv和attribute字段。**说明** 仅当您的轮播列表**列字段名**使用默认字段area、pv和attribute时，当前指令生效。若您的**列字段名**使用自定义字段，则请进入蓝图编辑器使用**当点击单行时**功能。蓝图编辑器中**当点击单行时**的字段配置操作示例如下。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1546159371/p916788.png)**当数据滚动时**：当列表中的数据进行翻动时，会抛出临时变量，默认抛出data和index（索引值）字段。**当高亮时**：当列表中的数据行内容高亮显示时，会抛出临时变量，默认抛出data和index（索引值）字段。**一轮滚动结束**：当列表中的数据行滚动完一轮时，会抛出临时变量，默认抛出message和isEnding字段。配置详情请参见[组件交互配置](/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)。    |    |

### **蓝图交互**

可通过[蓝图编辑器](/zh/datav/datav-7-0/user-guide/what-is-blueprint-editor-1)使用可视化连线方式，定义组件间的交互关系及行为逻辑。

#### **操作步骤**

1. 在画布编辑页面，单击顶部菜单栏左侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879479.png)图标，进入蓝图编辑器。
2. 在图层节点列表，鼠标悬停至轮播列表组件，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2907643371/p879480.png)图标，添加该组件至主画布。
3. 通过连线方式，按需配置相关组件的蓝图交互效果。  
示例如下。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9958239371/p913724.png)

#### **配置项介绍**

相关交互事件及动作的介绍如下。

**说明** 

您也可在蓝图配置界面右侧，单击相应事件或动作后的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0734883371/p884551.png)图标，查看相关参数详细介绍。

|    **类别**    |    **子类别**    |    **描述**    |
|    ----    |    ----    |    ----    |
|    **事件**    |    **当数据更新时**    |    当组件数据更新时抛出该事件。    |
|    **当数据请求状态变化时**    |    当数据请求状态变化时抛出该事件。状态值包括Void、Loading、Success、Error。    |    |
|    **当点击单行时**    |    当单击轮播列表的某一行时抛出当前行的数据，内容随数据响应结果进行变化，数据示例如下。{   "area": "中国",   "pv": 1,   "attribute": "示例数据" }    |    |
|    **当数据滚动时**    |    当轮播列表的数据行滚动时，触发并抛出当前页的数据和索引值，数据示例如下。{   "data": \[     {                     //当前页数据。       "area": "中国",       "pv": 1,       "attribute": "示例数据"      }    \],     "index": 1              //列表行索引值，始终获取第一行数据。 }    |    |
|    **当高亮时**    |    当轮播列表的数据行高亮显示时，触发并抛出当前页的数据和索引值，数据示例如下。**重要** 使用前请先开启**样式** \> **高亮** \> **自动依次高亮**配置。{   "data": \[     {                     //当前页数据。       "area": "中国",       "pv": 1,       "attribute": "示例数据"     }   \],     "index": 1              //高亮所在的行索引值。 }    |    |
|    **一轮滚动结束**    |    当轮播列表一轮滚动结束时，触发并抛出一轮滚动结束的描述信息并结束滚动，数据示例如下。{   "message": "第一轮滚动结束",   "isEnding": "0" }    |    |
|    **动作**    |    **导入数据**    |    按组件绘制格式处理数据后，导入组件，重新绘制。无需重新请求服务端数据，数据示例如下。{   "area": "中国",   "pv": 1,   "attribute": "示例数据" }    |
|    **请求数据**    |    重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如，轮播列表配置的API数据源为https://api.test，传到**请求数据**动作的数据为{ id: '1'}，则最终请求为https://api.test?id=1。    |    |
|    **高亮**    |    高亮显示轮播列表数据行内容，数据示例如下。{   "isOrder": true,                       //是否依次滚动高亮，支持逐条滚动高亮和指定高亮   "hightLightIndex": "1",                //指定高亮值，指定高亮序列号（e.g:'1,2,3')   "hightLightStyle": {                   //样式，高亮样式     "color": "#f00",                     //文字颜色     "borderColor": "#f00",               //边框额色     "borderWidth": 1,                    //边框宽度     "backgroundColor": "yellow",         //背景色     "fontSize": 12,                      //字体大小     "fontWeight": "normal",              //字体粗细     "fontFamily": "Microsoft Yahei"      //字体   } }    |    |
|    **开启滚动**    |    开始轮播滚动，动作传入数据为Object类型，数据示例如下。{   "isLoop": true //是否轮播，默认值为true。 }    |    |
|    **暂停滚动**    |    暂停滚动，无需参数。    |    |
|    **移动**    |    将组件移动至指定位置，数据示例如下。 {   // 移动方式。绝对定位：to，相对定位：by。默认值：to。     "positionType": "to",     // 指定位置。x坐标，y坐标。     "attr":        {         "x": 0,         "y": 0        },       // 动画方式。       "animation":     {        "enable": false,        // 动画延时，单位ms。        "animationDuration": 1000,        // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。         "animationEasing": "linear"    } }    |    |
|    **切换显隐**    |    切换组件为显示或隐藏，数据示例如下。{   "animationType": "fade",   "animationDuration": 1000,   "animationEasing": "linear" }animationType：动画方式。可配置为appear（出现/消失）、fade（渐隐渐现）、slideToUp（飞入/飞出），不配置表示无动画。animationDuration：动画延时，默认为1000ms。animationEasing：动画曲线。可配置为linear（匀速）、easeInOutQuad（平滑）、easeInOutExpo（慢快慢）。    |    |
|    **显示**    |    |    |
|    **隐藏**    |    |    |
|    **更新组件配置**    |    动态更新组件的样式配置。先在组件的**样式**面板中，单击**复制配置到剪贴板**，获取组件的配置数据。根据需要，在蓝图编辑器配置页面的数据处理节点，更改对应样式的字段值。    |    |

## **案例演示**

本案例使用柱状图和轮播列表交互，实现全年销售额按月轮播展示。

1. 添加组件至画布。

  1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
  2. 选择任一数据看板，单击**编辑**，进入画布编辑器。
  3. 在左侧导航栏的组件库中，按下图步骤依次添加**柱状图**和**轮播列表**两个组件至画布。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5606297571/p1006875.png)
2. 配置柱状图。

  1. 接入数据。  
  单击柱状图组件，选择**数据源**面板，修改静态数据内容。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9958239371/p913577.png)  
  数据内容如下。  
  ```  
  [  
    {  
      "colorField": 100,  
      "x": "1月",  
      "y": 280000  
    },  
    {  
      "colorField": 200,  
      "x": "2月",  
      "y": 200000  
    },  
    {  
      "colorField": 300,  
      "x": "3月",  
      "y": 180000  
    },  
    {  
      "colorField": 400,  
      "x": "4月",  
      "y": 160000  
    },  
    {  
      "colorField": 100,  
      "x": "5月",  
      "y": 430000  
    },  
    {  
      "colorField": 200,  
      "x": "6月",  
      "y": 200000  
    },  
    {  
      "colorField": 300,  
      "x": "7月",  
      "y": 290000  
    },  
    {  
      "colorField": 400,  
      "x": "8月",  
      "y": 760000  
    },  
    {  
      "colorField": 100,  
      "x": "9月",  
      "y": 260000  
    },  
    {  
      "colorField": 200,  
      "x": "10月",  
      "y": 370000  
    },  
    {  
      "colorField": 300,  
      "x": "11月",  
      "y": 290000  
    },  
    {  
      "colorField": 400,  
      "x": "12月",  
      "y": 150000  
    }  
  ]  
  ```
  2. 配置组件样式。  
  选择**样式**面板，配置X轴的**标签展示**数量为12，并关闭**动画效果**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9958239371/p913574.png)
3. 配置轮播列表。

  * 单击数据源面板，开启受控模式。使该组件在初始化状态下不会请求自己的静态数据，仅可通过蓝图编辑器发起数据请求（即获取与柱状图交互后输出的数据）。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9958239371/p913715.png)
  * 单击轮播列表组件，选择**样式**面板，开启全局高亮效果，自定义列保留两个标签列，并修改**列字段名**和**列显示名**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9958239371/p913611.png)
  * 列字段名：依次为Month、Total。
  * 列显示名：依次为月份、销售额。
4. 配置蓝图交互。  
使用蓝图交互，实现全年销售额按月轮播展示。

  1. 单击页面左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9958239371/p913618.png)图标，进入蓝图页面。
  2. 在左侧**图层节点**页签，鼠标悬停至组件，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9958239371/p913619.png)图标，添加组件至主画布。  
  您需依次执行该操作，添加柱状图、轮播列表组件至主画布。
  3. 在左侧**逻辑节点**页签，鼠标悬停至串行数据处理节点，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9958239371/p913620.png)图标，添加组件至主画布。重复执行两次，添加两个串行数据处理节点。
  4. 按下图连接组件，并配置串行数据处理节点。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9958239371/p913722.png)  
  配置串行数据处理节点的处理方法。

    * 导入数据  
      ```  
      return data.map(i => {  
        return {  
          Month: i.x,  
          Total: i.y  
        }  
      })  
      ```
    * 联动高亮  
      ```  
      return {  
        "data": {  
          "x": data.data[0].Month,  
          "y": data.data[0].Total  
        },  
        "style": {  
          "fillStyle": "#f00"  
        }  
      }  
      ```
5. 单击页面右上角的**预览**，预览展示结果。![BBB50DCF-7133-4C78-AC63-71983FD6EFB5](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9958239371/p913733.gif)