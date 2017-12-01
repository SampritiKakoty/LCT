const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.once('event', () => {
  console.log('an event occurred!');
});
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');

