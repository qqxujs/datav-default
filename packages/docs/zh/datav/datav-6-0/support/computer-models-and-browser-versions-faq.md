<!DOCTYPE html> 

本文介绍由于计算机型号及浏览器版本的原因导致DataV产品使用卡顿的问题现象及解决方法。

## MacBook用户编辑器卡顿问题

### 问题现象

当您使用MacBook时，打开DataV编辑页面之后使用卡顿，CPU占用率飙升。该问题一般发生于如下场景：

* 使用MacBook当Retina屏幕打开较高分辨率后。
* 使用了最新版本的Chrome浏览器。
* 使用DataV编辑包含基础平面地图组件的可视化应用项目。

### 问题原因

在Mac平台的66.0.3359.31版本的Chrome浏览器更新时引入了一个bug[（关于此bug详细描述）](https://bugs.chromium.org/p/chromium/issues/detail?id=822417&q=canvas%20Composite%20performance&colspec=ID%20Pri%20M%20Stars%20ReleaseBlock%20Component%20Status%20Owner%20Summary%20OS%20Modified)，造成了以下问题：

* 在进行画布渲染时，CPU占用率从偶尔的3%～5%飙升至持续的100%，导致使用画布中组件的前端页面的帧率下跌至8fps以下，使用起来非常卡顿。
* 所有使用画布前端组件的Web产品都会受到影响。
* 问题会随着画布像素数量、画布叠加层数的增加而变得更加严重，导致这部分用户在标准的1920×1080分辨率下编辑DataV基础平面地图组件时非常卡顿。

### 解决方法

这个Bug已经反馈给谷歌浏览器开发团队，目前尚未给出解决的时间表。在问题修复之前，建议您使用MacBook版Chrome时，通过以下方法规避该问题以免影响日常使用。

* 使用旧版本的Chrome浏览器，建议使用Chrome 57及以上版本。
* 使用其他浏览器，如Safari浏览器。
* 临时使用Windows电脑编辑。

## Chrome升级到80及以上版本后可能产生的影响及解决方案

### 背景

谷歌在2020年2月4号发布的Chrome80版本会逐渐屏蔽第三方Cookie，即默认为所有Cookie加上`SameSite=Lax`属性（[Cookies default to SameSite=Lax](https://www.chromestatus.com/feature/5088147346030592)），并且拒绝为不安全的Cookie设置`SameSite=None`属性（[Reject insecure SameSite=None cookies](https://www.chromestatus.com/feature/5633521622188032)），这样是为了从源头屏蔽跨站请求伪造CSRF（Cross Site Request Forgery）漏洞。

### 如何提前判断升级Chrome80是否对可视化应用有影响？

1. 在Chrome中打开`chrome://flags/#same-site-by-default-cookies`，将**SameSite by default cookies**设置为**Enabled**。
2. 再打开`chrome://flags/#cookies-without-same-site-must-be-secure`，将**Cookies without SameSite must be secure**设置为**Enabled**。
3. 重启浏览器，打开正在使用的DataV可视化应用，检查所有数据是否正常返回和展示。

  1. 如果数据正常返回，则升级Chrome80版本对您的可视化应用没有影响。
  2. 如果数据没有正常返回，则升级Chrome80版本会对您的可视化应用产生影响，请谨慎升级。并根据以下场景进行排查和解决。

### 问题场景一：使用API数据源

场景描述：组件的数据源为API类型，且该API请求需要用户登录信息（cookie）才能从第三方网站获取相关的数据。

影响：组件数据无法正常返回和展示。

解决方案：确认 API使用的传输协议类型是 HTTPS还是HTTP。

* 使用HTTPS协议（Chrome95版本及以上）

检查响应头中的`Set-Cookie`配置是否包含了`SameSite=None`和`Secure`。如果没有包含，请在响应头中的`Set-Cookie`配置中添加`SameSite=None`和`Secure`。

* 使用HTTP协议（Chrome80版本）

  1. 在Chrome中打开`chrome://flags/#same-site-by-default-cookies`，将SameSite by default cookies设置为Disabled。
  2. 再打开`chrome://flags/#cookies-without-same-site-must-be-secure`，将Cookies without SameSite must be secure设置为Disabled。
  3. 重启浏览器。
* 使用HTTP协议（Chrome91\~94版本）

  * 在Chrome中打开`chrome://flags/`，在页面中搜索**same**，将**Enable removing SameSite=None cookies**设置为**Disabled**。
  * 再打开`chrome://flags/`，在页面中搜索**same**，将**Schemeful Same-Site**设置为**Disabled**。![设置属性](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9734306461/p409585.png)
  * 重启浏览器。

### 问题场景二：使用HTTP本地部署

场景描述：使用HTTP协议访问DataV服务。影响：Chrome80会拦截HTTP协议下的登录功能，导致本地部署服务无法使用。

解决方案：请选择以下任意一种解决方案。

* 执行[Chrome升级到80及以上版本后可能产生的影响及解决方案](#title-521-me9-qt4)中的第二种方案（使用HTTP协议）。
* 改造HTTP服务，购买SSL证书，将HTTP服务升级到HTTPS服务，并执行[Chrome升级到80及以上版本后可能产生的影响及解决方案](#title-521-me9-qt4)中的第一种方案（使用HTTPS协议）。
* 将Chrome版本回退到79及以下版本，并关闭版本自动更新功能。