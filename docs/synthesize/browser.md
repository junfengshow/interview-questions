---
title: 浏览器相关
order: 2
---

## 1.聊下你知道的浏览器架构
从单进程到多进程。

+ 浏览器进程。主要负责界面显示、用户交互、子进程管理，同时提供存储等功能。
+ 渲染进程。核心任务是将 HTML、CSS 和 JavaScript 转换为用户可以与之交互的网页，排版引擎 Blink 和 JavaScript 引擎 V8 都是运行在该进程中，默认情况下，Chrome 会为每个 Tab 标签创建一个渲染进程。出于安全考虑，渲染进程都是运行在沙箱模式下。
+ GPU 进程。其实，Chrome 刚开始发布的时候是没有 GPU 进程的。而 GPU 的使用初衷是为了实现 3D CSS 的效果，只是随后网页、Chrome 的 UI 界面都选择采用 GPU 来绘制，这使得 GPU 成为浏览器普遍的需求。最后，Chrome 在其多进程架构上也引入了 GPU 进程。
+ 网络进程。主要负责页面的网络资源加载，之前是作为一个模块运行在浏览器进程里面的，直至最近才独立出来，成为一个单独的进程。
+ 插件进程。主要是负责插件的运行，因插件易崩溃，所以需要通过插件进程来隔离，以保证插件进程崩溃不会对浏览器和页面造成影响。

所以仅仅打开了 1 个页面，为什么有很多个进程？
因为打开 1 个页面至少需要 1 个网络进程、1 个浏览器进程、1 个 GPU 进程以及 1 个渲染进程，如果打开的页面有运行插件的话，还需要再加上 1 个插件进程。

## 2.浏览器缓存策略是怎样的
强缓存：
+ expires   
+ cache-control: max-age;

协商缓存：
+ last-modified 、if-modified-since
+ Etag 、 if-none-match

## 3.描述下浏览器从输入网址到页面展现的整个过程
1. 缓存
2. 解析url并组装一个http请求报文
3. 浏览器获取主机ip地址 
4. tcp链接  三次握手
5. 浏览器得到资源
6. 关闭TCP连接或者保留重用，关闭TCP连接的四次挥手
7. 如果资源可缓存，进行缓存
8. 对响应进行解码（例如gzip压缩）
9. html解析 遇到style、link、script标签获取对应资源
10. html解析成dom树、解析css构成CSSOM
11. js解析如下
12. 展示页面

## 4.history和hash两种路由方式的最大区别是什么？
```
1、hash模式较丑，history模式较优雅;
2、pushState设置的新URL可以是与当前URL同源的任意URL；而hash只可修改#后面的部分，故只可设置与当前同文档的URL;
3、pushState设置的新URL可以与当前URL一模一样，这样也会把记录添加到栈中；而hash设置的新值必须与原来不一样才会触发记录添加到栈中;
4、pushState通过stateObject可以添加任意类型的数据到记录中；而hash只可添加短字符串;
5、pushState可额外设置title属性供后续使用;
6、hash兼容IE8以上，history兼容IE10以上;
7、history模式需要后端配合将所有访问都指向index.html，否则用户刷新页面，会导致404错误。
```
[参考](https://www.jianshu.com/p/25c15833f70b)

## 5.你知道的前端性能优化手段有哪些
1. webpack 压缩、分包
2. gzip压缩
3. 图片优化
4. 浏览器缓存
5. 本地存储
6. CDN 缓存与回原
7. 服务端渲染
8. DOM优化
9. Event-Loop 与异步更新策略
10. 回流与重绘
11. 优化首屏体验
12. 事件的截流与防抖
13. 性能监测 performance、LightHouse

## 6.网站首页有大量的图片，加载很慢，如何去优化呢？
1. 图片压缩
2. cdn 部署
3. 图片懒加载
> 可视区域+滚动距离 > 图片到可视区域顶部距离
4. 图片预加载
5. 小图标用整成雪碧图


## 7.如何减少白屏的时间
1. DNS解析优化
> 针对DNS Lookup环节，我们可以针对性的进行DNS解析优化。  
> DNS缓存优化  
> DNS预加载策略  
> 稳定可靠的DNS服务器  

2. TCP网络链路优化
> 针对网络链路的优化，合理的带宽

3. 服务端处理优化
> 服务端的处理优化，涉及到如Redis缓存、数据库存储优化或是系统内的各种中间件以及Gzip压缩等

4. 浏览器下载、解析、渲染页面优化
> 根据浏览器对页面的下载、解析、渲染过程，可以考虑一下的优化处理：  
> 尽可能的精简HTML的代码和结构  
> 尽可能的优化CSS文件和结构  
> 一定要合理的放置JS代码，尽量不要使用内联的JS代码  

## 8.如何定位内存泄露
### 哪些情况会照成内存泄漏？
1. 意外的全局变量
```javascript
a = "这是一个全局变量";

function foo() {
    this.variable = "potential accidental global";
}
// foo 调用自己，非严格模式下 this 指向了全局对象（window）
foo();
```

2. 没有及时清理的计时器或回调函数
   
3. 脱离 DOM 的引用
> 有时，保存 DOM 节点内部数据结构很有用。假如你想快速更新表格的几行内容，把每一行 DOM 存成字典（JSON 键值对）或者数组很有意义。此时，同样的 DOM 元素存在两个引用：一个在 DOM 树中，另一个在字典中。将来你决定删除这些行时，需要把两个引用都清除。

```javascript
var elements = {
    button: document.getElementById('button'),
    image: document.getElementById('image'),
    text: document.getElementById('text')
};
function doStuff() {
    image.src = 'https://some.url/image';
    button.click();
    console.log(text.innerHTML);
    // ...
}
function removeButton() {
  // 按钮是 body 的子元素
  document.body.removeChild(document.getElementById('button'));
 // 此时，仍旧存在一个全局的 #button 的引用
 // elements 字典。button 元素仍旧在内存中，不能被 GC 回收。
}
```

4. 闭包 
> 见js基础

### 通过chrome查看内存使用情况
控制台 >> performance

![performance](/synthesize/performance.png)

## 9.跨域是什么、如何解决
#### 何为跨域：
受限于浏览器同源策略。即不同源的脚本不能相互影响。

不同协议、不同域名、不同端口 均属于不同的源。

#### 解决：
1. nginx: 配置是使用的不同资源在同一源下。
2. jsonp: 动态创建script。
3. cors: 服务端响应头设置 access-controll-allow-origin: 'xxx'
4. iframe: postMessage
5. img: 动态创建img标签

## 10.jsonp有什么缺点
1. 只能是get请求。
2. 调用失败的时候无状态码。
3. 安全性不足。提供jsonp的服务器容易被攻击。











