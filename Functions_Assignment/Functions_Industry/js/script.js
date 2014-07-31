//Kevin Van Buren
//Functions Assignment - Industry
//July, 30 2014

//This calculation will to calculate the total market basket (MB) $'s and penetration (pen rate).

alert("This site will help calculate how many Market Basket (MB) dollars you've sold and your current MB penetration rate."); //Alerts the user of what to expect from this calculation

//PC's sold
var pcSold = prompt("How many computers have you sold?"); //Prompts the user for how many computers have been sold, will be used for pen rate.
while(isNaN(pcSold) || pcSold === ""){ //start of while loop to make sure the user enters a number and doesn't leave the field blank
    pcSold = prompt("How many computers have you sold? You must enter a number and you cannot leave the text field blank."); //Re-prompts the user for how many computers have been sold, will be used for pen rate.
} //End of while loop.
console.log(pcSold + " - Number of computers sold, entered by the user."); //Stores the number of computers sold that the user entered.

//Total attachments
var totalAttachments = prompt("How many computers had any accessory (Total Support, software, etc.) attached?");
while(isNaN(totalAttachments) || totalAttachments === ""){ //start of while loop to make sure the user enters a number and doesn't leave the field blank
    prompt("How many computers had any accessory (Total Support, software, etc.) attached? You must enter a number and you cannot leave the text field blank.");
} //End of while loop.
console.log(totalAttachments + " - Total number of computer sales that had attachments, entered by the user."); //Stores the total number of computers that had attachments that the user entered.

//1 year TS sold
var ts1Sold = prompt("How many of the computers sold had 1 year Total Support attached?"); //Prompts the user for how many computers have 1 year total support attached, used to calculate market basket $'s and pen rate.
while(isNaN(ts1Sold) || ts1Sold === ""){ //start of while loop to make sure the user enters a number and doesn't leave the field blank
    ts1Sold = prompt("How many of the computers sold had 1 year Total Support attached? You must enter a number and you cannot leave the text field blank."); //Re-prompts the user for how many computers have 1 year total support attached, used to calculate MB $'s and pen rate.
} //End of while loop.
console.log(ts1Sold + " - Number of 1 year Total Supports sold, entered by the user."); //Stores the number of 1 year total supports sold that the user entered.

//2 year TS sold
var ts2Sold = prompt("How many of the computers sold had 2 year Total Support attached?"); //Prompts the user for how many computers have 2 year total support attached, used to calculate market basket $'s and pen rate.
while(isNaN(ts2Sold) || ts2Sold === ""){ //start of while loop to make sure the user enters a number and doesn't leave the field blank
    ts2Sold = prompt("How many of the computers sold had 2 year Total Support attached?"); //Re-prompts the user for how many computers have 2 year total support attached, used to calculate market basket $'s and pen rate.
} //End of while loop.
console.log(ts2Sold + " - Number of 2 year Total Supports sold, entered by the user."); //Stores the number of 2 year total supports sold that the user entered.

//Other accessories sold
var accSold = prompt("Enter in the total dollars of other accessories (software, misc EasyTech services, bags/covers, etc) that were sold. Round to the nearest dollar and exclude the '$'."); //Prompts the user for the total $'s of other accessories sold, used to calculate MB $'s and pen rate.
while(isNaN(accSold) || accSold === ""){ //start of while loop to make sure the user enters a number and doesn't leave the field blank
    accSold = prompt("Enter in the total dollars of other accessories (software, misc EasyTech services, bags/covers, etc) that were sold. Round to the nearest dollar and exclude the '$'. You must enter a number and you cannot leave the text field blank."); //Re-prompts the user for the total $'s of other accessories sold, used to calculate MB $'s and pen rate.
} //End of while loop.
console.log("$" + accSold + " - Total dollars of other accessories sold, entered by the user."); //Stores the $'s of other accessories sold that the user entered.

//TS 1 year & 2 year $ conversion
var ts1convert = (ts1Sold * 160); //Converts the number of TS 1 year to the $ amount
var ts2convert = (ts2Sold * 260); //Converts the number of TS 2 year to the $ amount

//Total MB $'s sold function
var mbResults = marketBasket$(ts1convert, ts2convert, accSold); //Used to invoke or call the markerBasket$ function.
    console.log("$" + mbResults + " - Total MB dollars, calculation."); //Stores the number of the MB calculation.

function marketBasket$(entry2, entry3, entry4){ //Start of the marketBasket$ function.
    var totalMB = (Number(entry2) + Number(entry3) + Number(entry4)); //The variable within the function that will calculate the total MB $'s.
    return totalMB; //returns the variable so the results can be saved and shown to the user.
} //end of function

//If MB, else
if (mbResults <= 500){ //start of if (less than or equal to 200)
    alert("Your total Market Basket is: $" + mbResults + "! You need to step it up if plan to be on goal!"); //Alerts the user of the total MB and to step it up if the MB $'s are less than 200.
}else{ //start of else (over 200)
    alert("Your total Market Basket is: $" + mbResults + "! You are doing great keep it up!"); //Alerts the user of the total MB and that they are doing great if MB $'s are more than 200.
} //end of if/else

//MB pen rate anonymous function
var calcMBPenRate = function(computers, attachments){ //Start of the anonymous function
    var mbPenRate = (attachments/computers) * 100; //the variable that calculates the MB pen rate then converts it to a % value.
    return mbPenRate; //Returns the variable
}; //end of anonymous function

var mbPenRateAnswer = calcMBPenRate(pcSold, totalAttachments); //Sets up the variables to use within the anonymous function.
console.log(mbPenRateAnswer + "% - MB pen rate, calculation"); //Stores the MB pen rate calculation.
(mbPenRateAnswer <= 59) ? alert("Your current Market Basket penetration rate is " + mbPenRateAnswer + "%. You need to step it up if plan to be on goal!") : alert("Your current Market Basket penetration rate is " + mbPenRateAnswer + "%! You are doing great keep it up!");

//The following comment is used to easily setup NaN and "" while loop.
/*
while(isNaN() ||  === ""){

}
 */