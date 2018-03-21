const util = require('util');

function Base() {
  this.name = 'base';
  this.base = 1991;
  this.sayHello = function() {
    console.log(`hello ${this.name}`);
  };
}

Base.prototype.showName = function() {
  console.log(this.name);
};

function Sub() {
  this.name = 'sub';
}

/*
 * 仅仅会继承Base.prototype中的属性，
 * 构造函数中的不会继承
 * 所以objSub.sayHello()会保错
 */
util.inherits(Sub, Base);

/*
 * 原型和构造函数的属性均会继承，
 * 因为sub的prototype指向了Base的一个实例，
 * 实例里面就有构造函数的所有属性，所以构造函数中的属性也能继承
 * 所以objSub.sayHello()不会保错
 */
// Sub.prototype = new Base();

const objBase = new Base();
objBase.sayHello();
objBase.showName();
console.log('objBase', objBase);

const objSub = new Sub();
// objSub.sayHello();
objSub.showName();
console.log('objSub', objSub);
