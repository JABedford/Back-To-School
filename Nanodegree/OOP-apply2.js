// Consider the following Andrew and Richard objects:

const Andrew = {
  name: 'Andrew',
  introduce: function () {
    console.log(`Hi, my name is ${this.name}!`);
  }
};

const Richard = {
  name: 'Richard',
  introduce: function () {
    console.log(`Hello there! I'm ${this.name}.`);
  }
};

// When Richard.introduce.call(Andrew); is executed, what is logged to the console?

// Hello there! I'm Andrew.
