/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

// Create a function that returns a boolean value depending on whether there are seven or less players on the Quidditch team.

function hasEnoughPlayers(team){
    if (team.length >= 7){
        return true;
    } else {
        return false;
    }
}

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));
