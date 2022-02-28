---
title: React 一
order: 1
group:
  title: React相关
---

## 1.对虚拟DOM的理解
虚拟dom：本质上是JS和DOM之间的一个映射缓存，它在形态上变现为能够描述DOM结构
及其属性的信息的js对象。
```javascript
{
  type: 'div',
  key: null,
  ref: null,
  props: {
    className: '',
    children: []
  },
  _owner: null,
  _store: Object,
}
```
+ 虚拟 DOM 是 JS 对象
+ 虚拟 DOM 是对真实 DOM 的描述

### 价值
1. 研发体验/研发效率的问题: 数据驱动视图
2. 跨平台的问题: 虚拟 DOM 是对真实渲染内容的一层抽象.

## 2.谈谈你对React的理解
React 是一个网页 UI 框架，通过组件化的方式解决视图层开发复用的问题，本质是一个组件化框架。

## 3.如何避免React生命周期中的坑

## 4.React Fiber架构
关键特性

增量渲染（把渲染任务拆分成块，匀到多帧）
更新时能够暂停，终止，复用渲染任务
给不同类型的更新赋予优先级
并发方面新的基础能力

## 5.createElement过程
```javascript
React.createElement(
  type,
  [props],
  [...children]
)
```

## 6.调和阶段 setState内部干了什么
## 7.setState

异步与同步: setState并不是单纯的异步或同步，这其实与调用时的环境相关:
```
在合成事件 和 生命周期钩子(除 componentDidUpdate) 中，setState是"异步"的；
原因: 因为在setState的实现中，有一个判断: 当更新策略正在事务流的执行中时，该组件更新会被推入dirtyComponents队列中等待执行；否则，开始执行batchedUpdates队列更新；
在生命周期钩子调用中，更新策略都处于更新之前，组件仍处于事务流中，而componentDidUpdate是在更新之后，此时组件已经不在事务流中了，因此则会同步执行；
在合成事件中，React 是基于 事务流完成的事件委托机制 实现，也是处于事务流中；
问题: 无法在setState后马上从this.state上获取更新后的值。
解决: 如果需要马上同步去获取新值，setState其实是可以传入第二个参数的。setState(updater, callback)，在回调中即可获取最新值；
在 原生事件 和 setTimeout 中，setState是同步的，可以马上获取更新后的值；
原因: 原生事件是浏览器本身的实现，与事务流无关，自然是同步；而setTimeout是放置于定时器线程中延后执行，此时事务流已结束，因此也是同步；
批量更新: 在 合成事件 和 生命周期钩子 中，setState更新队列时，存储的是 合并状态(Object.assign)。因此前面设置的 key 值会被后面所覆盖，最终只会执行一次更新；
函数式: 由于 Fiber 及 合并 的问题，官方推荐可以传入 函数 的形式。setState(fn)，在fn中返回新的state对象即可，例如this.setState((state, props) => newState)；
使用函数式，可以用于避免setState的批量更新的逻辑，传入的函数将会被 顺序调用；
```



## 8.setState 原理分析
## 9.React事物机制
类似于AOP切面

## 10.React组件渲染和更新过程

## 11.如何解释 React 的渲染流程


## 12.diff算法是怎么运作
单节点diff、多节点diff

同一层级
+ 第一轮遍历：处理更新的节点。
+ 第二轮遍历：处理剩下的不属于更新的节点。

## 13.React-Router 的实现原理及工作方式分别是什么
## 为什么 React 元素有一个 $$typeof 属性
目的是为了防止 XSS 攻击。因为 Symbol 无法被序列化，所以 React 可以通过有没有 $$typeof 属性来断出当前的 element 对象是从数据库来的还是自己生成的。

## 



