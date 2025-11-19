<!DOCTYPE html> 

本文档为您介绍通过单击Tab列表选项，切换展示小学和初中的统计信息（包括学校数量、区位占比等）和地理位置信息的方法。

## 背景信息

本文档包括以下两个场景的配置。 
* [Tab列表切换小学和初中的统计信息](#section-ydg-17n-1dc)。
* [Tab列表切换小学和初中的地理位置信息](#section-dl2-ve5-qkq)。

## Tab列表切换小学和初中的统计信息

需要实现的交互：当单击Tab列表的选项时，可视化应用中切换小学和初中2类学校的统计信息。

可实现方案： 
* Tab列表控制成组组件的显隐样式，详情请参见[实现动态显隐](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/realize-the-dynamic-display#task-1495953)。
* 控制成组组件的位置显示，本文以此为例，具体操作步骤如下。

1. 在画布编辑器图层栏内，选中左侧小学组、初中组和地图&固定内容组中的Tab列表组件，右键单击选择导出到蓝图编辑器。  
![导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6128135361/p135100.png)
2. 在画布编辑器页面左上角，单击蓝图编辑器图标（![蓝图编辑器图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3571888951/p67020.png)），切换到蓝图编辑器配置页面。
3. 在蓝图编辑器页面，将左侧小学组、初中组和地图&固定内容中的Tab列表组件节点拖至画布中。
4. 按照以下说明进行连线。  
将Tab列表的当Tab点击时事件分别与小学组和初中组的显示在指定位置动作连线。
5. 连线完成后，每条连线中间会自动添加一个串行数据处理节点，将节点分别命名为小学位置判断和初中位置判断。  
具体操作方法请参见[什么是蓝图编辑器](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/what-is-blueprint-editor#task-2517085)。转换器添加完成的效果如下图所示。![位置连线样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2607716951/p54669.png)
6. 配置串行数据处理节点。
  1. 右键单击名称为小学位置判断的串行数据处理节点，进入右侧配置面板，选择面板内其他配置栏下方的处理方法，单击右侧箭头打开脚本编辑区域。
  2. 在脚本编辑区域，输入代码，完成后单击保存。![小学位置判断转换器编辑](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2607716951/p54670.png)  
  当前处理方法的示例代码如下。  
  ```  
  if (data.id == 1) {     //小学位置判断。  
    return {  
      "x": -16,  
      "y": 160            //x,y轴数据代表目标位置处。  
    };  
  } else {  
    return {  
      "x": -16,  
      "y": 1080          //这个数据下的位置将被被移除画布范围。  
    };  
  }  
  ```
  3. 使用同样的方式配置初中位置判断处理方法。  
  当前处理方法的示例代码如下。  
  ```  
  if (data.id == 2) {     //初中位置判断。  
    return {  
      "x": -16,  
      "y": 160            //x,y轴数据代表目标位置处。  
    };  
  } else {  
    return {  
      "x": -16,  
      "y": 1080          //这个数据下的位置将被被移除画布范围。  
    };  
  }  
  ```

## Tab列表切换小学和初中的地理位置信息

需要实现的交互：当单击Tab列表的选项时，可视化应用中的基础平面地图组件切换小学和初中2个区域热力层样式，并显示对应的散点。

实现方案：使用Tab列表和触发器控制地图子组件的显隐样式，具体操作步骤如下。您也可以通过转换器实现，详情请参见[实现动态显隐](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/realize-the-dynamic-display#task-1495953)。

1. 在蓝图编辑器页面，将左侧节点中的公办小学、公办初中、公办小学点、公办初中点、民办小学和民办初中六个节点拖至画布中。

**说明** Tab列表节点在上一步中已经添加至画布中，不需要重复添加，可在下文的步骤中继续使用。
2. 按照以下说明进行节点连线，并添加逻辑节点。
  1. 将Tab列表中的当Tab点击时事件与公办小学的显示动作连线。
  2. 在上述连线中添加串行数据处理节点，命名为id=1：小学。  
  详细操作方法请参见[什么是蓝图编辑器](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/what-is-blueprint-editor#task-2517085)。
  3. 将Tab列表中的当Tab点击时事件与公办初中的显示动作连线。
  4. 在上述连线中添加串行数据处理节点，命名为id=2：初中。  
  详细操作方法请参见[什么是蓝图编辑器](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/what-is-blueprint-editor#task-2517085)。
3. 按照以下说明完成串行数据处理节点和组件节点之间的连线。

  * 将id=1：小学的串行数据处理节点与公办小学点和民办小学的显示动作连线；与公办初中点和民办初中的隐藏动作连线。
  * 将id=2：初中的串行数据处理节点与公办小学点和民办小学的隐藏动作连线；与公办初中点和民办初中的显示动作连线。  
连线完成后的样式如下图所示（截图中只包含了部分节点与连线）。![控制地图子组件显隐](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2607716951/p54711.png)
4. 配置串行数据处理节点。
  1. 右键单击名称为id=1：小学的串行数据处理节点，进入右侧配置面板，选择面板内其他配置栏下方的处理方法，单击右侧箭头打开脚本编辑区域。
  2. 在脚本编辑区域，输入代码，完成后单击保存。![小学子组件触发器代码](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2607716951/p54718.png)  
  当前处理方法的示例代码如下。  
  ```  
  return data.id == 1;  
  ```

**说明** 以上触发条件的原理是：单击小学Tab时，三个小学相关的地图子组件显示在可视化应用相应位置；三个初中相关的地图子组件隐藏不显示在可视化应用中。
  3. 使用同样的方式配置id=2：初中处理方法，示例代码如下。  
  ```  
  return data.id == 2;  
  ```  
由于Tab列表控制地图子组件显隐的同时要考虑到和单选框选项内的数据保持一致，因此需要继续执行以下步骤进行配置。
5. 在id=1：小学串行数据处理节点与公办小学点和民办小学的连线中分别添加两个串行数据处理节点，并分别命名为schooltype=公办和schooltype=民办。
6. 在id=2：初中的串行数据处理节点与公办初中点和民办初中的连线中分别添加两个串行数据处理节点，并分别命名为schooltype=公办和schooltype=民办。  
串行数据处理节点添加完成后，最终效果实现双重判断标准，部分截图如下所示。![双重判断连线](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2607716951/p54805.png)
7. 使用同样的方式，按照以下说明，配置用于单选框判断的触发器。![schooltype=公办单选框判断代码](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2607716951/p54806.png)

**重要**  
在进行以下配置前，您需要首先在画布编辑器内配置单选框组件的交互事件。  
在单选框组件的交互面板中，选中当值变化时右侧的启用，在value字段对应的绑定到变量输入框中输入schoolType。  
![设置变量值](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2607716951/p54809.png)
  * schooltype=公办触发器的触发条件为：  
  ```  
  return getCallbackValue('schoolType') && (getCallbackValue('schoolType') == "全选" || getCallbackValue('schoolType') == "公办");  
  ```  
  以上代码的作用是获取单选框中全局变量的值，判断当前单选框的状态。
  * schooltype=民办触发器的触发条件为：  
  ```  
  return getCallbackValue('schoolType') && (getCallbackValue('schoolType') == "全选" || getCallbackValue('schoolType') == "民办");  
  ```