//Kevin Van Buren
//Functions Assignment - Personal
//July, 30 2014

//This calculation will calculate your overall productivity with a percent value.

var workHours= prompt("How many hours a day do you work?"); //Prompts the user for how many hours they work.
for(workHours ; isNaN(workHours) || workHours === "";){ //For loop checks to see if the user entered a number and makes sure they didn't leave the field blank.
    workHours= prompt("How many hours a day do you work? You cannot leave the text field blank and you must enter in a number."); //Re-prompts the user for hours worked.
}
console.log(workHours + " - Number of hours worked, entered by the user."); //Stores the information that the user entered.

var sleepHours = prompt ("How many hours a day do you sleep?"); //Prompts the user for how many hours they slept.
for(sleepHours ; isNaN(sleepHours) || sleepHours === "";){ //For loop checks to see if the user entered a number and makes sure they didn't leave the field blank.
    sleepHours= prompt("How many hours a day do you sleep? You cannot leave the text field blank and you must enter in a number."); //Re-prompts the user for hours slept.
}
console.log(sleepHours + " - Number of hours slept, entered by the user."); //Stores the information that the user entered.

var activityHours = prompt("How many hours a day are you doing something active or productive (cleaning, school work, exercising, etc)?"); //Prompts the user for how many hours they were active.
for(activityHours ; isNaN(activityHours) || activityHours === "";){ //For loop checks to see if the user entered a number and makes sure they didn't leave the field blank.
    activityHours = prompt("How many hours a day are you doing something active or productive (cleaning, school work, exercising, etc)? You cannot leave the text field blank and you must enter in a number."); //Re-prompts the user for active hours.
}
console.log(activityHours + " - Number of hours spent doing something active, entered by the user."); //Stores the information that the user entered.

var nonActiveHours = prompt("How many hours a day do you spend doing something non-active (playing video games, watching movies, etc.)?"); //Prompts the user for how many hours they not active.
for(nonActiveHours ; isNaN(nonActiveHours) || nonActiveHours === "";){ //For loop checks to see if the user entered a number and makes sure they didn't leave the field blank.
    nonActiveHours = prompt("How many hours a day do you spend doing something non-active (playing video games, watching movies, etc.)? You cannot leave the text field blank and you must enter in a number."); //Re-prompts the user for non active hours.
}
console.log(nonActiveHours + " - Number of hours spent doing something non-active, entered by the user."); //Stores the information that the user entered.


var productivity = Number(workHours*10) - (Number(sleepHours)/2) + Number(activityHours*3) - (Number(nonActiveHours)/2) * 10; // The calculation for determining how productive the user is.
console.log(productivity + "% - Productive, calculation."); //Stores how productive the user is.

var totalProductivity = Number(workHours) + Number(sleepHours) + Number(activityHours) + Number(nonActiveHours); //Will be used to check to see how many total hours the user entered.
(totalProductivity > 24) ? alert("The total hours you entered is: " + totalProductivity + ". You cannot exceed 24 hours, refresh the page to restart the calculation.") : alert("Based on your entry, you are " + productivity + "% productive."); //This ternary checks to see if the user entered over 24 hours total and alerts the user.