//Kevin Van Buren
//Conditionals Assignment - Personal
//07-24-14

//Goal is to setup a calculation for counting the calories eaten in the day and to alert if it is above or below the recommend number.

var caloriesEaten = prompt("Enter in the total number of calories you have eaten today.");//This will prompt the user to enter in the total number of calories eaten.
if (caloriesEaten === ""){ //Not allowing the user to leave the text field blank
    alert("You CANNOT leave the text field blank, enter in a number."); //Alerting the user that they can't leave the text field empty.
    console.log("Alert was sent because text field was left blank."); //Added to record the alert
    caloriesEaten = prompt("Enter in the total number of calories you have eaten today.");//This will prompt the user to enter in the total number of calories eaten.
} //end of if
