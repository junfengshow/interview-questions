---
title: css-12
group:
  title: css基础
  order: 12
---

### 1.使用css实现一个loading的效果
```jsx
import React from 'react';

export default () => (
  <>
    <style 
      dangerouslySetInnerHTML={{__html: `
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
          border-left-color: #59a782;
          border-radius: 50%;
          width: 30px;
          height: 30px;
          animation: donut-spin 1.2s linear infinite;
        }
      `}}
    />
    <div className="donut" />
  </>
)
```

### 2.为什么说css的选择器是从右向左匹配？
从右往左匹配会首先排除很多错误的匹配，打个简单的比方，孩子只有一个父亲，但是父亲可以有很多个孩子，从孩子找父亲简单，从父亲找某个指定的孩子可能就会找到错误的孩子。
当然，选择器也是得优化的，不然哪怕从右往左匹配也会有一些性能上的问题。

### 3.表列举一些你认为最“昂贵”的css属性并解释为什么
filter 

### 4.你了解CSS Houdini吗？说说它的运用场景有哪些？
Houdini是一组底层API，它们公开了CSS引擎的各个部分，从而使开发人员能够通过加入浏览器渲染引擎的样式和布局过程来扩展CSS。 

Houdini是一组API，它们使开发人员可以直接访问CSS 对象模型 （CSSOM），使开发人员可以编写浏览器可以解析为CSS的代码，从而创建新的CSS功能，而无需等待它们在浏览器中本地实现。

### 5.css的负边距有哪些应用场景？
垂直水平居中

通过伪元素扩大元素覆盖范围

### 6.clear属性只对块级元素有效么？为何无法应用于行内元素？
block元素浮动之后已经脱离了文档流了，排列的顺序都不一样了，所以清除了之后有效果。

inline-block还是在文档流里面，加浮动不加浮动都没有什么作用的，所以清除也没有影响

### 7.你用过css的tab-size属性吗？浏览器默认显示tab为几个空格？
tab-size 属性规定制表符（tab）字符的空格长度。

在 HTML 中，制表符（tab）字符通常显示为一个单一的空格字符

### 8.如何让背景图片固定不随滚动条滚动
background-attachment:fixed

### 9.举例说明与打印有关的属性有哪些？
```
page
page-break-before
page-break-after
page-break-inside
```

### 10.请写出font属性的快捷写法
p {
  font:italic bold 12px/20px arial,sans-serif;
}

### 11.使用css写一个垂直翻转图片的效果
transform: rotateX(180deg);   /* 垂直镜像翻转 */

### 12.css中的url()要不要加引号？说说你的理解
可以加，也可以不加。这个跟html标签的属性书写可以加引号也可以不加引号是一样的道理，
当然如果属性中含有特殊字符比如空格则需要加空格，否则会引起浏览器解析错误。
如果想养成良好的程序书写习惯，则最好加上引号，这是标准做法。

但是从安全角度来讲是要加上的...

否则容易被xss

因为url里面加了引号的话意味着url里面的内容是字符串...

### 13.如何使用css显示a链接的url？
```css
.some-a-tag:before {
  content: attr(href);
}
```

### 14.如何使用伪元素实现增大点击热区来增加用户体验？
```css
.extend-via-pseudo-elem {
	position: relative;
}

.extend-via-pseudo-elem::before {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    bottom: -20px;
    left: -20px;
}
```

### 15.:placeholder-shown和:focus-within这两个伪类你有使用过吗？说说看
```
:focus-within 是一个CSS 伪类 ，表示一个元素获得焦点，或，该元素的后代元素获得焦点。换句话说，元素自身或者它的某个后代匹配 
:focus 伪类。（shadow DOM 树中的后代也包括在内）
:placeholder-shown CSS 伪类 在 或 <textarea> 元素显示 placeholder text 时生效.
```

### 16.使用css实现霓虹灯效果

### 17.当拿到一个新的项目，让你对这个项目的css做下架构设计，你该如何下手？
```
公共变量（主题色/主要空隙/主要字号字体等）
编译器（scss/less/postcss/stylus）
自适应方案（栅格/rem/vw/pt）
目录约定（mixin/common/theme/module/response）
私有化方案（scoped/css module/css in js）
```

### 18.除了可以用js跟踪用户信息外，如果不用js，使用纯css怎么做呢？
```
可以利用 css 的伪类 :hover :active :focus 之类的监听用户行为，然后给指定的url 发送请求。

#link:active::after {

  content:url('xxx/xxx?active');

}
```

### 19.使用css写一个红绿灯交替的动画效果

### 20.判断如下边框的颜色，并解释为什么[代码]？
```
<p style="color: red;border: 1px solid;">给p设置border，但不给它设置border-color</div>

red 
当边框颜色未设置值时，边框颜色则和当前字体颜色一致
```

### 21.box-sizing的宽度包含了哪些？
```
这个得根据box-sizing来计算：

1.box-sizing: content-box;
width = width + 2border + 2padding
2.box-sizing: border-box;
width = width
但是元素内部会被压缩，content = width - 2border - 2padding
```

### 22.给一个图片设置透明有哪些方式呢？
1. opacity : 0 -> 子元素会继承
2. 外层用盒子包裹，设置其rgba(255,255,255,0)

### 23.不用换行的标签，怎么伪元素实现换行的效果？
```css
使用\A 换行，并且指定white-space: pre保留换行效果

.foo::after {
  content: '123\A 456';
  white-space: pre;
}
```

### 24.固定的外框尺寸，里面的图片尺寸不固定，如何让图像自适应外框呢？
使用 object-fit ，用法类似background-size，可选的值：cover、contain、fill等

### 25.如何让表格单元格等宽显示
table-layout: fixed;

width: 100%;

### 26.H5如何禁止显示系统菜单？
touch-callout:none;

user-select:none;

### 27.用css画一个平行四边形
```css
.parallelogram {
  margin: 30px;
  width: 200px;
  height: 100px;
  border: 1px solid slateblue;
  transform: skew(-20deg);
}
<div class="parallelogram"></div>
```

### 28.如何阻止:hover、:active等鼠标行为状态的触发？
```
css属性：pointer-events: none;

应用
避免重复提交---按钮点击后 即增加该属性 使其不
链接不可跳转---指定a标签加上该属性
点击被上方元素覆盖的下方链接---上方元素添加该属性
```

### 29.假如css的分号写在声明块之外，将会发生什么呢？解释下原因
```
这样写第一条规则的分号会被放到第二条规则的句首解析，导致第二条解析报错，从而略过。

<style>
  p { color: blue }
  ;.p1 { color: red }
  .p2 {color: green}
</style>

```
### 30.父元素下有子元素，子元素也有高度但父元素的高度为何为0呢？分析下可能出现的原因及解决方法
```
父元素塌陷

父元素在文档流中高度默认是被子元素撑开的，当子元素脱离文档流以后，将无法撑起父元素的高度，也就会导致父元素的高度塌陷。父元素的高度一旦塌陷, 所有标准流中元素的位置将会上移，导致整个页面的布局混乱。
可能出现的情况 即子元素脱标的情况

    浮动
    固定定位
    绝对定位

解决方案

    父元素底部增加一行 <div style='clear:both;'></div>

    缺点:添加了无意义的空标签 违背了结构表现分离

    父元素一起浮动

    本质是一个将错就错的方法

    利用BFC来给父元素增加CSS

    如给父元素加上 overflow:auto; 或display:table-cell;或display:table-caption;等

    利用after伪元素 父元素增加after伪元素

   parent:after{
           content: ".";
           display: block;
           height: 0px;
           clear: both;
           visibility: hidden;
      }  

    更优雅的改进方案 ---常用

    .clearfix:after,
    .clearfix:before{
      content: " ";
      display: table; 
    }  
    .clearfix:after{
      clear: both;
    }
```

### 31.使用css实现蒙版的效果
filter: blur(1px)

### 32.用css实现一个等腰三角形的小图标
```css
   <style>
    .box{
      width: 0;
      height: 0;
      margin: 100px auto;
      border-width: 0px 200px 200px 200px;
      border-style: solid;
      border-color: transparent transparent red transparent;
    }
  </style>
```

### 33.你有用过animation-fill-mode属性吗？它有什么应用场景
动画播放完成之后的动作，比如可以定义动画播放完成之后回到初始状态

### 34.为什么说css选择器，一般不要超过三级

### 35.你用过outline属性吗？它有什么运用场景
outline （轮廓）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。

### 36.width属性的min-content和max-content有什么作用
```
max-content 在一个父元素上设置该元素后，元素的宽度会以子元素内最长的一个为准，子元素表现得会好像设置了white-space:nowrap一样一行展示

min-content 在一个父元素上设置该元素后，子元素会按照最短断行进行换行
```

### 37.举例说明with属性的fill-available有什么应用场景
一些 div 元素默认宽度 100% 父元素，这种充分利用可用空间的行为就称为 fill-available。

### 38.举例说明background-repeat的新属性值：round和space的作用是什么？
+ space 背景图不会产生缩放，会被裁切
+ round 缩放背景图至容器大小（非等比例缩放）

### 39.使用css如何设置背景虚化？
filter: blur(5px);

### 40.举例说明BFC会与float元素相互覆盖吗？为什么？
+ BFC的区域不会与float的元素区域重叠
+ 计算BFC的高度时，浮动子元素也参与计算
+ BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素，反之亦然

### 41.什么是逐帧动画？
（1）相关联的不同图像，即动画帧；（2）连续播放。

### 42.为什么float会导致父元素塌陷
“当元素设置浮动后，会自动脱离文档流”，
翻译成白话就是说，元素浮动后，就不在整个文档流的管辖范围，
那么它之前存在在父元素内的高度就随着浮动不复存在了，
而此时父元素会默认自己里面没有任何内容
（前提是未给父元素设置固定高度，如果父元素本身有固定高度，就不会出现这种情况）

### 43.如何形成BFC？
```
根元素
float的值不为none
overflow的值不为visible
display的值为inline-block、table-cell、table-caption
position的值为absolute或fixed
```

### 44.translate3D有什么作用？
3d动画，启用GPU硬件加速



















