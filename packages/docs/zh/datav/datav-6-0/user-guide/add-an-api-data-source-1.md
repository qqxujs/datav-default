<!DOCTYPE html> 

本文档介绍在DataV中添加API数据源的方法，以及相关参数配置说明。API指通用的数据接口，如果您已有可用的API接口，可在DataV中使用自己的API数据源连接。 

## 前提条件

已准备好待添加的API数据源。

## 操作步骤

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在我的可视化页面中，将鼠标移动至需要编辑的可视化应用上，单击编辑。

**重要** 如果您的我的可视化页面内还没有创建任何可视化应用，请参见[使用模板创建PC端可视化应用](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-a-template-to-create-a-pc-side-visual-application#task-2354861)，创建一个可视化应用。
3. 在画布编辑页面，单击画布中的某一组件。  
如果画布中还没有组件，请先添加组件，详情请参见[添加资产](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/add-a-widget-1/#task-2375434)。
4. 在画布右侧的组件配置面板中选择数据，并单击配置数据源。  
![配置数据源](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6028370261/p65745.png)
5. 在设置数据源页面中，选择数据源类型为API。  
![设置API数据源页面](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3112567951/p130327.png)
6. 在下方请求方式列表中选择一种请求方式，可选择GET和POST这两种请求方式，具体这两种请求方式的解释说明，请参见[常用的请求方式](https://developer.aliyun.com/article/89289?spm=a2c6h.14164896.0.0.58601967lZKOcf)。
7. 在下方URL编辑框中，填写需要请求的接口URL路径。
8. 根据您在请求方式内选择的不同请求方式，可在下方Header (Optional)和POST 请求参数中填写相应的请求函数值。  
![post](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5833276861/p682903.png)
9. 单击预览数据源返回结果，查看数据源的返回结果样式。