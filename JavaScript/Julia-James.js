/*
 * Programming Quiz: JuliaJames (4-1)
 *
 *  "Fizzbuzz" is a famous interview question used in programming interviews.  Your task is to recreate it however with the words
 *  Julia and James... It goes something like this:
 *
 *   Loop through the numbers 1 to 20
 *   If the number is divisible by 3, print "Julia"
 *   If the number is divisible by 5, print "James"
 *   If the number is divisible by both 3 and 5, print "JuliaJames"
 *   If the number is not divisible by 3 or 5, print the number.
 *
 */

var x = 1;

while (x <= 20) {
    if (x % 3 === 0 && x % 5 === 0)
        console.log("JuliaJames");
    else if (x % 3 === 0)
        console.log("Julia");
    else if (x % 5 === 0)
        console.log("James");
    else
        console.log(x);
    x++;
}


// EDIT // 
// After playing around I actually came up with a simpler solution than my first //

var x = 1;

while (x <= 20) {
    console.log((x % 3 ? "" : "Julia") + (x % 5 ? "" : "James") || x);
    x++;
}
