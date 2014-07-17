//Kevin Van Buren
//Expression Assignment - Personal
//July, 16 2014

//The goal is to figure out how many days your dog food is going to last so you can better plan your shopping trips.
var bagSize = prompt ("How many pounds are in your dog food bag?"); //
console.log(bagSize);

var cupDaily = prompt ("How many cups a day do you feed your dog?"); //
console.log(cupDaily);

var daysFood = prompt ("How days before your next shopping trip?"); //
console.log(daysFood);

//1 pound = 1.92 cups and 1 cup = .52 pounds

var cupConvert = cupDaily * .52;
console.log(cupConvert);

var bagDayconvert = bagSize / cupConvert;
console.log(bagDayconvert);

var foodAnswer = "Your current bag of dog food will be gone in "+ bagDayconvert + " days.";
//Your current bag of dog food will be gone in X days.
//If you want your dog food to last X days then you will need to purchase X bags of food.