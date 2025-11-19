<!DOCTYPE html> 

您可通过智能主题一键更换数据看板组件的图表颜色，并设置图表文字的字体、文字大小等样式。DataV-Board 7.0提供了内置的主题色彩，您也可按需上传自定义主题使用。本文为您介绍智能主题的相关配置操作。

## **前提条件**

1. 已创建数据看板，支持[使用模板创建](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)、[使用空白画布创建](https://help.aliyun.com/zh/datav/datav-7-0/getting-started/use-a-canvas-to-create-a-dashboard#639c36877c6jr)、[使用AI智能生成](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-ai-to-intelligently-generate-pc-side-kanban)。
2. 已启用智能主题。  
您需进入数据看板的画布编辑页面，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2819700371/p862772.png)图标或**快速开启**，启用智能主题，步骤如下。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2819700371/p862767.png)

## **进入主题配置页面**

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台** \> **全部应用** \> **数据看板**单击目标看板，进入看板的画布编辑页面。
3. 在顶部菜单栏单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2819700371/p862900.png)图标，进入智能主题配置页面。  
在该页面，您可配置数据看板组件的[主题配色](#section-qmk-ckr-enm)，也可配置组件[文字样式](#f059156079qzm)，例如字体、文字大小等。

## 配置及管理主题

**说明** 
* 部分组件不支持主题功能，具体请以实际界面显示为准。
* 配置的主题将同步应用至组件样式及数据看板背景。

您可在**智能主题** \> **图表颜色**页签，配置数据看板的主题色彩，支持使用系统主题及自定义主题；也可执行主题的编辑、删除等管理操作。

### **使用系统主题**

系统提供了多种内置主题配色，您可直接使用。鼠标悬停至指定色块即可查看当前色块的色值，方便您确定具体配色。 

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2819700371/p862842.png)

### **使用自定义主题**

单击**自定义主题**，即可按照界面指引上传所需的风格图片，系统会根据您的图片智能生成多个主题配色。

**说明** 

目前仅支持`JPEG`、`JPG`和`PNG`格式的图片文件。

* 单击某个色块，拖动该色块在图片中对应的取色圈，即可调整色块的颜色。
* 单击**替换图片**，可重新选择图片生成新的自定义主题样式。

配置、保存及应用主题的操作步骤如下。保存后，该主题将会存放至**已保存主题**目录。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2819700371/p862845.png)

### **管理主题**

在**已保存主题**目录下，单击指定主题，可按需修改主题的名称、配色，或删除主题。

**说明** 

不支持编辑、删除系统主题。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2819700371/p862862.png)

|    **序号**    |    **操作描述**    |
|    ----    |    ----    |
|    1    |    自定义当前主题方案的名称。    |
|    2    |    删除选中主题。 **重要** 主题删除后不可恢复，请谨慎操作。    |
|    3    |    单击指定色块，可在颜色选择框选择所需颜色，更改色块色值。    |

## **其他设置**

可批量设置数据看板组件的图表文字样式。包括字体样式、文字粗细、文字大小及文字颜色（暗色和亮色），还可根据看板情况设置图表复杂度，包括简单、通用和详细。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2819700371/p862926.png)

* [字体样式](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/font-library)：单击图表字体的下拉框，即可选择或搜索所需文字样式。

**说明**  
若选择未安装的字体，则组件文本会自动转换为系统默认的字体样式。
* 图表复杂度：即图表中文字说明的详细程度，示例如下。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2819700371/p862937.png)

## **后续步骤**

主题配置完成后，您可[预览并发布数据看板](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/manage-a-data-dashboard)，在线展示数据看板的主题效果。