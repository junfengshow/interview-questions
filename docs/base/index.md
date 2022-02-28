---
title: Html、http、web综合
order: 1
footer: false
---

## 8.介绍一下你对浏览器内核的理解？
主要分成两部分：渲染引擎(layout engineer或Rendering Engine)和JS引擎

渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。
浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核.

JS引擎则：解析和执行javascript来实现网页的动态效果

最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎

常见的浏览器内核有哪些

+ Trident内核：IE,MaxThon,TT,The World,360,搜狗浏览器等。[又称MSHTML]
+ Gecko内核：Netscape6及以上版本，FF,MozillaSuite/SeaMonkey等
+ Presto内核：Opera7及以上。 [Opera内核原为：Presto，现为：Blink;]
+ Webkit内核：Safari,Chrome等。 [ Chrome的Blink（WebKit的分支）] 

## 12.cookies、sessionStorage、localStorage的区别？
cookie是网站为了标示用户身份而储存在用户本地终端（Client Side）上的数据（通常经过加密）

cookie数据始终在同源的http请求中携带（即使不需要），记会在浏览器和服务器间来回传递

sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存

存储大小：

cookie数据大小不能超过4k
sessionStorage和localStorage虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大
有期时间：

localStorage 存储持久数据，浏览器关闭后数据不丢失除非主动删除数据
sessionStorage 数据在当前浏览器窗口关闭后自动删除
cookie 设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭

## 39.请你谈谈Cookie的弊端
cookie虽然在持久保存客户端数据提供了方便，分担了服务器存储的负担，但还是有很多局限性的

每个特定的域名下最多生成20个cookie
IE6或更低版本最多20个cookie
IE7和之后的版本最后可以有50个cookie
Firefox最多50个cookie
chrome和Safari没有做硬性限制
IE 和 Opera 会清理近期最少使用的 cookie，Firefox 会随机清理 cookie
cookie 的最大大约为 4096 字节，为了兼容性，一般设置不超过 4095 字节
如果 cookie 被人拦截了，就可以取得所有的 session 信息

