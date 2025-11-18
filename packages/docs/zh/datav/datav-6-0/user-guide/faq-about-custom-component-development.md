  自定义组件全流程FAQ-DataV数据可视化-阿里云

## 哪里有组件的案例？

命令行安装datav-cli，使用datav init命令下载安装模版组件，详情请参见[安装DataV开发工具套件](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/getting-started-for-developers#concept-k5c-j1l-q2b "本文介绍使用DataV开发工具完成组件开发的方法。")。

## 为什么我的组件发布不成功？

组件发布不成功有以下两种原因，您可针对自身情况进行处理：

-   组件没有发布权限。
    
    组件名（package.json中的name字段）前未加组件包名，无法发布组件，正确组件名格式为`@namespace/xxx`（@组件包英文名/组件名）。
    
-   组件审核未通过或正在审核中。
    
    若您的组件长时间未审核通过，请联系阿里云技术支持。
    

## 如何写数据事件，触发事件让别的组件监听？

1.  package.json中`datav`字段下按正确格式定义好`events`事件名。
2.  在index.js中使用`this.emit(event_name,value)`方法发送事件名及参数。
    
    **说明** 参数value必须为一个对象，而不是基础类型值。
    
3.  其他的组件在数据页使用冒号加参数名，即可调用该参数对应的数据。

## 如何写一个ECharts组件？

详情请参见[ECharts组件封装指南](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/echarts-component-packaging-guide#concept-fdp-2yl-q2b)。

## 为什么本地的图片上传后不成功？

若需要将本地静态文件作为资源路径，需在组件根目录下新建resources文件夹，将图片等资源放至该目录下，调用路径，例如./resources/xxx.png。

## 为什么我的程序报找不到各种包？

如果执行npm install命令后仍有报错，可将datav-cli工具彻底删除后，重新安装。

## 为什么我的组件包还没审核通过？

如果您的组件长时间没有审核通过，请联系阿里云技术支持。

## 为什么我的组件突然没有发布权限？

如果您使用的是DataV开发者体验版，并且在两个月内未上传任何组件或教程，您的权限会被收回，请重新申请权限或联系阿里云技术支持。

## 为什么我的组件在本地使用正常，在产品中使用时报错？

可能有以下几方面原因：

-   组件不支持`data`为`null`。
-   组件代码修改了jquery，例如重新赋值jquery。
-   组件代码修改了window对象。
-   当添加多个组件时修改配置不生效，需检查组件代码是否有CSS文件。
-   操作了容器外的DOM结构。
-   使用jquery操作DOM结构时，禁止`$(‘.classname’)`，必须从container容器中查找。

## 为什么在编辑页中找不到我的组件？

您可以在顶部导航栏的我的组件页面下查看您的组件。

## 为什么我的组件被购买后，购买者无法找到？

因为组件分类的设置不对，详情请参见[type字段](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/specifications-of-a-package-json-file-1#concept-yhh-qcl-q2b "package.json文件是组件的配置文件。本文档介绍package.json文件的字段详情，您可以参考本文档的字段说明，根据自身需求，灵活修改package.json文件，自定义组件样式。")。

## 桌面版开发工具登录时，使用什么用户名？

DataV控制台右上角显示的阿里云账号用户名，详情请参见[桌面版开发工具使用说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/instructions-of-desktop-developer-tool#task-2378897 "本文介绍桌面版开发工具的使用方法，包括下载和安装、登录、工作区管理和组件管理，帮助您快速使用桌面版开发工具开发组件，并进行发布。")。