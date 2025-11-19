# 使用DataV调用DataWorks数据服务API展示数据 %{#106824}% 

本文为您介绍当需要通过DataV展示海量数据的分析结果时，如何使用DataWorks的数据服务开发数据API，并快速在DataV中调用API，最终将来自MaxCompute的数据成果展示在DataV大屏中，数据开发到数据服务再到数据分析展现一气呵成。

## **效果展示**

![7d88658c0194faaaefc1ad24c7fa384a](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2928733371/p883343.png)

**重要** 

本案例仅提供具体的操作指导，业务场景和数据与实际情况会有一定偏差。

DataWorks数据服务与DataV进行无缝打通后，就不再需要使用DataV中的**API数据源**去填写一个URL调用API，而是直接新建一个DataWorks数据服务作为数据源，就可以选用数据服务中的API。无需每个API都设置AppKey和AppSecret认证信息，并且支持通过表单填写API参数，使用起来十分方便可靠。

本案例以在DataV中展示成交金额增长速度为例，为您介绍在DataV中配置DataWorks数据服务API的方法，整体步骤如下。 

1. [准备工作](/zh/datav/datav-6-0/use-cases/preparations-for-calling-dataworks-api-to-display-data#concept-q3d-5l2-qgb)。
2. [使用DataWorks的数据服务功能生成数据API](/zh/datav/datav-6-0/use-cases/use-dataworks-dataservice-studio-to-generate-apis#task-qdq-1lf-qgb)。
3. [在DataV中调用数据服务API](/zh/datav/datav-6-0/use-cases/use-an-application-to-display-returned-data#task-sdl-nfg-qgb)。

## 参考文档

* [一分钟零代码生成API，DataWorks数据服务上手指南](https://yq.aliyun.com/articles/662126)。
* [DataWorks数据服务帮助文档](/zh/dataworks/user-guide/data-services-overview/)。
* [MaxCompute Lightning帮助文档](/zh/maxcompute/overview-17)。
* [DataV帮助文档](https://help.aliyun.com/product/43570.html)。