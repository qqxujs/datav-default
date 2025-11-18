 

本文以**单张图片**控制**多行文本**组件数据展示为例，实现标志墙LOGO的描述信息展示。

## **效果展示**![20230905_163947.gif](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7073093961/p715496.gif)

## 操作步骤

1.  登录[DataV控制台](https://datav.aliyun.com/v/console/)。
    
2.  选择任一数据看板，单击**编辑**，进入画布编辑器页面。
    
3.  添加1个**单张图片**组件和1个**多行文本**组件到画布中。
    
4.  在图层列表中全选组件，右键单击**成组**。
    
5.  重复上述操作，再添加1个同样的组，并重命名组件名称，确保两两不相同。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7073093961/p715488.png)
    
6.  分别单击2个**单张图片**组件，选择**数据源**页签，修改静态数据。
    
    -   单张图片-1
        
        ```
        //单张图片1
        [
          {
            "img": "",
            "url": "",
            "value": "阿里巴巴集团经营多项业务，另外也从关联公司的业务和服务中取得经营商业生态系统上的支援。业务和关联公司的业务包括：淘宝网、天猫、聚划算、全球速卖通、阿里巴巴国际交易市场、1688、阿里妈妈、阿里云、蚂蚁金服、菜鸟网络等。"
          }
        ]
        ```
        
    -   单张图片-2
        
        ```
        //单张图片2
        [
          {
            "img": "",
            "url": "",
            "value": "腾讯于1998年11月成立,是一家互联网公司,通过技术丰富互联网用户的生活,助力企业数字化升级。我们的使命是“用户为本 科技向善”。"
          }
        ]
        ```
        
7.  全选所有的**多行文本**组件，选择**数据源**页签，打开**受控模式**开关，并全部隐藏。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0768983961/p715362.png)
    
8.  单击![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0768983961/p715363.png)图标，切换至蓝图编辑器。
    
9.  将图层节点中的**单张图片-1**和**多行文本-1**添加到蓝图画布中。
    
10.  单击**逻辑节点**，添加1个**序列执行**节点到蓝图画布中。
     
11.  连接组件。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0768983961/p715367.png)
     
12.  重复步骤9~步骤11，完成另一个单张图片的连线，并全部编组展示。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6073093961/p715494.png)
     
13.  配置所有序列执行节点处理方法。
     
     -   导入
         
         ```
         return [{
           "value": data.value
         }]
         ```
         
     -   显示
         
         ```
         return {
           "animationType": "",
           "animationDuration": 1000,
           "animationEasing": ""
         }
         ```
         
14.  单击页面右上角的**预览**图标，预览展示结果。![20230905_163947.gif](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7073093961/p715495.gif)