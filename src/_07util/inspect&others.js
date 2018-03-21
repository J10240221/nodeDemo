const util = require('util');

function Person() {
  this.name = 'byvoid';
  this.toString = function() {
    return this.name;
  };
}

const obj = new Person();
console.log(obj);
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));
console.log(util.inspect(obj, true, null, true));

util.isArray([]);

util.isRegExp(/1/);

util.isDate(new Date());

util.isError(new Error());
