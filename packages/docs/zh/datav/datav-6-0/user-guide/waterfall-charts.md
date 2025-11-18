  瀑布图组件配置项说明-DataV数据可视化-阿里云

本文介绍瀑布图的图表样式和配置面板的功能。

**重要**

在画布编辑器中添加BI分析组件时，图层栏内会自动在当前BI组件上方对应生成一个分析器，且需要提前创建数据集以供BI分析组件选择并配置使用，创建数据集和分析器交互使用说明详情，请参见[添加数据集](https://help.aliyun.com/document_detail/215456.html#task-2060897)和[BI分析器交互使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/bi-analyzer-interaction-instructions#concept-2114138)。

## **图表样式**

瀑布图是柱状图的一种，支持自定义x轴和y轴、多类目数据差值配置以及瀑布式的数据升降展示，可以在较小的可视化应用空间内，智能地展示数据总计上升或者下降的差异。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4896536761/p561464.png)

## 配置面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4896536761/p561465.png)

-   **搜索配置**：单击**配置**面板右上角的**搜索配置**，可在**搜索配置**面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索资产配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/search-for-configurations#task-2376842)。
-   **图表尺寸**：包括组件的宽度和高度，单位为px。可单击![锁定长宽比按键](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53660.png)图标锁定组件的宽高比，等比例修改组件的宽高。再次单击进行解锁，解锁后宽高比不受限制。
-   **图表位置**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
-   **旋转角度**：以组件的中心为中心点，进行旋转，单位为度（°）。
    -   手动输入角度值，控制组件的旋转角度。
    -   拖动![圆圈旋转控制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53668.png)图标内的黑点，控制组件的旋转角度。
    -   单击![左右翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0429559951/p53669.png)图标，控制组件左右翻转样式。
    -   单击![上下翻转图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1429559951/p53670.png)图标，控制组件上下翻转样式。
-   **不透明度**：取值范围为0~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
-   **图形**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4896536761/p561466.png)
    
    **参数**
    
    **说明**
    
    **图表边距**
    
    单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标，控制图表边距的显隐。打开开关后，可配置瀑布柱图区域与组件上下左右四个边界之间的距离，单位默认px。
    
    **柱子宽度**
    
    柱子的宽度值，单位px。单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标，控制柱子宽度的显隐。
    
    **增加**
    
    类目数据为正数显示上升趋势的柱子的标题和颜色，颜色请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#concept-lsz-bc4-t2b/section-kdw-vj4-t2b)。单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标，控制增加配置项的显隐。
    
    **减少**
    
    类目数据为负数数显示下降趋势的柱子的标题和颜色，颜色请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#concept-lsz-bc4-t2b/section-kdw-vj4-t2b)。单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标，控制减少配置项的显隐。
    
    **总计**
    
    所有类目数据合计后的柱子的标题和颜色，颜色请参见[颜色选择器说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description#concept-lsz-bc4-t2b/section-kdw-vj4-t2b)。单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标，控制总计配置项的显隐。
    
    **牵引线**
    
    柱图之间的牵引线样式，包括线的形状、线的粗细和线的颜色，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制X轴轴线样式的显隐。
    
    **说明**
    
    当线的类型选择**虚线**或**点线**时，还可以配置线的间断长度值和每一个间断线之间的距离。
    
    **柱子标注**
    
    柱子的标注样式，单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标，控制柱子标注配置项的显隐。
    
    -   **标注字段**：标注的内容需要和数据面板中字段的内容对应，默认获取y字段内容。
        
    -   **数值格式**：设置标注的数值格式，可选**默认**、**11（整数）**、**11.1（浮点数）**、**11.11（浮点数）**、**11%（百分比）**、**11.1%（百分比）**、**1,111（千分位）**和**1,111.1（千分位）**。更多数据显示格式请参见[数据显示格式说明](https://help.aliyun.com/zh/datav/datav-6-0/product-overview/terms-1#section-os5-b6i-tok)，仅在标注字段选择range或y时显示。
        
    -   **前后缀**：设置柱子标注的前后缀内容。
        
    -   **标注位置**：选择标注内容的显示位置，可选**顶部**、**中间**和**底部**。
        
    -   **相对偏移**：柱子标注相对柱子在垂直和水平方向偏移量，单位为px。
        
    -   **文本样式**：柱子标注的文本样式，包括文本的字体样式、文字粗细、字号和颜色。
        
    -   **文本描边**：柱子标注的文本描边样式，包括描边线的粗细值和颜色。
        
    
-   **坐标**：组件坐标轴包括**X轴**和**Y轴**两种。
    
    -   **X轴**![x轴面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0134257261/p289390.png)
        
        -   **X轴显示**：打开开关，组件内X轴样式显示可见；关闭开关，组件内X轴样式不可见。
            
        -   **数据类型**：X轴数据的类型，可选**数值型**、**类目型**和**时间型**。
            
        -   **显示范围**：X轴的数据最小值和最大值的显示范围，仅在**数据类型**配置项选择**数值型**时可配置。
            
            **参数**
            
            **说明**
            
            **最小值**
            
            X轴的最小值，支持自定义输入，也支持系统选择**数据最小值**，取数据中的最小值。
            
            **最大值**
            
            X轴的最大值，支持自定义输入，也支持系统选择**数据最大值**，取数据中的最大值。
            
        -   **轴线**：柱图的X轴轴线样式，包括线的形状、线的粗细和线的颜色，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制X轴轴线样式的显隐。
            
            **说明**
            
            当线的类型选择**虚线**或**点线**时，还可以配置线的间断长度值和每一个间断线之间的距离。
            
        -   **轴标题**：柱图的X轴轴标题样式，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制X轴轴标题的显隐。
            
            **参数**
            
            **说明**
            
            **标题显示**
            
            X轴轴标题显示的文字内容。
            
            **展示方式**
            
            X轴轴标题的展示方式，包括标题的角度值和标题的偏移值。
            
            **文本样式**
            
            X轴轴标题文本的字体样式、文字粗细、字号和颜色。
            
        -   **刻度线**：柱图的X轴刻度线样式，包括刻度线的长度值、粗细值和颜色，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制X轴刻度线样式的显隐。
            
        -   **轴标签**：柱图的X轴轴标签样式，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制X轴轴标签的显隐。
            
            **参数**
            
            **说明**
            
            **显示格式**
            
            X轴标签数值显示格式的样式，可选**默认**、**11（整数）**、**11.1（浮点数）**、**11.11（浮点数）**、**11%（百分比）**、**11.1%（百分比）**、**1,111（千分位）**和**1,111.1（千分位）**。更多数据显示格式请参见[数据显示格式说明](https://help.aliyun.com/zh/datav/datav-6-0/product-overview/terms-1#section-os5-b6i-tok)。仅在**数据类型**选择**数值型**时可配置。
            
            **两端间距**
            
            X轴标签距离轴线两端之间的距离，单位%。
            
            **标签展示**
            
            标签的展示样式，包括：期望的X轴刻度的数量、标签的前后缀内容、标签的角度值、偏移量和标签展示时候的对齐方式。
            
            **文本样式**
            
            X轴轴标签文本的字体样式、文字粗细、字号和颜色。
            
        -   **网格线**：柱图的X轴网格线的样式，包括网格线的线型样式、粗细和颜色，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制X轴网格线的显隐。
            
            **说明**
            
            当线的类型选择**虚线**或**点线**时，还可以配置线的间断长度值和每一个间断线之间的距离。
            
    -   **Y轴**![y轴面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4844393361/p336544.png)
        
        -   **Y轴显示**：打开开关，组件内Y轴样式显示可见；关闭开关，组件内Y轴样式不可见。
            
        -   **显示范围**：Y轴的数据最小值和最大值的显示范围。
            
            **参数**
            
            **说明**
            
            **最小值**
            
            Y轴的最小值，支持自定义输入，也支持系统选择**0**和**数据最小值**。
            
            **最大值**
            
            Y轴的最大值，支持自定义输入，也支持系统选择**数据最大值**，取数据中的最大值。
            
        -   **轴线**：柱图的Y轴轴线样式，包括线的形状、线的粗细和线的样式，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制Y轴轴线样式的显隐。
            
        -   **轴标题**：柱图的Y轴轴标题样式，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制Y轴轴标题的显隐。
            
            **参数**
            
            **说明**
            
            **标题显示**
            
            Y轴轴标题显示的文字内容。
            
            **展示方式**
            
            Y轴轴标题的展示方式，包括标题的角度值和标题的偏移值。
            
            **文本样式**
            
            Y轴轴标题文本的字体样式、文字粗细、字号和颜色。
            
        -   **刻度线**：柱图的Y轴刻度线样式，包括刻度线的长度值、粗细值和颜色，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制Y轴刻度线样式的显隐。
            
        -   **轴标签**：柱图的Y轴轴标签样式，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制Y轴轴标签的显隐。
            
            **参数**
            
            **说明**
            
            **显示格式**
            
            Y轴标签数值显示格式的样式，可选**默认**、**11（整数）**、**11.1（浮点数）**、**11.11（浮点数）**、**11%（百分比）**、**11.1%（百分比）**、**1,111（千分位）**和**1,111.1（千分位）**。更多数据显示格式请参见[数据显示格式说明](https://help.aliyun.com/zh/datav/datav-6-0/product-overview/terms-1#section-os5-b6i-tok)。
            
            **两端间距**
            
            Y轴标签距离轴线两端之间的距离，单位%。
            
            **标签展示**
            
            标签的展示样式，包括：Y轴轴标签的数量、标签的前后缀内容、标签的角度值、偏移量和标签展示时候的对齐方式。
            
            **文本样式**
            
            Y轴轴标签文本的字体样式、文字粗细、字号和颜色。
            
        -   **网格线**：柱图的Y轴网格线的样式，包括网格线的线型样式、粗细和颜色，可单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标控制Y轴网格线的显隐。
            
            **说明**
            
            当线的类型选择**虚线**或**点线**时，还可以配置线的间断长度值和每一个间断线之间的距离。
            
-   **动画**：瀑布图的动画效果样式。![动画面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1409647261/p289979.png)
    
    **参数**
    
    **说明**
    
    **动画开关**
    
    打开开关，可配置柱状图的动画效果。
    
    **动画效果**
    
    动画的效果类型，系统提供多种常见的动画效果供您选择，包括**水平生长**、**垂直生长**、**缩放渐入**和**划动进入**，仅在打开动画开关后可配置。
    
    **动画时长**
    
    组件动画效果的持续时间，单位为ms，仅在打开动画开关后可配置。
    
-   **交互**：柱状图组件的交互效果样式。
    
    -   **提示框**：在预览或发布页面，鼠标悬浮或单击柱图时出现的提示框的样式，单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标可开启或关闭提示框。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4896536761/p561468.png)
        
        **参数**
        
        **说明**
        
        **模式**
        
        提示框的模式，可选，包括**简洁**和**通用**。
        
        **触发方式**
        
        提示框被触发的方式，可选，包括**悬浮**和**点击**。
        
        **显示位置**
        
        提示框显示的位置样式，可选，包括**上**、**下**、**左**和**右**。
        
        **标题间距**
        
        提示框中标题之间的间距，单位px。
        
        **标题文本**
        
        提示框中标题文本的样式，包括文字字体样式、文字粗细、字号和颜色。
        
        **内容显示**
        
        单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一个提示框内容显示系列。 单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个提示框内容显示系列的排列样式。单击![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5896941261/p271562.jpg)图标，即可复制当前选中提示框内容显示系列配置内容并新增一个同样配置的提示框内容显示系列。
        
        -   **字段名**：提示框内容的字段名称，需要和数据面板中的字段相匹配。
            
        -   **显示名**：提示框内容的显示名称。
            
        -   **后缀**：提示框内容的后缀内容。
            
        
        **内容间距**
        
        提示框内容文本之间的间距，单位px。
        
        **内容文本**
        
        提示框中内容文本的样式，包括文字字体样式、文字粗细、字号和颜色。
        
        **弹窗背景**
        
        提示框的弹窗背景样式。
        
        -   **背景边距**：提示框弹窗背景在水平和垂直方向的边距值。
            
        -   **背景颜色**：提示框的背景颜色。
            
        -   **边框样式**：提示框边框的样式，包括边框线的类型、圆角大小、线宽大小和边框线的颜色。
            
        
        **轴指示器**
        
        提示框的轴指示线的样式，包括轴指示线的类型、粗细值和轴指示线颜色。单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标可开启或关闭轴指示器 。
        
        **说明**
        
        当线的类型选择**虚线**或**点线**时，还可以配置线的间断长度值和每一个间断线之间的距离。
        
    -   **选中态**：当柱子被选中时候的状态样式，单击![开关图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1986941261/p274464.jpg)图标可开启或关闭选中态样式。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4896536761/p561469.png)
        
        **参数**
        
        **说明**
        
        **触发方式**
        
        柱子被选中触发的方式，可选，包括**悬浮**和**点击**。
        
        **选中方式**
        
        选中柱子的方式，可选，包括**单选**和**多选**。
        
        **柱子颜色**
        
        柱子被选中状态下的颜色。
        
        **柱子描边**
        
        柱子描边线的样式，包括描边线条的类型、线条的粗细和描边线的颜色。
        
        **说明**
        
        当线的类型选择**虚线**或**点线**时，还可以配置线的间断长度值和每一个间断线之间的距离。
        
-   **图例**：柱状图的图例样式。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4896536761/p561471.png)
    
    **参数**
    
    **说明**
    
    **图例开关**
    
    打开开关，可配置图例样式；关闭开关，无法配置图例样式。
    
    **图例位置**
    
    图例相对于组件起始坐标的位置，可选**顶部居左**、**顶部居中**、**顶部居右**、**底部居左**、**底部居中**、**底部居右**、**左侧居顶**、**左侧居中**、**左侧居底**、**右侧居顶**、**右侧居中**和**右侧居底**。
    
    **文本样式**
    
    图例文本的字体样式、文字粗细、字号和颜色。
    
    **图表间距**
    
    图例和图表之间的水平间距和垂直间距。
    
    **分类图例**
    
    分类型图例的样式。
    
    -   **图例标记**：图例标记的形状和尺寸大小。
        
    -   **图例间距**：不同分类图例之间在横向和纵向的距离。
        
    -   **最大宽度**：设置图例的最大宽度，单位为px。
        
    -   **允许翻页**：打开开关，开启图例翻页功能，可配置图例数量过多需要翻页显示时的页码样式和箭头样式；关闭开关，图例内容全部展示在一页中，无法翻页显示。
        
        -   **页码样式**：翻页页码的样式，包括页码的字体、文字的粗细、字号的大小和颜色。
            
        -   **箭头样式**：翻页样式内箭头的尺寸大小、箭头默认颜色及禁用颜色。
            
    
-   **条件**：条件样式说明。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4896536761/p561473.png)
    
    **条件样式**：单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，添加或删除一个条件样式。 单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个条件样式的排列样式。单击![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5896941261/p271562.jpg)图标，即可复制当前选中条件样式配置内容并新增一个同样配置的条件样式。具体配置请参见[条件树使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/instructions-of-conditional-tree#task-2099938)。
    
    **柱子颜色**：打开开关，配置该系列条件样式中的柱子颜色；关闭开关，无法配置该系列条件下的柱子颜色。
    

## 数据面板（默认模式）

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4896536761/p561478.png)

### **配置字段说明**

**字段**

**说明**

`x`

用于配置柱子中每个柱子的类目，即x轴的值。

`y`

用于配置柱子中每个柱子的值。

表 1. 配置项说明

**配置项**

**说明**

**受控模式**

打开开关，资产初始化状态下不请求数据，仅通过回调ID或蓝图编辑器配置的方法发起请求数据；关闭开关，可以使用自动更新请求数据。开关默认为关闭状态。

**自动更新请求**

选中后可以设置动态轮询，还可以手动输入轮询的时间频次。取消选中后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和回调ID事件来触发请求更新数据。

**数据源**

单击**配置数据源**，可在**设置数据源**面板中修改数据源类型和数据查询代码、预览数据源返回结果以及查看数据响应结果，详情请参见[配置资产数据](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-widget-data#task-2376875)。

**数据过滤器**

数据过滤器提供数据结构转换、筛选和一些简单的计算功能。单击**添加过滤器**，可在**设置数据源**面板配置数据过滤器脚本，详情请参见[过滤器使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-the-data-filter#task-1322674)。

**数据响应结果**

展示数据请求的响应结果。当数据源发生改变时，可单击右侧的![刷新图标 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0376703061/p89093.png)图标，实时查看数据响应结果。

## 数据面板（分析模式）

**重要**

在使用DataV数据集提供的BI分析功能之前，系统会对瀑布图进行以下变更。

-   数据源**瀑布图接口**由静态数据切换至DataV数据集。
    
-   更新DataV数据集配置（此操作不会使字段配置丢失）。
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4896536761/p561480.png)

BI分析数据配置面板中的详细操作说明，请参见[BI分析模式数据面板功能介绍](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/introduction-to-features-of-the-data-panel-in-bi-analysis-mode#task-2098468)。

### **配置字段说明**

**字段**

**说明**

`x`

用于配置柱子中每个柱子的类目，即x轴的值。

`y`

用于配置柱子中每个柱子的值。

**说明**

通过BI分析模块添加的组件，数据面板默认是分析模式，非BI分析下v5.x版本的组件，数据面板默认是默认模式。当组件是以分析模式添加后，您可以单击切换数据面板左上角的**默认模式**，即可在弹窗对话框内确认退出分析模式并删除该BI分析组件对应的分析器。退出分析模式后，当前BI分析组件会转换成v5.x版本组件，组件数据面板为默认模式。![退出分析模式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6844393361/p336612.jpg)

## 交互面板

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4896536761/p561481.png)

**当数据项选中时**：选中**启用**，开启组件交互功能。**瀑布图**组件拥有交互配置，当单击选中某个数据项时抛出回调值，默认抛出数据中的x和y字段。具体配置请参见[如何配置数字翻牌器组件的回调ID](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-callback-ids-for-ticker-boards)。

## 蓝图编辑器交互配置

**说明**

BI分析模式下的瀑布图组件无法配置蓝图编辑器交互，仅在默认模式下可配置蓝图。

1.  在画布编辑器页面，右键单击组件，选择**导出到蓝图编辑器**。
2.  单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
3.  在蓝图编辑器配置页面，单击导入节点栏内的**瀑布图**组件，在画布中可以看到关于瀑布图蓝图编辑器的配置参数。![瀑布图蓝图参数](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6844393361/p336622.jpg)
    
    -   **事件**
        
        **事件**
        
        **说明**
        
        **当瀑布图接口请求完成时**
        
        数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
        **当瀑布图接口请求失败时**
        
        数据接口请求失败时（请求失败的情况可能是：网络问题或接口报错等）返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
        **当数据项选中时**
        
        当单击瀑布图的柱子时抛出的事件，同时抛出该柱子对应的数据项。
        
    -   **动作**
        
        **动作**
        
        **说明**
        
        **请求瀑布图接口**
        
        重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如瀑布图配置了API数据源为`https://api.test`，传到**请求瀑布图接口**动作的数据为`{ id: '1'}`，则最终请求接口为`https://api.test?id=1`。
        
        **导入瀑布图接口**
        
        按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据**页签的**数据响应结果**区域。
        
        **高亮**
        
        高亮数据项对应的元素，参考数据示例如下。
        
        ```
        return {
          "data": {
            "x": data.x,//高亮的数据项
            "colorField": data.colorField
          },
          "style": {
            "fillStyle": "#f00"//填充颜色
          }
        }
        ```
        
        **重置选择项**
        
        清空重置组件选择项数据，不需要参数。
        
        **更新组件配置**
        
        动态更新组件的样式配置。需要先在组件的**配置**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面，数据处理节点中更改对应样式的字段值。
        
        **显示**
        
        显示组件，参考数据示例如下。
        
        ```
        return{
          "animationType": "",
          "animationDuration": 1000,
          "animationEasing": "linear"
        }
        ```
        
        **隐藏**
        
        隐藏组件，参考数据示例如下。
        
        ```
        return{
          "animationType": "",
          "animationDuration": 1000,
          "animationEasing": "linear"
        }
        ```
        
        **切换显隐状态**
        
        切换组件显示或者隐藏，参考数据示例如下。
        
        ```
        return {
          "animationIn": {
            "animationType": "",
            "animationDuration": 1000,
            "animationEasing": "linear"
          },
          "animationOut": {
            "animationType": "",
            "animationDuration": 1000,
            "animationEasing": "linear"
          }
        }
        ```
        
        **移动**
        
        将组件移动到指定位置，参考数据示例如下。
        
        ```
            return{      
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