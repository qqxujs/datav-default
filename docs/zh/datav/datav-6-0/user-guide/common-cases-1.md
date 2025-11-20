# 常用案例 %{#370893}% 

本文通过设置数据源的六个实操案例介绍如何使用数据过滤器，帮您快速了解数据过滤器的相关配置。

## **前提条件**

已进入画布编辑器页面。

## 案例一：数据格式转换

1. 在**画布编辑器**页面，添加**环图**组件。
2. 单击右侧配置面板的数据![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2073675761/p557024.png)图标，进入数据设置页签。
3. 单击**配置数据源**，进入**设置数据源**页签。
4. 修改静态数据为如下代码。  
```  
{ "服饰": 21, "食品": 29, "建材": 13, "娱乐": 33 }  
```

**说明**  
由于当前静态数据与数据格式的参数字段不匹配，此时图表内容会变为空白。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2073675761/p557071.png)
5. 选中**数据过滤器**，在过滤器的代码编辑框内，输入以下代码。  
```  
function objToArr(obj, name, value) {  
  const result = [];  
  // 循环对象数据类型  
  for (const key in obj) {  
    const item = {};  
    item[name] = key;  
    item[value] = obj[key];  
    result.push(item);  
  }  
  return result;  
}  
return objToArr(data, 'name', 'value');  
```
6. 此时发现，图表正常显示。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2073675761/p557121.png)

**说明**  
本案例实现了将对象格式的数据转为数组格式的数据，由于参数字段再次匹配成功，因此图表正常显示。

## 案例二：数据筛选及排序

1. 在**画布编辑器**页面，添加**基本折线图**组件。
2. 在右侧配置面板的**配置**页签，设置**坐标轴** **\>** **X轴**的数据类型为**类目型**。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2073675761/p557150.png)
3. 单击右侧配置面板的数据![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2073675761/p557024.png)图标，进入数据设置页签。
4. 单击**配置数据源**，进入**设置数据源**页签。
5. 修改静态数据为如下代码。  
```  
[  
    { "x": "服饰", "y": 800 }, { "x": "食品", "y": 779 },  
    { "x": "建材", "y": 180 }, { "x": "娱乐", "y": 523 },  
    { "x": "生鲜", "y": 192 }  
]  
```
6. 选中**数据过滤器**，按照如下代码修改相关的字段。  
```  
// 筛选  
  const result = data.filter(item => {  
    return item.y >= 500;  
  });  
  // 排序  
  result.sort((a, b) => a.y - b.y);  
  return result;  
```
7. 查看图表结果，过滤器将y值大于等于500的类目进行了升序排列。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2073675761/p557155.png)

**说明**  
本案例实现了对数组中对象的数据筛选及排序，通过修改筛选条件以及排序条件，实现筛选不同数据以及控制返回数据升序或者降序排序。

## 案例三：获取当前时间并格式化展示

1. 在**画布编辑器**页面，添加**通用标题**组件。
2. 单击右侧配置面板的数据![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2073675761/p557024.png)图标，进入数据设置页签。
3. 单击**配置数据源**，进入**设置数据源**页签。
4. 选中**数据过滤器**，按照如下代码修改相关的字段。  
获取当前时间，并格式化为**YYYY-MM-DD HH:mm:ss**。  
获取返回值，例如：**2023-02-17 星期二 15:30:00**。

**说明**  
  * 时间格式说明：https://momentjs.com/docs/#/displaying/format/
  * Date 对象说明：https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global\_Objects/Date  
```  
const getTimeStr = (options = {}) => {  
  // 给字符串补 0。输入：8，输出：08  
  const strComplement = (str, digit = 2) => {  
    str = typeof str !== 'string' ? `${str}` : str;  
    const mask = (new Array(digit + 1)).join('0');  
    return mask.slice(str.length) + str;  
  }  
  const { myDate = new Date(), separator = '-' } = options;  
  // 获取当前时间的年、月、日、星期、时、分、秒  
  const year = myDate.getFullYear();  
  const month = strComplement(myDate.getMonth() + 1);  
  const date = strComplement(myDate.getDate());  
  const day = `星期${'日一二三四五六'.charAt(myDate.getDay())}`;  
  const hour = strComplement(myDate.getHours());  
  const minute = strComplement(myDate.getMinutes());  
  const second = strComplement(myDate.getSeconds());  
  const timeStr = `${year}${separator}${month}${separator}${date} ${day} ${hour}:${minute}:${second}`;  
  return timeStr;  
}  
// 【试一试】将 '-' 改为 '/' 看看会发生什么效果  
return [{ value: getTimeStr({separator: '-'}) }];  
```

**说明**  
  * 本案例实现了获取当前时间的方法，返回值格式为：**2023-02-07 星期二 17:37:55**。
  * 您可以传分隔符，如`getTimeStr({separator: '/'}) `，返回值格式为：**2023/02/07 星期二 17:37:55**
  * 您可以通过修改`timeStr`字段，自定义组合年月日时分秒的展示， 例如修改为`` timeStr = `${year}${separator}${month}${separator}${date}` ``，返回值格式为：**2023-02-07**。

## 案例四：设置超链接跳转

1. 在**画布编辑器**页面，添加**轮播列表**组件。
2. 单击右侧配置面板的数据![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2073675761/p557024.png)图标，进入数据设置页签。
3. 单击**配置数据源**，进入**设置数据源**页签。
4. 修改静态数据为如下代码。  
```  
[{ "area": "浙江", "attribute": "100" }, { "area": "江苏", "attribute": "200" }]  
```
5. 选中**数据过滤器**，按照如下代码修改相关的字段。  
```  
//获取超链接标签  
const getLinkTag = (baseURL = '', param = {}, style = {}) => {  
    const joint = (obj, insideSeparator = '', betweenSeperator = '') => {  
        const result = [];  
        for (const key in obj) {  
            result.push(`${key}${insideSeparator}${obj[key]}`);  
        }  
        return result.join(betweenSeperator);  
    }  
    const url = `${baseURL}?${joint(param, '=', '&')}`;  
    const styleCss = joint(style, ':', ';');  
    return [  
        `<a href="${url}" target="_blank" style="${styleCss}" >`,  
        '</a>'  
    ]  
}  
return data.map(item => {  
    // 【试一试】把 https://www.aliyun.com 改成 https://datav.aliyun.com 看看效果  
    const baseURL = 'https://www.aliyun.com';  
    // 【试一试】把 area: item.area 改成 id: item.area 看看效果  
    const param = {  
        area: item.area,  
    };  
    // 【试一试】把 color: 'blue' 改成 color: 'red' 看看效果  
    const style = {  
        color: 'blue',  
        background: 'yellow'  
    }  
    // 设置超链接  
    return {  
        ...item,  
        attribute: getLinkTag(baseURL, param, style).join(item.attribute),  
    }  
});  
```

**说明**  
本案例实现了获取超链接标签的方法，`baseURL`参数为需要跳转的地址，`param`为拼接在超链接上的参数，`style`参数为超链接标签的样式属性。

## 案例五：四舍五入，保留n位小数

1. 在**画布编辑器**页面，添加**轮播列表**组件。
2. 单击右侧配置面板的数据![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2073675761/p557024.png)图标，进入数据设置页签。
3. 单击**配置数据源**，进入**设置数据源**页签。
4. 修改静态数据为如下代码。  
```  
[{ "y": 1 }, { "y": 1.2246 }, { "y": 1.2332 }]  
```
5. 选中**数据过滤器**，按照如下代码修改相关的字段。  
```  
 const toFixDecimal = (num, ...args) => {  
     const digit = typeof args[0] === 'number' ? args[0] : 2;  
     const options = typeof args[0] === 'object' ? args[0] : (args[1]    ||    {});  
     const { keepInt = true } = options;  
     const value = Number.parseFloat(num);  
     if (keepInt) {  
         const base = Math.pow(10, digit);  
         return Math.round(value * base) / base;  
     } else {  
         return value.toFixed(digit);  
     }  
 }  
 // 循环列表数据类型  
 const result = data.map((item) => {  
     // 【试一试】将以下注释分别打开看看效果  
     const newValue = toFixDecimal(item.y); // [ { y: 1 }, { y: 1.22 }, { y: 1.23 } ]  
     // const newValue = toFixDecimal(item.y, 1); // [ { y: 1 }, { y: 1.2 }, { y: 1.2 } ]  
     // const newValue = toFixDecimal(item.y, {keepInt: false}); // [ { y: '1.00' }, { y: '1.22' }, { y: '1.23' } ]  
     // const newValue = toFixDecimal(item.y, 1, {keepInt: false}); // [ { y: '1.0' }, { y: '1.2' }, { y: '1.2' } ]  
     return {  
         ...item,  
         y: newValue  
     }  
 });  
 return result;  
```

**说明**  
  * 本案例实现了保留指定小数位数的方法，第一个参数为需要进行保留小数处理的数据字段，默认保留2位小数，但您可以指定小数位数，比如保留3位小数`newValue = toFixDecimal(item.y,3)`，示例数据将返回：`[{ y: 1 }, { y: 1.225 }, { y: 1.233 }]`。
  * 如果您要展示的数据格式为：'1.00'，需要指定`{keepInt: false}`；如果您指定`newValue = toFixDecimal(item.y, 3, {keepInt: false})`，则示例数据返回字符串格式的数据为`[{ y: '1.000' }, { y: '1.225' }, { y: '1.233' }]`。

## 案例六：复杂数组去重

1. 在**画布编辑器**页面，添加**轮播列表**组件。
2. 单击右侧配置面板的数据![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/2073675761/p557024.png)图标，进入数据设置页签。
3. 单击**配置数据源**，进入**设置数据源**页签。
4. 修改静态数据为如下代码。  
```  
[  
    { "x": "服饰", "y": 800 }, { "x": "食品", "y": 779 },  
    { "x": "建材", "y": 180 }, { "x": "食品", "y": 779 },  
    { "x": "服饰", "y": 192 }  
]  
```
5. 选中**数据过滤器**，按照如下代码修改相关的字段。  
```  
function uniq(arr, keyList) {  
    const valueSet = {};  
    return arr.reduce((result, item) => {  
        const key = keyList.map((k) => item[k]).join('#@#');  
        if (!valueSet[key]) {  
            result.push(item);  
            valueSet[key] = true;  
        }  
        return result;  
    }, []);  
}  
//【试一试】将以下注释依次打开看看效果。x、y 为对象 key  
return uniq(data, ['y']);  
// return uniq(data, ['x']);  
// return uniq(data, ['x', 'y']);  
```

**说明**  
本案例实现的是数组去重，您可以通过传指定字段返回去重数据，如示例数据根据`y`字段去重，`uniq(data, ['y'])`，返回数据为` [{ "x": "服饰", "y": 800 }, { "x": "食品", "y": 779 }, { "x": "建材", "y": 180 }，{ "x": "服饰", "y": 192 }] `，`y`字段值相同的数据只会按顺序保留第一个；若根据`x`和`y`字段去重，`uniq(data, ['x', 'y'])`，那么`x`和`y`字段值相同的数据会按顺序保留第一个。

## 视频链接

DataV小课堂直播视频：[数据源管理-数据过滤器介绍](https://cloud.video.taobao.com/play/u/null/p/1/e/6/t/1/d/ud/345580020016.mp4)。