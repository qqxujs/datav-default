 

本文对DataV组件面板中的组件配置项进行了概括性说明，帮助您快速了解各组件的通用属性、快速配置、组件批量配置等功能，非通用属性请参见对应组件的文档进行配置。

## **配置面板**

选择DataV服务中的某个数据看板，单击画布中的某一个组件，画布右侧会出现配置项面板。包括**样式**、**数据源**和**高级**三个标签页。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4967530961/p698063.png)

-   在**样式**面板中，您可以配置适用于所有组件的**通用属性**：包括**尺寸**、**定位**、**旋转**和**不透明度**。配置方法请参见下文的[通用属性](#section-jkv-214-t2b)，其他属性样式对每个组件来说都是不同的，配置方法请参见各组件的配置文档。
    
    **说明**
    
    -   当您在组件样式的配置过程中涉及到非数据视觉映射类颜色相关的配置项时，请参见[颜色选择器](#section-kdw-vj4-t2b)进行配置。
        
    -   当您在组件样式的配置过程中涉及到数据视觉映射类颜色相关的配置项时，请参见[颜色映射器使用说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/instructions-of-color-mapper)进行配置。
        
    
-   在**数据源**面板中，您可以切换数据源类型、切换编辑样式（**可视化编辑**和**代码编辑**）、设置数据映射、复制数据、全屏编辑数据，其中**切换编辑样式**、**复制数据**和**全屏编辑数据**适用于所有的组件，配置方法请参见下文的[复制数据](#section-r41-kfw-v46)和[全屏编辑数据](#section-hei-gh3-12g)；其余配置方法请参见[组件数据源配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-data-source-configuration)。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4967530961/p698068.png)
    
-   在**高级**面板中，您可以配置各组件之间的和组件与全局变量之间的交互事件，配置方法请参见[组件交互配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7274900371/p787192.png)
    

## **基础属性**

在组件**样式**面板选择**基础**时，显示当前组件的基础属性配置项。以柱状图为例。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4967530961/p698077.png)

**说明**

不同组件，其基础属性中包含的配置项不同。

## **快速样式**

当组件选择**基础**属性时，会显示**快速样式**配置项，以柱状图为例。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4967530961/p698087.png)

**说明**

后续会不断更新更多组件支持快速样式配置项，敬请期待。

## **快速配置**

**说明**

快速配置功能为7.0版本产品新增功能，请根据[新版控制台](https://datav.aliyun.com/v/console/)环境进行操作。

在选择**基础属性**时，**图表类组件**将展示图表的快速配置功能。

-   **图表颜色**：您可以通过选择不同的图表颜色，快速配置当前图表的显示颜色。
    
-   **图表文字**：您可以通过简单选择，快速设置图表中文字的字体、字号、文字粗细和文字颜色（暗色和亮色）。
    
-   **图表信息**：您可以选择**简单**、**通用**和**详细**，系统会快速帮您设置当前图表的最佳显示样式，下方的配置项也会动态改变。
    

## **全量属性**

在组件**样式**面板选择**全量**时，系统会显示当前组件上的所有配置项。以柱状图为例。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4967530961/p698084.png)

**说明**

不同组件，其全量属性中包含的配置项不同。

## **搜索配置项**

通过搜索配置项功能，您可以快速定位到组件的对应配置项，在搜索配置页面直接修改配置样式，也可以复用同类型的配置样式。

1.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
2.  在**工作台**页面，选择任一数据看板，单击**编辑**，进入**画布编辑器**页面。
    
3.  单击左侧导航栏的**组件库**页签，选择任一组件添加至画布中。
    
4.  单击右侧配置面板的**搜索配置项**。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4967530961/p698093.png)
    
5.  在搜索配置页面下方的输入框内，输入配置项的名称。输入完成后按**Enter**键，系统会自动搜索符合条件的配置项内容（支持模糊匹配），并显示在当前搜索页面内。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4967530961/p698094.png)
    
6.  在搜索配置显示配置项的列表中，您还可以修改和复制配置样式、定位跳转到配置项。
    
    -   单击选中某个配置项，修改配置样式。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4967530961/p698098.png)
        
        修改完成后的配置会直接应用到数据看板中对应的组件上。
        
    -   右键单击某个配置，选择复制样式，可复制组件的配置样式；右键单击一个或按住shift键多次单击选中几个同类型的配置项，选择粘贴样式，可将复制的样式应用到配置项中。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4967530961/p698095.png)
        
    -   单击某个配置项的目录栏或者左侧的![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4967530961/p698096.png)图标，可跳转定位到该配置项所在配置面板中的具体位置。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4967530961/p698097.png)
        

## 通用属性

在**通用属性**模块中，您可以调整组件的尺寸、定位、旋转角度和不透明度。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5873282761/p543121.png)

-   **尺寸**：包括组件的宽度和高度，单位为px。
    
-   **定位**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
    
-   **旋转**：以组件的中心为中心点，进行旋转，单位为度（°）。
    
    -   手动输入角度值，控制组件的旋转角度。
        
    -   单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8222919661/p521797.png)图标，控制组件左右翻转样式。
        
    -   单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8222919661/p521798.png)图标，控制组件上下翻转样式。
        
-   **不透明度**：取值范围为0~1。当为**0**时，图表隐藏；当为**1**时，图表全部显示。默认为**1**。
    

## 颜色选择器

您可以使用颜色选择器设置组件的字体颜色、轴线颜色、网格线颜色、边框颜色等。以画布颜色为例，您可以通过以下3种方式调整画布颜色。

-   单击**常用色块**图标，选择一个颜色。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3839789661/p526990.png)
    
    常用色块功能可以帮助您快速选择系统中自带的常用颜色，简单方便，可高效修改相应颜色。
    
-   单击**拾色器**图标，可以看到有3种填充样式。
    
    -   **纯色填充**：选取颜色、调节颜色透明度、添加或删除全局色板，也可以选择最近使用的颜色。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3839789661/p526992.png)
        
    -   **渐变填充**：选取渐变颜色、调节颜色透明度、添加或删除全局色板，也可以选择最近使用的颜色。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3839789661/p526995.png)
        
    -   **图案填充**：输入图案URL选取图案、更改上传本地图案、调节图案显示格式、保存我的图案或使用推荐图案。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3839789661/p526997.png)
        
-   通用颜色设置
    
    -   调整字体颜色透明度：拖动透明度滑块，或者修改**A**值，调整颜色透明度。
        
    -   添加或删除全局颜色：在颜色选择框中选择需要添加的颜色，单击**全局色板**下方的![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4967530961/p698102.png)图标，可将当前颜色添加为全局颜色；鼠标移至已添加的全局颜色上，单击拖动至**全局色板**区域以外，可删除该全局颜色。
        
        **说明**
        
        -   通过**全局色板**选取过的颜色可跨越整个数据看板，存在于在各个看板和组件的**最近使用**栏中，方便您再次使用。
            
        -   全局色板最多可以创建27个。
            
        
    -   选择最近使用颜色：系统会自动记录您最近使用的颜色，展示在**最近使用**模块中。当您需要使用同样的颜色时，可单击该颜色色块，将其应用到组件上。
        
    -   保存我的图案：将当前背景图案保存到**我的图案**中，单击**我的图案**下的具体图案会直接更换当前图案。
        

## 复制数据

在**数据源**页签下，切换至代码编辑模式，单击右下角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0693269661/p521809.png)图标，即可复制当前数据编辑框内的所有数据。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0693269661/p521808.png)

## 全屏编辑数据

在**数据源**页签下，切换至代码编辑模式，单击右下角的![全屏](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7128068951/p137918.png)图标，即可全屏显示当前数据框内的数据，并可以使用全屏模式编辑当前数据。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0693269661/p521810.png)

## **批量配置**

选中多个组件后，在右侧面板可以做如下批量配置。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1285282761/p543133.png)

-   **序号1**：当选中任意组件时显示。
    
    -   **对齐方式**：设置多个组件的对齐方式，包括但不限于左对齐、居中对齐、右对齐、顶部对齐、水平对齐、底部对齐。
        
    -   **均分方式**：设置多个组件的均分方式，包括水平均分和竖直均分。
        
    -   **对象位置**：设置多个组件左上角顶点相对于画布的位置。
        
    -   **对象尺寸**：设置多个组件的宽度和高度值。
        
-   **序号2**：当所有选中的组件都支持快捷配置时显示。具体支持快捷配置的组件请参见[快捷配置组件列表](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-operations-in-a-canvas#6db57f707799q)。
    
    -   **图表颜色**：设置多个组件的图表颜色。
        
    -   **图表文字**：设置多个组件的图表文字的字体、字体粗细、字号和颜色。
        
    -   **图表信息**：设置多个组件的图表信息类型，包括简单、通用和详细。
        
-   **序号3**：即**统一样式**，当所有选中的组件类型相同且所有组件大版本号一致时才出现。例如，两个都是区间柱状图且均是5.x版本，即可批量设置。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1285282761/p543138.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1285282761/p543139.png)
    

## 相关文档

更多配置项的常见问题，请参见[配置项常见问题](https://help.aliyun.com/zh/datav/datav-7-0/support/faq-about-configuration-items)。