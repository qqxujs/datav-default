<!DOCTYPE html> 

本文介绍在蓝图编辑器中，配置输入设备类节点的方法。目前，输入设备内的逻辑节点只包括键盘。

## 键盘

键盘节点用于监听键盘设备。 

使用场景：键盘节点用于需要键盘参与交互的场景。例如，使用上下左右方向键控制一张图片的移动。 

添加键盘节点至画布中，可查看键盘节点支持的事件和动作，以及配置参数。添加方式请参见[使用逻辑节点](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/logic-nodes-overview#section-5b3-w0u-ud7)。 

![键盘面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3245635161/p66553.png)

__表 1\. 事件/动作参数说明__
| 事件/动作   | 说明                                                        |
| ---- | ---- |
| 当任意键按下时 | 按下键盘任意键时，执行对应动作。                                          |
| 当字符键按下时 | 按下键盘的字符键时，执行对应动作。                                         |
| 当按键释放时  | 释放按键时，执行对应动作。                                             |
| 向上和向下   | 系统默认添加的按键名称，可自定义增加或删除按键，详情请参见[配置项说明](#table-6po-9sc-c97)。 |

__表 2\. 配置项说明 表格中仅提供其他配置中的参数说明，其他参数配置请参见[公共参数说明](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/logic-nodes-overview#table-d04-vmz-ldb)。__
| 参数   | 说明                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---- | ---- |
| 触发方式 | 单击下拉框，选择一种键盘的触发方式，可选： keydown：当任意键按下时触发事件。 keypress：当字符键按下时触发事件。 keyup：当任意键释放时触发事件。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 按键列表 | 单击右侧的![加号图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p89097.jpg)或![垃圾桶图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3208049161/p89098.jpg)图标，即可自定义添加或删除一个新按键，添加后的新按键会显示在按键列表节点中。单击![横排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p95437.jpg)或![竖排列图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0201929951/p94077.jpg)图标配置多个按键的排列样式。单击![复制图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5896941261/p271562.jpg)图标，即可复制当前选中按键配置内容并新增一个同样配置的按键。 |
| 别名   | 自定义输入按键别名，用于按键的命名。例如，向上。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 键值   | 单击右侧的更改，自定义修改按键的触发键。修改后，当在键盘上按下对应按键时，会触发相应的动作。例如，Shift+↑。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

输出结果：无。