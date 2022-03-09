---
title: css-1
group:
  title: css基础
  order: 3
---

### 1.圣杯布局和双飞翼布局的理解和区别，并用代码实现
```css
section{ height: 100%;  overflow: hidden; clear: both; }
.left{  height: 100%; float: left; width: 30%; background: #f00; }
.right{ height: 100%; float: right; width: 30%;  background: #0f0; }
.center{ height: 100%; background: #00f; }
```
```jsx
import React from 'react';
import { Css1 } from '../components';
export default () => {
  return (
    <Css1 />
  )
}
```
```css
.a-container { height: 100%; display: flex;justify-content: center; align-items: center;}
.a-left{ height: 100%;flex-basis: 30%;background: #f00; }
.a-right{ height: 100%;flex-basis: 30%;background: #0f0; }
.a-center{ height: 100%;background: #00f; flex: 1 1 auto; }
```
```css
.b-container{ height: 100%;position: relative;}
.b-left{ height: 100%;width: 30%;background: #f00;position: absolute;left:0;top:0; }
.b-right{ height: 100%;width: 30%;background: #0f0;position: absolute;right:0;top:0; }
.b-center{ height: 100%;background: #00f;margin:0 30%; }
```

### 2.css3新增的特性
+ 边框圆角 border-radius
+ 盒子阴影 box-shadow
+ 文字阴影 text-shadow
+ 2d、3d变换 transform、rotate()、scale()、skew()、translate()
+ 过度动画 transition
+ 自定义动画 animation

### 3.在页面上隐藏元素的方法有哪些？
+ position配合z-index; 或者 left/top/bottom/right ： -100%；
+ margin-left: -100%;
+ width: 0; height: 0; overflow: hidden;这个算吗
+ opacity: 0;
+ display:none;
+ transform: scale(0)/translateX(+-100%)/translateY(+-100%)/rotateX(90deg);
+ filter: opacity(0);

### 4.css选择器有哪些？哪些属性可以继承？
+ 选择器
通配符、id、class、标签、包含选择器、子选择器、兄弟选择器、
相邻兄弟选择器、属性选择器、伪类选择器、伪元素选择器

+ 可以继承的属性
font-size、font-weight、font-style、font-family、color

### 5.css3新增伪类有哪些描述？
![css3新增伪类描述](https://img-blog.csdnimg.cn/20210215104220544.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MzM5MjQ4OQ==,size_16,color_FFFFFF,t_7)

### 6.用css创建一个三角形

### 7.简述你对BFC规范的理解？
是CSS中的一个渲染机制，BFC就相当于一个盒子，内部的元素与外界的元素互不干扰。它不会影响外部的布局，外部的布局也不会影响到它。

#### 形成条件（任意一条）
1. float的值不是none
2. position 的值不是static或者relative
3. display的值是inline-block,table-cell,flex,table-caption或者inline-flex
4. overflow的值不是visible
#### 特性
1. 内部的盒子会在垂直方向上一个接一个的放置
2. 对于同一个BFC的俩个相邻的盒子的margin会发生重叠，与方向无关。
3. 每个元素的左外边距与包含块的左边界相接触（从左到右），即使浮动元素也是如此
4. BFC的区域不会与float的元素区域重叠
5. 计算BFC的高度时，浮动子元素也参与计算
6. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然


### 8.清除浮动的方式有哪些及特点
+ 什么是盒子塌陷？
外部盒子本应该包裹住内部的浮动盒子，结果却没有。
+ 问题出现的原因
父元素只包含浮动元素，那么它的高度就会塌缩为零（前提就是你们没有设置高度（height）属性，或者设置了为auto，就会出现这种情况，如果父元素不包含任何的可见背景，这个问题会很难被注意到。
因为子元素设置了float属性，而float属性会把元素从标准文档流中抽离，直接结果就是外部盒子丢了两个孩子，因为内部没有其它盒子了，所以外部盒子只包裹文本节点内容，却把两个内部盒子扔在外面了。
+ 解决方案：  
上面分析了问题出现的原因，不难找到第一种解决方案（既然孩子丢了，那就去找呗）——给外部盒子也添加浮动

1. 把外部盒子也从标准文档流中抽离，让它和孩子们见面。
缺点：可读性差，不易于维护（别人很难理解为什么要给父元素也添上float），而且可能需要调整整个页面布局。

2. 在外部盒子内最下方添上带clear属性的空盒子

可以是div也可以是其它块级元素，把 <div style="clear:both;"></div>放在盒内底部，用最下面的空盒子清除浮动，把盒子重新撑起来。
缺点：引入了冗余元素

3. 用overflow:hidden清除浮动
给外部盒子添上这个属性就好了，非常简单。
缺点：有可能造成溢出元素不可见，影响展示效果。

4. 用after伪元素清除浮动  
给外部盒子的after伪元素设置clear属性，再隐藏它
这其实是对空盒子方案的改进，一种纯CSS的解决方案，不用引入冗余元素。

.clearfix {*zoom: 1;}
.clearfix:before,.clearfix:after {display: table;line-height: 0;content: "";}
.clearfix:after {clear: both;}

这也是bootstrap框架采用的清除浮动的方法。

题外话  

其实还有一种最直接的办法：给每个盒子规定width和height，要多大给多大即可。但这并不算什么解决方案，因为这样的布局不是内容自适应的，但如果页面内容极少发生变动，这也是一个不错的方案，因为它的兼容性是毋庸置疑的。

### 9.简述你理解的优雅降级和渐进增强
+ 优雅降级，先做好一个完善的具备完整体验的版本，再向下做兼容。
+ 渐进增强，先做好一个可以基本正常使用的版本，再慢慢丰富体验和内容。

### 10.对比下px、em、rem有什么不同？
+ px是css中的逻辑像素，和移动端的物理像素之间会有一个比值dpr
+ em是指相对于父元素的大小
+ rem中的r就是root，也就是相对于root元素的大小（html标签）

### 11.css常用的布局方式有哪些？
1. 圣杯布局
2. 双飞翼
3. flex

### 12.::before和:after中单冒号和双冒号的区别是什么，这两个伪元素有什么作用？
区别：伪元素在css1中已经存在当时用单冒号，css3时做了修订用双冒号 ::before ::after表示伪元素用来区别伪类。

作用：在元素前面（::before）和后面（::after）加内容

### 13.说说你对css盒模型的理解
css盒模型由两个盒子组成，外在的控制是否换行的盒子，以及内在的控制元素内容的盒子。比如：display: inline-block, 则它的外在的盒子就是inline也就是不占据一行，而block则表示内部的元素具有块状特性。所以，display: inline其实就是display: inline-inline的缩写，display: block就是display: block-block的缩写。

每一个内在的盒子有: width/height, padding, border, margin这几个控制盒子大小的属性。其中 width/height控制元素内容大小，padding则控制元素内容到border线内侧距离，border则是元素外围边框大小，而margin则是控制与其他元素的间距，它的背景透明。

对于早期，计算一个元素的占据大小，需要通过width +2* padding + 2*border来计算，css3中提出了box-sizing：border-box，通过这样设置，就可以使元素最终的宽高就是设定的width/height, 浏览器会根据width/height, padding, border的大小来自动调整内部元素的大小。

### 14.position: fixed; 在ios下无效该怎么办？
> ios上页面滚动到底部的时候，底部的footer虽然设置为fixed但也会随着滚动。
解决：滚动区域也设置为fixed

### 15.style标签写在body前和写在body后的区别是什么？
渲染机制的区别，在body前是已经把样式浏览一遍，到了对应标签直接，渲染样式。显示块。
在body后，是浏览器已经把标签浏览了，但基于没有样式，显示的不完全，再把body后的样式表，扫描后，在成为真正的样式。会慢，遇到大型网站，效果更差，这都基于浏览器从上而小的浏览机制导致的。

### 16.请描述margin边界叠加是什么及解决方案？
1. 使用padding代替，但是父盒子要减去相应的高度
2. 使用boder（透明）代替（不推荐，不符合书写规范，如果父盒子子盒子时有颜色的不好处理）
3. 给父盒子设置overflow：hidden(如果有移除元素无法使用)
4. 给父盒子设置1px的padding
5. 给父盒子设置1px的透明border，高度减1px
6. 子盒子使用定位position
7. 子盒子浮动, 但是居中比较难以控制
8. 给子盒子设置display: inline-block;
9. 子盒子上面放一个table标签

### 17.解释下 CSS sprites的原理和优缺点分别是什么
原理：多张图合并成一张图
#### 优点&解决的问题
1. hover效果，如果是多个图片，网络正常的情况下首次会闪烁一下。如果是断网情况下，就没图片了。sprites 就很好的解决了这个问题（第一次就加载好了）。
2. 合并了请求数.  
3. 制作帧动画方便.  

#### 缺点
1. 位置不好控制，有时候容易露底。。比如说3030的按钮，图片只有1212保不齐就漏出其他图片了。
2. 合成时候比较费时（有工具代替）
3. 位置计算费时（有工具代替）
4. 更新一部分的时候，需要重新加载整个图片，缓存失效。

### 18.css的属性content有什么作用呢？有哪些场景可以用到？
content属性与 ::before 及 ::after 伪元素配合使用生成文本内容

通过attr()将选择器对象的属性作为字符串进行显示，如：

a::after{content: attr(href)} 
<a href="http://www.baidu.com">a标签的href的值是：</a> 
结果：a标签的href的值是：http://www.baidu.com

### 19.要让Chrome支持小于12px的文字怎么做？
1, 改用图片
2, 使用 -webkit-text-size-adjust:none; 但是不支持chrome 27.0以上版本
3, 使用 transform: scale( )缩小

### 20.说说你对line-height是如何理解的？
line-height 行高，就是两行文字之间基线的距离，用来调整文字的行间距。

### 21.说说浏览器解析CSS选择器的过程？
按照从上到下，从右到左的顺序解析。

### 22.说说CSS的优先级是如何计算的？
#### 选择器种类

严格来讲，选择器的种类可以分为三种：标签名选择器、类选择器和ID选择器。而所谓的后代选择器和群组选择器只不过是对前三种选择器的扩展应用。而 在标签内写入 style="" 的方式，应该是CSS的一种引入方式，而不是选择器，因为根本就没有用到选择器。而一般人们将上面这几种方式结合在一起，所 以就有了5种或6种选择器了。

#### 三种基本的选择器类型
语法如下：
1. 标签名选择器，如：p{}，即直接使用HTML标签作为选择器。
2. 类选择器，如.polaris{}。
3. ID选择器，如#polaris{}。

伪类，属性选择器特指度等同于类。
伪元素特指度等同于标签名选择器

#### 扩展选择器
1. 后代选择器，如 .polaris span img{}，后代选贼器实际上是使用多个选择器加上中间的空格来找到具体的要控制标签。
2. 群组选择器，如 div,span,img{}，群组选择器实际上是对CSS的一种简化写法，只不过把有相同定义的不同选择器放在一起，省了很多代码。

#### 特指度-优先级计算

我们需要引入一个概念——特指度（specificity）。特指度表示一个css选择器表达式的重要程度，可以通过一个公式来计算出一个数值，数越大，越重要。
这个计算叫做“I-C-E”计算公式，

I——Id；
C——Class；
E——Element；

即，针对一个css选择器表达式，遇到一个id就往特指度数值中加100，遇到一个class就往特指度数值中加10，遇到一个element就往特指度数值中加1。

下面举几个css表达式的特指度计算结果，大家也自己算一算，是不是对的：
这里写图片描述

还有一个重点要注意：!important 优先级最高，高于上面一切。* 选择器最低，低于一切。
后代选择器的定位原则

在这里介绍一下对于后代选择器，浏览器是如何查找元素的呢？

浏览器CSS匹配不是从左到右进行查找，而是从右到左进行查找。比如div#divBox p span.red{color:red;}，浏览器的查找顺序如下：先查找html中所有 class='red' 的 span 元素，找到后，再查找其父辈元素中是否有 p 元素，再判断 p 的父元素中是否有 id 为 divBox 的 div 元素，如果都存在则匹配上。
浏览器从右到左进行查找的好处是为了尽早过滤掉一些无关的样式规则和元素。
简洁、高效的CSS

所谓高效的CSS就是让浏览器在查找style匹配的元素的时候尽量进行少的查找，下面列出一些我们常见的写CSS犯一些低效错误：

+ 不要在ID选择器前使用标签名
  
一般写法：div#divBox
更好写法：#divBox
解释： 因为ID选择器是唯一的，加上 div 反而增加不必要的匹配。

+ 不要再class选择器前使用标签名
  
一般写法：span.red
更好写法：.red
解释：同第一条，但如果你定义了多个.red，而且在不同的元素下是样式不一样，则不能去掉，比如你css文件中定义如下：

p.red{color:red;}  
span.red{color:#ff00ff} 

如果是这样定义的就不要去掉，去掉后就会混淆，不过建议最好不要这样写。

+ 尽量少使用层级关系

一般写法：#divBox p .red{color:red;}
更好写法：.red{..}

+ 使用class代替层级关系
  
一般写法：#divBox ul li a{display:block; }
更好写法：.block{display:block;}

### 23.你有用过CSS预处理器吗？喜欢用哪个？原理是什么？
它能让你的CSS具备更加简洁、适应性更强、可读性更强、层级关系更加明显、更易于代码的维护等诸多好处。
CSS预处理器种类繁多，目前Sass、Less、用的比较多。

使用功能：
1. 嵌套：反映层级和约束
2. 变量和计算： 减少重复代码
3. Extend 和 Mixin 代码片段 (用的少)
4. 循环：适用于复杂有规律的样式
5. import css 文件模块化

### 24.在页面中的应该使用奇数还是偶数的字体？为什么呢？

常用偶数号字体,但奇数号字体也没关系,例如 知乎正文使用15px字体,豆瓣电影使用13px字体
UI设计师导出的设计稿一般都是偶数号字体.

偶数字号容易和页面其他标签的其他属性形成比例关系

Windows 自带的点阵宋体（中易宋体）从 Vista 开始只提供 12、14、16 px 这三个大小的点阵，
而 13、15、17 px 时用的是小一号的点阵（即每个字占的空间大了 1 px，但点阵没变），于是略显稀
疏。(没试过)

### 25.说说你对z-index的理解
层叠: 
就是Z轴的方向的位置，值越大离屏幕前的你越近，反之亦然。可以为负数

### 26.怎样修改chrome记住密码后自动填充表单的黄色背景？
```css
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 3px 100px #eee inset; // 改变填充背景色
}
```

### 27.rgba()和opacity这两个的透明效果有什么区别呢？
1. opacity 是属性，rgba()是函数，计算之后是个属性值；
2. opacity 作用于元素和元素的内容，内容会继承元素的透明度，取值0-1；
3. rgba() 一般作为背景色 background-color 或者颜色 color 的属性值，透明度由其中的 alpha 值生效，取值0-1；

扩展：
1. transparent 也是透明，是个属性值，颜色值，跟#000是一类，不过它是关键字来描述。
2. 如何隐藏一个元素？

### 28.请描述css的权重计算规则

权重值计算
选择器 案例 权重值  
!important !important Infinity  
内联样式 style="…" 1000  
ID #id 100  
class .class 10  
属性 [type=‘text’] 10  
伪类 :hover 10  
标签 p 1  
伪元素 ::first-line 1  
相邻选择器、子代选择器、通配符 * > + 0  
比较规则:
```
1000>100。也就是说从左往右逐个等级比较，前一等级相等才往后比。
在权重相同的情况下，后面的样式会覆盖掉前面的样式。
继承属性没有权重值
通配符、子选择器、相邻选择器等的。虽然权值为0，但是也比继承的样式优先。
ie6以上才支持important，并且尽量少用它。
```
### 29.描述下你所了解的图片格式及使用场景
通常网页在显示的图片（图形）的时候，有以下几种格式：GIF、PNG、JPG、SVG，还有个比较新的WebP格式。

#### GIF

优点：GIF是动态的；支持无损耗压缩和透明度。

缺点：的详细的图片和写实摄影图像会丢失颜色信息；在大多数情况下，无损耗压缩效果不如 JPEG 格式或 PNG 格式；GIF 支持有限的透明度，没有半透明效果或褪色效果。

适用场景：主要用于比较小的动态图标。

#### PNG

优点：PNG格式图片是无损压缩的图片，能在保证最不失真的情况下尽可能压缩图像文件的大小；图片质量高；色彩表现好；支持透明效果；提供锋利的线条和边缘，所以做出的logo等小图标效果会更好；更好地展示文字、颜色相近的图片。

缺点：占内存大,会导致网页加载速度慢；对于需要高保真的较复杂的图像，PNG虽然能无损压缩，但图片文件较大，不适合应用在Web页面上。

适用场景：主要用于小图标或颜色简单对比强烈的小的背景图。

#### JPG

优点：占用内存小，网页加载速度快。

缺点：JPG格式图片是有损压缩的图片，有损压缩会使原始图片数据质量下降，即JPG会在压缩图片时降低品质。

适用场景：由于这种格式图片对色彩表现比较好，所以适用于色彩丰富的图片。主要用于摄影作品或者大的背景图等。不合适文字比较多的图片。

#### SVG

优点：SVG是矢量图形，不受像素影响，在不同平台上都表现良好；可以通过JS控制实现动画效果。

缺点：DOM比正常的图形慢，而且如果其结点多而杂，就更慢；不能与HTML内容集成。

适用场景：主要用于设计模型的展示等。

#### WebP

优点：WebP格式，谷歌（google）开发的一种旨在加快图片加载速度的图片格式。图片压缩体积大约只有JPEG的2/3，并能节省大量的服务器宽带资源和数据空间。

缺点：相较编码JPEG文件，编码同样质量的WebP文件需要占用更多的计算资源。

适用场景：WebP既支持有损压缩也支持无损压缩。将来可能是JPEG的代替品。

### 30.让网页的字体变得清晰，变细用CSS怎么做？
全家桶：

```css
{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.005);
  text-rendering: optimizeLegibility;
}
```


