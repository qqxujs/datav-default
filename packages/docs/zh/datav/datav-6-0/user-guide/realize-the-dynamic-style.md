  使用蓝图编辑器实现Tab列表控制数字翻牌器动态样式-DataV数据可视化-阿里云

本文以**Tab列表**控制**数字翻牌器**组件样式更新为例，实现组件样式的动态变化。

## **效果展示**

![动态样式2_Trim](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2201791861/p634398.png)

## **操作步骤**

1.  登录[DataV控制台](https://datav.aliyun.com/)。
2.  选择任一可视化应用，单击编辑，进入画布编辑器页面。
    
3.  添加**Tab列表**组件和**数字翻牌器**组件到画布中。
    
4.  选择**Tab列表**组件，单击**数据**面板中的**配置数据源**中的静态数据源内容，修改数据内容为两条。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1201791861/p634402.png)
    
5.  单击**配置**面板，修改**标题**为`根据value修改数字颜色`。
    
6.  在图层面板，全选所有组件，右键单击导出到蓝图编辑器。
    
7.  连接组件，修改串行数据处理节点处理方法名称。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1201791861/p634405.png)
    
8.  配置串行数据处理节点处理方法。
    
    -   更新翻牌器value值
        
        ```
        return [{value: data.id == 1 ? 30 : 50}];
        ```
        
    -   配置数字颜色
        
        1.  返回画布编辑器页面。单击**数字翻牌器**组件，在右侧的**配置**面板中，单击下方的**复制配置到剪贴板**。
            
        2.  将复制的内容粘贴到任意的代码编辑器中，观察数据层级关系，并找到需要更新的配置字段。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1201791861/p634410.png)
            
        3.  根据上图的数据结构，编写要传入数字翻牌器的样式配置脚本。
            
            ```
            return data[0].value - 40 >= 0 ? {
              "counter": {
                "numbers": {
                  "textStyle": {
                    "color": {
                      "type":"flat",
                      "value":"red"//将要修改的数据颜色
                    }
                  }
                }
              }
            } : {
                "counter": {
                  "numbers": {
                    "textStyle": {
                      "color": {
                      "type":"flat",
                      "value":"rgb(10,115,255)"//初始颜色
                    }
                      
                    }
                  }
                }
              }
            ```
            
9.  单击页面右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1201791861/p634736.png)图标，预览展示结果。![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1201791861/p634741.png)