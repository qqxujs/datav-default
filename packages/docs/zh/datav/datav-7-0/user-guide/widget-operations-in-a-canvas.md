 

本文介绍组件在画布编辑器中的操作方法，包括组件拖拽、缩放、旋转、操作快捷键等基础功能，以及批量配置、使用轮播容器等高级功能，帮助您更方便快捷地在数据看板中操作组件。

## **前提条件**

已创建数据看板，支持[使用模板创建](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)、[使用空白画布创建](https://help.aliyun.com/zh/datav/datav-7-0/getting-started/use-a-canvas-to-create-a-dashboard#639c36877c6jr)、[使用AI智能生成](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-ai-to-intelligently-generate-pc-side-kanban)。

## **进入画布编辑器**

1.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
2.  在**工作台**页面的**数据看板**区域，鼠标悬停至目标看板，单击**编辑**，进入看板的画布编辑页面。
    
    在该页面，您可按需执行[基础操作](#e9ec0d20771zf)、[批量配置](#d06b95904dwys)、[成组操作](#d4672d304dge0)、[使用轮播容器](#d9d9ad604dx0n)等操作。
    

## **基础功能**

**操作**

**描述**

**拖拽**

在左侧**组件库**中选中一个或多个组件，按住鼠标左键进行拖拽。

-   选中一个组件：单击某个组件进行选中。
    
-   选中多个组件：按住键盘上的Ctrl键（苹果键盘使用Cmd键）后，单击多个组件进行选中。再次单击对应按键可以取消选中当前组件。
    
    **说明**
    
    您也可以在左侧的**图层**列表中，使用同样的方法选中一个或多个组件。
    

**缩放**

单选或者多选组件后，将鼠标移动到组件的边界框线附近。出现缩放图标后，按住鼠标左键拖拽。

**旋转**

选择一个或多个组件，将鼠标移动到组件的上边界附近的白点处。出现旋转图标后，按住鼠标左键对组件进行旋转。

**组件锁定**

详情请参见[图层管理](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/layer-management-of-canvas-editor-in-pc-of-datav-7)。

**组件图层位置移动**

在数据看板画布或者图层栏中，右键单击某个组件。在弹出的菜单中，进行**置顶**、**置底**、**上移一层**、**下移一层**等操作。

**生成迭代器**

详情请参见[图层管理](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/layer-management-of-canvas-editor-in-pc-of-datav-7)。

**进入蓝图编辑器**

进入蓝图编辑器并直接定位到当前组件节点，通过低代码的编辑实现较为复杂的交互效果。

**组件隐藏**

详情请参见[图层管理](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/layer-management-of-canvas-editor-in-pc-of-datav-7)。

**组件重命名**

详情请参见[图层管理](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/layer-management-of-canvas-editor-in-pc-of-datav-7)。

**复制ID**

复制当前组件ID值，可以在画布编辑器和蓝图编辑器中快捷搜索。

**组件复制**

详情请参见[图层管理](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/layer-management-of-canvas-editor-in-pc-of-datav-7)。

**组件删除**

详情请参见[图层管理](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/layer-management-of-canvas-editor-in-pc-of-datav-7)。

**组件收藏**

详情请参见[图层管理](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/layer-management-of-canvas-editor-in-pc-of-datav-7)。

**缩略图**

DataV在画布左下角提供了缩略图功能，您可以使用此功能，调整组件在画布中的布局。

-   拉动缩略图下方的**比例尺**，或者单击**+**或**\-**调整画布的大小比例。
    
-   当组件超出画布大小时，可以拖动缩略图的高亮蓝色边框，定位到组件的位置。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7810082761/p532928.png)
    
-   单击画布左下角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5489979661/p517359.png)图标，可以选择关闭或开启缩略图。
    

**快捷键**

画布快捷键

-   选中：鼠标点击
    
-   多选：ctrl/cmd+鼠标点击
    
-   操作菜单：鼠标右键
    
-   全局搜索：ctrl/cmd+f
    

## **批量配置**

**操作**

**描述**

**批量配置**

选中多个组件后，在右侧面板可以做如下批量配置。

![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0130482471/p532832.jpg)

-   **序号1**：当选中任意组件时显示。
    
    -   **对齐方式**：设置多个组件的对齐方式，包括但不限于左对齐、居中对齐、右对齐、顶部对齐、水平对齐、底部对齐。
        
    -   **均分方式**：设置多个组件的均分方式，包括水平均分和竖直均分。
        
    -   **对象位置**：设置多个组件左上角顶点相对于画布的位置。
        
    -   **对象尺寸**：设置多个组件的宽度和高度值。
        
-   **序号2**：当所有选中的组件都支持快捷配置时显示。
    
    -   **图表颜色**：设置多个组件的图表颜色。
        
    -   **图表文字**：设置多个组件的图表文字的字体、字体粗细、字号和颜色。
        
    -   **图表复杂度**：设置多个组件的图表信息类型，包括简单、通用和详细。
        
-   **序号3**：即**统一样式**，当所有选中的组件类型相同且所有组件大版本号一致时才出现。例如，两个都是区间柱状图且均是5.x版本，即可批量设置。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7822750761/p532848.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7822750761/p532850.png)
    

## **成组操作**

**操作**

**描述**

**组操作**

-   **成组/解组**：详情请参见[图层管理](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/layer-management-of-canvas-editor-in-pc-of-datav-7)。
    
-   **搜索配置**：单击**样式**面板右上角的搜索配置项图标![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5013889661/p527384.png)，可在搜索配置面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索配置项](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。
    

-   **尺寸**：包括组件的宽度和高度，单位为px。
    
-   **定位**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
    
-   **旋转**：以组件的中心为中心点，进行旋转，单位为度（°）。
    
    -   手动输入角度值，控制组件的旋转角度。
        
    -   单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8222919661/p521797.png)图标，控制组件左右翻转样式。
        
    -   单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8222919661/p521798.png)图标，控制组件上下翻转样式。
        
-   **不透明度**：取值范围为0~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
    
-   **交互穿透**：开启后，鼠标可穿透该组件，避免看板中组件较多时，该组件会遮挡鼠标与下层组件的交互。
    
-   **对齐**：组件在编辑器中的对齐方式。
    

-   **背景**：设置组件成组后容器的背景颜色和背景图片，详情请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)。
    
-   **3D变换**：单击![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0856704961/p716380.png)图标，打开组的3D变换功能。
    
    -   **视距**：图表透视摄影中的视距设置。通过设置消失点的位置，设置不同的视距参数。
        
    -   **子层级变换配置**：包括批量配置和单独配置两种配置模式。选择不同的模式均可设置图表的旋转、缩放和平移参数。
        

**说明**

如需要轮播功能，可以单击**使用轮播容器**，具体操作请参见[使用轮播容器](#d9d9ad604dx0n)。

## **使用轮播容器**

轮播容器可将多个组件集中在一个固定区域内，通过滑动、翻转等多种动画效果动态切换展示。若您的屏幕空间有限，但需要展示大量数据或信息，可使用轮播容器。![1D1861C9-CD15-4A45-98D7-01DBEB261FE8](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8035993471/p932522.gif)

### **创建轮播容器**

[进入画布编辑器](#3d1a61b4d3rmv)，选中需要进行轮播的所有组件，右键单击任意组件，选择**使用轮播容器**，即可创建轮播容器。创建完成后，轮播容器中的所有组件将作为一个整体进行轮播展示。

**说明**

-   一个数据看板可创建多个轮播容器，但每个组件只能被添加至某一个轮播容器中。
    
-   若无需再使用轮播容器，则可右键单击轮播容器，选择**解除轮播容器**，解除后，该轮播容器中的组件将会恢复为独立状态。
    

### **配置轮播容器**

单击轮播容器，可在右侧面板配置其基础样式，以及交互事件和全局变量等高级配置。

-   **样式配置**
    
    在**样式**面板，可配置轮播容器的动画效果、背景颜色、轮播时长等信息，相关配置项介绍如下。
    
    **说明**
    
    您也可单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8035993471/p932667.png)图标，通过关键词搜索，快速定位到所需配置项，搜索支持模糊匹配。详情请参见[搜索配置项](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。
    
    **配置项**
    
    **描述**
    
    图示
    
    **全局配置**
    
    定义组件在数据看板中的位置分布、透明程度、交互穿透。
    
    -   **不透明度**：数值越小，组件越透明。取值范围为`0~1`内的数值。
        
    -   **交互穿透**：开启后，鼠标可穿透该组件，避免看板中组件较多时，该组件会遮挡鼠标与下层组件的交互。
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8035993471/p932697.png)
    
    **轮播样式配置**
    
    定义轮播的动画效果：
    
    -   **快速样式**：可快速切换轮播样式，支持滑动、淡入淡出、翻转等多种样式。
        
    -   **动效配置**：用于配置轮播样式、轮播容器中的组件排布（水平或垂直），以及轮播时长（单位为**ms**）。
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8035993471/p932725.png)
    
    **基础样式配置**
    
    定义轮播容器的背景、内外边距、可视数量、轮播数量、组件间距、轮播方向、居中效果及阴影效果。主要说明如下：
    
    -   **背景**：支持更换背景[颜色](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#section-kdw-vj4-t2b)，也可上传本地图片作为背景。
        
    -   **内外边距**：设置轮播容器中当前展示的组件距离上下左右四个边框的距离。
        
    -   **可视数量**：轮播容器中同一时间可见的组件数量。
        
        **说明**
        
        仅当轮播样式配置为**滑动**、**橱窗**时生效。
        
    -   **轮播数量**：每次轮播的组件数量。
        
        **说明**
        
        通常在**可视数量**大于1时使用，且仅当轮播样式配置为**滑动**、**橱窗**时生效。
        
    -   **间距**：轮播容器中，两个组件之间的距离。
        
        **说明**
        
        仅当轮播样式配置为**滑动**、**橱窗**时生效。
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8035993471/p932732.png)
    
    **自动播放及视差**
    
    定义自动播放的展示及视差效果：
    
    -   **延迟**：用于设置自动播放时，两个过渡动效之间的间隔时长（可认为是一个组件的展示时长），单位为**ms**。
        
    -   **鼠标悬停暂停**：开启后，当鼠标悬停至轮播容器时，自动播放将暂停。
        
    -   **视差**：用于配置轮播容器中组件的透明程度，以及组件相较于轮播容器的缩放比例。
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8035993471/p932796.png)
    
    **其他**
    
    单击相应按钮，即可快速执行轮播容器的启动、暂停或取消（即解除轮播容器）。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8035993471/p932815.png)
    
-   **高级配置**
    
    在**高级**面板，可定义轮播容器与其他组件间的交互及数据传递关系，相关配置项介绍如下。
    
    **配置项**
    
    **描述**
    
    **图示**
    
    **交互事件**
    
    定义与其他组件、全局变量、工具节点（例如，Websocket节点）的[交互配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)，实现不同对象间的联动。单击**添加下游交互动作**，即可定义相关交互动作。同时，支持配置执行该动作所需触发的判断条件。
    
    您也可单击**智能生成**，使用自然语言描述交互需求，通过AI协助生成交互事件。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8380670571/p977006.png)
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8380670571/p976696.png)
    
    **全局变量**
    
    可在轮播容器中关联全局参数，实现组件间的参数传递，进行组件交互。
    
    单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8035993471/p932637.png)图标，即可开启相应指令，并为该指令关联所需[全局变量](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-global-variables)。当**轮播到某一页时**，会抛出临时变量，默认抛出轮播容器的`index`字段值。