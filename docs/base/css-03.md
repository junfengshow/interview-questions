---
title: css-3
group:
  title: css基础
  order: 3
---

### 1.说说你对jpg、png、gif的理解，分别在什么场景下使用？有使用过webp吗？
```
jpg, 色彩复杂图片
png, 色彩简单图片
gif, 动图, 或者色彩极简的icon等
webp, 判断能使用webp的浏览器就是用webp
```


### 2.请说说*{box-sizing: border-box;}的作用及好处有哪些？
还是喜欢用默认的content-box 不考虑老版ie 比较通配符的性能较差 第三方的UI库的盒模型也都是标准盒模型

### 3.你有使用过哪些栅格系统？都有什么区别呢？

```
bootstrap3 float完成的栅格
bootstrap4 flex完成的栅格
```

### 4.你对响应式设计的理解是什么？知道它基本的原理是吗？要想兼容低版本的IE怎么做呢？
```
理解：在不同系统，不同设备，不同尺寸的界面，有良好的用户体验，舒适的阅读体验，交互体验。
原理：根据不同设备尺寸，浏览器自动调整或通过样式调整，来保证用户体验。
兼容：Respond.js
```
### 5.怎么改变选中文本的文字颜色和背景色？
```css
::selection {
  background-color: #222;
  color: white;
}
```

### 6.在实际编写css中你有遇到过哪些浏览器兼容性的问题？怎么解决的？
```
必用的三个工具
PostCSS
Autoprefixer
Browserslist
```

### 7.说说你对!important的理解，一般在哪些场景使用？
```
!important 可以让样式的特指度最高，覆盖任何样式，而且本身不可被覆盖。
一般场景就是用来强制覆盖其他样式，用的比较少，不建议使用，因为别人没法覆盖这个样式，维护性比较。
```

### 8.请你解释下什么是浮动和它的工作原理是什么？同时浮动会引起什么问题？
```
什么是浮动：我们在做布局的时候用到的一种技术，通过浮动可以让元素左右浮动，然后通过margin调整位置
工作原理：使元素脱离文档流，让元素可以左右浮动，直到遇到另一个浮动元素的边缘才停止。
带来的问题：浮动元素会造成父级元素无法自动获取高度，导致父级塌陷，布局错乱。
```

### 9.请问display:inline-block在什么时候会显示间隙？
```
解决方法
1、全局font-size设置成0
2、取消两个div标签之间的空格
```

### 10.用CSS画出一个任意角度的扇形，可以写多种实现的方法
先画一个圆,外加两个绝对定位的半圆
扇形可以通过两个半圆作为遮罩旋转来露出相应的角度实现
这只能切出180°以内的扇形
超过180°的扇形,就把圆作为底色,两个遮罩作为扇形的组成部分

### 11. 遇到overflow: scroll不能平滑滚动怎么解决？
ipone 上解决方法是这样的，
-webkit-overflow-scrolling: touch;

### 12.说说你对BEM规范的理解，同时举例说明常见的CSS规范有哪些？
```
BEM是比较好的CSS规范，应该也是得到大家认可最多的CSS规范
OAMC是WeUI根据BEM改造来的
object-area-meta-control

还有OOCSS，面向对象的CSS书写规范。
不管哪种，解决问题，同时团队大家共同维护遵守的，才是好的规范和执行。
```

### 13.写例子说明如何强制（自动）中、英文换行与不换行
```
word-break: break-all; 只对英文起作用，以字母作为换行依据
word-wrap: break-word; 只对英文起作用，以单词作为换行依据
white-space: pre-wrap; 只对中文起作用，强制换行
white-space: nowrap; 强制不换行，都起作用
white-space: nowrap; overflow:hidden; text-overflow:ellipsis;不换行，超出部分隐藏且以省略号形式出现（部分浏览器支持）
```

### 14.举例说明css的基本语句构成是什么呢？
```
一个选择器（例如：BODY，P等）和写在花括号里的声明，这些声明通常是由几组用分号分隔的属性和值组成。
body{
  color:red;
}
```

### 15.写出你遇到过IE6/7/8/9的BUG及解决方法
```
兼容性问题
1.IE6margin双边距问题
2.IE67 li间隙问题
3.图片间隙问题——vertical-align：top
4.ie6下高度小于19px处理成19px；font-size:0;或者overflow：hidden
5.ie8以下滤镜问题，filter:alpha(opacity=50)
6.IE6 position:fixed 不兼容，fixed定位ie6兼容，js处理，通过获取滚动高度，赋值给需要固定的元素，设置绝对定位，设置top
7.ie6下父级的overflow：hidden是保不住子级的相对定位的（relative）-解决，给父级加定位
8.ie6下，绝对定位的父级，宽高是奇数的话，定位偏移会出现1px的偏差
9.ie6下，内容会撑开设置好的宽度
10.ie6，7 3px问题
11.<p><h3></h3></p>会把p元素分割成两个，原因，嵌套的规范性，p需要嵌套inline元素
12.在ie6下，1px dotted #000 不兼容。精度问题，可以用背景平铺
13.ie6下margin传递需要触发haslayout，父级有边框时，子元素margin值消失，解决办法，触发父级haslayout
14.ie6下当一行子元素占有的宽度之和与父级的宽度相差超过3px或者有不满行状态的时候，最后一行子元素的下margin就会失效
15.ie6下的文字溢出bug 条件1，子元素的宽度和父级的宽度相差小于3px的时候，2，两个浮动元素中间有注释或内联元素——解决办法：用div吧注释或内联元素包裹起来
16.ie6下，当浮动元素和绝对定位元素是并列关系的时候，绝对定位会消失，解决办法：给定位元素外面包裹div
17.ie6，7下，输入类型的表单控件上下各有1px的间隙——解决办法：给input加浮动
18.ie6，7下，输入类型的表单控件加border：none无效，还是会出现边框——解决办法：1，给border：0；2，重置input的背景
19.ie6，7下，输入类型的表单控件输入文字的时候，背景图片会跟随移动——解决办法：把背景加给父级
20.处理ie6 png图片兼容问题js插件，DD_belatedPNG.js,也可以用CSS滤镜处理
a.css处理
b.微软behavior扩展，下载iepngfix.htc
c.js插件
21.css hack \9——IE10之前的浏览器解析，+，*——IE7包括IE7之前的浏览器解析， _ ——IE6包括IE6之前的IE浏览器
22.important兼容问题，在IE6下，在important后面加一条同样的样式，会破坏important优先级作用，按照默认的优先级顺序来走
23.IE6 margin负值不兼容，处理，只要position：relative；这个解决方案在圣杯布局中有出现。圣杯布局，可以用position：absolute；来定位

```

### 16.IE(6/7/8/9/10/11/Edge)下的hack写法分别有哪些？
```
IE9以及<IE9: \9;
IE8以及>IE8: \0;
3.IE7以及<IE7: *;
4.IE6:*或_;
5.edge不清楚;
```

### 17.font-style的属性有Italic和oblique，两者有什么区别呢
italic和oblique都是向右倾斜的文字, 但区别在于Italic是指斜体字，而Oblique是倾斜的文字，对于没有斜体的字体应该使用Oblique属性值来实现倾斜的文字效果.

### 18.怎么让body高度自适应屏幕？为什么？
为何只设置body{height：100%}不行？
height：100%是相对于父元素来说的，如果只设置body的高度属性，由于其父元素是html高度未设置，且并非浏览器窗口高度，所以只设置body为100%是不能达到效果的，必须html，body都设置100%。而body{height: 100vh}直接把高度设置成了视口高度，与html大小无关，所以只在body设置vh是可行的。


### 19.display有哪些值？分别说明他们的作用是什么？
```
display:block/inline-block 给元素转块/转行内块
display:inline 把元素转成内联元素（我很少用到）
display:none让元素消失，不显示
display:flex弹性布局
```

### 20.写出几个初始化CSS的样式，并解释说明为什么要这样写
```
padding:0;
margin:0;
为了解决各个浏览器显示不一样的问题
```

### 21.说说你对CSS样式覆盖规则的理解
1. 选择器的权重覆盖；
2. 相同选择器的顺序覆盖；
3. 行内样式 > 内联样式 > 外联样式

### 22.CSS的overflow属性定义溢出元素内容区的内容会如何处理呢
```
visible（默认值）：溢出的内容会照常显示在元素内容区之外；
hidden：溢出的内容会被裁剪；
scroll：溢出的内容会出现在滚动区，通过滚动条滚动可以看到；
auto：当内容溢出时表现同scroll；
```

### 23.CSS的伪类和伪对象有什么不同？
伪类是给当前选中节点添加新样式，
伪对象是给当前选中节点添加伪元素。
伪类选择器使用：，伪对象选择器使用：：，因为兼容旧版，所以伪对象使用：也能解析。

### 24.移动端的布局用过媒体查询吗？写出例子看看
```css
@media [type] and [condition] … not [condition] {
    …
}
@media [condition] and/or/not [condition] … {
    …
}

其中：

type = "all" | "print" | "screen" | "speech"
condition = equality | comparison
equality = name ":" value
comparison = name ("<"|">")? "="? value
name = <CSS property name>
value = <CSS property value>

```

### 25.写出div在不固定高度的情况下水平垂直居中的方法？
```css
 * {
  padding: 0;
  margin: 0;
}
/* flex居中 */
.tith1 {
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
}

/* table居中 */
.tith2 {
 text-align: center;
 width: 100%;
 display: table;
 background: blue;
}
.tith2 > span {
  display: table-cell;
  vertical-align: middle;
}
```

### 26.当一个元素被设置为浮动后，它的display值变为什么呢？
```
一个元素被设为绝对定位或者浮动后，其display计算值就变为了block，尽管其表现形式和inline-block类似——包裹内部元素且不超出包含块的特性。按照如下方式在控制台尝试可验证：
var span = document.createElement('span');
document.body.appendChild(span);
console.log('1.' + window.getComputedStyle(span).display);
span.style.float = 'left';
console.log('2.' + window.getComputedStyle(span).display);
输出：
1.inline
2.block
```

### 27.如何更改placeholder的字体颜色和大小？
```html
 <style>
    /* Chrome浏览器 */
    input::-webkit-input-placeholder {
      color: red;
    }

    /* 火狐浏览器 */
    input::-moz-placeholder {
      color: red;
    }

    /* IE */
    input:-ms-input-placeholder {
      color: red;
    }
  </style>
<body>
  <input type="text" placeholder="你好">
</body>

```

### 28.移动端微信页面有哪些兼容性问题及解决方案是什么？
```
1.rem方案通过reset js进行适配
2.vw 方案 搭配px to viewport进行适配
```

### 29.你对视网膜(Retina)分辨率有了解吗？有没有在实际中使用过？

Retina分辨率指的是屏幕的物理分辨率达到了使得人眼难以看到单个物理像素；
具体应用应该就是dpr > 1的屏幕适配，需要根据不同dpr给出合适尺寸的图片；

### 30.说说你对前端二倍图的理解？移动端使用二倍图比一倍图有什么好处？
二倍图是指单位面积下设备像素与css像素个数之比为 4 的位图。

移动端使用二倍图可以在Retina屏幕下保真展示。


### 31.行内css和important哪个优先级高？
+ !important 将覆盖行内css
+ css优先级：行内css > id选择器(#)>伪类(:)>属性选择器([])>类选择器(.) > 类型选择器(div p a等) > 通用选择器(*)

### 32.如何让大小不同的图片等比缩放不变形显示在固定大小的div里？写个例子
图片等比缩放 img{ object-fit: cover/contain;}

div宽高比例固定，跟随屏幕变化而变化，利用padding垂直方向的属性来实现

### 33.你是如何规划响应式布局的？
```
从项目角度来讲，
PC 和 Mobile 是一个项目还是两个项目；

从方法流派来讲，
有栅栏布局，固定 viewport，使用 rem/pt/vw 单位，使用定位百分比，修改为 rem/vw 单位，五种；

从文件结构来讲，
是独立为响应布局专用 css 文件，还是跟随组件一起；

其他细节，
用 flex-grow 的地方，用 % 的地方，用 em 的地方
```








