// Consider the following dave object, and the sayHello() function:

const dave = {
  name: 'Dave'
};

function sayHello(message) {
  console.log(`${message}, ${this.name}. You're looking well today.`);
}

// Let's say you want the message 'Hello, Dave. You're looking well today.' printed to the console. 
// How would you do it?

// sayHello.apply(dave, ['Hello']);
