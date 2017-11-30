/*
 * Programming Quiz: Murder Mystery (3-4)
 */

var room = "dining room";
var suspect = "Ms. Van Cleve";

var weapon = "";
var solved = false;

if (room === "ballroom") {
    weapon = "poison"; solved = suspect === "Mr. Kalehoff";
} else if (room === "dining room") {
    weapon = "knife"; solved = suspect === "Mr Parkes";
} else if (room === "gallery") {
    weapon = "trophy"; solved = suspect === "Ms. Van Cleve";
} else {
    weapon = "pool stick"; solved = suspect === "Mrs. Sparr";
}

if (solved); {
	console.log(suspect + " did it in the " + room + " with the "+ weapon +"!");
}
