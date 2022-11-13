---
title: 对象
footer: false
---

## 1.取值递归
```
目标：
let a = {};
console.log(a.x) // 1  
console.log(a.x) // 2  
console.log(a.x) // 3
```

```javascript
// 1.defineProperty
let a = {};
Object.defineProperty(a, 'x', {
  get: function () {
    if (!this.b) {
      this.b = 0;
    }
    return this.b++;
  },
  set: function (val) {
    this.b = val;
  }
});
```

```javascript
// 2.Proxy
let a = {};
a = new Proxy(a, {
  get: function (target, key) {
    if (key === 'x') {
      return target[key] = (target[key] || 0) + 1;
    }
    return target[key];
  }
})
```

```javascript
// 3.利用相等的隐式转换 会调用valueOf方法
let a = {};
a.x = 0;
a.valueOf = function () {
  return this.x++;
}
console.log('a', a == 0 && a == 1)
console.log(a.x)
console.log('a', a == 2)
console.log(a.x)
```

示例：
```tsx
import React, { useEffect } from 'react';
export default () => {
  useEffect(() => {
    // 
  }, [])
  return (
    <div>xxx</div>
  )
}
```
