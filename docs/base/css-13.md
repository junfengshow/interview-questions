---
title: css-13
group:
  title: css基础
  order: 13
---

### 1.行内元素可以设置padding和margin吗？
行内元素的纵向padding和margin都是不考虑的，这是css规范定义的。 
inline元素确实可以设置垂直方向的 padding 和 margin 值，
但是 inline 元素的 margin 和 padding 的垂直方向上不产生边距效果，即不影响布局。

### 2.pseudo-class与pseudo-element有什么区别？
伪类表示已存在的某个元素处于某种状态，但是通过dom树又无法表示这种状态，就可以通过伪类来为其添加样式。例如a元素的:hover, :active等

伪元素主要是用来创建一些不存在原有dom结构树种的元素，例如：用::before和::after在一些存在的元素前后添加文字样式等，
这些被添加的内容会以具体的UI显示出来，被用户所看到的，这些内容不会改变文档的内容，不会出现在DOM中，不可复制，仅仅是在CSS渲染层加入。
CSS3中建议使用::表示伪元素，如：div::before。

### 3.使用css如何拉伸字体？
letter-spacing，transform:scale

### 4.写出固定子容器在固定的父容器下水平垂直居中的布
1. 父容器 position: relative,子元素 position: absolute;left: 50%;top: 50%;transform:translate3d(-50%,-50%,0).
2. 父容器 display:flex; align-items:center;just-content:center.

### 5.在固定宽度的div下，怎么让字体自适应大小，不超出宽度，也不要换行
.item-codes{ width:800px;word-break: break-all;white-space: normal; }

### 6.怎样把单位cm转换成px呢（在打印时有时会用到）
1px所代表的长度=2.54cm/分辨率

1cm=分辨率/2.54

### 7.flex与其他有什么不同，用它有什么好处？
flex 从根本上不同于之前常用的借助 定位、浮动 的布局。
从逻辑思路上来说，flex 布局具有宏观性，提供了一种对于页面中元素如何排布的框架，开发者不需要关注细节和进行额外的操作，
就能使得一系列元素按约定的规则排列。而之前常用的借助 float 、marging、position 的布局，则更像是一种“技巧”，不是真正意义上的布局，
它们的存在更大意义上关注于单个元素或者某种场景下的特性而非全局。

### 8.::first-letter有什么应用场景？
```css
段落首字放大效果

p:first-letter {
  font-size: 2em;
}

<p>This is a test article. This is a test article.</p>
<p>这是一个测试</p>
```

### 9.举例说说你对white-space属性的理解
```
值 	说明
normal 	默认。空白会被浏览器忽略。
pre 	空白会被浏览器保留。其行为方式类似 HTML 中的 <pre> 标签。
nowrap 	文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。
pre-wrap 	保留空白符序列，但是正常地进行换行。
pre-line 	合并空白符序列，但是保留换行符。
inherit 	规定应该从父元素继承 white-space 属性的值。
```

### 10.第432天 为什么伪类的content不能被选中？
伪类不是真正的DOM,无DOM相关的属性和方法

### 11.什么是关键帧动画？
表示关键状态的帧动画叫做关键帧动画。

所谓关键帧动画，就是给需要动画效果的属性，准备一组与时间相关的值，
这些值都是在动画序列中比较关键的帧中提取出来的，而其他时间帧中的值，
可以用这些关键值，采用特定的插值方法计算得到，从而达到比较流畅的动画效果。































