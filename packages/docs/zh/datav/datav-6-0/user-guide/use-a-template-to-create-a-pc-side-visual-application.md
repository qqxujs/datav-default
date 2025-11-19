<!DOCTYPE html> 

DataV支持通过模板创建PC端和移动端可视化应用。本文将详细介绍如何创建、预览和发布这些可视化应用。

## 配额限制

不同版本的可视化应用创建配额如下：

* **企业版**：最多可创建20个可视化应用。
* **专业版**：最多可创建40个可视化应用。
* **尊享版**：最多可创建1000个可视化应用。

## **进入可视化应用管理**

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 登录控制台后，系统默认显示**我的可视化**页面。

## **模板创建可视化应用**

系统支持通过模板创建适用于PC端和移动端的可视化应用。

1. 在**我的可视化**页面内，单击页面上方的**PC端创建**/**移动端创建**。  
在**我的可视化**页面的**全部应用**下方区域，可以查看所有已创建的可视化应用，并了解剩余可创建的应用数量。
2. 在模板列表中，选择一个模板或空白画板，单击**创建项目**。
3. 在**创建数据大屏**对话框中，输入**数据大屏名称**，单击**创建**。  
创建成功后，系统会跳转到可视化应用编辑器页面。  

**说明**  
您也可以在**创建数据大屏**对话框中选择**大屏分组**，前提是已经[创建分组](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/group-function-and-move-function/#e0e555ac04gch)。
4. 可选，返回**我的可视化**页面，查看创建成功的可视化应用。

## **预览可视化应用**

预览可视化应用的作用是让用户在正式发布前查看和测试应用的实际效果，帮助进行全面检查和调整，确保发布时达到最佳状态。

### **PC端预览**

1. 在**我的可视化**页面中，选择一个PC端可视化应用，单击右上角的**预览**图标![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8251587861/p686753.png)。  

  * 可视化应用已发布。

    * 如果在发布时设置了访问限制，例如开启了密码访问或Token验证，请联系数据可视化大屏管理员获取密钥以进行预览。
    * 如果在发布时未设置访问限制，可直接预览。
  * 可视化应用未发布，可直接预览。
2. 可选，预览成功且PC端可视化应用符合预期后，可将PC端可视化应用发布到线上环境供其他人员在线观看。

### **移动端预览**

1. 在**我的可视化**页面中，选择一个移动端可视化应用，单击右上角的**预览**图标。
2. 在移动端预览界面，可通过左侧样式页切换不同机型的尺寸效果。预览页布局采用等比自适应的方式，机型渲染效果仅供预览查看。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5064982471/p927338.png)
3. 您还可以使用手机扫描预览界面右上方的二维码，预览移动端可视化应用的实际效果。

  * 可视化应用已发布

    * 如果在发布时设置了访问限制，例如开启了密码访问或Token验证，请联系大屏管理员获取密钥预览。
    * 如果在发布时未设置访问限制，可直接预览。
  * 可视化应用未发布，可直接预览。
4. 在预览界面下方有针对当前预览页面的统计数据，包括可查看到的整个可视化应用的页面高度、在手机页面展示时的页数和加载当前预览页所需的估算时间。您可以单击**刷新页面**按钮，刷新当前预览界面。
5. 可选，预览成功且移动端可视化应用符合预期后，可将移动端可视化应用发布到线上环境供其他人员在线观看。

## **发布和分享可视化应用**

下文详细介绍了发布可视化应用的完整流程，涵盖发布应用、发布快照、快照管理、访问限制、分享信息和加载页设置等内容。通过这些功能，用户可以有效地发布和管理可视化应用，确保其安全性和可访问性。

### **发布应用**

1. 在**我的可视化**页面中，鼠标移动到任一可视化应用区域，单击**编辑**。
2. 在画布编辑器中，单击页面右上角的**发布**图标![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3161587861/p686754.png)。
3. 在**发布**对话框中，单击**发布大屏**。

**说明**  
如果是首次发布可视化应用，系统会弹出**发布成功**的对话框，在对话框中您可以单击**前往快照管理**查看快照，如果无需查看请单击**取消**进入发布页面。当首次发布可视化应用时出现发布失败的情况，您可以将当前页面的DataV网址从HTTP协议切换成HTTPS协议网址后再重新选择发布。
4. 发布成功后，系统会开启**已发布**开关，并生成分享链接和二维码。单击**二维码**即可显示当前可视化应用的二维码，扫描后可在线访问；单击**分享链接**右侧的![{F726A4C0-FA5C-4530-ACFA-1ED70E91BA9A}](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5064982471/p927351.png)（**复制**）图标，将链接粘贴到浏览器地址栏中，即可在线访问PC端可视化应用。

**说明**  
发布可视化应用后，若需更换分享链接，请单击左侧的![重新生成链接](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5992634951/p93475.png)（**重新生成链接**）图标，重新生成一个**分享链接**。重新生成后，旧链接将失效，请使用新链接访问您的可视化应用。
5. 可选，可视化应用分享成功后，您可以配置[发布快照](#e6341e3476c9a)的参数内容，还可以进行[访问限制](#9ce753e1a59pj)、[分享信息](#441857b31eiuk)和[加载页设置](#5e49d5d1dd5lz)的配置。

### **发布快照**

设置分享链接后，可以配置**发布快照**，指定访问者看到的可视化应用版本（默认为快照发布版本）。屏幕的内容会锁定在快照创建的那一刻。 

**说明** 

存档之后，屏幕内容的编辑和修改不会同步到历史快照中，可作为稳定预览版本的备份。

具体操作方式如下。

1. 在**发布**对话框中，在**发布快照**列表中，选择一个已存档的历史快照即可完成该历史快照的发布。

  * 如果当前可视化应用没有历史快照，系统会将当前编辑器的内容作为第一个快照进行发布。
  * 如果当前可视化应用有历史快照，系统会自动发布最新一条快照。
2. 单击下方**覆盖已发布快照**，把已发布快照内的可视化应用的内容变成当前编辑页下的内容。
3. 单击下方**自动新增快照并发布**，自动新增并选中快照后立即发布。
4. 单击下方**管理快照**，可在管理快照界面管理多个历史快照。

### **快照管理**

单击**发布**对话框内的**管理快照**，或者您也可以单击可视化应用编辑器右上角**生成快照**右侧的**管理快照**图标，然后在**快照管理**对话框内可以进行如下快照管理操作。 

**说明** 

当在管理快照界面内，单击新增快照或修改快照，显示新增或修改快照失败时，您可以将当前页面的DataV网址从HTTP协议切换成HTTPS协议网址后再重新操作。

* **查看额度**：在**快照管理**对话框右上角可以查看管理快照界面内剩余可创建快照的额度。一旦快照数量达到上限后无法新增快照，需要删除不需要的快照。  

**说明**  
不同版本快照额度的数量不同。

  * **企业版**：最多可创建3个快照。
  * **专业版**：最多可创建10个。
  * **尊享版**：最多可创建10个快照。
* **新增快照**：在**快照管理**对话框中单击**新增快照**即可新增一个历史快照。
* **覆盖已发布快照**：单击**覆盖已发布快照**，编辑器的内容覆盖发布页快照原有的内容，即更新发布页内容，并且实时生效。更新内容包括画布编辑器配置、数据源配置、蓝图编辑器配置。
* **发布或关闭快照**：选中管理栏内某个历史快照，单击右侧![发布快照](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5992634951/p80867.png)图标可快捷发布可视化应用或切换发布的快照，切换后，发布页内容将切换成对应快照的内容，再次单击图标即可关闭快照。
* **锁定快照**：单击某个历史快照右侧的![锁定快照](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5992634951/p80869.png)图标即可锁定快照，快照锁定后，不可删除和覆盖。
* **批量删除**：在管理界面内多选或全选快照后，单击下方**批量删除**图标可进行快照批量删除。批量删除功能无法删除已发布和被锁定的快照。

**重要**  
  * 已发布的快照无法被删除。
  * 目前仅支持切换快照，不具备回滚的功能，删除快照后无法恢复，请谨慎操作。
* **注释快照**：可单击![编辑注释](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5992634951/p96282.png)图标，自定义添加快照的注释内容。

### **访问限制**

**说明** 

仅企业版及以上版本支持**访问限制**功能。

DataV的发布功能提供了四种分享可视化应用的方式：

* 公开分享（默认）。
* 密码访问分享。
* 通过Token验证分享。
* IP白名单访问分享。

## **密码访问**

1. 在**发布**对话框中，打开**访问密码**。
2. 在**访问密码**输入框中，输入您的验证密码。  
密码长度为6位及以上，且必须具备以下三个条件：  

  * 至少包含一个英文大写字母A～Z。
  * 至少包含一个英文小写字母a～z。
  * 至少包含一个数字0～9。  
密码设置成功后，系统会提示**已设置访问限制**。
3. **可选：**配置**验证有效期**。

**重要**  
只有密码设置成功或开启Token验证后，才可配置**验证有效期**。

  * 选中**验证有效期**，可以设置密码的有效期，最长为32小时。访问者首次输入密码且成功访问可视化应用后，在设置的有效期时间内，可任意访问该可视化应用而无需输入密码。
  * 取消勾选**验证有效期**，每次访问都需要输入密码。  
密码设置成功后，访问分享链接时需输入密码才能进入。

## 通过Token验证

您可以通过Token验证的方式，将可视化应用的访问权限与您的权限体系进行集成。

在**发布**对话框中，打开**通过Token验证**开关，即可开启Token验证。Token验证开启后，您可进行如下操作： 

* 获取Token验证码。  
打开**通过Token验证**开关后，DataV会生成一个Token，您需要记录这个Token，以备后用。
* （可选）配置**验证有效期**。  

  * 选中**验证有效期**，可自定义调整Token验证的有效期，最长设置为32小时。访问者首次进行Token验证并成功访问可视化应用后，在设置的有效期时间内，可任意访问该可视化应用而无需再次进行验证。
  * 去选中**验证有效期**，每次访问都需要通过验证。

Token验证开启后，再次打开可视化应用的分享页面，会收到一个**Access Denied**消息，表示您的访问被拒绝了。如果想要打开您的页面，需要完成以下步骤。 

**重要** 

为了防止重放攻击，请确保您的服务器时间为东8区标准时间。DataV只会提供1分钟的误差，如果时间误差超过1分钟将会验证失败。

1. 发布可视化应用，记录可视化应用编码（URL的最后一段）。
2. 将编码与当前时间（毫秒）连起来，并用 |（竖线）分隔开。
3. 使用Token通过HMAC-SHA256 base64，对上一步得到的Token验证码进行加密。
4. 将时间和加密后的签名分别命名为`_datav_time`、`_datav_signature`。
5. 将它们依次放入`URL`的querystring中。

**重要**  
如果您的可视化应用URL中需要使用GET的方式传递参数，为了安全性，建议您使用DataV提供的Token参数签名校验，详情请参见[DataV分享页Token参数签名校验](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/check-the-validity-of-digitally-signed-parameters-in-a-token#concept-354588)。  
示例代码如下：  

  * PHP：  
  ```  
  <?php  
    $token = "kBwoX9rFX9v4zbOT0Gjd_wr65DZ****";  
    $screenID = "03d1b68faeb09671046d1ef43f58****";  
    $time = time()*1000;  
    $stringToSign = $screenID.'|'.$time;  
    $signature = urlencode(base64_encode(hash_hmac('sha256', $stringToSign, $token, true)));  
    $url = "http://datav.aliyuncs.com/share/".$screenID."?_datav_time=".$time."&_datav_signature=".$signature;  
  ?>  
  <iframe width=100% height=100% src="<?=$url?>"/>  
  ```
  * Node.js：  
  ```  
  const crypto = require('crypto');  
  var token = "Ev97wOUSAtJusc3Vsd9O2ngr_vfV****";  
  var screenID ="14c5448c00ecde02b065c231d165****";  
  var time = Date.now();  
  var stringToSign = screenID +'|'+ time;  
  var signature = crypto.createHmac('sha256', token).update(stringToSign).digest().toString('base64');  
  var url="http://datav.aliyuncs.com/share/"+ screenID +"?_datav_time="+time+"&_datav_signature="+ encodeURIComponent(signature);  
  ```
  * Java：  
  ```  
  package com.company;  
  import java.security.*;  
  import java.util.Date;  
  import javax.crypto.*;  
  import javax.crypto.spec.SecretKeySpec;  
  import org.apache.commons.codec.binary.Base64;  
  import java.net.URLEncoder;  
  public class TokenTest {  
      public static String getSignedUrl(String screenID, String token){  
          Date date = new Date();  
          Long time = date.getTime();  
          String stringToSign = screenID + "|" + time;  
          String signature = HMACSHA256(stringToSign.getBytes(), token.getBytes());  
          String url = "http://datav.aliyuncs.com/share/"+ screenID +"?_datav_time="+time+"&_datav_signature="+ signature;  
          return url;  
      }  
      /**
     *  使用java原生的摘要实现SHA256加密。
     * @param str加密后的报文。
     * @return
     */  
      public static String HMACSHA256(byte[] data, byte[] key)  
      {  
          try  {  
              SecretKeySpec signingKey = new SecretKeySpec(key, "HmacSHA256");  
              Mac mac = Mac.getInstance("HmacSHA256");  
              mac.init(signingKey);  
              return URLEncoder.encode(byte2Base64(mac.doFinal(data)));  
          } catch (NoSuchAlgorithmException e) {  
              e.printStackTrace();  
          } catch (InvalidKeyException e) {  
              e.printStackTrace();  
          }  
          return null;  
      }  
      private static String byte2Base64(byte[] bytes){  
          return Base64.encodeBase64String(bytes);  
      }  
      public static void main(String[] args) throws Exception {  
          System.out.println(getSignedUrl("screenId", "token"));  
      }  
  }  
  ```
  * C#：  
  ```  
  using System;  
  using System.Security.Cryptography;  
  using System.Text.RegularExpressions;  
  using System.Collections.Generic;  
  using System.Linq;  
  using System.Web;  
  using System.Text;  
  namespace datavToken  
  {  
      class Program  
      {  
          static void Main(string[] args)  
          {  
              var dic = new Dictionary<string, string>();  // 自定义参数。  
              dic.Add("datav_sign_no", "123998");         // datav_sign_开头，需要签名。  
              dic.Add("datav_sign_lo", "kk");  
              dic.Add("datav_sign_ao", "xx");  
              dic.Add("name", "123");   // 不需要签名。  
              // 分享页前缀，屏幕分享id、token，自定义参数字典。  
              Console.WriteLine(GenerateUrl("https://datav.aliyun.com/share/", "ca74bea5e45503070d607795e0****", "66DsL2qjrXRHluSJScv_flOUhn****", dic));  
          }  
          private static string GenerateUrl(string datavBase, string screenId, string token, Dictionary<string, string> customeParams)  
          {  
              string pattern = @"^datav_sign_.*";  
              string timestamp = GetTimeStamp();  
              // 参数排序。  
              Dictionary<string, string>.KeyCollection keyCol = customeParams.Keys;  
              List<string> signKeys = new List<string>();  
              foreach (var item in keyCol.ToList())  
              {  
                  if (Regex.IsMatch(item, pattern))  
                  {  
                      signKeys.Add(item);  
                  }  
              }  
              // 按照key排序。  
              signKeys = signKeys.OrderBy(k => k).ToList();  
              string paramsSignStr = signKeys.Aggregate("", (total, key) =>  
              {  
                  if (total != "")  
                  {  
                      total += "&";  
                  }  
                  total += key + "=" + customeParams[key];  
                  return total;  
              });  
              //不存在参数认证  
              string signStr = screenId + "|" + timestamp;  
              //存在参数认证  
              //string signStr = screenId + "|" + timestamp + "|" + paramsSignStr;  
                  
              var encoding = new System.Text.ASCIIEncoding();  
              byte[] keyByte = encoding.GetBytes(token);  
              byte[] messageBytes = encoding.GetBytes(signStr);  
              string signature;  
              using (var hmacsha256 = new HMACSHA256(keyByte))  
              {  
                  byte[] hashmessage = hmacsha256.ComputeHash(messageBytes);  
                  signature = Convert.ToBase64String(hashmessage);  
              }  
              var paramDic = new Dictionary<string, string>();  
              paramDic.Add("_datav_time", timestamp);  
              paramDic.Add("_datav_signature", signature);  
              foreach (var item in customeParams)  
              {  
                  paramDic.Add(item.Key, item.Value);  
              }  
              return datavBase + screenId + "?" + ParseToString(paramDic);  
          }  
          public static string GetTimeStamp()  
          {  
              TimeSpan ts = DateTime.UtcNow - new DateTime(1970, 1, 1, 0, 0, 0, 0);  
              return Convert.ToInt64(ts.TotalMilliseconds).ToString();  
          }  
          static public string ParseToString(IDictionary<string, string> parameters)  
          {  
              IDictionary<string, string> sortedParams = new SortedDictionary<string, string>(parameters);  
              IEnumerator<KeyValuePair<string, string>> dem = sortedParams.GetEnumerator();  
              StringBuilder query = new StringBuilder("");  
              while (dem.MoveNext())  
              {  
                  string key = dem.Current.Key;  
                  string value = dem.Current.Value;  
                  if (!string.IsNullOrEmpty(key) && !string.IsNullOrEmpty(value))  
                  {  
                      query.Append(key).Append("=").Append(HttpUtility.UrlEncode(value)).Append("&");  
                  }  
              }  
              string content = query.ToString().Substring(0, query.Length - 1);  
              return content;  
          }  
      }  
  }  
  ```

## IP白名单访问

设置启用IP白名单后，发布后的可视化应用仅允许在设置范围内的白名单IP下访问。

1. 在**发布**对话框中，打开IP白名单。
2. 在下方**IP白名单**输入框中，输入您的IP，并用“,”号分隔不同的白名单。  
IP白名单设置成功后，当您再次访问可视化应用的分享链接时，如果您使用了非白名单IP访问当前可视化应用，可视化应用页面访问将被拒绝。

### **分享信息**

DataV可视化应用在钉钉客户端内分享发布链接时提供了可自定义修改分享信息内容的功能，详细参数配置介绍如下。 

| **配置参数** | **说明**                                                                                        |
| -------- | --------------------------------------------------------------------------------------------- |
| **标题**   | 您可以自定义修改即将发布的可视化应用分享链接的标题名称，默认显示为创建该可视化应用时的标题名。                                               |
| **描述**   | 您可以对即将发布的可视化应用分享链接进行简单的内容描述。                                                                  |
| **图片**   | 您可以对即将发布的可视化应用，通过自定义输入图片URL链接或拖动本地图片到右侧图片栏内，为分享链接设置一张图片。**说明** 此处支持添加静态或动态图片，但在分享链接展示中均为静态展示。 |

钉钉客户端分享链接样例展示![分享链接样例展示](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4466510061/p164697.png)

**说明** 

如果您分享的卡片未生效，可能是由于钉钉客户端的缓存机制，导致多次修改分享信息。建议您重启钉钉客户端，再进行链接分享。

### **加载页设置**

DataV可视化应用在分享发布链接时提供了可自定义设置加载页内容的功能，详细参数配置介绍如下。 

**说明** 

仅专业版及以上版本支持**加载页配置**功能。

| **配置参数** | **说明**                                                                                                        |
| -------- | ------------------------------------------------------------------------------------------------------------- |
| **背景**   | 您可以自定义修改即将发布的可视化应用加载页的背景颜色，支持纯色及渐变色。                                                                          |
| **Logo** | 您可以对即将发布的可视化应用加载页的Logo图片，通过自定义输入图片URL链接或拖动本地图片到右侧图片栏内，为Logo设置一张图片。**说明** 此处支持添加静态或动态图片，如果设置的是动态图片，在加载页面会动态展示。 |

## **相关文档**

创建可视化应用后，您可以进行[功能管理](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/group-function-and-move-function/#e0e555ac04gch)，以优化和维护应用。