---
title: css-7
group:
  title: css基础
  order: 7
---

### 1.你有去看过或者了解过css的标准文档吗?
当然，CSS 中可以研究的太多了，比如 css2 的层叠上下文极其诡异，比如 body 的默认值与普通 dom 的不同，flex-shrink 的计算规则等等，虽然看得很吃力，但对研究很有帮助。

### 2.为什么说不提倡用1px的小尺寸图片做背景平铺？
因为明明可以用background-color就能搞定的事情为什么要用图片？

### 3.解释下为什么css的reset不建议直接这么写：*{ margin:0; padding:0;}？
1. *为通配符，使用通配符，即全局范围遍历，耗费浏览器效率，增大负荷；
2. 会影响后面的设置的部分属性无效，例如：table设置的cellpadding，cellspacing。

### 4.你最希望css拥有什么样的特性？（目前没有的）
```css
:nth-letter 选择器
:nth-of-class 选择器
:has 选择器（似乎快了）

以及如果能实现这些我就不需要sass了：

ul {
  counter-reset: lis;
}

ul li{
  counter-increment: lis;
  /* counter 可以用计算 */
  width: calc(lis * 200px);
  /* attr 可以用于计算 */
  height: calc(attr(data-height) * 1rem);
  /* attr 可以用于字符串拼接 */
  background-image: url("/images/" attr(data-type) ".png");
}

```

### 5.如何给段落的首行缩进？
text-indent: 

适用于块元素
直至单位如下
+ 长度值：px em rem
+ 百分比：取决于包含块的width
+ 关键字： each-line：文本缩进会影响第一行，以及使用
+ 强制断行后的第一行；hanging：该值会对所有的行进行反转缩进：除了第一行之外的所有的行都会被缩进，看起来就像第一行设置了一个负的缩进值。
+ 全局值：inherit initial unset

### 6.如何使用CSS实现段落首字母或首字放大效果？
```css
::first-letter 伪元素选择器

p::first-letter {
  font-size: 2em;
  font-weight: bold;
}
```
### 7.border-radius:50%和border-radius:100%有什么区别？

这个实际上可以仔细区分一下，楼上的两个图具体来说应该是 border-top-left-radius 的50%和100%的区别，

假如我们直接设置border-radius: 100%; 或者为50%

我们会发现这两个图实际上没有区别（长方形也一样），所以我们需要了解一下border-radius值真正的含义，

它的值如果是百分比的话，就相当于盒子的宽度和高度的百分比，所以border-radius为50%时，对应的是边长的一半，所以正方形会显示圆形，当我们再增加至100%这个过程中他的显示结果都不会改变，这是因为W3c有对于’曲线重合‘这样的规范，当两个邻角的 半径和超出了总边长，浏览器会重新计算保证不会重合，所以建议使用border-radius:50%来避免浏览器进行不必要的计算.

### 8.举例说明伪类:focus-within的用法
类似于事件的冒泡机制，可以从获取焦点的元素一职冒泡到根元素上

### 9.请用css写一个扫码的加载动画图
```css
@Keyframes donut-spin {
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(360deg);
}
}
.donut {
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #7983ff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: donut-spin 1.2s linear infinite;
}
```

### 10.height和line-height的区别是什么呢？
+ height：元素content area的高度
+ line-height：元素中，多行文字基线的距离

### 11.手写一个使用css3旋转硬币的效果
```css
两种实现方式：1、animation+keyframes 2、transition：
//第一种实现方式
<style type="text/css"> 
.around{ 
  width:200px; 
  height:200px; 
  background:orange; /*圆形的话看不出效果，所以这里border-radius没有取50%*/ border-radius:40%; 
  transform:rotate(0deg); 
  animation:move 3s ease; } 
@Keyframes move { 
  0%{ transform:rotate(0deg); } 
  50%{ transform:rotate(360deg); } 
  100%{ transform:rotate(0deg); } 
} 
</style>

//第二种实现方式
<style type="text/css"> 
.around{ 
  width:200px; height:200px; 
  background:orange; /*圆形的话看不出效果，所以这里border-radius没有取50%*/ border-radius:40%; 
  transform:rotate(0deg); 
  transition:transform 3s linear; 
} 
.around:hover{ transform:rotate(360deg); } 
</style> 
```

### 12.使用css3做一个魔方旋转的效果
总的来说，用了一些 3D 效果的样式，
如 translate3d，rotate3d，perspective，transform-style: preserve-3d; 等

### 13.如果给一个元素设置background-color,它的颜色会填充哪些区域呢？
![](https://img-blog.csdnimg.cn/20210208174239160.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM5MjQ4OQ==,size_16,color_FFFFFF,t_70)


### 14.当全国哀悼日时，怎么让整个网站变成灰色呢？
```css
body{
  -webkit-filter: grayscale(1);
  filter: grayscale(1);
}

/* OR */

body{
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
```

### 15.怎样用纯CSS实现禁止鼠标点击事件？
pointer-events: none;
是css3新出现的属性，意思就是禁止鼠标点击事件，当元素中有这一属性时，链接、点击事件统统失效。

### 16.实现一个上下固定，中间自动填满的布局
利用flex布局，flex-direction:column 定义排列方向为竖排
header footer 定高，中间部分flex:1; 一样可以实现
需要注意的是body和container容器需要设置高度100%;

### 17.请写出:link、:visited、:hover、:active的执行顺序
+ :link: 未访问链接
+ :visited: 已访问的链接
+ :hover: 鼠标悬停
+ :active: 鼠标按下
+ :focus: 选中状态（鼠标点击、TAB键）

### 18.举例说明clear取值有哪些？
+ none 默认值。允许浮动元素出现在两侧。
+ left 在左侧不允许浮动元素。
+ right 在右侧不允许浮动元素。
+ both 在左右两侧均不允许浮动元素。
+ inherit 从父元素继承 clear 属性的值。

### 19.举例说明常用的cursor取值有哪些？
1. cursor: move; (移动)
2. cursor: pointer;(手型)
3. cursor: not-allowed;(禁用)

### 20.你有用过vw布局吗？和使用rem有什么区别？
+ vw/vh 是屏幕视图的百分比，
+ rem 是根据 html的font-size 来设置的相对值。

### 21.实现文本的竖向排版
+ writing-mode: vertical-lr;/从左向右 从右向左是 writing-mode: vertical-rl;/
+ writing-mode: tb-lr;/IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；/

### 22.怎么使图片宽度自适应呢？
百分比 vw padding:百分比

### 23.怎么让div中的图片和文字同时上下居中？
```html
<div>
  <img src="./"/>
 <label>文字内容</label>
</div>

<style>
 img {
    vertical-align: middle;
}
</style>

给 img 设置 vertical-align: middle; 并且 vertical-align 只对行内元素，还有表格内的单元格有效，对块级元素的垂直居中是没有任何效果的

```

### 24.举例说明:not()的使用场景有哪些
```css
/* 子级之间留 10px 空隙 */
.gap-right-10 > :not(:last-child) {
  margin-right: 10px;
}

/* 有数据时加上标题 */
.list-wrap:not(:empty):before {
  content: attr(data-title);
}

/* flex 容器中都不压缩宽度 */
.flex-row {
  display: flex;
  align-items: center;
  & > .grow { flex-grow: 1; }
  & > :not(.grow) { flex-shrink: 0 }
}
```

### 25.使用css写一个水平翻转文字的效果
+ letter-spacing: -2em;
+ box-reflect: below;

### 26.你有使用:valid和:invalid来校验表单吗？
很不好控制，拿必填来举例，:invalid 标红。  
初始时就红的，那 :focus:invalid 吧，blur 就不标了；  
刚 focus 就标红，不见得是设计想要的，:placeholder-shown 能解决一点。  
后来还是加上了一些 js，因为需求变化得比解决它的坑要快。

### 27. 举例说明attr()的使用场景
可以用于 tooltips, 可以用于多个内容文本替换，比如菜单效果, 存放 i18n 信息  

总的来说，是将一些文本存在 html 中，在 css 中可以被使用。

### 28.怎么使用纯css实现左右拉伸拖动？
核心属性
resize:horizontal

### 29.用css实现倒影的效果
box-reflect

### 30.使用overflow: scroll时不能平滑滚动怎样解决？
scroll-behavior: smooth;

### 31.请说下你对css对象模型(CSSOM)的理解
CSSOM 是一组允许 JavaScript 操作 CSS 的 API。它非常类似于 DOM，但是用于 CSS 而不是 HTML。它允许用户动态读取和修改 CSS 样式。






































