<!DOCTYPE html> 

本文介绍了自定义组件开发时，智能主题设置和条件样式设置的实现方法。

## DataV组件智能主题

### 美化工具箱设置主题颜色

1. 在画布编辑器页面上方，单击美化工具箱![美化工具箱按钮](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1480926461/p403585.png)按键，在**我的主题**页签，**系统主题**模块处，您可以一键更换主题。如果系统主题无法满足您的需要，您可以单击**自定义主题**，在**色彩来源**处，单击**+点击上传风格图**上传自定义图片。上传完成后，通过拖动取色圈选择需要配置的主题颜色。
2. 自定义主题配置完成后，单击**保存主题**。![保存主题](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1480926461/p403694.png)
3. 在**保存主题**对话框中输入主题名称，单击**确定**。保存后返回到**我的主题** \> **已保存主题**中查看主题。![输入主题名称](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1480926461/p403695.png)
4. 选择主题颜色后，单击确认应用，即可应用主题颜色。

### 组件添加设置主题颜色

1. 在package.json文件中通过设置`supportTheme`为`true`来声明组件是否支持主题功能。 ![申明主题功能](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1480926461/p403761.png)
2. 在index.js文件中通过以下方法使用themeConfig中提供的主题配置项，应用于组件配置项，从而返回主题和映射项的配置关系。  
```  
getThemableConfig(themeConfig)  
```  
![设置主题映射关系](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1480926461/p403794.png)

**说明**  
themeConfig主要包含以下内容。  
![themeConfig主要内容](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1480926461/p403799.png)
3. 将需要添加主题的配置项用主题提供的配置项覆盖。![配置主题项](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2480926461/p403806.png)

### 实操演练

1. 创建一个自定义表示地区的列表组件，命名为**智能柱图&&条件样式**，在package.json文件中按照如下代码声明主题。  
```  
supportTheme：true  
```
2. 在index.js文件中按照如下代码配置主题映射关系。  
```  
getThemableConfig: function (themeConfig) {  
    if (!themeConfig) return null;  
    const { textColor, palette } = themeConfig;  
    const themeMap = {  
      options: {  
        global: {  
          color: textColor,  
          backgroundColor: _.map(_.get(this.config, "options.global.backgroundColor"), (d, i) => {  
            return palette[i] || palette[i % palette.length]  
          })  
        }  
      }  
    };  
    return themeMap;  
  },  
```
3. 在DataV控制台，**我的资产** \> **我的组件包**模块下，单击**上传组件**，选择已创建的组件上传至画布编辑器器中。![上传组件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2480926461/p406619.png)
4. 在画布编辑器页面，**我的资产**栏中单击添加**智能柱图&&条件样式**组件。
5. 添加完成后，单击美化工具箱![美化工具箱按钮](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2480926461/p406617.png)按钮，查看并设置配置好的背景色。![设置背景色效果展示](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2480926461/p406620.png)

## DataV组件条件样式

### 背景及逻辑

* 背景：条件样式用来设定满足一定条件下的组件视觉样式。
* 逻辑：使用条件配置中的值，如下图**柱状图**中的条件值`colorField==100`，去筛选出符合条件的数据，再用条件中的样式值覆盖符合条件数据的默认样式。![条件样式逻辑](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2480926461/p406638.png)

**说明**  
在可视化应用中，您可以选择组件，在**配置**面板，选择**条件**，单击打开条件设置开关，设置筛选条件。![设置筛选条件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2480926461/p406641.png)

### 组件样式配置项

采用tabs标签组设置逻辑树的标签以及柱状图的样式值。![组件样式配置项](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2480926461/p406645.png)

### 代码实现

使用工具包**alibabacloud-datav-tool-gui-utils**提供的验证函`validateCustomStyle`，验证符合条件的数据。代码逻辑如下。

```
const { validateCustomStyle } = require('alibabacloud-datav-tool-gui-utils'); // 验证方法
const STYLE_FIELD = ["fill", "stroke"]; // 覆盖的样式

const styleRes = { // 默认柱子颜色值
  fill: "blue",
 stroke: "rgba(0,0,0,0)"
};

/**
  * 1. config: 条件配置
  * 2. data: 当前循环到的数据
  * 3. ruleKey：默认值 'rules'
  */
validateCustomStyle({config: customStyle, data, ruleKey: 'rules'}).forEach((styleSetting) => {
  const style = STYLE_FIELD.reduce((initStyle, f) => {
    // 柱子颜色、柱子描边
    if (styleSetting[f] && styleSetting[f].show) {
      initStyle[f] = styleSetting[f] && styleSetting[f].value;
    }
    return initStyle;
  }, {});
Object.assign(styleRes, style); // 用条件中的样式值将默认值覆盖   
});


```

### 实操演练

1. 在画布编辑器页面，在**全部资产**栏内选择**智能柱图&&条件样式**组件，按照如下代码设置组件的条件样式。  
```  
"condition": {  
            "name": "条件",  
            "type": "menuChild",  
            "mode": "single",  
            "children": {  
              "customStyle": {  
                "name": "条件样式",  
                "type": "tabs",  
                "fold": false,  
                "default": [  
                  {  
                    "rules": {  
                      "operator": "AND",  
                      "enabled": false,  
                      "expressions": [  
                        {  
                          "operator": "AND",  
                          "expressions": [  
                            [  
                              "value",  
                              "eq",  
                              "上海"  
                            ]  
                          ]  
                        }  
                      ]  
                    },  
                    "color": {  
                      "type": "color",  
                      "show": true,  
                      "value": "#f00"  
                    },  
                    "backgroundColor": {  
                      "type": "color",  
                      "show": true,  
                      "value": "#f00"  
                    }  
                  }  
                ],  
                "template": {  
                  "type": "object",  
                  "name": "条件样式<%= i + 1%>",  
                  "children": {  
                    "rules": {  
                      "type": "logicalTree",  
                      "default": {  
                        "enabled": false,  
                        "operator": "OR",  
                        "expressions": [  
                          {  
                            "operator": "AND",  
                            "expressions": [  
                              [  
                                "value",  
                                "eq",  
                                "广州"  
                              ]  
                            ]  
                          }  
                        ]  
                      }  
                    },  
                    "color": {  
                      "name": "文本色",  
                      "type": "suite",  
                      "enableHide": true,  
                      "children": {  
                        "show": {  
                          "default": true  
                        },  
                        "value": {  
                          "type": "color",  
                          "default": "yellow"  
                        }  
                      },  
                      "showInPanel": {  
                        "conditions": [  
                          [  
                            ".rules.enabled",  
                            "$eq",  
                            true  
                          ]  
                        ]  
                      }  
                    },  
                    "backgroundColor": {  
                      "name": "背景色",  
                      "type": "suite",  
                      "enableHide": true,  
                      "children": {  
                        "show": {  
                          "default": true  
                        },  
                        "value": {  
                          "type": "color",  
                          "default": "yellow"  
                        }  
                      },  
                      "showInPanel": {  
                        "conditions": [  
                          [  
                            ".rules.enabled",  
                            "$eq",  
                            true  
                          ]  
                        ]  
                      }  
                    }  
                  }  
                }  
              }  
            }  
          }  
        }  
      }  
    },  
```
2. 在index.js文件中，在默认样式代码下书写验证逻辑。验证逻辑中将`color`和`backgroundColor`放到一个对象中获取条件样式的值，然后用条件样式的值将默认值覆盖，实现代码如下。  
```  
// 默认样式  
      const styleRes = {  
        color,  
        backgroundColor: `${backgroundColor[index]}`  
      }  
// 验证函数  
      validateCustomStyle({config: customStyle, data: item, ruleKey: "rules"}).forEach((styleSetting) => {  
        console.log(styleSetting, "styleSetting==");  
        let style = {};  
        if (styleSetting.color && styleSetting.color.show) {  
          style.color = styleSetting.color.value;  
        }  
        if (styleSetting.backgroundColor && styleSetting.backgroundColor.show) {  
          style.backgroundColor = styleSetting.backgroundColor.value;  
        }  
        Object.assign(styleRes, style);  
      });  
```

**说明**  
上述方法在实现逻辑上会比较冗余，您可以将`color`和`backgroundColor`放到一个数组中使用`reduce`方法拿到条件样式的值，然后使用条件样式的值将默认值覆盖。实现代码如下。  
```  
// 条件验证  
      const styleRes = {  
        color,  
        backgroundColor: `${backgroundColor[index]}`  
      };  
      validateCustomStyle({config: customStyle, data: item, ruleKey: 'rules'}).forEach((styleSetting) => {  
        const style = STYLE_FIELD.reduce((initStyle, f) => {  
          if (styleSetting[f] && styleSetting[f].show) {  
            initStyle[f] = styleSetting[f] && styleSetting[f].value;  
          }  
          return initStyle;  
        }, {});  
        Object.assign(styleRes, style); // 覆盖默认样式  
      });  
```

## **视频链接**

DataV小课堂直播视频：[自定义组件-智能主题&条件样式](https://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/d/ud/353113015762.mp4)。