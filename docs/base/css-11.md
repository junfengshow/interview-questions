---
title: css-11
group:
  title: css基础
  order: 11
---

### 1.举例说明你对指针事件（pointer-events）的理解
pointer-events CSS 属性指定在什么情况下 (如果有) 某个特定的图形元素可以成为鼠标事件的 target。

当point-events 为none时，比如a连接不再生效

### 2.鼠标事件css的:hover和js的mouseover有什么区别？
```
JavaScript中鼠标事件有：
onmouseover和onmouseout： 当鼠标移入和移出时触发事件
onmousedown和onmouseup： 当鼠标按钮被按下或者松开时触发事件
onclick和ondbclick ：当鼠标单击或者双击时触发事件
onmousemover ：当鼠标移动时触发事件
CSS：hover是css中的一种伪类选择器，指鼠标移入然后移出的过程，这个操作可以改变元素的样式，而且它相应的子类也被改变。但无法改变元素的内容。
比如，鼠标经过实现弹出窗口的效果，它用的是onmousemove实现的，如果用hover则没办法做出这样的效果。

总结：CSS只能改变元素的样式，无法改变元素的内容，如果要改变内容应该使用JavaScript鼠标事件onmouseover和onmouseout。
所以只是为了样式效果，用CSS的伪类hover，如果需要动态改变，则选择js的事件。
```

### 3.使用css的attr()写一个类似a标签title的提示框
```jsx
import React from 'react';
export default () => (
  <>
    <style 
      dangerouslySetInnerHTML={{__html: `
        .css-11-box {
          position:relative;
        }
        .css-11-box:hover:after {
          content: attr(data-title);    
          display: block;
          padding: 10px 14px;
          border: 1px solid #ddd;
          border-radius: 5px;
          position: absolute;
          top: -50px;
          left: -10px;
        }
      `}}
    />
    <div className='css-11-box' data-title='title'>ldldle;d;;d</div>
  </>
)
```

### 4.举例说明如何从html元素继承box-sizing？
```css
 html{
      box-sizing:border-box;
  }
  *,*:before,*:after{
      box-sizing:inherit;
  }
```

### 5.异步加载CSS的方式有哪些？
```
异步加载CSS

加载css
<link href='xxx.css' rel='stylesheet'></link>

这样是没错！但是这样有问题啊——会阻塞渲染！浏览器看到这个标签就会停下手里的活儿，去加载 CSS 并解析了。

当然了，如果这个 CSS 文件是接下来要渲染的内容所需的，那无可厚非，必须先要有了这个 CSS 才能接着渲染，阻塞也是情理之中。

但实际的情况却是，我们很多 CSS 内容其实在首屏的时候是不需要，起码等到后续才会使用，那么这个时候这些 CSS 这样加载去阻塞内容渲染就不对了。

也就是说，针对优先级不那么高的（暂时用不到）CSS，就应该要想办法让它异步加载，不要阻塞浏览器渲染。

那么怎么弄呢？

老方子
现在介绍第一种老办法：通过 JS 动态插入 link 标签来异步载入 CSS 代码，就像这样：

var myCSS = document.createElement( “link” );
myCSS.rel = “stylesheet”;
myCSS.href = “mystyles.css”;
document.head.insertBefore( myCSS, document.head.childNodes[ document.head.childNodes.length - 1 ].nextSibling );
这个很好理解吧，就是后续 JS 执行的时候，去创建一个 link 标签来加载 CSS 代码。

还有一个办法呢就是利用 link 上的 media 属性，将它设置为和用户当前浏览器环境不匹配的值，比如：media=“print”，甚至可以设置为一个完全无效的值 media=“jscourse” 之类的。

这样一来，浏览器就会认为这个 CSS 文件优先级非常低，就会在不阻塞的情况下进行加载。但是为了让 CSS 规则生效，最后还是要将 media 值改对才行。

介绍完了老方子，我们再来看看新药方。

新的异步加载方式
新方子就是利用规范中新增加的 rel=“preload” ，就像这样：

通过 preload 属性值就是告诉浏览器这个资源文件随后会用到，请提前加载好。但是这只是加载，所以你看当它加载完毕后，还是需要将 rel 值改回去，这才能让 CSS 生效。
你是不是想问：这和老方子也没多大区别嘛！

看上去确实如此，但是呢，语义上更加好一些。另外就是你仔细点就会发现 as="style"这个属性，所以 preload 不仅仅可以用在 CSS 文件上，而是可以用在绝大多数的资源文件上。比如：JS 文件

然后要用的时候，就创建一个 script 标签指向它：
var script = document.createElement(“script”);
script.src = “scriptfile.js”;
document.body.appendChild(script);
这个时候浏览器就直接从缓存中拿这个文件了，不会再发请求了，因为此前已经加载好了。

那么 preload 中的 as 属性支持哪些资源文件呢？下面这些都可以：

audio
document
embed
fetch
font
image
object
script
style
track
worker
video
目前 preload 只有 Chrome 是完美支持的.
```

### 6.css的加载会阻塞DOM树解析和渲染吗？为什么
css的加载不会阻止DOM树的解析

css的加载会阻止DOM树的渲染，因为css的下载完成后解析成CSSOM与DOM生成渲染树后，页面才会渲染，绘制出来

### 7.css的加载会阻塞js运行吗？为什么？
会阻塞js的执行，因为js可能会去获取或改变元素的样式，所以浏览为了不重复渲染，
等所有的css加载渲染完成后在执行js

### 8.使用纯css能否监控到用户的一些信息？怎么实现？
```css
利用:active 伪类实现监控用户的点击
.button-1:active::after {
  content: url(./pixel.gif?action=click&id=button1);
  display: none;
}
.button-2:active::after {
  content: url(./pixel.gif?action=click&id=button2);
  display: none;
}
```

### 9.请使用css3实现图片的平滑转换
以全局监听的方式通过 a 标签的描点进行 view 动态切换页面，只要把 a 标签带有 id 的 href 属性的值指到锚点，用 CSS3 的动画进行切换页面.

### 10.使用css画个钟表的时间刻度

### 11.ui设计中px、pt、ppi、dpi、dp、sp之间的关系？
```
先介绍下各自的定义：

px：pixel，像素，电子屏幕上组成一幅图画或照片的最基本单元
pt: point，点，印刷行业常用单位，等于1/72英寸
ppi: pixel per inch，每英寸像素数，该值越高，则屏幕越细腻
dpi: dot per inch，每英寸多少点，该值越高，则图片越细腻
dp: dip，Density-independent pixel, 是安卓开发用的长度单位，1dp表示在屏幕像素点密度为160ppi时1px长度
sp: scale-independent pixel，安卓开发用的字体大小单位。
以下是换算关系：

一、pt和px
公式一： 1pt= (DPI / 72) px

当photoshop中新建画布的分辨率为72ppi( 即 72dpi时 )， 1pt=1px； 当新建画布分辨率为72*2=144ppi时，1pt=2px

二、ppi和dpi
dpi最初用于衡量打印物上每英寸的点数密度。DPI值越小图片越不精细。
当DPI的概念用在计算机屏幕上时，就应称之为ppi。
同理： PPI就是计算机屏幕上每英寸可以显示的像素点的数量。
因此，在电子屏幕显示中提到的ppi和dpi是一样的，可认为

公式二：dpi=ppi

三、ppi计算方法
ppi是指屏幕上的像素密度，其计算方法为：

公式三： ppi= 屏幕对角线上的像素点数/对角线长度 = √ （屏幕横向像素点^2 + 屏幕纵向像素点^2）/对角线长度

以小米2s为例，该屏幕分辨率为720px*1280px，4.3英寸。则点密度为 √ (720^2 +1280^2) /4.3 = 342ppi。

四、px和dp
dp为安卓开发时的长度单位，根据不同的屏幕分辨率，与px有不同的对应关系。

安卓端屏幕大小各不相同，根据其像素密度，分为以下几种规格：

1dp定义为屏幕密度值为160ppi时的1px，即，在mdpi时，1dp = 1px。 
以mdpi为标准，这些屏幕的密度值比为：ldpi : mdpi : hdpi : xhdpi : xxhdpi = 0.75 : 1 : 1.5 : 2 : 3；即，在xhdpi的密度下，1dp=2px；在hdpi情况下，1dp=1.5px。其他类推。

公式四： 1dp=（屏幕ppi/ 160）px

以WVGA屏为例，该屏幕为480px*800px，按3.8寸屏算，点密度 √ (480^2 + 800^2) / 3.8 = 245，约等于240，对应于hdpi屏幕，所以该屏幕1dp=1.5px

五、dp和sp
dp和sp都是安卓的开发单位，dp是长度单位，sp是字体单位。
sp与dp类似，但是可以根据用户的字体大小首选项进行缩放。
Android系统允许用户自定义文字尺寸大小（小、正常、大、超大等等）.

公式五：当文字尺寸是“正常”时1sp=1dp，而当文字尺寸是“大”或“超大”时，1sp>1dp。

一般情况下可认为sp=dp。

总结：由于做设计时以xhdpi为模板，xhdpi条件下，1dp=2px。若新建画布时，将画布分辨率设为144ppi，则1pt=2px=1dp。此时，即可将pt等同于dp。标注长度的时候，将长度像素除以2即为dp值。

PS：在photoshop cc中切图时，可直接在.png 图片图层名称前加上200%获得2倍大小的图，其他比例的切图以此类推。输出的两倍图不模糊的前提是，该图是photoshop中用形状工具画出来的未被栅格化的图形，而不是已被栅格化的图层或外部导入的图片。

android获取屏幕尺寸、密度
有些时候，我们需要获取Android手机或Pad的屏幕的物理尺寸，以便于界面的设计或是其他功能的实现。下面就介绍讲一讲如何获取屏幕的物理尺寸：
从网上找过不少资料，发现获取屏幕尺寸并不是很复杂的编程操作，下面的代码即可获取屏幕的尺寸。
在一个Activity的onCreate方法中，写入如下代码：
DisplayMetrics metric = new DisplayMetrics();
getWindowManager().getDefaultDisplay().getMetrics(metric);
int width = metric.widthPixels; // 屏幕宽度（像素）
int height = metric.heightPixels; // 屏幕高度（像素）
float density = metric.density; // 屏幕密度（0.75 / 1.0 / 1.5）
int densityDpi = metric.densityDpi; // 屏幕密度DPI（120 / 160 / 240）
但是，需要注意的是，在一个低密度的小屏手机上，仅靠上面的代码是不能获取正确的尺寸的。
比如说，一部240x320像素的低密度手机，如果运行上述代码，获取到的屏幕尺寸是320x427。
因此，研究之后发现，若没有设定多分辨率支持的话，Android系统会将240x320的低密度（120）尺寸转换为中等密度（160）对应的尺寸，这样的话就大大影响了程序的编码。
所以，需要在工程的AndroidManifest.xml文件中，加入supports-screens节点，具体的内容如下：

这样的话，当前的Android程序就支持了多种分辨率，那么就可以得到正确的物理尺寸了。
```

### 12.举例说明shape-outside的属性的用途有哪些？
shape-outside定义了一个可以是非矩形的形状，相邻的内联内容应围绕该形状进行包装。

比如使用 shape-outside: circle(); 属性可以实现文字圆形环绕图片的效果。

### 13.用css3画出一个立体魔方
```jsx
import React from 'react'
import Css11Box from '../components/CssDemo/Css11Box'

export default () => <Css11Box />;
```

### 14.如何重写行内样式？方法有哪些（至少两种）？
1. !important 最高级
2. var divStyle = document.querySelector('#div').style;  修改属性

### 15.有哪些标签是不支持伪元素的？
首先我们要知道伪元素有哪些：
::after ::before ::first-letter ::fist-line （单双冒号皆可）
::selection ::backdrop （仅双冒号）
伪元素虽然强大，但是还是有一些特定的标签是不支持伪元素 before 和 after 的。

诸如 img 、input、iframe，这几个标签是不支持类似 img::before 这样使用。

究其原因，要想要标签支持伪元素，需要这个元素是要可以插入内容的，也就是说这个元素要是一个容器。
而 input，img，iframe 等元素都不能包含其他元素，所以不能通过伪元素插入内容。


### 16.请问class与[class=xxx]的区别是什么？两者是否等价？
不等价  
class是类选择器，可以作用于任何dom元素  
[class=xxx]是属性选择器 只能作用于特定类型的dom元素  

### 17.为什么说对opacity进行动画要比box-shadow进行动画性能更好呢？
opacity的动画过程既不会影响布局，也不需要重绘

### 18.能不能使用纯css使你的浏览器卡死？怎么实现？
可以，用计算属性calc，变量

### 19.如何使用css实现鼠标跟随？
铺满元素, hover + box-shadow

### 20.你有使用过css的属性background-blend-mode吗？说说它的运用场景有哪些？
背景的混合模式,可以是背景图片与背景图片的混合,也可以是背景图片和背景色的之间的混合.

### 21.用css3实现文字发光的效果

### 22.用css3实现伪3D的文字效果

### 23.如何解决html设置height：100%无效的问题？
在外层包一个给定高度的 div

### 24. 用css画出一个圆圈，里面有个对号
```css
#right {
  width: 150px;
  height: 150px;
  margin: 100px auto;
  border-radius: 50%;
  border: 5px solid #000000;
  display: flex;
  justify-content: center;
  align-items: center;
}
#right::before {
  content: "";
  display: block;
  width: 88px;
  height: 50px;
  border: 20px solid #000000;
  border-right: none;
  border-top: none;
  transform: rotate(-45deg) translate(7px, -10px);
}
```

### 24.用css画出一个圆圈，里面有个叉号（不能用英文字母x）

### 25.CSS content属性特殊字符有哪些？
今天在做开发的时候，需要用到CSS的content属性，加入一些特殊字符来实现网页效果。但是特殊字符那么多，怎么可能记得住，所以谷歌百度搜索之后找到了一个比较全的，在这里进行归纳备忘，为了和我有相同需求的童鞋以及自己日后再用到的时候提供方便。

因为这些字符属于unicode字符集，所以，我们在使用的时候需要将添加这些字符的代码声明为UTF-8格式；

还有一点需要注意的是，部分字符在不同浏览器中显示的效果不同，所以在使用的时候，需要自己在不同的浏览器中进行试验。在苹果和安卓等系统的智能设备下的识别度也比较差，所有希望慎用。


### 26.写出在不固定宽高的元素在固定高度的情况下水平垂直居中的方法
+ flex布局；还有就是可以用定位也可以实现等等；
+ flex：父div：｛display：flex； justify-content: center;align-items: center;｝；
+ 定位方法，相对定位在通过偏移元素实现水平垂直居中等等，我常用就是这两种，使用的时候注意兼容性

### 27.怎么给手持设备添加特殊样式？
-webkit-touch-callout:none ---------- 禁止长按弹出菜单

### 28.一个项目中有很多无用的css代码，怎么找到并清除这些无用的代码？
1. 使用浏览器插件
2. 使用PurifyCSS
3. chrome浏览器 F12审查元素的Audits，手动删

### 29.你们团队中css的class命名采用的是什么方式呢？下划线还是横线还是驼峰？
形式 .a .a-b

不用驼峰和_，因为这两样都需要 shift 辅助输入, 驼峰越多，按下shift 键的次数就越多。

### 30.举例说明CSS特性检测的方式有哪些？
```
原生的 @supports 的性能肯定是最好的，而且无需引入外部 javascript ，首推这个，但是无奈兼容问题，目前来看不是最好的选择。

Modernizr 功能强大，兼容性好，但是需要引入外部 javascript，多一个 http 请求，如果只是进行几个特性检测，有点杀鸡用牛刀的感觉。
针对需要的特性检测，使用 javascript 实现一个简单的函数，再把上面用到的方法封装一下：

/**

用于简单的 CSS 特性检测

@param [String] property 需要检测的 CSS 属性名

@param [String] value 样式的具体属性值

@return [Boolean] 是否通过检查
*/
(function(property, value) {
// 用于测试的元素，隐藏在页面上
var ele = document.createElement('div');

// 只有一个参数的情况
if(arguments.length === 1) {
if(property in ele.style) {
return true;
}
// 两个参数的情况
}else if(arguments.length === 2){
ele.style[property] = value;

 if(ele.style[property]) {
     return true;
 }
}
ele = null;
return false;
})("font-size",'10px');
```

### 31.如何使用css给一个正方形添加一条对角斜线？
```css
.a {
   background:linear-gradient(45deg,transparent 49.5%,deeppink 49.5%,deeppink 50.5%,transparent 50.5%);
}
```

### 32.说说position:sticky有什么应用场景
吸顶效果

### 33.用css画出一把刻度尺

### 34.你会经常用到伪元素吗？一般都用在哪方面？
清浮动

### 35.说说sroll-snap-type属性的运用场景有哪些？相关联的属性还有哪些？
```
使用 sroll-snap-type 优化滚动
根据 CSS Scroll Snap Module Level 1 规范，CSS 新增了一批能够控制滚动的属性，让滚动能够在仅仅通过 CSS 的控制下，得到许多原本需要 JS 脚本介入才能实现的美好交互。

Tips：本文截的一些 Gif 图涉及容器滚动，效果不是很好，可以点进 Demo 里实际感受下。

sroll-snap-type
首先看看 sroll-snap-type 可能算得上是新的滚动规范里面最核心的一个属性样式。

scroll-snap-type：属性定义在滚动容器中的一个临时点（snap point）如何被严格的执行。

光看定义有点难理解，简单而言，这个属性规定了一个容器是否对内部滚动动作进行捕捉，并且规定了如何去处理滚动结束状态。

语法
{
scroll-snap-type: none | [ x | y | block | inline | both ] [ mandatory | proximity ]?
}
举个例子，假设，我们希望一个横向可滚动容器，每次滚动之后，子元素最终的停留位置不是尴尬的被分割，而是完整的呈现在容器内，可以这样写：
```

```css
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>

ul {
    scroll-snap-type: x mandatory;
}
 
li {
    scroll-snap-align: center;
}
```














