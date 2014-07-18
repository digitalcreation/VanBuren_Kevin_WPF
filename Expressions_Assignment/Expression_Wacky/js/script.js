//Kevin Van Buren
//Expression Assignment - Wacky
//July, 16 2014

//The goal of this calculation will be to find out how many potential ghosts are haunting a building.

alert("To determine how many ghosts are haunting a building you need to know... (Click 'Ok' to continue)"); //Alerts the user of what is needed to know for determining if a building is haunted or not.

var scary = prompt ("How many times have you seen something unexplainable happen? This can range from doors shutting suddenly to hearing odd noises."); //Prompts the user for amount of odd things that have happened.
console.log(scary + " :Prompts user for how times something odd or unexplainable happened."); //Stores the number the user entered.

var ghostsHaunted = prompt ("How many people have died in or near the building?"); //Prompts the user for how many people of died in the building.
console.log(ghostsHaunted + " :Prompts user for how many deaths happened in or in the building."); //Stores the number the user entered.

var typeDeath = prompt ("On a scale of 1-10 how gruesome was the average death?"); //Prompts the user for how gruesome the average death was.
console.log(typeDeath + " :Prompts user for how gruesome the average death was - on a scale of 1-10"); //Stores the number the user entered.

var totalScary = parseFloat(scary) + parseFloat(ghostsHaunted) + parseFloat(typeDeath); //Adds the total numbers entered by the user.
console.log(totalScary + " :Shows the total number from the prompts. If number is greater than 15 then it's haunted, if it's under it's not."); //Shows the total number if <15, yes if >15 no.

if (totalScary < 15) {
    alert("The building isn't very haunted... Your probably just imagining things. Wait! What's that behind you!")
}   else {
    alert("The building is actually is haunted! If you are in it, get out right now! (But first click 'Ok', then run for your life.)")
}
//If the number is less than 15 the user receives alert 1 (no) if the number is 15 or over then they receive alert 2.