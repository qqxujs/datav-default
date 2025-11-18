  组件切换至BI分析模式的三种方法-DataV数据可视化-阿里云

DataV组件分析模式提供与原有组件的数据和样式配置不同的创作模式，采用以数据为核心、自动化样式配置、探索式构建视图的流程设计。通过优化数据视图绑定操作，方便您使用基于数据生成的模型创作可视化应用。本文介绍三种使组件进入BI分析模式的方法。

## 通过创建BI分析组件进入分析模式

画布编辑器内可被添加的BI分析组件，共有三种类型。分别为：

-   BI分析图表组件类：单击资产面板中的**BI分析**模块，单击或拖拽模块列表中的某个图表类组件到画布中，会自动进入分析模式。组件添加时，画布中自动弹出**更改数据集**对话框，您可以自定义配置数据集内容，开启以数据为核心的BI分析模式组件创作流程。
    
    图 1. 选择BI分析图表组件![分析模板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6633307261/p261808.png)
    
    图 2. 选择更改数据集内容
    
    ![数据集面板选择](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6753781361/p326699.jpg)
    
    图 3. 进入分析模式数据面板![分析面板结果示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6753781361/p261823.png)
    
-   BI分析子组件类：单击资产面板中的**BI分析**模块，单击或拖拽模块列表中支持分析模式的子组件，通过添加这些子组件可以快捷创建包含特定种类子组件的分析模式地图组件。
    
    图 4. 添加特定子组件![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2435833371/p883762.png)
    
    图 5. 进入子组件分析模式![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2435833371/p882629.png)
    
    **说明**
    
    当前**BI分析**模块下的图表组件和子组件较少，后续会逐步新增其他类型的BI分析组件，具体组件详细说明请参见[BI分析组件](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/bi-analysis-widgets/#concept-2089302)。
    
-   地图子组件类：单击资产面板中的**地图**模块，单击或拖拽**基础平面地图 3.0**组件到画布中，通过在地图的子组件管理面板中，选择打开**以分析模式创建**，并在分析模式创建面板中选择需要添加的子组件即可进入地图子组件分析模式。
    
    图 6. 选择基础平面地图 3.0组件![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2435833371/p883768.png)
    
    图 7. 添加分析模式子组件![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2435833371/p883777.png)
    
    图 8. 单击子组件进入分析模式面板![单击子组件进入分析模式面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6753781361/p326960.jpg)
    

## 通过右键菜单转为分析模式

当前支持右键单击组件可切换成BI分析模式的组件仅为少部分v5.x版本的常规组件、BI分析模块中的组件及包含有支持分析模式子组件的**基础平面地图 3.0**地图组件。

在支持分析模式的v5.x版本的图表组件，右键打开菜单，单击**转为分析模式**选项，即可将选中的组件转换为分析模式。![分析](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6174093661/p494751.jpg)

在将包含多个子组件的**基础平面地图 3.0**组件，右键菜单转为分析模式时，会弹窗出**选择转为分析模式的组件**对话框，在对话框内，可勾选一个或多个可被转化成分析模式的子组件，完成勾选后，单击**确定**即可完成选中的地图子组件的模式转化。![地图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6174093661/p494752.jpg)

**说明**

已经转成BI分析模式的组件可以再次右键菜单，选择**退出分析模式**即可退出分析模式。

## 通过组件数据面板切换进入分析模式

当前支持数据面板右上角切换成分析模式的组件仅为少部分v5.x版本的常规组件、BI分析模式组件及**基础平面地图 3.0**地图内支持分析模式的子组件。

![切换面板模式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6753781361/p326996.png)

单击支持分析模式的组件数据面板，右上角显示可切换两种模式，分别为**默认模式**和**分析模式**。

-   **默认模式**：可按普通组件的数据配置方法配置当前组件的数据内容，详情请参见[配置资产数据](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-widget-data#task-2376875)。
    
-   **分析模式**：可采用以数据为核心、自动化样式配置、探索式构建组件视图的流程设计，详情请参见[BI分析模式数据面板功能介绍](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/introduction-to-features-of-the-data-panel-in-bi-analysis-mode#task-2098468)。
    

**说明**

当画布中支持分析模式的组件首次转成分析模式时，将同步创建分析器，分析器的详细功能说明，请参见[BI分析器交互使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/bi-analyzer-interaction-instructions#concept-2114138)。

![创建分析器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4168832361/p325956.jpg)