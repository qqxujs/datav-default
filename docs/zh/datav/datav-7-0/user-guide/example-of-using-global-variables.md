<!DOCTYPE html> 

本文通过四个案例，演示如何使用全局变量功能。

## **前提条件**

已进入画布编辑器

## **案例一：**实现按日期查询

1. 添加组件。

  1. 在画布编辑器上方单击**搜索**，输入**通用标题**和**时间选择器**。
  2. 单击将组件添加至画布中。
2. 设置静态全局变量。

  1. 在画布编辑器左侧，选择**全局变量**页签。
  2. 单击**新建变量**，重命名为`date`，描述写`日期值`，设置初始值为`2023-07-19`。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0545379861/p695090.png)
3. 设置通用标题数据源。

  1. 选中**通用标题**组件，选择**数据源**页签。
  2. 设置数据源类型为数据库，选择已有数据源。在SQL输入框中输入以下语句。![2024-10-15_11-30-16 (1)](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3003409271/p859373.gif)

**说明**  
  此处需要使用英文冒号引入全局变量，详情请参见[全局变量自动补全](/zh/datav/datav-7-0/user-guide/use-global-variables#1ca3d5d366qbu)。
  3. 查看数据返回结果和通用标题组件展示的即为全局变量设置的初始值。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1545379861/p695189.png)
4. 配置时间选择器交互。

  1. 选中**时间选择器**组件，选择**高级**页签。
  2. 打开交互事件开关，在**time**字段下选择变量`date`。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0545379861/p695192.png)

**说明**  
  此处设置表示在进行时间选择时，time改变都会更新date值。
5. 预览展示结果。  
单击画布编辑器右上角的**预览**，验证设置结果。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0545379861/p695194.png)

**说明**  
预览页面打开后，首先展示全局变量的默认值，接着会展示时间选择器的默认值，这时候改变时间，通用标题就会展示已选中的时间值。
6. 设置动态全局变量。

  1. 返回画布编辑器页面，修改全局变量date的来源为**数据源请求**。
  2. 选择已创建的数据源，在SQL窗口中输入获取当前时间的查询代码。
  3. ```  
  select cast(curDate() as char) as date  
  ```
  4. 添加过滤器，获取date的值导入到通用标题。  
  ```  
  return data[0].date;  
  ```
  5. 查看过滤器的输入值和输出值。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1545379861/p695201.png)
  6. 查看通用标题组件的内容，即为动态获取的时间值。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0545379861/p695202.png)
7. 预览展示结果。  
单击画布编辑器右上角的**预览**，验证设置结果。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0545379861/p695204.png)

**说明**  
预览页面打开后，首先展示全局变量动态获取的时间值，此时改变时间，通用标题将同步展示已选中的时间值。

## 案例二：实现数据分发

1. 添加组件。

  1. 在画布编辑器上方单击**搜索**，输入**通用标题**和**数字翻牌器**。
  2. 单击将组件添加至画布中。
2. 设置静态全局变量。

  1. 在画布编辑器左侧，选择**全局变量**页签。
  2. 单击**新建变量**，重命名为`x`，设置初始值。  
  ```  
  [  
    {  
      "text": "我是文本",  
      "number": 123  
    }  
  ]  
  ```
3. 设置蓝图交互。

  1. 单击左上角的![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4439479861/p695233.png)图标，进入蓝图编辑器。
  2. 拖拽图层节点和全局变量节点到蓝图主画布中。
  3. 单击**逻辑节点**，添加两个串行数据处理节点。
  4. 连接节点。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4439479861/p695237.png)
  5. 设置串行数据处理节点处理方法。

    * 数字翻牌器  
      ```  
      return [{  
        value: data[0].number  
      }]  
      ```
    * 通用标题  
      ```  
      return [{  
        value: data[0].text  
      }]  
      ```
4. 预览展示结果。  
单击画布编辑器右上角的**预览**，验证设置结果。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4439479861/p695238.png)

## 案例三：实现动态数据加和

1. 添加组件。

  1. 在画布编辑器上方单击**搜索**，输入**数字翻牌器**。
  2. 单击将组件添加至画布中。
2. 设置静态全局变量。

  1. 在画布编辑器左侧，选择**全局变量**页签。
  2. 单击**新建变量**，创建两个全局变量，分别重命名为`y`和`z`，设置初始值为`123`和`234`。
3. 设置蓝图交互。

  1. 单击左上角的![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4439479861/p695233.png)图标，进入蓝图编辑器。
  2. 拖拽图层节点和全局变量节点到蓝图主画布中。
  3. 单击**逻辑节点**，添加两个串行数据处理节点。
  4. 连接节点。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4439479861/p695247.png)
  5. 设置串行数据处理节点处理方法。

    * 节点1  
      ```  
      return [{  
        value: data + getCallbackValue(  
          "z")  
      }]  
      ```
    * 节点2  
      ```  
      return [{  
        value: data + getLocalValue(  
          "y")  
      }]  
      ```
4. 预览展示结果。  
单击画布编辑器右上角的**预览**，验证设置结果。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4439479861/p695251.png)
5. 设置动态全局变量。  
修改全局变量y的来源为**数据源请求**，并选择API或数据库等动态数据源。
6. 设置蓝图交互。

  1. 单击**逻辑节点**，添加一个**定时器**。
  2. 打开**是否循环**开关，设置定时器节点的延迟时间为3秒。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4439479861/p695301.png)
  3. 连接节点。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4439479861/p695299.png)
7. 预览展示结果。  
单击画布编辑器右上角的**预览**，验证结果。每三秒数字翻牌器就会变化，从而实现动态数据加和。

## **案例四：实现数据筛选**

1. 添加组件。

  1. 在画布编辑器上方单击**搜索**，输入**Tab列表**和**折线图**。
  2. 单击将组件添加至画布中。
  3. 选中**Tab列表**，选择**数据源**页签。
  4. 修改静态数据。  
  ```  
  [  
    {  
      "id": 1,  
      "content": "全部"  
    },  
    {  
      "id": 2,  
      "content": "类型A"  
    },  
    {  
      "id": 3,  
      "content": "类型B"  
    }  
  ]  
  ```
2. 设置静态全局变量。

  1. 选中**折线图**，选择**数据源**页签，复制全量静态数据。
  2. 在画布编辑器左侧，选择**全局变量**页签。
  3. 单击**新建变量**，创建一个全局变量，重命名为`data`，设置初始值为已复制的折线图全量数据。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4439479861/p695313.png)
3. 设置蓝图交互。

  1. 单击左上角的![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4439479861/p695233.png)图标，进入蓝图编辑器。
  2. 拖拽图层节点到蓝图主画布中。
  3. 单击**逻辑节点**，添加1个串行数据处理节点。
  4. 连接节点。![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4439479861/p695319.png)
  5. 设置串行数据处理节点处理方法。  
  ```  
  let result = getCallbackValue("data") //获取全局变量数据  
  return result.filter(i => {  
    if (data.content == "全部") {  
      return result;//如果tab列表的内容为“全部”，则返回全部数据  
    } else {  
      return i.colorField == data.content;//如果tab列表的内容为“类型A”或“类型B”，则只返回对应的数据  
    }  
  });  
  ```
4. 预览展示结果。  
单击画布编辑器右上角的**预览**，验证设置结果。![数据筛选_Trim.gif](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4439479861/p695324.gif)