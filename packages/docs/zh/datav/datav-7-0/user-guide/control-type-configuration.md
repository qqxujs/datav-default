<!DOCTYPE html> 

控件类型配置涵盖基础输入、数值调节等专业控件类型，帮助开发者快速配置组件的样式面板，满足企业级业务场景的定制化需求。本文将详细介绍各类控件的功能特性与配置方法。

## **基础输入控件**

### **boolean 布尔配置项**

适用于功能开关、条件判断等场景。已被[switch 开关](#title-uhi-bvo-vbh)代替，建议使用新配置项。 

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    是    |    无。    |
|    type    |    类型    |    string    |    是    |    无。    |
|    default    |    默认值    |    boolean    |    否    |    没填时为true。    |

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |
|    ----    |    ----    |    ----    |    ----    |
|    无    |    boolean    |    true    |    true    |

#### **配置示例**

![boolean配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5678788951/p93721.png)

```
"boolean": {
   "type": "boolean",
   "name": "显示"
}
```

### **keyBoard 热键定义器**

支持键盘按键映射输入。适用于快捷键配置、游戏控制等场景。

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    是    |    无。    |
|    type    |    类型    |    string    |    是    |    无。    |
|    default    |    默认值    |    array    |    否    |    不填时为\[16, 38\]。    |

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    无    |    array    |    \[16,38\]    |    \[16,38\]    |    快捷键的ASCII。    |

#### **配置示例**

![keyBoard配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8039788951/p92935.png)

```
"keyboard": {
   "name": "快捷键",
   "type": "keyboard",  
   "default": [16,38]
}
```

### **number 数值输入框**

适用于尺寸、数量等数值参数场景。已被[stepper 步进器](#title-heh-ock-xk1)和[slider 滑动条](#title-gw8-q52-e3c)代替，建议使用新配置项。

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    是    |    无。    |
|    type    |    类型    |    string    |    是    |    无。    |
|    default    |    默认显示值    |    number    |    否    |    没填时为16。    |
|    min    |    最小值    |    number    |    否    |    min、range\[0\]、range.min三者有其一就设置最小值成功，都没有时退化为text，不保证运行正确。    |
|    max    |    最大值    |    number    |    否    |    max、range\[1\]、range.max三者有其一就设置最大值成功，都没有时配置项类型退化为text，不保证运行正确。    |
|    range    |    取值区间    |    array或object    |    否    |    配置range则显示滑动条。range可以为数组\[10, 55\]，也可以为对象{min: 10, max: 55}，与min和max都没有时，配置项类型退化为text，不保证运行正确。    |

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |
|    ----    |    ----    |    ----    |    ----    |
|    无    |    number    |    12    |    0    |

#### **配置示例**

* 基础用法（不配置`range`）![number配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3819788951/p93709.png)  
```  
"number": {  
    "type": "number",  
    "name": "字号",  
    "default": 22,  
    "min": 10,  
    "max": 55  
}  
```
* 带滑动条（配置`range`）![number配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3819788951/p93710.png)  
```  
"number": {  
    "type": "number",  
    "name": "字号",  
    "default": 22,  
    "range": [  
      10,  
      55  
    ]  
}  
```

### **percent 百分比值**

适用于进度百分比、占比数据等场景。已被[slider 滑动条](#title-gw8-q52-e3c)代替，建议使用新配置项。

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    是    |    无。    |
|    type    |    类型    |    string    |    是    |    无。    |
|    default    |    默认值    |    number    |    否    |    不填时值为0。最大值为100，最小值为0，步长为1。    |

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |
|    ----    |    ----    |    ----    |    ----    |
|    无    |    number    |    20    |    0    |

#### **配置示例**

![percent配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2538788951/p93722.png)

```
"percent": {
  "name": "百分比值",
  "type": "percent",
  "default": 20
}
```

### **text 文本输入框**

⽀持定制前后缀，适用于标题文字、标签内容配置等场景。

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    是    |    无。    |
|    type    |    类型    |    string    |    是    |    无。    |
|    default    |    默认显示值    |    string    |    否    |    没填时为空。    |
|    prefix    |    前缀    |    string    |    否    |    无。    |
|    suffix    |    后缀    |    string    |    否    |    无。    |
|    prefixIcon    |    前缀图标名称    |    string    |    否    |    图标库中的名称，例如link。    |
|    suffixIcon    |    后缀图标名称    |    string    |    否    |    图标库中的名称，例如link。    |

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |
|    ----    |    ----    |    ----    |    ----    |
|    无    |    string    |    "系列一"    |    ""    |

#### **配置示例**

![text配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0248829951/p92877.png)

```
"link": {
    "name": "跳转链接",
    "type": "text",
    "default": "http://datav.aliyun.com",
    "prefixIcon": "link"
  }
```

## **选择型控件**

### **buttonRadio 单选按钮**

适用于可视化选项（如主题风格等）场景。

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    是    |    无。    |
|    type    |    类型    |    string    |    是    |    无。    |
|    default    |    默认值    |    string    |    否    |    不填时值为空。    |
|    options    |    选项列表    |    array    |    否    |    对象数组，包含label和value字段。label为显示文本，value为文本值。    |
|    evenlySplit    |    均匀等分    |    boolean    |    否    |    使图标在⼀⾏中均匀分布。当和optionCol同时出现时，优先使用evenlySplit的值。    |

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |
|    ----    |    ----    |    ----    |    ----    |
|    无    |    object    |    "left"    |    ""    |

#### **配置示例**

![buttonRadio配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6598788951/p92918.png)

```
"algin": {
    "name": "对齐方式",
    "type": "buttonRadio",
    "evenlySplit": true,
    "options": [
      {
        "value": "left",
        "label": "左对齐"
      },
      {
        "value": "right",
        "label": "居中对齐"
      },
      {
        "value": "bottom",
        "label": "右对齐"
      }
    ]
  }
```

### **checkbox 复选框**

支持为选项设置宽度，适用于多选配置（如权限配置）等场景。

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    是    |    无。    |
|    type    |    类型    |    string    |    是    |    无。    |
|    default    |    默认值    |    array    |    否    |    不填时值为空。    |
|    options    |    选项列表    |    array    |    否    |    对象数组，包含label和value字段。label为显示文本，value为文本值。    |
|    optionCol    |    选项定宽    |    number    |    否    |    ⽤来为选项设置固定宽度。    |

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |
|    ----    |    ----    |    ----    |    ----    |
|    无    |    array    |    \["left", "right"\]    |    \[\]    |

#### **配置示例**

![checkbox配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1788788951/p92914.png)

```
"checkbox": {
    "name": "地图内容",
    "type": "checkbox",
    "optionCol": 8,
    "options": [
      {
        "value": "bg",
        "label": "背景"
      },
      {
        "value": "building",
        "label": "建筑物"
      },
      {
        "value": "road",
        "label": "道路"
      },
      {
        "value": "label",
        "label": "标注"
      }
    ]
}
```

### **iconRadio 单选图标**

适用于图形化选择（如图标库）等场景。

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    是    |    无。    |
|    type    |    类型    |    string    |    是    |    无。    |
|    default    |    默认值    |    string    |    否    |    不填时值为空。    |
|    options    |    选项列表    |    array    |    是    |    对象数组，包含label、value和src字段。label为显示文本，value为文本值，src为图片地址或图标名。    |
|    optionCol    |    选项定宽    |    number    |    否    |    ⽤来为选项设定固定宽度。    |
|    evenlySplit    |    均匀等分    |    boolean    |    否    |    使图标在⼀⾏中均匀分布。当和optionCol同时出现时，优先使用evenlySplit的值。    |

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |
|    ----    |    ----    |    ----    |    ----    |
|    无    |    string    |    "left"    |    ""    |

#### **配置示例**

* 使用图片![iconRadio-使用图片配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2348788951/p92922.png)  
```  
"direction": {  
    "name": "移动方向",  
    "type": "iconRadio",  
    "options": [  
      {  
        "value": "left",  
        "label": "左侧",  
        "src": "https://img.alicdn.com/tfs/TB1.77AgxYaK1RjSZFnXXa80pXa-48-48.png"  
      },  
      {  
        "value": "right",  
        "label": "右侧",  
        "src": "https://img.alicdn.com/tfs/TB1sWoggwDqK1RjSZSyXXaxEVXa-48-48.png"  
      },  
      {  
        "value": "top",  
        "label": "上侧",  
        "src": "https://img.alicdn.com/tfs/TB1t0wjgCzqK1RjSZFjXXblCFXa-48-48.png"  
      },  
      {  
        "value": "bottom",  
        "label": "下侧",  
        "src": "https://img.alicdn.com/tfs/TB1UAAjgwHqK1RjSZFkXXX.WFXa-48-48.png"  
      }  
    ]  
  }  
```
* 使用图标![iconRadio-配置示例-使用图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2348788951/p92924.png)  
```  
"algin": {  
    "name": "对齐方式",  
    "type": "iconRadio",  
    "evenlySplit": true,  
    "options": [  
      {  
        "value": "left",  
        "label": "左侧",  
        "src": "align-left"  
      },  
      {  
        "value": "right",  
        "label": "居中",  
        "src": "align-center"  
      },  
      {  
        "value": "bottom",  
        "label": "下侧",  
        "src": "align-right"  
      }  
    ]  
  }  
```

### **imageSelect 图片选择器**

适用于主题背景、图标选择等场景。

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    是    |    不填时使用key名作为显示名，例如margin。    |
|    type    |    类型    |    string    |    是    |    无。    |
|    default    |    默认值    |    string    |    否    |    无。    |
|    options    |    选项列表    |    array    |    否    |    对象数组，包含label、value和src字段。label为显示文本，value为文本值，src为图片地址或图标名。    |

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |
|    ----    |    ----    |    ----    |    ----    |
|    无    |    string    |    "left"    |    ""    |

#### **配置示例**

![imageSelect配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9838788951/p92927.png)

```
"bubbleKey": {
    "name": "气泡类型",
    "type": "imageSelect",
    "default": "type1",
    "options": [
      {
        "label": "类型一",
        "value": "type1",
        "src": "https://img.alicdn.com/tfs/TB1BCgwoAT2gK0jSZFkXXcIQFXa-162-104.png"
      },
      {
        "label": "类型二",
        "value": "type2",
        "src": "https://img.alicdn.com/tfs/TB1EmgwoAT2gK0jSZFkXXcIQFXa-162-104.png"
      },
      {
        "label": "类型三",
        "value": "type3",
        "src": "https://img.alicdn.com/tfs/TB13x3soAP2gK0jSZPxXXacQpXa-162-104.png"
      },
      {
        "label": "类型四",
        "value": "type4",
        "src": "https://img.alicdn.com/tfs/TB1pKUuoAL0gK0jSZFxXXXWHVXa-162-104.png"
      }
    ]
  }
```

### **menu 菜单**

菜单用来组织配置项的结构，目前支持一级菜单和二级菜单。适用于分类层级选择（如省市）等场景。

#### **菜单样式**

* 一级菜单![一级菜单](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8208430161/p93032.png)
* 二级菜单![二级菜单](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8208430161/p93033.png)

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    是    |    无。    |
|    type    |    类型    |    string    |    是    |    无。    |
|    default    |    默认值    |    object    |    否    |    不填时值为空。    |
|    children    |    菜单内容    |    object    |    否    |    默认为{}。必须包含mode和name字段。 mode：是否嵌套了二级菜单，"single"表示仅有一级菜单，"multiple"表示有二级菜单。name：菜单名。    |

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |
|    ----    |    ----    |    ----    |    ----    |
|    不涉及    |    object    |    "options": {    "menuA": {      "switch": true    },    "menuB": {      "menuB1": {        "text": "Hello"      },      "menuB2": {        "stepper": 2      }    }  }    |    {}    |

#### **配置示例**

![menu配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8847788951/p93034.png)

```
"options": {
    "name": "菜单",
    "type": "menu",
    "children": {
      "menuA": {
        "name": "菜单A",
        "mode": "single",
        "children": {
          "switch": {
            "name": "开关",
            "type": "switch",
            "default": true
          }
        }
      },
      "menuB": {
        "name": "菜单B",
        "mode": "multiple",
        "children": {
          "menuB1": {
            "name": "菜单B1",
            "children": {
              "text": {
                "name": "文本",
                "type": "text",
                "default": "Hello"
              }
            }
          },
          "menuB2": {
            "name": "菜单B2",
            "children": {
              "stepper": {
                "name": "步进器",
                "type": "stepper",
                "default": 1
              }
            }
          }
        }
      }
    }
}
```

### **radio 单选框**

适用于如性别选择等单选场景。

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    是    |    无。    |
|    type    |    类型    |    string    |    是    |    无。    |
|    default    |    默认值    |    string    |    否    |    不填时默认没有选中项。    |
|    options    |    选择列表    |    array    |    否    |    对象数组，包含label和value字段。label为显示文本，value为文本值。    |
|    optionCol    |    选项定宽    |    number    |    否    |    ⽤来为选项设定固定宽度。    |

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |
|    ----    |    ----    |    ----    |    ----    |
|    无    |    string    |    "left"    |    ""    |

#### **配置示例**

![radio配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2097788951/p92896.png)

```
"align": {
    "name": "对齐方式",
    "type": "radio",
    "optionCol": 12,
    "options": [
      {
        "label": "左对齐",
        "value": "left"
      },
      {
        "label": "居中对齐",
        "value": "center"
      },
      {
        "label": "右对齐",
        "value": "right"
      }
    ]
}
```

### **search 下拉搜索框**

适应于大型数据集快速筛选等场景。已被[select 选择器](#title-17x-y6h-gef)代替，建议使用新配置项。

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    否    |    无。    |
|    type    |    类型    |    string    |    是    |    无。    |
|    default    |    默认显示值    |    string    |    否    |    没填时为options\[0\]。    |
|    range    |    取值区间    |    array    |    否    |    示例值如\[{name: "" ,value: ""}\]，也可以为\[{key: value}\] 型，也可以只有\[value\]。 没有时配置项类型退化为text。    |

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |
|    ----    |    ----    |    ----    |    ----    |
|    无    |    string    |    "Microsoft Yahei"    |    ""    |

#### **配置示例**

![search配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8767788951/p93714.png)

```
"search": {
    "name": "字体",
    "type": "search",
    "default": "Microsoft Yahei",
    "range": [
      {
        "微软雅黑": "Microsoft Yahei"
      },
      {
        "宋体": "SimSun"
      },
      "tahoma",
      "arial",
      "sans-serif"
    ]
}
```

### **select 选择器**

⽀持开启过滤和⾃定义输⼊。当需要设置字体时，可开启字体渲染功能，预览字体样式。适用于枚举值选择（如国家列表）等场景。

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    是    |    无。    |
|    type    |    类型    |    string    |    是    |    无。    |
|    default    |    默认显示值    |    string    |    否    |    没填时为options\[0\]。    |
|    options    |    选项列表    |    array    |    否    |    每一项都包含label和value。label表示显示文本，value表示文本的值。    |
|    filterable    |    是否⽀持过滤    |    boolean    |    否    |    默认：true。    |
|    allowCustom    |    是否⽀持⾃定义输⼊内容    |    boolean    |    否    |    filterable为true时生效。默认：true。    |
|    useFont    |    是否渲染字体    |    boolean    |    否    |    无。    |

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |
|    ----    |    ----    |    ----    |    ----    |
|    无    |    string    |    "left"    |    ""    |

#### **配置示例**

![select配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1619788951/p92880.png)

```
"font": {
    "name": "字体",
    "type": "select",
    "useFont": true,
    "default": "SimSun",
    "options": [
      {
        "value": "Microsoft Yahei",
        "label": "微软雅黑"
      },
      {
        "value": "SimSun",
        "label": "宋体"
      },
      {
        "value": "SimHei",
        "label": "黑体"
      }
    ]
}
```

### **switch 开关**

⽀持选择是否展示⽂字状态。适用于功能启用/禁用切换等场景。

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    是    |    无。    |
|    type    |    类型    |    string    |    是    |    无。    |
|    default    |    默认值    |    boolean    |    否    |    无。    |
|    statusText    |    是否启用⽂字显示状态    |    boolean    |    否    |    默认为false。    |

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |
|    ----    |    ----    |    ----    |    ----    |
|    无    |    boolean    |    true    |    false    |

#### **配置示例**

![switch配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9239788951/p92930.png)

```
"open": {
    "name": "开关",
    "type": "switch",
    "default": true,
    "statusText": true
  }
```

### **timePicker 时间选择器**

支持自定义时间格式，并可选择固定时间或设置时间范围。适用于预约系统、计时器等应用场景。

**配置项说明**

|    字段    |    含义    |    数据类型    |    默认值    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    **format**    |    日期格式    |    string    |    "HH:mm:ss"    |    时间日期格式化    |

#### **值说明**

|    条件    |    数据类型    |    默认值    |    示例    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    \-    |    string    |    "00:00:00"    |    "00:00:00"    |    单时间选择    |
|    \-    |    array<string>    |    \[\]    |    \["00:00:00","00:00:20"\]    |    时间范围选择    |

#### **配置示例**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7661037471/p942764.png)

```
time: {
    type: 'timePicker',
    name: '时间选择器',
    format: 'HH:mm',
  },
  timeRange: {
    type: 'timePicker',
    name: '时间区间选择器',
    format: 'hh:mm',
  },
```

### **datePicker 日期选择器**

支持自定义日期格式，并可选择固定日期或设置日期范围。适用于票务预订、数据统计筛选等场景。

#### **配置项说明**

|    字段    |    含义    |    数据类型    |    默认值    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    **format**    |    日期格式    |    string    |    "YYYY-MM-DD"    |    |
|    **showTime**    |    是否展示时间部分    |    boolean    |    false    |    默认仅展示日期选择部分，设置为true可展示时间部分    |

#### **值说明**

|    条件    |    数据类型    |    默认值    |    示例    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    \-    |    string    |    "2020-01-01"    |    "2020-01-01"    |    单日期选择    |
|    \-    |    array<string>    |    \[\]    |    \["2020.09.08", "2020.09.13"\]    |    日期范围选择    |

#### **配置示例**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7661037471/p942772.png)

```
date: {
    type: 'datePicker',
    name: '日期选择器',
    format: 'YYYY.MM.DD',
  },
  dateTime: {
    type: 'datePicker',
    name: '日期时间选择器',
    showTime: true,
    formart: 'YYYY-MM-DD HH:mm:ss',
  },
  dateRange: {
    type: 'datePicker',
    name: '日期区间选择器',
    format: 'YYYY.MM.DD',
  },
  dateTimeRange: {
    type: 'datePicker',
    name: '日期时间区间选择器',
    showTime: true,
    formart: 'YYYY-MM-DD HH:mm:ss',
  },
```

## **数值调节型控件**

### **line 线套件**

由线粗细步进器、平滑⽅式图标单选器、样式选择器和纯⾊填充框组成。

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    是    |    无。    |
|    type    |    类型    |    string    |    是    |    无。    |
|    default    |    默认值    |    string    |    否    |    不填时值为空。    |
|    components    |    配置项模块    |    array    |    是    |    默认值为：\["width","curve","style","color"\]。支持的模块包括"width"、"curve"、"style"和"color"。    |
|    enableHide    |    配置项对应元素是否能够在画布隐藏    |    boolean    |    否    |    默认为false。设置为true时，显示显隐图标按钮，并在当前配置项中增加show字段。    |

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |
|    ----    |    ----    |    ----    |    ----    |
|    不配置enableHide，或将enableHide配置为false    |    object    |    {  "width": 4,  "curve": "smooth",  "style": "solid",  "color": "#00f" }    |    {  "width": 1,  "curve": "polyline",  "style": "solid",  "color": "#fff" }    |
|    将enableHide配置为true    |    object    |    {  "width": 4,  "curve": "smooth",  "style": "solid",  "color": "#00f",  "show": true }    |    {  "width": 1,  "curve": "polyline",  "style": "solid",  "color": "#fff",  "show": true }    |

#### **配置示例**

* 基础用法（不配置`enableHide`）![line配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5937788951/p92999.png)  
```  
"line": {  
    "name": "线套件",  
    "type": "line"  
}  
```
* 允许配置项对应元素隐藏（配置`enableHide`为`true`）![line配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6937788951/p93003.png)  
```  
"line": {  
    "name": "线套件",  
    "type": "line",  
    "enableHide": true  
}  
```
* 配置项模块插拔（设置`components`）![line配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6937788951/p93001.png)  
```  
"line": {  
    "name": "线套件",  
    "type": "line",  
    "enableHide": true,  
    "components": [  
      "style",  
      "color"  
    ]  
}  
```

### **slider 滑动条**

⽀持单滑块和双滑块，同时支持定制步⻓、最大值和最小值、前缀和后缀、精度，可开启范围显示。

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    是    |    无。    |
|    type    |    类型    |    string    |    是    |    无。    |
|    default    |    默认值    |    number或array    |    否    |    不填时值为空。    |
|    step    |    步⻓    |    number    |    否    |    无。    |
|    min    |    最小值    |    number    |    否    |    无。    |
|    max    |    最大值    |    number    |    否    |    无。    |
|    prefix    |    前缀    |    string    |    否    |    无。    |
|    suffix    |    后缀    |    string    |    否    |    无。    |
|    precision    |    精度（⼩数位数）    |    number    |    否    |    显示精度，仅对⼩数值⽣效。    |
|    mode    |    滑块模式    |    string    |    否    |    可选值： single：单滑块（默认）。double：双滑块。    |
|    showRange    |    是否显示范围    |    boolean    |    否    |    当mode为double时⽣效，默认为false。    |
|    showCurrentRange    |    是否显示当前范围    |    boolean    |    否    |    当mode为single时⽣效，默认为true。    |

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |
|    ----    |    ----    |    ----    |    ----    |
|    mode为single（滑块模式为单滑块）    |    number    |    22    |    0    |
|    mode为double（滑块模式为双滑块）    |    array    |    \[10,30\]    |    \[0,0\]    |

#### **配置示例**

* `mode`为`single`（滑块模式为单滑块）![slider-单滑块-配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1377788951/p92933.png)  
```  
"slider": {  
    "name": "透明度",  
    "type": "slider",  
    "step": 0.1,  
    "min": 0,  
    "max": 1,  
    "suffix": "α",  
    "showRange": true  
  }  
```
* `mode`为`double`（滑块模式为双滑块）![slider-配置示例-双滑块](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2377788951/p92934.png)  
```  
"slider": {  
    "name": "过滤范围",  
    "type": "slider",  
    "mode": "double",  
    "step": 1,  
    "min": 10,  
    "max": 30,  
    "showCurrentRange": true  
  }  
```

### **stepper 步进器**

⽀持定制步⻓、最大值和最小值以及前缀和后缀。

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    是    |    无。    |
|    type    |    类型    |    string    |    是    |    无。    |
|    default    |    默认值    |    number    |    否    |    不填时值为空。    |
|    step    |    步⻓    |    number    |    是    |    number类型。    |
|    min    |    最小值    |    number    |    是    |    number类型。    |
|    max    |    最大值    |    number    |    是    |    number类型。    |
|    prefix    |    前缀    |    string    |    否    |    string类型。    |
|    suffix    |    后缀    |    string    |    否    |    string类型。    |
|    precision    |    精度（⼩数位数）    |    number    |    否    |    显示精度，仅对⼩数值⽣效。    |

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |
|    ----    |    ----    |    ----    |    ----    |
|    无    |    number    |    12    |    0    |

#### **配置示例**

![stepper配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2118788951/p92931.png)

```
"stepper": {
  "name": "移动距离",
  "type": "stepper",
  "step": 1,
  "min": 0,
  "max": 15,
  "prefix": "上: ",
  "suffix": "px"
}
```

## **样式配置型控件**

### **color 颜色选择器**

已被[fill 填充框](#title-79o-i1d-2sw)代替，建议使用新配置项。

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    type    |    类型    |    string    |    是    |    无。    |
|    name    |    显示名    |    string    |    是    |    无。    |
|    default    |    默认显示值    |    string    |    否    |    没填时为#000。    |

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |
|    ----    |    ----    |    ----    |    ----    |
|    无    |    string    |    12    |    "#000"    |

#### **配置示例**

![color配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8677788951/p93715.png)

```
"color": {
    "name": "字体颜色",
    "type": "color",
    "default": "#fff"
}
```

### **fill 填充框**

⽀持三种填充类型以及他们的组合。

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    是    |    无。    |
|    type    |    类型    |    string    |    是    |    无。    |
|    default    |    默认值    |    string或object    |    否    |    不填时值为空。取值请参见下文的[值说明](/zh/datav/datav-7/user-guide/fill-1#section-rq9-fjf-bcl)。    |
|    components    |    填充类型    |    array    |    否    |    支持以下三种填充类型，以及它们的组合： flat：纯⾊填充（默认）。linearGradient：渐变填充。image：图片填充。**说明** 填充类型不同，对应的值也不同，详情请参见[值说明](/zh/datav/datav-7/user-guide/fill-1#section-rq9-fjf-bcl)。    |

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    当仅有纯色填充时    |    string    |    "#333"    |    "#000"    |    无。    |
|    当仅有线性渐变填充时    |    object    |    {  "angle": 0,  "stops": \[    {      "offset": 0,      "color": "#000"    },    {      "offset": 100,      "color": "red"    }  \] }    |    {  "angle": 0,  "stops": \[    {      "offset": 0,      "color": "#000"    },    {      "offset": 100,      "color": "rgba(0,0,0,0.5)"    }  \] }    |    无。    |
|    当仅有图片填充时    |    object    |    { "fillType":"cover", "url":"https://img.alicdn.com/tfs/TB16ag8v4z1gK0jSZSgXXavwpXa-96-96.png", "tileSize": 100 }    |    {  "fillType": "stretch",  "url": "https://img.alicdn.com/tfs/TB19njRJ7zoK1RjSZFlXXai4VXa-16-16.png",  "tileSize": 100 }    |    无。    |
|    当支持多种填充类型时    |    object    |    { "type":"linearGradient", "value":   {     "angle":90,       "stops":\[      {         "color":"#333",         "offset":0      },      {         "color":"red",         "offset":100      }       \]   } }    |    {  "type": "flat",  "value": "#000" }    |    type：当前应用的填充类型。value：填充值。    |

#### **配置示例**

* 填充类型为`flat`![fill-flat配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5958829951/p92949.png)  
```  
"flat": {  
    "name": "纯色填充",  
    "type": "fill",  
    "default": "#333"  
}  
```
* 填充类型为`linearGradient`![fill-linearGradient-配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5958829951/p92950.png)  
```  
"linearGradient": {  
    "name": "线性渐变填充",  
    "type": "fill",  
    "components": [  
      "linearGradient"  
    ],  
    "default": {  
      "angle": 90,  
      "stops": [  
        {  
          "color": "#333",  
          "offset": 0  
        },  
        {  
          "color": "red",  
          "offset": 100  
        }  
      ]  
    }  
  }  
```
* 填充类型为`image`![fill-image-配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5958829951/p92951.png)  
```  
 "image": {  
    "name": "图片填充",  
    "type": "fill",  
    "components": [  
      "image"  
    ],  
    "default": {  
      "fillType": "cover",  
      "url": "https://img.alicdn.com/tfs/TB16ag8v4z1gK0jSZSgXXavwpXa-96-96.png",  
      "tileSize": 100  
    }  
}  
```

### **font 字体套件**

由字体选择器、字体粗细选择器、字体⼤⼩步进器和纯⾊填充框组成。

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    是    |    无。    |
|    type    |    类型    |    string    |    是    |    无。    |
|    default    |    默认值    |    array    |    否    |    不填时值为空。    |
|    components    |    配置项模块    |    array    |    否    |    默认值为\["fontFamily","fontWeight","fontSize","color"\]。支持的模块包括"fontFamily"、"fontWeight"、"fontSize"和"color"。    |
|    enableHide    |    配置项对应元素是否能够在画布隐藏    |    boolean    |    否    |    默认为false。设置为true时，显示显隐图标按钮，并在当前配置项中增加show字段。    |

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |
|    ----    |    ----    |    ----    |    ----    |
|    不配置enableHide，或将enableHide配置为false    |    object    |    {  "fontFamily": "simSun",  "fontWeight": 400,  "color": "#333",  "fontSize": 12 }    |    {  "fontFamily": "Microsoft Yahei",  "fontWeight": "normal",  "color": "#fff",  "fontSize": 12 }    |
|    将enableHide配置为true    |    object    |    {  "fontFamily": "simSun",  "fontWeight": 400,  "color": "#333",  "fontSize": 12,  "show": true }    |    {  "fontFamily": "Microsoft Yahei",  "fontWeight": "normal",  "color": "#fff",  "fontSize": 12,  "show": true }    |

#### **配置示例**

* 基础用法（不配置`enableHide`）![font配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9347788951/p93007.png)  
```  
"font": {  
   "name": "文字套件",  
   "type": "font"  
}  
```
* 允许配置项对应元素隐藏（配置`enableHide`为`true`）![font配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9347788951/p93008.png)  
```  
"font": {  
   "name": "文字套件",  
   "type": "font",  
   "enableHide": true  
}  
```
* 配置项模块插拔（设置`components`）![font配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9347788951/p93009.png)  
```  
"font": {  
    "name": "文字套件",  
    "type": "font",  
    "enableHide": true,  
    "components": [  
      "fontSize",  
      "color"  
    ]  
}  
```

### **image 图片框**

适用于背景图/Logo上传等场景。

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    是    |    无。    |
|    type    |    类型    |    string    |    是    |    无。    |
|    default    |    默认显示值    |    string    |    否    |    没填时为空，无图片。    |

**重要** 

若图片链接为本地静态文件，则需要将图片放至当前控件目录的resources文件夹下，链接示例为_./resources/xxxx.png_。

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |
|    ----    |    ----    |    ----    |    ----    |
|    无    |    string    |    "https://img.alicdn.com/tfs/TB1cjY3ANTpK1RjSZFMXXbG\_VXa-180-180.png"    |    ""    |

#### **配置示例**

![image配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2078788951/p92926.png)

```
{
  "name" : "背景图",
  "type" : "image",
  "default": "http://datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/c4ba3c6518c1997f4baa612a600c3fbe.png"
}
```

### **multicolor** 渐变颜色选择器

可选单色或渐变色。

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    是    |    无。    |
|    type    |    类型    |    string    |    是    |    无。    |
|    default    |    默认显示值    |    object    |    是    |    需要包含以下参数： style：可选值包括single和double。value：当style为single时的颜色值。from：当style为double时渐变的起始颜色值。to：当style为double时渐变的终点颜色值。angle：当style为double时，渐变颜色的角度。    |

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |
|    ----    |    ----    |    ----    |    ----    |
|    style为single    |    object    |    {  "style": "single",  "value": "#ccc" }    |    {  "style": "single",  "value": "#000" }    |
|    style为double    |    object    |    {  "style": "double",  "from": "#fff",  "to": "#ccc",  "angle": 0 }    |    {  "style": "double",  "from": "#000",  "to": "rbga(0,0,0,.5)",  "angle": 0 }    |

#### **配置示例**

![multicolor配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0519788951/p93717.png)

```
"color": {
    "name": "渐变颜色",
    "type": "multicolor",
    "default": {
      "style": "double",
      "from": "#000",
      "to": "#fff",
      "angle": 0
    }
}
```

### **tabs 标签组**

切换标签可展示当前标签下的内容，⽀持动态增减标签组。

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    是    |    无。    |
|    type    |    类型    |    string    |    是    |    无。    |
|    default    |    默认值    |    object    |    否    |    不填时值为空。    |
|    addable    |    是否可以动态增减    |    boolean    |    否    |    默认为true。    |
|    template    |    动态增减的模板    |    object    |    否    |    默认为{}。    |
|    children    |    各标签组内容    |    array    |    否    |    默认为\[\]。⼦控件key字段不可使用关键字：\_icon、id和\_label。 **说明** 在每个⼦元素中，可以使⽤\_label更改系列名（例如系列⼀改为模板），\_icon更改图标。    |
|    fold    |    是否默认展开    |    boolean    |    否    |    默认为true。    |

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    不涉及    |    array    |    \[  {    "name": "系列一"  },  {    "name": "系列二"  } \]    |    \[\]    |    在每个子元素中，可以使用\_label设置独立的tab名，使用\_icon增加图标。    |

#### **配置示例**

* 可增减（配置`template`动态增加模板内容）![tabs配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1518788951/p93021.png)  
```  
 "tabs": {  
    "name": "正常标签",  
    "type": "tabs",  
    "maxTabs": 10,  
    "default": [  
      {  
        "seriesName": "钢铁"  
      }  
    ],  
    "template": {  
      "name": "系列<%= i + 1%>",  
      "children": {  
        "seriesName": {  
          "type": "text",  
          "name": "系列名"  
        }  
      }  
    }  
}  
```
* 内容固定（不配置`template`）![tabs配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2518788951/p93025.png)  
```  
"tabs": {  
    "name": "标签",  
    "type": "tabs",  
    "addable": false,  
    "children": [  
      {  
        "name": "用户信息",  
        "children": {  
          "serieName": {  
            "name": "姓名",  
            "type": "text"  
          }  
        }  
      },  
      {  
        "name": "是否应用",  
        "children": {  
          "switch": {  
            "name": "开关",  
            "type": "switch"  
          }  
        }  
      }  
    ]  
}  
```
* 使用独立的icon和label![tabs配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2518788951/p93024.png)  
此时需要通过值传入icon地址。  
```  
{  
  "tabs": {  
    "name": "标签",  
    "type": "tabs",  
    "default": [  
      {  
        "link": true,  
        "_label": "食品行业",  
        "_icon": "https://img.alicdn.com/tfs/TB1fck7voH1gK0jSZSyXXXtlpXa-201-200.png"  
      }  
    ],  
    "template": {  
      "name": "系列<%= i + 1%>",  
      "children": {  
        "link": {  
          "type": "switch",  
          "name": "Link"  
        }  
      }  
    }  
  }  
}  
```

## **布局容器型控件**

### **array 数据系列**

适用于多个系列配置或多个颜色循环配色，已被[tabs 标签组](#title-mrb-hun-og1)代替，建议使用新配置项。

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    type    |    类型    |    string    |    是    |    无。    |
|    name    |    显示名    |    string    |    是    |    无。    |
|    default    |    默认值    |    array    |    否    |    对象数组，对象的属性应与child字段中定义的字段名一致。    |
|    child    |    对象名    |    object    |    否    |    请将该字段内的type设置为object。    |
|    child.child    |    对象属性    |    object    |    否    |    定义对象属性及其默认值。    |

**重要** 

数据系列的`default`值必须为一个对象数组，且数组内对象中的属性必须在`child.child`字段中逐一进行定义，并设置属性的显示名、类型及默认值。

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |
|    ----    |    ----    |    ----    |    ----    |
|    无    |    array    |    \[ {"name": "系列一", value: "进港"}, {"name": "系列二", value: "出港"} \]    |    \[\]    |

#### **配置示例**

![array数据示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9229788951/p93718.png)

```
"array": {
    "name": "数据系列",
    "type": "array",
    "default": [
      {
        "name": "系列一",
        "value": "进港"
      },
      {
        "name": "系列二",
        "value": "出港"
      }
    ],
    "child": {
      "name": "系列<%=i+1%>",
      "type": "object",
      "child": {
        "name": {
          "name": "系列值",
          "type": "text",
          "default": "系列"
        },
        "value": {
          "name": "系列名",
          "type": "text",
          "default": ""
        }
      }
    }
}
```

### **group 配置项组**

可包含多个子配置项（建议多个同类元素配置项归于一个group）。可用来组织内容，并支持折叠或展开组的内容。

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    是    |    无。    |
|    type    |    类型    |    string    |    是    |    无。    |
|    default    |    默认值    |    object    |    否    |    没填时为空。    |
|    children    |    组内元素    |    object    |    否    |    没填时为空。    |
|    enableHide    |    配置项对应元素是否能够在画布隐藏    |    boolean    |    否    |    默认为false。设置为true时，显示显隐图标按钮，并在当前配置项值中增加show字段。    |
|    fold    |    是否默认展开    |    boolean    |    否    |    无。    |

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |
|    ----    |    ----    |    ----    |    ----    |
|    不配置enableHide，或将enableHide配置为false    |    object    |    {  "number": 12,  "open": true }    |    {}    |
|    将enableHide配置为true    |    object    |    {  "number": 12,  "open": true,  "show": true }    |    {  "show": true }    |

#### **配置示例**

* 基础用法（不配置`enableHide`）![group配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7858829951/p93013.png)  
```  
"group": {  
    "name": "组",  
    "type": "group",  
    "children": {  
      "open": {  
        "name": "开关",  
        "type": "switch",  
        "col": 12  
      },  
      "size": {  
        "type": "stepper",  
        "caption": "大小",  
        "min": 0,  
        "max": 10,  
        "step": 1,  
        "col": 12  
      }  
    }  
}  
```
* 允许配置项对应元素隐藏（配置`enableHide`为`true`）![group配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7858829951/p93014.png)  
```  
"group": {  
    "name": "组",  
    "type": "group",  
    "enableHide": true,  
    "children": {  
      "open": {  
        "name": "开关",  
        "type": "switch",  
        "col": 12  
      },  
      "size": {  
        "type": "stepper",  
        "caption": "大小",  
        "min": 0,  
        "max": 10,  
        "step": 1,  
        "col": 12  
      }  
    }  
}  
```

### **margin 外边距**

支持定义上下左右四个边的边距数值。

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    是    |    无。    |
|    type    |    类型    |    string    |    是    |    无。    |
|    default    |    默认值    |    string    |    否    |    不填时值为空。    |
|    components    |    配置项模块    |    array    |    否    |    默认值为\["top","bottom","left","right"\]。支持的模块包括"top"、"bottom"、"left"和"right"。    |
|    enableHide    |    配置项对应元素是否能够在画布隐藏    |    boolean    |    否    |    默认为false。设置为true时，显示显隐图标按钮，并在当前配置项中增加show字段。    |

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |
|    ----    |    ----    |    ----    |    ----    |
|    不配置enableHide，或将enableHide配置为false    |    object    |    {  "top": 12,  "right": 24,  "bottom": 8,  "left": 24 }    |    {  "top": 10,  "right": 10,  "bottom": 10,  "left": 10 }    |
|    将enableHide配置为true    |    object    |    {  "top": 12,  "right": 24,  "bottom": 8,  "left": 24,  "show": true }    |    {  "top": 10,  "right": 10,  "bottom": 10,  "left": 10,  "show": true }    |

#### **配置示例**

* 基础用法（不配置`enableHide`）![margin配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0932869161/p92987.png)  
```  
{  
  "margin": {  
    "name": "外边距",  
    "type": "margin",  
    "default": { "top": 10, "left": 10, "right": 10, "bottom": 10 }  
  }  
}  
```
* 允许配置项对应元素隐藏（配置`enableHide`为`true`）![margin配置示例2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0932869161/p92988.png)  
```  
{  
  "margin": {  
    "name": "外边距",  
    "type": "margin",  
    "enableHide": true,  
    "default": { "top": 10, "left": 10, "right": 10, "bottom": 10 }  
  }  
}  
```
* 配置项模块插拔（设置`components`）![margin配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0932869161/p92990.png)  
```  
{  
  "marginComponents": {  
    "name": "外边距",  
    "type": "margin",  
    "enableHide": true,  
    "components": ["top", "bottom"]  
  }  
}  
```

### **padding 内边距**

支持定义上下左右四个边的内边距数值。

#### **配置项说明**

|    字段    |    含义    |    数据类型    |    默认值    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    min    |    最小值    |    number    |    0    |    无。    |
|    max    |    最大值    |    number    |    Infinity    |    无。    |

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |
|    ----    |    ----    |    ----    |    ----    |
|    无    |    object    |    {   "top": 5,   "bottom": 10,   "left": 10,   "right": 5 }    |    {   "top": 5,   "bottom": 10,   "left": 10,   "right": 5 }    |

#### **配置示例**

![内边距](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2334968061/p204904.png)

```
{
  "padding": {
    "type": "padding",
    "name": "内边距",
    "default": {
      "top": 5,
      "bottom": 10,
      "left": 10,
      "right": 5
    },
    "min": 0,
    "max": 1000
  }
}
```

### **suite 通用套件**

由⼀组控件组成。

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    是    |    无。    |
|    type    |    类型    |    string    |    是    |    无。    |
|    default    |    默认值    |    object    |    否    |    不填时值为空。取值请参见[值说明](/zh/datav/datav-7/user-guide/suite-1#section-gh3-w1b-nx8)。    |
|    children    |    控件模块    |    object    |    否    |    默认为{}。取值请参见[值说明](/zh/datav/datav-7/user-guide/suite-1#section-gh3-w1b-nx8)。    |
|    enableHide    |    配置项对应元素是否能够在画布隐藏    |    boolean    |    否    |    默认为false。设置为true时，显示显隐图标按钮，并在当前配置项中增加show字段。    |

#### **值说明**

|    条件    |    数据类型    |    示例    |    默认值    |
|    ----    |    ----    |    ----    |    ----    |
|    不配置enableHide，或将enableHide配置为false    |    object    |    {  "number": 12,  "open": true }    |    {}    |
|    将enableHide配置为true    |    object    |    {  "number": 12,  "open": true,  "show": true }    |    {  "show": true }    |

#### **配置示例**

* 基础用法（不配置`enableHide`）![suite配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1719330161/p92967.png)  
```  
{  
  "style": {  
    "name": "套件",  
    "type": "suite",  
    "enableHide": true,  
    "default": { "show": false, "open": true, "size": 7 },  
    "children": {  
      "open": {  
        "name": "开关",  
        "type": "switch",  
        "col": 12  
      },  
      "size": {  
        "type": "stepper",  
        "caption": "大小",  
        "min": 0,  
        "max": 10,  
        "step": 1,  
        "col": 12  
      }  
    }  
  }  
}  
```
* 允许配置项对应元素隐藏（配置`enableHide`为`true`）![suite-配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1719330161/p92968.png)  
```  
{  
  "style": {  
    "name": "套件",  
    "type": "suite",  
    "default": { "show": false, "open": true, "size": 7 },  
    "children": {  
      "open": {  
        "name": "开关",  
        "type": "switch",  
        "col": 12  
      },  
      "size": {  
        "type": "stepper",  
        "caption": "大小",  
        "min": 0,  
        "max": 10,  
        "step": 1,  
        "col": 12  
      }  
    }  
  }  
}  
```

## **特殊功能型控件**

### **hidden 隐藏配置项**

配置后DataV不会渲染此配置。

#### **配置项说明**

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    是    |    无。    |
|    type    |    类型    |    string    |    是    |    无。    |
|    default    |    默认值    |    string、number、array、object    |    否    |    设置默认不显示的值，但是会作为config传给方法。    |

#### **配置示例**

```
"hiddenconfig": {
  "name": "值",
  "type" : "hidden",
  "default": 22
}
```