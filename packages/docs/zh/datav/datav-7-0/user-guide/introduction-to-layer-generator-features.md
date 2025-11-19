<!DOCTYPE html> 

层级生成器是一款用于生成自定义下钻区域树形结构数据的小工具，本文介绍层级生成器的详细功能。

## 进入层级生成器

单击[DataV.GeoAtlas地理小工具系列](https://datav.aliyun.com/portal/school/atlas/level%5Fgenerator)，打开**层级生成器**工具页面。

## 界面概述

层级生成器界面主要分成两大主要功能面板，分别为地图面板和层级树面板。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2912990571/p965509.png)

* 页面左侧的[地图面板](#title-w5o-zo9-dt6)用于展示和浏览层级数据内容，其交互逻辑与范围选择器保持统一。
* 页面右侧的[层级树面板](#title-zv3-e06-0sl)支持查看示例、绑定数据、导入和导出层级等功能操作。

## **快速入门**

层级生成器自带一个简单的示例，展示了江浙沪的行政区下钻层级样式。

![2025-06-12_10-20-35](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2912990571/p967197.gif)

**示例操作介绍**：

1. 单击层级树面板右上角的**不会用？点我查看示例**，添加**江浙沪包邮区**数据到面板中。
2. 单击面板内的节点标题，即可在左侧地图面板中定位对应区域。

**说明**  
每个节点右侧都提供绑定/解绑地理数据、重命名等[功能操作](#d9bcf1430ahxf)。
3. 在左侧地图面板中，单击行政区域可下钻查看下级区域，单击区域外侧可返回上级视图，鼠标悬停时会显示该区域标题及联动样式。

**说明**  
层级生成器的地图面板操作逻辑和范围选择器的逻辑基本一致。

## **面板功能介绍**

### **地图面板**

|    **功能**    |    **说明**    |
|    ----    |    ----    |
|    查看层级地理数据样式    |    地图面板中，以黑色粗实线描边样式表示选中节点；以浅色虚线表示选中节点内的子节点。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2912990571/p965518.png)    |
|    层级下钻与上钻    |    单击子区域即可下钻，单击下钻区域外的空白区域即可返回上一级视图。    |

### **层级树面板**

|    **功能**    |    **说明**    |
|    ----    |    ----    |
|    查看示例    |    单击层级树面板右上角的**不会用？点我查看示例**，即可在面板中增加**江浙沪包邮区**层级树下钻示例内容，示例数据中包含了江浙沪的行政区域层级，具体到区县级。单击**重置**恢复默认空节点。![{2F6C1379-657E-4BB7-AD0F-2D725518B4BB}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2912990571/p965543.png)**说明** 示例层级数据支持直接导出到本地。    |
|    层级树节点    |    在层级树面板中，每一行即为一个层级节点，每一个节点内有5种节点信息，包括标题、treeID、地理数据、子节点和父节点。**说明** 标题、地理数据、子节点和父节点这四个信息，可由您自定义配置修改，treeID不支持手动更改，由层级面板进行自动计算得到。    |
|    解绑与绑定数据    |    **解绑地理信息**：当节点右侧显示小绿点和解绑数据符号，表示当前节点具有地理信息，您可以单击![解绑图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9302590561/p433552.jpg)图标，在弹窗中单击**确认**解绑当前节点下的地理信息。**绑定地理信息**：当节点右侧显示小红点和绑定数据符号，表示当前节点内没有地理信息，您可以单击![绑定数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9302590561/p433560.jpg)图标，在弹窗中选择**行政区数据集**或**自定义数据**两种类型的地理数据。**行政区数据集**：选择该类型，您可以在下拉框内，自定义输入或选择系统内置的某个行政区域，并选择是否**同时添加所有下游节点**，单击**确认**完成数据绑定。**自定义数据**：选择该类型，您可以自定义上传已有的GeoJSON文件，单击**确认**完成数据绑定。    |
|    重命名节点    |    单击节点右侧的![重命名](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9302590561/p433572.jpg)图标，自定义输入节点的名称。    |
|    批量导入子节点    |    单击节点右侧的 ![{7BA830BD-8E89-4DEC-AF09-47CD2EB9A590}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2912990571/p965557.png) 图标，批量导入GeoJSON格式的子节点数据。    |
|    新增子节点    |    单击节点右侧的![新增子节点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9302590561/p433575.jpg)图标，在当前节点的下级新增一个子节点。    |
|    删除节点    |    单击节点右侧的![删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9302590561/p433578.jpg)图标，删除当前节点。**重要** 删除父节点后，所属的子节点也会同步删除，根节点不支持删除。    |
|    更改节点层级    |    选中节点后拖动节点可调整其在面板中的层级位置。    |
|    导入层级    |    单击层级树面板下方的**导入层级（JSON）**按钮，选择本地的层级数据文件（支持TopoJSON格式）。    |
|    导出层级（DataV专有）    |    单击层级树面板下方的**导出层级（DataV专有）**按钮，导出**层级数据文件**和**层级映射**文件：层级数据文件内的地理字段有压缩，支持在DataV的组件（如基础平面地图等组件）中使用；层级映射文件内记录了节点 ID 、节点名称、父节点的映射关系列表。    |
|    导出层级（开放格式）    |    单击层级树面板下方的**导出层级（开放格式）**按钮，导出**层级数据文件**和**层级映射**的文件，[数据结构](#section-9by-umc-om8)未经过压缩，可以在外部直接使用。    |

## **操作案例**

本案例通过京津冀地区层级下钻数据，完整演示制作流程：首先在边界生成器中获取区域边界数据，随后在数据编辑器中进行数据整合，再将处理好的数据绑定至层级生成器完成层级构建，最终导出为DataV专有格式文件，并将生成的层级结构数据应用于基础平面地图4.0组件的自定义区域下钻层子组件。

### **自定义生成数据**

1. 单击[DataV.GeoAtlas地理小工具系列](https://datav.aliyun.com/portal/school/atlas/level%5Fgenerator)，打开**层级生成器**页面。
2. 在页面右侧的层级树面板中，单击默认**根区域**节点右侧的重命名图标，修改标题名为**京津冀区域**。
3. 单击**京津冀区域**节点右侧的新增子节点图标，依次绑定**北京市**、**天津市**和**河北省**三个行政区域的地理数据集，同时添加该区域内的所有下游节点，完成创建一份树状层级结构。
4. 单击页面左上角的**范围选择器**，进入范围选择器页面，在范围选择器分别下载京、津和冀三个行政区域数据，下载的数据不包含子区域数据，操作如下。![2025-06-09_17-22-37](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2912990571/p965657.gif)
5. 单击页面上方的**数据编辑器**，进入页面，在数据编辑器中上传并合并京津冀三个行政区域的数据，完成配置后单击地图面板右侧的**导出GeoJSON**，下载合并后的完整数据。操作如下。![2025-06-09_17-32-18](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2912990571/p965671.gif)
6. 单击页面上方的**层级生成器**，进入层级生成器页面内，在**京津冀区域**根节点处单击![绑定数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9302590561/p433560.jpg)图标选择自定义数据，上传下载好的京津冀数据，单击**确认**完成数据绑定。
7. 单击层级树面板下方的**导出层级（DataV专有）**，导出该层级结构数据文件到本地，并将生成的两个文件上传到您的服务器或者OSS上，生成两个新的API；您也可以直接使用系统提供的示例API完成DataV组件使用数据的案例配置。

### **DataV组件使用数据**

将自制的京津翼地区的层级下钻数据，配置到DataV组件中使用，以**基础平面地图4.0**组件为例。

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面，选择任一**数据看板**，单击**编辑**，进入画布编辑器页面。

**说明**  
如果**工作台**页面中没有数据看板，请先[创建一个数据看板](/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)。
3. 单击左侧导航栏的**组件库**，进入组件管理页面。
4. 单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1661947571/p1005801.png)图标，进入地图组件列表。
5. 单击**基础平面地图4.0**组件，并在组件配置面板中，新增一个**自定义区域下钻层**子组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1661947571/p1005805.png)
6. 选中**自定义区域下钻层**组件，单击页面右侧的数据源面板，将**数据源类型**选择为**API**，在下方URL编辑框内，将提取到的JSON API粘贴到数据输入框内。可以查看到数据响应结果。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2912990571/p965699.png)  
示例API链接如下。  
```  
https://vis-data-server.oss-cn-hangzhou.aliyuncs.com/TiNqZkTkH1IeUOGTiMC6WgHY6TtG72.json  
```
7. 选择**自定义topojson数据接口**，将**数据源类型**选择为**API**，在下方URL编辑框内，将提取到的JSON API粘贴到数据输入框内。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2912990571/p965695.png)  
示例API链接如下。  
```  
https://vis-data-server.oss-cn-hangzhou.aliyuncs.com/Aj6uSgiyi23D4rMSBEMGRfaIn1W1Jn.json  
```
8. **自定义区域下钻层**子组件数据接口配置完成后，即可在画布编辑器的地图组件中查看到京津冀区域的层级下钻样式，双击行政区域即可下钻，效果如下图所示。![2025-06-09_17-59-05](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2912990571/p965700.gif)

## 下钻数据结构定义

如您想在外部使用层级数据，可以参考下图数据的规范并了解字段的含义。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2912990571/p967329.png)

上图中是一组JSON数据，根节点中包含一个`version`字段，其他字段都是层级节点的通用字段。对于每一个层级节点而言，其字段的含义如下。

|    **字段**    |    **说明**    |
|    ----    |    ----    |
|    parent    |    父节点的treeID。    |
|    treeID    |    节点的ID，显示为"x-x-x"结构，如“1-2-3”表示根节点的第二个子节点的第三个子节点。    |
|    name    |    节点的名字。    |
|    treeName    |    节点的名字和ID。    |
|    payload    |    payload字段为地理数据字段，对于开放格式而言，即为TopoJSON，如果您是开发人员，则可以利用[topojson-client](https://www.npmjs.com/package/topojson-client)，将TopoJSON转为GeoJSON。    |
|    children    |    子节点数据的集合。    |