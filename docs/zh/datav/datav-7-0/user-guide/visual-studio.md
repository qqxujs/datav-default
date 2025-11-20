<!DOCTYPE html> 

在可视化演播厅中，预案是指预先配置的可视化展示方案，用于快速切换不同的数据视图、主题风格或交互模式，以适应不同的演示需求或突发情况。本文将详细介绍如何新建、投屏及管理预案。

**说明** 

可视化演播厅功能为7.0版本产品新增功能，请根据[可视化应用中心](https://datav.aliyun.com/v/appcenter/)环境进行操作。

## **新建预案**

**说明** 

若创建预案时提示配额不足，请单击**管理配额**以[配置预案配额](/zh/datav/datav-7-0/user-guide/workspace-overview#b623d3725ehc4)。

1. 在可视化应用中心的**可视化演播厅**模块查看是否存在预案信息。

  * 若不存在，请单击**创建演示预案**，跳转至**可视化演播厅**页面。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2832082761/p522839.png)
  * 若存在，鼠标移动到任一预案上，单击**详情**或**查看全部**，跳转至**可视化演播厅**页面。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2832082761/p522843.png)
2. 点击可视化演播厅的**创建演示预案**，进入配置页面。
3. 在左侧我的看板部分，搜索或直接选择需要添加的数据看板，单击**添加到序列**。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2832082761/p523464.png)
4. 在下方**设置播放序列**部分，可以拖拽看板前后顺序调换，也可以单击![{F5B3FA41-5DF3-4BD3-8936-3C6CE2FDBDB8}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4676919471/p963684.png)图标，在序列中去除看板。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2832082761/p523470.png)
5. 可选，单击右侧的**自动轮播设置**或**安全设置**，可以设置看板轮播的间隔时间，单位为秒，或者为当前演示预案添加控制端密码。
6. 确认无误后，单击右上角的**创建**，在弹窗中输入**预案名称**后确定。
7. 单击右上角的**返回列表**返回到可视化应用中心，查看新创建的预案。

## **投屏预案**

您可以在网页端或客户端进行投屏操作，使用前请确保已[创建预案](#9f653176272i9)。

在[可视化应用中心](https://datav.aliyun.com/v/appcenter/)的**可视化演播厅**模块中选择需要投屏的预案，单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8432919661/p523534.png)图标，跳转至投屏控制页面。

### **网页版**

1. 在投屏控制页面中单击页面右上角的**打开投屏播放器**，打开投屏页面，页面中会显示**投屏码**。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3364217761/p572265.png)
2. 在投屏控制页面中**输入投屏码**后，单击**开始投屏**。再次单击**确定**后，开启请求投屏。
3. 在投屏页面中单击**接受**，即可开始投屏。
4. 返回投屏控制页面，可以通过设置**自动播放**、**上下翻页**操作控制投屏页面的显示内容。也可以将**控制端二维码**分享给其他使用者。
5. （可选）如需结束投屏，单击页面右上角的**结束投屏**，并在弹窗中再次单击**确定**即可。

### **客户端版**

1. 在投屏控制页面中单击页面右上角的**打开投屏播放器**，打开投屏页面。
2. 在投屏页面右上角单击**下载投屏播放器**，下载投屏客户端。
3. 待下载完成后，双击打开`DataV_Player.exe`文件。您可以进行以下操作。![1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6676317761/p572464.png)

  * 单击**新建播放器**，可以创建一个新的播放器窗口。可以同时投屏多个预案，彼此不受影响。![2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6676317761/p572470.png)
  * 单击**重置**，可以重置当前投屏窗口的投屏码。

**重要**  
  重置播放器会更新投屏码，如有预案正在演示会退出投屏，请谨慎操作。
4. 在投屏控制页面**输入投屏码**后，单击**开始投屏**。再次单击**确定**后，开启投屏。
5. 在投屏播放器页面，单击**接受**，即可开始投屏。
6. 返回投屏控制端页面，可以通过设置**自动播放**、**上下翻页**操作控制投屏页面的显示内容。也可以将**控制端二维码**分享给其他使用者。

  * PC控制端示例![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3364217761/p572272.png)
  * 移动控制端示例![3e78c78d58c7b2f6fa78506c3d192392](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6676317761/p572507.jpg)
7. 当客户端处于**播放中**状态时，鼠标移动到窗口左侧，单击即可出现操作看板。您可以进行以下操作。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3715417761/p572684.png)![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3715417761/p572648.png)

  * 扫描**控制端二维码**，在移动端查看预案。
  * 单击**进入全屏/退出全屏**，可以切换当前窗口查看和全屏查看演示预案。
  * 单击**结束投屏**，并在弹窗中再次单击**确定**，即可退出当前投屏。
8. （可选）如需结束投屏，可以在PC端或移动端的控制端单击**结束投屏**，并在弹窗中再次单击**确定**退出投屏。

## **管理预案**

在[可视化应用中心](https://datav.aliyun.com/v/appcenter/)的**可视化演播厅**模块中，选择任一演示预案，单击**详情**进入详情页面，您可以进行以下操作。![{4010131F-2E0A-4760-8BB2-CF749289E13E}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4676919471/p963850.png)

* 搜索预案：在搜索框中输入需要查询的预案名称，系统会自动进行模糊匹配。
* 重命名预案：单击预案下方的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4676919471/p963837.png)图标重命名预案。
* 预览预案：鼠标移动到任一预案上，单击右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4676919471/p963839.png)图标预览预案。
* 编辑预案：鼠标移动到任一预案上，单击**编辑**。
* 删除演示预案：鼠标移动到任一预案上，单击右上角的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4676919471/p963842.png)图标删除预案。
* 管理预案配额：单击**管理配额**可以[配置预案配额](/zh/datav/datav-7-0/user-guide/workspace-overview#b623d3725ehc4)。