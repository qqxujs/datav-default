 

本文档介绍全局变量的五种用法，**作为静态值传递**、**作为变量引用异步值传递**、**作为URL参数传递**、**作为交互事件参数传递**、**过滤器引用**。

## **前提条件**

-   登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
-   已进入画布编辑器。
    
-   已创建三个全局变量**var\_1**、**var\_2**、**var\_3**。
    

## 作为静态值传递

1.  在**画布编辑器**页面，单击**全局变量**页签。
    
2.  单击**var\_1**变量，修改**来源**为**静态值**。
    
3.  修改**初始值**内容为**hello**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1699062371/p877404.png)
    
4.  刷新**数据响应结果**后的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5220082761/p520655.png)图标，查看响应结果为修改后的内容`hello`。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1699062371/p877403.png)
    

## 作为变量引用异步值传递

1.  在**画布编辑器**页面，单击**全局变量**页签。
    
2.  单击**var\_1**变量，修改**初始值**为**datav-hello**。
    
3.  单击**var\_2**变量，修改**来源**为**数据源请求**。
    
4.  选择数据源类型。
    
    ### **数据源类型为****API**
    
    若选择**数据类型**为**API**，则使用以下步骤。
    
    1.  设置**请求方式**为**GET**，输入**URL**为**https://datav.com/:var\_1**。
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1699062371/p877408.png)
        
        **说明**
        
        此处URL为示例地址，不具备真实访问性。具体请以实际使用为准。
        
    2.  键盘上使用**F12**功能键打开chrome控制台，切换至**Network**页签**。**
        
    3.  刷新**数据响应结果**后的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5220082761/p520655.png)图标。
        
    4.  此时**Network**存在2个请求：**Name**为数字类的请求和**Name**为**datav-hello**的请求。
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1699062371/p877452.png)
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1699062371/p877411.png)
        
    
    ### 数据源类型为**兼容MySQL数据库**
    
    若选择**数据类型**为**兼容MySQL数据库**，则使用以下步骤。
    
    1.  选择**已有数据源**。也可以重新创建数据源，详情请参见数据源管理。
        
    2.  输入以下SQL表达式。
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1699062371/p877441.png)
        
        ```
        select :var_1 as value
        ```
        
    3.  刷新**数据响应结果**后的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5220082761/p520655.png)图标，查看响应结果。
        
    
    **说明**
    
    -   如果您的**数据源类型**为**静态数据**或者**CSV文件**，则不支持全局变量的使用。
        
    -   对于API数据源，系统会直接为同名的变量参数赋值。
        
    -   DataV提供了全局变量自动补全功能。在配置数据源时，只要键入英文冒号`:`，编辑器将提示当前屏幕下所有配置过的变量名称。
        
    

## **作为URL参数传递**

1.  在**画布编辑器**页面，单击**全局变量**页签。
    
2.  单击**var\_3**变量，修改**来源**为**从URL查询条件中获取**。
    
3.  在URL中使用参数赋值方式传入，`https://datav.aliyun.com/v/editor/xxx?var_3=datav#__sketch__`。
    
    **重要**
    
    参数要设置到#号前面，并且参数名要与全局变量名保持一致。
    
4.  刷新**数据响应结果**后的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5220082761/p520655.png)图标，查看响应结果为修改后的内容：从URL传入的`datav`。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1699062371/p877449.png)
    

## **作为交互事件参数传递**

1.  在**画布编辑器**页面，单击上方**搜索**框。输入**按钮**和**通用标题**，将两个组件添加到画布中。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7179649761/p607721.png)
    
2.  选择**按钮**组件，单击右侧配置设置面板的**高级**页签。
    
3.  打开**关联全局变量**模块下的**点击按钮时**开关。
    
4.  在**更新至变量**字段下选择全局变量**var\_1**。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1699062371/p877451.png)
    
5.  切换至**蓝图编辑器**，可以看到，全局变量与**按钮**组件是自动虚线连接，且展示了两个全局变量的引用关系。
    
    **说明**
    
    去掉全局变量的引用关系后，蓝图中的虚线会自动删除。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7179649761/p607724.png)
    
6.  在左侧导航栏中选择**图层节点**页签，将**通用标题**拖拽到蓝图中。
    
7.  可以看出全局变量**var\_2**与**通用标题**连接为实线。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7179649761/p607727.png)
    
    **说明**
    
    实线可以删除，虚线不可以删除。
    
8.  您可以添加**逻辑节点**和**逻辑组合**，对获取的数据做进一步处理。
    

## **过滤器引用**

**说明**

新版DataV服务中的`getCallbackValue`和`getLocalValue`的数据获取效果一样，为了兼容旧版DataV服务，保留了`getLocalValue`，建议您优先使用`getCallbackValue`。

1.  在**画布编辑器**页面，单击上方**搜索**框。输入**按钮**和**通用标题**，将两个组件添加到画布中。重复操作再次获取按钮和通用标题组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7179649761/p607721.png)
    
2.  单击**按钮**组件，分别修改两个按钮的组件名称为**getLocalValue获取按钮**和**getCallbackValue获取按钮**。
    
3.  单击**通用标题**组件，分别修改两个通用标题的组件名称为**通用标题-1**和**通用标题-2**。
    
4.  选择全局变量页签，新增两个全局变量，取名为**name**和**test**。并分别设置静态值。
    
    -   name变量
        
        ```
        [
          {
            "value": "获取到name变量啦。"
          }
        ]
        ```
        
    -   test变量
        
        ```
        [
          {
            "value": "获取到test变量啦。"
          }
        ]
        ```
        
5.  分别设置两个按钮的文字内容为**点击通过getLocalValue获取test**和**点击通过getCallBackValue获取name**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5380211861/p627526.png)
    
6.  单击页面左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5380211861/p627527.png)图标，进入蓝图编辑器。
    
7.  连接组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5380211861/p627528.png)
    
8.  添加过滤器，设置串行数据处理节点处理方法。
    
    -   getLocalValue
        
        ```
        return getLocalValue('test');
        ```
        
    -   getCallbackValue
        
        ```
        return getCallbackValue('name');
        ```
        
9.  单击页面右上角的**预览**，查看数据获取详情。![回到哦_Trim](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5380211861/p627539.png)
    

## **相关案例**

您可以参考以下案例了解更多全局变量能力：

-   [全局变量案例演示](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/example-of-using-global-variables)
    
-   [如何使用全局变量实现按日期查询](https://help.aliyun.com/zh/datav/datav-7/videos/how-to-use-global-variables-to-query-by-date)
    
-   [如何使用全局变量实现数据筛选](https://help.aliyun.com/zh/datav/datav-7/videos/how-to-use-global-variables-to-filter-data)
    
-   [如何使用全局变量实现数据分发和数据相加](https://help.aliyun.com/zh/datav/datav-7/videos/how-to-use-global-variables-to-distribute-data-and-sum-data)