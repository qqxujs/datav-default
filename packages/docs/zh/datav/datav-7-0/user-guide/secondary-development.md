<!DOCTYPE html> 

DataV-Board（数据看板）提供二次开发功能，实现更复杂和灵活的看板效果。此功能仅对尊享版用户开放。

## 适用场景

当DataV-Board内置功能无法满足业务需求，您可通过编写JavaScript代码（Hook脚本）的方式进行二次开发实现您的期望效果。该功能比蓝图编辑器更具自由度和灵活性，帮您按需定制心仪的数据看板。

* **展示效果优化**：通过Hook脚本，自定义CSS样式实现更炫酷的效果。
* **数据处理与转换**：通过Hook脚本，支持在前端进行数据处理和转换，满足特定的业务逻辑需求。
* **动态内容更新**：通过Hook脚本，实现数据看板的动态内容更新和实时数据展示。
* **高级动画效果**：通过Hook脚本，添加更复杂的动画效果，提高数据看板的视觉吸引力。
* **事件响应**：支持对用户操作（如点击、悬停等）进行响应，增强数据看板的交互性。

## 使用限制

仅限尊享版用户，若您还不是尊享版用户请先进行[产品升级](/zh/datav/datav-7-0/product-overview/service-upgrades-and-downgrades)。

## **操作流程**

1. 登录[DataV控制台](https://datav.aliyun.com/v/console/)。
2. 进入目标数据看板页面，点击全局搜索，输入`hook`关键词，即可开启hook编辑器。

**说明**  
入口仅支持尊享版用户开启，请确保已开通尊享版。  
![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8780489271/p862571.png)
3. 进入二次开发代码编辑页面，编写代码并点击保存。![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/8780489271/p862655.png)
4. 进入预览页面查看效果，满意后发布数据看板即可。

## **Hook API**

### **函数体**

Hook 代码默认使用 CommonJS 结构，需要对全局抛出一个执行函数，函数体如下：

```
/**
 * @params {IStage} stage 
 */
module.exports = (stage) => {

};
```

### stage 工具对象

函数入参 stage 为数据看板运行时会传入的工具对象，其类型如下：

**stage对象接口定义**

```
interface IStage {
  get: (id: string) => ICompatibleComponent    |    undefined;
  getAll: () => Record<string, ICompatibleComponent    |    undefined>;
  on: (eventName: string, listener: (...args: any[]) => void) => () => void;
  emit: (eventName: string, ...args: any[]) => void;
  exec: (methodName: string, ...args: any[]) => void;
  expose: (methodMap: Record<string, (...args: any[]) => void>) => void;
  getComponent: (id: string) => IDatavComponent    |    undefined    |    null;
  getVariable: (
    id: string,
  ) =>
    |    {
        value: any;
        set: (value: any) => void;
        onChange: (cb: (current: any, prev: any) => void) => IDisposer;
      }
    |    undefined;
}

type IDisposer = () => void;
/**
 * 组件实例通用方法
 */
interface IDatavComponent {
  /** 组件绘制 */
  render(data: any, options?: { [key: string]: any }): void;
  /** 配置更新 */
  updateOptions(options: { [key: string]: any }): void;
  /** 组件卸载 */
  destroy(): void;
  /** 宽高尺寸变更 */
  resize?(w: number, h: number): void;
  /** 开始动画 */
  startAnimates?(): void;
  /** 清除动画 */
  clearAnimates?(): void;
}

interface IMoveConfig {
  attr: {
    x: number;
    y: number;
  };
  positionType: 'to'    |    'by';
}

type ICompatibleComponent = IDatavComponent & {
  /* 组件实例 */
  instance: any;
  /* 组件实际绘制的 dom */
  container: HTMLDivElement;
  /* 监听组件抛出的事件, 具体回调函数入参请参考组件的文档 */
  on: (eventName: string, ...args: any[]) => void;
  /* 显示组件 */
  show(): void;
  /* 隐藏组件 */
  hide(): void;
  /* 更新组件样式配置 */
  updateProps(props: any): void;
  /* 设置组件数据 */
  setData(key: string): void;
  /* 发起组件数据获取流程，可指定数据名 */
  fetchData(key?: string): Promise<any>;
  /* 监听组件数据变化 */
  onDataChange: (key: string, cb: (current: any, prev: any) => void) => IDisposer;
} & {
  /* 组件 id */
  __id: string;
  /* 切换组件显隐 */
  toggleVisible(): void;
  /* 移动组件 */
  move(options: IMoveConfig): void;
}
```

### **示例操作代码**

#### 获取组件

您可通过如下代码获取组件。

**重要** 

组件的ID在画布编辑器中选择组件后右键选择**复制ID**获取。

```
const lineChart = stage.get('@echarts_echarts-line-category_eqbr7');
```

#### 切换组件显隐

您可通过如下代码切换组件显隐。

```
const lineChart = stage.get('@echarts_echarts-line-category_eqbr7');

// 隐藏组件
lineChart.hide();
// 显示组件
lineChart.show();
// 切换显隐
lineChart.toggleVisible();
```

#### 移动组件

您可通过如下代码移动组件。

```
const lineChart = stage.get('@echarts_echarts-line-category_eqbr7');

// 向右移动 100 个单位，向下移动 30 个单位
lineChart.move({
  attr: {
    x: 100,
    y: 30,
  },
  positionType: 'by'
});

// 移动到坐标为 (0, 120) 的位置（ 注意，坐标系原点为画布左上角 ）
lineChart.move({
  attr: {
    x: 0,
    y: 120,
  },
  positionType: 'to'
});
```

#### 设置组件数据

您可通过如下代码设置组件数据。

```
const lineChart = stage.get('@echarts_echarts-line-category_eqbr7');

// 置空组件的数据
lineChart.setData('source', []);
```

#### 查看组件数据

您可通过如下代码查看组件数据。

```
const lineChart = stage.get('@echarts_echarts-line-category_eqbr7');

// 组件当前数据
const data = lineChart.data;
```

#### 获取组件的 DOM

您可通过如下代码获取组件的 DOM。

```
const lineChart = stage.get('@echarts_echarts-line-category_eqbr7');

// 禁止对 dom 做直接的删改操作，可能影响运行时内容
const dom = lineChart.container;
```

#### 发起组件数据源请求

您可通过如下代码发起组件数据源请求。

```
const lineChart = stage.get('@echarts_echarts-line-category_eqbr7');

// 发起组件所有数据源请求
lineChart.fetchData();
// 发起组件 source 数据源的请求
lineChart.fetchData('source')
```

#### 监听组件的数据变更

您可通过如下代码监听组件的数据变更。

```
const lineChart = stage.get('@echarts_echarts-line-category_eqbr7');

lineChart.onDataChange('source', (currentData, previousData) => {
  // 当组件 source 数据源结果发生变化时，进入该回调函数
});
```

#### 监听组件抛出的事件

您可通过如下代码监听组件抛出的事件。

```
const lineChart = stage.get('@echarts_echarts-line-category_eqbr7');

// 具体事件 id 及回调函数入参请参照蓝图编辑器中的说明，或者组件文档
lineChart.on('click', () => {
  
});
```

#### 更新组件样式配置

您可通过如下代码监听组件更新组件样式配置。

```
const lineChart = stage.get('@echarts_echarts-line-category_eqbr7');
lineChart.updateProps({
  // 具体可配置的样式请查看组件文档
});
```

#### 获取全局变量

您可通过如下代码获取全局变量。

**重要** 

全局变量ID在全局变量上右键复制获取。

```
const varA = stage.getVariable('var_khje3');
// 查看当前值
const value = varA.value;
// 设置变量值
varA.set('newValue');
// 监听变量变化
varA.onChange((currentValue, oldValue) => {

});
```

#### 监听页面事件

您可通过如下代码监听页面事件。

```
// 具体可用事件请在蓝图编辑器中的数据看板接口节点上查看
stage.on('data-update', () => {
  
});
```

#### 执行页面方法

您可通过如下代码执行页面方法。

```
// 具体方法请在蓝图编辑器中的数据看板动作接口节点上查看
stage.exec('change-location', { value: '浙江省' });
```

#### 对外手动抛出页面事件

您可通过如下代码对外手动抛出页面事件。

```
// 手动抛出事件
stage.emit('custom-evt', []);

stage.on('custom-evt', (data) => {
  // data 为空数组
});
```