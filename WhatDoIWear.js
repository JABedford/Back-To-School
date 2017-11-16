/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// Configure a size selector for someone questioning which t-shirt size they need.

var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;


if( (shirtWidth >= 18 && shirtWidth <20) && (shirtLength>=28 && shirtLength<29) && (shirtSleeve>= 8.13 && shirtSleeve<8.38  ) ){
        console.log("S"); //Smaller size
}
else if ( (shirtWidth >= 20 && shirtWidth <22) && (shirtLength>=29 && shirtLength<30) && (shirtSleeve>= 8.38 && shirtSleeve<8.63  ) ){
        console.log("M"); //medium size
}
else if ( (shirtWidth >= 22 && shirtWidth <24) && (shirtLength>=30 && shirtLength<31) && (shirtSleeve>= 8.63 && shirtSleeve<8.88  ) ){
        console.log("L"); //Larger size
}
else if ( (shirtWidth >= 24 && shirtWidth <26) && (shirtLength>=31 && shirtLength<33) && (shirtSleeve>= 8.88 && shirtSleeve<9.63  ) ){
       console.log("XL"); //Larger size
}
else if ( (shirtWidth >= 26 && shirtWidth <28) && (shirtLength>=33 && shirtLength<34)  && (shirtSleeve>=9.63 && shirtSleeve<10.13  ) ){
       console.log("2XL"); //xtra Larger size
}
else if ( shirtWidth >= 28 && shirtLength>=34  && shirtSleeve>= 10.13 ){
       console.log("3XL"); //xtra xtra Larger size
}
else{
    console.log("N/A");
