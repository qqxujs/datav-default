# 场景管理 %{#429620}% 

三维城市构建器项目的场景编辑器中可查看已有的各个场景，默认将初始化的图层都添加到场景1内。您可以在场景编辑器内进行新增场景、切换场景、删除场景、重命名场景、设置默认场景和导出场景到蓝图编辑器等操作。本文介绍三维城市构建器组件场景管理功能的使用方法。 

## 新建场景

1. 单击场景编辑器上方的场景下拉箭头，在场景列表中单击新建场景。![新建场景入口](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3516197461/p416099.png)
2. 在新建场景对话框内，输入新建场景的名称后，单击确定，即可创建一个新场景。![新建场景](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2778764161/p240035.png)

**说明** 新创建的场景为空白场景，且新场景初始帧的相机视角将沿用当前场景视角。新场景在所选数据区域下不包含任何图层，您可以为新场景添加新的图层，或者从旧场景里分配图层到新场景内，详情请参见[图层面板管理](/zh/datav/datav-6-0/user-guide/layer-panel-management-of-professional-edition#concept-1988433 "三维城市构建器项目场景编辑器左侧的图层面板承载了管理图层的功能。本文介绍三维城市构建器图层面板内各个功能的使用方法。")。

## 切换场景

1. 单击场景编辑器上方的场景下拉箭头，即可查看场景列表内已有的多个场景。![切换单击场景](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3516197461/p416106.png)
2. 在场景列表中单击目标场景，即可完成场景之间的切换。

## 复制场景

1. 单击场景编辑器上方的场景下拉箭头，即可查看场景列表内已有的多个场景。
2. 在场景列表内，单击目标场景右侧的![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2778764161/p240044.jpg)图标，即可复制当前场景，并在场景列表下方显示新复制的场景。![复制场景](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3516197461/p416109.png)
3. 完成场景复制后，将自动切换到新复制的场景内。

## 重命名场景

1. 单击场景编辑器上方的场景下拉箭头，即可查看场景列表内已有的多个场景。
2. 在场景列表内，单击目标场景右侧的![重命名](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7928786061/p186623.png)图标。
3. 在重命名对话框内，输入重命名后的场景名称，单击确定，即可对该场景重命名。

## 删除场景

1. 单击场景编辑器上方的场景下拉箭头，即可查看场景列表内已有的多个场景。
2. 在场景列表内，单击目标场景右侧的![删除](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8928786061/p186624.png)图标。
3. 在删除对话框内，单击确定，即可删除该场景。  

**说明** 删除场景时，不会删除该场景内的图层。

## 设置默认场景

1. 单击场景编辑器上方的场景下拉箭头，即可查看场景列表内已有的多个场景。
2. 在场景列表内，单击目标场景右侧的![设置默认场景](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3516197461/p416111.jpg)图标，即可将当前目标场景设置成项目在预览或发布时的默认展示的场景。![默认场景设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3516197461/p416114.png)

## 将场景导出到蓝图编辑器并配置交互

1. 单击场景编辑器上方的场景下拉箭头，即可查看场景列表内已有的多个场景。
2. 在场景列表内，单击目标场景右侧的![蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7096786061/p186626.png)图标。![导出场景到蓝图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3516197461/p416115.png)

**说明** 再次单击![蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7096786061/p186626.png)图标，即可取消导出到蓝图编辑器，蓝图编辑器内已经配置的节点相关交互不可使用。  
![取消导出蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1727376061/p179322.png)
3. 成功导出当前场景到蓝图编辑器后，即可切换到蓝图编辑器页面，详细操作请参见[切换编辑器](/zh/datav/datav-6-0/user-guide/switch-editor-of-previous-edition#concept-2001301 "场景编辑器内的工具栏提供了编辑器切换的功能。通过该功能，您可以切换进入场景编辑器或蓝图编辑器界面。")。
4. 在蓝图编辑器配置页面，将导入节点栏内的三维城市构建器节点拖拽到蓝图画布中，被导出到蓝图编辑器的场景节点会自动连线三维城市构建器节点。在画布中可以看到如下图所示场景节点在插入关键帧事件后的蓝图编辑器配置参数。![场景节点导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6343458461/p416126.png)
  * 事件

|    事件    |    说明    |
|    ----    |    ----    |
|    第x帧    |    场景时间轴运行到第x帧时触发事件，无抛出数据。    |
  * 动作

|    参数    |    说明    |
|    ----    |    ----    |
|    切换到当前分镜    |    切换到当前分镜，不需要参数。    |
|    播放    |    播放当前分镜动画，不需要参数。    |
|    暂停    |    暂停播放当前分镜动画，不需要参数。    |
|    停止    |    停止播放当前分镜动画，不需要参数。    |