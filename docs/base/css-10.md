---
title: css-10
group:
  title: css基础
  order: 10
---

### 1.css中的选择器、属性、属性值区分大小写吗？
选择器和属性区分大小写，属性值如果是颜色可以不区分大小写

### 2.说说你对相对定位、绝对定位、固定定位的理解
```
position 属性指定了元素的定位类型。

position 属性的五个值：

static（默认值）
relative（相对定位）
fixed（固定定位）
absolute（绝对定位）
sticky（粘性定位）
relative 相对定位：相对自身元素的原来进行定位。

移动相对定位元素，但它原本所占的空间不会改变。
相对定位元素经常被用来作为绝对定位元素的容器块。
用途：
第一个，为微调元素的位置
第二个，做绝对定位的参考(父相子绝)
absolute 绝对定位：绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于<html>（初始包含块）

absolute 定位使元素的位置与文档流无关，因此不占据空间。
absolute 定位的元素和其他元素重叠。
fixed 固定定位：元素的位置相对于浏览器窗口是固定位置。

即使窗口是滚动的它也不会移动
Fixed定位使元素的位置与文档流无关，因此不占据空间
Fixed定位的元素和其他元素重叠
用途：
固定到浏览器窗口固定位置的元素
跟随导航
回到顶部
sticky 粘性定位：粘性定位的元素是依赖于用户的滚动，在 position:relative 与 position:fixed 定位之间切换。

它的行为就像 position:relative; 而当页面滚动超出目标区域时，它的表现就像 position:fixed;，它会固定在目标位置。
元素定位表现为在跨越特定阈值前为相对定位，之后为固定定位。
这个特定阈值指的是 top, right, bottom 或 left 之一，换言之，指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。
用途：页面吸顶效果
```

### 3.什么是hack？css的hack有哪些？

### 4.你知道什么是面向对象的css（oocss）吗？有没有实践过？
```
oocss(Object Oriented CSS)不是一种技术也不是一种语言，它是一种css的书写方法，其核心是用最简单的方式编写最整洁的css代码，使代码更具重用性、可维护性和可拓展性。
OOCSS的两条主要准则：
1.结构和皮肤分离;
2.容器和内容分离;

比如一些常用的字体大小、padding、margin值等可以封装为公共样式，html中引用多个类似的类名达到UI效果，减少特性css的代码量
.text-12{ font-size: 12px; } 
.text-14{ font-size: 14px; } 
.text-16{ font-size: 16px; }
```

### 5. flex布局的缺点有哪些？（除兼容性外）
无法直接定义列数(要使用百分比的方式实现)

### 6.padding会影响到元素的大小，那不想让它影响到元素的宽度应该怎么办？
box-sizing:border-box

### 7.如何让IE6支持min-width和max-width？
```css
利用IE特有的css语法
.className {
    max-width:620px;
    min-width:1px;
    _width:expression(this.scrollWidth > 620 ? "620px":(this.scrollWidth < 1? "1px":"auto"));
}
```

### 8.如何解决IE6浮动时产生双倍边距的BUG？
1. 当块级元素有浮动样式的时候，给元素添加margin-left和margin-right样式，在ie6下就会出现双倍边距
2. 给当前元素添加样式，使当前元素不为块，如：display:inline;display:list-item 这样在元素浮动的时候就不会在ie6下面产生双倍边距的问题了

### 9.OOCSS有哪些好处？对应的库有哪些？
有语义的类名，逻辑性强的层次关系
可重用，样式和结构的分离，容器和内容的分离
Kite

### 10.CSS中哪些属性会引起GPU渲染，会增加耗电吗？
肆无忌惮的开启GPU硬件加速，会导致大量消耗设备电量，降低电池寿命等问题。

### 11.如何在白天和黑夜自动切换页面的颜色？
```
媒体查询的内容都是设备的属性：宽度高度，旋转方向，打印样式，分辨率
所以用媒体查询的话，需要用户的设备拥有切换黑暗模式的功能
借助 js 切换页面颜色的话，那就是

获取地理位置
查询日出日落时间
根据时间修改全局 theme
```

### 12.如何给文字的color设置渐变
```css
.text {
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### 13.为什么说css中能用子代选择器的时候不要用后代选择器？
选择从右到左依次解析匹配，所以后代选择器会去找它的所有父级，
而子代选择器只会选择直接的父级；减少匹配次数，提高效率

### 14.你有没有使用过“形似猫头鹰”（例：* + *{ ... }） 的选择器？
以前常用，比如

li + li {
	margin-top: 1rem;
}
这样可以给除了第一个li以外的li指定样式，比如在两个li之间加上margin

### 15.用css画一个五边形和一个六边形
```css
五边形：

clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
六边形：

clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
七边形：

clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%);
```

### 16.使用纯css来创建一个滑块

### 17.使用css3实现一个斑马线的效果
```
如果需要很多或者无限扩展的斑马线，你这个方案就有缺点了
你的方案需要增加额外的元素，不太理想
最好的办法是用渐变背景实现
linear-gradient( [ [ <angle> | [top | bottom] || [left | right] ],]? <color-stop>[, <color-stop>]+);
/*角度|方向、开始颜色 开始位置、结束颜色 结束位置*/
我们将开始位置与结束位置设置为相等或大于，就可以得到条纹图案。
```

### 18.如何使用css实现跨浏览器的最小高度？
```css
   div{
       height:auto!important; 
       height:200px; 
       min-height:200px; 
   }
这个第一个已经 important 了，后面的属性设置应该也没用了吧
浏览器兼容接触的比较少了，目前项目只兼容 blink
```

### 19.怎么设置可点击的元素上强制手型？
cursor 属性

### 20.使用css实现悬浮提示文本
```css
<div class="tips-demo" data-tips="提示文本">演示文本</div>

<style>
.tips-demo {
  position: fixed;
  bottom: 15px;
  right: 15px;
}

.tips-demo:after {
    content: attr(data-tips);
    position: absolute;
    top: 0;
    left: 0;
	right: 0;
	margin: 0 auto;
    white-space: nowrap;
	opacity: 0;
    transform: translateY(-150%);
    transition: .1s;
}

.tips-demo:hover:after {
	opacity: 1;
    transform: translateY(-100%);
}
</style>

```

### 21.如何禁用移动的选择高亮？
```css
* {  
  -webkit-touch-callout:none;  /*系统默认菜单被禁用*/  
  -webkit-user-select:none; /*webkit浏览器*/  
  -khtml-user-select:none; /*早期浏览器*/  
  -moz-user-select:none;/*火狐*/  
  -ms-user-select:none; /*IE10*/  
  user-select:none;  
}
* { -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent; /* For some Androids */ 
}
```

### 22.颜色hsla的字母分别表示什么？
+ H：Hue(色调)。0(或360)表示红色，120表示绿色，240表示蓝色，也可取其他数值来指定颜色。取值为：0 - 360
+ S：Saturation(饱和度)。取值为：0.0% - 100.0%
+ L：Lightness(亮度)。取值为：0.0% - 100.0%
+ A：Alpha透明度。取值0~1之间。

### 23.说说你对table-layout的理解，它有什么运用场景？
table-layout 值为 fixed时单元格的宽度只与表格，单元格的宽度有关，与内容无关

table-layout 值为 auto 时，单元格的宽度为当前列的最长行有的宽度来计算

如果想要一个table固定大小，里面的文字强制换行(尤其是在一长串英文文本，并且中间无空格分隔的情况下)，以达到使过长的文字不撑破表格的目的，一般是使用样式：table-layout:fixed。

tableLayout 属性用来显示表格单元格、行、列的算法规则。

固定表格布局：
固定表格布局与自动表格布局相比，允许浏览器更快地对表格进行布局。

在固定表格布局中，水平布局仅取决于表格宽度、列宽度、表格边框宽度、单元格间距，而与单元格的内容无关。

通过使用固定表格布局，用户代理在接收到第一行后就可以显示表格。

自动表格布局：
在自动表格布局中，列的宽度是由列单元格中没有折行的最宽的内容设定的。

此算法有时会较慢，这是由于它需要在确定最终的布局之前访问表格中所有的内容。

```jsx
import React from 'react';
const s = {
  layoutAuto: {
    tableLayout: 'auto',
    width: 100
  },
  layoutFixed: {
    tableLayout: 'fixed',
    width: 100
  },
}
export default () => (
  <>
    <h3>auto: </h3>
    <table style={s.layoutAuto}>
      <tbody>
        <tr>
          <td>aaaaaa</td>
          <td>1</td>
          <td>2</td>
        </tr>
        <tr>
          <td>b</td>
          <td>1111111</td>
          <td>112</td>
        </tr>
      </tbody>
    </table>
    <h3>fixed: </h3>
    <table style={s.layoutFixed}>
      <tbody>
        <tr>
          <td>aaaaaa</td>
          <td>1</td>
          <td>2</td>
        </tr>
        <tr>
          <td>b</td>
          <td>1111111</td>
          <td>112</td>
        </tr>
      </tbody>
    </table>
  </>
);
```

### 24.怎么使用css选择空链接？
```css
a[href=''], a:not(href) {
  color: #ff3333;
}
```

### 25.你有使用过css的writing-mode属性吗？说说它有哪些应用场景？
```
用于规定文字的书写方式
horizontal-tb 从左到右从上到下(水平书写)
vertical-rl 从上到下从右到左 (垂直书写)
vertiacl-lr 从上到下从左到右
sideways-rl：内容垂直方向从上到下排列
sideways-lr：内容垂直方向从下到上排列
```

### 26.如何隐藏没有静音、自动播放的音视频？
浏览器已禁止打开页面时自动播放，可以用iframe先播触发播放权限，然后再播放
做一个opacity:0 的假隐藏


### 27.使用css实现对话气泡的效果
方法：使用圆角矩形作为对话的主体框，左侧或右侧增加附加三角形，三角形使用border样式设置来实现，相对定位和绝对定位结合使三角形附于圆角矩形左侧或右侧；
```jsx
import React from 'react';

export default () => {
  return (
    <>
    <style 
      dangerouslySetInnerHTML={{__html: `
        .dialog-box{
          display: inline-block;
          background-color: #ccc;
          font-size: 14px;
          padding: 10px;
          border-radius: 5px;
          color: #fff;
          position: relative;
        }
        .dialog-box:before{
          content: "";
          width: 0;
          height: 0;
          border-width: 6px;
          border-style: solid;
          border-color: transparent #ccc transparent transparent;
          position: absolute;
          left: -12px;
          top: 50%;
          margin-top: -6px;
        }`}}
    />
    <div className="dialog-box">测试对话框</div>
    </>
  )
}
```

### 28.css中Scroll-behavior属性有什么应用场景？
当用户手动点击导航或者API调用导致触发滚动操作时，scroll-behavior属性可以为滚动框设定滚动行为。auto表示立即滚动到指定位置，smooth则表示平滑过渡，需要一定的过度时间滚动到相应位置。
兼容性支持不太好.

### 29.scroll-snap-align属性的应用场景是什么？
滚动一个列表时，控制列表中一个块始终完全在可视区内,如果滚动到一半可以回弹，保持整个块都在可视区。

### 30.如何用css实现把“我不爱996”变成“699爱不我”？
unicode-bidi 属性与 direction 属性一起使用，来设置或返回文本是否被重写，以便在同一文档中支持多种语言。

用direction属性设置rtl表示从右到左，默认是ltr从左到右的，另外还要搭配unicode-bidi: bidi-override，这样就解决了

```jsx
import React from 'react'
const s = {
  unicodeBidi: 'bidi-override',
  direction: 'rtl',
  textAlign: 'left'
}
export default () => (
  <div style={s}>
    我不爱996
  </div>
)
```














