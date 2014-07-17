//Kevin Van Buren
//Expression Assignment - Personal
//July, 16 2014

//The goal is to figure out how many days your dog food is going to last so you can better plan your shopping trips.



var bagSize = prompt ("How many pounds are in your dog food bag?"); //Will need to know how large the bag is to determine how long it will last.
console.log(bagSize); //Added console.log to track number entered

var cupDaily = prompt ("How many cups a day do you feed your dog?"); //Will need to know how many cups is being served a day to see how long it will last.
console.log(cupDaily); //Added console.log to track number entered

var daysFood = prompt ("How many days would like your next dog food purchase of the same size bag to last?"); //Will need to determine if the desired days until next shopping trip will work.
console.log(daysFood); //Added console.log to track number entered

//1 pound = 1.92 cups and 1 cup = .52 pounds

var cupConvert = cupDaily * .52; //How many cups per day needs to be converted to pounds to determine how long the bag will last.
console.log(cupConvert); //Added console.log to track number converted

var bagDayconvert = bagSize / cupConvert; //This will figure out how many days the bag will last.
console.log(bagDayconvert); //Added console.log to track number converted

var foodAnswer = "Your current bag of dog food will be gone in "+ bagDayconvert + " days."; //Shows the user how many days before they will be out of the current bag of dog food.
alert(foodAnswer); //Shows the user how many days before they will be out of the current bag of dog food.

var poundsDayconvert = (cupConvert) * (daysFood);
var totalBags = poundsDayconvert / (bagSize);

var daysAnswer = "If you plan on your next purchase to last " + daysFood + " days you will need to purchase " + totalBags + " bags of " + bagSize + " pound dog food."; //Variable for final alert.
alert(daysAnswer); //Prompts user for how many bags of food will be needed.
//Your current bag of dog food will be gone in X days.
//If you plan on your next purchase to last X days you will need to purchase X bags of X pound dog food.
//pounds per day * amount desired = pounds total / bag size