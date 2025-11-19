<!DOCTYPE html> 

本章节以搭建**企业新零售业务看板**为例，为您演示如何使用DataV空白模板来开发可视化应用项目。

## 背景信息

* 示例使用**静态数据源**，因此可以直接在组件的数据配置区域粘贴准备好的数据。如果您的数据源为**CSV文件**、**数据库**等其他类型，需要先[添加数据源](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/add-data-sources/)。
* 如果您需要使用**API**数据源，可直接在数据配置栏输入API地址。具体配置时，如需启用**服务器代理请求**等操作，请参见[配置跨域数据](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/how-to-configure-cross-domain-data#concept-k5l-ckz-q2b)。

## **效果展示**

按照本文提供的配置完成后，将生成如下效果的数据看板。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4495304761/p551191.png)

**说明** 

可视化应用涉及的配置较多，不同配置最终生成的样式存在差异，本示例仅用于了解相关功能及操作流程，实际效果请以您的操作为准。

## **组件信息**

下图展示了示例所使用的组件清单，包含各组件名称及对应数量。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4495304761/p551189.png)

## **操作步骤**

您可通过如下操作，完成空白画布搭建可视化应用，快速体验DataV-Board的相关功能。

### **步骤一：创建可视化应用**

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在**我的可视化**页面中，单击**PC端创建**。在页面中选择**空白画板**并单击**创建项目**。
3. 在**创建数据大屏**对话框中，输入可视化应用名称并选择[项目分组](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/group-function-and-move-function/#e0e555ac04gch)，未创建分组时可选择**未分组**。  
应用创建成功后会跳转到应用编辑器页面。您可按需接入数据源并配置画布信息。

**说明**  
画布尺寸默认为1920\*1080，您可在画布编辑器右侧的**页面配置**区域按需调整。

### **步骤二：添加并配置组件**

**说明** 
* **多选操作**：在Windows系统下按住Ctrl键（Mac系统下按住Command键）并单击组件，可进行多选。
* **移动组件**：通过画布拖拽或在配置面板中修改坐标位置，可调整组件在画布中的位置。
* **图层调整**：在左侧图层栏中拖动组件上移或下移，可改变组件的图层层级。[图层移动](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/manage-layers/#a461d0259fo7b)时，当两个组件重叠，位置靠前的组件会覆盖位置靠后的。

#### **地图组件**

1. 在画布编辑器左侧的**全部资产**栏，单击**地图** \> **3D平面地图**，将**3D平面地图**组件添加到画布中。
2. 选中**3D平面地图**组件，在右侧的**配置**面板中单击**子组件管理**左侧的**+**图标，选择**od飞线层**和**单点柱状层**，单击**添加子组件**。
3. 单击进入**od飞线层**子组件，在**数据**页中单击**配置数据源**，在配置页中选择**静态数据**并将下方JSON文件数据复制粘贴到数据源编辑框中以自定义修改**飞线颜色**和**飞线线型**。

**od飞线层数据JSON文件**  
```  
[  
  {  
    "id": 1,  
    "name": "安徽省 -&gt; 湖北省",  
    "value": 1,  
    "colorField": 5,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          117.1285001635342,
          40.286711869544185  
        ]  
      ]  
    }  
  },  
  {  
    "id": 2,  
    "name": "安徽省 -&gt; 北京市",  
    "value": 2,  
    "colorField": 2,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          115.7519689833273,
          40.002091020646034  
        ]  
      ]  
    }  
  },  
  {  
    "id": 3,  
    "name": "安徽省 -&gt; 天津市",  
    "value": 3,  
    "colorField": 2,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          115.91626782055476,
          40.5443387995133  
        ]  
      ]  
    }  
  },  
  {  
    "id": 4,  
    "name": "安徽省 -&gt; 河北省",  
    "value": 4,  
    "colorField": 3,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          116.51952384752327,
          40.644585315977665  
        ]  
      ]  
    }  
  },  
  {  
    "id": 5,  
    "name": "安徽省 -&gt; 山西省",  
    "value": 5,  
    "colorField": 3,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          116.47839783929638,
          40.43816003796805  
        ]  
      ]  
    }  
  },  
  {  
    "id": 6,  
    "name": "安徽省 -&gt; 内蒙古自治区",  
    "value": 6,  
    "colorField": 5,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          115.69399528036193,
          39.66245367451081  
        ]  
      ]  
    }  
  },  
  {  
    "id": 7,  
    "name": "安徽省 -&gt; 辽宁省",  
    "value": 7,  
    "colorField": 3,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          115.98377599532307,
          40.19504929561505  
        ]  
      ]  
    }  
  },  
  {  
    "id": 8,  
    "name": "安徽省 -&gt; 吉林省",  
    "value": 8,  
    "colorField": 3,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          116.57951643065338,
          40.341010790596606  
        ]  
      ]  
    }  
  },  
  {  
    "id": 9,  
    "name": "安徽省 -&gt; 黑龙江省",  
    "value": 9,  
    "colorField": 2,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          116.55654661333388,
          40.074821016922925  
        ]  
      ]  
    }  
  },  
  {  
    "id": 10,  
    "name": "安徽省 -&gt; 上海市",  
    "value": 10,  
    "colorField": 1,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          116.86359734638494,
          39.7596709650833  
        ]  
      ]  
    }  
  },  
  {  
    "id": 11,  
    "name": "安徽省 -&gt; 江苏省",  
    "value": 11,  
    "colorField": 5,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          116.61045980391775,
          39.70074233873841  
        ]  
      ]  
    }  
  },  
  {  
    "id": 12,  
    "name": "安徽省 -&gt; 浙江省",  
    "value": 12,  
    "colorField": 5,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          117.21355379094511,
          40.18274628786125  
        ]  
      ]  
    }  
  },  
  {  
    "id": 13,  
    "name": "安徽省 -&gt; 福建省",  
    "value": 13,  
    "colorField": 2,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          116.30487066498964,
          40.23332704297267  
        ]  
      ]  
    }  
  },  
  {  
    "id": 14,  
    "name": "安徽省 -&gt; 江西省",  
    "value": 14,  
    "colorField": 4,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          117.01351979179523,
          40.66620883108799  
        ]  
      ]  
    }  
  },  
  {  
    "id": 15,  
    "name": "安徽省 -&gt; 山东省",  
    "value": 15,  
    "colorField": 5,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          116.08268993216632,
          39.93839530883533  
        ]  
      ]  
    }  
  },  
  {  
    "id": 16,  
    "name": "安徽省 -&gt; 河南省",  
    "value": 16,  
    "colorField": 3,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          116.43665750252885,
          40.07952551044085  
        ]  
      ]  
    }  
  },  
  {  
    "id": 17,  
    "name": "安徽省 -&gt; 湖南省",  
    "value": 17,  
    "colorField": 4,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          115.89038079638362,
          39.9374523048615  
        ]  
      ]  
    }  
  },  
  {  
    "id": 18,  
    "name": "安徽省 -&gt; 广东省",  
    "value": 18,  
    "colorField": 2,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          117.48133808631756,
          40.6647218759069  
        ]  
      ]  
    }  
  },  
  {  
    "id": 19,  
    "name": "安徽省 -&gt; 广西壮族自治区",  
    "value": 19,  
    "colorField": 3,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          117.17762041932534,
          40.634776688869465  
        ]  
      ]  
    }  
  },  
  {  
    "id": 20,  
    "name": "安徽省 -&gt; 海南省",  
    "value": 20,  
    "colorField": 1,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          116.34025030939655,
          40.657178168906135  
        ]  
      ]  
    }  
  },  
  {  
    "id": 21,  
    "name": "安徽省 -&gt; 重庆市",  
    "value": 21,  
    "colorField": 1,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          115.89619715899187,
          39.66317788544864  
        ]  
      ]  
    }  
  },  
  {  
    "id": 22,  
    "name": "安徽省 -&gt; 四川省",  
    "value": 22,  
    "colorField": 2,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          117.05211918995235,
          40.140113961917216  
        ]  
      ]  
    }  
  },  
  {  
    "id": 23,  
    "name": "安徽省 -&gt; 贵州省",  
    "value": 23,  
    "colorField": 2,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          116.03092185544594,
          40.50575601945392  
        ]  
      ]  
    }  
  },  
  {  
    "id": 24,  
    "name": "安徽省 -&gt; 云南省",  
    "value": 24,  
    "colorField": 1,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          116.96639592117228,
          40.68231106582088  
        ]  
      ]  
    }  
  },  
  {  
    "id": 25,  
    "name": "安徽省 -&gt; 西藏自治区",  
    "value": 25,  
    "colorField": 3,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          116.97818474847793,
          40.226830979836485  
        ]  
      ]  
    }  
  },  
  {  
    "id": 26,  
    "name": "安徽省 -&gt; 陕西省",  
    "value": 26,  
    "colorField": 5,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          116.2956005961121,
          40.56807632268281  
        ]  
      ]  
    }  
  },  
  {  
    "id": 27,  
    "name": "安徽省 -&gt; 甘肃省",  
    "value": 27,  
    "colorField": 2,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          116.77668095793256,
          39.72400058808163  
        ]  
      ]  
    }  
  },  
  {  
    "id": 28,  
    "name": "安徽省 -&gt; 青海省",  
    "value": 28,  
    "colorField": 5,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          116.18796219648927,
          39.595414775489026  
        ]  
      ]  
    }  
  },  
  {  
    "id": 29,  
    "name": "安徽省 -&gt; 宁夏回族自治区",  
    "value": 29,  
    "colorField": 5,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          116.70434407453467,
          40.691157079628695  
        ]  
      ]  
    }  
  },  
  {  
    "id": 30,  
    "name": "安徽省 -&gt; 新疆维吾尔自治区",  
    "value": 30,  
    "colorField": 1,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          116.25763113031263,
          40.422435454548726  
        ]  
      ]  
    }  
  },  
  {  
    "id": 31,  
    "name": "安徽省 -&gt; 中国台湾",  
    "value": 31,  
    "colorField": 3,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          116.27747200967026,
          40.05904910139394  
        ]  
      ]  
    }  
  },  
  {  
    "id": 32,  
    "name": "安徽省 -&gt; 香港特别行政区",  
    "value": 32,  
    "colorField": 3,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          115.75256914838864,
          39.5545029608671  
        ]  
      ]  
    }  
  },  
  {  
    "id": 33,  
    "name": "安徽省 -&gt; 澳门特别行政区",  
    "value": 33,  
    "colorField": 5,  
    "geometry": {  
      "type": "LineString",  
      "coordinates": [  
        [
          116.405285,
          39.904989  
        ],  
        [
          116.37269721224025,
          39.86220465093939  
        ]  
      ]  
    }  
  }  
]  
```
4. 单击进入**单点柱状层**子组件，在**数据**页中单击**配置数据源**，在配置页中选择**静态数据**并将下方JSON文件数据复制粘贴到数据源编辑框中以自定义修改**柱子高度**和**填充颜色**。

**单点柱状层数据JSON文件**  
```  
[  
  {  
    "lng": "116.195445",  
    "lat": "39.914601",  
    "value": 62,  
    "sizeField": 62  
  },  
  {  
    "lng": "116.418757",  
    "lat": "39.917544",  
    "value": 33,  
    "sizeField": 33  
  },  
  {  
    "lng": "116.486409",  
    "lat": "39.921489",  
    "value": 90,  
    "sizeField": 90  
  },  
  {  
    "lng": "116.310316",  
    "lat": "39.956074",  
    "value": 93,  
    "sizeField": 93  
  },  
  {  
    "lng": "116.105381",  
    "lat": "39.937183",  
    "value": 80,  
    "sizeField": 80  
  },  
  {  
    "lng": "116.139157",  
    "lat": "39.735535",  
    "value": 26,  
    "sizeField": 26  
  },  
  {  
    "lng": "116.658603",  
    "lat": "39.902486",  
    "value": 48,  
    "sizeField": 48  
  },  
  {  
    "lng": "116.235906",  
    "lat": "40.218085",  
    "value": 8,  
    "sizeField": 8  
  },  
  {  
    "lng": "116.338033",  
    "lat": "39.728908",  
    "value": 35,  
    "sizeField": 35  
  },  
  {  
    "lng": "116.637122",  
    "lat": "40.324272",  
    "value": 61,  
    "sizeField": 61  
  },  
  {  
    "lng": "116.843352",  
    "lat": "40.377362",  
    "value": 73,  
    "sizeField": 73  
  },  
  {  
    "lng": "115.985006",  
    "lat": "40.465325",  
    "value": 11,  
    "sizeField": 11  
  },  
  {  
    "lng": "116.366794",  
    "lat": "39.915309",  
    "value": 78,  
    "sizeField": 78  
  },  
  {  
    "lng": "116.286968",  
    "lat": "39.863642",  
    "value": 5,  
    "sizeField": 5  
  },  
  {  
    "lng": "117.112335",  
    "lat": "40.144783",  
    "value": 59,  
    "sizeField": 59  
  },  
  {  
    "lng": "116.653525",  
    "lat": "40.128936",  
    "value": 61,  
    "sizeField": 61  
  }  
]  
```
5. 选中**3D平面地图**组件，单击地图右上方的![{E5EAA9B9-E3DD-406A-8097-3A2A0FE0B321}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9195120571/p973756.png)图标进入沉浸模式，下钻地图至北京市，并在配置页自定义修改地图样式，数据页保持不变。

#### **业务指标趋势**

1. 在画布左侧**全部资产**栏，单击**信息** \> **业务指标趋势**，将组件添加到画布中。
2. 单击组件，在可视化应用右侧的**配置**面板中，根据效果图配置底层面板中的**标题**、**图标**和**数值**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9195120571/p973793.png)
3. 重复上述步骤，完成所有业务指标趋势组件的配置。

#### **通用标题**

1. 在画布左侧全部资产栏，单击**信息** \> **通用标题**，将通用标题组件添加到画布中。
2. 单击组件，在可视化应用右侧的**配置**面板中，配置**通用标题**的样式。![通用标题-样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1868724361/p327604.png)
3. 在**通用标题**的**配置**面板中，修改标题名。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8002683761/p551212.png)
4. 重复以上操作，继续添加其他的**通用标题**组件。

#### **数字翻牌器**

1. 在画布左侧**全部资产**栏，单击**信息** \> **数字翻牌器**组件。
2. 单击组件，在可视化应用右侧的**配置**面板中，配置**数字翻牌器**的样式。  
![数字翻牌器-样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1868724361/p327679.png)
3. 在**数字翻牌器**的**数据面板**，将value值改成您需要显示的数据。  
![配置数字翻牌器组件数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0394106951/p10362.png)
4. 重复以上操作，继续添加其他的**数字翻牌器**组件。

#### **时间器**

1. 在画布左侧**全部资产**栏，单击**信息** \> **时间器**组件。
2. 配置**时间器**的样式，修改**图标样式**、**时间器**等配置。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8002683761/p551218.png)

#### **进度条**

1. 在画布左侧**全部资产**栏，单击**控件** \> **数据类** \> **进度条**组件。
2. 配置**进度条**的样式，修改**全局样式**、**百分比条**和**数据**等配置。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8002683761/p551224.png)

### **步骤三：预览并发布可视化应用**

组件的样式和数据源都配置完成后，您可以预览并发布可视化应用，实现看板的在线播放和演示。本步骤为您介绍预览并发布可视化应用的方法。

1. 单击画布编辑器右上角的![{FA4AF138-6B6B-4DF3-AA90-521D2359AFB3}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6862120571/p973550.png)图标，跳转至新页面预览可视化应用。  
预览成功后，可按照以下步骤发布可视化应用。
2. 单击画布编辑器右上角的![{F18FCB2F-9D3E-4A35-9995-D9A7EFEA0EF6}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6862120571/p973551.png)图标，在弹出的对话框中单击**发布大屏**以打开发布页面。
3. 在发布页面中单击**分享链接**右侧的![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7824997471/p960080.png)图标复制链接。

**说明**  
在发布页面中，可以按需进行[发布信息和快照管理](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-a-template-to-create-a-pc-side-visual-application#d6096c2851ggr)。
4. 打开浏览器，将复制的链接粘贴到地址栏中，即可在线观看发布成功的可视化应用。

## **相关文档**

* 更多创建方式，请参见[模板创建可视化应用](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/use-a-template-to-create-a-pc-side-visual-application#0a0ccb98baplq)。
* 更多配置操作（例如，组件配置、蓝图应用），请参见[组件配置](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/configure-item-description)、[蓝图案例](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/primary-case/)。