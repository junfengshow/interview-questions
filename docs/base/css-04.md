---
title: css-4
group:
  title: css基础
  order: 4
---

### 1.说说你对低版本IE的盒子模型的理解
一个CSS盒子由四部分组成，由内到外依次是：content、padding、border、margin。

所谓盒子模型定义的是盒子宽高的计算方法，IE盒子模型的宽高为content、padding、border之和。而W3C盒子的宽高仅为content。从页面布局来说前者实际上更实用一点，这也是后来W3C提供box-sizing属性用于切换盒子模型的原因。

### 2.行内元素和块级元素有什么区别，如何相互转换？
```
一般通过display属性来区分块级元素和行内元素，block代表块级元素，inline代表行内元素。
块级元素：
1、内容独占一行。
2、width和height可以设置。
3、margin和padding也可以设置。
行内元素：
1、内容不独占一行。
2、width由内容撑开，不可设置。
3、竖直方向marigin和padding不可设置，水平方向可设置。
4、有多个行内元素，则会排列在一行，直到父容器放不下才会换行。
块级元素和行内元素通过修改display属性可相互切换。
```

### 3.怎么实现移动端的边框0.5px？
```
一种是通过transform中的scale

    border: 1px solid red;
    transform: scaleY(.5);

一种是通过meta viewport中设置init-scale为0.5
<meta name="viewport" content="width=device-width, initial-scale=0.5">
一种是设置hr

    border: 0px;
    border-bottom: 1px solid red;

一种是基于背景渐变实现

    height: 2px;
    background-image: linear-gradient(0deg, red 50%, transparent 50%)
```

### 4.CSS中的calc()有什么作用？
用来计算长宽的属性,非常好用,百分比,px,vh/vm都可参与计算,
运算符的左右要有空格,要不然不生效。

### 5.过渡和动画的区别是什么？
```
相同：都会让你的页面元素动起来
区别：
过渡 transition

1.需要事件触发，比如hover，focus，checked , js改, @media query
2.一次性的
3.只能定义开始和结束状态，不能定义中间状态
举例：
transition: width 2s;
动画 animation

1.不需要事件触发
2.显示地随着时间的流逝，周期性的改变元素的css属性值。区别于一次性。
3.通过百分比来定义过程中的不同形态，可以很细腻
举例：
原生css实现闪烁的bling bling的效果

@keyframes bling-kf {
   0% { opacity: 1; }
   50% { opacity: 0.5; }
   100% { opacity: 1; }
}
.bling {
    animation: bling-kf 2s ease-in infinite;
}
```

### 6.position的relative和absolute定位原点是哪里？
```
absolute: 定位原点为第一个position不为static的父级元素的左上角。
可以基于该特性实现height:100%生效
relative：定位原点为元素本身的所在位置。
relative的偏移量设置会导致显示效果和定位原点不重合。
```

### 7.说说你对设备像素比的理解
DPR 物理像素与逻辑像素的比

### 8.你有用过table布局吗？说说你的感受
用来做列表排版还是很不错的，但是要想用的好，还是要对table有比较多的了解。
比如实现表头固定，表内容超出滚动的效果等

### 9.举例说明时间、频率、角度、弧度、百分度的单位分别是哪些？
```
时间: s, ms
频率: Hz
角度: deg
弧度: rad
百分度: grad
```

### 10.标签、class和id选择器三者的区别是什么？分别在什么时候用？
```
标签选择器：tag{} 选取对应的标签例如 a span div
class选择器：.class-name{} 选取对应class-name的元素
id选择器：#id-name{} 选取对应id的元素
其中id是具有唯一性的。
三者优先级为 id>类>标签
因此一般可以用标签选择器添加该标签的通用样式，类选择器对样式进一步细化，id选择器针对某几个需要特殊处理的元素添加单独的样式。
```

### 11.为什么要使用css sprites？
减少HTTP请求  
增加图片显示速度

### 12.Reset CSS和Normalize CSS的区别是什么？
+ Reset：将所有浏览器的默认样式都统一化，注重的是跨浏览器统一样式，用户还要自行添加一些默认样式。
+ Normalize：会根据各个浏览器的不同保留有用的浏览器特色样式，修复浏览器的一些BUG，更注重易用性。

### 13.怎么自定义鼠标指针的图案？
cursor: url() , auto
url是自定义光标图案的绝对路径，auto是默认光标，当我们自定义的光标不起作用时，就用默认光标代替。

### 14.你知道CSS中的字母"C"代表什么吗？
CSS(Cascading Style Sheets)。"C" 即为 Cascading 层叠的意思，我们编写 CSS 的时候，写在后面的样式会覆盖前面的样式即层叠。

### 15.你有没有自己写过一套UI库？说下遇到哪些难点？
维护过，碰到的坑主要是  
1. 同一个UI component在不同地方使用的customization问题。
2. 还有如果UI component如果有bug的话会导致所有使用的地方都出现bug
3. 改了一个UI component后在A处work，但是在B处因为context不一样导致render出来的效果不一样

### 16.举例说明微信端兼容问题有哪些？
```
说一个微信小程序的iPhoneX适配吧， 因为iPhoneX底部没有虚拟按键，底部的横线会出现遮挡这时候就要处理下：
大概思路就是获取到客户端设备，然后判断是iPhoneX就换样式。
在app.js中添加一个检测当前设备是否是iPhoneX的变量：

  globalData: {
    userInfo: null,
    isIphoneX: false//判断是否是iPhoneX
  },
  onShow: function() {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        // console.log('手机信息res'+res.model)  
        let modelmes = res.model;
        if (modelmes.search('iPhone X') != -1) {
          that.globalData.isIphoneX = true
        }
      },
    })
  }

在需要做兼容的xxx.js中引入：

var app= getApp();
Page({
data: {
  isIphoneX: false
},
onLoad: function(){
      // 判断是否为iPhoneX
    var isIphoneX = app.globalData.isIphoneX;
    console.log(isIphoneX ? '是iPhoneX' : '不是iPhoneX')
    this.setData({
      isIphoneX: isIphoneX
    })
  }
})

```

### 17.什么是zoom？它有什么作用？
```
zoom 最初是 IE 的私有属性，现在除了 Firefox 之外的浏览器基本都支持 zoom。不过，zoom 依旧不是正式的属性。与之对应的 transform 的 scale 属性是正式的 CSS 属性。

zoom 主要的作用是用于元素或者页面的缩放；transform 的 scale 也有同样的作用，两者有如下的区别。

zoom 的缩放点在元素左上角。在 Chrome 下，文字如果缩小后小于 12px 的情况仍然会显示 12px。并且 zoom 缩放会影响元素实际的位置，这样就会造成页面的重排和重绘，在性能上会有影响。
transform 的 scale 缩放点在元素中心。缩放会对文字有影响，可以利用此属性实现 Chrome 下小于 12px 的字体。但是 transform 缩放后不会改变元素的位置，即如果元素原来是 200px 宽，缩小 50% 后虽然看上去只有 100px 宽了，但是仍然占 200px。
```

### 18.说说你对hasLayout的理解，触发hasLayout的方式有哪些？
hasLayout可理解为是IE7以及更旧版本的BFC。

跟BFC一样，hasLayout不能直接通过属性进行设置，而是需要一定的触发条件。具体条件可在进行向下兼容时再查阅相关资料.

### 19.说说你对min-width和max-width的理解，它们有什么运用场景？
min-width和max-width可以使得自适应布局保持一个基本的样式。

用于多列布局时候，可以保证某几列的布局保持在一定的范围内。

比较常见的应用应该是网站首页的三栏布局类型，一般是两边的侧边栏会设定一个最大最小宽度，中间为主栏，这样不管如何缩放都能突出主栏，且侧边栏也不会缩太小影响观感

### 20.设置字体时为什么建议设置替换字体？
这是由于网站用户的浏览设备不同，可能并不支持或没有安装你所设置的字体。  
这时候就会自动使用替换字体来对网页进行一个展示。  
设置替换字体可以尽可能保证所有用户的浏览体验。  

### 21.请举例说明伪元素 (pseudo-elements) 有哪些用途？
```
    可以不用再多写一个 dom
    可以用 content 搭配出很多效果

例子：
    固定尺寸 2:1 的容器
    文本前后增加 icon 或图片
    使用 data-* 和 content: attr(data-*) 搭配
    使用 :hover 和 content 搭配出很多效果
    作为修饰元素
    使用 content: counter() 玩有序数字
    参与 inline-block 垂直居中
```

### 22.举例说明伪类:nth-child、:first-child与:first-of-type这三者有什么不同？

### 23.使用纯CSS代码实现动画的暂停与播放
```css
一个属性：animation-play-state
取值：paused（暂停）|running（播放）
hover取代点击
.stop:hover~.animation {
  animation-play-state: paused;
}

checked伪类
radio标签的checked伪类，加上实现点击响应
#stop:checked ~ .animation {
  animation-play-state: paused;
}
#play:checked ~ .animation {
  animation-play-state: running;
}
```

### 24.说说visibility属性的collapse属性值有什么作用？在不同浏览器下有什么区别？

```
设置visibility: collapse后对于普通元素来说跟visibility: hidden效果一样，隐藏元素，且占用空间
但对于一些table元素，比如row、columu、group，效果则跟display: none一样，隐藏元素，但不占空间
但这些效果会随着浏览器底层实现不同而改变：

    在Chrome下，visibility: collapse都与visibility: hidden没有什么区别，即仍会占用空间
    在火狐浏览器、Opera里，使用collapse值的效果就如它的字面意思：table的行会消失，它的下面一行会补充它的位置，不占用空间。
    在IE即使设置了visibility: collapse，还是会显示元素。
```

### 25.absolute的containing block（容器块）计算方式和正常流有什么区别？
absolute会先向上找到第一个position不为static或者fixed的祖先元素，然后根据该祖先元素的display属性分类讨论。

如果为块级元素，则为该块级元素的padding box。

如果为行内元素，则为包含该祖先元素内所有行内元素的padding box

如果是正常流，其中元素的containing block是其最近的块级元素的content box

### 26.有用过scss和sass吗？说说它们之间的区别是什么？
sass和scss其实是一样的css预处理语言，其后缀名是分别为 .sass和.scss两种。

SASS版本3.0之前的后缀名为.sass，而版本3.0之后的后缀名.scss。

两者是有不同的，继sass之后scss的编写规范基本和css一致，sass时代是有严格的缩进规范并且没有‘{}’和‘；’。而scss则和css的规范是一致的。

### 27.举例说明实现圆角的方式有哪些？
不使用 border-radius 的情况下只能用切图代替。此时非常有局限性，因为必须要定高定宽了。

最常用的 border-radius 来实现。

### 28.有哪些方式可以对一个DOM设置它的CSS样式？
1. 可以使用行内样式
2. 可以使用style标签
3. 可以使用link引入css文件
4. 可以使用js动态修改
   
### 29.如何使用css3实现一个div设置多张背景图片
```css
background-image: url("1.jpg"),url("2.jpg"),url("3.jpg");
background-repeat: no-repeat, no-repeat, no-repeat;
background-position: 0 0, 200px 0, 400px 201px;
```

### 30.transition、animation、transform三者有什么区别？

+ transition:比较简单的过度动画
+ animation: 使用keyframe自定义动画,比较详细的动画过程
+ transform: 2D或者3D的变形属性









