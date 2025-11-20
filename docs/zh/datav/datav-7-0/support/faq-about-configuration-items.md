<!DOCTYPE html> 

本文介绍组件配置项的常见问题及解决方法。

## 数据系列与配置项系列有什么关系？ 

* 数据系列  
很多基础二维组件（如折线图、柱状图等）都支持多个不同系列的系列展示，您只需在配置面板的**数据**页签中配置不同的s字段即可。![配置s字段](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4169822951/p11365.png)
* 配置项系列  
支持多系列的组件（如折线图、柱状图等），在**配置**页签中，一般都会有**数据系列**的配置项。  
该配置项用于定义一组不同的样式数组，来循环渲染数据中的不同系列。如下图中配置项定义了两个系列，组件会使用`['系列1','系列2']`的样式，依次循环渲染数据中的s字段。![系列样式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8060062261/p279142.png)
* 常见误区  

  * 配置项中的**系列名**为该样式的名称，同时作为图表中图例的名称。如果设置为空则会采用目标数据系列中的s字段的值。  
  图 1\. 系列名不为空![系列不为空](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8060062261/p279144.png)  
  图 2\. 系列名为空![系列名为空](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/4227826461/p410662.png)
  * 配置项中的系列与数据中的系列不是根据名称来相互对应的，而是根据不同系列的出场顺序来设置样式。  
  例如：配置项系列为`[系列1，系列2，系列3]`，映射至数据则为 `[{s1:系列1样式}`、`{s2:系列2样式}`、`{s3:系列3样式}`、`{s4:系列1样式}`、`{s5:系列2样式}]`。  

**说明**  
  举例中的s1、s2、s3、s4、s5对应的是数据中s字段的出场顺序。
  * 如果有固定的数据系列样式需求（如s2必须要红色，s1必须要蓝色），可以在系列样式配置完成后，在过滤器或者数据源中对数据进行排序。  
  例如：配置项系列为`[红色，蓝色]`，数据的出场顺序则可以修改为`[{"s":"2"},{"s":"1"}]`。![配置项系列数据排序](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5169822951/p11412.png)

## 如何配置交互功能？

交互功能目前处于测试阶段。配置交互功能的方法请参见[图表联动](/zh/datav/datav-6-0/user-guide/how-to-use-callback-ids-to-implement-component-linkage#concept-pbb-2vk-q2b)。

## 如何通过URL传参控制显示的数据？

在SQL中的变量可以通过`:dot-id`来表示，如`select car_speed, car_color, car_name from table where car_ID = :dot-id`。

这些变量可以通过URL传递参数来控制显示的数据，如`http://datav.aliyun.com/...?spm=xxxxx&dot_id=10102`。

## 为什么回调ID改变后，组件未修改渲染？

* 在编辑页面测试组件的回调ID。  
问题原因：目前编辑页中的组件，无法获取到来自其他组件抛出的回调值。  
解决方法：在URL中传入默认值，在编辑页进行组件测试。  
例如`xxxx/admin/screen/123456?value=123&name=12345`
* 在预览或发布页面测试组件的回调ID。  
在大屏预览/发布页中，打开浏览器控制台中的network（windows系统使用快捷键**F12**，mac系统使用**option＋command＋i**），搜索`multiple`，检查回调改变后该组件是否有发起请求。

  * 如果搜索结果为空，则该组件未发起请求，请检查回调的配置情况。
  * 如果搜索结果不为空，则该组件有发起请求，则检查请求携带的参数是否是正确的回调参数，以及请求是否正常返回200（下图中的**Status**为200）。![Status为200](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/5169822951/p11369.png)  
  若请求未正常返回，则需检查该数据源的连接情况。
* 如果您使用了**数字翻牌器**组件，数据正常返回却没有改变组件渲染，则需要检查是否在组件配置项中勾选了**数据抖动修正**。  
如果勾选该配置项：当传入数据小于当前数据时则不改变组件渲染。  
若您的数据有上下浮动而且需要实时渲染当前数据时，则不应勾选此配置项。

## **如何给整个组添加点击事件？**

* **问题描述**：在DataV-Board 7.0中，如何给一个组添加点击事件，去触发执行相关指令？
* **解决方案：**可为当前[组](/zh/datav/datav-7-0/user-guide/layer-management-of-canvas-editor-in-pc-of-datav-7)添加一张图片或标题组件，并设置为透明样式，通过点击透明组件或图片触发相应事件。
* **操作示例：**示例按下图步骤，添加通用标题至当前组（即由饼图和轮播列表生成的组）的最上层，并设置标题组件为透明状态。后续您可按需为标题组件[添加相关指令](/zh/datav/datav-7-0/user-guide/widget-interaction-configuration)，实现点击组件触发相应事件。更多组件操作，请参考[PC组件](/zh/datav/datav-7-0/user-guide/widgets-on-pcs/)。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/6233900371/p864085.png)