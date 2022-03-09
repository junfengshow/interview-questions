---
title: 安全
order: 2
---

## 前端安全
+ 前端安全中，需要注意的有哪些问题？
+ XSS/CSRF是怎样的攻击过程，要怎么防范？
+ 除了XSS和CSRF，还有哪些网络安全相关的问题呢？

## 1.xss
#### XSS是什么？
+ XSS简单点来说，就是攻击者想尽一切办法将可以执行的代码注入到网页中。
+ XSS 可以分为多种类型，但是总体上我认为分为两类：持久型和非持久型。

持久型也就是攻击的代码被服务端写入进数据库中，这种攻击危害性很大，因为如果网站访问量很大的话，就会导致大量正常访问页面的用户都受到攻击。

#### 如何防范？
1. 转义字符：
比如：不直接直接渲染类如<script></script>等标签内容  
可以使用xss npm包
```javascript
const xss = require('xss')
let html = xss('<h1 id="title">XSS Demo</h1><script>alert("xss");</script>')
// -> <h1>XSS Demo</h1>&lt;script&gt;alert("xss");&lt;/script&gt;
```

2. CSP
> CSP 本质上就是建立白名单，开发者明确告诉浏览器哪些外部资源可以加载和执行。我们只需要配置规则，如何拦截是由浏览器自己实现的。我们可以通过这种方式来尽量减少 XSS 攻击。

通常可以通过两种方式来开启 CSP：

+ 设置 HTTP Header 中的 Content-Security-Policy
+ 设置 meta 标签的方式 <meta http-equiv="Content-Security-Policy">

这里通过HTTP Header 来举例:  
+ 只允许加载本站资源
```
Content-Security-Policy: default-src ‘self’
```
+ 只允许加载 HTTPS 协议图片
```
Content-Security-Policy: img-src https://*
```
+ 允许加载任何来源框架
```
Content-Security-Policy: child-src 'none'
```
[CSP文档](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)


[参考博客](https://www.jianshu.com/p/4fcb4b411a66)

## 2.csrf
### a.什么是csrf？  
CSRF（Cross-site request forgery），也被称为：one click attack/session riding，中文名称：跨站请求伪造，缩写为：CSRF/XSRF。

### b.csrf攻击原理及过程
1. 用户C打开浏览器，访问受信任网站A，输入用户名和密码请求登录网站A；
2. 在用户信息通过验证后，网站A产生Cookie信息并返回给浏览器，此时用户登录网站A成功，可以正常发送请求到网站A；
3. 用户未退出网站A之前，在同一浏览器中，打开一个TAB页访问网站B；
4. 网站B接收到用户请求后，返回一些攻击性代码，并发出一个请求要求访问第三方站点A；
5. 浏览器在接收到这些攻击性代码后，根据网站B的请求，在用户不知情的情况下携带Cookie信息，向网站A发出请求。网站A并不知道该请求其实是由B发起的，所以会根据用户C的Cookie信息以C的权限处理该请求，导致来自网站B的恶意代码被执行。

### c.csrf漏洞检测
CSRFTester，CSRF Request Builder等工具

### d.csrf防御
1. 验证http Referer字段
优点：简单易行，普通开发者不需要担心csrf漏洞，只需要在最后给安全敏感的请求加上拦截器即可。
缺点：
  各浏览器对Referer的实现存在差异并不能保证浏览器本身没有安全漏洞。
  对于一些浏览器也可以被篡改Referer的值。

2. 在请求地址中添加token并验证
3. 在http请求头中自定义属性并验证

[参考](https://blog.csdn.net/weixin_40482816/article/details/114301717)


## 其它web安全
+ SQL注入、命令行注入是怎样进行的
+ DDoS攻击是什么？
+ 流量劫持包括哪些内容？

### 1.sql注入
服务端不直接拼接字符串
