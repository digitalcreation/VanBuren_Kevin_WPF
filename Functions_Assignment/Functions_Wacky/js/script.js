//Kevin Van Buren
//Functions Assignment - Personal
//July, 31 2014

//This calculation will determine how many companions and how long a person would live if they were a Time Lord (Doctor Who).

alert("This calculation will help you determine how many companions you will have and how long you will live as a Time Lord.");

var companionTL = prompt("How many close/best friends do you have? (Don't count all your friends, just your close/best friends.)");

for(companionTL ; isNaN(companionTL) || companionTL === "";){ //For loop checks to see if the user entered a number and makes sure they didn't leave the field blank.
    companionTL =  prompt("How many friends do you have? (Count all your friends, not just your close/best friends.) Time Lords don't cheat. You must enter a number and you cannot leave the field blank."); //Re-prompts the user.
} //end of for loop
console.log(companionTL + " - How many close/best friends, entered by the user."); //Stores number of friends the user has.

var userAge = prompt("How old are you?"); //Prompts the user for his/her age.
for(userAge ; isNaN(userAge) || userAge === "";){
    userAge = prompt("How old are you? Time Lords don't cheat. You must enter a number and you cannot leave the field blank."); //Re-prompts the user for his/her age.
} //end of for loop
console.log(userAge + " - How old the user is, entered by the user."); //Stores the user's age.

var companionAnswer = companionI(userAge, companionTL); //invokes or calls the function companionI
function companionI(age, friends){ //Start of the function that will calculate how many companions.
    var totalCompanion = Math.round(age/2) + Number(friends); //The variable that calculates how many companions.
    return totalCompanion; //Sends the variable out so the information can be retrieved.
} //end of function.
console.log(companionAnswer + " - Number of companions the user will have as a Time Lord, calculation."); //Stores the number of companions the user will have.

function TLage(Age, Friends){ //Start of the function that will calculate how many years.
    var totalTLage = Math.round(Age/2) * Math.round(Number(Friends/2)) * 13; //The variable that calculates how many years.
    return totalTLage; //Sends the variable out so the information can be retrieved.
} //end of function
var TLageAnswer = TLage(userAge, companionTL); //invokes the TLage variable.
console.log(TLageAnswer + " - How long the user will live as a Time Lord, calculation."); //Stores number of years the user will live.

alert("You will have " + companionAnswer + " companions during your time as a Time Lord."); //Alerts the user of how many companions they will have during their time as a Time Lord.
alert("Based on this information you will live for " + TLageAnswer + " years because your companions will help keep you safe."); //Alerts the user for how many years they will live as a Time Lord.