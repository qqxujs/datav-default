<!DOCTYPE html> 

本文以**Tab列表**控制**数字翻牌器**组件样式更新为例，实现组件样式的动态变化。

## **效果展示**![yan_Trim.gif](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5810710961/p696709.gif)

## **操作步骤**

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 选择任一数据看板，单击**编辑**，进入画布编辑器页面。
3. 添加**Tab列表**组件和**数字翻牌器**组件到画布中。
4. 选择**Tab列表**组件，单击**数据源**面板，修改数据内容。  
```  
[  
  {  
    "id": 1,  
    "content": "TAB1"  
  },  
  {  
    "id": 2,  
    "content": "TAB2"  
  }  
]  
```
5. 选择**数字翻牌器**组件，单击**样式**面板，修改**标题内容**为`根据value修改数字颜色`。
6. 单击画布编辑页面左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7680108571/p1007255.png)图标，切换到蓝图编辑器。
7. 将图层节点添加到蓝图主画布中。
8. 单击**逻辑节点**，添加2个串行数据处理节点到蓝图主画布中。
9. 连接组件，为串行数据处理节点增加说明。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9829420961/p696711.png)
10. 配置串行数据处理节点处理方法。

  * 更新翻牌器value值  
  ```  
  return [{value: data.id == 1 ? 30 : 50}];  
  ```
  * 配置数字颜色

    1. 返回画布编辑器页面。单击**数字翻牌器**组件，在右侧的**样式**面板中，单击下方的**复制配置到剪贴板**。
    2. 将复制的内容粘贴到任意的代码编辑器中，观察数据层级关系，并找到需要更新的配置字段。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1201791861/p634410.png)
    3. 根据上图的数据结构，编写要传入数字翻牌器的样式配置脚本。  
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
11. 单击页面右上角的**预览**图标，预览展示结果。![yan_Trim.gif](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5810710961/p696707.gif)