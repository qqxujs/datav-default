  “三维城市组件创建成功却无法显示”的WebGL与显卡配置解决方法-DataV数据可视化-阿里云

本文介绍Windows系统下三维城市组件创建成功却无法显示的问题，以及相应的解决方法。

三维城市组件创建成功却无法显示的问题，一般是由WebGL 2.0未打开或者是集显运行WebGL 2.0导致的。请根据具体问题，选择合适的解决方案。

**说明** 如果按照以下解决方案依然无法解决问题，请联系阿里云技术支持工程师解决。

## WebGL 2.0未打开时的解决方案

首先确保电脑有独立显卡，并且Chrome是最新版本，然后打开[webglreport.com/?v=2](https://webglreport.com/?v=2)，如果提示WebGL 2.0未开启，则需要在浏览器设置中启用。

图 1. 报错图

![报错图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0667197861/p687093.jpg)

启用方法如下：

1.  在Chrome浏览器中访问`chrome://flags`。
2.  在搜索框内输入WebGL。
3.  将WebGL 2.0 Compute设置为Enabled状态，并重启Chrome浏览器。![WebGL 2.0设置为Enable状态](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4378068951/p87561.png)
4.  打开[webglreport.com/?v=2](https://webglreport.com/?v=2)，查看是否成功启用WebGL 2.0 Compute。
    
    启用成功时，显示如下界面。
    
    ![webGL2显示页面](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4378068951/p87492.png)
    
    开启了WebGL 2.0 Compute后，还需要注意图中框选的位置。检查框选位置处是否为您的独立显卡并且是Direct3D11。
    
    -   如果显示的不是独立显卡，而是集显，需要切换为独立显卡，具体解决方案请参见[显示的不是独立显卡，而是集显情况时的解决方案](#section-x8p-qh8-zyy)。
    -   如果使用的不是Direct3D11，那么页面会显示上文的[报错图](#fig-1fz-tyi-8b3)。此时需要切换到WebGL 1，查看是否使用了Direct3D9。如果是，需要切换为Direct3D11，具体解决方案请参见[使用了Direct3D9情况时的解决方案](#section-ncu-0bf-9e8)。
    

## 显示的不是独立显卡，而是集显情况时的解决方案

当Unmasked Renderer中显示的不是独立显卡，而是集显时，则需要切换为独立显卡。以N卡为例，具体操作步骤如下：

1.  打开3D显卡驱动内的管理3D设置 > 程序设置，选择Chrome浏览器（如果没有Chrome浏览器选项则添加一个），设置首选图形处理器为您的独立显卡。![管理3D设置程序设置页面](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4378068951/p87507.png)
2.  检查全局设置中是否也设置了独立显卡。![全局设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4378068951/p87508.png)
3.  重启Chrome浏览器，访问[webglreport.com/?v=2](https://webglreport.com/?v=2)。
    
    当Unmasked Renderer中显示的是独立显卡时，表示设置成功。
    

## 使用了Direct3D9情况时的解决方案

Direct3D11支持WebGL 2.0，而Direct3D9不支持。因此如果使用了Direct3D9，需要切换为Direct3D11，具体操作步骤如下：

1.  打开Chrome浏览器，访问[webglreport.com/?v=1](https://webglreport.com/?v=2)，查看WebGL 1中显示的内容。![webgl1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4378068951/p87515.png)
    
    **说明** 图中框选的内容，可以查看到Unmasked Renderer中包含了Direct3D9。
    
2.  打开Chrome浏览器，访问`chrome://flags`，并搜索Choose ANGLE graphics backend（如果搜索不到建议拆分单词来搜索）。
3.  选择配置为D3D11。![选择配置为D3D11](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4378068951/p87555.png)
4.  重启Chrome浏览器，访问[webglreport.com/?v=1](https://webglreport.com/?v=2)。
    
    当Unmasked Renderer中包含Direct3D11时，表示设置成功。