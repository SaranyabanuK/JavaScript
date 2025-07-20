const EventEmitter = require('events');

// Create a new event emitter
const myEmitter = new EventEmitter();

// Add a listener for the 'click' event
myEmitter.on('click', () => {
  console.log('The "click" event was triggered!');
});

// Simulate a click event
console.log("Simulating a click...");
myEmitter.emit('click');
