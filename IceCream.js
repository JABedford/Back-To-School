/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 *  
 * 
 */

var flavour = "vanilla";
var vessel = "cone";
var toppings = "sprinkles";

if ((flavour === "vanilla" || flavor === "chocolate") &&
    (vessel === "cone" || vessel === "bowl") &&
    (toppings === "sprinkles" || toppings === "peanuts")) {
        console.log(`I'd like two scoops of ${flavour} ice cream ` +
                    `in a ${vessel} with ${toppings}.`);    
    } else {
        console.log("Please pick another flavour.");
    }
