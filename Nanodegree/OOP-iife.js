// The following immediately-invoked function expression is run in the browser:

(function(n){
  delete n;
  return n;
})(2);

//  What is the return value?
//  2
esour
/* The key to this quiz is the result of using the delete operator. The delete operator is actually only effective on an object's properties; it isn't used to directly deallocate rces (i.e., free up memory), and has no effect on variables or names of functions.

As such, the number passed into this immediately-invoked function expression, 2, is returned.
*/
