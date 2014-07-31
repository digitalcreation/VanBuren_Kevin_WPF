//Kevin Van Buren
//Functions Assignment - Personal
//July, 31 2014

//This calculation will determine how many companions and how long a person would live if they were a Time Lord (Doctor Who).

alert("This calculation will help you determine how many companions you will have and how long you will live as a Time Lord.");

var companionTL = prompt("How many close/best friends do you have? (Don't count all your friends, just your close/best friends.)");

for(companionTL ; isNaN(companionTL) || companionTL === "";){ //For loop checks to see if the user entered a number and makes sure they didn't leave the field blank.
    companionTL =  prompt("How many close/best friends do you have? (Don't count all your friends, just your close/best friends.) Time Lords don't cheat. You must enter a number and you cannot leave the field blank.");
}
console.log(companionTL + " - How many close/best friends, entered by the user.");

var userAge = prompt("How old are you?");

console.log(userAge + " - How old the user is, entered by the user.");

var companionAnswer = companionI(userAge, companionTL);

function companionI(age, friends){
    var totalCompanion = Math.round(age/2) - friends;
    return totalCompanion
}

alert("You will have " + companionAnswer + " companions as a Time Lord.");