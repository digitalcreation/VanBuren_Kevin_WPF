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

var activityHours = prompt("How many hours a day are you doing something active (cleaning, exercising, etc)?");
for(activityHours ; isNaN(activityHours) || activityHours === "";){
    activityHours = prompt("How many hours a day are you doing something active (cleaning, exercising, etc)? You cannot leave the text field blank and you must enter in a number.");
}
console.log(activityHours + " - Number of hours spent doing something active, entered by the user.");

var nonActiveHours = prompt("How many hours a day do you spend doing something non-active (playing video games, watching movies, etc.)?");
for(nonActiveHours ; isNaN(nonActiveHours) || nonActiveHours === "";){
    nonActiveHours = prompt("How many hours a day do you spend doing something non-active (playing video games, watching movies, etc.)? You cannot leave the text field blank and you must enter in a number.")
}
console.log(nonActiveHours + " - Number of hours spent doing something non-active, entered by the user.");
//The following comment is used to easily setup NaN and "" while loop.

var productivity = Number(workHours*10) - (Number(sleepHours)/2) + Number(activityHours*3) - (Number(nonActiveHours)/2) * 10;
console.log(productivity + "% - Productive, calculation.");

var totalProductivity = Number(workHours) + Number(sleepHours) + Number(activityHours) + Number(nonActiveHours);
(totalProductivity > 24) ? alert("The total hours you entered is: " + totalProductivity + ". You cannot exceed 24 hours, refresh the page to restart the calculation.") : alert("Based on your entry, you are " + productivity + "% productive.");

/*
 while(isNaN() ||  === ""){

 }
 */