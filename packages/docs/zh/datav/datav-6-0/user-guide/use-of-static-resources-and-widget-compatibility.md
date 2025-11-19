# DataV使用静态资源&组件兼容介绍 %{#372608}% 

本文从静态资源的使用和组件兼容更新两方面介绍自定义组件开发问题的解决方法。

## 静态资源

在自定义组件中，经常会使用到本地的一些静态资源，但是有时您可能会遇见，本地可以运行的资源，在线上却报出**找不到资源**的错误，所以本文将从以下三个方面介绍如何在线上使用本地的一些资源，即静态资源的使用。

### 常见错误

错误展示：在自定义组件中，使用了一张静态图片，在本地运行时没有问题，但是打包传到DataV环境测试时，会出现找不到该图片的情况。

**说明** 

在可视化应用中图片的查找路径是在screen下，由于路径查找错误可能会导致找不到图片。

代码展示：

```
this.container.html(`<img src=“./xiaowu.jpeg">`)；
```

![p369165](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5427455071/p759345.png)

### 解决方法

本文将会分享三种方法，您可以根据实际的业务场景选择对应的解决方法。

方法一：您可以将静态资源活化，存到线上服务器中，变成一个线上地址，然后再使用。设置代码请参见：

```
this.container.html('<img src=" 
https://img.alicdn.com/imgextra/i2/O1CN01ldWLoO1DJoLjOxRKU_!!6000000000196-0-tps-700-1063.jpg 
">');
```

![方法一](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4682269361/p369238.png)

方法二：您可以在本地项目中新建resources文件夹，然后将静态资源放在新建文件夹的resources中，除此之外，您还需要在package.json（以下简称pkg）中注册一下，然后再使用。设置代码请参见：

```
//需要在package.json中注册的代码
"config": {
  "path": {
    "type": "hidden",
    "default": "./resources/xiaowu.jpg"
  }
},
//需要在index.js中使用的内容
this.container.html(`<img src=${cfg.path}>`);
```

**说明** 
* 新建的文件夹名称是固定的，必须是resources。
* 注册的目的是方便DataV将静态资源打包进组件中。

![方法二](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4682269361/p369247.png)

方法三：您可以将静态资源base64化，比较常见的是字体图标以及小图片等的处理。设置代码请参见：

```
this.container.html(`<img src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCI+PGRlZnM+PHN0eWxlLz48L2RlZnM+PHBhdGggZD0iTTQ5MS4xMzYgMjgyLjI0YzkuMzEyIDEuMjggMTguNjg4IDEuOTUyIDI4LjA2NCAxLjk1MiA1My4xMiAwIDEwMi44NDgtMjAuNDggMTQwLjA5Ni01Ny42OTYgNDQuMTI4LTQ0LjE2IDY0LjQ4LTEwNS40NzIgNTUuNzQ0LTE2OC4xNmEzMi4wMzIgMzIuMDMyIDAgMDAtMjcuMjk2LTI3LjI5NiAxOTguOTQ0IDE5OC45NDQgMCAwMC0xNjguMTYgNTUuNzQ0Yy00NC4xNiA0NC4xNi02NC40OCAxMDUuNDcyLTU1Ljc0NCAxNjguMTZhMzIgMzIgMCAwMDI3LjI5NiAyNy4yOTYiIGZpbGw9IiM4OEMwNTciLz48cGF0aCBkPSJNNzQzLjQ4OCAzMjQuNzY4Yy03Mi4zODQtMTkuODQtMTUwLjg0OC0zLjItMjE4LjA0OCA0NS42MzItNjcuMi00OC44MzItMTQ1LjY5Ni02NS41MzYtMjE4LjA4LTQ1LjYzMi0xNTAuOTc2IDQxLjYzMi0yMzMuNjk2IDIyOS42LTE4NC4zNTIgNDE5LjAwOCA0Mi40OTYgMTYzLjEzNiAxNjcuMDQgMjc3LjA1NiAzMDIuODggMjc3LjA1NmguMDMyYTIzMi4zODQgMjMyLjM4NCAwIDAwOTkuNTItMjIuNDk2IDIzNC44OCAyMzQuODggMCAwMDM3LjkyIDE0LjE3NiAyMzIuNjQgMjMyLjY0IDAgMDA2MS42IDguMzJjMTM1Ljg0IDAgMjYwLjQxNi0xMTMuOTIgMzAyLjkxMi0yNzcuMDU2IDQ5LjM0NC0xODkuNDA4LTMzLjM3Ni0zNzcuMzc2LTE4NC4zODQtNDE5LjAwOCIgZmlsbD0iI0VENzE2MSIvPjwvc3ZnPg==">`);
```

![方法三](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4682269361/p369249.png)

### 其它注意事项

在自定义组件本地部署化时使用HTTP请求资源，由于您可能处于同一个局域网环境中，请求不到外网资源，也会出现资源找不到的问题，此时需要您将HTTP请求资源在pkg中注册下，再在代码中使用，注册代码请参见：

```
"config": {
  "path": {
    "type": "hidden",
    "default": "./resources/xiaowu.jpg"
  }
},
```

![代码展示](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5682269361/p369254.png)

## 组件兼容更新

### 问题原因

在组件的开发维护周期中，会不断产生新的需求，不同的组件需要添加不同的功能。例如需要给标题组件添加一个背景色配置项。您可以用传统方法添加这个组件，这个只是针对配置简单的组件，但是如果组件自身已经绑定了许多业务逻辑，重新添加一个组件绑定就比较耗时，所以需要有更简便的方法，将组件一键更新就能得到新的功能。

### 前置知识

因为需要做兼容更新，那么您需要先了解组件版本的规范。DataV产品自定义组件符合semver的组件版本规范，标准的版本号采用X.Y.Z的格式，其中X是主版本号，Y是次版本号，Z是修订号。

主版本更新：是指组件发生不兼容修改，比如组件的配置项和代码进行了大范围修改，甚至是重构，已经无法兼容时，此时主版本号X需要递增，次版本号和修订号置为0，例如：0.1.2更新到1.0.0。

* 次版本更新：是指组件发生兼容新功能的修改，比如组件新增了背景色的配置项，此时次版本号Y需要递增，主版本号不变，修订号置为0，例如：1.2.3更新到1.3.0。
* 修订号更新：是指组件只发生了代码的修正，比如组件中修改了某个配置项的属性值，此时修订号Z 需要递增，主版本号和次版本号不变，例如：1.2.3更新到1.2.4。

### 解决方法

怎么兼容组件更新？本文将介绍组件更新的过程，例如给标题组件添加背景色配置项，单击组件更新后，背景色配置项并没有加上，而当单击背景色配置项后，才会出现背景色。结合下图分析，您可以了解组件一键更新的过程：![组件更新过程](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5682269361/p369283.png)

**说明** 

如果您给组件新增配置时，将老版本组件升级到新版本组件使用了新的代码，但是配置还是用老组件的配置，会出现找不到新增的配置，出现兼容问题。

配置项新增兼容：给标题组件新增背景色配置项。

首先您可以查看更新前后的配置项对比：

* 原版本组件配置项结构：![原版本组件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5682269361/p369326.png)
* 添加背景色配置项后的结构：![添加背景色后](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5682269361/p369328.png)
* 通用实现方法：在入口文件index.js的构造器中兼容背景色的配置。  
```  
module.exports = Event.extend(function Base(container, config) {  
  this.config = {  
    theme: {},  
    backgroundColor: "yellowGreen"         //本行代码属于关键代码  
  }  
  this.container = $(container);           //容器  
  this.apis = config.apis;                 //hook一定要有  
  this._data = null;                       //数据  
  this.chart = null;                       //图表  
  this.init(config);  
}, {  
render: function (data, config) {  
    data = this.data(data);  
    var cfg = this.mergeConfig(config);  
    //更新图表  
    //this.chart.render(data, cfg);  
    this.container.html(data[0].value);  
    this.container.css({backgroundColor: cfg.backgroundColor});  
    //如果有需要的话,更新样式  
    this.updateStyle();  
  },  
mergeConfig: function (config) {  
    if (!config) {return this.config}  
    this.config.theme = _.defaultsDeep(config.theme    ||    {}, this.config.theme);  
    this.setColors();  
    this.config = _.defaultsDeep(config    ||    {}, this.config);  
    return this.config;  
  },  
});  
```

![组件兼容更新](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5682269361/p369394.png)

* 配置项变更兼容：直播视频中以DataV5.x版本的**柱状图**组件的配置项修改为例，在分组模式下，将**组内间距**和**组间间距**配置项放在一个suite中，并添加开关配置。![更改前后配置项对比](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5682269361/p369395.png)

  * 原版本组件配置项结构：![原配置项结构](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5682269361/p369397.png)
  * 更改后组件配置项结构：![更改后配置项结构](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5682269361/p369398.png)
  * 实现方法：首先需要判断您使用的是新组件还是老版本升级的组件：
  * 如果您直接使用v5.1.3的新组件，则直接使用新的配置；
  * 如果您是在v5.1.2的老版本上升级的，那么需要兼容老配置的默认值。
* 兼容逻辑：您可以直接在代码中判断新配置项是否存在，而在构造器index.js中不兼容默认值。如果新配置项存在（说明是用户新添加的组件），则使用新配置项；如果新配置不存在（说明是从老版本升级上来的），则使用老配置。实现代码如下。  
```  
module.exports = Event.extend(function Base(container, config) {  
  this.config = {  
    options: {  
      chart: {  
        // 1. 此处不做任何兼容  
      }  
    }  
  }  
},{  
  render: function (data, config) {  
    let cfg = this.mergeConfig(config);  
      
    // 2. 此处判断新配置项是否存在  
    const {  
      chart: {  
        groupSpaceSet,  
        groupSpace,  
        groupInnerSpace,  
      }  
    } = cfg;  
      
    // 此处的兼容特殊，不是单纯的配置项增加或者删除，他是同一个功能配置经过名称和结构内容修改变成新配置项，  
    /*** 兼容逻辑是：构造器index.js中不兼容默认值，直接在代码中判断新配置项是否存在。  
        如果新配置项存在（说明是用户新添加的组件），则使用新配置项；  
        如果新配置不存在（说明是从老版本升级上来的），则使用老配置。***/  
      
    // 组内间距  
    const dodgePadding = _.isUndefined(groupSpaceSet)  
                        ? groupInnerSpace  
                        : (groupSpaceSet.show ? groupSpaceSet.groupInnerSpace : null);  
    // 组间间距  
    const intervalPadding = _.isUndefined(groupSpaceSet)  
                        ? groupSpace  
                        : (groupSpaceSet.show ? groupSpaceSet.groupSpace : null);  
  },  
  mergeConfig: function (config) {  
    if (!config) {return this.config}  
    this.config = _.defaultsDeep(config    ||    {}, this.config);  
    return this.config;  
  },  
...  
});  
```

**说明**  
组件兼容更新时，还包括数据兼容更新，类似于配置项兼容更新。当数据结构更改时，需要判断您传入的数据是老数据结构还是新数据结构。如果是老数据结构，需要将老数据结构转化为新数据结构；如果是新数据结构，那么不需要做数据变更兼容，直接进行主版本更新即可。  
![配置型更改兼容](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8890279361/p369446.png)

### 无法兼容处理方法

如果您遇到了组件实在无法兼容的情况，那您需要将兼容更新与主版本更新进行平衡。

|    更新方式    |    优点    |    缺点    |
|    ----    |    ----    |    ----    |
|    兼容更新    |    组件使用者体验更优，实时更新享用组件最新功能，减少替换组件带来的工作量。    |    组件兼容逻辑导致组件代码变长，维护难度升高。    |
|    主版本更新    |    组件开发者体验更优，组件逻辑简单，维护容易；代码量少，加载更快。    |    组件使用者的老组件无法获得迭代更新。    |

因此，每一种更新方式都有它的优缺点，您需要根据实际使用的场景，平衡选择您需要更新组件的方式。

## **视频链接**

DataV小课堂直播视频：[自定义组件-静态资源的使用和兼容刷新直播视频使用教程](https://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/d/ud/352659286021.mp4)。