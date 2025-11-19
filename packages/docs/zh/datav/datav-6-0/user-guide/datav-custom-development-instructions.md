<!DOCTYPE html> 

DataV-Board（数据看板）尊享版提供二次开发功能，提供比蓝图编辑器更高的灵活度，可实现更复杂和灵活的看板效果。

## 适用场景

当DataV-Board内置功能无法满足业务需求，您可通过编写JavaScript代码（Hook脚本）的方式进行二次开发实现您的期望效果。该功能比蓝图编辑器更具自由度和灵活性，帮您按需定制心仪的数据看板。

* **展示效果优化**：通过Hook脚本，自定义CSS样式实现更炫酷的效果。
* **数据处理与转换**：通过Hook脚本，支持在前端进行数据处理和转换，满足特定的业务逻辑需求。
* **动态内容更新**：通过Hook脚本，实现数据看板的动态内容更新和实时数据展示。
* **高级动画效果**：通过Hook脚本，添加更复杂的动画效果，提高数据看板的视觉吸引力。
* **事件响应**：支持对用户操作（如点击、悬停等）进行响应，增强数据看板的交互性。

## 使用限制

仅限尊享版用户，若您还不是尊享版用户请先进行[产品升级](https://help.aliyun.com/zh/datav/datav-7-0/product-overview/service-upgrades-and-downgrades)。

## hook脚本开发使用方法

1. 登录[DataV控制台](https://datav.aliyun.com/)。
2. 在**我的可视化**页面，单击您创建的可视化应用项目上方的**编辑**按钮。
3. 进入可视化应用画布中，添加所需要的组件。  
本文中以添加一个常规组件和地图组件，并在地图组件内添加一个地图子组件为例。
4. 单击选中画布中的常规组件（如下图的**基本水位图**）。
5. 在浏览器中打开开发者工具。  
在Windows电脑上使用快捷键**F12**或者在Mac电脑上使用组合键**command+option+i**进入调试控制界面。
6. 在调试控制界面的**Console**页签查看各组件的Key值。

  1. 鼠标选中常规组件，即可在控制台查看并获取对应的Key值。  
  ![查看并选中常规组件key](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9864262261/p112239.png)
  2. 再次选中画布中的地图组件（如下图中的**基础平面地图**组件），和上述常规组件获取Key值的方式一样，在**Console**页签里查看并获取当前地图父容器的Key值。  
  ![地图父容器key](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9864262261/p112242.png)
  3. 以在**基础平面地图**添加了**区域热力层**子组件为例。在地图组件配置面板中单击**区域热力层**子组件，和上述地图父容器获取Key的方式一样，在**Console**页签里查看并获取**区域热力层**子组件的Key值。  
  图 1\. 选中区域热力层子组件![选中区域热力层子组件](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9864262261/p112249.png)  
  图 2\. 查看并获取区域热力层的Key![查看并获取区域热力层的key](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/9864262261/p112250.png)
7. 在DataV的画布编辑页面，将页面URL中的**screen**替换成**hook**，打开替换后的URL链接即可进入当前可视化应用的hook编辑器界面。![进入hook编辑器页面](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1091095951/p112252.png)
8. 在hook脚本编辑器界面内获取组件对象。![hook脚本获取组件对象](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1091095951/p112286.png)  
示例代码如下所示。  
```  
module.exports = (stage) => {  
 //获取组件  
 const changgui =  
stage.get("@datav_shukongkeji_shuiweitu_ARVrX");  
 const map2d =  
stage.get("datavmap-2d_CpH7b");  
 const map2d_areaLayer =  
stage.get("datavmap-2d-layer-area_je9EA");  
 const datavGL =  
stage.get("@datav_gl_datavmap-3d_r3LLY");  
 const datavGL_areaLayer =  
stage.get("datavmap-3d-layer-mapbox-area_fW4Nl");  
}  
```

## DataV可视化应用页面使用DOM基础操作

在DataV可视化应用页面中使用DOM的基础操作包括以下两种： 

* 查看DataV可视化应用在预览页面时的DOM整体布局。  
查看DOM布局步骤如下：  

  1. 单击可视化应用的预览，打开可视化应用预览页面。
  2. 在预览界面内，在Windows电脑上使用快捷键**F12**或者在Mac电脑上使用组合键**command+option+i**进入调试控制界面。
  3. 在调试控制界面的**Elements**页签，查看可视化应用容器div以及应用内所有添加的组件。![查看DOM布局内容](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/1091095951/p112306.png)

    * 可视化应用的容器div（图示中①）。
    * 可视化应用所有添加的组件（图示中②）。
  4. 进入hook编辑器界面，在hook脚本编辑器界面内查看页面的DOM布局。  
  示例代码如下所示。  
  ```  
  module.exports = function (stage) {  
   //hook编辑页默认支持Jquery，可以通过$(".layer") 获取到大屏容器div节点。  
   let datavLayout = $(".layer");  
  }  
  ```
* 修改DataV组件的DOM节点样式。  
在hook脚本编辑器界面，修改节点样式示例代码如下所示。  
```  
module.exports = function (stage) {  
 const com = stage.get("组件Key");//获取组件  
 //修改组件位置  
 $(com.container).parent().css({  
 "left": 0,  
 "top": 100  
 });  
 //修改组件透明度  
 $(com.container).parent().css("opacity",
0.6);  
 $(com.container).parent().fadeIn();  
 $(com.container).parent().fadeOut();  
 //其他Jquery动画，等等  
}  
```

## DataV可视化应用页面中使用SVG

在DataV可视化应用页面中使用SVG，示例操作代码如下。 

```
module.exports = function (stage) {
 let datavLayout = $(".layer");

 const mySvg = '<svg
width="1920" height="1080"
xmlns="http://www.w3.org/2000/svg">'
 + '<path d="M50,100 q300,200
420,300 q700,200 1000,0" stroke="#cd0000"
stroke-width="10" fill="none" />'
 + '<text font-family="microsoft
yahei" x="0" y="0" fill="white"
style="font-size:100">DataV'
 + '<animateMotion
path="M50,100 q300,200 420,300 q700,200 1000,0" begin="0s"
dur="3s" rotate="auto"
repeatCount="indefinite"/>'
 + '</text>'
 + '</svg>';

 datavLayout.append(mySvg);
}
```

## DataV可视化应用页面中使用Canvas

在DataV可视化应用页面中使用Canvas，示例操作代码如下。 

```
module.exports = function (stage,
groupnoneed, done) {
 let datavLayout = $(".layer");

 const myCanvas = '<canvas
id="myCanvas" width="1920" height="1080"/>';
 datavLayout.append(myCanvas);

 //获取Canvas对象(画布) 
 var canvas =
document.getElementById("myCanvas");

 //简单地检测当前浏览器是否支持Canvas对象，以免在一些不支持html5的浏览器中提示语法错误。

 if(canvas.getContext){ 
 //获取对应的CanvasRenderingContext2D对象(画笔) 
 var ctx =
canvas.getContext("2d"); 
 
 //开始一个新的绘制路径

 ctx.beginPath(); 
 //设置弧线的颜色为蓝色

 ctx.strokeStyle = "white"; 
 var circle = { 
 x : 400, //圆心的x轴坐标值 
 y : 300, //圆心的y轴坐标值 
 r : 100 //圆的半径 
 };

 //沿着坐标点(100,100)为圆心、半径为50px的圆的顺时针方向绘制弧线

 ctx.arc(circle.x, circle.y, circle.r,
0, Math.PI / 2, false); 
 //按照指定的路径绘制弧线
 ctx.lineWidth = 10;
 ctx.strokeStyle = '#e3f';
 ctx.stroke(); 
 }
}
```

## DataV可视化应用页面中使用CSS

在DataV可视化应用页面中使用CSS，示例操作代码如下。 

```
module.exports = function (stage,
groupnoneed, done) {
 const css = '<style>'
 + '.anim-opacity2{'
 + 'animation:5s opacity2 0s
infinite;'
 + '-webkit-animation:5s opacity2 0s
infinite;'
 + '-moz-animation:5s opacity2 0s
infinite}'
 + '@Keyframes
opacity2{0%{opacity:0}50%{opacity:1}100%{opacity:0}}'
 + '@-webkit-Keyframes
opacity2{0%{opacity:0}50%{opacity:1}100%{opacity:0}}'
 + '@-moz-Keyframes
opacity2{0%{opacity:0}50%{opacity:1}100%{opacity:0}}'
 + '</style>';
 $("head").append(css);

 $(stage.get("单张图片_NCK7b").container).addClass("anim-opacity2");//单张图片_NCK7b可替换成可视化应用中任意组件Key

 const httpPre =
'http://g.alicdn.com/alilog';
 const script = '<script
type="text/javascript" async="" src="'+ httpPre
+'/oneplus/entry.js?t=212092"></script>';
 $("head").append(script);

 const css2 = '<link
href="//cdn-service.datav.aliyun.com/datav-static/1.6.24_1/css/error-cover.css"
rel="stylesheet">'
 $("head").append(css2);//将样式标签加入到HTML中的head标签里
}
```

## 通过hook脚本方式进行回调ID操作

通过hook脚本的方式进行回调ID注册与监听，示例操作代码如下。 

```
module.exports = function (stage) {
 const lunboCom = stage.get("轮播列表柱状图_H56r8");
 const flylineCom =
stage.get("map3d-earth-flyingline_bPFjS");//飞线

 setTimeout(function(){
 for (let i=0; i<3; i++) {
 const index = i;
 setTimeout(function(){
 const adcode =
lunboCom._data[index].adcode;
 //注册回调id事件
 lunboCom.emit('global_var',
'adcode', adcode);
 }, index * 5000);
 }
 },3000);

 //方式1：监听回调id事件
 flylineCom.addListener('global_var',
function(arg1, arg2) {
 console.log('global_var', "方式1: " + arg1, arg2); //arg1 = 'adcode'; arg2 =
'330000';
 });

 //方式2：监听回调id事件
 flylineCom.on('global_var', function(arg1,
arg2) {
 console.log('global_var', "方式2: " + arg1, arg2); //arg1 = 'adcode'; arg2 =
'330000';

 });
}
```