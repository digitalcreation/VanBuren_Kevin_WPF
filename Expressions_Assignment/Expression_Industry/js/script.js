//Kevin Van Buren
//Expression Assignment - Industry
//July, 16 2014

//The goal of this calculation is to show how many dollars ($) per hour of Service Plans and Tech a person is selling.

alert("The following prompts will allow you to see your total dollars of ESP and Tech sales made per hour and your average attachment rate for Total Support."); //Gives the user a better understanding of what they are entering.

var computerSold = prompt ("How many computers have you sold or brought in for repair today?"); //I'm not sure I'm going to use this prompt.
console.log(computerSold + ":How many computers sold or brought in for repair - entered by user."); //Added to show number entered by user.

var ts1Sold = prompt ("How many computers have 1 year Total Support attached?"); //This will make it easier for the user to figure out how many $'s have been sold. They wont have to add up how many 1 and 2 years were sold.
console.log(ts1Sold + " :How many 1 year TS sold - entered by user."); //Added to show number entered by user.

var ts2Sold = prompt ("How many computer have 2 year Total Support attached?"); //This will make it easier for the user to figure out how many $'s have been sold. They wont have to add up how many 1 and 2 years were sold.
console.log(ts2Sold + " :How many 2 year TS sold - entered by user."); //Added to show number entered by user.

var espSold = prompt ("How many dollars of ESP have you sold?"); //The user will have to add up the total dollars of ESP (service plans) sold because there are many different price ranges for this.
console.log(espSold + " :How many dollars of ESP sold - entered by user."); //Added to show number entered by user.

var hoursWorked = prompt ("How many hours did you work today?"); //This will be used to calculate the dollars per hour made.
console.log(hoursWorked + " :How many hours worked - entered by the user."); //Added to show number entered by user.

var ts1Dollars = 150 * ts1Sold;//This is used to find how many $'s in 1 year total support was sold.
console.log(ts1Dollars + " :Number of 1 year TS sold * its $ value of 150."); //Added to make sure things are being calculated correctly.
var ts2Dollars = 250 * ts2Sold; //This is used to find how many $'s in 2 year total support was sold.
console.log(ts2Dollars + " :Number of 2 year TS sold * its $ value of 250."); //Added to make sure things are being calculated correctly.

var totalSold = parseFloat(ts1Dollars) + parseFloat(ts2Dollars) + parseFloat(espSold); //This calculates the total dollars sold.
console.log(totalSold + " :Total dollars sold"); //Added to make sure things are being calculated correctly.
var dollarsHour = totalSold / hoursWorked; //This is used to calculate the dollars per hour.
console.log(dollarsHour + " :Dollars per hour sold"); //Added to make sure things are being calculated correctly.

var tsNumber = parseFloat(ts1Sold) + parseFloat(ts2Sold); //Used to add up the total number of units - not dollars.
console.log(tsNumber + " :Total number of Total Support's sold (1&2 year)"); //Added to make sure things are being calculated correctly.
var attachRate = (Math.floor((tsNumber) / (computerSold) * 100)); //Used to find the attachment rate.
//(Math.floor((number1 / number2) * 100));
console.log(attachRate + " :Attach rate" ); //Added to make sure things are being calculated correctly.
var attachRateAnswer = "Your have a current Total Support attachment rate of " + attachRate +"%."; //This will be used to show the users current attachment rate.
console.log(attachRateAnswer + " :Attachment rate answer - before the user alert."); //Added to make sure the alert is working properly.

var hoursDayAnswer = "You have sold $" + dollarsHour + " per hour today!"; //This will be used to  alert the user of how many dollars per hour they are selling.
console.log(hoursDayAnswer + " :Dollars per day answer - before the user alert."); //Added to make sure the variable hoursDayAnswer is working correctly.
alert(hoursDayAnswer); //This will alert the user of how many dollars per hour they are selling.
console.log(hoursDayAnswer + " :User alert for dollars sold per day."); //Added to make sure the alert is working properly.

alert(attachRateAnswer); //This alerts the user of their attachment rate.
console.log(attachRateAnswer + " :User alert for attachment rate."); //Added to make sure the alert is working properly.