//Kevin Van Buren
//Functions Assignment - Personal
//July, 30 2014

//This calculation will calculate your overall productivity with a percent value.

var workHours= prompt("How many hours a day do you work?");
for(workHours ; isNaN(workHours) || workHours === "";){
    workHours= prompt("How many hours a day do you work? You cannot leave the text field blank and you must enter in a number.");
}
console.log(workHours + " - Number of hours worked, entered by the user.");

var sleepHours = prompt ("How many hours a day do you sleep?");
for(sleepHours ; isNaN(sleepHours) || sleepHours === "";){
    sleepHours= prompt("How many hours a day do you sleep? You cannot leave the text field blank and you must enter in a number.");
}
console.log(sleepHours + " - Number of hours slept, entered by the user.");
//The following comment is used to easily setup NaN and "" while loop.
/*
 while(isNaN() ||  === ""){

 }
 */