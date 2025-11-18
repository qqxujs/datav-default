  折线图系列配置FAQ-DataV数据可视化-阿里云

本文为用户提供当配置折线类组件时遇到的常见问题解答。

## 如何配置多个系列？

-   当数据里有s字段时，不同的s字段值为不同的系列（多条折线）。![多系列s字段样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/3265684261/p9580.png)
    
    **说明** 配置项中的样式渲染默认按照数据的顺序。即如果第一个出场的数据是系列2，则该系列的数据将以配置项中的第一个系列样式来渲染。如果系列期望特定的排序，建议使用过滤器提前将数据排序以达到预期的渲染效果。
    
    -   可使用数据系列配置项设置多个系列的不同样式属性。![配置系列属性](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4265684261/p9581.png)![系列二面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4265684261/p9582.png)
    -   当数据系列数量多于配置项中的系列数量时，则将配置项中的系列循环渲染数据。
        
        下图中系列3使用了系列1的配置样式。![系列3面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4265684261/p9583.png)
        
        下图中系列2为第一个数据，所以按配置项中第一个系列的样式渲染。![系列2渲染面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4265684261/p9584.png)
        
-   当数据里没有s字段时，默认所有数据均为一个系列，即数据系列配置项只需配置一个系列的样式属性（有多个系列配置项时第一个生效）。![当没有s字段面板](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4265684261/p9585.png)![当没有S字段配置](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4265684261/p9586.png)

## 系列名和数据中的s字段有什么关系？

配置项**数据系列**配置的是一个系列的样式，**系列名**决定了图例的显示文字。用户可以自定义**系列名**，当**系列名**为空时，系统会查找数据中对应的s字段的值，如果s存在，则使用s字段的值，否则使用空值。![系列名与数据s字段关系1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4265684261/p9587.png)![系列名与数据s字段关系2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9148068951/p9588.png)![系列名与数据s字段关系3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9148068951/p9589.png)