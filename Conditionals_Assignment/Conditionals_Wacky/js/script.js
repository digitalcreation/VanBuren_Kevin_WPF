//Kevin Van Buren
//Conditional Assignment - Wacky
//07-24-14


//How many monkeys does it take to screw in a light bulb
//Factors needed for their intelligence -
// 1) How often do the monkey's groom each other? (increase in intel)
// 2) How often do the monkey's fling their feces? (decrease in intel)
// 3) How many hours a day do the monkey's play games with each other? (increase in intel)
// 4) On a scale of 1 to 10, how aggressive are they? (decrease in intel)

alert("How many monkey's does it take to screw in a light bulb? To find the solution we need to know 4 things..."); //Alerting the user of what the calculation will be.


var monkeyGroom = prompt("How many times a day do the monkey's groom each other?"); //Prompts the user to enter in a number amount for how many times a day the monkey's groom each other.
if (monkeyGroom === ""){ //Start of if text field is left empty for monkeyGroom.
    alert("For this scientific calculation to be accurate you need to enter in a numerical value!"); //Alerts the user they need to enter in a number.
    monkeyGroom = prompt("How many times a day do the monkey's groom each other? e.g. 12."); //Re-prompts the user to enter in a number amount for how many times a day the monkey's groom each other.
}
if (monkeyGroom >= 30){ //Setting up for an alert if the user enters in a large number.
    alert("Wow! Maybe the monkey's should open up a lice removal shop!"); //Alerts the user that over 30 is large number for the equation
} //end of if
console.log(monkeyGroom + " - How often monkey's groom each other, entered by user."); //Records the number entered in by the user.


var monkeyFling = prompt("How many times a day do the monkey's fling their feces?"); //Prompts the user to enter in a number amount for how many times a day the monkey's fling their feces.
if (monkeyFling === ""){ //Start of if text field is left empty for monkeyFling
    alert("For this scientific calculation to be accurate you need to enter in a numerical value!"); //Alerts the user they need to enter in a number.
    monkeyFling = prompt("How many times a day do the monkey's fling their feces? e.g. 10."); //Re-prompts the user to enter in a number amount for how many times a day the monkey's fling their feces.
}
if (monkeyFling >= 20){ //Setting up for an alert if the user enters in a large number.
    alert("Wow! Be sure to keep an eye out for flying fecal matter!"); //Alerts the user that over 20 is large number for the equation
} //end of if
console.log(monkeyFling + " - How often monkey's fling feces at each other, entered by user."); //Records the number entered in by the user.


var monkeyPlay = prompt("How many hours a day do the monkey's play games with each other?"); //Prompts the user to enter in a number amount for how long the monkey's play a day.
if (monkeyPlay === ""){ //Start of if text field is left empty for monkeyPlay
    alert("For this scientific calculation to be accurate you need to enter in a numerical value!"); //Alerts the user they need to enter in a number.
    monkeyPlay = prompt("How many hours a day do the monkey's play games with each other? e.g. 5."); //Re-prompts the user to enter in a number amount for how long the monkey's play a day.
}
if (monkeyPlay > 24){ //Setting up for an alert if the user enters in a large number.
    alert("There are only 24 hours in a day! For this scientific calculation to be accurate you need to enter in a REALISTIC numerical value!"); //Alerts the user that there is only 24 hours in a day.
    monkeyPlay = prompt("How many hours a day do the monkey's play games with each other? e.g. 5."); //Re-prompts the user to enter in a number amount for how long the monkey's play a day.
} //end of if
console.log(monkeyPlay + " - How many hours/day the monkey's play games, entered by user."); //Records the number entered in by the user.


var monkeyAggression = prompt("On a scale of 1 to 10, how aggressive are the monkey's? - 10 being really aggressive."); //Prompts the user to enter in a number amount of how aggressive the monkey's are.
if (monkeyAggression === ""){ //Start of if text field is left empty for monkeyAggression
    alert("For this scientific calculation to be accurate you need to enter in a numerical value!"); //Alerts the user they need to enter in a number.
    monkeyAggression = prompt("On a scale of 1 to 10, how aggressive are the monkey's? - 10 being really aggressive."); //Re-prompts the user to enter in a number amount of how aggressive the monkey's are.
} //end of if
if (monkeyAggression < 1){ //Start of if amount is less than 1 for monkeyAggression
    alert("You entered " + monkeyAggression + " For this scientific calculation to be accurate you need to enter in a numerical value of no less than 1!");
    monkeyAggression = prompt("On a scale of 1 to 10, how aggressive are the monkey's? - 10 being really aggressive."); //Re-prompts the user to enter in a number amount of how aggressive the monkey's are.
} //end of if
if (monkeyAggression > 10){ //Start of if amount is over 10 for monkeyAggression
    alert("You entered " + monkeyAggression + " For this scientific calculation to be accurate you need to enter in a numerical value of no more than 10!");
    monkeyAggression = prompt("On a scale of 1 to 10, how aggressive are the monkey's? - 10 being really aggressive."); //Re-prompts the user to enter in a number amount of how aggressive the monkey's are.
} //end of if
if (monkeyAggression < 1){ //Start of if amount is less than 1 for monkeyAggression
    alert("You entered " + monkeyAggression + " For this scientific calculation to be accurate you need to enter in a numerical value of no less than 1!");
    monkeyAggression = prompt("On a scale of 1 to 10, how aggressive are the monkey's? - 10 being really aggressive."); //Re-prompts the user to enter in a number amount of how aggressive the monkey's are.
} //end of if
console.log(monkeyAggression + " - Scale from 1-10 on how aggressive the monkey's are, entered by user."); //Records the number entered in by the user.


var monkeyIntelligence = Number(monkeyGroom) - Number(monkeyFling) + Number(monkeyPlay) - Number(monkeyAggression); //The scientific calculation to determine how many monkey's it takes to screw in a light bulb.
if (monkeyIntelligence < 1){ //Start of if for monkeyIntelligence
    alert("Calculating..."); //Alerts the user that their results are being calculated.
    alert("The combination of numbers you entered returned an invalid number. Monitor your monkey's again then reload this page when you have a CORRECT set of numbers to enter."); //Alerts the user that their entry returned an invalid number and to check their numbers and reload the page.
}else{ //end of if, start of else (otherwise)
    alert("Calculating..."); //Alerts the user that their results are being calculated
    alert("It takes " + monkeyIntelligence + " monkey(s) to screw in a light bulb."); //Alerts the user of how many monkey's it takes to screw in a light bulb.
} //end of if/else
console.log(monkeyIntelligence + " - The number of monkeys it takes to screw in a light bulb - the final result."); //Records how many monkey's it takes to screw in a light bulb.