//Kevin Van Buren
//Conditionals Assignment - Industry
//07-23-14

//Setup a calculation for calculating overall EasyTech sales penetration and
//factors needed: 1) Total week-to-date store sales. 2) Total week-to-date EasyTech sales.

var storeSales = prompt ("Enter your week-to-date store sales, e.g. $20000:"); //This will prompt the user for the first given: the Store week to date sales
console.log  (storeSales + " - Store sales entered by user."); //Used to log the users input
if (storeSales === ""){ //Not allowing the user to leave the text field blank
    alert("You CANNOT leave the text field blank, enter in a number."); //Alerting the user that they can't leave the text field empty.
    console.log("Alert was sent because text field was left blank."); //Added to record the alert
    storeSales = prompt ("Enter your week-to-date store sales, e.g. $20000:"); //Prompting the user again to enter in the stores total sales.
} //end of if
(storeSales >= 30) ? console.log("Store sales are over the min of $30.") : storeSales = prompt ("Your store sales CANNOT be less than $30. Enter your week-to-date store sales, e.g. $20000:"); //Prompting the user again to enter in the stores total sales.;
if (storeSales === ""){ //Not allowing the user to leave the text field blank
    alert("You CANNOT leave the text field blank, enter in a number."); //Alerting the user that they can't leave the text field empty.
    console.log("Alert was sent because text field was left blank."); //Added to record the alert
    storeSales = prompt ("Enter your week-to-date store sales, e.g. $20000:"); //Prompting the user again to enter in the stores total sales.
} //end of if
(storeSales >= 30) ? console.log("Store sales are over the min of $30.") : storeSales = prompt ("Your store sales CANNOT be less than $30. Enter your week-to-date store sales, e.g. $20000:"); //Prompting the user again to enter in the stores total sales.;


var etSales = prompt ("Enter your week-to-date EasyTech sales, e.g. $1200:");
console.log(etSales + " - EasyTech sales entered by user.");
if (etSales === ""){
    alert("You CANNOT leave the text field blank, enter in a number."); //Alerting the user that they can't leave the text field empty.
    console.log("Alert was sent because text field was left blank."); //Added to record the alert
    etSales = prompt ("Enter your week-to-date EasyTech sales, e.g. $1200:");
}
(etSales >= 30) ? console.log("EasyTech sales are over the min of $30.") : etSales = prompt ("Your EasyTech sales CANNOT be less than $30. Enter your week-to-date EasyTech sales, e.g. $1200:"); //Prompting the user again to enter in the stores total sales.;


var penRate =  alert ("Your EasyTech penetration is " + etSales / storeSales);
console.log(penRate + " Penetration rate.");
