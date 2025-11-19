<!DOCTYPE html> 

控件作为自定义组件的核心配置载体，用于配置和管理应用程序中的各种功能。通过合理配置 `config`，可以快速构建功能丰富、结构合理且交互便捷的可视化配置面板。本文详细介绍了控件配置规范、数据类型及实践示例。

## **控件配置规范**

### **配置规则**

DataV自定义组件配置需包含默认值并遵循严格的输入规范（类型、格式、可选范围），采用**通用配置**+**私有配置**的混合模式。例如：以下示例中`name`、`type`、`default`都是通用配置，`prefix`是私有配置。

```
{
  "name": "文本框", 
  "type": "text",
  "default": "",
  "description": "带描述-带标注",
  "prefix": "今日进度："
}
```

### **通用配置**

包含所有控件共有的标准化配置项。这些预定义配置采用固定结构，开发者仅可调整参数值而无法修改字段结构，其核心作用是统一管理组件的基础布局、视觉呈现和交互行为。下表详细列出了通用配置的具体参数。

|    字段名    |    含义    |    类型    |    是否必选    |    备注    |
|    ----    |    ----    |    ----    |    ----    |    ----    |
|    name    |    显示名    |    string    |    是    |    示例值："文本框"。    |
|    type    |    类型    |    string    |    是    |    示例值："text"。当设置为hidden时，DataV将不对组件进⾏渲染。    |
|    default    |    配置项默认值    |    string、number、object、array    |    否    |    无。    |
|    showInPanel    |    配置项是否在⾯板显示    |    string    |    否    |    可定义配置项的显隐规则。不配置时，显示配置项；配置时，按照配置规则显示，配置规则请参见[showInPanel配置规则](/zh/datav/datav-7/user-guide/configuration-of-the-showinpanel-field-1)。    |
|    caption    |    配置项标注    |    string    |    否    |    不配置时，将不显示标注。    |
|    description    |    配置项描述    |    string    |    否    |    无。    |
|    handler    |    处理函数名    |    string    |    否    |    无。    |
|    col    |    控件主体部分所占栅格数    |    number    |    否    |    采⽤24栅格系统。    |
|    show    |    自定义配置项的显示与隐藏    |    object    |    否    |    配置示例如下。{   "xAxis": {     "type": "group",     "name": "x轴",     "children": {       "show": {          "type": "boolean",         "name": "显示",         "default": true       },       "color": {         "type": "color",         "name": "颜色",         "default": "#ccc",         "show": \[                           \["show", "$eq", true\]          \]       }     }   } }children.show：表示在x轴右侧显示一个点选框。该配置对兄弟属性无效。color.show：表示配置单个属性是否显示。\["show", "$eq", true\]：兄弟属性children.show等于true时，color属性才显示。    |

### **私有配置**

控件配置中的自有配置项，用于控制组件的**数据、样式、交互**等特有行为。不同组件的[私有配置](/zh/datav/datav-7-0/user-guide/control-type-configuration)可以完全不同。

## 控件类型

在DataV的组件配置体系中，`type`字段作为核心类型标识符，决定了组件的配置展示形式。系统会根据该字段值自动关联对应的可视化编辑器控件，开发者通过规范化类型选择与属性归类，可大幅提升组件配置效率和终端用户体验。下表为系统支持的type类型说明。

|    类别    |    类型    |    说明    |
|    ----    |    ----    |    ----    |
|    基础控件    |    [text 文本输入框](/zh/datav/datav-7-0/user-guide/control-type-configuration#9c207ee69bse6)    |    支持定制前后缀。    |
|    [number 数值输入框](/zh/datav/datav-7-0/user-guide/control-type-configuration#title-lyu-su7-7f1)    |    已停止维护，推荐使用 **stepper** 替代。    |    |
|    [select 选择器](/zh/datav/datav-7-0/user-guide/control-type-configuration#title-17x-y6h-gef)    |    支持开启过滤和自定义输入。当需要设置字体时，可开启渲染字体功能，预览字体样式。    |    |
|    [search 下拉搜索框](/zh/datav/datav-7-0/user-guide/control-type-configuration#title-a72-rro-xxy)    |    已经停止维护，推荐使用**select**替代。    |    |
|    [color 颜色选择器](/zh/datav/datav-7-0/user-guide/control-type-configuration#title-q55-gsi-fym)    |    已经停止维护，推荐使用**fill**替代。    |    |
|    [multicolor 渐变颜色选择器](/zh/datav/datav-7-0/user-guide/control-type-configuration#title-pho-mbd-fpz)    |    可选单色或渐变色。目前已经停止维护，推荐使用fill替代。    |    |
|    [array 数据系列](/zh/datav/datav-7-0/user-guide/control-type-configuration#9ba4515af6g9j)    |    适用于多个系列配置或多个颜色循环配色。目前已经停止维护，推荐使用**tabs**替代。    |    |
|    [hidden 隐藏配置项](/zh/datav/datav-7-0/user-guide/control-type-configuration#title-514-8bc-k3e)    |    DataV不会渲染此配置。    |    |
|    [timePicker 时间选择器](/zh/datav/datav-7-0/user-guide/control-type-configuration#ca57bc8667pay)    |    支持自定义时间格式，并可选择固定时间或设置时间范围。    |    |
|    [datePicker 日期选择器](/zh/datav/datav-7-0/user-guide/control-type-configuration#2a4e8a832apys)    |    支持自定义日期格式，并可选择固定日期或设置日期范围。    |    |
|    [boolean 布尔配置项](/zh/datav/datav-7-0/user-guide/control-type-configuration#title-sr9-mmq-m6t)    |    目前已经停止维护，推荐使用**switch**替代。    |    |
|    [radio 单选框](/zh/datav/datav-7-0/user-guide/control-type-configuration#title-zkr-rje-kg2)    |    支持设置选项定宽。    |    |
|    [checkbox 复选框](/zh/datav/datav-7-0/user-guide/control-type-configuration#title-zho-8v2-572)    |    支持为选项设置宽度。    |    |
|    [buttonRadio 单选按钮](/zh/datav/datav-7-0/user-guide/control-type-configuration#title-m0y-77k-35x)    |    支持设置按钮图标均匀等分。    |    |
|    [iconRadio 单选图标](/zh/datav/datav-7-0/user-guide/control-type-configuration#title-lti-593-yj7)    |    支持设置选项定宽和图标均匀等分。    |    |
|    [percent 百分比值](/zh/datav/datav-7-0/user-guide/control-type-configuration#title-9q7-pv3-i4a)    |    目前已经停止维护，推荐使用**slider**替代。    |    |
|    [image 图片框](/zh/datav/datav-7-0/user-guide/control-type-configuration#title-qwq-opn-bh6)    |    支持设置图标默认值，不设置则为空。    |    |
|    [imageSelect 图片选择器](/zh/datav/datav-7-0/user-guide/control-type-configuration#09ec9f9c08eeh)    |    支持设置选项列表。    |    |
|    [switch 开关](/zh/datav/datav-7-0/user-guide/control-type-configuration#title-uhi-bvo-vbh)    |    支持选择是否展示文字状态。    |    |
|    [stepper 步进器](/zh/datav/datav-7-0/user-guide/control-type-configuration#title-heh-ock-xk1)    |    支持定制步长、最大值和最小值以及前缀和后缀。    |    |
|    [slider 滑动条](/zh/datav/datav-7-0/user-guide/control-type-configuration#title-gw8-q52-e3c)    |    支持单滑块和双滑块，同时支持定制步长、最大值和最小值、前缀和后缀、精度，可开启范围显示。    |    |
|    [keyBoard 热键定义器](/zh/datav/datav-7-0/user-guide/control-type-configuration#title-gvu-pzr-64b)    |    支持键盘按键映射输入。    |    |
|    [fill 填充框](/zh/datav/datav-7-0/user-guide/control-type-configuration#title-79o-i1d-2sw)    |    支持三种填充类型以及组合。    |    |
|    高频套件    |    [margin 外边距](/zh/datav/datav-7-0/user-guide/control-type-configuration#title-2sv-hd5-sc6)和[padding 内边距](/zh/datav/datav-7-0/user-guide/control-type-configuration#ad2d41b35exw2)    |    由四个步进器配置项组成，可定制上下左右四个边距值。    |
|    [line 线套件](/zh/datav/datav-7-0/user-guide/control-type-configuration#title-89v-dz9-7t2)    |    由线粗细步进器、平滑⽅式图标单选器、样式选择器和纯色填充框组成。    |    |
|    [font 字体套件](/zh/datav/datav-7-0/user-guide/control-type-configuration#9b91496dc6enh)    |    由字体选择器、字体粗细选择器、字体大小步进器和纯色填充框组成。    |    |
|    组合控件    |    [suite 通用套件](/zh/datav/datav-7-0/user-guide/control-type-configuration#title-kn3-wb5-bnb)    |    由一组控件组成。    |
|    [tabs 标签组](/zh/datav/datav-7-0/user-guide/control-type-configuration#title-mrb-hun-og1)    |    切换标签可展示当前标签下的内容，支持动态增减标签组。    |    |
|    [menu 菜单](/zh/datav/datav-7-0/user-guide/control-type-configuration#title-4mx-ska-b68)    |    用来组织配置项的结构，目前支持一级菜单和二级菜单。    |    |
|    [group 配置项组](/zh/datav/datav-7-0/user-guide/control-type-configuration#title-7bk-b5d-rrx)    |    可包含多个子配置项（建议多个同类元素配置项归于一个group），可用来组织内容，并支持折叠或展开组的内容。    |    |

**重要** 

请勿使用关键字作为配置的key值，例如`default`、`show`和`range`。

## **配置示例**

通过以下示例代码为组件定义配置项，DataV将自动生成如下可视化配置面板。

![配置示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1629788951/p93131.png)

```
{
  "options": {
    "type": "menu",
    "children": {
      "chart": {
        "name": "图表",
        "children": {
          "margin": {
            "type": "margin",
            "name": "边距",
            "default": {
              "top": 20,
              "bottom": 30,
              "left": 35,
              "right": 15
            }
          },
          "loadAmount": {
            "name": "最多加载",
            "description": "为保证大屏展示效果此组件开启数据加载限制，最多加载前指定条数据记录进行计算、布局与绘制",
            "type": "stepper",
            "default": 2000,
            "step": 1
          },
          "bar": {
            "name": "柱图样式",
            "type": "group",
            "children": {
              "bgColor": {
                "name": "背景颜色",
                "type": "fill",
                "default": "RGBA(255,255,255,0.1)"
              }
            }
          },
          "numericalLabel": {
            "name": "值标签",
            "type": "group",
            "children": {
              "show": {
                "name": "显示/隐藏",
                "type": "boolean",
                "default": false
              },
              "textStyle": {
                "type": "font",
                "name": "文本",
                "default": {
                  "fontFamily": "Microsoft Yahei",
                  "fontWeight": "normal",
                  "fontSize": 10,
                  "color": "#000"
                }
              },
              "pos": {
                "name": "位置",
                "type": "iconRadio",
                "default": "center",
                "options": [
                  {
                    "label": "顶部",
                    "value": "top",
                    "src": "top-center-pos"
                  },
                  {
                    "label": "中间",
                    "value": "center",
                    "src": "middle-center-pos"
                  },
                  {
                    "label": "底部",
                    "value": "bottom",
                    "src": "bottom-center-pos"
                  }
                ]
              },
              "emptyData": {
                "name": "空值数据",
                "type": "switch",
                "default": false
              }
            },
            "enableHide": true
          }
        },
        "type": "menuChild",
        "mode": "single"
      },
      "axis": {
        "name": "坐标轴",
        "children": {
          "xaxis": {
            "name": "x轴",
            "children": {
              "isShow": {
                "type": "switch",
                "name": "x轴可见",
                "default": true
              },
              "boundaryGap": {
                "type": "slider",
                "name": "两边留白",
                "default": 0.6,
                "step": 0.01,
                "min": 0,
                "max": 1,
                "precision": 2,
                "showInPanel": {
                  "conditions": [
                    [
                      ".isShow",
                      "$eq",
                      true
                    ]
                  ],
                  "logicalType": "$and"
                }
              },
              "interval": {
                "type": "slider",
                "name": "分割间隔",
                "default": 0.6,
                "step": 0.01,
                "min": 0,
                "max": 0.95,
                "precision": 2,
                "showInPanel": {
                  "conditions": [
                    [
                      ".isShow",
                      "$eq",
                      true
                    ]
                  ],
                  "logicalType": "$and"
                }
              },
              "label": {
                "name": "轴标签",
                "type": "group",
                "enableHide": true,
                "children": {
                  "show": {
                    "default": true
                  },
                  "format": {
                    "name": "显示格式",
                    "type": "select",
                    "default": "%m月",
                    "description": "时间请参照 %m/%d/%Y %H:%M:%S, 整数参照 d, 浮点参照 .1f",
                    "options": [
                      {
                        "value": "d",
                        "label": "11(整数)"
                      },
                      {
                        "value": ".1f",
                        "label": "11.1(浮点数)"
                      },
                      {
                        "value": ".2f",
                        "label": "11.11(浮点数)"
                      },
                      {
                        "value": "%Y年",
                        "label": "2016年"
                      },
                      {
                        "value": "%Y",
                        "label": "2016(年份)"
                      },
                      {
                        "value": "%m月%d日",
                        "label": "01月01日"
                      },
                      {
                        "value": "%m/%d",
                        "label": "01/01(月/日)"
                      },
                      {
                        "value": "%H:%M:%S",
                        "label": "02:30:00"
                      },
                      {
                        "value": "%H:%M",
                        "label": "02:30(时:分)"
                      },
                      {
                        "value": "%Y/%m/%d %H:%M",
                        "label": "2016/01/01 02:30"
                      },
                      {
                        "value": "%Y/%m/%d",
                        "label": "2016/01/01"
                      },
                      {
                        "value": "%m/%d %H:%M",
                        "label": "01/01 02:30"
                      },
                      {
                        "value": "%m月",
                        "label": "1月"
                      },
                      {
                        "value": "%d日",
                        "label": "2日"
                      },
                      {
                        "value": "%Hh",
                        "label": "02h"
                      },
                      {
                        "value": "%H",
                        "label": "02(时)"
                      },
                      {
                        "value": "%m-%d",
                        "label": "01-01"
                      },
                      {
                        "value": "%m.%d",
                        "label": "01.01"
                      }
                    ],
                    "filterable": true,
                    "allowCustom": true,
                    "showInPanel": {
                      "conditions": [
                        [
                          "..type",
                          "$ne",
                          "category"
                        ]
                      ]
                    }
                  },
                  "textarea": {
                    "type": "font",
                    "name": "文本",
                    "default": {
                      "fontFamily": "Microsoft Yahei",
                      "fontWeight": "normal",
                      "fontSize": 12,
                      "color": "rgb(144, 160, 174)"
                    }
                  },
                  "display": {
                    "type": "suite",
                    "name": "轴标签展示",
                    "children": {
                      "angle": {
                        "name": "角度",
                        "type": "iconRadio",
                        "default": "0",
                        "options": [
                          {
                            "value": "0",
                            "label": "水平",
                            "src": "horizontal"
                          },
                          {
                            "value": "45",
                            "label": "斜角",
                            "src": "incline"
                          },
                          {
                            "value": "90",
                            "label": "垂直",
                            "src": "vertical"
                          }
                        ],
                        "col": 12
                      },
                      "amount": {
                        "name": "数量",
                        "type": "stepper",
                        "default": 0,
                        "min": 0,
                        "step": 1,
                        "description": "坐标轴刻度标签最多显示个数",
                        "col": 12
                      },
                      "unit": {
                        "type": "text",
                        "default": "",
                        "name": "轴单位",
                        "col": 12
                      }
                    }
                  }
                },
                "showInPanel": {
                  "conditions": [
                    [
                      ".isShow",
                      "$eq",
                      true
                    ]
                  ]
                }
              },
              "axisLine": {
                "name": "轴线",
                "type": "group",
                "children": {
                  "show": {
                    "default": true
                  },
                  "color": {
                    "type": "fill",
                    "name": "颜色",
                    "default": "rgba(255, 255, 255, 0.1)"
                  }
                },
                "enableHide": true,
                "showInPanel": {
                  "conditions": [
                    [
                      ".isShow",
                      "$eq",
                      true
                    ]
                  ]
                }
              },
              "grid": {
                "name": "网格线",
                "type": "group",
                "children": {
                  "show": {
                    "default": false
                  },
                  "color": {
                    "type": "fill",
                    "name": "颜色",
                    "default": "#fff"
                  }
                },
                "enableHide": true,
                "showInPanel": {
                  "conditions": [
                    [
                      ".isShow",
                      "$eq",
                      true
                    ]
                  ]
                }
              }
            },
            "enableHide": true
          },
          "yaxis": {
            "name": "y轴",
            "children": {
              "isShow": {
                "name": "y轴可见",
                "type": "switch",
                "default": true
              },
              "extent": {
                "type": "suite",
                "name": "范围",
                "children": {
                  "min": {
                    "type": "select",
                    "name": "最小值",
                    "default": "0",
                    "description": "可输入数值来自定义标签最小值。",
                    "options": [
                      {
                        "value": "auto",
                        "label": "自动取整"
                      },
                      {
                        "value": "dataMin",
                        "label": "数据最小值"
                      }
                    ],
                    "filterable": true,
                    "allowCustom": true,
                    "col": 12
                  },
                  "max": {
                    "type": "select",
                    "name": "最大值",
                    "default": "dataMax",
                    "description": "可输入数值来自定义标签最大值。",
                    "options": [
                      {
                        "value": "auto",
                        "label": "自动取整"
                      },
                      {
                        "value": "dataMax",
                        "label": "数据最大值"
                      }
                    ],
                    "filterable": true,
                    "allowCustom": true,
                    "col": 12
                  }
                },
                "showInPanel": {
                  "conditions": [
                    [
                      ".isShow",
                      "$eq",
                      true
                    ]
                  ]
                }
              },
              "label": {
                "name": "轴标签",
                "type": "group",
                "enableHide": true,
                "children": {
                  "format": {
                    "name": "显示格式",
                    "type": "select",
                    "default": ".0f",
                    "description": "整数参照 d, 浮点参照 .1f",
                    "options": [
                      {
                        "value": null,
                        "label": "默认"
                      },
                      {
                        "value": ".0f",
                        "label": "11(整数)"
                      },
                      {
                        "value": ".1f",
                        "label": "11.1(浮点数)"
                      },
                      {
                        "value": ".2f",
                        "label": "11.11(浮点数)"
                      },
                      {
                        "value": "%",
                        "label": "11%"
                      },
                      {
                        "value": ".1%",
                        "label": "11.1%"
                      },
                      {
                        "value": ".2%",
                        "label": "11.11%"
                      }
                    ],
                    "filterable": true,
                    "allowCustom": true
                  },
                  "textarea": {
                    "type": "font",
                    "name": "文本",
                    "default": {
                      "fontFamily": "Microsoft Yahei",
                      "fontWeight": "normal",
                      "fontSize": 12,
                      "color": "rgb(144, 160, 174)"
                    }
                  },
                  "display": {
                    "type": "suite",
                    "name": "轴标签展示",
                    "children": {
                      "amount": {
                        "name": "数量",
                        "type": "stepper",
                        "default": 6,
                        "min": 0,
                        "step": 1,
                        "description": "坐标轴刻度标签最多显示个数",
                        "col": 12
                      },
                      "unit": {
                        "type": "text",
                        "name": "单位",
                        "default": "",
                        "col": 12,
                        "enableHide": true
                      }
                    }
                  }
                },
                "showInPanel": {
                  "conditions": [
                    [
                      ".isShow",
                      "$eq",
                      true
                    ]
                  ]
                }
              },
              "axisLine": {
                "name": "轴线",
                "type": "group",
                "children": {
                  "show": {
                    "default": true
                  },
                  "color": {
                    "type": "fill",
                    "name": "颜色",
                    "default": "rgba(255, 255, 255, 0.1)"
                  }
                },
                "enableHide": true,
                "showInPanel": {
                  "conditions": [
                    [
                      ".isShow",
                      "$eq",
                      true
                    ]
                  ]
                }
              },
              "grid": {
                "name": "网格线",
                "type": "group",
                "children": {
                  "show": {
                    "default": false
                  },
                  "color": {
                    "type": "fill",
                    "name": "颜色",
                    "default": "#434343"
                  }
                },
                "enableHide": true,
                "showInPanel": {
                  "conditions": [
                    [
                      ".isShow",
                      "$eq",
                      true
                    ]
                  ]
                }
              }
            },
            "enableHide": true
          }
        },
        "type": "menuChild",
        "mode": "multiple"
      },
      "series": {
        "type": "menuChild",
        "name": "系列",
        "children": {
          "series2type": {
            "type": "switch",
            "name": "系列转类型",
            "default": false
          },
          "series": {
            "type": "tabs",
            "name": "数据系列",
            "default": [
              {
                "color": {
                  "type": "flat",
                  "value": "rgb(10, 115, 255)"
                }
              }
            ],
            "template": {
              "type": "object",
              "name": "系列<%= i + 1%>",
              "children": {
                "color": {
                  "name": "颜色",
                  "type": "fill",
                  "default": {
                    "type": "flat",
                    "value": "rgba(131,32,220,0.5)"
                  },
                  "components": [
                    "flat",
                    "linearGradient"
                  ]
                }
              }
            }
          }
        }
      },
      "others": {
        "name": "其它",
        "children": {
          "animation": {
            "name": "缓动动画",
            "type": "group",
            "fold": true,
            "children": {
              "show": {
                "default": true
              },
              "setting": {
                "type": "suite",
                "name": "动画设置",
                "children": {
                  "animationEasing": {
                    "name": "缓动效果",
                    "type": "select",
                    "options": [
                      {
                        "value": "linear",
                        "label": "linear"
                      },
                      {
                        "value": "quadraticIn",
                        "label": "quadraticIn"
                      },
                      {
                        "value": "quadraticOut",
                        "label": "quadraticOut"
                      },
                      {
                        "value": "quadraticInOut",
                        "label": "quadraticInOut"
                      },
                      {
                        "value": "cubicIn",
                        "label": "cubicIn"
                      },
                      {
                        "value": "cubicOut",
                        "label": "cubicOut"
                      },
                      {
                        "value": "cubicInOut",
                        "label": "cubicInOut"
                      },
                      {
                        "value": "quarticIn",
                        "label": "quarticIn"
                      },
                      {
                        "value": "quarticOut",
                        "label": "quarticOut"
                      },
                      {
                        "value": "quarticInOut",
                        "label": "quarticInOut"
                      },
                      {
                        "value": "quinticIn",
                        "label": "quinticIn"
                      },
                      {
                        "value": "quinticOut",
                        "label": "quinticOut"
                      },
                      {
                        "value": "quinticInOut",
                        "label": "quinticInOut"
                      },
                      {
                        "value": "sinusoidalIn",
                        "label": "sinusoidalIn"
                      },
                      {
                        "value": "sinusoidalOut",
                        "label": "sinusoidalOut"
                      },
                      {
                        "value": "sinusoidalInOut",
                        "label": "sinusoidalInOut"
                      },
                      {
                        "value": "exponentialIn",
                        "label": "exponentialIn"
                      },
                      {
                        "value": "exponentialOut",
                        "label": "exponentialOut"
                      },
                      {
                        "value": "exponentialInOut",
                        "label": "exponentialInOut"
                      },
                      {
                        "value": "circularIn",
                        "label": "circularIn"
                      },
                      {
                        "value": "circularOut",
                        "label": "circularOut"
                      },
                      {
                        "value": "circularInOut",
                        "label": "circularInOut"
                      },
                      {
                        "value": "elasticIn",
                        "label": "elasticIn"
                      },
                      {
                        "value": "elasticOut",
                        "label": "elasticOut"
                      },
                      {
                        "value": "elasticInOut",
                        "label": "elasticInOut"
                      },
                      {
                        "value": "backIn",
                        "label": "backIn"
                      },
                      {
                        "value": "backOut",
                        "label": "backOut"
                      },
                      {
                        "value": "backInOut",
                        "label": "backInOut"
                      },
                      {
                        "value": "bounceIn",
                        "label": "bounceIn"
                      },
                      {
                        "value": "bounceOut",
                        "label": "bounceOut"
                      },
                      {
                        "value": "bounceInOut",
                        "label": "bounceInOut"
                      }
                    ],
                    "default": "cubicInOut",
                    "filterable": true,
                    "allowCustom": true,
                    "col": 12
                  },
                  "animationAfterPreviousSeries": {
                    "name": "各系列依次动画",
                    "type": "switch",
                    "default": false,
                    "col": 12
                  }
                }
              },
              "enter": {
                "type": "suite",
                "name": "入场动画",
                "children": {
                  "animationDuration": {
                    "name": "初始动画时长",
                    "type": "stepper",
                    "step": 1,
                    "default": 1000,
                    "col": 12,
                    "suffix": "ms"
                  }
                }
              },
              "update": {
                "type": "suite",
                "name": "更新动画",
                "children": {
                  "animationDurationUpdate": {
                    "name": "更新动画时长",
                    "type": "stepper",
                    "default": 300,
                    "step": 1,
                    "col": 12,
                    "suffix": "ms"
                  },
                  "animationUpdateFromPrevious": {
                    "name": "是否从之前位置开始",
                    "type": "switch",
                    "default": true,
                    "col": 12
                  }
                }
              }
            },
            "enableHide": true
          },
          "tooltip": {
            "name": "提示框",
            "type": "group",
            "fold": true,
            "children": {
              "show": {
                "default": true
              },
              "hideDelay": {
                "name": "消失延迟时间",
                "type": "stepper",
                "default": 100,
                "step": 1,
                "suffix": "ms"
              },
              "trigger": {
                "type": "suite",
                "name": "触发方式",
                "children": {
                  "type": {
                    "name": "触发类型",
                    "type": "iconRadio",
                    "options": [
                      {
                        "value": "item",
                        "label": "数据项",
                        "src": "item"
                      },
                      {
                        "value": "axis",
                        "label": "坐标轴",
                        "src": "axis"
                      }
                    ],
                    "default": "item",
                    "col": 12
                  },
                  "action": {
                    "name": "触发动作",
                    "type": "iconRadio",
                    "options": [
                      {
                        "value": "hover",
                        "label": "悬浮",
                        "src": "hover"
                      },
                      {
                        "value": "click",
                        "label": "点击",
                        "src": "click"
                      }
                    ],
                    "default": "hover",
                    "col": 12
                  }
                }
              },
              "textStyle": {
                "name": "文本样式",
                "type": "font",
                "default": {
                  "fontFamily": "Microsoft Yahei",
                  "fontWeight": "normal",
                  "fontSize": 14,
                  "color": "#fff"
                }
              },
              "axisPointer": {
                "name": "坐标轴指示器",
                "type": "group",
                "fold": true,
                "children": {
                  "show": {
                    "name": "显示/隐藏",
                    "type": "boolean",
                    "default": true
                  },
                  "_type": {
                    "name": "类型",
                    "type": "select",
                    "options": [
                      {
                        "name": "直线指示器",
                        "value": "line"
                      }
                    ],
                    "default": "line",
                    "showInPanel": {
                      "conditions": [
                        [
                          ".show",
                          "$eq",
                          true
                        ]
                      ]
                    }
                  },
                  "lineStyle": {
                    "name": "指示线样式",
                    "type": "suite",
                    "fold": true,
                    "showInPanel": {
                      "conditions": [
                        [
                          ".show",
                          "$eq",
                          true
                        ],
                        [
                          "._type",
                          "$eq",
                          "line"
                        ]
                      ]
                    },
                    "children": {
                      "width": {
                        "name": "宽度",
                        "type": "stepper",
                        "step": 1,
                        "default": 1,
                        "col": 12,
                        "suffix": "px"
                      },
                      "_type": {
                        "name": "类型",
                        "type": "iconRadio",
                        "options": [
                          {
                            "name": "实线",
                            "value": "solid",
                            "src": "solid"
                          },
                          {
                            "name": "虚线",
                            "value": "dashed",
                            "src": "dashed-line"
                          },
                          {
                            "name": "点线",
                            "value": "dotted",
                            "src": "dot-line"
                          }
                        ],
                        "default": "solid",
                        "col": 12
                      },
                      "color": {
                        "name": "颜色",
                        "type": "fill",
                        "default": "#f00",
                        "col": 24
                      }
                    }
                  }
                },
                "enableHide": true,
                "showInPanel": {
                  "conditions": [
                    [
                      ".trigger.type",
                      "$eq",
                      "axis"
                    ]
                  ]
                }
              },
              "bgBox": {
                "name": "背景框样式",
                "type": "group",
                "children": {
                  "backgroundColor": {
                    "name": "背景色",
                    "type": "fill",
                    "default": "rgba(0, 0, 0, 0.65)"
                  },
                  "customSize": {
                    "name": "自定义",
                    "type": "suite",
                    "children": {
                      "show": {
                        "default": false
                      },
                      "width": {
                        "name": "宽度",
                        "type": "stepper",
                        "default": 150,
                        "step": 1,
                        "col": 12,
                        "suffix": "px"
                      },
                      "height": {
                        "name": "高度",
                        "type": "stepper",
                        "default": 50,
                        "step": 1,
                        "col": 12,
                        "suffix": "px"
                      }
                    },
                    "enableHide": true
                  },
                  "padding": {
                    "name": "内边距",
                    "type": "stepper",
                    "default": 10,
                    "step": 1,
                    "suffix": "px"
                  },
                  "offset": {
                    "type": "suite",
                    "name": "偏移量",
                    "children": {
                      "xOffset": {
                        "name": "水平偏移量",
                        "type": "stepper",
                        "default": 6,
                        "step": 1,
                        "col": 12,
                        "suffix": "px"
                      },
                      "yOffset": {
                        "name": "垂直偏移量",
                        "type": "stepper",
                        "default": 10,
                        "step": 1,
                        "col": 12,
                        "suffix": "px"
                      }
                    }
                  },
                  "border": {
                    "type": "suite",
                    "name": "边框",
                    "children": {
                      "borderWidth": {
                        "name": "边框粗细",
                        "type": "stepper",
                        "step": 1,
                        "default": 0,
                        "col": 12,
                        "suffix": "px"
                      },
                      "borderColor": {
                        "name": "边框颜色",
                        "type": "fill",
                        "default": "#333",
                        "col": 12
                      }
                    }
                  }
                }
              }
            },
            "enableHide": true
          }
        },
        "type": "menuChild",
        "mode": "single"
      }
    }
  }
}
```