  使用回调ID实现组件联动-DataV数据可视化-阿里云

本文介绍在DataV控制台中单击某一个组件，通过配置组件的回调ID来实现另一个组件联动。

## 什么是回调ID

回调ID可以理解为参数变量，用于控制组件之间参数的传递，从而达到交互的目的。例如下图中的数字翻牌器组件，当点击翻牌器时，将当前值通过`income`字段传递给其他组件显示。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6250032861/p636257.png)

## 如何设置回调ID

1.  登录[DataV控制台](https://datav.aliyun.com/)。
2.  在**我的可视化**页面，单击您创建的可视化应用项目上方的**编辑**按钮。
3.  选择**数字翻牌器**组件，单击编辑器画布右侧的**交互**页签。
    
4.  选中数字变化响应事件右侧的**启用**。
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6250032861/p636258.png)
5.  修改**绑定到变量**中的变量名称，将`value`修改为`income`。
    
    配置完成后，其他组件就可以使用_income_取得对应的参数值了。
    

## 如何使用回调ID

1.  选择另一个数字翻牌器组件，单击**数据**页签。
    
2.  单击**配置数据源**，设置数据源类型为**数据库**。
    
3.  在SQL输入框中输入`select :income as value`。
    
4.  单击页面右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6250032861/p636260.png)图标，预览展示结果。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6250032861/p636261.png)
    
5.  当单击上方的数字翻牌器后，下方的数值和上方一致，从而实现使用回调ID获取数据。![回调ID_Trim](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5250032861/p636269.png)
    

## 常见问题

Q：在画布编辑页面，配置了回调ID后，无法获取回调值，导致数据查询失败怎么办？

A：画布编辑页面无法触发事件获取回调值，导致请求失败。您可以选择以下两种方式，查看请求的返回值：

-   预览页面查看。在浏览器控制台Network中查看请求的返回值，或者直接通过组件显示方式查看。
    
-   编辑页面查看。在可视化应用URL后添加测试参数来测试数据，添加方式如下。
    
    ```
    https://datav.aliyun.com/admin/screen/99999?参数名=参数值
    ```