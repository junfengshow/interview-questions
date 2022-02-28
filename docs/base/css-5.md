---
title: css-5
group:
  title: css基础
  order: 5
---

### 1.说说你对css的will-change属性的理解，它有什么作用呢？
告诉浏览器,这个元素的某些属性可能会频繁变动触发回流，要求浏览器给予资源进行优化，一般浏览器会给这个元素单独生成一个图层渲染,gpu加速等提前优化手段.

不应过度使用这个属性,这属性只是性能出现问题的最后手段

### 2. 你有了解css计数器（序列数字字符自动递增）吗？如何通过css的content属性实现呢？
```css
counter-reset: 设置计数器 
counter-reset: count 0 /* 计数器从1开始, 默认是0 */
counter-increment: 递增数值 
counter-increment: count 2 
/* 用于count 每次递增2 */

<ul>
  <li>Item</li>
  <li>Item</li>
  <ul>
    <li>Item</li>
    <li>Item</li>
  </ul>
</ul>

ul {
  counter-reset: count;
}
li::before {
  counter-increment: count;
  content: counters(count, '-')'.';
}

1.Item
2.Item
    2-1.Item
    2-2.Item

```

### 3. z-index有时不起作用的原因是什么？怎么解决？
```
根元素 (HTML),
z-index 值不为 "auto"的 绝对/相对定位，
一个 z-index 值不为 "auto"的 flex 项目 (flex item)，即：父元素 display: flex|inline-flex，
opacity 属性值小于 1 的元素（参考 the specification for opacity），
transform 属性值不为 "none"的元素，
mix-blend-mode 属性值不为 "normal"的元素，
filter值不为“none”的元素，
perspective值不为“none”的元素，
isolation 属性被设置为 "isolate"的元素，
position: fixed
在 will-change 中指定了任意 CSS 属性，即便你没有直接指定这些属性的值
-webkit-overflow-scrolling 属性被设置 "touch"的元素
```

### 4.说下background-color:transparent和opacity:0的区别是什么？

background-color:transparent: 只是把背景色设置为透明，并不会影响元素中的内容。可以利用 transparent 进行三角、扇形的设置。  
opacity: 0: 会影响整个元素，元素的内容也会被隐去。

### 5.CSS3中的transition是否可以过渡opacity和display？
transition过渡display是有一个前提条件:  
浏览器渲染是在每一帧的最后，每一帧都会执行以下操作:  

    js执行
    2.style加持
    3.layout
    4.paint
    5.composite

在js执行过程中， 遇到DOM操作，并不会立即渲染，而是推入到队列中，等待UI Render的执行一次性渲染，这是浏览器的优化手段  
接下来是重点：  
在获取DOM的布局信息时，会强制清空队列进行渲染，此时transition是可以过渡display的

### 6.说说你对字母"X"在CSS中有什么作用？
可以用作关闭按钮叉叉
X的底部与文本对齐的基线位置相同

### 7.word-wrap、word-break和white-space有什么区别？
```
1.word-wrap
    标明是否允许浏览器再单词内进行断句
    normal 只允许在断字点换行 默认值
    break-word 在长单词或这url地址内部进行换行

2.word-break
    标明怎么样进行单词内的断句
    normal 默认值
    break-all 允许在单词内换行
    keep-all 只能在半角空格或字符串处换行

3.white-space
属性设置如何处理元素内的空白
normal 默认值
pre 空包会被浏览器保存
nowrap 文本不会换行，在同一行显示，知道遇到br标签为止
pre-wrap 保留空白序列，会正常的换行
pre-line 合并空白序列，会保留换行符
inherit 应该从父元素继承white-space属性的值
```

### 8.css怎样使每个字符宽度一样？
控制字符间距：letter-spacing: 1em; [em,px,rem]

### 9.如何自定义radio按钮的样式
选择器 input[type=“radio”]

现在几乎不用原生的radio，一是原生样式改成设计稿的样子太浪费时间，二是不同浏览器对于原生radio的展示还不一样。

基于状态驱动的思想，用自定义按钮或其他元素来替代radio，很容易实现，也能保证浏览器兼容性。

### 10.说下你对background-size的理解，它有什么运用场景？
设置背景图的大小，一般用来设置背景图的大小。

### 11.移动页面底部工具条有3个图标，如何平分？在设置边框后最后一个图标掉下去了怎么办？
flex-wrap nowrap, 一般flex默认就是nowrap

white-space:nowrap是针对行内元素设置的,默认为normal


### 12.请问background-attachmentn属性有什么用途？
background-attachment: fixed / scroll / local： 
设置背景图像是否固定或者随着页面的其余部分滚动。

+ fixed: 背景图片不会随着页面的滚动而滚动。
+ scroll: 背景图片随着页面的滚动而滚动，这是默认的。
+ local: 背景图片会随着元素内容的滚动而滚动。
+ inherit: 指定 background-attachment 的设置应该从父元素继承。

### 13.什么是脱离文档流？有什么办法可以让元素脱离标准的文档流？
文档流就是指元素在 HTML 文档中位置顺序决定排布的过程。HTML 元素有块级元素和行内元素，块级元素一个占一行，行内元素在一行内依次排布。整体元素从上到下的排布顺序如同瀑布一样。

脱离文档流即脱离了排布的规则。可以使用 float、absolute/fixed 来脱离文档流。脱离文档流的元素不受文档流内元素的影响。

### 14.说说响应式设计(responsive design)和自适应设计(adaptive design)的区别？
响应式是通过视口分辨率识别不同客户端展现不同的布局和内容，一套代码。

自适应是通过识别时候分辨率针对不同设备返回不同的页面，多套代码。

### 15.请说说在什么时候用transition？什么时候使用animation？
transition 相当于是个过度动画，需要又过度效果才会触发。一般用来做元素的放大缩小、平移旋转等简单的操作。

transition 只执行一次，当需要执行多次时，一般会利用 :hover 等时机或者使用 javaScript 改变类名进行控制。

animation 需要自己设定关键帧，可以做相对复杂的操作，比如延迟、循环播放等。一般在需要比较复杂的情况才会使用 animation。

### 16.请说说CSS3实现文本效果的属性有哪些？
+ text-shadow:文字阴影效果
+ word-wrap:换行设置

### 17.如何使用CSS的多列布局？
```css
div {
    -webkit-column-count: 3; /* Chrome, Safari, Opera */
    -moz-column-count: 3; /* Firefox */
    column-count: 3;
}
```

### 18.举例说明在css3中怎么实现背景裁剪？
```
background-clip:
border-box(默认,背景延伸至边框外沿,但是在边框的下层)
padding-box(背景延伸至padding的外沿)
content-box(背景延伸至内容的外沿)
text(背景剪裁成文字的样式)
```

### 19.如何做图片预览，如何放大一个图片？
图片不跨域的话用 canvas 来 drawImage 放大裁剪也可以。

### 20.如何写高效的CSS？

### 21.css中的border:none和border:0px有什么区别？
none是没有边框.
0px是边框的宽度为0px

### 22.外边距重叠是什么？重叠的结果是什么？怎么防止外边距重叠？

```
外边距重叠是什么？
外边距重叠指的是，当两个垂直外边距相遇时，它们将形成一个外边距。 重叠后的外边距的高度等于两个发生重叠的外边距的高度中的较大者。
发生的条件：属于同一个BFC的两个相邻元素上下margin会重叠。
重叠的结果是什么？
举例1：当一个元素出现在另一个元素上面时，重叠后的外边距的高度等于两个发生重叠的外边距的高度中的较大者。
举例2： 当一个元素包含在另一个元素中时（假设没有内边距或边框把外边距分隔开），它们的上和/或下外边距也会发生重叠。如果这个外边距遇到另一个元素的外边距，它还会发生重叠。
怎么防止外边距重叠？

浮动元素、inline-block 元素、绝对定位元素的 margin 不会和垂直方向上其他元素的 margin 折叠（注意这里指的是上下相邻的元素）
外层元素padding代替
内层元素透明边框 border:1px solid transparent;
用同一方向的margin，都设置为top或者bottom。
```

### 23.用css怎么实现两端对齐？
flex布局align-items

### 24.判断第一行和第二行的颜色分别是什么？并解释为什么？
```css
<style>
.red {color:red;}
.green {color:green;}
</style>

<div class="red green">第一行：颜色是什么？</div>
<div class="green red">第二行：颜色是什么？</div>

```
结果两行都是绿色的

### 25.举例说明你知道的css技巧有哪些？
```css
/* 等比例容器 */
.ratio { position: relative; display: block; }
.ratio:before { content: ''; padding-top: 100%; float: left; }
.ratio::after { content: ''; display: block; clear: both; }

/* 非表单元素也适用的 disabled */
.disabled {
  pointer-events: none;
  user-select: none;
  &.gray { filter: grayscale(1); }
}

/* 点击 label 触发隐藏的 file 表单 */
label.form-file {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  vertical-align: middle;
  & > input[type="file"] { position: absolute; left: -999em; }
}

/* 子元素之间轻松 10px 空隙 */
.gap-right-10 > :not(:last-child) {
  margin-right: 10px;
}
```

### 26.你有用过clip-path吗？说说你对它的理解和它都有哪些运用场景？

### 27.会引起Reflow和Repaint的操作有哪些？
页面布局和几何信息(比如：增加删除dom，改变元素位置或者尺寸等)发生改变时，会触发Reflow。  
给dom节点添加样式，会触发Repaint。  
触发Reflow一定会引起Repaint，触发Repaint的情况不一定引起Reflow。  

### 28.css的linear-gradient有什么作用呢？
```css
概念：线性渐变,向下/向上/向左/向右/对角方向,为了创建一个线性渐变，你必须至少定义两种颜色结点。颜色结点即你想要呈现平稳过渡的颜色。同时，你也可以设置一个起点和一个方向（或一个角度）

/* 从上到下 */
#grad {
  background: linear-gradient(red, blue); 
}
/* 从左到右 */
#grad {
  background: linear-gradient(to right, red , blue); /* 标准的语法 */
}
/* 对角 */
#grad {
  background: linear-gradient(to right, red , blue); /* 标准的语法 */
}
/* 使用角度 */
#grad {
  background: linear-gradient(180deg, red, blue); /* 标准的语法 */
}

对角渐变是：
background: linear-gradient(to bottom right, red, blue);
```

### 29.怎么去掉点击a链接或者图片出现的边框？
```css
a{text-decoration:none}
img{border:0 none}
```

### 30.你了解css3的currentColor吗？举例说明它的作用是什么？
```css
currentColor是 color 属性的值，具体意思是指：currentColor关键字的使用值是 color 属性值的计算值。如果currentColor关键字被应用在 color 属性自身，则相当于是 color: inherit。
它的作用在我看来是指定默认color的值，比如

.active{
  color:#C60;
  border:thin  solid;
}
.active{
  color:#C60;
  border:thin  solid currentColor;
}

上述代码中的currentColor代替了#C60
```

### 31.css怎么更改表单的单选框或下拉框的默认样式？
```
下拉框
    select可以通过appearance:none去除默认样式，然后进行自定义，但是option标签不能通过CSS自定义，所以最佳方案是自定义标签重写select
单选框
    隐藏input标签，自定义标签通过checked伪类进行实现
```


















