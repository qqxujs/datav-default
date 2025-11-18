  使用Token参数签名校验防止DataV分享页URL参数被篡改-DataV数据可视化-阿里云

本文介绍在发布DataV数据可视化大屏如何使用**Token参数签名校验**。通过Token参数签名校验功能，您可以对大屏交互时传递的参数进行签名鉴权，保证大屏的URL访问链接的参数不能被篡改，从而提高大屏数据以及用户信息的安全性。

## 前提条件

在使用**Token参数签名校验**前，请确保：

-   数据可视化大屏使用Token验证的方式进行发布，具体请参见[发布PC端可视化应用](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/publish-a-project#section-wfx-iph-pfi)。
    
-   数据可视化大屏以Get的方式在URL中传递参数（直接在URL后面加参数）。
    
-   数据可视化大屏URL中传递的参数要求不能被篡改。
    

## 使用场景

下文以一个示例说明**Token参数签名校验**的使用背景。

某用户的系统嵌入了DataV数据可视化大屏，URL通过Token计算，通过Get方式传递用户的工号给数据可视化大屏展示相对应的数据，可以使用`https://datav.aliyuncs.com/share/xxx?_datav_time=1556022195845&_datav_signature=%2BDZFj3QDIla%2F00fBZLdJMgk2Z1Ocs9MLL1******%3D&workid=123`来访问数据可视化大屏。

其中`workid`（工号）为数据可视化大屏传递的参数，存在被篡改的可能。比如工号为123的员工将URL改成`https://datav.aliyuncs.com/share/xxx?_datav_time=1556022195845&_datav_signature=%2BDZFj3QDIla%2F00fBZLdJMgk2Z1Ocs9MLL1******%3D&workid=124`，就可以看到工号为124的员工的资料。因此需要对用户传递的参数进行签名鉴权，保证计算得到的URL的参数不能被更改，如果私自更改了传参，页面将无法访问。

## 参数规则

需要加入签名的参数，其参数名需以`datav_sign_`开头，后面可以带任何有效的参数名字符。由此可得此参数名的正则表达式为`/^datav_sign_.*/`。

**说明**

不符合签名参数规则的参数，将不会进行参数签名校验，允许修改参数值。签名参数按升序排序。

## 带签名参数的URL计算

Node.js代码示例如下。

```
const crypto = require('crypto');
const querystring = require('querystring');
const signedQueryParamReg = /^datav_sign_.*/;  // 符合此正则表达式的参数是需要签名的。

const token = "93TWnmeBtxxxxxxxxxx3thGyAgzennsS";
const screenID ="b92xxxxxxxxxxxxxxxxxx27b4c538cd4";
const time = Date.now();

const customeParams = {
  datav_sign_no: 123998,
  name: 123
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

let url = `https://datav.aliyuncs.com/share/${screenID}?${querystring.stringify(queryParams)}`;
console.log(url);
```

使用以上代码示例得到的URL为：`https://datav.aliyuncs.com/share/b92db8e09358c82efca0727b4c538cd4?_datav_time=1556023246894&_datav_signature=GGSbvxlemUeBoRVco8JgrJVWRcmao7NuRYt2O******%3D&datav_sign_no=123998&name=123`。在URL的有效期内，如果修改了`datav_sign_no`字段的值，链接将无法访问；如果修改了`name`字段的值，链接仍然可以访问，因为`datav_sign_no`符合[参数规则](#section-4no-zvu-wcq)，参与了签名计算，而`name`不符合签名参数规则，不会进行签名计算。

## 使用流程

1.  确定需要签名计算的参数名（即不允许被篡改的参数）。
    
2.  在数据可视化大屏开发完成后，使用Token验证的方式发布数据可视化大屏，具体请参见[发布PC端可视化应用](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/publish-a-project#section-wfx-iph-pfi)。
    
3.  参见[带签名参数的URL计算](#section-sma-f4e-4vb)，计算数据可视化大屏的URL。
    
4.  使用上一步中计算得到的URL访问数据可视化大屏，在访问过程中，系统会自动进行参数签名校验。
    
    如果参数签名校验功能正常，当您修改了签名参数，再次访问此URL时，访问会被拒绝。