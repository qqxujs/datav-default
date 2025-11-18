 

本文以**Tab列表**和**通用标题**组件为例，单击**Tab列表**中的某一列，将该列表项中的文本直接显示在**通用标题**组件上。

## **前提条件**

-   已登录DataV控制台
    
-   已进入画布编辑器
    

## 操作步骤

1.  在画布编辑器页面，搭建所需要的**Tab列表**和**通用标题**组件。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6343919661/p521418.png)
2.  切换到**蓝图编辑器**。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6343919661/p521420.png)
3.  在蓝图编辑器页面，将**图层节点**面板中的**Tab列表**和**通用标题**以及**逻辑节点**面板下的**串行****数据处理**节点拖至画布上。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0232680861/p624204.png)
4.  在**逻辑节点**面板中，将**条件判断**节点拖动到画布上并连线到**串行****数据处理**节点之前。
    
5.  选中**条件判断**节点，在右侧的**节点配置**面板中，配置**判断类型**和**条件列表**。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0232680861/p624208.png)
    
    上图中的示例触发判断条件如下。
    
    ```
    return data.id>1;
    ```
    
6.  以同样的方式，配置**串行****数据处理**节点（此步骤作用是将列表的数据格式转换成标题的数据格式）。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0232680861/p624210.png)
    
    上图中的示例转换格式的规则如下。
    
    ```
    return [
     {
       value:data.content
     }
    ];
    ```
    
7.  单击右上角的**预览**，在预览页面进行交互操作（例如单击列表某一格等），查看交互效果。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6343919661/p521436.png)
    
    如果需求中有多个组件需要配置交互链路，则重复以上几步直至满足全部交互需求。
    
8.  配置并预览成功后，单击左上角的**发布**图标（![发布图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2960888951/p66810.png)），即可在线展示具有交互功能的数据看板。