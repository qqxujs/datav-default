  使用层级生成器生成自定义下钻区域树形结构数据-DataV数据可视化-阿里云

层级生成器是一款用于生成自定义下钻区域树形结构数据的小工具，本文介绍层级生成器的详细功能。

## 进入层级生成器

单击[DataV.GeoAtlas地理小工具系列](https://datav.aliyun.com/portal/school/atlas/level_generator)，选择****层级生成器****页签，即可打开****层级生成器****工具页面。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3089757761/p574603.png)

## 层级生成器界面

层级生成器界面主要分成两大功能面板，分别为地图面板和层级树面板。![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3089757761/p574605.jpg)

-   ****地图面板****：地图面板负责层级数据内容在地图展示浏览，其操作逻辑与范围选择器保持一致，详细功能说明请参见[地图面板功能详解](#section-bqe-yfh-nuf)。
    
-   ****层级树面板****：您可以在层级树面板中进行查看示例、上传层级和导出层级等功能操作，详情功能说明请参见[层级树面板功能详解](#section-fgj-tld-qb1)。
    

### **地图面板功能详解**

**功能**

**说明**

查看层级地理数据样式

地图面板中，以蓝色粗实线描边样式表示选中节点；以浅白色填充且淡蓝色虚线绘制选中节点内的子节点。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3089757761/p574608.png)

层级下钻与上钻

单击子区域即可下钻，单击下钻区域外侧即可上钻返回到上一级。

**说明**

下钻操作逻辑与范围选择器保持一致。

### **层级树面板功能详解**

**功能**

**说明**

查看示例

单击层级树面板右上角的****不会用？点我查看示例****处，即可在面板中增加****江浙沪包邮区****层级树下钻示例内容，示例数据中包含了江浙沪的行政区域层级，具体到区县级。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3089757761/p574612.png)

**说明**

您可以直接将该示例层级数据导出下载到本地。

导入层级.json

单击层级树面板下方的****导入层级.json****按键，您可以在本地电脑内选择一个保存完整的层级数据文件，层级文件支持DataV专有格式和开放格式两种。

导出层级（DataV专有）

单击层级树面板下方的****导出层级（DataV专有）****按键，您可以导出层级数据（level.json）文件，文件内的地理字段有压缩，能在DataV的组件（如基础平面地图等组件）中使用。导出的文件中还包含一份名为（层级映射.json）的文件，该文件内会记录每个节点的映射信息。

导出层级（开放格式）

单击层级树面板下方的****导出层级（开放格式）****按键，您可以导出层级数据（level.json）文件和（层级映射.json）的文件，文件内的地理字段未经压缩，具体地理字段说明请参见[下钻数据结构定义](#section-9by-umc-om8)。

层级树节点

在层级树面板中，每一行即为一个层级节点，每一个节点内有5种节点信息，包括标题、treeID、地理数据、子节点和父节点。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3089757761/p574609.png)

**说明**

标题、地理数据、子节点和父节点这四个信息，可由您自定义配置修改，只有treeID不可手动更改，由层级面板进行自动计算得到。

解绑与绑定地理信息

-   解绑地理信息：当节点右侧显示小绿点和解绑数据符号，表示当前节点具有地理信息，您可以单击![解绑图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9302590561/p433552.jpg)图标，在弹窗的二次确认解绑数据对话框中，单击****确认****即可解绑当前节点下的地理信息。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3089757761/p574616.png)
    
-   绑定地理信息：当节点右侧显示小红点和绑定数据符号，表示当前节点内没有地理信息，您可以单击![绑定数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9302590561/p433560.jpg)图标，在弹窗的****绑定数据****对话框中，您可以选择****行政区数据集****或****自定义数据****两种类型的地理数据。
    
    -   ****行政区数据集****：选择该类型，您可以在下方下拉框内，自定义输入并选择系统内置的某个行政区域，并自定义选择是否选中下方的****同时添加所有下游节点****，单击对话框右下角****确认****即可绑定一个行政区域地理数据。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3089757761/p574618.png)
        
    -   ****自定义数据****：选择该类型，您可以单击下方****上传geojson文件****按键，自定义从本地电脑中上传已有的geojson文件，单击对话框右下角****确认****即可绑定一个自定义地理数据。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3089757761/p574619.png)
        

重命名节点

单击节点右侧的![重命名](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9302590561/p433572.jpg)图标，即可自定义输入修改节点的名称。

批量导入子节点

单击节点右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3089757761/p574620.png)图标，即可为当前节点批量导入子节点。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3089757761/p574623.png)

新增子节点

单击节点右侧的![新增子节点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9302590561/p433575.jpg)图标，即可在当前节点的下级新增一个子节点。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3089757761/p574624.png)

删除节点

单击节点右侧的![删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9302590561/p433578.jpg)图标，即可删除当前节点。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3089757761/p574626.png)

更改节点层级

您可以单击某个节点并拖动该节点，通过将节点在面板内上下移动，调整该节点在面板中的层级位置。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3089757761/p574628.png)

## 层级操作示例

层级生成器自带一个简单的示例，展示了江浙沪的行政区下钻层级样式。![2月28日 (3)](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3089757761/p574653.gif)

浏览示例操作示范：

1.  单击层级树面板工具条右上角的****不会用？点我查看示例****，即可添加****江浙沪包邮****区例子到面板中。
    
2.  单击面板内的节点标题，即可在左侧地图面板中定位展示选中节点行政区域。
    
    **说明**
    
    每个节点标题右侧有几个功能按键，分别是绑定和解绑地理数据、重命名标题、新增子节点和删除子节点，详情请参见[层级树面板功能详解](#section-fgj-tld-qb1)。
    
3.  单击左侧地图面板内的层级行政区域，单击区域即可下钻，单击区域外侧即可返回上一层上钻，当鼠标悬浮在某个行政区域时，会提示该区域的标题进行联动样式展示。
    
    **说明**
    
    层级生成器的地图面板操作逻辑和范围选择器的逻辑基本一致。
    

## 下钻数据结构定义

下图所示的下钻层级数据将会应用在DataV产品的组件中，如您想在外部使用层级数据则可以参考下图数据的规范并了解字段的含义。![示例图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9302590561/p433589.jpg)

上图中数据是一份JSON，根节点中包含一个version字段，其他字段都是层级节点的通用字段。对于每一个层级节点而言，其字段的含义如下。

表 1. 层级字段说明

**字段**

**说明**

parent

父节点的treeID。

treeID

节点的ID，显示为"x-x-x"结构，如“1-2-3”表示根节点的第二个子节点的第三个子节点。

name

节点的名字。

treeName

节点的名字加ID。

payload

节点地理数据的TopoJSON，payload字段为地理数据字段，对于开放格式而言，即为TopoJSON，如果您是开发人员，则可以利用[topojson-client](https://www.npmjs.com/package/topojson-client)，将TopoJSON转为GeoJSON。

children

子节点的集合。