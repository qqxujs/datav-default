<!DOCTYPE html> 

**三维城市构建器**提升了三维资产的易用性、渲染视效、支持更多精准时空数据、扩大城市基础数据资产库，真正降低“数字孪生城市”的构建门槛，使得“数字孪生城市”成为一项技术普惠。本文为您演示如何使用**官方基底数据**在DataV产品内创建和使用三维城市。

## **创建三维城市**

**说明** 

三维城市构建器仅**专业版**及以上版本支持使用。

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**工作台**页面，将鼠标hover在**创建三维城市**上，单击**开始创建**。  
![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3269129861/p693262.png)
3. 在**创建三维城市**弹窗中输入**名称**后，单击**确定**。
4. 在**选择创建方式**弹窗中，鼠标移动到**官方基底数据**上，单击**创建**。
5. 在**选择城市基底**弹窗中，选择一个或多个城市基底子组件，也可以选中弹窗右上角的**全选**，选中所有的城市基底子组件。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5843919661/p515233.png)

**说明**  
您可以在提供数据精度的子组件右下角，查看组件自带的**精度**选项，选择您所需的数据精度，选择高精度可以使数据更准确，但是数据量会较大，请谨慎选择。
6. 选择子组件后，单击弹窗右下角的**下一步**即可进入**选择范围**弹窗；单击**取消**可以取消创建三维城市。
7. 单击弹窗左上角的城市列表，在列表已有的城市选项中，选择您想展示的三维城市，地图即可快速定位导航到该城市区域。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5843919661/p515245.png)

**说明**  
目前已开放可使用的城市有21个，后续将不定期持续更新更多的城市，敬请期待。
8. 在左侧框选工具处选择一个框选工具，在城市地图中框选所需的场景范围。
9. 完成区域框选后，单击右下角的**确定**即可完成三维城市构建器项目的创建，并加载框选的数据范围区域。  
![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2279972761/p515555.jpg)  
创建三维城市和框选数据范围的功能的详细介绍请参见[使用官方基底数据创建](/zh/datav/datav-7-0/user-guide/create-a-3d-city#6623dda05fs3d)。使用空间构建数据创建三维城市的详细介绍请参见[使用空间构建数据创建](/zh/datav/datav-7-0/user-guide/create-a-3d-city#515e24205fq6b)。
10. 等待几分钟后，即可进入场景编辑器页面。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2279972761/p515556.png)

**说明**  
进入**场景编辑器**时，场景内所有数据会有一定的渲染加载时间，此时场景内容正在加载中，画布中会出现场景载入提示说明，请您耐心等待。

## **编辑三维城市**

1. 在场景编辑器页面，您可以新建或删除场景，场景管理具体操作请参见[场景管理](/zh/datav/datav-7-0/user-guide/scene-management)。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2279972761/p515726.png)
2. 在三维视图与相机编辑面板中，通过拖动鼠标或者滑动滚轮，手动调整地图的视角和缩放大小，也可以通过**相机路径面板**与**相机高程面板**编辑出想要的任意空间曲线，具体视角调整及相机编辑功能详情请参见[场景编辑器概览](/zh/datav/datav-7/user-guide/overview-of-scene-editor)和[三维视图与相机编辑面板管理](/zh/datav/datav-7-0/user-guide/3d-view-and-camera-editing-panel-management)。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2279972761/p515731.png)
3. 在场景编辑器左侧的**图层列表**内，您可以对图层栏内的**场景图层**和**全局图层**进行配置管理，图层管理功能详情请参见[图层面板管理](/zh/datav/datav-7-0/user-guide/layer-panel-management)。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2279972761/p515764.png)
4. 在**场景编辑器**右侧面板内，可以对**三维城市构建器**的场景和每个图层进行配置，具体参数配置说明请参见[场景配置项说明](/zh/datav/datav-7-0/user-guide/scene-configuration-items)和[图层配置项说明](/zh/datav/datav-7-0/user-guide/layer-configuration-items-for-datav-7)。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2279972761/p515772.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2279972761/p515774.png)
5. 在**场景编辑器**下方的**分镜与关键帧面板**内，可以为当前场景设置多个不同的分镜和关键帧内容，并可以预览播放场景在不同关键帧时的动画样式。具体**分镜与关键帧面板**内功能说明，请参见[分镜与关键帧面板管理](/zh/datav/datav-7-0/user-guide/storyboard-and-keyframe-panel-management)。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2279972761/p515775.png)
6. 单击**场景编辑器**右上角的项目设置![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2279972761/p515776.png)，在弹窗内可设置包括项目尺寸大小、发布和预览时的页面缩放设置、缩略图等设置，详情请参见[项目设置](/zh/datav/datav-7-0/user-guide/project-settings-for-datav-7)。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2279972761/p515778.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2279972761/p515779.png)
7. 单击**场景编辑器**右上角的数据接口设置![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2279972761/p515781.png)、事件设置![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2279972761/p515782.png)与动作设置![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2279972761/p515783.png)，即可自定义配置项目接口内容，详情请参见[使用区块接口](/zh/datav/datav-7-0/user-guide/use-block-interfaces)。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2279972761/p515787.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2279972761/p515788.png)
8. 当**场景编辑器**内场景配置完成后，可单击左上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2279972761/p515790.png)，切换进入**蓝图编辑器**页面进行蓝图交互配置，详情请参见[蓝图编辑器配置说明](/zh/datav/datav-7-0/user-guide/configurations-of-blueprint-editor)。

## 使用三维城市

请参见[使用三维城市](/zh/datav/datav-7-0/user-guide/preview-publish-and-use-a-project#9d6b11d060wkn)。