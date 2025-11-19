<!DOCTYPE html> 

本文通过DataV-Board（数据看板）实现三维模型和表单组件的交互，为您演示如何搭建可视化数据看板。

## **案例介绍**

本案例演示如何使用三维模型创建PC端数据看板。首先，将高塔三维模型资源导入DataV-Board，使用模型查看器、通用标题、按钮、Tab列表等组件，实现工业设备的可视化展示。通过全局变量和蓝图编辑功能，实现三维模型与组件的动态交互，单击Tab列表可切换显示模型资源，单击按钮可触发模型动画播放。完成本案例后，您将得到类似下图的数据看板。

![2024-10-25_14-48-52](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3977751371/p863562.gif)

## 准备工作

开始本示例前，您需完成以下准备工作：

* [开通DataV-Board专业版产品](/zh/datav/datav-7-0/getting-started/activate-datav-1)
* 准备模型资源  
本案例将使用[高塔](https://cdn-upload.datav.aliyun.com/upload/download/1640847537101-ZEo22OsN.glb)模型和液压臂模型资源进行演示，您需将该资源下载至本地，后续上传至DataV-Board使用。

**说明**  
  * 液压臂模型资源将通过CDN进行获取。
  * 案例提供的模型资源为样例数据，仅用于学习和交流。
* （可选）创建项目分组  
系统默认不提供分组，创建的项目会处于未分组状态，您可[按需创建项目分组](/zh/datav/datav-7-0/user-guide/manage-project-groups)。

## **操作流程**

您可通过如下操作，完成三维模型数据看板的创建，快速体验DataV-Board的相关功能。

1. [步骤一：上传模型资源](#2c275e820f1s6)
2. [步骤二：创建数据看板并导入模型资源](#e87634736eooq)
3. [步骤三：设置三维模型样式](#1cb041ada28q6)
4. [步骤四：数据看板添加组件](#a86e75169886z)
5. [步骤五：添加全局变量](#90e895990e3l5)
6. [步骤六：使用蓝图实现组件交互](#4c35e7f454un9)
7. [步骤七：预览和发布数据看板](#2b76afe356vhz)

### **步骤一：上传模型资源**

上传准备好的模型资源至设计资源，用于后续创建数据看板。

1. 登录[DataV-Board控制台](https://datav.aliyun.com/v/console/)。
2. 在左侧导航栏单击**资源管理**下的**设计资源**，进入设计资源页。
3. 单击**创建设计资源**下的**上传模型**，进入上传模型页。
4. 按照界面指引上传准备好的模型资源，等待模型加载完成后，单击**完成**。

### **步骤二：**创建数据看板并导入模型资源

创建一个空白画布，导入准备好的模型资源。

1. 创建数据看板。

  1. 在DataV-Board控制台中单击**全部应用** \> **创建PC端看板**。
  2. 在空白看板上单击**创建看板**。
  3. 输入看板名称，使用默认的项目分组，单击**创建看板**。  
  本示例看板名称为`工业设备展示`。  
看板创建后，将自动跳转至画布编辑器页面，进行后续操作。
2. 在画布编辑页中添加**模型查看器**组件。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4977751371/p862545.png)
3. 在画布中单击组件，更改默认模型为您上传的模型资源。![2024-10-24_10-22-43](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4977751371/p862752.gif)

### **步骤三：设置三维模型样式**

DataV-Board提供了丰富的模型样式设置。下面将通过调整模型样式，使模型更加具体和生动。

1. 单击已导入模型右上方的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4977751371/p862756.png)图标进入沉浸态编辑，单击**自动校准**，调整三维模型的位置和镜头设置，达到满意的模型展示角度。![2024-10-24_10-42-59](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4977751371/p862765.gif)
2. 选择三维模型右侧标签栏的**样式**，根据下图的步骤，完成对三维模型背景颜色的设置。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3977751371/p871858.png)

**说明**  
DataV-Board提供了丰富的模型样式设置，更多模型样式配置详情，请参见[模型查看器](/zh/datav/datav-7-0/user-guide/model-viewer)。

### **步骤四：数据看板添加组件**

模型样式设置完成后，为数据看板添加通用标题、按钮、Tab列表组件，丰富数据看板的展示效果。后续将使用组件实现交互功能。

1. 在左侧导航栏中选择**组件库**，按照下图步骤为三维模型添加**通用标题**组件。单击选中画布中的组件，修改组件名称为`工业设备展示`，更改组件样式配置。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3977751371/p862855.png)
2. 在左侧导航栏中选择**组件库**，按照下图步骤为三维模型添加**按钮**组件。单击选中画布中新添加的组件，修改组件名称为`开启动画`，更改组件样式配置。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3977751371/p863864.png)
3. 在左侧导航栏中选择**组件库**，按照下图步骤为三维模型添加**Tab列表**组件，单击选中画布中新添加的组件，修改组件样式配置。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4977751371/p863302.png)  
单击Tab列表组件的**数据源**标签，为Tab列表替换准备好的数据源。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3977751371/p863979.png)  
Tab列表组件数据源代码如下  
```  
[  
  {  
    "id": "md1",  
    "imgSrc": "https://img.alicdn.com/imgextra/i3/O1CN016hZVyj29jgY7SqaJn_!!6000000008104-55-tps-200-200.svg",  
    "content": "高塔"  
  },  
  {  
    "id": "md2",  
    "imgSrc": "https://img.alicdn.com/imgextra/i4/O1CN01WR3zo21DiXqeRUJOm_!!6000000000250-55-tps-200-200.svg",  
    "content": "液压臂"  
  }  
]  
```

**说明**  
DataV-Board内置文本展示、常规图表、多媒体展示、交互组件等100+图表/表单模块，覆盖常规需求。更多模型样式配置详情，请参见[组件管理](/zh/datav/datav-7-0/user-guide/widget-management/)。

### **步骤五：添加全局变量**

全局变量可以理解为参数变量，用于控制组件之间参数的传递，从而达到交互的目的。下面将添加模型配置和模型地址全局变量，用于后续在组件交互中获取组件配置信息。

1. 在导航栏左侧选中**图层**组件，按照下图步骤，复制组件配置。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3977751371/p863341.png)
2. 在编辑器导航栏左侧单击**全局变量**下的**新建变量**，添加`var_cam_arm`和`var_md_lib`全局变量数据。  
var\_cam\_config  
```  
{  
  "md1": {  
    "options": {  
      "model": {  
        "url": "https://cdn-upload.datav.aliyun.com/upload/download/1729674610188-j2yNxK8G.glb",  
        "viewMode": {  
          "channel": "final",  
          "wireframe": false,  
          "wireframeType": "triangle",  
          "wireframeColor": "#3c3c3c",  
          "wireframeWidth": 0.73  
        },  
        "transform": {  
          "scale": {  
            "scaleX": 1,  
            "scaleY": 1,  
            "scaleZ": 1  
          },  
          "position": {  
            "offsetX": 0,  
            "offsetY": 0,  
            "offsetZ": 0  
          },  
          "rotation": {  
            "rotationX": 0,  
            "rotationY": 0,  
            "rotationZ": 0  
          }  
        },  
        "renderEffect": {  
          "shadow": {  
            "castShadow": false,  
            "receiveShadow": false  
          },  
          "opacity": 0.5  
        }  
      },  
      "camera": {  
        "fov": 45,  
        "type": "perspective",  
        "zoom": 1,  
        "target": {  
          "tx": 0,  
          "ty": 0,  
          "tz": 0  
        },  
        "position": {  
          "px": 0.7945574069414394,  
          "py": 1.2630150675219762,  
          "pz": 12.39889675619276  
        }  
      },  
      "lights": {  
        "background": {  
          "show": true,  
          "type": "color",  
          "color": "#000000"  
        },  
        "ambientLight": [  
          {  
            "color": "#1d65ff",  
            "_active": true,  
            "intensity": 2  
          }  
        ],  
        "groundShadow": {  
          "show": false,  
          "size": 1,  
          "height": 0,  
          "opacity": 1,  
          "boundary": 1,  
          "groundColor": "#ffffff",  
          "shadowColor": "#000000"  
        },  
        "directionalLight": [  
          {  
            "color": "#005dff",  
            "_active": true,  
            "position": {  
              "x": 0,  
              "y": -50,  
              "z": -80  
            },  
            "intensity": 5,  
            "shadowMap": {  
              "bias": 0,  
              "scale": 1,  
              "width": 2048,  
              "height": 2048,  
              "helper": false  
            }  
          }  
        ],  
        "environmentLight": {  
          "show": true,  
          "hdrUrl": "https://cdn-upload.datav.aliyun.com/upload/download/1606467134385_studio_small_08_1k.hdr",  
          "hdrIntensity": 0.3,  
          "hdrOrientation": 0  
        }  
      },  
      "animate": {  
        "scanner": {  
          "color": "#0b85ff",  
          "speed": 0.002,  
          "enable": true,  
          "length": 0.3,  
          "axisType": 2,  
          "frontier": 1,  
          "direction": -1  
        },  
        "autoRotate": {  
          "axis": "y",  
          "speed": 0.003,  
          "enable": true,  
          "showAxis": false,  
          "direction": 1,  
          "randomAxis": {  
            "x": 0,  
            "y": 1,  
            "z": 0  
          }  
        },  
        "modelAnimate": {  
          "autoPlay": false,  
          "animationList": [  
            "减面_1Action",  
            "立方体_2_0_2Action",  
            "立方体_1_2Action",  
            "管道_10Action",  
            "立方体_1_5Action"  
          ],  
          "defaultAnimation": "减面_1Action"  
        }  
      },  
      "interaction": {  
        "enable": false,  
        "pickType": "gpu",  
        "clickType": "click",  
        "interactiveExt": "local",  
        "interactiveColor": "RGBA(79, 240, 252, 0.2)"  
      },  
      "postprocessing": {  
        "ssr": {  
          "show": false,  
          "blurSize": 4,  
          "glossiness": 0.6,  
          "maxIteration": 20,  
          "maxRayDistance": 500,  
          "strideMagnitude": 1  
        },  
        "ssao": {  
          "bias": 0.1,  
          "show": false,  
          "radius": 10,  
          "blurSize": 4,  
          "intensity": 1,  
          "sharpness": 1  
        },  
        "bokeh": {  
          "show": false,  
          "aperture": 10,  
          "focalSize": 0.05,  
          "bokehRadius": 1,  
          "focalDistance": 10  
        },  
        "ueBloom": {  
          "mask": false,  
          "show": true,  
          "radius": 4,  
          "opacity": 0.5,  
          "strength": 1,  
          "threshold": 0.5,  
          "smoothWidth": 0.7  
        },  
        "motionBlur": {  
          "show": false,  
          "blurSize": 16,  
          "intensity": 0.06  
        },  
        "antialiasType": "FXAA",  
        "colorCorrection": {  
          "hue": 0,  
          "contrast": 1.5,  
          "brightness": 0,  
          "saturation": 0  
        },  
        "sharpenVignetteGrain": {  
          "show": true,  
          "sharpness": 0.2,  
          "grainFactor": 0.1795,  
          "vignetteRadius": 0.8,  
          "vignetteSoftness": 0.5  
        }  
      }  
    }  
  },  
  "md2": {  
    "options": {  
      "camera": {  
        "type": "perspective",  
        "fov": 30,  
        "position": {  
          "px": 15.302952415372028,  
          "py": 8.222470271404996,  
          "pz": -0.8703615128540956  
        },  
        "target": {  
          "tx": 0.6615507106842622,  
          "ty": 2.143284279923242,  
          "tz": 0.40059515  
        }  
      }  
    }  
  }  
}  
```  
var\_md\_lib  
```  
{  
  "md1": {  
    "name": "md_1",  
    "source": "https://cdn-upload.datav.aliyun.com/upload/download/1725264407288-0t3msUbo.glb"  
  },  
  "md2": {  
    "name": "md_2",  
    "source": "https://cdn-upload.datav.aliyun.com/upload/download/1725264542158-A6GQhRWx.glb"  
  }  
}  
```

**说明**  
全局变量中提供了模型交互需要的资源信息。上面案例完成了高塔模型资源的配置，液压臂模型资源的配置信息通过全局变量获取。

  * var\_cam\_config：高塔和液压臂模型的配置数据。md1是案例中复制好的高塔模型配置信息，md2是通过地址获取的液压臂模型配置信息。
  * var\_md\_lib：高塔和液压臂的模型资源地址。

### **步骤六：使用蓝图实现组件交互**

DataV-Board提供蓝图编辑功能，支持三维模型与表单的交互，实现数据互动和交互触发。下面将通过蓝图编辑实现Tab列表组件切换显示模型资源和单击按钮组件播放模型动画功能。

1. 在编辑器页面左上方单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3977751371/p863045.png)图标进入蓝图编辑器页面。
2. 单击左侧导航栏的**图层节点**，鼠标悬浮在图层节点名称上，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3977751371/p863484.png)图标依次添加Tab列表、按钮、模型查看器图层节点到蓝图编辑画布中。
3. 为图层节点添加模型的切换和模型动画开启功能相关逻辑。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3977751371/p863529.png)
4. 为了实现模型和组件交互功能，在Tab列表切换时导入模型资源并更新配置信息。![2024-11-11_10-27-41](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3977751371/p870570.gif)  
导入模型查看器数据器配置  
```  
var md = {};  
var var_md_lib = getCallbackValue("var_md_lib");//获取存储的模型资源的地址信息  
md.url = var_md_lib[data.id].source;  
return md;  
```  
更新组件配置  
```  
var config = getCallbackValue("var_cam_config");//获取存储的模型资源的配置信息  
return config[data.id];  
```

**说明**  
getCallbackValue是DataV-Board中提供的过滤器获取全局变量数据的方法。详情请参见[使用全局变量](/zh/datav/datav-7-0/user-guide/use-global-variables)。

### **步骤七：预览和发布数据看板**

1. 添加完蓝图编辑后，单击看板编辑页面右上角的**预览**，即可预览数据看板的效果。您可以在看板上调整三维模型的视角、切换三维模型、开启模型动画。  
示例生成的看板如下。![2024-10-25_14-48-52](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4977751371/p863563.gif)
2. 单击看板编辑页面右上角的**发布**，选择**发布大屏**。
3. 获取看板访问信息并配置访问限制。  
发布后，您可在看板编辑页面右上角单击**已发布**，获取访问信息并配置访问权限。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9892409271/p859087.png)
4. 获取看板访问地址后，您可将其投放至渲染主机、PC、手机等设备进行访问。

## **相关文档**

* 更多看板的创建方式，请参见[使用模板创建PC端看板](/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)、[使用模板创建移动端看板](/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-a-mobile-device)、[使用AI智能生成PC端看板](/zh/datav/datav-7-0/user-guide/use-ai-to-intelligently-generate-pc-side-kanban#undefined)。
* 更多看板的配置操作（例如，组件配置、蓝图应用、全局变量），请参见[可视化工作台](/zh/datav/datav-7-0/user-guide/visualization-console/)、[进阶教程](/zh/datav/datav-7/videos/advanced-tutorials/)。