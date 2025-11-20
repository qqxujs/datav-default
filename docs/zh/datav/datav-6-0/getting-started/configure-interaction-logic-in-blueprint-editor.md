# 配置蓝图交互逻辑 %{#203663}% 

本文为您介绍在DataV名单抽奖模板可视化应用中实现多个精彩交互效果的蓝图配置方法。

## 背景信息

名单抽奖模板在年会或团建抽奖场景时，需要包含多个交互功能： 
* 当名单抽奖模板预览或发布时，将抽奖池组件中获奖名单数据分发到某抽奖页面的翻牌器组件中。
* 当主持人喊“抽几等奖”时，通过使用键盘1、2和3按键切换大屏对应到几等奖页面。
* 当使用键盘1、2和3按键切换不同抽奖大屏页面时，清空页面对应翻牌器内获奖名单数据状态。
* 当主持人喊“开始抽奖“时，通过使用键盘上的回车键，大屏开始滚动抽奖数据。
* 当主持人喊“停“时，通过使用键盘上的Esc键，大屏停止滚动，并且显示抽奖名单。

图 1\. 实现上述所有交互蓝图编辑器内连线示例图 

![实现上述所有交互效果的连线整体样式示例图](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8616772161/p238610.png)

**说明** 蓝图编辑器内各节点之间可以进行编组，有助于理解逻辑，更美观清晰地展示连线效果。 

## 步骤一：获取中奖名单数据并分发到对应抽奖页面的翻牌器中

在蓝图编辑器内，使用一个抽奖池组件节点、三个翻牌器组件节点和四个串行数据处理逻辑节点，实现大屏初次使用时即获取中奖名单结果并分发到不同页面内翻牌器组件的功能。 

1. 选中画布编辑器中的抽奖池组件，右键选择导出到蓝图编辑器。
2. 将画布编辑器内的一等奖翻牌器、二等奖翻牌器和三等奖翻牌器组件，分别选中后右键选择导出到蓝图编辑器。
3. 单击画布左上角的蓝图编辑器，切换到蓝图编辑器页面。
4. 将导入节点中的抽奖池组件节点、一等奖翻牌器、二等奖翻牌器和三等奖翻牌器组件节点添加到蓝图编辑器画布中。
5. 在蓝图编辑器画布中添加一个串行数据处理，命名为抽出一二三等奖，并在该节点的处理方法中编写一段用于抽取获奖名单数据的js代码，本案例的示例代码如下所示。  
![抽出一二三等奖](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0158762161/p239803.png)  
```  
const lotteryArr = (candidates, length) => {  
  const res = Array(0);  
  const len = candidates.length;  
  for (var i = 0; i < length; i++) {  
    const tmpArr = new Uint32Array(1);  
    crypto.getRandomValues(tmpArr);  
    const ind = tmpArr[0] % candidates.length;  
    candidates[ind] && res.push({  
      name: candidates[ind]['签到人员显示名'],  
      id: candidates[ind]['签到人员工号'],  
    });  
    candidates.splice(ind, 1);  
  }  
  return res;  
};  
const res = lotteryArr(data, 31);  
return {  
  three: res.slice(11, res.length),  
  two: res.slice(1, 11),  
  one: res.slice(0, 1),  
};  
```  
抽奖的算法思路，请参考下方代码。  
  * 简单的抽奖算法。  
  ```  
  /**
 * 抽奖算法，给定 start、end, 给定一个范围内的值
 * @example start: 0 end: 10, return 7
 * @param start {int}
 * @param end {int}
 * @return start - end 之间的一个值，包含 start、end
 */  
  const lottery = (start, end) {  
    return Math.floor(Math.random() * (end - start + 1) ) + start;  
  }  
  ```
  * 上面的算法是简单的伪随机代码，推荐采用Crypto.getRandomValues()算法。  
  ```  
  /**
 * 抽奖算法，给定 start、end, 给定一个范围内的值
 * @example start: 0 end: 10, return 7
 * @param start {int}
 * @param end {int}
 * @return start - end 之间的一个值，包含 start、end
 */  
  const lottery = (start, end) {  
    var array = new Uint32Array(1);  
    window.crypto.getRandomValues(array);  
    return array[0] % (end - start + 1) + start;  
  }  
  ```  
  具体请参见[Crypto.getRandomValues()](https://developer.mozilla.org/zh-CN/docs/Web/API/RandomSource/getRandomValues)算法详细资料。
  * 您还可以选择其他的算法服务，例如[random.org](http://random.org/)
6. 在蓝图编辑器画布中再次添加三个串行数据处理逻辑节点，分别命名为一等奖数据、二等奖数据和三等奖数据。
7. 将抽奖池节点内的当数据接口请求完成时与抽出一二三等奖逻辑节点左侧相连。
8. 将抽出一二三等奖逻辑节点右侧分别与一等奖数据、二等奖数据和三等奖数据三个逻辑节点的左侧相连。
9. 将一等奖数据、二等奖数据和三等奖数据三个逻辑节点的右侧分别与之对应的一等奖翻牌器、二等奖翻牌器和三等奖翻牌器三个节点的导入接口描述动作相连。  
![抽奖逻辑连接](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0158762161/p238502.png)  
通过编写抽奖算法代码对数据进行处理并将逻辑节点与组件节点连线后，可以实现将获取的中奖名单数据分发至对应的某等奖翻牌器中的功能。
10. （推荐）您还可以将抽奖池节点、抽出一二三等奖逻辑节点、一等奖数据、二等奖数据和三等奖数据三个逻辑节点一起选中后进行编组，且将编组命名为抽奖逻辑。  
![抽奖池逻辑节点编组](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0158762161/p238504.jpg)

## 步骤二：使用键盘1、2、3按键，切换并显示不同的抽奖页面

在蓝图编辑器内，使用键盘逻辑节点实现使用键盘上的多个按键切换到不同抽奖页面的功能。 

1. 在名单抽奖模板的画布编辑器中，将某等奖的页面内的所有相关组件全部成组，并自定义设定成组后组件整体的显隐样式。  
下图为将一等奖和二等奖的组设置成隐藏，三等奖组设成显示的示例。![抽奖页面的显隐控制](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0158762161/p237968.jpg)
2. 在画布编辑器左侧的图层栏，分别单击选中一等奖、二等奖和三等奖，右键将三个成组分别选择导出到蓝图编辑器。  
![分别导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0158762161/p237940.png)
3. 单击左上角的蓝图编辑器按钮，切换到蓝图编辑器页面。
4. 在蓝图编辑器页面内，单击添加一个键盘逻辑节点。  
![添加键盘逻辑节点](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0158762161/p237943.png)  
键盘逻辑节点上有一些默认的事件锚点，包括以下几个：  
  * 当任意键按下时：指的是按下键盘任意键时，执行对应动作。
  * 当字符键按下时：指的是在一个输入框内按下键盘的字符键输入文字时，执行对应动作。
  * 当按键释放时：指的是在放开某个按键时，执行对应动作。
  * 向上和向下：指的是一个自定义封装好的便捷事件锚点，分别代表了按下键盘的向上键或向下键。您还可以自定义添加别的按键名称，详情请参见[表 2](/zh/datav/datav-6-0/user-guide/input-devices#table-6po-9sc-c97 "表格中仅提供其他配置中的参数说明，其他参数配置请参见公共参数说明。")。
5. 选中键盘逻辑节点，在节点右侧配置面板内自定义配置1、2和3这三个按键事件。  
![配置123事件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1158762161/p237963.png)
6. 将一等奖、二等奖和三等奖节点添加到蓝图编辑器画布中。
7. 分别将键盘逻辑节点中的1、2和3事件与一等奖、二等奖和三等奖节点中的多个动作按下图所示连线。  
![三个页面显隐控制连线](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1158762161/p238019.jpg)  
实现当使用键盘上的按键1时，锚点连线到一等奖组的显示动作，并且同时连线到二等奖和三等奖组的隐藏动作。  
使用同样的方法，完成按键2和按键3的连线操作。  
最终通过使用按键1、2和3，实现互相切换显示不同抽奖页面的交互功能。

## 步骤三：使用键盘按键，清空对应抽奖页面中翻牌器的数据状态

在蓝图编辑器内，使用键盘逻辑节点实现使用键盘上的多个按键，清空对应抽奖页面内获奖名单数据状态的功能。 

1. 进入名单抽奖模板可视化应用的蓝图编辑器页面。
2. 根据[步骤二](#section-mh9-70b-mpe)中第五步配置的键盘逻辑节点，将该键盘逻辑节点中的1、2和3事件分别与根据[步骤一](#section-2ly-hgl-aa7)中第四步添加的一等奖翻牌器、二等奖翻牌器和三等奖翻牌器组件节点的清空状态动作连线。  
![清空状态连线样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1158762161/p238626.jpg)  
实现在控制键盘切换抽奖页面时，清空对应页面内翻牌器获奖名单数据的功能。

## 步骤四：使用键盘按键，控制抽奖页面抽奖情况并显示抽奖结果

在蓝图编辑器内，使用键盘逻辑节点实现使用Enter键和Esc键，控制抽奖页面开始滚动抽奖和停止抽奖并显示抽奖结果的功能。 

1. 在画布编辑器左侧的图层栏，分别在一等奖、二等奖和三等奖的成组内，选中对应的翻牌器组件，右键将三个翻牌器组件分别选择导出到蓝图编辑器。  
![翻牌器导出到蓝图编辑器](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1158762161/p238074.png)
2. 单击左上角的蓝图编辑器按钮，切换到蓝图编辑器页面。
3. 在蓝图编辑器页面内，再次单击添加一个键盘逻辑节点。
4. 参考[步骤二](#section-mh9-70b-mpe)中的自定义按键的方法，配置一个开始和停止按键事件。  
![配置开始滚动按键事件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1158762161/p238067.jpg)
5. 将一等奖翻牌器、二等奖翻牌器和三等奖翻牌器节点添加到蓝图编辑器画布中。
6. 分别将键盘逻辑节点中的开始和停止事件，与一等奖翻牌器、二等奖翻牌器和三等奖翻牌器节点中的多个动作按下图所示连线。  
![开始停止按键连线](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1158762161/p238083.png)  
实现当按下Enter按键时，开始事件锚点连线分别与三个翻牌器的开始翻滚动作相连；当按下Esc按键时，停止事件锚点连线分别与三个翻牌器的停止和公布名单动作相连。  
最终通过使用按键Enter和Esc，实现控制抽奖页面开始滚动抽奖和停止抽奖并显示抽奖结果的功能。