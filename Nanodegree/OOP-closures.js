// What is the output when result(10); is executed?

function outerFunction() {
  let num1 = 5;

  return function(num2) {
    console.log(num1 + num2);
  };
}

let result = outerFunction();

result(10);

// 15


/* After outerFunction() is returned, it may seem that all of its local variables would be allocated back to available memory. As it turns out, however, the nested innerFunction() still has access to the num1 variable!

Let's take a closer look: outerFunction() returns a reference to the inner, nested function. The return value of this invocation is saved in result. When this function is called, it maintains access to its scope; that is, all the variables it was able to access back when it was originally defined. This includes the num1 variable in its parent scope. The nested function closes over these variables, and those variables persist as long as the reference to the function itself exists.

When result(10); is executed, then, the function is still able to access num1's value of 5. As a result, 15 is logged to the console.
*/

