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
    
  var laughing = "";
  
  for (var i = 0; i < max; i++) {
    laughing += "ha";
  }
  return laughing + "!";
};

console.log(laugh(10));


// I actually first submitted this with the "!" being added at the end of the console.log.. console.log(laugh(10)+"!");
//
// However I was getting an issue with it not recognising the solution. This was fixed by adding the string to the return statement.
//
