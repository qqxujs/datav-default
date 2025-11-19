<!DOCTYPE html> 

场景编辑器下方的分镜与关键帧面板，重新梳理了图层、场景和分镜的概念及功能，每个场景下可以创建多个相同图层要素的动画。本文介绍三维城市构建器分镜与关键帧面板内各个模块功能的使用方法。

分镜与关键帧面板可分为三个模块，包括分镜栏、工具栏和关键帧与时间轴画布。三个模块分别可以实现以下功能：

## 分镜栏

|    功能    |    说明    |
|    ----    |    ----    |
|    新增分镜    |    单击顶部左侧分镜栏的![新增分镜](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5916197461/p419915.jpg)图标，在弹窗的新建分镜对话框中，自定义输入分镜名称，再单击右下角的确定即可完成新增分镜。![新建分镜](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5916197461/p419937.jpg)**说明** 新分镜初始帧的相机视角将沿用当前分镜的视角，每个场景内可以自定义创建多个分镜。    |
|    切换分镜    |    当分镜栏内已创建多个分镜时，您可以单击某个已有的分镜，切换到指定分镜下进行配置。    |
|    设置默认分镜    |    右键单击分镜栏内某个分镜，在弹窗列表内，选择设为默认分镜，即可设置当前分镜在预览和发布状态时的默认展示分镜。![设置默认分镜](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9406648461/p421567.png)    |
|    重命名分镜    |    右键单击分镜栏内某个分镜，在弹窗列表内，选择重命名，即可重命名当前分镜的名称。    |
|    复制分镜    |    右键单击分镜栏内某个分镜，在弹窗列表内，选择复制，即可复制当前分镜的内容并在分镜栏左侧新增一个同样配置的分镜内容。    |
|    删除分镜    |    右键单击分镜栏内某个分镜，在弹窗列表内，选择删除，在弹窗的二次确认删除分镜对话框内，单击确定，即可删除当前分镜的名称。![二次确认删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9406648461/p421564.jpg)**说明** 分镜内容删除后无法恢复，请谨慎删除。    |

## 工具栏

|    功能    |    说明    |
|    ----    |    ----    |
|    演绎模式    |    在关键帧面板工具栏左上角处，单击选中自动播放或循坏播放两种演绎方式，选择场景预览或发布时候的关键帧的演绎效果样式。![关键帧演绎模式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9406648461/p421153.png)    |
|    总帧数    |    您可以在关键帧面板顶部工具栏左上方侧的总帧数的输入框内，自定义修改当前场景下的总帧数的数量值。    |
|    编辑模式    |    单击关键帧面板顶部工具栏内的起始帧、上一个关键帧、下一个关键帧、末尾帧、播放/暂停、停止和循环播放七个按键，即可切换当前编辑模式下的当前选中场景内的关键帧动画的样式。![编辑模式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9406648461/p421212.png)**重要** 编辑模式下的帧数播放动画，仅在场景编辑页面下针对当前场景快速预览，是否播放的设置不会影响发布页的播放状态。    |
|    当前帧    |    您可以在关键帧面顶部工具栏右侧的当前帧的输入框内，自定义修改选中当前场景下的某一帧，也可以单击当前帧输入框左右两侧的按键，选择前进或后退一帧。    |
|    时间轴缩放    |    时间轴缩放功能位于关键帧面板顶部工具栏最右侧，您可以拖动滑块改变下方时间轴画布的缩放大小。    |

## 关键帧与时间轴画布

* 选中当前帧：单击时间轴画布中任意一处即可选中此处为当前场景下对应的某一帧，用蓝色线条展示，选中当前帧后可在左侧关键帧属性中添加或修改关键帧属性。![选择关键帧](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8000259161/p180384.png)
* 拖动当前帧：单击时间轴画布中任意一处选中此处为当前场景下对应的某一帧后，您可以随意拖动当前帧，即可调整当前帧在时间轴上的位置。![拖动当前帧](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8000259161/p266085.gif)
* 配置关键帧属性：默认状态下的关键帧属性仅为相机和时间系统属性。您还可以在图层管理列表中添加图层到关键帧属性，并调整每个图层在当前关键帧内的属性，详情请参见图层面板管理中的[添加和移除关键帧属性](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/layer-panel-management-of-previous-edition#section-9xq-95p-hu7)。
  * 相机：展开相机列表，您可以自定义拖动滑块调整经度、纬度、高度、倾斜、平移和视角的参数。![完成保存](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9406648461/p421239.png)
  * 时间系统：展开时间系统列表，在时间参数配置项，您可以自定义为当前场景内的当前帧选择一个具体的所处时间。![配置时间系统](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9406648461/p421242.jpg)  
完成各项关键属性参数配置后，单击关键帧属性右侧的保存按钮（![保存](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4510986061/p187168.png)），即可保存各种属性配置到当前关键帧内。
  * 关键帧属性的保存按钮为实心时，表示当前属性已被保存；保存按钮为空心时，表示当前属性未被保存。![保存按钮 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4510986061/p180391.png)
  * 关键帧属性的保存按钮为蓝色时，表示当前属性值没有变化；保存按钮为橘色时，表示当前属性值发生了变化。![属性值发生变化与否 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4510986061/p180393.png)
* 右键关键帧顶部游标：在时间轴画布中，您可以右键单击选中一个已被保存属性的关键帧游标的顶部，在弹窗的对话框中，设置缓动曲线、标记事件、复制、粘贴和删除。![右键关键帧](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9406648461/p421258.png)
  * 缓动曲线：鼠标移动到缓动曲线上方可展开曲线样式列表，在曲线样式列表中可以查看曲线的缩略图样式，您可以参考图形选择一个缓动曲线样式，即可完成当前帧的曲线样式的配置。![缓动曲线样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9406648461/p421263.png)
  * 标记事件：单击标记事件，即可在当前帧内创建一个事件，事件以实心圆点显示在当前帧内。创建事件后的关键帧事件将会在蓝图编辑器的场景节点中展示，用于配置运行到指定某个帧数的联动交互事件。![插入事件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4510986061/p180414.png)

**说明** 您还可以在选中一个关键帧后，单击关键帧面板中的关键帧事件右侧的![事件图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8000259161/p266035.jpg)图标，即可快速完成标记事件功能。  
  ![关键帧事件快捷方式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8000259161/p266043.png)  
  图 1\. 蓝图编辑器内当前场景关键帧事件节点样式  
  ![场景节点导出蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1443458461/p421267.jpg)
  * 取消事件：在关键帧顶部游标处右键单击并选择取消事件，即可取消当前关键帧内的事件。取消后无法在蓝图编辑器内配置该关键帧事件节点。![取消事件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9406648461/p421271.png)

**说明** 您还可以右键单击关键帧的事件标记处，在弹窗内选择取消事件，即可取消当前关键帧的事件。  
  ![快捷取消事件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9000259161/p266059.png)
  * 移动关键帧：单击选中关键帧面板中某一已添加的关键帧，鼠标单击该关键帧内某个属性节点后拖动关键帧，即可移动当前关键帧在时间轴上的位置。![移动关键帧](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1443458461/p424090.gif)
  * 复制关键帧：在关键帧顶部游标处右键单击并选择复制，即可复制当前关键帧及其对应所有配置的属性内容。![复制关键帧](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9406648461/p421274.png)
  * 粘贴关键帧：单击时间轴画布中某一处，在关键帧顶部游标处右键单击并选择粘贴，即可粘贴事先复制完成的关键帧及其对应所有配置的属性内容。![黏贴关键帧](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9406648461/p421278.png)

**说明** 需事先复制某个关键帧所有配置后才能使用粘贴功能。
  * 删除关键帧：在关键帧顶部游标处右键单击并选择删除，即可删除当前关键帧及其对应所有配置的属性内容。![删除关键帧](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9406648461/p421282.png)

**重要** 关键帧被删除后不可恢复，请谨慎操作。
* 删除关键帧局部配置：鼠标移动到关键帧某个局部配置属性处（时间轴画布中的一个菱形方块），右键单击该菱形方块，选择删除，即可删除当前关键帧的局部配置属性值。![删除关键帧局部属性](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9406648461/p421286.png)

## 关键帧面板支持快捷键

在关键帧面板中，除了使用常规的鼠标控制关键帧功能的情况外，还可以借助使用一些键盘快捷键的方法实现多个关键帧功能。

**说明** 仅在鼠标移动聚焦在关键帧面板时，键盘快捷键生效。

支持的快捷键实现功能如下。

|    功能    |    快捷键    |
|    ----    |    ----    |
|    播放或暂停预览动画    |    Space（空格键）    |
|    复制关键帧    |    Mac系统：Command+CWindows系统：Ctrl+C    |
|    粘贴关键帧    |    Mac系统：Command+VWindows系统：Ctrl+V    |
|    删除关键帧    |    Mac系统：BackspaceWindows系统：Backspace或Delete    |
|    上一个关键帧    |    Mac系统：Option+LeftWindows系统：Alt+Left    |
|    下一个关键帧    |    Mac系统：Option+RightWindows系统：Alt+Right    |
|    起始帧    |    Mac系统：Option+Shift+LeftWindows系统：Alt+Shift+Left    |
|    末尾帧    |    Mac系统：Option+Shift+RightWindows系统：Alt+Shift+Right    |