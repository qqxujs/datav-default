<!DOCTYPE html> 

本文档示例为开发者的自定义组件提供功能开发的参考，主要介绍三个蓝图编辑器内容的实现方法：**事件触发**、**导入数据接口**、**添加交互动作**。

## 前提条件

本文需要操作使用桌面版开发工具，详情请参见开发工具使用说明中的[桌面版开发工具使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/instructions-of-desktop-developer-tool#task-2378897)。

## 背景信息

本文档适用用户在开发自定义组件的时候，为了使得自定义组件能同样使用DataV中蓝图编辑器的功能，需要使用与蓝图编辑器一致的规则开发自定义组件。在使用开发者工具创建完成组件后，本地的组件包文件夹下会生成`index.js`文件和`package.json`文件，本文需要在这两个文件中修改内容来操作实现。

## 事件触发

在自定义组件中实现蓝图编辑器中事件触发功能，以数字翻牌器组件的**当前值变化**事件为例。![事件触发案例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0313948261/p280987.jpg)

1. 在使用开发者工具创建完成组件后，打开`package.json`文件。
2. 在`package.json`文件中搜索datav字段下的`events`字段。

**说明**  
每一个蓝图编辑器中的事件必须要和自定义组件中`events`字段中定义的事件保持一致，否则编辑器无法识别。
3. 在当前events字段中定义事件，自定义修改`event-name`事件名下的描述和value字段名下的描述。![事件触发文件内容修改](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2761888951/p56917.png)

**说明**  
事件名和字段名都可自定义多个，自定义设置越多，蓝图编辑器节点页面显示事件越多。
4. 打开`index.js`文件，设置代码中的emit的事件名。  
```  
this.emit('event-name', obj);  
```

**说明**  
emit中的事件名要和`package.json`文件中的事件名保持一致，传递参数必须是**object**类型，可以传递多个字段。

## 导入数据接口

在自定义组件中实现蓝图编辑器中**导入数据接口**动作，以数字翻牌器组件的**导入数据接口**动作为例。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1839132861/p636741.png)

1. 在使用开发者工具创建完成组件后，打开`index.js`文件。
2. 在`index.js`文件中搜索datav字段下的`render`字段。
3. 在当前`render`字段中自定义设置**导入数据接口**动作代码逻辑。![导入数据接口代码逻辑](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2761888951/p56934.png)

**说明**  
动作逻辑都可自定义多个，自定义设置越多，蓝图编辑器节点页面显示动作越多。

## 添加交互动作

在自定义组件中实现蓝图编辑器中多个交互动作，以数字翻牌器组件的**显示**和**隐藏**动作为例。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1839132861/p636745.png)

1. 在使用开发者工具创建完成组件后，打开`package.json`文件。
2. 在`package.json`文件中搜索datav字段下的`publicHandler`字段。
3. 在当前`publicHandler`字段中自定义设置**显示**和**隐藏**的描述，但是需要与`index.js`文件中的方法名保持一致。![ 隐藏显示动作自定义](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3761888951/p57069.png)

**说明**  
动作逻辑都可自定义多个，自定义设置越多，蓝图编辑器节点页面显示动作越多。
4. 打开`index.js`文件，设置代码中的`container`的内容。![显示隐藏动作字段名](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3761888951/p57070.png)

**说明**  
`container`中的字段名要和`package.json`文件中的字段名保持一致。  
```  
this.container.show(); //显示代码，开发者自定义  
this.container.hide(); //隐藏代码，开发者自定义  
```