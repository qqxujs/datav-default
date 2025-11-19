<!DOCTYPE html> 

数据源配置是创建组件和展示业务数据的关键步骤，具有数据接入、数据处理和数据实时更新的功能。本文介绍如何进行配置组件数据。

## **功能说明**

DataV-Board 支持接入[各种业务数据](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/data-source-categories)，包括静态数据、数据库、应用网关等。通过数据源配置，将业务数据接入并适配到组件，同时设置数据**禁止加载态**、**受控模式**、**自动更新请求**实现对数据的加载性能优化、组件间参数传递和实时数据更新。

## **操作流程**

### **前提条件**

* 登录[DataV-Board 7.0控制台](https://datav.aliyun.com/v/console/)。
* 已准备并[添加相关数据源](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-a-data-source/)。
* 进入看板编辑页，并创建组件。

### **配置数据**

组件默认自带静态数据，下面以柱图数据接入为例，演示如何通过静态数据、全局变量和数据源进行组件数据源配置。

#### 静态数据适配组件

本示例通过对静态数据调整，展示某学校各阶段学生人数对比柱图。

1. 创建并选中**柱状图**组件，进入**数据源**面板，单击**数据映射**查看柱图默认自带数据和适配结构。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7412352371/p872554.png)  
观察数据结构，柱图接受`x`字段作为X轴数据，`y`字段作为Y轴数据，`colorField`字段作为颜色堆叠分组。具体解释参见[柱状图参数说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/column-chart-1#title-rv8-2gc-7uw)。
2. 在可视化编辑状态，可直接调整静态数据。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7412352371/p872561.png)
3. 点击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7412352371/p872562.png)，切换至代码编辑状态。通过增加、删除或修改JSON格式的代码完成数据源的编辑。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7412352371/p872567.png)
4. 当您调整成如下JSON数据后，柱图将展示某学校各阶段学生人数对比图。

**某学校各阶段学生人数JSON数据**  
```  
[  
  {  
    "colorField": 100,  
    "x": "小学",  
    "y": 145  
  },  
  {  
    "x": "初中",  
    "colorField": 100,  
    "y": 200  
  },  
  {  
    "x": "高中",  
    "y": 290,  
    "colorField": 100  
  }  
]  
```  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7412352371/p872579.png)

**说明**  
完成数据配置后，可按需调整样式。例如，上图可隐藏图例，显示坐标轴标题，让图表语义更明确。

#### 全局变量适配组件

组件支持全局变量作为传入数据，本示例演示将柱图数据通过`schoolInfo`的全局变量形式接入组件。

1. **进入全局变量**页签，新建变量并修改变量名称为`schoolInfo`。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7412352371/p872706.png)
2. 修改**初始值**内容如下。

**某学校各阶段学生人数JSON数据**  
```  
[  
  {  
    "colorField": 100,  
    "x": "小学",  
    "y": 145  
  },  
  {  
    "x": "初中",  
    "colorField": 100,  
    "y": 200  
  },  
  {  
    "x": "高中",  
    "y": 290,  
    "colorField": 100  
  }  
]  
```
3. 创建选中**柱状图**组件，进入**数据源**面板，单击**数据映射**查看柱图默认自带数据和适配结构。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7412352371/p872554.png)观察数据结构，柱图接受`x`字段作为X轴数据，`y`字段作为Y轴数据，`colorField`字段作为颜色堆叠分组。具体解释参见[柱状图参数说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/column-chart-1#title-rv8-2gc-7uw)。
4. **数据源类型**选择**全局变量**，并选择`schoolInfo`作为组件的业务数据。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7412352371/p872709.png)
5. 组件数据和静态数据一致，无需适配，此柱图展示某学校各阶段学生人数对比。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7412352371/p872579.png)

**说明**  
全局变量除传递静态值外，还有其他使用场景。具体请参见[使用全局变量](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-global-variables)。

#### 数据源适配组件

数据源方式接入业务数据流程如下：先接入数据，再通过**数据响应结果**观察业务数据和组件数据的结构差距，通过**数据映射**或**过滤器**进行数据的适配处理，最终得到适配数据。本示例基于一份关键数据字段为 `category`产品类别和`quantity`销售量的零售店数据集，用柱状图展示不同产品类别的销售情况。

1. 创建选中**柱状图**组件，进入**数据源**面板，单击**数据映射**查看柱图默认自带数据和适配结构。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7412352371/p872554.png)观察数据结构，柱图接受`x`字段作为X轴数据，`y`字段作为Y轴数据，`colorField`字段作为颜色堆叠分组。具体解释参见[柱状图参数说明](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/column-chart-1#title-rv8-2gc-7uw)。
2. **数据源类型**选择**RDS for MySQL**，选择已有数据源，并用SQL取数获取已准备好的业务数据。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7412352371/p872611.png)
3. 点击**数据响应结果**，查看返回数据结构。  
```  
[  
  {  
    "id": 1,  
    "category": "Electronics",  
    "sales_amount": 15000,  
  },  
  {  
  ...  
  }  
]  
```
4. 由于目前返回数据结构并不是柱图需要的数据结构，需要进行数据适配。可通过**数据映射**或**过滤器**进行数据处理。

**说明**  
可同时使用过滤器和数据映射处理业务数据，过滤器优先。  
##### **方式一：数据映射**

  1. 打开数据映射，配置`x`字段和`y`字段如下图。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7412352371/p872628.png)
  2. 由于未配置`colorField`字段，销售柱图如下：![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7412352371/p872678.png)  
##### **方式二：过滤器**

  1. 可通过过滤器处理数据，代码如下：  
  ```  
  function filter(data){  
    return data.map(item => {  
      return {  
        x: item.category,  
        y: item.quantity,  
        colorField: 1  
      }  
    });  
  }  
  ```
  2. 您将得到如下销售柱图：  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7412352371/p872689.png)

## **配置项说明**

| **数据项配置**  | **说明**                                                                                                                                                                                                                                                                                                           |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **数据源**    | 组件的数据源中通过**代码编辑**或**可视化编辑**展示了组件所包含的数据字段。也可以修改**数据类型**，灵活配置组件数据。                                                                                                                                                                                                                                                 |
| **数据映射**   | 当您需要自定义图表字段配置时，可以在**数据映射**模块设置不同的字段映射内容，将这些字段映射到组件对应的字段上。无需修改数据源中的字段，就可以实现数据的实时匹配。也可以单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9633269661/p524955.png)图标对字段分别样式配置。                                                                                                                 |
| **过滤器**    | 打开**过滤器**，选择已创建的数据过滤器或新建数据过滤器，并配置数据过滤器脚本，实现数据的筛选功能。详情请参见[管理数据过滤器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/manage-filters-1)。                                                                                                                                                                       |
| **数据响应结果** | 实时展示了组件所使用的数据。当组件数据源发生变化时，数据响应结果会对应展示最新的数据。如果系统反应延迟，您可以单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8276202761/p538806.png)图标，查看数据响应结果，也可以单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8276202761/p538808.png)图标，获取组件的最新数据。您也可以单击查看示例，查看当前组件的响应结果示例。 |
| **禁止加载态**  | 勾选复选框，在组件更新和预览数据看板时，将看不到组件初始化时的加载内容，去勾选则相反。默认为去勾选状态。                                                                                                                                                                                                                                                             |
| **受控模式**   | 勾选复选框，组件初始化状态下不请求数据，仅通过全局变量或蓝图编辑器配置的方法发起请求数据；去勾选复选框，可以使用自动更新请求数据。默认为去勾选状态。                                                                                                                                                                                                                                       |
| **自动更新请求** | 勾选复选框，可以手动输入轮询的时间频次设置动态轮询。清除后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和全局变量事件来触发请求更新数据。                                                                                                                                                                                                                                          |

## **常见问题**

若配置中遇到问题，请参见[数据源配置常见问题](https://help.aliyun.com/zh/datav/datav-7-0/support/faq-about-data-source-configuration)尝试排查。