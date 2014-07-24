//Kevin Van Buren
//Conditionals Assignment - Personal
//07-24-14

//Goal is to setup a calculation for counting the calories eaten in the day and to alert if it is above or below the recommend number.
//This will not be 100% accurate because of the large number of variables involved, I will only be using the users weight to determine the proper amount of calories.
//Needed: Meal 1, Meal 2, Meal 3, Snacks

var caloriesBreakfast = prompt("Enter in the total number of calories you had for breakfast.");//This will prompt the user to enter in the total number of calories eaten.
if (caloriesBreakfast === ""){ //Not allowing the user to leave the text field blank
    alert("You CANNOT leave the text field blank, enter in a number."); //Alerting the user that they can't leave the text field empty.
    console.log("Alert was sent because breakfast text field was left blank."); //Added to record the alert
    caloriesBreakfast = prompt("Enter in the total number of calories you had for breakfast, e.g. 500.");//This will prompt the user to enter in the total number of calories eaten.
} //end of if
console.log(caloriesBreakfast + " - Calories for breakfast, entered by user."); //Used to record cals eaten for breakfast.

var caloriesLunch = prompt("Enter in the total number of calories you had for lunch.");//This will prompt the user to enter in the total number of calories eaten.
if (caloriesLunch === ""){
    alert("You CANNOT leave the text field blank, enter in a number."); //Alerting the user that they can't leave the text field empty.
    console.log("Alert was sent because lunch text field was left blank."); //Added to record the alert
    caloriesLunch = prompt("Enter in the total number of calories you had for lunch, e.g. 500.");//This will prompt the user to enter in the total number of calories eaten.
} //end of if
console.log(caloriesLunch + " - Calories for lunch, entered by user."); //Used to record cals eaten for lunch.

var caloriesDinner = prompt("Enter in the total number of calories you had for dinner.");//This will prompt the user to enter in the total number of calories eaten.
if (caloriesDinner === ""){
    alert("You CANNOT leave the text field blank, enter in a number."); //Alerting the user that they can't leave the text field empty.
    console.log("Alert was sent because dinner text field was left blank."); //Added to record the alert
    caloriesDinner = prompt("Enter in the total number of calories you had for dinner, e.g. 500.");//This will prompt the user to enter in the total number of calories eaten.
} //end of if
console.log(caloriesDinner + " - Calories for dinner, entered by user.");//Used to record cals eaten for dinner.

var caloriesSnack = prompt("Enter in the total number of calories you had for any snacks throughout the day.");//This will prompt the user to enter in the total number of calories eaten.
if (caloriesDinner === ""){
    alert("You CANNOT leave the text field blank, enter in a number."); //Alerting the user that they can't leave the text field empty.
    console.log("Alert was sent because snack text field was left blank."); //Added to record the alert
    caloriesDinner = prompt("Enter in the total number of calories you had for any snacks throughout the day, e.g. 500.");//This will prompt the user to enter in the total number of calories eaten.
} //end of if
console.log(caloriesSnack + " - Calories for snacks, entered by user.");//Used to record cals eaten for snacks.

var totalCalories = Number(caloriesBreakfast) + Number(caloriesDinner) + Number(caloriesLunch) + Number(caloriesSnack);
console.log(totalCalories + " - Total calories calculation");//Used to record total calories eaten.


var userWeight = prompt("To determine if you have eaten too many or not enough calories, enter in your weight.");
if (userWeight === ""){ //Not allowing the user to leave the text field blank
    alert("You CANNOT leave the text field blank, enter in a number."); //Alerting the user that they can't leave the text field empty.
    console.log("Alert was sent because text field was left blank."); //Added to record the alert
    userWeight = prompt("To determine if you have eaten too many or not enough calories, enter in your weight, e.g. 120, 150, etc.");
} //end of if
console.log(userWeight + " - The user's weight, entered by user."); //Records the user's weight.


//1250 for weight below 150, 1550 for above.
var lowerCalGoal = 1250;
var HigherCalGoal = 1550;
if(userWeight <= 150){

}