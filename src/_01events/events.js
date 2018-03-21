const events = require('events');

const eventEmitter = new events.EventEmitter();

//监听器 #1
const listener1 = function listener1() {
  console.log('监听器 listener1 执行');
};

//监听器 #2
const listener2 = function listener2() {
  console.log('监听器 listener2 执行');
};

//绑定connection 事件，处理函数为 listener1
eventEmitter.on('connection', listener1);

//绑定connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2);

const eventListeners = events.EventEmitter.listenerCount(
  eventEmitter,
  'connection'
);

//处理connection事件,是触发吧
eventEmitter.emit('connection');
console.log('eventListeners:', eventListeners);

//移除监听绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log('listener1不再受监听');

//处理connection事件,是触发吧
eventEmitter.emit('connection');

// eventEmitter.emit('error');
console.log('程序执行完毕');
