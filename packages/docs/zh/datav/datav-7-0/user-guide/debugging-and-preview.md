<!DOCTYPE html> 

数据看板调试预览功能可以实时记录交互日志与错误信息，包括组件操作记录和异常详情。本文全面介绍了调试预览界面的功能与使用规范。

## **背景信息**

DataV服务支持两种数据看板预览的模式：**普通预览**和**调试预览**。 

* **普通预览**：在画布/蓝图编辑器右上方单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9881472761/p533766.png)图标下的**普通预览**时，DataV服务不会记录预览数据看板时的交互日志和报错信息。
* **调试预览**：在画布/蓝图编辑器右上方单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0981472761/p533769.png)图标下的**调试预览**时，DataV服务将会记录在预览数据看板时的交互日志和报错信息。

**说明** 

**调试预览**功能仅支持PC端数据看板，移动端数据看板不支持**调试预览**。

## **前提条件**

* 已创建数据看板，支持[使用模板创建](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-a-template-to-create-a-project-on-pc)、[使用空白画布创建](https://help.aliyun.com/zh/datav/datav-7-0/getting-started/use-a-canvas-to-create-a-dashboard#639c36877c6jr)、[使用AI智能生成](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-ai-to-intelligently-generate-pc-side-kanban)。
* 已经添加组件并配置[蓝图](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/blueprint-editor-features-of-datav-7)交互事件或动作。

## **进入调试预览页面**

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 在**全部应用**页面，将鼠标悬停至目标数据看板上，单击**编辑**，进入画布编辑器页面。
3. 在数据看板的编辑页面，单击顶部菜单栏的![{9602C26E-53FD-4F68-BB6F-EC2AB2D953A5}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5804858471/p962460.png)图标，进入蓝图编辑器。
4. 右键单击所需调试节点对应的连线，选择**记录日志**，即可开启日志记录。

**说明**  
开启日志记录功能可追溯操作行为，此时连线将显示为红色。若节点无需调试，可在相同操作界面右键单击该连线，选择**取消记录日志**。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3804708571/p1007497.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3804708571/p1007499.png)
5. 单击右上方单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0981472761/p533769.png)图标下的**调试预览**，进入调试预览页面。

**说明**  
调试时可以采用最小粒度日志记录机制，实现端到端问题溯源。当目标组件未产生预期交互效果时，可从其触发动作开始逆向排查，逐级验证每个节点输入数据的准确性。

## **页面介绍**

进入**调试预览**界面后，执行交互动作即可开启调试状态。页面功能详情如下所示。

![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9881472761/p542555.jpg)![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0981472761/p542567.jpg)

|    **序号**    |    **说明**    |
|    ----    |    ----    |
|    1    |    用户交互模块，您可以单击查看已设置的交互效果。    |
|    2    |    蓝图日志逻辑模块，此处展示蓝图日志页面中各节点的连线逻辑，您可以查看蓝图节点的逻辑详情。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0981472761/p542564.png)    |
|    3    |    蓝图日志详情模块，您可以通过单击**录制/停止**，开启和关闭监听功能，也可以单击**清空**，清除当前界面的蓝图日志。在此模块，您可以查看日志的起始节点、目标节点、起始事件和目标动作等内容，并进行[交互日志](#6859544171rgv)相关操作。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0981472761/p542560.png)**说明** 为避免日志刷新影响数据看板性能，建议在调试预览时关闭数据自动更新，或增加数据自动更新时长。    |
|    4    |    组件日志模块，若组件存在数据源报错、过滤器报错、初始化出错等问题，将在此处展示[组件日志](#bd89c5a171g37)。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0981472761/p542566.png)    |
|    5    |    组件日志详情模块，单击左侧错误日志，在此处可以查看组件日志错误详情。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0981472761/p542592.png)    |

## **日志信息**

在调试预览界面进行交互操作时，若触发了已开启日志记录的交互连线，系统将自动记录该连线的上下游节点关系及交互触发时的数据快照。日志信息包含交互日志和组件日志两类：交互日志详细记录组件动作的执行参数及上下文信息，组件日志则专门用于追踪和展示组件运行时的异常报错情况。

### **交互日志**

* **查看日志详情**：每次新的交互后，将在原来的日志记录的最上方新增一条记录。单击日志记录左侧![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9081472761/p542572.png)图标，查看动作执行参数。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8081472761/p542571.png)
* **复制节点ID**：双击蓝图日志逻辑模块内的节点，可复制节点ID。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8081472761/p542575.png)
* **重复执行上一步操作**：双击蓝图日志逻辑模块内的事件-动作连线，可以快速执行上一步动作。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9081472761/p542587.png)

### **组件日志**

* 当组件请求发生错误时，会在面板顶部新增一条错误记录。单击某一条日志记录，可以查看报错详情。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8081472761/p542576.png)  
#### **常见报错类型**

|    **报错类型**    |    **类型说明**    |
|    ----    |    ----    |
|    **数据获取失败**    |    组件请求数据源发生错误时，产生该报错。数据源的请求可能发生在组件首次加载时、组件自动更新时、全局变量触发更新时、蓝图触发请求数据源动作时。展示报错的**发生时间**、**组件名称**、**数据源**和**报错信息**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9081472761/p542577.png)    |
|    **过滤器执行错误**    |    组件请求数据源成功返回数据后，经过过滤器时产生报错，将记录为过滤器报错。展示报错的**发生时间**、**组件名称**、**数据源**、**过滤器**、**输入数据**和**报错信息**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9081472761/p542580.png)    |
|    **组件内部报错**    |    组件渲染或执行组件方法时产生的报错，展示报错的组件ID、组件方法。    |
|    **节点内部报错**    |    蓝图节点内代码出现问题时，导致的节点初始化报错等。    |

**说明**  
当调用组件方法时的参数不符合组件声明时，将产生警告信息。
* **复制组件ID**：双击报错记录的组件名称，可复制ID到剪贴板。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8081472761/p542582.png)
* **搜索组件ID**：将复制的组件ID粘贴至编辑器搜索框，即可快速定位对应组件，并根据报错提示修改其配置。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9081472761/p542583.png)
* **筛选组件报错日志**：在输入框内输入某个组件名称、组件ID、过滤器或报错信息等，即可快速筛选出当前报错面板下所有与输入信息相关联的报错条目。