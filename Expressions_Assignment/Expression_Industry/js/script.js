//Kevin Van Buren
//Expression Assignment - Industry
//July, 16 2014

//The goal of this calculation is to show how many dollars ($) per hour of Service Plans and Tech a person is selling.
//Possibly to figure out the attach rate.

var computerSold = prompt ("How many computer have you sold or brought in for repair today?"); //I'm not sure I'm going to use this prompt.
console.log(computerSold + "How many computers sold or brought in for repair - entered by user."); //Added to show number entered by user.
var ts1Sold = prompt ("How many computers have 1 year Total Support attached?"); //This will make it easier for the user to figure out how many $'s have been sold. They wont have to add up how many 1 and 2 years were sold.
console.log(ts1Sold + " How many 1 year TS sold - entered by user."); //Added to show number entered by user.
var ts2Sold = prompt ("How many computer have 2 year Total Support attached?"); //This will make it easier for the user to figure out how many $'s have been sold. They wont have to add up how many 1 and 2 years were sold.
console.log(ts2Sold + " How many 2 year TS sold - entered by user."); //Added to show number entered by user.
var espSold = prompt ("How many dollars of ESP have you sold?"); //The user will have to add up the total dollars of ESP (service plans) sold because there are many different price ranges for this.
console.log(espSold + " How many dollars of ESP sold - entered by user."); //Added to show number entered by user.
var hoursWorked = prompt ("How many hours did you work today?"); //This will be used to calculate the dollars per hour made.
console.log(hoursWorked + " How many hours worked - entered by the user."); //Added to show number entered by user.

var ts1Dollars = 150 * ts1Sold;//This is used to find how many $'s in 1 year total support was sold.
console.log(ts1Dollars + " Number of 1 year TS sold * its $ value of 150."); //Added to make sure things are being calculated correctly.
var ts2Dollars = 250 * ts2Sold; //This is used to find how many $'s in 2 year total support was sold.
console.log(ts2Dollars + " Number of 2 year TS sold * its $ value of 250."); //Added to make sure things are being calculated correctly.

var totalSold = parseFloat(ts1Dollars) + parseFloat(ts2Dollars) + parseFloat(espSold); //
console.log(totalSold + " Total dollars sold"); //Added to make sure things are being calculated correctly.
var dollarsHour = totalSold / hoursWorked; //
console.log(dollarsHour + " Dollars per hour sold"); //Added to make sure things are being calculated correctly.

var tsNumber = parseFloat(ts1Sold) + parseFloat(ts2Sold); //
console.log(tsNumber + " Total number of Total Support's sold (1&2 year)"); //Added to make sure things are being calculated correctly.
var attachRate = (computerSold) / (tsNumber); //
console.log(attachRate + " Attach rate" ); //Added to make sure things are being calculated correctly.

var hoursDayAnswer = "You have sold $" + dollarsHour + " per hour today!"; //
console.log(hoursDayAnswer); //Added to make sure the variable hoursDayAnswer is working correctly.
alert(hoursDayAnswer); //
console.log(hoursDayAnswer); //Added to make sure the alert is working properly.

//console.log();