 

本文介绍事件仪表盘全量选择时各配置项的含义。

## **图表样式**

事件仪表盘是一种拟物化的图表，刻度表示度量，指针表示维度，指针角度表示数值。仪表盘图表就像是汽车的速度表一样，有一个圆形的表盘及相应的刻度，有一个指针指向当前数值。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6127002961/p705765.png)

## 样式面板![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6127002961/p705767.png)

-   **搜索配置**：单击**样式**面板右上角的搜索配置项图标![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5013889661/p527384.png)，可在搜索配置面板中输入您需要搜索的配置项名称，快速定位到该配置项，系统支持模糊匹配。详情请参见[搜索配置项](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/configuration-items#b14c340069fac)。
    
-   -   **尺寸**：包括组件的宽度和高度，单位为px。
        
    -   **定位**：包括组件的**横坐标**和**纵坐标**，单位为px。**横坐标**为组件左上角距离页面左边界的像素距离，**纵坐标**为组件左上角距离页面上边界的像素距离。
        
    -   **旋转**：以组件的中心为中心点，进行旋转，单位为度（°）。
        
        -   手动输入角度值，控制组件的旋转角度。
            
        -   单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8222919661/p521797.png)图标，控制组件左右翻转样式。
            
        -   单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8222919661/p521798.png)图标，控制组件上下翻转样式。
            
    -   **不透明度**：取值范围为0~1。为**0**时，图表隐藏；为**1**时，图表全部显示。默认为**1**。
        
    -   **交互穿透**：开启后，鼠标可穿透该组件，避免看板中组件较多时，该组件会遮挡鼠标与下层组件的交互。
        
    -   **对齐**：组件在编辑器中的对齐方式。
        
-   **文本样式**：仪表盘内文本的样式，包括文本字体的样式、文字的粗细、字号大小和文本的颜色。
    
-   **图片样式**：仪表盘内事件图片的样式，包括拖动滑块调整图标的长度值、高度值和图标的透明度值。
    
-   **背景样式**：仪表盘的背景样式。
    
    **参数**
    
    **说明**
    
    **外侧圆弧颜色**
    
    仪表盘圆弧外侧的线条颜色。
    
    **中间圆弧颜色**
    
    仪表盘中间圆弧区域的颜色。
    
    **内侧圆弧颜色**
    
    仪表盘圆弧内侧的线条颜色。
    
    **外侧刻度颜色**
    
    仪表盘圆弧外侧的刻度颜色。
    
    **内侧刻度颜色**
    
    仪表盘圆弧内侧的刻度颜色。
    
    **三角形箭头颜色**
    
    仪表盘三角形箭头的颜色。
    
    **组件背景颜色**
    
    仪表盘组件背景的颜色。
    

## 数据源面板![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6127002961/p705769.png)

**字段**

**说明**

`id`

仪表盘事件的序号。

`context`

仪表盘的事件具体内容。

`url`

仪表盘中的事件内容对应的图标URL路径链接。

**数据项配置**

**说明**

**数据源**

组件的数据源中通过**代码编辑**或**可视化编辑**展示了组件所包含的数据字段。也可以修改**数据类型**，灵活配置组件数据。

**数据映射**

当您需要自定义图表字段配置时，可以在**数据映射**模块设置不同的字段映射内容，将这些字段映射到组件对应的字段上。无需修改数据源中的字段，就可以实现数据的实时匹配。也可以单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9633269661/p524955.png)图标对字段分别样式配置。

**过滤器**

打开**过滤器**，选择已创建的数据过滤器或新建数据过滤器，并配置数据过滤器脚本，实现数据的筛选功能。详情请参见[管理数据过滤器](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/manage-filters-1)。

**数据响应结果**

实时展示了组件所使用的数据。当组件数据源发生变化时，数据响应结果会对应展示最新的数据。如果系统反应延迟，您可以单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8276202761/p538806.png)图标，查看数据响应结果，也可以单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8276202761/p538808.png)图标，获取组件的最新数据。您也可以单击查看示例，查看当前组件的响应结果示例。

**禁止加载态**

勾选复选框，在组件更新和预览数据看板时，将看不到组件初始化时的加载内容，去勾选则相反。默认为去勾选状态。

**受控模式**

勾选复选框，组件初始化状态下不请求数据，仅通过全局变量或蓝图编辑器配置的方法发起请求数据；去勾选复选框，可以使用自动更新请求数据。默认为去勾选状态。

**自动更新请求**

勾选复选框，可以手动输入轮询的时间频次设置动态轮询。清除后则不会自动更新，需要手动刷新页面，或通过蓝图编辑器和全局变量事件来触发请求更新数据。

## 高级面板![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0633951171/p785110.png)

打开开关，开启关联全局变量功能。当单击仪表盘内的事件时，会触发数据请求，抛出临时变量，动态加载不同事件的数据。默认抛出数据中的`id`和`context`值，具体配置请参见[组件交互配置](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)。

## 蓝图交互

1.  单击页面左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7498599661/p528973.png)图标，进入**蓝图**页面。
    
2.  在**图层节点**页签下，添加当前组件至主画布中。
    
3.  查看蓝图配置参数。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6127002961/p705775.png)
    
    -   **事件**
        
        **事件**
        
        **说明**
        
        **当映射数据请求完成时**
        
        数据接口请求返回并经过过滤器处理后抛出的事件，同时抛出处理后的JSON格式的数据。具体数据示例请参见画布编辑器中组件右侧配置面板**数据源**页签的**数据响应结果**区域。
        
        **单击事件触发**
        
        单击仪表盘内的事件触发，抛出事件数据，同时抛出该事件对应的数据项，参考数据示例。
        
        ```
        {
          "id": 1,
          "context": "中国"
        }
        ```
        
    -   **动作**
        
        **动作**
        
        **说明**
        
        **导入映射数据**
        
        按组件绘制格式处理数据后，导入组件，重新绘制。不需要重新请求服务端数据，参考数据示例。
        
        ```
        [
          {
            "id": 139340,
            "context": "法国",
            "url": "https://img.alicdn.com/tfs/TB1s2CRgv9TBuNjy0FcXXbeiFXa-200-133.png"
          }
        ]
        ```
        
        **请求映射数据**
        
        重新请求服务端数据，上游数据处理节点或图层节点抛出的数据将作为参数。例如事件仪表盘配置了API数据源为`https://api.test`，传到**请求映射数据**动作的数据为`{ id: '1'}`，则最终请求接口为`https://api.test?id=1`。
        
        **移动**
        
        将组件移动到指定位置，参考数据示例。
        
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
        
        切换组件显示或隐藏，不需要参数。
        
        **显示**
        
        显示组件，参考数据示例。
        
        ```
        {
          "animationType": "",//动画方式，可选值：fade，不填无动画。
          "animationDuration": 1000,//动画延迟，单位ms。
          "animationEasing": ""//动画曲线
        }
        ```
        
        **隐藏**
        
        隐藏组件，参考数据示例。
        
        ```
        {
          "animationType": "",//动画方式，可选值：fade，不填无动画。
          "animationDuration": 1000,//动画延迟，单位ms。
          "animationEasing": ""//动画曲线
        }
        ```
        
        **更新组件配置**
        
        动态更新组件的样式配置。需要先在组件的**样式**面板中，单击**复制配置到剪贴板**，获取组件配置数据。再根据需要在蓝图编辑器配置页面的数据处理节点中更改对应样式的字段值。
        

## **案例演示**

本案例通过仪表盘的自身旋转功能，实现点击仪表盘事件，定位轮播列表对应数据。

1.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
2.  选择任一数据看板，单击**编辑**，进入画布编辑器页面。
    
3.  添加**轮播列表**和**事件仪表盘**两个组件到画布中。
    
4.  单击轮播列表，选择数据源面板，修改静态数据。
    
    ```
    [
      {
        "id": 206252,
        "context": "美国",
        "url": "https://img.alicdn.com/tfs/TB1L9K2gv5TBuNjSspcXXbnGFXa-224-118.png"
      },
      {
        "id": 152418,
        "context": "西班牙",
        "url": "https://img.alicdn.com/tfs/TB1pEu5gv9TBuNjy1zbXXXpepXa-200-133.png"
      },
      {
        "id": 139340,
        "context": "法国",
        "url": "https://img.alicdn.com/tfs/TB1s2CRgv9TBuNjy0FcXXbeiFXa-200-133.png"
      },
      {
        "id": 138786,
        "context": "新加坡",
        "url": "https://img.alicdn.com/tfs/TB11znbgx1YBuNjy1zcXXbNcXXa-200-133.png"
      },
      {
        "id": 95516,
        "context": "荷兰",
        "url": "https://img.alicdn.com/tfs/TB1D4CygrSYBuNjSspiXXXNzpXa-200-133.png"
      },
      {
        "id": 90197,
        "context": "波兰",
        "url": "https://img.alicdn.com/tfs/TB1K4vcguOSBuNjy0FdXXbDnVXa-206-129.png"
      },
      {
        "id": 82697,
        "context": "以色列",
        "url": "https://img.alicdn.com/tfs/TB1DDKIgwaTBuNjSszfXXXgfpXa-192-140.png"
      },
      {
        "id": 50096,
        "context": "土耳其",
        "url": "https://img.alicdn.com/tfs/TB16lUjgDlYBeNjSszcXXbwhFXa-200-133.png"
      },
      {
        "id": 49162,
        "context": "乌克兰",
        "url": "https://img.alicdn.com/tfs/TB1DbgTgDJYBeNjy1zeXXahzVXa-200-133.png"
      },
      {
        "id": 47290,
        "context": "巴西",
        "url": "https://img.alicdn.com/tfs/TB1SIAwgCBYBeNjy0FeXXbnmFXa-196-137.png"
      },
      {
        "id": 46465,
        "context": "意大利",
        "url": "https://img.alicdn.com/tfs/TB1bHkTgDJYBeNjy1zeXXahzVXa-200-133.png"
      }
    ]
    ```
    
5.  选择样式面板，打开**高亮**和**是否轮播**开关。修改**表格行数**为5，修改自定义列标签对齐数据源面板内的参数字段。
    
6.  单击页面左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7498599661/p528973.png)图标，进入蓝图编辑页面。
    
7.  在**图层节点**页签下，添加所有组件至主画布中。
    
8.  在**逻辑节点**页签下，添加1个串行数据处理节点到主画布中。
    
9.  连接组件。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6127002961/p705785.png)
    
10.  配置串行数据处理节点的处理方法。
     
     ```
     return [
       {
         "id": data.id,
         "context": data.context,
         "url": data.url
       }
     ]
     ```
     
11.  单击页面右上角的**预览**，预览展示结果。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6127002961/p705787.png)