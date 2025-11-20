# DataV自定义组件开发介绍 %{#378275}% 

本文面向具有前端开发功底的前端开发者，如果发现DataV的组件或者素材满足不了使用场景时，可以采用自定义组件的形式开发所需要的组件。

## 开发环境

您可以进入[Node.js官网](https://nodejs.org/)，下载并安装Node.js，推荐Node版本在8.0.0及以上且在10.12.0以下，版本过高过低均不可以使用。同时推荐使用nvm管理Node，详细安装过程请参见[组件开发快速入门](/zh/datav/datav-6-0/user-guide/getting-started-for-developers)。

**说明** 

如果您已经安装了windows node，却无法使用或找不到，一般是由于环境变量不对导致。

安装成功后，在命令行操作界面执行`node -v`命令，查看和验证Node版本。

## **新建组件包**

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在控制台页面，单击**我的资产 > 我的组件包 > 新建组件包项目**。![新建组件包](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6475330461/p371187.png)
3. 输入组件包**英文名**和**中文名**，单击右下角的**创建**。![新建组件包项目](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6475330461/p371286.png)

**说明**  
组件包英文名使用：公司名.组件包名或者公司名-组件包名；中文名可以自定义。
4. 组件包创建完成后显示组件包正在审核中，目前是通过人工方式审核组件包，如果您创建的组件包长时间未审核或者审核不通过，可以联系技术支持工程师解决。![组件包审核](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6475330461/p371288.png)
5. 组件包审核成功后，输入以下代码下载命令行工具datav-cli。  
```  
npm install datav-cli -g  
```
6. 输入`datav --version`查看开发工具版本。
7. 在DataV控制台，右上角可以查看您的**用户名**，在**我的组件包**上方单击复制**开发者识别码**在命令行工具中输入`datav login`进行用户登录。![用户登录](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6475330461/p371318.png)
8. 登录成功后，在命令行工具汇总输入`datav init`，并输入您要创建的**组件名称**、组件的**显示名称**、**组件描述**以及**基本文字生成组件**，创建完成后，桌面会自动生成一个组件文件夹。
9. 在命令行工具中输入`datav run`，可以在本地预览您创建的组件。
10. 预览完成后，如果您需要将组件发布到线上，有两种方法：

  * 方法一：在组件目录下，执行`datav publish`命令，这种方式需要用到用户名和开发者识别码。（推荐使用）
  * 方法二：在组件目录下，执行`datav package`命令，在组件目录外将生成一个以“组件名-版本号”命名的tar.gz压缩包，将此压缩包上传至datav.aliyun.com我的组件包中。

**说明**  
`datav publish`命令执行后，打包流程将在服务器中进行，会产生打包排队时间。如提示发布成功但产品中拉取组件报错，很可能是打包正在队列中，请耐心等待一段时间再刷新浏览器重试。  
将组件用开发工具打开，主要涉及package.json和index.js两种文件的配置，其中package.json文件中设置代码请参见：  
```  
{  
  "name": "@aliyun-datav_design/datav-r",        //需要和组件包的英文名一致  
  "version": "0.0.9",  
  "dependencies": {  
    "bcore": "0.0.18",  
    "jquery": "2.1.4",  
    "lodash": "4.6.1"  
  },  
  "datav": {  
    "cn_name": "datav-r",  
    "icon": "",  
    "protocol": 2,  
    "type": [  
      "regular"  
    ],  
    "view": {  
      "width": "400",  
      "height": "600",  
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
      "size": {  
        "name": "字号",  
        "type": "number",  
        "default": 22,  
        "range": [  
          10,  
          100  
        ]  
      },  
      "color": {  
        "name": "字体颜色",  
        "type": "color",  
        "default": "#fff"  
    },"path": {  
      "type": "hidden",  
      "default": "./resources/img.png"  
    }  
    },  
    "events": {  
      "button-click": {  
        "name": "当点击时",  
        "description": "我是description, 在点击时",  
        "type": "string"  
      }  
    },  
    "publicHandler": {  
      "setColor": {  
        "name": "改变文字颜色",  
        "type": "object",  
        "fields": {  
          "color": {  
            "name": "文字颜色",  
            "description": "改变文字颜色",  
            "type": "string    |    number",  
            "default": "red"  
          }  
        }  
      }  
    },  
    "api_data": {  
      "source": [  
        {  
          "value": "值test"  
        }  
      ]  
    }  
  }  
}  
```
11. 发布成功后，您可以在可视化应用中查看已创建的组件的具体展示效果。

## **组件结构**

index.js为主程序入口，package.json为配置文件。![文件结构](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6475330461/p375508.png)

其中index.js文件中的主要方法如下，其它方法及配置规范请参见[index.js规范](/zh/datav/datav-6-0/user-guide/specifications-of-an-index-js-file-1)。

* Init()：初始化。
* render(array: data)：默认渲染方法（组件渲染数据）。
* destroy()：销毁，当组件被销毁时调用。

package.json常用字段规范如下，其它字段配置规范请参见[package.json规范](/zh/datav/datav-6-0/user-guide/specifications-of-a-package-json-file-1)。

* 组件类型名称样式定义。
* 交互事件规范。
* GUI字段规范。
* 数据字段规范。
* 节点式编程动作字段规范。

### 实操教学

配置package.json文件，请参见[package.json规范](/zh/datav/datav-6-0/user-guide/specifications-of-a-package-json-file-1)：

```
{
  "name": "@aliyun-datav_design/datav-r",        //需要和组件包的英文名一致
  "version": "0.0.9",
  "dependencies": { 
    "bcore": "0.0.18",
    "jquery": "2.1.4",
    "lodash": "4.6.1"
  },
  "datav": {
    "cn_name": "datav-r",
    "icon": "",
    "protocol": 2,
    "type": [
      "regular"
    ],
    "view": {
      "width": "400",
      "height": "600",
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
      "size": {
        "name": "字号",
        "type": "number",
        "default": 22,
        "range": [
          10,
          100
        ]
      },
      "color": {
        "name": "字体颜色",
        "type": "color",
        "default": "#fff"
    },"path": {
      "type": "hidden",
      "default": "./resources/img.png"
    }
    },
    "events": {
      "button-click": {
        "name": "当点击时",
        "description": "我是description, 在点击时",
        "type": "string"
      }
    },
    "publicHandler": {
      "setColor": {
        "name": "改变文字颜色",
        "type": "object",
        "fields": {
          "color": {
            "name": "文字颜色",
            "description": "改变文字颜色",
            "type": "string    |    number",
            "default": "red"
          }
        }
      }
    },
    "api_data": {
      "source": [
        {
          "value": "值test"
        }
      ]
    }
  }
}

```

**说明** 

关于颜色的配置详情请参见[color](/zh/datav/datav-6-0/user-guide/color)。

配置index.js文件，请参见[index.js规范](/zh/datav/datav-6-0/user-guide/specifications-of-an-index-js-file-1)：

```
var Event = require('bcore/event');
var $ = require('jquery');
var _ = require('lodash');
//var Chart = require('XXX');

/**
 * 马良基础类
 */
module.exports = Event.extend(function Base(container, config) {
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
    //2.刷新布局,针对有子组件的组件可有可无
    this.updateLayout();
    //3.子组件实例化
    //this.chart = new Chart(this.container[0], this.config);
    //4.如果有需要, 更新样式
    this.updateStyle(); this.container.append('<div class="button">1111111</div>')
    this.button = this.container.find(".button");
//  默认样式（不建议在组件中引全局css样式表, 直接用js写）
      this.button.css({
        color: "#fff",
        cursor: "pointer",
      });
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
    //更新图表
    //this.chart.render(data, cfg);
    // this.container.html(data[0].value)
    //如果有需要的话,更新样式
    this.updateStyle(); this.button.html(_.get(data, [0, "value"]));
    // 点击事件（如何配置回调ID）
    var _this = this;
    this.button.on("click", function () {
      _this.emit("button-click", {"value": $(this).html()});
      
    });
  },
  setColor: function(obj){
    this.button.css({color: obj.color})
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
   * 优先级：config.colors > config.theme > this.config.theme > this.config.colors
   * [注] 有数组的配置一定要替换
   * @param config
   * @private
   */
  mergeConfig: function (config) {
    if (!config) {return this.config}
    this.config.theme = _.defaultsDeep(config.theme    ||    {}, this.config.theme);
    this.setColors();
    this.config = _.defaultsDeep(config    ||    {}, this.config);
    return this.config;
  },
  /**
   * 更新布局
   * 可有可无
   */
  updateLayout: function () {},
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
   destroy: function(){console.log('请实现 destroy 方法')}
});
```

## 常见问题

1. 在自定义开发组件时如何使用css？  
为了避免可视化应用中组件样式污染，组件应尽量避免单独创建使用层叠样式表，建议您可以在主程序中通过JS来修改**dom**样式。
2. 在自定义开发组件时如何使用html？  
您可以在主程序中通过单独引入html文件或通过字符串模板来创建html标签。
3. 在自定义开发组件时如何配置回调ID？

  * 在package.json配置文件中，`datav`字段下按正确的格式定义好**events**事件名及参数。
  * 在index.js主程序中使用如下方法发送事件名及数据参数。  
  ```  
  this.emit(string:event_name,object: value)  
  ```

**说明**  
  参数`value`须为一个对象。
  * 在可视化应用组件交互面板中开启交互后，其它组件即可在数据库等动态数据源中通过冒号加参数名来调用该组件抛出的对应回调数据。
4. 自定义开发组件时，如何在节点式编程中注册组件方法？

  * 在package.json配置文件中，`datav`字段下按正确的格式定义好**publicHandler**动作名称及参数。
  * 在index.js主程序中实现配置文件中定义的对应动作的代码逻辑。
5. 自定义开发组件时使用的开发工具，如何登录？  
您可以使用**用户名**和**令牌token**进行登录。其中用户名为DataV主账号控制台右上角显示的用户名；令牌token为**开发者识别码**。

**说明**  
开发者识别码查看方式，在DataV控制台首页，选择**我的资产** \> **我的组件包**，单击**开发者识别码**进行复制，然后粘贴到输入框中即可。  
![登录方法](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6475330461/p375840.png)
6. 自定义开发组件时，组件发布失败怎么办？  
您可以通过检查配置文件package.json中的`name`字段是否修改成已审核通过的组件包英文名，进一步确认组件是否有发布权限，其中`name`字段的正确格式为**@namespace/xxx**，其它解决方案您可以参见[自定义组件开发常见问题](/zh/datav/datav-6-0/user-guide/faq-about-custom-component-development)。

## **视频链接**

DataV小课堂直播视频：[自定义组件-开发第一课](https://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/d/ud/352178225847.mp4)。