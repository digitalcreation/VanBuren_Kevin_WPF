//Kevin Van Buren
//Expression Assignment - Industry
//July, 16 2014

//The goal of this calculation is to show how many dollars ($) per hour of Service Plans and Tech a person is selling.
//Possibly to figure out the attach rate.

var computerSold = prompt ("How many computer have you sold or brought in for repair today?"); //
console.log(computerSold); //
var ts1Sold = prompt ("How many computers have 1 year Total Support attached?"); //
console.log(ts1Sold); //
var ts2Sold = prompt ("How many computer have 2 year Total Support attached?"); //
console.log(ts2Sold); //
var espSold = prompt ("How many dollars of ESP have you sold?"); //
console.log(espSold); //
var hoursWorked = prompt ("How many hours did you work today?"); //
console.log(hoursWorked); //

var ts1Dollars = 150 * ts1Sold;//
console.log(ts1Dollars); //
var ts2Dollars = 250 * ts2Sold; //
console.log(ts2Dollars); //

var totalSold = parseFloat(ts1Dollars) + parseFloat(ts2Dollars) + parseFloat(espSold); //
console.log(totalSold); //

//console.log();