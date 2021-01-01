/** 抽象类 ES6 class方式 */
class AbstractClass1 {
  constructor() {
    if (new.target === AbstractClass1) {
      throw new Error('抽象类不能直接实例化')
    }
  }

  /** 抽象方法 */
  operate() {
    throw new Error('抽象类不能直接实例话')
  }
}


/* 抽象类，ES5 构造函数方式 */
var AbstractClass2 = function () {
  if (new.target === AbstractClass2) {
      throw new Error('抽象类不能直接实例化!')
  }
}
/* 抽象方法，使用原型方式添加 */
AbstractClass2.prototype.operate = function(){ throw new Error('抽象方法不能调用!') }