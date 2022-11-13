import React, { useEffect } from 'react';
import MyPromise from '../constant/promise';

const myInstanceOf = (instance: any, classFunc: any) => {
  let proto = Object.getPrototypeOf(instance);
  while (proto) {
    if (proto === classFunc.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  if (!proto) {
    return false;
  }
}

Function.prototype.myCall = function () {
  // const context = arguments[0];
  // const args = Array.prototype.slice.call(arguments, 1);
  // const key = Symbol('key');
  // context[key] = this;
  // context[key](...args);
  // Reflect.deleteProperty(context, key);

  const context = arguments[0];
  const key = Symbol('key');
  context[key] = this;
  const args = []
  for (let i = 1; i < arguments.length; i++) {
    args.push(`arguments[${i}]`)
  }
  eval(`context[key](${args.toString()})`)
  Reflect.deleteProperty(context, key);
}

function testCall (a: any, b: any) {
  console.log(this, a, b)
}

Function.prototype.myBind = function (context, ...args) {
  const func = this;
  function innnerFunc (...innerArgs) {
    // const key = Symbol('key');
    // context[key] = func;
    // context[key]();
    // Reflect.deleteProperty(context, key);
    func.apply(context, [...args, ...innerArgs])
  }
  return innnerFunc;
}
function testBind (a, b) {
  console.log('testBind')
  console.log(this, a, b)
}

Function.prototype.myApply = function(context = window, args) {
  // this-->func  context--> obj  args--> 传递过来的参数

  // 在context上加一个唯一值不影响context上的属性
  let key = Symbol('key');
  context[key] = this; // context为调用的上下文,this此处为函数，将这个函数作为context的方法
  // let args = [...arguments].slice(1)   //第一个参数为obj所以删除,伪数组转为数组
  let result = context[key](...args); // 这里和call传参不一样
  delete context[key]; // 不删除会导致context属性越来越多
  return result;
}


export default () => {
  useEffect(() => {
    new MyPromise();
  }, [])
  return (
    <div />
  )
}
