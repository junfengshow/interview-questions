---
title: 题单一
footer: false
---

## 1).常规

### 1.Event Loop
+ 1.选择当前要执行的任务队列，选择任务队列中最先进入的任务，如果任务队列为空即为null，则执行跳转到(MicroTask)微任务的执行步骤.
+ 2.将事件循环中的任务设置为已选择任务。
+ 3.执行任务
+ 4.将事件循环中当前运行任务设置为null
+ 5.将已经运行完成的任务从任务队列中删除
+ 6.microtasks步骤：进入microtask检查点
+ 7.更新界面渲染完成后返回第一步。
  
执行进入microtask检查点时，用户代理会执行以下步骤：
+ 1.设置microtask检查点标志为true
+ 2.当事件循环microtask执行不为空时：选择一个最先进入的microtask队列的microtask，将事件循环的microtask设置为已选择的microtask，运行microtask，将已经执行完成的microtask为null，移出microtasks队列中的microtask.
+ 清理IndexDB事务
+ 设置进入microtask检查点的标志为false。

[详见](https://shimo.im/docs/473QyJ4ppefrZ03w/)

[eventloop浏览器和nodejs的区别](https://juejin.cn/post/6844903761949753352)

### 2.封装fetchApi
要求超时报错的同时，取消promise，而不是继续执行.
AbortController

### 3.arcGis应用
ArcGIS产品线为用户提供一个可伸缩的，全面的GIS平台。ArcObjects包含了许多的可编程组件，从细粒度的对象（例如单个的几何对象）到粗粒度的对象（例如与现有ArcMap文档交互的地图对象）涉及面极广，这些对象为开发者集成了全面的GIS功能。

GIS：地理信息系统

### 4.网站重构怎么重构

### 5.原型链及6种继承优劣，js多态实现

### 6.前端优化的方式，强缓存和协商缓存的区别
http0.9 1.0 1.1 2.0 3.0 的特点和对队头阻塞的解决，QUIC是基于TCP的吗？

QUIC是基于UDP的。

### 7.webRTC的特点

### 8.EventSource和长轮询的差别？webSocket是怎么保持的长链接？

### 9.Sass，双飞翼布局外其它的flex grid 圣杯 传统浮动布局

### 10.BRF/IFC，justify-content作用，transform是否会调起GPU

### 11.webgl 管线流程，且EL、SL中，片元着色器和顶点着色器的基本应用。

### 12.requestAnimationFrame是否会被阻塞，rAF阶段是在dom渲染前还是渲染后？

### 13.是否用过requestIdleCallback?

### 14.React Fiber架构中，迭代器和次函数结合的优势

### 15.canvas常用api

### 16.postMessage和worker的结合使用过吗？

### 17.说下virtual dom在vue和react的区别？diff算法有什么不同？为什么vue叫渐进式的？

## 2).webpack

### 1.资源优化的方式

### 2.CommonJs和ES6 Module的区别

### 3.Tree Shaking的三个使用场景

### 4.什么是依赖树

### 5.什么是AST？有没有用过recast？

### 6.什么是热更新？怎么实现热模块替换？HMR的原理？你如何设计热模块替换？

### 7.热模块替换和前端的router有什么区别？提示 location hash 和 history。

### 8.浏览器渲染原理，重绘和重排/回流的区别？GC的两种类型是什么？

### 9.DLLPlugin的好处是什么？

### 10.每次最小更新该如何做？
+ [name]@[chunkhash].js，contenthash是什么？

+ loader和plugin哪个先开启引入？

+ runtime和manifest分别是什么？

+ service work每次更新是更新全部还是只更新manifest

### 11.webpack中plugin和loader的区别，是否自己实现过plugin作用是？

### 12.MVV\*和MVN\*是指什么？使用过SSR吗？

### 13.如何开发移动端项目？

### 14.重构网站的思路？

## 3).typescript
### 15.typescript中装饰器如何实现？

### 16.能不能讲下元编程？Proxy和Reflect的应用？

### 17.有没有自己写过入侵的测试框架，自己实现Hook管理了么？
