---
title: css-9
group:
  title: css基础
  order: 9
---

### 1.使用sass的方式有哪些？
得编译，有的项目中可以用

### 2.为什么要使用sass/less？
为了提示开发效率，使得css编写更加灵活

### 3.sass是怎么定义变量的？
sass变量可以理解为以\$+变量名为键的键值对，例如$color-black:#000

### 4.检测sass中错误的指令是哪个？
@debug伪指令检测错误，并将SassScript表达式值显示到标准错误输出流。

### 5.你有用过sass中的Mixin功能吗？它有哪些作用？
```scss
1.混合用法
2.函数用法

@mixin ellipsis-one {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
 .test {
   @inculde ellipsis-one;
 }

@mixin hoverColor ($color, $deepColor) {
    color: $color;
    cursor: pointer;
    &:hover {
       color: $deepColor;
   }
}
.test {
 @inculde hoverColor(#555, #333);
}
```

### 6.在sass中可以执行布尔运算吗？
布尔运算？sass 有 @if @else if @else，这样也算是有并交关系了

### 7.说说sass有哪些你认为很棒的特性
预处理
嵌套
变量
模块
继承
计算

### 8.请使用CSS画一个带锯齿形边框圆圈
### 9.css如何消除字体的锯齿？
-webkit-font-smoothing：antialiased;

### 10.css图片缩放失真出现锯齿的如何解决呢？

```
1、-ms-interpolation-mode，这是针对IE的解决方案。其值设置为bicubic。
2、image-rendering，这是提供了一个速度VS质量之间做权衡的图像缩放关系。
额外的思考：
1、微信上传图片时，服务端会自动把图片做不同尺寸的处理。我们可以采用这个思路来解决图片缩放产生的问题。
2、SVG的技术，是一种矢量图的解决方案，缩放不会产生失真，我们可以把图片转为SVG来展示。
3、canvas技术，也是一种绘图技术，可以把图片转为canvas。
```

### 11.如何清除在项目中无用的css代码呢？
1. IDE中，会对没有使用到的样式，自己进行检测，删除时候，还需要手动删除。
2. webpack中，有基于消除无用css的插件（purifycss-webpack purify-css），不过需要提供html文件的模板，因为需要遍历这个模板，才知道用了哪些css。
3. 单页面应用中，由于都是组件化的开发，无法提供一个最终版的html文件，所以不能适用上面2提供的方案。

### 12.一个页面引用多个文件，如何防止样式冲突？
编码层面：
1. 定制规则：不同的样式文件表，增加不同的前缀。
2. 按照功能区分文件：不同的文件样式表，针对页面不同的部分写样式，通过样式层级的方式，确认样式的边界。（例如header部分：#header p { }，footer部分：#footer p { }）。

工具层面：
1. postCss的使用
2. vue中scoped、react中的css module配置等等

### 13.使用css将图片转换成黑白的效果
filter: saturate(0);

### 14.你知道什么是动态伪类吗？
锚点伪类（a标签）
1. :link 未操作的链接
2. :visited 该链接已被访问，一旦:visited，:link/:active不再起作用。

用户行为伪类
1. :hover 鼠标悬停该元素
2. :active 鼠标点击该元素
3. :focus 鼠标在输入框中input

UI元素状态伪类
1. :enabled
2. :disabled
3. :checked

### 15.css中的baseline，你知道吗？
baseline是西文字体里面的一种定位，vertical-align:baseline是指行内元素里的文字，在垂直方向上，按字体的基线排列，基线就是可以类似我们小学写英文字母时的带线的格子，axec这些字母的底部就是baseline，然后lh的baseline也一样，g的baseline则在于中间，就是西文字体如何在一条看不见的线上排练形成整齐的视觉效果。汉字很少提及baseline的概念，但汉字有中宫的说法。

### 16.如何将元素的所有css属性恢复为初始化状态？
all:upset

### 17.移动端1px像素的问题及解决方案是什么？
```
viewport结合rem解决像素比问题
比如在devicePixelRatio=2设置meta
<meta name="viewport" content="initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5, user-scalable=no">

在devicePixelRatio=3设置meta
<meta name="viewport" content="initial-scale=0.3333333333333333, maximum-scale=0.3333333333333333, minimum-scale=0.3333333333333333, user-scalable=no">

```

### 18.用CSS实现tab切换
1. 用label结合单选按钮radio接受切换tab的单击
2. 用zindex层级来显示当前tab页对应的内容
3. 用css兄弟选择器选中对应的tab页签和内容页，添加相应的样式

### 19.用CSS实现一个轮播图
使用CSS实现的话，可以使用 animat属性和overflow:hidden 属性来做。

### 20.字体的粗细的属性是用哪一个？它有哪些属性值？
font-size指的应该是字体大小，字体粗细应该是font-weight，值有normal,bold,bolder,lighter,inherit,也可以自己定义100~900之间的某一个值

### 21.举例说明跟字体相关的属性有哪些
```
font-size：字体大小
font-weight：字体粗细
font-family：字体类型
color：字体颜色
等等
```

### 22.你所理解的css高级技巧有哪些？
各种动画效果，能用css的都可以不去用js写的，

### 23.body{height:100%}和html,body{height:100%}有什么区别？为什么html要设置height:100%呢，html不就是整个窗口吗？
html是body的父级，在缺少了父级的宽高之后，如果给body设置一个渐变色背景的话将不会正常显示。


### 24.你有使用过font-size-adjust属性吗？说说它的作用是什么？
```
实际应用场景

在指定字体时，出于安全考虑，人们通常会为一个元素指定多种字体，希望当首选字体不可用时，让浏览器自动使用备选字体。

如，以下样式将 Verdana 字体作为段落的首选字体，当 Verdana 字体不可用时，则使用 Georgia 字体，当 Georgia 字体不可用时，则使用 Times 字体：

p {
	font-family: Verdana, Georgia，Times;
}
由于 Georgia 和 Times 字体比 Verdana 字体的 aspect 值要小，当使用备选字体时，必然会影响文本的易读性，甚至导致页面布局产生混乱。

为了避免这种情况，在CSS3中，新增加了 font-size-adjust属性。实际应用中，只需把 font-size-adjust属性的值，设置为首选字体的 aspect 值，就可以保证使用备选字体后，文本的显示尺寸不发生变化。

```

### 25.当使用@font-face的时候，为什么src中要加入local呢？
```
网上的说法片面不一，CSDN和掘金都没见到正确回复，然后我在MDN找到了比较明确的说法。

MDN的   @font-face   这是一个CSS @规则 ，它允许网页开发者为其网页指定在线字体。 通过这种作者自备字体的方式，@font-face 可以消除对用户电脑字体的依赖。

src
远程字体文件位置的URL或者用户计算机上的字体名称， 可以使用local语法通过名称指定用户的本地计算机上的字体( i.e. src: local('Arial'); )。 如果找不到该字体，将会尝试其他来源，直到找到它。

代码：

@font-face {
font-family: MyHelvetica;
src: local("Helvetica Neue Bold"),
local("HelveticaNeue-Bold"),
url(MgOpenModernaBold.ttf);
font-weight: bold;
}
用到了用户本地字体"Helvetica Neue Bold"的备份；如果当前用户(浏览器)未安装该字体(两种可能的字体名都已经试过)，就会用下载的字体"MgOpenModernaBold.ttf"来代替。意味着加入local后，代码加载时会优先采用电脑资源，而不是从网络加载，这个可以加快加载速度，提升用户体验感。
```

### 26.如何解决css加载字体跨域的问题？
同解决跨域问题

### 27.说下你对css样式的这几个属性值initial、inherit、unset、revert的理解
+ initial（初始）、inherit（继承）、unset（未设置）、revert（还原）
+ inherit可以继承父级元素的属性，initial则是不继承
+ unset - 表示如果该属性默认可继承，则值为inherit，否则值为initial
+ revert - 表示样式表中定义的元素属性的默认值。若用户定义样式表中显式设置，则按此设置；否则，按照浏览器定义样式表中的样式设置；否则，等价于unset 。

+ 其实前两个我还是理解的 后面两个其实不太理解

### 28.如何取消从父级元素继承下来的CSS样式呢？
如果是恢复单个属性样式，例如font-size，可以使用

font-size: initial;

如果是将所有属性样式恢复为默认状态，可以使用

all: initial;

### 29.css的哪个属性可以把所有元素或其父元素的属性重置呢？
all:unset

### 30.你认为sass和less的最大区别是什么呢？你喜欢哪个？为什么？
```
less 没有循环只有递归；
less 没有 if 只有 when；
sass 多个 @function 很棒，否则只能堆变量了；
less 拼接类名的字符串需加上 ~；
应该还有很多内置方法的不同，但现在还没用到。

其实我更青睐 stylus，写 flex: left center 这种自定义属性，很简便很舒服，
但这种肯定会被加到全局里，多人合作时就很怕有人会乱玩了。所以用的最多的还是 sass。

另外，不用 mixin 会造成很多废代码，而 scss 需要加 @include some($x) 才行，
这个时候就觉得 less 很舒服了，.some(@x) 就行。
但是吧，less 的递归和条件玩起来真的不舒服，所以还是选了 sass。
```

### 31.说说你对sass的嵌套规则的理解？
```css 
嵌套类型有：选择器嵌套、属性嵌套、伪类嵌套、群组选择器嵌套 。
.tenant-detail {
  background: transparent!important;
  .tenant-container { //1.选择器嵌套
    width: 100%;
    > div {
      margin: 0{ //2.属性嵌套 相当于margin:10px 0 0 0 ;
      top:10px
    }
    &:hover{ //3.伪类嵌套 :hover
      background:#fff;
      }
    }
    p,h2,h3{ //4.群组选择器嵌套
      color:red;
    }
  }
}

```

### 32.css的height:100%和height:inherit之间有什么区别呢？
这里，height:inherit的强大好用可见一斑。回头，容器高度变化了，里面的绝对定位元素依然高度自适应。这是很赞的特性，因为如果页面很复杂，避免使用position: relative会让你少去很多z-index混乱层级覆盖的麻烦。

### 33.如何禁止长按保存或复制图像？
img {
  pointer-event:none;
  -webkit-user-select:none;
  -moz-user-select:none;
  user-select:none;
}

### 34.img标签是行内元素，为什么却能设置宽高
```
原来CSS中还有一个概念：可替换元素

MDN上是这么解释的：

在 CSS 中，可替换元素（replaced element）的展现效果不是由 CSS 来控制的。这些元素是一种外部对象，它们外观的渲染，是独立于 CSS 的。

简单来说，它们的内容不受当前文档的样式的影响。CSS 可以影响可替换元素的位置，但不会影响到可替换元素自身的内容。例如 <iframe> 元素，可能具有自己的样式表，但它们不会继承父文档的样式。 典型的可替换元素有：

<iframe>

<video>

<embed>

<img>

有些元素仅在特定情况下被作为可替换元素处理，例如：

<input> "image" 类型的 <input> 元素就像<img>一样可替换

<option>

<audio>

<canvas>

<object>

<applet>（已废弃）

CSS的 content 属性用于在元素的 ::before 和 ::after 伪元素中插入内容。使用content 属性插入的内容都是匿名的可替换元素。

这些元素有一个共性，就是他们的内容都不是通过在标签内添加文本，而是通过某个属性（src、data（<object>）、label（<option>）或js控制（<canvas>））来显示内容的。

可替换元素拥有内置宽高，他们可以设置width和height。他们的性质同设置了display:inline-block的元素一致。

ps：我在看别人的资料的时候，看到个误区，textarea、button等并不是可替换元素，他们是浏览器默认的内联块元素。

display: inline-block;
display: inline-block;
 

额外知识：

1. 当需要给图片设定固定宽高，并需要不拉伸时（等类似情况），
1）背景图，background-size配合background-position。（适用于装饰性图片）
background-size: [ <length-percentage> | auto ]{1,2} | cover | contain;
background-position: [ left | center | right | top | bottom | <length-percentage> ]{1,2}
background-position值还可以是边偏移量：例：background-position: bottom 10px right 20px;
2）img元素，object-fit配合object-position。（适用于内容图片）
object-fit: fill | contain | cover | none | scale-down;
object-position: 同background-position;
object-position和background-position的区别在于默认值不同，
object-position默认为50% 50%;
background-position默认为0% 0%;

2. 图片img元素下面有一段空白区域，是因为vertical-align和line-heigh

空白区域
空白区域
解决：img元素display: block;


3.vertical-align 只对行内元素、表格单元格元素生效。 vertical-align: baseline | sub | super | text-top | text-bottom | middle | top | bottom | <percentage> | <length>;

```




























