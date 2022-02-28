---
title: AST抽象语法树与babel
order: 1
---

## AST抽象语法树与babel

## AST 语法树
### 什么是 AST
AST，抽象语法树，是一个解释语法的树形结构。

### AST 在前端的作用
前端的生态目前有很多插件帮我们做很多事情，JavaScript转译，代码压缩，pretiier，等等。AST 在其中发挥着巨大的作用。它能够帮我们在某些环节，诸如代码编译，做一些提升效率的事情。

### AST 长成什么样
我们可以借助很多流行的 js 库，也有很多的在线网站，可以帮助我们清楚地看到一个 AST 语法树的结构


### 一段代码是如何变成 AST 的？
```javascript
let a = 10;

function b() {
  console.log(a);
}
b();
```
1. 词法分析
> 词法分析也叫做扫描。它读取我们的代码，然后把它们按照预定的规则，合并成一个一个的标识。
> 同时，它会移除空白符，注释等。最终放入一个一维数组里面。

![ast](/tools/ast-tokens.png#width-50);

每一个类型长这样

![ast](/tools/ast-node.png#width-50);

2. 语法分析
语法分析也叫做解析。它将词法分析出来的结果进行验证，例如是否有语法错误，如果有语法错误就会报错。最终转换成树形表达形式

![ast](/tools/ast-code.png#width-50);
### 如何把代码转换成 AST
@babel/parser

## Babel
babel is a javascript compiler

工作原理
![ast](/tools/babel.png#width-50);


### 使用 Babel 示例：修改参数名
```javascript
const code = `
  let a = 10;
  function log(content) {
    console.log(content);
  }
  b(a);
`;
```

目标： 要把参数 a 重名成 c

```javascript
const babelParser = require('@babel/parser');
const babelTraverse = require('@babel/traverse').default;
const babelGenerate = require('@babel/generator').default;

const code = `
  let a = 10;
  function log(content) {
    console.log(content);
  }
  b(a);
`;

const ast = babelParser.parse(code);
babelTraverse(ast, {
  enter(path) {
    if (path.isIdentifier({ name: 'a' })) {
      path.node.name = 'c';
    }
  },
});
const result = babelGenerate(ast);
console.log(result.code);

```

### Babel 的结构
Babel 为了适应复杂的定制需求和频繁的功能变化，都使用了微内核的架构风格。也就是说它们的核心非常小，大部分功能都是通过插件扩展实现的。


### 访问者模式
访问者模式包含 访问者 和 被访问元素 两个主要组成部分。这些被访问的元素通常具有不同的类型，且不同的访问者可以对他们进行不同的访问操作。访问者模式的主要目的是将数据结构与数据操作相分离。


### Babel 节点类型

[参考](https://github.com/babel/babel/tree/main/packages/babel-parser/ast)

### 写一个 Babel 插件，删除 console
```javascript
module.exports = function({ types: t }) {
  return {
    visitor: {
      ExpressionStatement(path) {
        if (path.node.expression.callee.object.name === 'console') {
          path.remove();
        }
      },
    },
  };
};

```
## AST 与 Babel 在日常工作中的应用
1. 根据注释生成文档
2. 隐藏代码关键信息
3. 代码升级
4. 生成代码流程图
5. 语言转换

