/*

  OBJECT ORIENTATED JAVASCRIPT
  
  What do you think this refers to in the code below?

*/



const car = {
  numberOfDoors: 4,
  drive: function () {
     console.log(`Get in one of the ${this.numberOfDoors} doors, and let's go!`);
  }
};

const letsRoll = car.drive;

letsRoll();


/*

The Window Object - Even though car.drive is a method, we're storing the function itself in the a variable letsRoll. 
Because letsRoll() is invoked as a regular function, this will refer to the window object inside of it.

*/
