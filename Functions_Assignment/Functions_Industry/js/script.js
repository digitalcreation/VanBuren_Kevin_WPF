//Kevin Van Buren
//Functions Assignment - Industry
//July, 30 2014

//This calculation will to calculate the total market basket (MB) $'s and penetration (pen rate).

alert("This site will help calculate how many Market Basket (MB) dollars you've sold and your current MB penetration rate."); //Alerts the user of what to expect from this calculation

//PC's sold
var pcSold = prompt("How many computers have you sold?"); //Prompts the user for how many computers have been sold, will be used for pen rate.
while(isNaN(pcSold) || pcSold === ""){
    pcSold = prompt("How many computers have you sold? You must enter a number and you cannot leave the text field blank."); //Re-prompts the user for how many computers have been sold, will be used for pen rate.
}
console.log(pcSold + " - Number of computers sold, entered by the user."); //Stores the number of computers sold that the user entered.

//1 year TS sold
var ts1Sold = prompt("How many of the computers sold had 1 year Total Support attached?"); //Prompts the user for how many computers have 1 year total support attached, used to calculate market basket $'s and pen rate.
while(isNaN(ts1Sold) || ts1Sold === ""){
    ts1Sold = prompt("How many of the computers sold had 1 year Total Support attached? You must enter a number and you cannot leave the text field blank."); //Re-prompts the user for how many computers have 1 year total support attached, used to calculate MB $'s and pen rate.
}
console.log(ts1Sold + " - Number of 1 year Total Supports sold, entered by the user."); //Stores the number of 1 year total supports sold that the user entered.

//2 year TS sold
var ts2Sold = prompt("How many of the computers sold had 2 year Total Support attached?"); //Prompts the user for how many computers have 2 year total support attached, used to calculate market basket $'s and pen rate.
while(isNaN(ts2Sold) || ts2Sold === ""){
    ts2Sold = prompt("inloopHow many of the computers sold had 2 year Total Support attached?"); //Re-prompts the user for how many computers have 2 year total support attached, used to calculate market basket $'s and pen rate.
}
console.log(ts2Sold + " - Number of 2 year Total Supports sold, entered by the user."); //Stores the number of 2 year total supports sold that the user entered.

//Other accessories sold
var accSold = prompt("Enter in the total dollars of other accessories (software, misc EasyTech services, bags/covers, etc) that were sold. Round to the nearest dollar and exclude the '$'."); //Prompts the user for the total $'s of other accessories sold, used to calculate MB $'s and pen rate.
while(isNaN(accSold) || accSold === ""){
    accSold = prompt("Enter in the total dollars of other accessories (software, misc EasyTech services, bags/covers, etc) that were sold. Round to the nearest dollar and exclude the '$'. You must enter a number and you cannot leave the text field blank."); //Re-prompts the user for the total $'s of other accessories sold, used to calculate MB $'s and pen rate.
}
console.log("$" + accSold + " - Total dollars($) of other accessories sold, entered by the user."); //Stores the $'s of other accessories sold that the user entered.

var ts1convert = (ts1Sold * 160);
var ts2convert = (ts2Sold * 260);

//Total MB $'s sold function
var mbResults = marketBasket$(ts1convert, ts2convert, accSold);
    console.log(mbResults);
function marketBasket$(entry2, entry3, entry4){
    var totalMB = (Number(entry2) + Number(entry3) + Number(entry4));
    return totalMB;
}


//The following comment is used to easily setup NaN and "" while loop.
/*
while(isNaN() ||  === ""){

}
 */