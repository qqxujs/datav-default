<!DOCTYPE html> 

分享数据看板时，可使用Token方式进行访问验证，该方式通过认证和授权机制，保证了数据看板分享过程的安全、高效和灵活。采用Token后，DataV-Board支持使用“携带自定义签名参数”或“不携带自定义签名参数”方式访问数据看板。“携带自定义签名参数”方式可对看板交互时传递的参数进行签名鉴权，保证看板的URL访问链接不被篡改，从而提高看板数据及用户信息的安全性。

## 使用流程

1. **生成Token**：在数据看板开发完成后，使用Token验证的方式发布数据看板，具体请参见[发布数据看板](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/publish-and-snapshot-management#47b5aa3064p7x)。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3390807271/p851124.png)
2. **请求签名：**参见[携带自定义签名参数的URL计算](#section-sma-f4e-4vb)或者[不携带自定义签名参数的URL计算](#a71887dc69iy6)，计算数据看板的URL。

  1. 将screenID与当前时间（毫秒）拼接起来，并用    |（竖线）分隔开。
  2. （可选）确定需要签名计算的自定义参数名，必须符合参数规则。
  3. 使用Token通过HMAC-SHA256 base64，对上两步得到的Token验证码进行加密，获得加密后签名。
  4. 将时间和加密后的签名分别命名为`_datav_time`、`_datav_signature`。
  5. 将它们依次放入`URL`的querystring中。
3. **发送请求：**使用上一步中计算得到的URL访问数据看板。
4. **验证签名：**在访问过程中，系统会自动进行参数签名校验。校验成功后，即可访问到分享的数据看板。

**说明**  
对于携带自定义签名参数的数据看板，如果当您修改了签名参数，再次访问此URL时，访问会被拒绝。

## 携带自定义签名参数的访问

## 前提条件

在使用Token自定义参数签名校验前，请确保： 

* 数据看板使用Token验证的方式进行发布，具体请参见[发布数据看板](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/publish-and-snapshot-management#47b5aa3064p7x)。
* 数据看板以GET方式在URL中传递参数（直接在URL后面加参数）。
* 数据看板URL中传递的参数要求不能被篡改。

## 使用场景

某用户的系统嵌入了DataV数据看板，URL通过Token计算，通过GET方式传递用户的工号给数据看板展示相对应的数据，可以使用`https://datav.aliyuncs.com/share/page/xxx?_datav_time=1556022195845&_datav_signature=%2B******%3D&workid=123`来访问数据看板。

其中`workid`（工号）为数据看板传递的参数，存在被篡改的可能。比如工号为123的员工将URL改成`https://datav.aliyuncs.com/share/page/xxx?_datav_time=1556022195845&_datav_signature=%2B******%3D&workid=124`，就可以看到工号为124的员工的资料。因此需要对用户传递的参数进行签名鉴权，保证计算得到的URL的参数不能被更改，如果私自更改了传参，页面将无法访问。

## 参数规则

需要加入签名的参数，其参数名需以`datav_sign_`开头，后面可以带任何有效的参数名字符。由此可得此参数名的正则表达式为`/^datav_sign_.*/`。

**说明** 

不符合签名参数规则的参数，将不会进行参数签名校验，允许修改参数值。签名参数按升序排序。

## 携带自定义签名参数的URL计算

Node.js代码示例如下。 

```
const crypto = require('crypto');
const querystring = require('querystring');
const signedQueryParamReg = /^datav_sign_.*/;  // 符合此正则表达式的参数是需要签名的。

const token = "93TWnmeBtxxxxxxxxxx3thGyAgzennsS";
const screenID ="b92xxxxxxxxxxxxxxxxxx27b4c538cd4";
const time = Date.now();

const customeParams = {
  datav_sign_no: 123998,  // 此参数符合命名规则，将参与参数校验
  name: 123               // 此参数不符合命名规则，将不参与参数校验
};
let signParamsStr = Object.keys(customeParams)
  .filter(paramName => customeParams[paramName] && signedQueryParamReg.test(paramName))
  .sort()
  .map(param => `${param}=${customeParams[param]}`)
  .join('&');
let stringToSign = [screenID, time];
signParamsStr && stringToSign.push(signParamsStr);
stringToSign = stringToSign.join('|');
let signature = crypto.createHmac('sha256', token).update(stringToSign).digest().toString('base64');
let queryParams = {
  _datav_time: time,
  _datav_signature: signature
};

Object.keys(customeParams).forEach(paramName => {
  queryParams[paramName] = customeParams[paramName];
});

let url = `https://datav.aliyuncs.com/share/page/${screenID}?${querystring.stringify(queryParams)}`;
console.log(url);
```

使用以上代码示例得到的URL为：`https://datav.aliyuncs.com/share/page/b92db8e09358c82efca0727b4c538cd4?_datav_time=1556023246894&_datav_signature=GG******%3D&datav_sign_no=123998&name=123`。在URL的有效期内，如果修改了`datav_sign_no`字段的值，链接将无法访问；如果修改了`name`字段的值，链接仍然可以访问，因为`datav_sign_no`符合[参数规则](#section-4no-zvu-wcq)，参与了签名计算，而`name`不符合签名参数规则，不会进行签名计算。

## 不携带自定义签名参数的访问

## 不携带自定义签名参数的URL计算

如果您希望不带自定义签名参数方式，获取URL。请参考以下代码。

Node.js

```
const crypto = require('crypto');
var token = "Ev97wOUSAtJusc3Vsd9O2ngr_vfV****";
var screenID ="14c5448c00ecde02b065c231d165****";
var time = Date.now();
var stringToSign = screenID +'|'+ time;
var signature = crypto.createHmac('sha256', token).update(stringToSign).digest().toString('base64');
var url="http://datav.aliyuncs.com/share/page/"+ screenID +"?_datav_time="+time+"&_datav_signature="+ encodeURIComponent(signature);
```

Java

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
        String url = "http://datav.aliyuncs.com/share/page/"+ screenID +"?_datav_time="+time+"&_datav_signature="+ signature;
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

PHP

```
<?php
  $token = "kBwoX9rFX9v4zbOT0Gjd_wr65DZ****";
  $screenID = "03d1b68faeb09671046d1ef43f58****";
  $time = time()*1000;
  $stringToSign = $screenID.'|'.$time;
  $signature = urlencode(base64_encode(hash_hmac('sha256', $stringToSign, $token, true)));
  $url = "http://datav.aliyuncs.com/share/page/".$screenID."?_datav_time=".$time."&_datav_signature=".$signature;
?>
<iframe width=100% height=100% src="<?=$url?>"/>
```