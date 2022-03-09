---
title: css-2
group:
  title: css基础
  order: 2
---

### 1.说下line-height三种赋值方式有何区别？

```css
div{
	line-height: 24px;
	line-height: 1.5;
	line-height: 1.5em;
	line-height: 150%;
}
```
line-height 可以有带单位及不带单位的写法

对于应用在单个元素上，这几种写法的效果都是一样的（除了 px 如 em、% 需要一些计算）。但由于 line-height 是可以被继承的，因此会影响内部子元素的 line-height。简单的可以总结为：

带有单位的 line-height 会被计算成 px 后继承。子元素的 line-height = 父元素的 line-height * font-size （如em，百分比。但是如果是 px 了就直接继承）

而不带单位的 line-height 被继承的是倍数，子元素的 line-height = 子元素的 font-size * 继承的倍数

### 2.使用flex实现三栏布局，两边固定，中间自适应
略

### 3.写出主流浏览器内核私有属性的css前缀
+ Chrome：Blink内核     -webkit-
+ Safari：WebKit内核    -webkit-
+ Firefox ：Gecko内核   -moz-
+ IE：Trident内核       -ms-
+ Opera：Presto内核     -o-

### 4.不使用border画出1px高的线，在不同浏览器的标准和怪异模式下都能保持效果一样
```html
<div style="width: 100%;height: 1px;"></div>
<hr size="1">
```

### 5.实现单行文本居中和多行文本左对齐并超出显示"…"
```css
.one {
  text-align: center;
}

.multi {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
```

### 6.写出你知道的css水平和垂直居中的方法？

### 7.怎么才能让图文不可复制？
```css
.className {
  -webkit-user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -khtml-user-select: none;
  user-select: none;
}
```

### 8.怎么让英文单词的首字母大写？
```
楼上用的没问题，学习嘛，那我就来扩展一下。

text-transform 属性控制文本的大小写，是CSS2.1的属性，兼容性问题不大。
属性值是关键字，有4+1种，这个1是实验性属性值。

/* Keyword values */
text-transform: capitalize;
text-transform: uppercase;
text-transform: lowercase;
text-transform: none;
text-transform: full-width;

capitalize
这个关键字强制每个单词的首字母转换为大写。

uppercase
这个关键字强制所有字符被转换为大写。

lowercase
这个关键字强制所有字符被转换为小写。

none
这个关键字阻止所有字符的大小写被转换。

full-width （实验性属性值）
这个关键字强制字符 — 主要是表意字符和拉丁文字 — 书写进一个方形里，并允许它们按照一般的东亚文字（比如中文或日文）对齐。

除了以上，还有一些基本上不会用到的默认值等，就不多说了。

/* Global values */
text-transform: inherit;
text-transform: initial;
text-transform: unset;

```


### 9.重置（初始化）css的作用是什么？
这是一个，还有就是视觉问题，浏览器默认样式会影响我们的设计还原，而且默认样式一般不够美观，满足不了定制化的视觉需求，达不到视觉产品的信息传达目标。


### 10.span与span之间有看不见的空白间隔是什么原因引起的？有什么解决办法？
可能是设置成了inline-block。

+ 第一种解决方案是，去掉span标签内的空白。
+ 第二种解决方案是，设置margin负值，但要根据字体调整，不方便大规模使用。

### 11.你知道的等高布局有多少种？
flex拉伸

display: flex;
align-items: stretch;

padding margin抵消 然后background-clip默认是border-box所以会在被抵消的位置依然显示背景 造成等高假象.
```
.box, .box2{
    float: left;
    width: 100px;
}
.box {
    background: #cccccc;
    height: 300px;
}
.box2 {
    background: #306eff;
    padding-bottom: 99999px;
    margin-bottom: -99999px;
}

```

### 12.说说你对媒体查询的理解
当年做响应式布局的时候用过媒介查询，media query。
包括现在有的时候为了兼容也会用到一些，查找对应范围使用不同的样式.

### 13.你是怎样抽离样式模块的？
webpack + extract-text-webpack-plugin插件吧？ 把样式文件单独打包出来。
webpack4 升级了插件为 mini-css-extract-plugin

### 14.你知道全屏滚动的原理是什么吗？它用到了CSS的哪些属性？
全屏滚动和轮播图类似，都是通过改变元素位置或者显示与隐藏来实现，配合JS的一些交互距离判断，实现类似原生滚动捕获的效果。这里全屏的话就需要将宽高都设置为窗口的大小，可以通过百分百实现。
关键CSS属性是父容器 overflow: hidden; 。

实现全屏滚动还可以简单的通过插件来实现，比如fullpage，很多大公司的页面都是用这个实现的，比如小米一些产品的官网。

### 15.假如设计稿使用了非标准的字体，你该如何去实现它？
协商解决, 如果是重要信息, 如logo等, 使用图片, iconfont.

### 16.列举CSS优化、提高性能的方法
1. 加载性能

+ 压缩CSS
+ 通过link方式加载，而不是@import
+ 复合属性其实分开写，执行效率更高，因为CSS最终也还是要去解析如 margin-left: left;

2. 选择器性能

+ 尽量少的使用嵌套，可以采用BEM的方式来解决命名冲突
+ 尽量少甚至是不使用标签选择器，这个性能实在是差，同样的还有*选择器
+ 利用继承，减少代码量

3. 渲染性能

+ 慎重使用高性能属性：浮动、定位；
+ 尽量减少页面重排、重绘；
+ css雪碧图
+ 自定义web字体，尽量少用
+ 尽量减少使用昂贵属性，如box-shadow/border-radius/filter/透明度/:nth-child等
+ 使用transform来变换而不是宽高等会造成重绘的属性


### 17.如何实现换肤功能？
css 换肤常见方案

是通过 less/sass/postcss 等css 预处理器，通过它们自身的变量用法，设置不同变量，生成不同的主题样式，但是这些样式都是会被打包成常量，我们只能在编译之前修改变量，打包出对应的css 文件。

而如今出现了 css var 。此种变量是可以通过 js 改变变量值的。 demo
一般的插件在编译 css 时会将变量打包成常量，但是 postcss 有一个插件 postcss-advanced-variables 是支持直接打包为 css 变量的。 这将意味着我们可以仅仅覆盖 css 变量，或者 js 修改变量值都能改变主题色。
这里介绍一个成熟的打包变量插件，postcss-ui-theme (一波软广🤣， 支持 sass 语法， bem 规范命令，resolve 静态资源等强大功能。是自己非常成熟的沉淀物)

<img src='https://img-blog.csdnimg.cn/20210214200059176.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM5MjQ4OQ==,size_16,color_FFFFFF,t_70' />

```css
/* 浏览器上显示： */
:root {
    --primary: cyan;
}

.itemB___3ka35 {
  color: cyan;
  color: var(--primary);
}
```

### 18.有用过Flex吗？简要说下你对它的了解

### 19.要是position跟display、overflow、float这些特性相互叠加后会怎么样？
display:none之后别的样式设置成什么都不管用了，dom元素不可见了。
position:absolute之后float应该就不起作用了

### 20.怎么使用自定义字体？有什么注意事项？
```css
@font-face {
  font-family: '自定义字体名称';
  src: url('字体文件名.eot'); /* IE9 Compat Modes /
  src: url('字体文件名.eot?#iefix') format('embedded-opentype'), / IE6-IE8 /
  url('字体文件名.woff') format('woff'), / Modern Browsers /
  url('字体文件名.ttf') format('truetype'), / Safari, Android, iOS /
  url('字体文件名.svg#字体文件名') format('svg'); / Legacy iOS */
  font-style: normal;
  font-weight: normal;
}
```

### 21.css3的:nth-child和:nth-of-type的区别是什么？
+ :nth-child(n) 选择器匹配属于其父元素的第 N 个子元素，不论元素的类型。
+ :nth-of-type(n) 选择器匹配属于父元素的特定类型的第 N 个子元素。
+ n 可以是数字、关键词或公式。

### 22.什么是视差滚动？如何实现视差滚动的效果？
什么是视差滚动：  
就是在同一视角下，鼠标或者页面滚动时，不同元素以不同的速率跟随滚动，产生生动的效果。

如何实现视差滚动：  
根据页面滚动高度的变化，JS相应调整不同元素的不同位移，常见的插件有
parallax.js

### 23.margin和padding使用的场景有哪些？
```css
实现自适应的等比例矩形效果：
div { padding: 50%; }
div { padding: 25% 50%; } //宽高比为 2:1 的矩形效果

实现头图高度天然等比例缩小效果
.box {
padding: 10% 50%;
position: relative;
}
.box > img {
position: absolute;
width: 100%; height: 100%;
left: 0; top: 0;
}

padding 属性和 background-clip 属性配合，可以在有限的标签下实现一些 CSS 图形绘制效果

margin 可以实现很多流体布局
margin 外部尺寸实现等高布局
实现垂直居中布局

from《css世界》

```

### 24.inline、block、inline-block这三个属性值有什么区别？
+ inline： 行内元素，元素不独占一行，不可以修改宽高
+ block： 块级元素，元素独占一行，可以修改宽高
+ inline-block： 行内块级元素，元素不独占一行，并且可以修改宽高

### 25.box-sizing常用的属性有哪些？分别有什么作用？
+ box-sizing常用的属性有 content-box 和 border-box。
+ content-box 盒子的宽度不包含 border和padding，border-box盒子的宽度包含border 和padding。

### 25.怎样把一个div居中？怎样把一个浮动元素居中？怎样把绝对定位的div居中？
```
主要用到:

text-alin: center;
margin: 0 auto;
position: relative | absolute; left: 50%;
vertical-align: middle;
transform: translate(-50%);
```

### 26.手动写动画最小时间间隔是多少，为什么？
一般浏览器的刷新频率为每秒60次，所以最小事件间隔为 1/60*1000 约 16.7ms

### 27.说说position的absolute和fixed共同与不同点分别是什么？
相同点：  
1. 都是用来给元素定位的属性，具有定位元素的一切特点（例如脱离文本流、不占据空间等等）；
2. 改变元素的呈现方式为display：block；

不同点：  
1. fixed的父元素永远是浏览器窗口，不会根据页面滚动而改变位置；absolute的父元素是可以设置的，他会永远跟随父元素的位置的改变而改变。

### 28.举例说明css中颜色的表示方法有几种
1. 颜色单词: blue / lightblue / skyblue / transparent(透明)
2. rgb(0-255, 0-255, 0-255) / rgba(0-255, 0-255, 0-255, 0-1)
3. hsl色相: hsl(色调，饱和度，明度) hsla( 色调，饱和度，亮度，不透明度 ) (兼容性)
4. 十六进制: #000000- #FFFFFF ( #000 - #fff ) ( 0-9 a-f | [A-F] )

### 29.元素竖向的百分比设置是相对容器的高度吗？
父级非 auto 的 height 时，子级百分比的 height 才有效。
即使父级有 min-height 或其他子级撑起的高度，子级百分比 height 依旧无效。

### 30.如何消除transition闪屏？
```css
.css { 
  -webkit-transform-style: preserve-3d; 
  -webkit-backface-visibility: hidden; 
  -webkit-perspective: 1000; 
} 
```














