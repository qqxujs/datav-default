# DataV封装ECharts功能介绍 %{#378173}% 

本文从index.js文件、package.json文件以及实操演示三个方面介绍DataV自定义组件如何封装Echarts。

## 课程说明

### index.js与package.json文件的作用

package.json是用来定义接入DataV时组件的配置项，例如开放给您配置的组件样式、组件静态数据、组件初始化大小以及蓝图方法等。

index.js是编写组件渲染方法和业务逻辑数据处理的脚本文件，只是在该js文件上预定了接入DataV的方法。例如初始化时调用init方法，渲染dom元素时调用render方法等。

### index.js格式说明

![index.js ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0161899361/p369475.png)index.js的主要方法有init、render、resize、updateOptions和destroy等方法。

* index.js文件中init和destroy方法说明：index.js中的init方法是在组件初始化时调用，会传递`config`参数，`config`参数对应取的是package.json定义的`config`字段，表示组件的样式信息。destroy方法则是在组件销毁时调用，例如在公网DataV环境中删除画布编辑器中的组件，则会调用该方法处理销毁实例的动作。
* index.js文件中render和updateOptions方法说明：index.js中的render方法在init方法之后执行，会传递`data`和`config`（不是必须的）参数。`data`参数代表的是组件数据接口返回的数据，而`config`参数是组件的样式配置，与init方法传递的`config`参数原理相同。updateOptions方法比较特殊，可以设置也可以不设置，如果设置了updateOptions方法，那么在调整组件样式时，不会触发render方法，而触发updateOptions方法；如果没有设置updateOptions方法，则正常调用render方法并传递`config`参数。
* index.js文件emit和resize方法说明：index.js中的emit方法需要在package.json的events配置中声明后，蓝图编辑器中才会出现此事件，它抛出事件的`value`值需要为object类型。此方法也可以在交互面板中使用。resize方法则是在修改组件大小时会触发，传递当前大小的`width`和`height`参数。

### package.json格式说明

![package.json](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0161899361/p369549.png)

* package.json文件view配置属性说明：在package.json里主要定义了组件名称、依赖包和版本等一些接入的配置信息，其中在**datav->view**配置属性下的配置是用来定义组件最上层div的初始化大小。
* package.json文件apis与api\_data配置属性说明：在package.json文件中**datav->apis**配置用来定义组件数据接口所需要的字段以及触发的方法，而api\_data是与apis对应，是组件的静态数据源。

**说明** 

组件发布到公网环境中才可以在组件配置里选择动态数据接口。

* package.json文件config配置属性说明：在package.json里**datav->config**配置属性是作为配置组件样式可视化界面的参数，例如字体大小、颜色等一些配置项。当用户修改了组件样式配置，就会调用index.js里的render或者updateOptions方法，并传递修改后的`config`属性。

**说明** 

只有当没有设置updateOptions方法时才会调用render方法。

* package.json文件events配置属性说明：在package.json里**datav->events**配置属性用来定义蓝图事件（回调事件）的设置项，触发方式需要通过组件自定义事件去触发this.emit来抛出参数，进而实现与其他组件的联动效果，或者触发蓝图的事件。
* package.json文件publicHandler配置属性说明：在package.json里**datav->publicHandler**配置属性用来定义组件蓝图里的动作接口。在publicHandler配置里自定义一个名称，例如select。该名称需要与index.js里定义的方法名相同，在公网上通过蓝图去触发组件的动作时，就会触发index.js里相应的方法去实现对应的效果。

## 实操演示

以下通过实操演示如何接入ECharts组件到DataV页面中。

1. 配置组件包。  
通过命令行生成组件包，关于组件包的生成方式请参见：[组件开发快速入门](/zh/datav/datav-6-0/user-guide/getting-started-for-developers)生成组件包部分。  
关于各配置的说明请参见：[控件配置规范](/zh/datav/datav-6-0/user-guide/control-configurations)。  
package.json包的内容，关于package.json文件规范请参见：[package.json规范](/zh/datav/datav-6-0/user-guide/specifications-of-a-package-json-file-1)。  
```  
{  
  "name": "@jxb-test/b",         //填写公网组件包的英文名，后面为组件自身的英文名  
  "version": "0.0.1",            //填写版本信息  
//组件的依赖环境  
  "dependencies": {  
    "bcore": "0.0.18",  
    "jquery": "2.1.4",  
    "lodash": "4.6.1",  
    "echarts": "5.0.0"  
  },  
  "datav": {  
    "cn_name": "b",  
    "icon": "",  
    "protocol": 2,  
    "type": [  
      "regular"  
    ],  
    "events": {  
      "echarts-click": {  
        "description": "echarts点击",  
        "fields": {  
          "value": {  
            "description": "value"  
          },  
          "x": {  
            "description": "x"  
          }  
        }  
      }  
    },  
    "publicHandler": {  
      "showTooltip": {  
        "name": "展示弹窗",  
        "description": "展示弹窗",  
        "type": "object",  
        "fields": {  
          "data": {  
            "name": "数据",  
            "type": "boolean"  
          }  
        }  
      }  
    },  
    "view": {  
      "width": "400",  
      "height": "200",  
      "minWidth": "200",  
      "minHeight": "100"  
    },  
    "apis": {  
      "source": {  
        "handler": "render",  
        "description": "接口描述",  
        "fields": {  
          "value": {  
            "description": "值说明"  
          }  
        }  
      }  
    },  
    "config": {  
      "tooltipShow": {  
        "name": "展示弹窗",  
        "type": "switch",  
        "default": true,  
        "statusText": true  
      }  
    },  
    "api_data": {  
      "source": [  
        {  
          "x": [  
            "Mon",  
            "Tue",  
            "Wed",  
            "Thu",  
            "Fri",  
            "Sat",  
            "Sun"  
          ],  
          "value": [  
            150,  
            230,  
            224,  
            218,  
            135,  
            147,  
            260  
          ]  
        }  
      ]  
    }  
  }  
}  
```

**说明**  
将梳理的配置和数据按照[package.json规范](/zh/datav/datav-6-0/user-guide/specifications-of-a-package-json-file-1)写入package.json，需要注意以下几点。

  * 可以删除自己组件不需要的配置。
  * 若需要案例代码中没有的配置，可从[ECharts配置项手册](https://echarts.apache.org/)中获取。
  * ECharts配置项种类繁多，大部分都已支持，但是不支持以下三点。

    * 配置项是函数。
    * ECharts自己的类型，例如echarts.datatool.xxx。
    * 目前也暂不支持一个配置项有多种类型，例如既可以是text类型，也可以是number类型。
  * 配置结构与ECharts一致，若确实不能一致，需要在index.js中自定义实现转换（所以也可以支持echarts.datatool等echarts类型）。  
indnex.js包的内容，关于index.js规范请参见：[index.js规范](/zh/datav/datav-6-0/user-guide/specifications-of-an-index-js-file-1)。  
```  
var Event = require('bcore/event');  
var $ = require('jquery');  
var _ = require('lodash');  
var ECharts = require('echarts');  
const { param } = require('jquery');  
/**
 * 马良基础类
 */  
module.exports = Event.extend(function Base (container, config) {  
  this.config = {  
    theme: {}  
  }  
  this.container = $(container);           //容器  
  this.apis = config.apis;                 //hook一定要有  
  this._data = null;                       //数据  
  this.chart = null;                       //图表  
  this.init(config);  
}, {  
  /**
   * 公有初始化
   */  
  init: function (config) {  
    //1.初始化,合并配置  
    this.mergeConfig(config);  
    //2.刷新布局,针对有子组件的组件 可有可无  
    this.updateLayout();  
    //3.子组件实例化  
    this.chart = ECharts.init(this.container[0]);  
    //4.如果有需要, 更新样式  
    this.updateStyle();  
  },  
  /**
   * 绘制
   * @param data
   * @param options 不一定有
   * !!注意：第二个参数支持config, 就不需要updateOptions这个方法了
   */  
  render: function (data, config) {  
    data = this.data(data);  
    var cfg = this.mergeConfig(config);  
    console.log(data)  
    console.log(cfg)  
    //更新图表  
    this.chart.setOption({  
      xAxis: {  
        type: 'category',  
        data: data[0].x,  
        axisLabel: {  
          color: 'rgba(0,255,255,1)',  
          fontSize: 10  
        }  
      },  
      yAxis: {  
        type: 'value'  
      },  
      tooltip: {  
        show: cfg.tooltipShow,  
        trigger: 'axis'  
      },  
      series: [  
        {  
          data: data[0].value,  
          type: 'line'  
        }  
      ]  
    })  
    var a = this;  
    this.chart.on('click', function (params) {  
      a.emit('echarts-click', { value: params.data, x: params.name })  
    })  
    //如果有需要的话,更新样式  
    this.updateStyle();  
  },  
  showTooltip: function (show) {  
    this.chart.setOption({  
      xAxis: {  
        type: 'category',  
        data: this._data[0].x,  
        axisLabel: {  
          color: 'rgba(0,255,255,1)',  
          fontSize: 10  
        }  
      },  
      yAxis: {  
        type: 'value'  
      },  
      tooltip: {  
        show: show,  
        trigger: 'axis'  
      },  
      series: [  
        {  
          data: this._data[0].value,  
          type: 'line'  
        }  
      ]  
    })  
    var a = this;  
    this.chart.on('click', function (params) {  
      a.emit('echarts-click', { value: params.data, x: params.name })  
    })  
  },  
  /**
   *
   * @param width
   * @param height
   */  
  resize: function (width, height) {  
    this.updateLayout(width, height);  
    //更新图表  
    //this.chart.render({  
    //  width: width,  
    //  height: height  
    //})  
  },  
  /**
   * 每个组件根据自身需要,从主题中获取颜色覆盖到自身配置的颜色中.
   * 暂时可以不填内容
   */  
  setColors: function () {  
    //比如  
    //var cfg = this.config;  
    //cfg.color = cfg.theme.series[0]    ||    cfg.color;  
  },  
  /**
   * 数据,设置和获取数据
   * @param data
   * @returns {*|number}
   */  
  data: function (data) {  
    if (data) {  
      this._data = data;  
    }  
    return this._data;  
  },  
  /**
   * 更新配置
   * 优先级: config.colors > config.theme > this.config.theme > this.config.colors
   * [注] 有数组的配置一定要替换
   * @param config
   * @private
   */  
  mergeConfig: function (config) {  
    if (!config) { return this.config }  
    this.config.theme = _.defaultsDeep(config.theme    ||    {}, this.config.theme);  
    this.setColors();  
    this.config = _.defaultsDeep(config    ||    {}, this.config);  
    return this.config;  
  },  
  /**
   * 更新布局
   * 可有可无
   */  
  updateLayout: function () { },  
  /**
   * 更新样式
   * 有些子组件控制不到的,但是需要控制改变的,在这里实现
   */  
  updateStyle: function () {  
    var cfg = this.config;  
    this.container.css({  
      'font-size': cfg.size + 'px',  
      'color': cfg.color    ||    '#fff'  
    });  
  },  
  /**
   * 更新配置
   * !!注意：如果render支持第二个参数options, 那updateOptions不是必须的
   */  
  //updateOptions: function (options) {},  
  /**
   * 更新某些配置
   * 给可以增量更新配置的组件用
   */  
  //updateXXX: function () {},  
  /**
   * 销毁组件
   */  
  destroy: function () { console.log('请实现 destroy 方法') }  
});  
```

**说明**  
参见[index.js规范](/zh/datav/datav-6-0/user-guide/specifications-of-an-index-js-file-1)文档，按照以下方法编写index.js文件：

  * 在初始化方法中，执行`EChart.init`。
  * 在渲染方法中，执行`chart.setOption`。
  * 在缩放方法中，执行`chart.resize`。
  * 在清空方法中，执行`chart.clear`。
  * 在销毁方法中，执行`chart.dispose`。
2. 配置完成后，您可以将组件上传发布，发布成功后，您可以在DataV控制台刷新页面搜索您发布的组件。![测试组件展示](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5999899361/p371792.png)

**说明**  
由于缓存现象，需要强刷新一下页面，然后再搜索您创建的组件名称。
3. 右键单击**测试组件，**选择**导出到蓝图编辑器**，将组件导出到蓝图编辑器。![导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8974999361/p371803.png)
4. 在蓝图编辑器画布页面，设置事件的交互并记录日志。![蓝图配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8974999361/p371805.png)
5. 单击右上角**调试预览**![调试预览按钮](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8974999361/p371812.png)按键，查看预览结果。![调试预览](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9974999361/p371811.png)
6. 在package.json中输入以下代码，为您创建的组件添加展示提示信息的动作，相关配置请参见：package.json文件规范。  
```  
  "publicHandler": {  
    "show": {  
      "name": "展示弹窗",  
      "description"： "展示弹窗",  
      "type": "object",                  // 可以为object、array、null和any，any表示任意类型。  
      "fields": {  
        "data": {  
          "name": "数据",  
          "type": "boolean",  
          "children": {  
                    ...  
          }  
        }  
      }  
    }  
  },  
```
7. 在画布编辑器页面，单击**测试组件**右侧配置面板中的**更新版本**，将组件更新到最新版本。![更新版本](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9974999361/p371892.png)
8. 在蓝图编辑器画布页面，按照下图设置组件相应动作的连线。![组件动作设置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9974999361/p371895.png)
9. 单击蓝图编辑器右上角的**预览**按键，在预览页面，查看预览蓝图交互的效果。![预览页面](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9974999361/p371899.png)

**说明**  
  * 您可以在index.js文件中设置调整组件的大小。
  * 您可以通过destroy方法删除组件。

## **视频链接**

DataV小课堂直播视频：[自定义组件-ECharts封装](https://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/d/ud/346085933811.mp4)。