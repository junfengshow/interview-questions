---
title: css-6
group:
  title: css基础
  order: 6
---

### 1.请说说你对vh、vw的理解以及它们的运用场景是什么？
```
vw: 100vw为视窗的宽度，即1vw是视窗宽度的1%
vh: 100vh为视窗的高度，即1vh是视窗高度的1%
运用场景
    图片查看大图：img { max-height: 90vh; }
    代替rem实现移动端布局
```

### 2.你有使用过字体图标吗？它有什么好处？
代替图片，可以减少http请求次数，提高页面加载性能。

### 3.如果css文件过大时，如何异步加载它？
+ 分割成多个CSS文件
+ 进行Gzip压缩
+ link preload

### 4.你知道什么是流体排版吗？说说它的原理是什么？
在文档流中，内联元素按内联方向显示，即词语在依据文件写作模式的句子中表示的方向。
块元素则一个接一个地显示，就像该文档的写作模式中的段落一样。因此在流体排版中，内联元素从左边开始一个接一个地显示，块元素从顶部开始向下显示并移动页面。

流体排版其实现阶段已经十分普遍了，通常我们设置字体大小的时候都是直接给一个具体的px值，这样带来的后果就是当视窗大小发生改变的时候我们的字体无法随着窗口的变化而变化从而达不到我们预期的效果，在后来我们利用媒体查询实现了这一功能，通过设置rem来进行自适应，再到现在我们可以用vmin、vw、vh、vmax进行排版。

### 5.css3和css2的区别是什么？
css3增加了更多特性：动画、过渡效果，圆角、文字特效等

### 6.你是怎样对css文件进行压缩合并的？
```
使用在线网站进行压缩，如http://tool.lu/css
如使用Gulp，可使用gulp-minify-css进行压缩
如使用WebPack，可使用optimize-css-assets-webpack-plugin进行压缩
```

### 7.你有使用过preload、preconnect、prefetch这些属性吗？说说它们都有什么作用？
```
preload
元素的 rel 属性的属性值preload能够让你在你的HTML页面中元素内部书写一些声明式的资源获取请求，可以指明哪些资源是在页面加载完成后即刻需要的。 试想我们网站使用了一种特殊字体，我们在css里面定义了字体的url。那么直到浏览器开始解析CSS了才会识别出来需要加载这个资源。 如果我们提前让浏览器下载好这个资源呢？那么执行CSS的时候就可以直接用了。
<link rel="preload" href='xxx.com/xxx.css' as='style'>

我们使用这样的语法：
rel="preolad"声明这是一个preload
href指明资源的位置
as指明资源类型（这是为了让浏览器精确设置优先级，设置正确的CSP、Accept头部）
crossorigin 指明使用的跨域设置
preload和onload事件
添加preload声明之后，浏览器初次加载的资源变多了，但preload并不会阻塞onload事件的触发
prefetch
prefetch是对浏览器的暗示，暗示将来可能需要某些资源，但由代理决定是否加载以及什么时候加载这些资源。
prefetch跟preload不同在于，用户从A页面进入B页面，preload的会失效，而prefetch的内容可以在B页面使用。

preconnet
浏览器要建立一个连接，一般需要经过DNS查找，TCP三次握手和TLS协商（如果是https的话），这些过程都是需要相当的耗时的，所以preconnet，就是一项使浏览器能够预先建立一个连接，等真正需要加载资源的时候就能够直接请求了。
而一般形式就是

<link rel="preconnect" href="//example.com">
<link rel="preconnect" href="//cdn.example.com" crossorigin>

浏览器会进行以下步骤：

解释href的属性值，如果是合法的URL，然后继续判断URL的协议是否是http或者https否则就结束处理
如果当前页面host不同于href属性中的host,crossorigin其实被设置为anonymous(就是不带cookie了)，如果希望带上cookie等信息可以加上crossorign属性,corssorign就等同于设置为use-credentials

```

### 8.请举例说明css有哪些不可继承的属性？
```
1、display：规定元素应该生成的框的类型
2、文本属性：
vertical-align：垂直文本对齐
text-decoration：规定添加到文本的装饰
text-shadow：文本阴影效果
white-space：空白符的处理
unicode-bidi：设置文本的方向

3、盒子模型的属性：width、height、margin 、margin-top、margin-right、margin-bottom、margin-left、border、border-style、border-top-style、border-right-style、border-bottom-style、border-left-style、border-width、border-top-width、border-right-right、border-bottom-width、border-left-width、border-color、border-top-color、border-right-color、border-bottom-color、border-left-color、border-top、border-right、border-bottom、border-left、padding、padding-top、padding-right、padding-bottom、padding-left

4、背景属性：background、background-color、background-image、background-repeat、background-position、background-attachment

5、定位属性：float、clear、position、top、right、bottom、left、min-width、min-height、max-width、max-height、overflow、clip、z-index

6、生成内容属性：content、counter-reset、counter-increment

7、轮廓样式属性：outline-style、outline-width、outline-color、outline

8、页面样式属性：size、page-break-before、page-break-after

9、声音样式属性：pause-before、pause-after、pause、cue-before、cue-after、cue、play-during
```

### 9.css中最常用的字体有哪些？你是怎么选择字体的？
总结：
win：微软雅黑为Win平台上最值得选择的中文字体，但非浏览器默认，需要设置；
西文字体的选择以Arial、Tahoma等无衬线字体为主。
mac：目前苹方和San Francisco为苹果推出的最新字体，显示效果也最为优雅，但只有最新系统才能支持，而黑体-简和Helvetica可以获得更多系统版本支持，显示效果也相差无几，可以接受。
android：Droid Sans为默认的字体，并结合了中英文，无需单独设置。

### 10.请使用css画一个圆，方法可以多种
```css
<div class="circle"></div>

1.border-radius

.cirlce{
 width:10vw; height:10vw; background:gray;
 border-radius:50%;
}

2.clip-path

.circle{
 width:10vw; height:10vw; background:gray;
 clip-path: circle();
}

3.svg background

.circle{
width:10vw; height:10vw; 
 background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50%25' cy='50%25' r='50%25' fill='gray'/%3E%3C/svg%3E");
}

4.radial-gradient

.circle{
 width:10vw; height:10vw; 
 background:radial-gradient(gray 70%, transparent 70%);
}

5.font

.circle::after {
    content: "●";
    font-size: 10vw;//字体实际大小
    line-height: 1;
}

6.mix-blend-mode

.circle{
 width: 10vw;height: 10vw;background: gray;
}
.circle::after {
    content: "";display: block;width: 10vw;height: 10vw;
    mix-blend-mode: lighten;
    background: radial-gradient(#000 70%, #fff 70%);
}
```

### 11.你知道css的预处理器和后处理器都有哪些吗？它们有什么区别呢？
+ 目前最主流的 CSS 预处理器：Sass、LESS、Stylus 。
+ 优缺点:
1. 优点：语言级逻辑处理，动态特性，改善项目结构
2. 缺点：采用特殊语法，框架耦合度高，复杂度高

+ 后处理器：Rework 、PostCSS、
优缺点
1. 优点：使用 CSS 语法，容易进行模块化，贴近 CSS 的未来标准
2. 缺点：逻辑处理能力有限.

### 12.让你手写一个reset的文件，你应该怎么写？要考虑哪些方面呢？
肯定首先考虑的是浏览器本身的样式，还有浏览器兼容。
```
  margin，padding: 0
  ul,ol list style: none
  a,text-decoration: none
  font-size:100%
  上标，下标。表格等
```


### 13.怎样去除图片自带的边距？
空隙产生的原因，换行符，空格符，制表符等你空白符，字体不为0的情况下，都会产生一个字符的空隙，空格符好会占据一定宽度，使用inline-block会产生元素间的空隙。

解决方法：
+ 1.父元素设置：font-size=0
+ 2.使用flexbox

### 14.请描述下你对translate()方法的理解
+ Single length/percentage value

一个长度值或百分比表示X轴和Y轴使用一样的值进行二维上的平移。等同于translate() （2D 平移）函数指定单个值。

+ Two length/percentage values

两个长度值或百分比表示在二维上分别按照指定X轴和Y轴的值进行的平移。等同于translate() （2D 平移）函数指定两个值。

+ Three length/percentage values

三个长度值或百分比表示在三维上分别按照指定X轴、Y轴、Z轴的值进行的平移。等同于translate3d() （3D 平移）函数。

### 15.你是怎么设计css sprites（精灵图）的？有哪些技巧？
```js
首先肯定不会去用PS量，那太费时间了~
没有webpack以前，用Gulp的gulp.spritesmith插件，这里附上配置源码

/* gulpfile.js */
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const $ = gulpLoadPlugins();

/**
 * @desc 雪碧图自动合成
 */
gulp.task('sprite', function () {
    return gulp.src('src/assets/sprite/*.png')//需要合并的图片地址
        .pipe(spritesmith({
            imgName: 'assets/sprite.png',
            // cssName: 'css/_sprite.scss',
            cssName: 'scss/_sprite.scss',
            padding: 5,
            algorithm: 'binary-tree',
            cssTemplate: function (data) {
                var arr = [];
                data.sprites.forEach(function (sprite) {
                    arr.push(".icon-" + sprite.name + "{" +
                        "background-image: url('" + sprite.escaped_image + "');" +
                        "background-position: " + sprite.px.offset_x + " " + sprite.px.offset_y + ";" +
                        "width:" + sprite.px.width + ";" +
                        "height:" + sprite.px.height + ";" +
                        "display: inline-block;" +
                        "vertical-align: middle;" +
                        "}\n");
                });
                return arr.join("");
            }
        }))
        .pipe(gulp.dest('dist/'))
        .pipe(gulp.dest('src/'));
});

把图放入对应的文件夹中，然后根据文件名对应的类名引用就行了
webpack的话可以使用webpack-spritesmith，安装了webpack-spritesmith之后

var SpritesmithPlugin = require('webpack-spritesmith');
//module.exports = {//代码}
plugins: [
    new SpritesmithPlugin({
        // 目标小图标
        src: {
            cwd: path.resolve(__dirname, './src/assets/imgs/icons'),
            glob: '*.png'
        },
        // 输出雪碧图文件及样式文件
        target: {
            image: path.resolve(__dirname, './dist/sprites/sprite.png'),
            css: path.resolve(__dirname, './dist/sprites/sprite.css')
        },
        // 样式文件中调用雪碧图地址写法
        apiOptions: {
            cssImageRef: '../sprites/sprite.png'
        },
        spritesmithOptions: {
            algorithm: 'top-down'
        }
    })
]

在index.html中引入css

<link rel="stylesheet" type="text/css" href="./dist/sprites/sprite.css" />

最后通过class引入小图标即可

```

### 16.举例说明你对相邻兄弟选择器的理解
```css
div+p{ //相邻兄弟选择器
background: red;
}
符合两个条件就会被选中：
1.紧邻在另一个元素后面
2.两者父元素相同

```

### 17.相邻兄弟选择器、后代选择器和子选择器三者有什么区别？
```
后代选择器与子选择的关系：后代选择器>子选择器。
后代选择器：包括父元素的子元素以及孙子元素（代表符号：空格）

子选择器：包括父元素的子元素（仅仅是子元素）（代表符号：>）

相邻兄弟选择器与后续兄弟选择的关系：后续兄弟选择>相邻兄弟选择器
相邻兄弟选择器：紧跟在目标元素后面的第一个兄弟元素（代表符号：+）

后续兄弟选择器：紧跟在目标元素后的所有兄弟元素（代表符号：~）
```

### 18.用css给一个元素加边框有哪些方法？
```css
:scope {
  border: 3px solid black;

  box-shadow: 0 0 0 1px black; /*不影响布局,无限叠加*/

  outline: 1px solid black; /*不支持圆角*/

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' stroke='%23000' fill='transparent'/%3E%3C/svg%3E");

  background-clip: content-box; /*形成透明边框*/
  padding: 1px;

  border-image: linear-gradient(red, black) 1;
  border: 1px solid;
}
```
### 19.请说说颜色中#F00的每一位分别表示什么？为什么会有三位和六位的表示呢？
```
颜色可以使用红-绿-蓝（red-green-blue (RGB)）模式的两种方式被定义：

十六进制符号 #RRGGBB 和 #RGB
"#" 后跟6位十六进制字符（0-9, A-F）。
"#" 后跟3位十六进制字符（0-9, A-F）。
三位数的 RGB 符号（#RGB）和六位数的形式（#RRGGBB）是相等的。
例如， #f03 和 #ff0033 代表同样的颜色。
函数符 rgb(R,G,B)
"rgb" 后跟3个 或3个 值。
整数 255 相当于 100%，和十六进制符号里的 F 或 FF 。

```

### 20.举例说明css有哪些简写的属性和属性值？
```css
border: solid 1px red;

border-style: solid;
border-width: 1px;
border-color: red;

animation: fadeIn .5s forward ease-in .2s infinite;

animation-name: fadeIn;
animation-duration: 0.5s;
animation-fill-mode: forward;
animation-timing-function: ease-in;
animation-delay: 0.2s;
animation-iteration-count: infinite;

background: url(images/foo.png) center top/cover no-repeat;

background-image: url(images/foo.png);
background-position-x: center;
background-position-y: top;
background-size: cover;
background-repeat: no-repeat;
```

### 21.你知道CSS的标准发布流程吗？
```
随着 CSS 3 的广泛应用，很多新的 CSS 属性层出不穷，有很多陌生的 CSS 属性出现，所以经常需要去学习新的 CSS 属性。新的属性往往介绍文章不多，所以有时候就需要去看看官方文档，此时会发现官方文档有好几个版本，看下图：

 

当初学 flex-box 的时候就发现有好多种写法，还好官方文档开头有标明那些文档时最新的。不过此时我萌生了去了解 CSS 标准流程的想法，我想作为一个合格的 CSSER 也应该去了解吧。这里讲到的知识基本来自 CSS-tricks 上 CHRIS COYIER 的一篇文章：https://css-tricks.com/css-standards-process/ 。

CSS 的标准化流程由 W3C Cascading Style Sheets Working Group (CSSWG)——W3C层叠样式列表小组，由浏览器商，大学，大公司（google，IBM等），以及独立CSS专家组成。W3C 本身并不制定标准，而是作为一个论坛式的平台，接收来自小组成员的提交，并通过会议来商讨制定标准，所有的提交以及讨论都是公开透明的，可以在 W3C 网站上看到会议的记录，标准确定一般有6个阶段，其中两个是过渡阶段：

1. 编辑草案 Editor's Draft (ED)

这个是规范的开始阶段，一个CSS属性或者选择器被提出来，并在CSSWG内部研究。如果小组成员同意这个属性可以正式推出，它就能进入下一阶段。

 

2、工作草案 Working Draft (WD)

编辑草案后是工作草案，标准的设计阶段。小组反复处理来自 CSSWG 内部和来自小组外部的反馈，这个阶段有两个结果：一是可能会因为技术困难或者可能会引起其他问题而使新属性被完全拒绝；二是规范会通过这个阶段，并会作为第一次公开工作草案（ First Public Working Draft (FPWD)）发布，后面还会有数个工作草案，会处理来自 CSSWG 内部和小组外部更广泛社会的反馈。

 

3、过渡－最后通告工作草案 Transition – Last Call Working Draft (LCWD)

这是第一个过渡阶段，当规范开始考虑从工作草案进入到下一个阶段时，将会对新属性的一些小改动的反馈设置一个截止日期，LCWD 即是日期截至后最后的一次公开草案处理。

注：最重要的阶段是 ED, WD, and CR（下面会讲到的），其他阶段不是很重要。

 

4. 候选推荐标准 Candidate Recommendation (CR)

规范会在这个阶段通过完整的测试，测试人员来自 CSSWG 以及被选为实现这个规范的浏览器生产商(Chrome, Safari, Firefox, Opera, 等等)。为了继续进入下一阶段，CSSWG 会推出两个正确的实现规范。

 

5. 过渡－建议推荐标准 Transition – Proposed Recommendations (PR)

当到达这个阶段，W3C全球资源小组：W3C咨询委员会（W3C Advisory Committee），决定这个规范是否会继续进入下一个阶段。这个阶段一般很少有异议出现，所以也是一个过渡阶段而已。

 

6.推荐标准 Recommendation (REC)

如果规范到达这个阶段，说明规范已经考虑完备并可以让浏览器商实现，W3C 和 CSSWG 对这个规范的讨论处理不再活跃，只做一些必要的维护。

注：推荐标准阶段其实不是一个理想的状态，而是一个规范的坟墓，浏览器并不会等到这个阶段才去实现它，而是在 CR 阶段就会实现这个规范。为什么说是坟墓呢，因为到达 REC 阶段后，规范会止步不前，而不是变得稳定。因为在 REC 阶段 CSSWG 并不会投入精力去修复新出现的错误，所以错误会不断积累，而新版本的规范已经在开发了，老的规范已经失去了继续发展的活力以及意义，留下的问题就只能通过 hack 去弥补，同时会有新的属性去代替它实现更好的功能。

那什么时候规范才是稳定的呢？文章中有引述了 Tab Atkins Jr （google团队成员，也是 CSSWG 以及 W3C 的成员）的一段话，内容大概是：规范的稳定性基本和它所在的流程阶段没有关系。当规范特性已经开始传播开来，并因为向后兼容性不能改变时，它才是稳定的，这个阶段可能会在 ED 规范阶段或者 CR 阶段，这才是稳定性评判的正确方法，而不是 W3C 的标准发布流程。说到这里，作者也提到了怎样根据 CSS 新属性的稳定性情况去使用它，避免跳坑，其实就是能够实现渐进增强与优雅降级。这里不得不提到一个有名的网站 http://caniuse.com 估计这个网站大多数人都会用到了，简直是 CSSER 的福音啊，通过这个网站，当键入某个属性时，可以在下面的resources标签很快速地找到它的官方文档以及很多最新的学习文章，同时了解到到一些现有的使用问题（issues）。举个例子，比如键入flex时，下面有这样的标签：

里面有来自css－trick、github等著名网站的文章，很多都是比较新，并且写得很好的文章。 

这里还有个小常识，就是关于 CSS 3 的这个命名，Tab Atkins Jr 在文章 A Word About CSS4 代表 CSSWG 做了阐述，主要内容就是 CSS 3 代表了 CSS 2.1 后新增的 CSS属性，而且不会有 CSS4 这样的东西出现。下面是我看完后结合文章内容以及自己的一些理解，不想看原文的可以稍微了解一下。可能理解不是很到位，不过应该不会偏颇太多：CSSWG 想结束 CSS 2.1 这个版本时，发现 “versions”（版本）这个东西不好用，因为一旦使用版本来发布 CSS 时，CSS 变得很难维护，发展也会变慢。结合上面 CSS 的标准发布流程以及现在 CSS 的使用情况，不难想到确实是这样。因为 CSS 的整体性不强，CSS 属性都是为了实现某个效果单独被提出并反馈，和其他提出的属性并没有什么交集；有的属性一直在用不需要什么新的更新，而有的属性可能很快要被淘汰，所以以一整个版本去发布 CSS 很不科学。基于这样的想法，CSSWG 决定把 CSS 分成很多独立的小模块，每个模块只包含一个主要的特性（feature），可以自己单独升级开发，为什么要分成小的只包含少数特性的模块呢？这样就不会因为一个模块包含太多特性，然后因为某个特性特别棘手不好解决而阻碍整个模块其他特性的发展升级。因为这个想法是在结束 CSS 2.1 版本的时候决定的，那么现在 CSS 就要以模块来整理一下，也要相应定一些等级（level）。规则是这样的： 

1、如果模块在 CSS 2.1 就有相关的内容，那么这些模块就从 level 3 开始。

2、如果是完全新的属性（比如 Flexbox），就直接从 level 1 开始。

3、一个模块的级别和它所在 CSS 的版本无关，即不管它是 CSS 2.1 的内容还是完全新的属性。因为模块的概念是新提出来的，所以只要是模块，就都属于 CSS 3（或者也可以说都是 CSS），不管它们处于什么模块等级。

4、可能会看到类似 css4-backgrounds 这样的写法，其实代表的是 CSS Background & Borders Level 4，即4表示的是模块的等级。

后来发现大漠前辈也写了相关文章，内容更全面，讲到了浏览器前缀的问题。我也参考了一下，大家可以点下面的参考链接去看看。
```









