---
title: promise
group:
  title: web综合
footer: false
---

```javascript
// 简版
function MyPromise (fn) {
  this.info = {
    status: 'pending',
    value: '',
  };

  const self = this;

  // then函数里面的第一个回调函数的集合
  self.onFulfilledArr = []; 
  // then函数里面的第二个回调函数的集合
  self.onRejectedArr = []; 

  const resolve = function (value) {
    // 加这个判断是为了表示，只有在pendding状态下才会去执行
    // 状态已经变成onFulfilled之后就不能再去改变了
    // 符合PromiseA+中的2.1.2.1
    if (self.info.status !== 'pending') {
      return;
    }
    self.info.status = 'onFulfilled';
    self.info.value = value;
    self.onFulfilledArr.forEach((fn) => fn(value));
  };

  // 和上面同理符合PromiseA+,2.1.3.1
  const reject = function (value) {
    if (self.info.status !== 'pending') {
      return;
    }
    self.info.status = 'onRejected';
    self.info.value = value;
    self.onRejectedArr.forEach((fn) => fn(value));
  };
  // 执行回掉函数 
  fn(resolve, reject);
};

MyPromise.prototype.then = function () {
  const self = this;
  if (self.info.status === 'onFullfilled') {}
  if (self.info.status === 'onRejected') {}
}
MyPromise.prototype.catch = function () {}
MyPromise.prototype.finally = function () {}
MyPromise.all = function () {}
MyPromise.resolve = function () {}
MyPromise.reject = function () {}
MyPromise.race = function () {}
```