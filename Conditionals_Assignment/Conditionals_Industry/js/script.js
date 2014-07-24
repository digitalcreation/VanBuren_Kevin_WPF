//Kevin Van Buren
//Conditionals Assignment - Industry
//07-23-14

//Setup a calculation for calculating overall EasyTech sales penetration and
//factors needed: 1) Total week-to-date store sales. 2) Total week-to-date EasyTech sales. 3) the day of the week.
//
//var dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var storeSales = prompt ("Enter your week-to-date store sales, e.g. $20000:"); //This will prompt the user for the first given: the Store week to date sales
console.log  (storeSales, " - User prompt"); //Used to log the users input
if (storeSales === ""){ //Not allowing the user to leave the text field blank
    alert("You CANNOT leave the text field blank, enter in a number."); //Alerting the user that they can't leave the text field empty.
    console.log("Alert was sent because text field was left blank."); //Added to record the alert
    storeSales = prompt ("Enter your week-to-date store sales, e.g. $20000:"); //Prompting the user again to enter in the stores total sales.
} //end of if
(storeSales >= 30) ? console.log("Store sales are over the min of #30.") : storeSales = prompt ("Your store sales CANNOT be less than $30 - the lowest cost EasyTech service. Enter your week-to-date store sales, e.g. $20000:"); //Prompting the user again to enter in the stores total sales.;
/*if (storeSales >= 1){ //
    console.log( "Confirming user entered a number")
}*/

var etSales = prompt ("Enter your week-to-date EasyTech sales, e.g. $1200:");
console.log(etSales + " - EasyTech sales entered by user.");


var penRate =  alert ("Your EasyTech penetration is " + etSales / storeSales);
console.log(penRate + " Penetration rate.");
