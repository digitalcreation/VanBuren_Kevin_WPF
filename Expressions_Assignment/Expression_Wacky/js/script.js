//Kevin Van Buren
//Expression Assignment - Wacky
//July, 16 2014

//The goal of this calculation will be to find out how many potential ghosts are haunting a building.
alert("To determine how many ghosts are haunting a building you need to know... (Click Ok to continue)");
var ghostsHaunted = prompt ("How many people have died in or near the building?");

var scary = prompt ("How many times have you seen something unexplainable happen?");

var typeDeath = prompt ("On a scale of 1-10 how gruesome was the average death?");
if (typeDeath < 4) {
    alert("The building isn't very haunted")
}   else {
    alert("The building is really haunted! If you are in it, get out now!")
}