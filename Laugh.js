/*
 * Programming Quiz: Laugh (5-4)
 *
 *  Write an anonymous function expression that stores a function in a variable 
 *  called "laugh" and outputs the number of "ha"s that you pass in as an argument.
 *
 *  laugh(3);
 *  Returns: hahaha!
 *
 *
 */

var laugh = function(max) {
  var haha = "";
  for (var i = 0; i < max; i++) {
    haha += "ha";
  }
  return haha;
};
console.log(laugh(3)+"!");
