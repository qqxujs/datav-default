<!DOCTYPE html> 

尊敬的DataV-Board用户：

为更好地支持数据看板分享功能，DataV-Board计划于**2024年11月20日**起将[发布分享页](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/publish-and-snapshot-management)的域名由**datav.aliyuncs.com**变更为**b.datav.run**。

## **域名变更操作范围**

2024年11月20日之后，执行如下操作，生成的域名将发生变更：

* 首次发布数据看板，生成**分享链接**。
* 对已发布的数据看板，执行“新增快照并发布、切换发布快照、发布历史快照、关闭历史快照后重新发布”等操作，该类操作均会导致数据看板的**分享链接**发生变更。快照相关操作，请参见[快照管理](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/publish-and-snapshot-management#c0fee50065jlh)。

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1385841371/p871913.png)

**说明** 
* 2024年11月20日之后，若未执行上述操作，则原已发布看板的分享链接域名将维持不变，仍为**datav.aliyuncs.com**。
* 当域名发生变化后，若您希望暂缓某个发布分享页的域名变更，则可[提交工单](https://selfservice.console.aliyun.com/ticket/createIndex?spm=5176.2020520129.console-base-top.dwork-order-1.29d546aee0gsiH)，联系技术支持人员延长原域名（**datav.aliyuncs.com**）的使用时间。

## **域名变更影响**

域名变更可能会导致如下[跨域访问](https://help.aliyun.com/zh/datav/datav-6-0/user-guide/how-to-configure-cross-domain-data#concept-k5l-ckz-q2b)场景请求失败：

* 使用[API](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-api-data-sources)、[DataV 数据代理服务](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/add-a-datav-proxy-service)作为数据源的组件，可能会因为域名变更导致跨域请求被拦截。
* 在[轮播页面](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/page-carousel)或[iframe](https://help.aliyun.com/zh/datav/datav-7-0/user-guide/iframe)组件内打开的页面，可能会因为跨域限制，导致相关页面无法在新域名**b.datav.run**下被访问。

## **测试新域名并处理相关问题**

域名变更后，您可打开新生成的分享链接，测试可视化应用是否运行正常。若该链接无法正常运行，可参考[发布分享页域名变更常见问题](https://help.aliyun.com/zh/datav/datav-7-0/support/faq-about-the-change-of-domain-names-for-application-sharing-pages)排查解决。