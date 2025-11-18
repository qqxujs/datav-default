 

数字翻牌器常用于展示数值、计数或时间等信息，可与其他组件进行交互，在可视化应用中展示数据的实时变化情况。本文为您介绍数字翻牌器的使用详情。

## **组件概述**

### 使用场景

数字翻牌器常用于时钟、计时器、计数器等设备，或金融领域显示金额、企业展示某个指标等场景。例如，展示企业的某个指标数据，通过指标的变化快速判断是否存在经营异常。

### **效果展示**

数字翻牌器通常由标题、前/后缀及翻牌器内容组成。示例使用数字翻牌器展示某地区的日销售金额，效果如下。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879342.png)

## **使用限制**

翻牌器内容仅支持显示`Number`类型。若您的数据非`Number`类型，则平台会将该内容视为异常字符，并自动替换为指定内容。详情请参见[异常字符处理](#d8129f3e5exbn)。

## **前提条件**

-   已创建数据看板，支持[使用模板创建](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)、[使用空白画布创建](https://help.aliyun.com/zh/datav/datav-7-0/getting-started/use-a-canvas-to-create-a-dashboard#639c36877c6jr)、[使用AI智能生成](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-ai-to-intelligently-generate-pc-side-kanban)。
    
-   已准备业务数据，详情请参见[数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/data-source/)。
    

## **添加**数字翻牌器

1.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
2.  在**工作台**页面的**数据看板**区域，鼠标悬停至目标看板，单击**编辑**，进入看板的画布编辑页面。
    
3.  在左侧导航栏的**组件库** > **信息**列表下，单击**数字翻牌器**组件，添加该组件至画布。
    

您也可[使用全局搜索](https://help.aliyun.com/zh/datav/global-search)添加相关组件。

## **接入业务数据**

添加组件后，您可将已准备的业务数据接入组件进行显示。单击数字翻牌器，在右侧的**数据源**页签，即可选择该组件所要呈现的数据。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p880770.png)

-   翻牌器接收的数据字段介绍如下。
    
    **字段**
    
    **描述**
    
    `name`
    
    （可选）数字翻牌器的标题内容。不为空时会覆盖样式中的配置；为空时会使用**样式** > **基础样式** > **标题内容**配置项中的内容。
    
    `value`
    
    数字翻牌器的具体数值。
    
    `prefix`
    
    （可选）数字翻牌器的前缀内容。不为空时会覆盖样式中的配置；为空时会使用**样式** > **翻牌器** > **前缀内容**配置项中的内容。
    
    `suffix`
    
    （可选）数字翻牌器的后缀内容。不为空时会覆盖样式中的配置；为空时会使用**样式** > **翻牌器** > **后缀内容**配置项中的内容。
    
    示例翻牌器的数据结构及效果展示如下。
    
    ```
    [
     {
     "name": "这是标题",
     "value": 232425
     }
    ]
    ```
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p881200.png)
    
-   数据源的核心配置项介绍如下。
    
    **配置项**
    
    **描述**
    
    **选择数据源**
    
    支持接入CSV文件、API、各类数据库等多种类型数据，详情请参见[支持的数据源类型](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-a-data-source/)。您可使用可视化表格或代码方式编辑数据字段。
    
    **配置过滤器（可选）**
    
    用于自定义过滤代码，实现数据的结构转换、筛选、展示和简单的计算，详情请参见[管理数据过滤器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/manage-filters-1)。
    
    **配置数据映射**
    
    用于将所选数据源中的字段映射至组件对应的字段上，实现数据的实时匹配。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9633269661/p524955.png)图标可配置字段样式。
    
    **查看响应结果**
    
    用于实时展示组件所接入的数据。当组件数据源发生变化时，此处会对应展示最新数据。
    
    -   单击数据响应结果，可查看编写的数据字段代码。
        
    -   单击查看示例，可查看数据源接收的数组类型及代码示例。您可参考示例编写相关字段。
        
    
    其他数据请求配置：
    
    -   **禁止加载态**：勾选后，在组件更新或预览数据看板时，将不呈现组件初始化时的加载内容。
        
    -   **受控模式**：勾选后，组件在初始化状态下不会请求数据。此时仅支持通过蓝图编辑器或全局变量事件发起数据请求。
        
    -   **自动更新请求**：勾选后，平台会根据您设置的轮询时间，动态轮询更新数据；不勾选，则需手动刷新页面，或通过蓝图编辑器和全局变量事件来触发请求更新数据。
        
    

## **配置**数字翻牌器

### **样式配置**

数字翻牌器的样式分为基础配置和全量配置两个维度（在样式页签顶部即可切换），基础配置仅涉及图表的颜色及文字配置；全量配置涉及的配置项更加全面。本文以全量配置示例，介绍相关配置详情。

**说明**

-   您也可单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879258.png)图标，通过关键词搜索，快速定位到所需配置项，搜索支持模糊匹配。详情请参见[搜索配置项](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。
    
-   翻牌器的标题、前后缀内容也可在数据源中获取。平台会优先使用数据源中的配置内容，若数据源中相关内容为空，则会采用样式中的配置内容。
    

相关配置项介绍如下。

**配置项**

**描述**

**图示**

**全局配置**

定义组件在数据看板中的位置分布、透明程度、交互穿透。

-   **不透明度**：数值越小，组件越透明。取值范围为`0~1`内的数值。
    
-   **交互穿透**：开启后，鼠标可穿透该组件，避免看板中组件较多时，该组件会遮挡鼠标与下层组件的交互。
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2907643371/p879251.png)

**基础样式配置**

定义标题文本的大小、颜色、阴影效果、标题与翻牌器的相对位置和间距，以及翻牌器的字号自适应效果。同时，支持自定义组件初始化及出现异常字符时的显示内容。

-   **字号自适应**：开启后，手动设置的翻牌器宽度、高度、间距等将不生效。平台会根据您配置的翻牌器字号大小重新计算并适配翻牌器的宽度、高度、间距等样式。
    
-   **初始化字符**：组件初始化时，翻牌器显示的数值内容（即数据源中`value`的值）。
    
-   **异常字符**：当组件数据源中的`value`值不为`Number`类型时，平台会将该值视为异常字符。此时，翻牌器显示的数值内容将会被替换为**异常字符**参数的配置值。
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879277.png)

**翻牌器配置**

定义翻牌器内容（包括数字、前后缀）的整体布局、数字的样式和布局、以及前后缀的字体样式和阴影效果。

数字配置说明如下：

-   **字体**：仅支持使用系统已安装的字体。更多字体介绍，请参见[字体库](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/font-library)。
    
-   **布局**：可设置数字的间隔、宽度、高度，以及分隔符的宽度。
    
    -   数字的间隔、高度、宽度为**0**时，表示系统自适应。
        
    -   开启**分隔符定宽**，将使用系统默认的特定宽度分隔符来分隔数据，从而使数据区域的界限更明确，展示效果更清晰。
        
-   **背景**：翻牌器的数值及分隔符可设置背景、边框样式，且支持上传本地图片作为背景。
    
    **说明**
    
    当数字的颜色设置为渐变色时，数字的背景将会失效。
    
-   **位数**：可设置翻牌器显示几位数字（包含小数点位数），平台将根据您的配置自动添加分隔符及小数点。
    
    -   位数为**0**时，表示系统自适应。
        
    -   开启数据四舍五入，数值直接四舍五入为整数进行显示；关闭则使用原始数值进行显示。
        
    
    **说明**
    
    若配置的位数小于实际数据长度，则头部超出部分会被省略。反之，会在数值头部补**0**。
    
-   **分隔符**：支持设置千分位分隔符及小数分隔符。
    
    **说明**
    
    分隔符最长为一位，超出一位时取第一位，且不支持使用数字作为分隔符。
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2907643371/p880865.png)

**交互配置**

设置翻牌器的动画效果（例如，动画时长、数据抖动修正）和手势光标。

-   **数据抖动修正**：开启后，保护翻牌器数据不下跌，即只能显示上涨；关闭则翻牌器数据跌涨都会显示。
    
-   **手势光标**：开启后，预览看板时，鼠标悬停至翻牌器组件时将显示为手势光标。
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p881037.png)

### **高级配置**

可定义翻牌器与其他组件间的交互，以及数据传递关系。相关配置项介绍如下。

**配置项**

**描述**

**图示**

**交互事件**

定义与其他组件间的[交互行为](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)，实现组件联动。例如，可通过翻牌器接入当前地区多个店铺的销售数据表格。当店铺销售数据发生变化，翻牌器将实时显示当前地区的日总销售金额情况。

单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879478.png)图标，即可定义相关交互事件及交互动作。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p881135.png)

**关联全局变量**

可在组件中关联全局参数，实现组件间的参数传递，进行组件交互。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879477.png)图标，即可开启相应指令，并为该指令关联所需[全局变量](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-global-variables)。

### **蓝图交互**

可通过[蓝图编辑器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/what-is-blueprint-editor-1)使用可视化连线方式，定义组件间的交互关系及行为逻辑。

#### **操作步骤**

1.  在画布编辑页面，单击顶部菜单栏左侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879479.png)图标，进入蓝图编辑器。
    
2.  在图层节点列表，鼠标悬停至数字翻牌器组件，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2907643371/p879480.png)图标，添加该组件至主画布。
    
3.  通过连线方式，按需配置相关组件的蓝图交互效果。
    
    示例如下。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2907643371/p881162.png)
    

#### **配置项介绍**

相关交互事件及动作的介绍如下。

**类别**

**子类别**

**描述**

**事件**

**当数据更新时**

当组件数据更新时抛出该事件。

**当数据请求状态变化时**

当数据请求状态变化时抛出该事件。状态值包括Loading、Success、Error。

**当前值变化时**

当前数值发生变化时抛出该事件，同时抛出该值对应的数据项，数据示例如下。

```
{
  "value": "23"
}
```

**当点击翻牌器时**

当单击翻牌器时抛出的事件，同时抛出对应的数据项，数据示例如下。

```
{
  "value": "23"
}
```

**事件**

**导入数据**

数据按组件绘制格式处理后导入组件，并重新绘制。无需重新请求服务端数据，数据示例如下。

```
[
  {
    "name": "第三季度营业额",
    "value": 283699,
    "prefix": "¥",
    "suffix": "元"
  }
]
```

**请求数据**

重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如，数字翻牌器配置的API数据源为`https://api.test`，传到**请求数据**动作的数据为`{ id: '1'}`，则最终请求接口为`https://api.test?id=1`。

**清零当前值**

把当前数字置为零，无需参数。

**移动**

将组件移动到指定位置，数据示例如下。

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

数字翻牌器的使用示例，请参见[实现动态数据加和](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/example-of-using-global-variables#02fcfce025ic4)。