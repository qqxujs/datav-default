<!DOCTYPE html> 

本文介绍进度条表格的使用指南。

## 组件概述

进度条表格由进度条和表格两部分组成，表格的每一行可代表一个任务，而每一列则展示不同的属性（例如，任务名称、进度、截止日期等）。在表格中，任务的执行情况可通过进度条的长度、百分比和颜色等方式进行直观地表示，以便帮助您清晰地对比和了解每个任务的当前状态。此外，平台支持自定义表格的行列内容及样式，允许配置超链接及轮播动画，同时支持配置针对行维度的相关操作（例如，编辑、删除等），并提供条件过滤功能以便选中指定行或单元格。

### 使用场景

如需快速了解一个或多个任务在不同指标下的执行情况或运行状态，可使用进度条表格。例如，工作进度汇报，可使用该组件呈现多个员工的工作进度情况。

### **效果展示**

示例：组件轮播展示，第一行配置超链接，并且通过条件控制选中“杭州”单元格。

![D69A1F86-3D2B-4E6E-921D-BB371D2CBE3E](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0307779371/p915364.gif)

## **前提条件**

* 已创建数据看板，支持[使用模板创建](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)、[使用空白画布创建](https://help.aliyun.com/zh/datav/datav-7-0/getting-started/use-a-canvas-to-create-a-dashboard#639c36877c6jr)、[使用AI智能生成](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-ai-to-intelligently-generate-pc-side-kanban)。
* 已准备业务数据，详情请参见[数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/data-source/)。

## **添加**进度条表格

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面的**数据看板**区域，鼠标悬停至目标看板，单击**编辑**，进入看板的画布编辑页面。
3. 在左侧导航栏的**组件库** \> **表格**列表下，单击**进度条表格**组件，添加该组件至画布。

您也可[使用全局搜索](https://help.aliyun.com/zh/datav/global-search)添加相关组件。

## **接入业务数据**

添加组件后，您可将已准备的业务数据接入组件进行显示。单击进度条表格，在右侧的**数据源**页签，即可选择该组件所要呈现的数据。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0307779371/p913966.png)

* 进度条表格接收的数据字段介绍如下。

| **字段**    | **说明**                                                           |
| ---- | ---- |
| **自定义参数** | 表格的内容，可自定义多个字段值，需要与**样式** \> **表格列** \> **列配置** \> **列字段名**匹配使用。 |  
示例进度条表格的数据结构如下。  
```  
[  
  {  
    "id": 1,  
    "value": "https://img.alicdn.com/imgextra/i3/O1CN01WlrRFN1NsIPslloOW_!!6000000001625-2-tps-180-108.png",  
    "sales": 23,  
    "proportion": 20,  
    "city": "北京",  
  },  
  {  
    "id": 2,  
    "value": "https://img.alicdn.com/imgextra/i2/O1CN01Sh9r2s1FAJSLux0h0_!!6000000000446-2-tps-180-108.png",  
    "sales": -34,  
    "proportion": 45,  
    "city": "上海"  
  },  
  {  
    "id": 3,  
    "value": "https://img.alicdn.com/imgextra/i3/O1CN01vyRtik1JCq6bvTVwd_!!6000000000993-2-tps-180-108.png",  
    "sales": 24,  
    "proportion": 80,  
    "city": "杭州"  
  },  
  {  
    "id": 4,  
    "value": "https://img.alicdn.com/imgextra/i3/O1CN01WlrRFN1NsIPslloOW_!!6000000001625-2-tps-180-108.png",  
    "sales": 80,  
    "proportion": 20,  
    "city": "深圳"  
  },  
  {  
    "id": 5,  
    "value": "https://img.alicdn.com/imgextra/i3/O1CN01vyRtik1JCq6bvTVwd_!!6000000000993-2-tps-180-108.png",  
    "sales": -31,  
    "proportion": 45,  
    "city": "合肥"  
  },  
  {  
    "id": 6,  
    "value": "https://img.alicdn.com/imgextra/i3/O1CN01WlrRFN1NsIPslloOW_!!6000000001625-2-tps-180-108.png",  
    "sales": 55,  
    "proportion": 80,  
    "city": "成都"  
  }  
]  
```
* 数据源的核心配置项介绍如下。

| **配置项**       | **描述**                                                                                                                                                                                                                                                                                       |
| ---- | ---- |
| **选择数据源**     | 支持接入CSV文件、API、各类数据库等多种类型数据，详情请参见[支持的数据源类型](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-a-data-source/)。您可使用可视化表格或代码方式编辑数据字段。                                                                                                                                                   |
| **配置过滤器（可选）** | 用于自定义过滤代码，实现数据的结构转换、筛选、展示和简单的计算，详情请参见[管理数据过滤器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/manage-filters-1)。                                                                                                                                                                      |
| **配置数据映射**    | 用于将所选数据源中的字段映射至组件对应的字段上，实现数据的实时匹配。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9633269661/p524955.png)图标可配置字段样式。                                                                                                                                                  |
| **查看响应结果**    | 用于实时展示组件所接入的数据。当组件数据源发生变化时，此处会对应展示最新数据。单击数据响应结果，可查看编写的数据字段代码。单击查看示例，可查看数据源接收的数组类型及代码示例。您可参考示例编写相关字段。其他数据请求配置：**禁止加载态**：勾选后，在组件更新或预览数据看板时，将不呈现组件初始化时的加载内容。**受控模式**：勾选后，组件在初始化状态下不会请求数据。此时仅支持通过蓝图编辑器或全局变量事件发起数据请求。**自动更新请求**：勾选后，平台会根据您设置的轮询时间，动态轮询更新数据；不勾选，则需手动刷新页面，或通过蓝图编辑器和全局变量事件来触发请求更新数据。 |

## **配置**进度条表格

单击进度条表格组件，即可在右侧面板配置组件的基础样式、全局变量和交互事件等高级配置，以及蓝图交互配置。

### **样式配置**

在**样式**面板，可配置进度条表格的表格详情、文本字体、背景颜色、轮播动画等样式，相关配置项介绍如下。

**说明** 

您也可单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879258.png)图标，通过关键词搜索，快速定位到所需配置项，搜索支持模糊匹配。详情请参见[搜索配置项](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。

| **配置项**   | **描述**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | **图示**                                                                                        |
| ---- | ---- | ---- |
| **全局配置**  | 定义组件在数据看板中的位置分布、透明程度、交互穿透。**不透明度**：数值越小，组件越透明。取值范围为0\~1内的数值。**交互穿透**：开启后，鼠标可穿透该组件，避免看板中组件较多时，该组件会遮挡鼠标与下层组件的交互。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0307779371/p913993.png) |
| **表格配置**  | 定义进度条表格的轮播效果、表格内容及表头样式、悬浮样式，以及序号列样式。**轮播**：开启后，进度条表格才会以动画样式进行轮播，可设置轮播间隔时间、轮播模式等。支持设置全屏滚动和逐条滚动模式，全屏滚动是以当前页面为单位进行轮播，类似翻页效果。**每页行数**：进度条表格每页显示的行数。**表格内容样式**：支持设置进度条表格的文本、背景、边框、单元格内边距等样式。主要说明如下：文本样式：设置文本的字体、颜色、字号大小、粗细等。基础样式：设置表格整体的背景颜色、行高、内容的对齐方式，以及是否开启斑马线。开启斑马线后，奇数行背景色与表格背景色相同，偶数行的背景色可按需设置。**说明** 此处的对齐方式为进度条表格全局文本的对齐方式，如需单独设置某列的对齐方式，可在**表格列**配置项中设置。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0307779371/p914349.png)空数据样式：当表格内存在空数据时，此处可自定义空数据的显示样式。默认显示样式为蓝色背景，文案为**暂无数据**。溢出文本：定义溢出文本是否滚动显示，支持自定义滚动速率或滚动时长。若不开启滚动，则溢出文本将被截断，无法显示。**表头**：开启后，将为进度条表格添加表头，可设置表头的内容对齐方式、文本样式、排序选中样式、边框样式、背景[颜色](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)、行高等。关闭后，表格将没有表头。**说明** **排序选中样式**指在预览和发布进度条表格组件时，单击表头某列的排序按钮时显示的颜色。 仅当**表格列配置**中，相应列开启**排序**功能，当前参数才会生效。**悬浮高亮**：设置在预览或发布状态下，鼠标悬浮至进度条表格的指定行，相应行的文本内容是否高亮呈现。可设置如下高亮样式：文本的字体、粗细、大小、颜色等样式。行背景颜色、阴影偏移程度及阴影颜色。**序号列**：开启后，将在进度条表格的最左侧生成一个序号列，可按需进行如下配置。通用配置：支持配置列名称、列宽、该列的文本字体、颜色、字号、背景等样式。特色项：如您需设置序号列的前N行呈现特殊内容（例如，图片），可开启该配置。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0307779371/p914495.png)**自定义字段**：此处的配置内容需要与数据源中对应的图片字段一致，该参数才会生效。例如，数据源中配置imgSrc: 'https://xxxx.png'，此处配置为**imgSrc**。**自定义图片**：使用自定义图片，请按需上传对应行所需的图片链接。如要获取动态图片，需在数据源中配置图片相关字段。**说明** 数据源中的自定义图片字段内容，优先级高于此处配置的图片内容。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528933.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528934.png)图标，添加或删除一个图片数据。 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528936.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528937.png)图标配置多个图片数据的排列样式。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528938.png)图标，可复制当前选中的图片数据。 | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0307779371/p914018.png) |
| **翻页器配置** | 翻页器![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0307779371/p914652.png)，通常位于进度条表格下方，用于进行手动翻页，此处可设置翻页器的大小、显示页数、文字内容、边距等样式。翻页器显隐设置：**翻页器隐藏**：开启后，将隐藏翻页器。**单页隐藏**：开启后，若进度条表格只有一页内容，则翻页器将隐藏。通用设置：设置翻页器的大小、位置及显示样式。页码样式设置：**页码数量**：定义当页数较多时，翻页器显示的页码数量。中间页数将使用省略号...代替。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0307779371/p914669.png)**输入框**：开启后，当页码较多时，可通过输入指定页数快速跳转至该页。**页码样式**：定义不同状态下的页码文字及背景颜色。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0307779371/p914887.png)**自定义文字**：定义翻页器上一页、下一页的显示文本。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0307779371/p914022.png) |
| **表格列配置** | 定义进度条表格的列内容及样式。该配置项为一个数组，可配置多个列（序号列除外），编辑器会遍历数据，使数据通过自定义列的配置循环渲染。此处列的先后顺序即为进度条表格中列的展示顺序，您可按需调整相应顺序。**列样式**：支持定义列的字段名称、显示名称、列宽、是否可排序等样式。**列字段名**：需要来源于数据源中的字段名称。配置后，进度条表格中该列才会获取数据源相应字段的内容进行显示。**列显示名**：作为该列的表头内容显示。**列宽**：当值为**0**时，列宽将自适应。若内容宽度超出列宽的设置数值，为保证内容准确展示，可使用该宽度。**排序**：开启后，可对当前列的数据按升降序排列。当列数据为进度条时，不支持排序。**文本样式**：可设置文本的字体、大小、颜色等。**说明** 当**数据类型**为**图片**时，不涉及配置该参数。**对齐方式**：可设置当前列内容的对齐方式。**数据类型**：可指定列数据的类型及显示样式。不同类型涉及的配置项存在差异，具体请以实际界面为准。数值型：可设置数值的[精度](https://github.com/d3/d3-format/blob/v3.1.0/README.md#format)。类目型：用于表示有限数量的类别或分类。例如，城市（北京、上海等）。时间型：可选择多种格式，通常为YYYY/MM/DD HH:mm:ss。图片：可设置图片的宽度、高度及圆角样式。趋势图：用于直观查看某指标的趋势。可设置趋势图标、不同趋势的颜色、指标显示样式等。指标设置：设置基础值及数值后缀（例如，%）。**基础值**表示以此数值作为基础，来计算图表走势，默认为**0**。基础值建议优先使用数据中的初始值。千分位：千分位分隔符。分隔符最长为一位，超出一位时取第一位，不能将数字作为分隔符。显示：控制是否需要显示不合规的数据类型。开启后，即使数据不符合趋势图支持的数据类型，该数据也会显示在进度条表格中。进度图：可选择条形图或环形图展示，通常数据为**Number**类型。可设置数值的精度、后缀、颜色、字体等样式。**其他操作**：单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528933.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528934.png)图标，可添加或删除一列；单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528936.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528937.png)图标，可更改自定义列配置区域的排列样式；单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528938.png)图标，可复制当前选中列。                                                                                                                                                                                                                                                                                                                                                                                                                                         | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0307779371/p914029.png) |
| **高级配置**  | 定义进度条表格中是否增加选择列、操作列、超链接、虚拟滚动等。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0307779371/p914869.png)**选择列**：开启后，将在进度条表格最左侧添加一列选择列，用户可按需勾选指定行，执行进一步操作。默认选中：可设置默认选中的行，多个行使用英文逗号,分隔。该配置项匹配的是数据源中的**id**字段，需输入**id**对应的**value**值进行触发。**说明** 若数据源无**id**字段或**id**字段内容为空，该配置项则无效。相关样式：可配置按钮的尺寸、背景颜色，以及选中状态下对钩（√）的颜色及大小。**操作列**：开启后，将在进度条表格最右侧添加一列操作列，用户可按需配置相应样式及操作类型（例如，编辑、删除）。列样式：可设置列显示名称、列宽，以及常规状态及悬停状态下文本和按钮的大小、颜色等样式。列操作：可按需定义所要执行的操作类型，支持显示为按钮或文本。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528933.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528934.png)图标，可添加或删除一项操作；单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528936.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528937.png)图标，可更改配置区域多个操作的排列样式；单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528938.png)图标，可复制当前选中的操作项。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0307779371/p914900.png)**超链接配置**：开启后，进度条表格数据源中配置的超链接才会生效。超链接字段名：此处配置的名称，需与**数据源**面板中设置的超链接字段一致（例如，link）。表格某行设置超链接后，单击该行的任意位置，即可跳转到相应链接。数据源中的代码示例如下。{   "link": "https://www.aliyun.com/" }新窗口中打开：开启后，在预览或发布页单击相应超链接，将在浏览器新开一个窗口呈现跳转链接内容；若未开启，则在当前页面呈现链接内容。**虚拟滚动**：开启后，可通过鼠标滚动查看进度条表格内容。可设置滚动的区域高度及边框样式。使用该功能时，请确保数据**id**值唯一。**说明** 仅当**轮播**功能关闭时，可配置该参数。                                                                                                                                                                                                                                                                                                                                                                                                                                             | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0307779371/p914031.png) |
| **条件配置**  | 可通过条件控制，在进度条表格中选中符合条件的指定单元格或行，并以所配置的样式呈现。主要说明如下：**条件名称**：配置所要执行的条件内容。例如，筛选出**city**字段等于杭州的单元格。更多条件样式配置详情，请参见[条件树使用说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/conditional-tree-instructions)。**选定范围**：定义当满足所配置的条件后，将选中指定单元格或选中整行。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0307779371/p915052.png)当**选定范围**配置为单元格时，若开启**自定义显示列**，将渲染自定义列所在的单元格。**列显示名称**需要来源于数据源中的字段。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0307779371/p915076.png)**数据类型**：可选择**进度图**或**趋势图**。选择不同类型后，可按照界面指引配置相应类型的颜色、字体等样式。**其他操作**：单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528933.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528934.png)图标，添加或删除一个条件样式。 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528936.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528937.png)图标，可配置多个条件的排列样式。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1161599661/p528938.png)图标，可复制当前选中的条件样式。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0307779371/p914033.png) |

### **高级配置**

可定义进度条表格与其他组件间的交互，以及数据传递关系。相关配置项介绍如下。

| **配置项**    | **描述**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | **图示**                                                                                        |
| ---- | ---- | ---- |
| **交互事件**   | 定义与其他组件间的[交互行为](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)，实现组件联动。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879478.png)图标，即可定义相关交互事件及交互动作。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0307779371/p915213.png) |
| **关联全局变量** | 可在组件中关联全局参数，实现组件间的参数传递，进行组件交互。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879477.png)图标，即可开启相应指令，并为该指令关联所需[全局变量](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-global-variables)。**当点击单行时**：单击进度条表格某一行时抛出的临时变量，默认抛出数据中的id、value、sales、proportion和city字段。**说明** 该字段为默认的示例字段，具体字段名称请以您的数据为准。**当点击分页时**：单击进度条表格的分页按钮进行分页时，抛出的临时变量，默认抛出数据中自定义的current字段。**当点击排序时**：单击进度条表格的排序按钮时，抛出的临时变量，默认抛出数据中自定义的columnName和order字段。**当点击多选时**：当勾选进度条表格的多个行时，抛出的临时变量，默认抛出数据中自定义的id、value、sales、proportion和city字段。**当点击操作项时**：单击进度条表格的操作列时，抛出的临时变量，默认抛出数据中自定义的operateType和dataItem字段。配置详情请参见[组件交互配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)。 |                                                                                               |

### **蓝图交互**

可通过[蓝图编辑器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/what-is-blueprint-editor-1)使用可视化连线方式，定义组件间的交互关系及行为逻辑。

#### **操作步骤**

1. 在画布编辑页面，单击顶部菜单栏左侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1907643371/p879479.png)图标，进入蓝图编辑器。
2. 在图层节点列表，鼠标悬停至进度条表格组件，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2907643371/p879480.png)图标，添加该组件至主画布。
3. 通过连线方式，按需配置相关组件的蓝图交互效果。  
示例如下。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0307779371/p915413.png)

#### **配置项介绍**

相关交互事件及动作的介绍如下。

**说明** 

您也可在蓝图配置界面右侧，单击相应事件或动作后的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0734883371/p884551.png)图标，查看相关参数详细介绍。

| **类别**              | **子类别**                                                                                                                                                                                                                                                                                                                           | **描述**                              |
| ---- | ---- | ---- |
| **事件**              | **当数据更新时**                                                                                                                                                                                                                                                                                                                        | 当组件数据更新时抛出该事件。                      |
| **当数据请求状态变化时**      | 当数据请求状态变化时抛出该事件。状态值包括Void、Loading、Success、Error。                                                                                                                                                                                                                                                                                  |                                     |
| **当点击单行时**          | 当单击进度条表格的某一行时抛出当前行的数据，内容随数据响应结果进行变化，数据示例如下。{   "id": 1,   "value": 1,   "sales": 1,   "proportion": 1,   "city": "北京" }                                                                                                                                                                                                           |                                     |
| **当点击分页时**          | 当单击进度条表格的某个分页时抛出当前页的数据，数据示例如下。{   "current": 1  //翻页器中显示的分页数字。 }                                                                                                                                                                                                                                                                  |                                     |
| **当点击排序时**          | 当单击进度条表格某个字段的排序按钮时，抛出当前排序数据，数据示例如下。{   "columnName": "id",  //排序的字段。   "order": "desc"  //排序的顺序，desc表示降序，asc表示升序。 }                                                                                                                                                                                                               |                                     |
| **当点击多选时**          | 当勾选进度条表格的多行数据时，组件内容随数据响应结果进行变化，数据示例如下。{   "id": 1,   "value": 1,   "sales": 1,   "proportion": 1,   "city": "北京" }                                                                                                                                                                                                                |                                     |
| **当点击操作项时**         | 当单击进度条表格操作列的某个操作项时，抛出当前操作项数据，数据示例如下。**说明** operateType字段值与**样式** \> **高级配置** \> **操作列** \> **列配置**的内容相对应。{   "operateType": "edit",    "dataItem":      {   "id": 1,   "value": 1,   "sales": 1,   "proportion": 1,   "city": "北京"   } }                                                                                          |                                     |
| **动作**              | **导入数据**                                                                                                                                                                                                                                                                                                                          | 按组件绘制格式处理数据后，导入组件，重新绘制。无需重新请求服务端数据。 |
| **请求数据**            | 重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如，进度条表格配置的API数据源为https://api.test，传到**请求数据**动作的数据为{ id: '1'}，则最终请求为https://api.test?id=1。                                                                                                                                                                                                      |                                     |
| **跳转至**             | 使组件页面跳转至某一页，默认从**0**开始跳转。数据示例如下。 {   "current":3       //表示跳转至第4页。 }                                                                                                                                                                                                                                                              |                                     |
| **高亮表格行**           | 设置表格行哪些数据需要高亮呈现，以及设置相应的高亮样式，数据示例如下。 {   "data": {   //需要高亮的数据。     id:3,               name:'张三'    },   "style": {  //高亮数据的样式。     color:'#ff0',        background:'#f00'   } }                                                                                                                                                  |                                     |
| **取消行高亮**           | 取消表格行的高亮效果。                                                                                                                                                                                                                                                                                                                       |                                     |
| **清空高亮**            | 清空组件所有高亮效果，无需参数。                                                                                                                                                                                                                                                                                                                  |                                     |
| **打开选择列**和**关闭选择列** | 打开或关闭进度条表格的选择列时所对应的数据内容，无需参数。                                                                                                                                                                                                                                                                                                     |                                     |
| **打开操作列**和**关闭操作列** | 打开或关闭进度条表格的操作列时所对应的数据内容，无需参数。                                                                                                                                                                                                                                                                                                     |                                     |
| **设置选中值**           | 设置选中列的参数内容，使用数据源中id字段对应的**value**值进行触发，数据示例如下。{   "value": 3  //表示选中id=3的行。 }                                                                                                                                                                                                                                                     |                                     |
| **移动**              | 将组件移动到指定位置，数据示例如下。{    // 移动方式。绝对定位：to，相对定位：by。默认值：to。     "positionType": "to",   // 指定位置。x坐标，y坐标。   "attr": {    "x": 0,    "y": 0    },   // 动画方式。   "animation": {     "enable": false,     // 动画延时。    "animationDuration": 1000,     // 动画曲线。可选值为：linear\|easeInOutQuad|easeInOutExpo。    "animationEasing": "linear"   } } |                                     |
| **切换显隐**            | 切换组件为显示或隐藏，数据示例如下。{   "animationType": "fade",   "animationDuration": 1000,   "animationEasing": "linear" }animationType：动画方式。可配置为appear（出现/消失）、fade（渐隐渐现）、slideToUp（飞入/飞出），不配置表示无动画。animationDuration：动画延时，默认为1000ms。animationEasing：动画曲线。可配置为linear（匀速）、easeInOutQuad（平滑）、easeInOutExpo（慢快慢）。                                   |                                     |
| **显示**              |                                                                                                                                                                                                                                                                                                                                   |                                     |
| **隐藏**              |                                                                                                                                                                                                                                                                                                                                   |                                     |
| **更新组件配置**          | 动态更新组件的样式配置。先在组件的**样式**面板中，单击**复制配置到剪贴板**，获取组件的配置数据。根据需要，在蓝图编辑器配置页面的数据处理节点，更改对应样式的字段值。                                                                                                                                                                                                                                            |                                     |