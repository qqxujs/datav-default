 

三维城市构建器项目内的蓝图编辑器功能，用于编辑项目黑盒产物中的逻辑控制。本文介绍三维城市构建器项目中蓝图编辑器的使用方法。

三维城市构建器项目场景编辑器内，您可以将图层，关键帧和场景分把导出到蓝图编辑器，并进入蓝图编辑器内进行逻辑交互的编排。

## 三维城市构建器场景蓝图编辑器交互配置说明

1.  在项目场景编辑器页面内，单击页面左上角的![蓝图图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7416559951/p101929.png)图标。
    
2.  在蓝图编辑器配置页面，单击导入节点栏内的**三维城市构建器**节点，在画布中可以看到如下图所示的三维城市构建器组件的蓝图编辑器配置参数。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3689972761/p516030.png)
    
    -   **事件**
        
        **事件**
        
        **说明**
        
        **场景加载完成**
        
        场景加载完成，不需要抛出数据。
        
        **定位锚点屏幕位置改变**
        
        定位锚点屏幕位置改变，会抛出当前视角下定位锚点的屏幕坐标数组。
        
        **说明**
        
        屏幕的定位锚点，就是在三维场景中目标位置，由经度、纬度、高程和ID（可选）定义，二维图表将被吸附在设置好的定位锚点目标位置处。
        
    -   **动作**
        
        **动作**
        
        **说明**
        
        **显示**
        
        显示组件，参数示例如下所示。
        
        ```
           {
             "animation": {
             // 动画方式，可选fade，不填无动画。
             "animationType": "",
             // 显示延时，单位为ms。
             "animationDuration": 1000,
             // 显示动画函数，可选linear|easeInOutQuad|easeInOutExpo。
             "animationEasing": "linear"
             }
           }
        ```
        
        **隐藏**
        
        隐藏组件，参数示例如下所示。
        
        ```
           {
             "animation": {
             // 动画方式，可选fade，不填无动画。
             "animationType": "",
             // 显示延时，单位为ms。
             "animationDuration": 1000,
             // 显示动画函数，可选linear|easeInOutQuad|easeInOutExpo。
             "animationEasing": "linear"
             }
           }
        ```
        
        **播放当前场景动画**
        
        播放当前场景动画，不需要参数。
        
        **暂停当前场景动画**
        
        暂停当前场景动画，不需要参数。
        
        **停止当前场景动画**
        
        停止当前场景动画，不需要参数。
        
        **改变相机位置和旋转**
        
        平滑移动相机位置和旋转角度，动态传入数据为object类型，参数示例如下所示。
        
        ```
        {
          "position": {},//新的相机位置
          "rotation": {},//新的旋转角度
          "duration": 1, //相机平滑过渡的时间ms
          "easeType": "" //缓动函数类型
        }
        ```
        
        **开关屏幕定位锚点**
        
        是否需要屏幕定位锚点，动作传入数据为object类型，参数示例如下所示。
        
        ```
        {
          "flag": true // 是否需要屏幕定位锚点
        }
        ```
        
        **添加屏幕定位锚点**
        
        添加三维空间屏幕定位锚点，动作传入数据为object和needClear（布尔型）类型，参数示例如下所示。
        
        ```
        {
          "anchors": [],     //定位锚点
          "needClear": true  //是否清除已有锚点，默认值true
        }
        ```
        
        **说明**
        
        屏幕的定位锚点，就是在三维场景中目标位置，由经度、纬度、高程和ID（可选）定义，二维图表将被吸附在设置好的目标定位锚点位置处。
        
        **聚焦**
        
        将相机聚焦到指定位置，参数示例如下所示。
        
        ```
        {
          "data": {
            "lng": 1,
            "lat": 1,
            "altitude": 1
          },
          "rotation": {
            "tilt": 89,
            "pan": 1
          },
          "duration": 2000,
          "easeType": "linear",
          "altitudeOffset": 600
        }
        ```
        
        **更新组件配置**
        
        更新组件配置，不需要参数。
        
        **切换显隐状态**
        
        切换组件显示或者隐藏，参数示例如下所示。
        
        ```
            {
              // 显示为true，隐藏为false。
              "status": true,
              // 显示动画。
              "animationIn": {
                // 动画方式，可选fade，不填无动画。
                "animationType": "fade",
                // 显示延时，单位为ms。
                "animationDuration": 1000,
                // 显示动画函数，可选linear|easeInOutQuad|easeInOutExpo。
                "animationEasing": "linear"
              },
              // 隐藏动画。
              "animationOut": {
                // 动画方式，可选fade，不填无动画。
                "animationType": "fade",
                // 隐藏延时，单位为ms。
                "animationDuration": 1000,
                // 隐藏动画函数，可选linear|easeInOutQuad|easeInOutExpo。
                "animationEasing": "linear"
              }
            }
        ```
        
        **移动**
        
        将组件移动到指定位置。参数示例如下所示。
        
        ```
            {
              // 移动方式。绝对定位：to，相对定位：by。默认值：to。
                "positionType": "to",
              // 指定位置。x坐标，y坐标。
              "attr": {
                "x": 0,
                "y": 0
              },
              // 动画方式。
              "animation": {
                "enable": false,
                // 动画延时。
                "animationDuration": 1000,
                // 动画曲线。可选值为：linear|easeInOutQuad|easeInOutExpo。
                "animationEasing": "linear"
              }
            }
        ```