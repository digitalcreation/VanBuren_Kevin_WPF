//Kevin Van Buren
//Expression Assignment - Wacky
//July, 16 2014

//The goal of this calculation will be to find out how many potential ghosts are haunting a building.

alert("To determine how many ghosts are haunting a building you need to know... (Click 'Ok' to continue)");

var scary = prompt ("How many times have you seen something unexplainable happen? This can range from doors shutting suddenly to hearing odd noises.");
console.log(scary + " :Prompts user for how times something odd or unexplainable happened.");

var ghostsHaunted = prompt ("How many people have died in or near the building?");
console.log(ghostsHaunted + " :Prompts user for how many deaths happened in or in the building.");

var typeDeath = prompt ("On a scale of 1-10 how gruesome was the average death?");
console.log(typeDeath + " :Prompts user for how gruesome the average death was - on a scale of 1-10");

var totalScary = parseFloat(scary) + parseFloat(ghostsHaunted) + parseFloat(typeDeath);
console.log(totalScary + " :Shows the total number from the prompts.");

//if (typeDeath < 4) {
  //  alert("The building isn't very haunted")
//}   else {
    //alert("The building is really haunted! If you are in it, get out now!")
//}
