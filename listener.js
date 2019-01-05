var events = require('events');

var eventEmitter = new events.EventEmitter();

//Listener-1

var listener1 = function listener1(){
    console.log('Listener 1 executed');
}

//Listener - 2
var listener2 = function listener2(){
    console.log('Listener 2 executed');
}

//Bind the connection event with listener 1 function

eventEmitter.addListener('connection', listener1);

//Bind the connection event with the listener 2 function

eventEmitter.on('connection', listener2);

var eventListeners = events.EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + ' Listeners listening to connection events');

eventEmitter.emit('connection');


//Remove the binding of listener 1 function

eventEmitter.removeListener('connection', listener1);

console.log('Listener 1 will now not listen');

var eventListeners = events.EventEmitter.listenerCount(eventEmitter, 'connection');

console.log(eventListeners + ' Listeners listening to connection event');
