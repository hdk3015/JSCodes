/*
Event module -- Built in module 'events' which help to create, listen and fire events.

//Import events modules
var events = require('events');
//Create an eventEmitter object
var eventEmmiter = new events.EventEmitter();
//create a handler function
var myEventHandler = function(){
    console.log('I heared a scream!');
}
//Assign the event handler to an eventEmitter Object
eventEmmiter.on('scream', myEventHandler);
//Fire event --> 
eventEmmiter.emit('scream');


var events = require('events');

var eventEmitter = new events.EventEmitter();
//Connect handler
var connectHandler = function connected(){
console.log('Connection successfull');
//Fire the data recieved event 
eventEmitter.emit('data_received');
}
//Bind connection events with the handler 
eventEmitter.on('connection', connectHandler);
//Bind the data_recieved function with the anonymous function
eventEmitter.on('data_received', function(){
    console.log('data received sucessfully');
});
//Fire the connection event 
eventEmitter.emit('connection');
console.log('Program ended!');
*/


var events = require('events');





