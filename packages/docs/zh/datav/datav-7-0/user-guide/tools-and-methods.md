<!DOCTYPE html> 

本文介绍在蓝图编辑器中，配置工具方法类节点的方法。目前工具方法内的逻辑节点只包括导航。

## 导航节点

**导航**节点，可用于实现页面跳转的功能，支持新开浏览器标签页跳转或在当前标签页内跳转，并支持页面跳转时带入自定义参数。

使用场景：**导航**节点在跳转新页面时使用较多。例如以下场景，单击地图上的一个区域，即可跳转到已配置的区域下级页面内。当单击地图区域时，可通过**数据处理**节点得到当前区域的adcode字段值，返回参数数据为`return {adcode: data.area_id};`，然后在**导航节点**的配置面板中，设置好下级跳转页面链接地址为`https://www.other-page.com`，同时自定义带入的参数变量名adcode，最后将串行数据处理返回的结果输入**导航**节点的**打开页面**即可。

添加**导航**节点至蓝图画布中，可查看**导航**节点支持的事件或动作，以及配置参数。添加方式请参见[使用逻辑节点](/zh/datav/overview-of-logical-node-configurations#section-5b3-w0u-ud7)。

### **节点配置面板**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0712380761/p533742.png)

#### **配置项说明**

|    **参数**    |    **说明**    |
|    ----    |    ----    |
|    **链接地址**    |    目标跳转页面的链接地址。包括**固定值**和**动态值**。    |
|    **新开页面**    |    打开开关，新开一个网页页面打开跳转链接地址；关闭开关，在原有网页页面打开跳转链接地址。    |
|    **请求参数**    |    跳转页面时可自定义请求参数的**参数名**和**参数值**内容。单击右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5072919661/p521580.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5072919661/p521581.png)图标，添加或删除一个请求参数。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5072919661/p521582.png)或![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5072919661/p521583.png)图标配置多个请求参数的排列样式。单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5072919661/p521584.png)图标，即可复制当前选中请求参数配置内容并新增一个同样配置的请求参数。    |

### **锚点配置面板**

#### ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3122680861/p624371.png)**动作参数说明**

|    **动作**    |    **说明**    |
|    ----    |    ----    |
|    **打开页面**    |    输入上游节点的输出结果，用于打开页面。    |