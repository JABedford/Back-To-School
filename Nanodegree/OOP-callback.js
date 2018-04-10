// Consider the following two functions:

function each(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      console.log(array[i]);
    }
  }
}

function isPositive(n) {
  return n > 0;
};

// The following is then executed:

each([-2, 7, 11, -4, -10], isPositive);

// What is outputted to the console?

// My answer is 7, 11.






/* There's quite a bit going on, so let's break it down each step!

The each() function takes in two arguments: an array, and callback function. The code within comprises of a for loop and a conditional: it first iterates through all the values of a supplied array argument, then prints out that values only if its callback function returns true.

The isPositive() function returns a boolean depending on the argument passed in (i.e., true if the number passed in is positive, and false if not).

As such, when each([-2, 7, 11, -4, -10], isPositive); is executed, the each() function iterates through the entire array and only prints out values to the console that return true when tested against the callback function: 7 and 11.
*/
