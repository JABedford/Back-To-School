/*
 * Programming Quiz: Find my Seat (4-8)
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 */

for (var s=0; s<26; s++) {
    for (t=0; t<100; t++) {
        console.log(s+"-"+t);
    }
}
