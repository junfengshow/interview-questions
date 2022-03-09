---
title: css-8
group:
  title: css基础
  order: 8
---

### 1.说出至少十条你理解的css规范
```
命名规范（连字符-分隔的字符串）
文件宽度限制（每行80个字符）
加注释
编写选择器应有助于重用
尽量不要加 !important
避免使用CSS表达式
选择<link> 舍弃 @import
避免使用滤镜（IE 专有的 AlphaImageLoader 滤镜）
把样式表放在顶部 / 把CSS放在外部文件
压缩CSS
```

### 2.写一个动画，向上匀速移动100px，向下以1.5倍速度移动200px，一直反复循环
```css
  .animation-block {
        width: 50px;
        height: 50px;
        background: red;
        margin-top: 200px;
        animation: up 1s linear, down 1.5s linear 1s;
    }

    @keyframes up {
        0% {
            transform: translateY(0px);
        }

        50% {
            transform: translateY(-100px);
        }

        100% {
            transform: translateY(0px);
        }
    }

    @keyframes down {
        0% {
            transform: translateY(0px);
        }

        50% {
            transform: translateY(100px);
        }

        100% {
            transform: translateY(0px);
        }
    }

<div class="animation-block"></div>


var box = document.querySelector('.animation-block');
var i = 0
box.addEventListener("webkitAnimationEnd", function() {  
    i++
    if (i == 2) {
        i = 0
        box.classList.remove('animation-block');
        setTimeout(function() {
            box.classList.add('animation-block');
        }, 0)
    }
}, false);

```

### 3.在css中为什么说不建议使用@import？

@import 属于 CSS，所以导入语句应写在 CSS 中，要注意的是导入语句应写在样式表的开头，否则无法正确导入外部文件；

@import 是 CSS2.1 才出现的概念，所以如果浏览器版本较低，无法正确导入外部样式文件；

当 HTML 文件被加载时，link 引用的文件会同时被加载，而 @import 引用的文件则会等页面全部下载完毕再被加载；

### 4.当使用opacity时会使得元素的子元素也透明，此时不想要子元素也跟着透明怎么办？
当父元素使用opacity时，子元素也会继承该透明度，即使重新设置透明度也不行。
要么是放弃使用opacity，要么是放弃使用父子关系。

### 5.请问触发hasLayout的后果是什么？
继承父元素的布局。

### 6.css中兼容ie浏览器的前缀是什么
```
-webkit- 谷歌
-moz- 火狐
-o- opera
-ms- ie
```

### 7.css中class和id选择器有什么区别？
```
id 在部分浏览器的 js 中会直接生成同名变量；
id 的唯一性，获取该 id 的 dom 时，会取同名 id 的前者；
id 层叠权重非常高，1000 个 class 也覆盖不了 id 的样式；
class 可以用空格给同个元素设置多个 class，id 用空格会让 id 失效；
id 可以和链接锚点一起玩耍。
```

### 8.移动端页面不满一屏时如何实现满屏背景？
```css
body {
  min-height: 100vh;
}
```

### 9.写一个高度从0到auto的transition动画

### 10.如何设置背景图片不随着文本内容的滚动而滚动？
直接对div设置background

### 11.如何使用CSS3的属性设置模拟边框跟border效果一样？
```css
.box {
  width: 200px;
  height: 200px;
  background-color: #000;
  position: relative;
}
.box:after {
  content: '';
  width: 204px;
  height: 204px;
  background-color: red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
}
```

### 12.怎么IE6下在使用margin:0 auto;无法使其居中？
浏览器解析的问题，IE6下需要对居中的元素设置text-align:center属性使其margin:0 auto;生效。

### 13.使用css实现彩虹的效果

### 14.css中padding和margin是相对于父元素还是子元素呢？
padding就是往自己身体里塞东西（盒子里面），margin就是穿衣服（盒子外面）。

==> padding相对于子元素，margin相对于父元素

### 15.你有使用过vmax和vmin吗？说说你对它们的理解
vmax和vmin都是相对于窗口大小的长度单位。

100vmax相当于100%当前窗口长或者宽的长度，取其中最大值，vmin反之。

如果css函数max()和min()普及后，100vmax相当于max(100vw, 100vh)

个人最常用的是vmin，可以在确保在保持宽高比的情况下，不论窗口如何缩放都可以不让元素超出窗口范围。

### 16.解释下css3的flexbox（弹性盒布局模型），以及它应用场景有哪些？
手机端中比较常用的三段式布局, 头尾固定高度 中间自适应 它可以修改父元素下所有子元素的位置 和排序方式 相对于浮动 更加强大 要注意的是指定flex之后,子元素的float、clear和vertical-align属性将失效

### 17.使用rem布局时怎样合理设置根标签字体大小？
UI出2倍稿，然后用js计算当前设备和UI设计稿之间的比例关系，通过resize实时计算根标签字体大小，即可。

### 18.使用rem时应该注意什么？
```
看了下 绝对单位 和 相对单位。

em 是相对元素本身的 font-size 的相对单位，比如元素本身的 font-size 是 14px，那么 1.2em = 1.2 * 14px = 16.8px。
注意，是相对元素本身的 font-size，会随着元素的 font-size 的改变而改变。

rem 是 root em 的缩写，相对根元素的 font-size 相对单位，比如根元素的 font-size 是 
14px，那么 1.2rem = 1.2 * 14px = 16.8px。注意，是相对根元素的 font-size，不论元素处
于什么位置，乘法的基数都是 14px(根元素的 font-size)。

em 一半用于设置元素的 padding, margin, border-radius 等。
rem 一半用于设置元素的 font-size。
px 一半用于设置 border。

如果用 em 设置 font-size 很容易会出现意想不到的问题。比如嵌套的 div。

// css
div {
  font-size: 0.8em;
}

<!--html-->
<div>
div1
<div>div2</div>
</div>

上面的代码，假设根元素用的是默认值 16px，那么第一个 div 的字体是 0.8 * 16px = 12.8px，
第二个 div 的字体会先继承第一个 div 的 font-size = 12.8px，然后再乘以 0.8，0.8 * 12.8px = 10.24px，
就会导致两个 div 的字体不一样大。

如果使用的是 rem，那么基数都是 16px，两个 div 的大小都是 12.8px。

```

### 19.当页面采用rem布局时，如何解决用户设置字体大小造成的页面布局错位？
禁止用户缩放页面

### 20.使用rem的优缺点是什么？和使用百分比有什么区别？
rem在处理小数的时候会有误差，百分比要按照父级的尺寸去计算，不灵活

### 21.rem是如何实现自适应布局的？
```
其大小与设置的html根大小相对
通过js获取当前页面的宽度，动态的调整
html{
  font-size: 5px;
}
来改变整个页面对应的字体大小

```

### 22.在rem下如何实现1像素？
先用px开发，最后把px转换成rem

### 23.你是如何压缩字体的？
```
压缩字体文件么，有研究过，平时用 font-spider。
webpack 集成没怎么实践过，还只知道 url-loader。

有三种不同的压缩处理策略的，

自己决定压缩打包哪些文字，如 FontZip，iconFont
自动检测要压缩打包哪些文字，如 font-spider
动态生成本页有哪些文字的文件，如 有字库
forever-z-133/blogs#3
另外值得一提的是字体分包是真的棒，
比如字体 A 中包含 大 字，字体 B 中包含 佬字，然后用 font-family: A B 是可行的。
比如压缩后还有 1M 那么大，就可以拆为常见的 6000 个文字，和异步加载的不常用文字。
```

### 24.如何使用CSS绘制一个汉堡式菜单
```css
比较常见的两种方法：

利用元素自身、::before和::after伪元素绘制3个长宽一致的矩形，然后设定其y偏移值。
利用上下border和自身元素内容绘制：
.burger {
	--width: 20px;
	--thickness: 4px;
	--color: black;
	
	display: inline-block;
	width: var(--width);
	height: var(--thickness);
	background-color: var(--color);
	background-clip: content-box;
	border-top: solid var(--thickness) var(--color);
	border-bottom: solid var(--thickness) var(--color);
	padding-top: var(--thickness);
	padding-bottom: var(--thickness);
}
```

### 25.头部设置meta也可以做到自适应为啥还要用rem？
媒体查询如果需要适应的情况比较多 就得写多个条件的代码 代码太多太繁琐 rem只用判断是几倍图 就可以做出调整.

### 26.解释下什么是PPI和DP？
```
PPI（pixel per inch）：像素密度，1英寸屏幕上显示的像素量。值越高，屏幕越细腻。
DP（Density-independent pixel）：安卓开发用的长度单位。
1dp 等于屏幕像素密度为 160ppi 时 1px 的长度，因此 dp 在整个系统大小是固定的。
公式：1dp=（屏幕ppi / 160）px。
```

### 27.如何修改美化radio、checkbox的默认样式？
利用after伪元素自定义radio或者checkbox
或是利用图片进行样式修改

### 28.说说display:none和visibility:hidden的区别
+ display:none dom对象不渲染。
+ visibility:hidden 隐藏但是dom对象渲染。

### 29.css的user-select:all 有什么用处？
```
none：
文本不能被选择
text：
可以选择文本
all：
当所有内容作为一个整体时可以被选择。如果双击或者在上下文上点击子元素，
那么被选择的部分将是以该子元素向上回溯的最高祖先元素。
element：
可以选择文本，但选择范围受元素边界的约束
```

### 30.如何让一个块元素绝对居中？
```css
div{
  position:fixed;
  right:0;
  left:0;
  bottom:0;
  top:0;
  margin: auto auto;
}
```

### 31.你知道什么是CSS-in-JS吗？说说你对它的了解


### 32.分析比较opacity: 0、visibility: hidden、display: none三者的优劣和适用场景
+ opacity 0: 单纯视觉效果，除了看不见，其他都正常。
+ visibility: hidden: 可继承也可覆盖。
+ display: none: 元素不会渲染，不影响布局，不会被css计数，也不支持transition。


### 33.你对伪类了解多少？分为几大类？
:hover ::after ::before :nth-child :nth-of-child :first-child :last-child

总结分为两类：页面节点效果操作和获取指定元素选择器,小渣渣一枚，只能写几个出来。

























