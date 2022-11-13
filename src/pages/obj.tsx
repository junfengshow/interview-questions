/**
 * 对象
 */
import React from 'react';
import './obj.less';

interface IProps {}
interface IState {}

// 单例模式
const Single = function (name?: string) {
  this.name = name;
  console.log('Single');
} as any;
Single.instance = null;
Single.getInstance = function () {
  if (!Single.instance) {
    Single.instance = new Single();
  }
  return Single.instance;
}

;(() => {
  // 1.创建对象
  const person: {
    name?: string;
    age?: number;
    gender?: string;
    _age?: number;
  } = {};
  // 2.定义对象的属性
  person.name = 'zhangsan';
  Object.defineProperty(person, 'age', {
    configurable: true,
    // writable: true,
    enumerable: true,
    // value: 12,
    get () {
      return this._age;
    },
    // set (newValue: number) {
    //   this._age = newValue;
    // }
  });
  Object.defineProperty(person, 'age', {
    // configurable: true,
    // writable: true,
    // enumerable: true,
    // value: 12,
    // get () {
    //   return this._age;
    // },
    set (newValue: number) {
      this._age = newValue;
    }
  });
  person.age = 1;
  
  // 获取属性配置
  const getPropertyDescriptor = Object.getOwnPropertyDescriptor(person, 'age');
  // console.log(getPropertyDescriptor?.configurable)
  // console.log(getPropertyDescriptor?.enumerable)

  // writable value 与 set get 不能共存
})();

;(() => {
  // 创建对象
  // 1。工厂模式
  function createObj (name?: string, age?: number, gender?: string) {
    const obj = {
      name, 
      age, 
      gender,
      say () {
        console.log(name, age, gender);
      }
    };
    return obj;
  }
  // createObj('lisi', 12, '男').say();
  // 2.构造函数模式
  const Person = function (name: string) {
    this.name = name;
  } as any;
  // console.log(Person.prototype)
  const p1 = new Person('zhangsan');
  // console.log(p1.__proto__)
  // 3.原型
  // 函数一创建就有其原型对象
  Person.prototype.showName = function () {
    console.log('name', this.name)
  }
  // p1.showName();
})();

;(() => {
  // 寄生组合继承
  function SuperType (name?: string) {
    this.name = name;
  }
  SuperType.prototype.show = function () {
    console.log('this is SuperType');
  }
  const SubType = function (name?: string) {
    // 属性继承
    SuperType.call(this, name);
  } as any;
  // 方法继承
  function inharit (SuperType: any, SubType: any) {
    const F = function () {} as any;
    F.prototype = SuperType.prototype;
    const prototype =  new F();
    prototype.constructor = SubType;
    SubType.prototype = prototype;
  }
  inharit(SuperType, SubType);
  SubType.prototype.showName = function () {
    console.log(this.name)
  }

  const s = new SubType('zhangsan');
  // s.showName();
})();

;(() => {
  // proxy
  const target = {
    id: 'target',
    showId () {
      console.log(this)
      console.log(this.id)
    }
  };
  const handler = {
    get (target: any, proterty: string, receiver: any) {
      // console.log('proterty: ', proterty)
      return target[proterty];
    },
    // set

  };

  const proxy = new Proxy(target, handler);
  // console.log(proxy.id);
  // proxy.showId();

})();
class Obj extends React.Component<IProps, IState> {
  constructor (props: IProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className='container'>
          <div className='left'>
            left
          </div>
          <div className='right'>
            right
          </div>
          <div className='center'>
            <div>
              jkdkedkldleleldldl
            </div>
          </div>
        </div>
        <div className='a-container'>
          <div className='a-left'>left</div>
          <div className='a-center'>center</div>
          <div className='a-right'>right</div>
        </div>
        <div className='b-container'>
          <div className='b-left'>left</div>
          <div className='b-center'>center</div>
          <div className='b-right'>right</div>
        </div>
      </div>
    )
  }
}
export default Obj;
