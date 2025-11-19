<!DOCTYPE html> 

本文介绍工具栏中的发布功能和快照功能。

## **前提条件**

* 已登录DataV控制台
* 已进入画布编辑器页面

## **发布数据看板**

1. 在**画布编辑器**页面右上角，单击**发布**，进入发布页面。
2. 在**发布**弹窗中，单击**发布大屏**。

**说明**  
单击发布后，发布页内容会被锁定，编辑后可通过 “快照管理” 快速同步发布内容。
3. 在发布页面，您可以分享**二维码**或复制**分享链接**，将当前数据看板分享给第三方。也可以将当前数据看板发布为快照，具体快照管理操作请参见[快照管理](#c0fee50065jlh)。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9875387761/p576896.png)
4. 可选，数据看板分享成功后，您可以配置**发布快照**的参数内容，还可以进行**访问限制**、**分享信息**和**加载页设置**等配置。

### **访问限制**

* 访问密码![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9875387761/p576988.png)

  1. 在**发布**对话框中，打开**访问密码**。
  2. 在**访问密码**输入框中，输入您的验证密码。  
  密码长度为6位以上，且必须具备以下三个条件：

    * 至少包含一个英文大写字母A～Z。
    * 至少包含一个英文小写字母a～z。
    * 至少包含一个数字0～9。

**说明**  
  密码设置成功后，系统会提示**已设置访问限制**。
  3. **可选：**配置**验证有效期**。

**重要**  
  只有密码设置成功或开启Token验证后，才可配置**验证有效期**。

    * 选中**验证有效期**，可以设置密码的有效期，最长为32小时。访问者首次输入密码且成功访问可视化应用后，在设置的有效期时间内，可任意访问该可视化应用而无需输入密码。
    * 去选中**验证有效期**，每次访问都需要输入密码。  
  密码设置成功后，当您再次访问可视化应用的分享链接时，系统会提示需要输入密码。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9875387761/p576912.png)
* 通过Token验证：您可以通过Token验证的方式，将可视化应用的访问权限与您的权限体系进行集成。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9875387761/p576955.png)

  1. 在**发布**对话框中，打开**通过Token验证**开关。
  2. 复制Token链接，保存到本地。您也可以单击刷新图标![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9875387761/p576964.png)，重置Token。
  3. 选中**验证有效期**，可以设置密码的有效期，最长为32小时。访问者首次输入密码且成功访问数据看板后，在设置的有效期时间内，可任意访问该看板而无需输入密码。
  4. 去选中**验证有效期**，每次访问都需要输入密码。

**重要**  
如果您的数据看板URL中需要使用GET的方式传递参数，为了安全性，建议您使用DataV提供的Token参数签名校验，详情请参见[分享看板的Token访问方式](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/use-signature-authentication-to-verify-token-parameters-of-a-published-datav-project)。
* IP白名单：设置启用IP白名单后，发布后的可视化应用仅允许在设置范围内的白名单IP下访问。

  1. 在**发布**对话框中，打开**IP白名单**。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9875387761/p576985.png)
  2. 在下方**IP白名单**输入框中，输入您的IP，并用英文逗号分隔不同的白名单。
  3. IP白名单设置成功后，当您再次访问可视化应用的分享链接时，如果您使用了非白名单IP访问当前可视化应用，可视化应用页面访问将被拒绝。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9875387761/p576991.png)

### **分享信息**

DataV数据看板在钉钉客户端内分享发布链接时提供了可自定义修改分享信息内容的功能，详细参数配置介绍如下。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9875387761/p576996.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9875387761/p576999.png)

| **配置参数** | **说明**                                                                                       |
| ---- | ---- |
| **标题**   | 您可以自定义修改即将发布的数据看板分享链接的标题名称，默认显示为创建该看板时的标题名。                                                  |
| **描述**   | 您可以对即将发布的数据看板分享链接进行简单的内容描述。                                                                  |
| **图片**   | 您可以对即将发布的数据看板，通过自定义输入图片URL链接或拖动本地图片到右侧图片栏内，为分享链接设置一张图片。**重要** 此处支持添加静态或动态图片，但在分享链接展示中均为静态展示。 |

**重要** 

如果您分享的卡片未生效，可能是由于钉钉客户端的缓存机制，导致多次修改分享信息。建议您重启钉钉客户端，再进行链接分享。

### **加载页设置**

**重要** 

仅专业版及以上版本支持**加载页配置**功能。

DataV数据看板在分享发布链接时提供了可自定义设置加载页内容的功能，详细参数配置介绍如下。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9875387761/p577002.png)

| **配置参数** | **说明**                                                                                                       |
| ---- | ---- |
| **背景**   | 您可以自定义修改即将发布的数据看板加载页的背景颜色，支持纯色及渐变色。                                                                          |
| **Logo** | 您可以对即将发布的数据看板加载页的Logo图片，通过自定义输入图片URL链接或拖动本地图片到右侧图片栏内，为Logo设置一张图片。**重要** 此处支持添加静态或动态图片，如果设置的是动态图片，在加载页面会动态展示。 |

## **快照管理**

1. 在**画布编辑器**右上角，单击**快照**，直接进入**快照管理**面板。单击空白处可退出。

**说明**  
  * **个人版**最多可创建**1**个快照，**企业版**最多可创建**3**个快照，**专业版及专业版以上**可以创建**10**个快照。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/7459649761/p607696.png)
2. 您可以根据需要，做以下操作。

  * **新增快照**  
  单击**新增快照**，系统会自动截取当前画布内容作为最新快照保存。您也可以在画布编辑器页面直接单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1917750761/p518033.png)图标，新增快照。
  * **删除快照**  
  单击任一快照右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1917750761/p518009.png)图标，可以删除快照。也可以单击**快照管理**面板左下角的**全选**，批量删除快照。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1917750761/p518013.png)

**说明**  
  已发布的快照无法删除，若想删除，请单击![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1917750761/p518012.png)图标，关闭发布。
  * **锁定/解锁快照**  
  单击任一快照右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1917750761/p518017.png)图标和![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1917750761/p518020.png)图标，可以锁定和解锁快照。快照锁定后，无法编辑和选中。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1917750761/p518015.png)
  * **预览快照**  
  单击任一快照右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1917750761/p518028.png)图标，可以快速预览快照。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1917750761/p518027.png)
  * **发布/关闭快照**  
  单击任一快照右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1917750761/p518022.png)图标和![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1917750761/p518023.png)图标，可以发布快照和关闭发布快照。  
  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1917750761/p518021.png)
  * 回滚快照  
  单击任一快照右侧的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1917750761/p518030.png)图标，可以回滚快照。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1917750761/p518029.png)

**说明**  
    * 若待回滚的快照和当前画布内容一致，则刷新画布。
    * 若待回滚的快照和当前画布不一致，则将画布回滚到快照位置，回滚后原画布内容将无法追溯，如需留存请先保存为快照。
  * 填写注释  
  单击任一快照下方的![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1917750761/p518032.png)图标，可以为当前快照填写注释内容。填写完成后，单击**回车键**即可。