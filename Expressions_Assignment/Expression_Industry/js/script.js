//Kevin Van Buren
//Expression Assignment - Industry
//July, 16 2014

//The goal of this calculation is to show how many dollars ($) per hour of Service Plans and Tech a person is selling.
//Possibly to figure out the attach rate.

var computerSold = prompt ("How many computer have you sold or brought in for repair today?"); //I'm not sure I'm going to use this prompt.
console.log(computerSold); //Added to show number entered by user.
var ts1Sold = prompt ("How many computers have 1 year Total Support attached?"); //This will make it easier for the user to figure out how many $'s have been sold. They wont have to add up how many 1 and 2 years were sold.
console.log(ts1Sold); //Added to show number entered by user.
var ts2Sold = prompt ("How many computer have 2 year Total Support attached?"); //This will make it easier for the user to figure out how many $'s have been sold. They wont have to add up how many 1 and 2 years were sold.
console.log(ts2Sold); //Added to show number entered by user.
var espSold = prompt ("How many dollars of ESP have you sold?"); //The user will have to add up the total dollars of ESP (service plans) sold because there are many different price ranges for this.
console.log(espSold); //Added to show number entered by user.
var hoursWorked = prompt ("How many hours did you work today?"); //This will be used to calculate the dollars per hour made.
console.log(hoursWorked); //Added to show number entered by user.

var ts1Dollars = 150 * ts1Sold;//This is used to find how many $'s in 1 year total support was sold.
console.log(ts1Dollars); //Added to make sure things are being calculated correctly.
var ts2Dollars = 250 * ts2Sold; //This is used to find how many $'s in 2 year total support was sold.
console.log(ts2Dollars); //Added to make sure things are being calculated correctly.

var totalSold = parseFloat(ts1Dollars) + parseFloat(ts2Dollars) + parseFloat(espSold); //
console.log(totalSold); //

//console.log();