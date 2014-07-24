//Kevin Van Buren
//Conditionals Assignment - Industry
//07-23-14

//Setup a calculation for calculating overall EasyTech sales penetration and
//factors needed: 1) Total week-to-date store sales. 2) Total week-to-date EasyTech sales. 3) the day of the week.
//
var dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var storeSales = prompt ("Enter your week-to-date store sales, e.g. 20000:");
console.log  (storeSales, " - User prompt");
if (storeSales === ""){
    alert("You CANNOT leave the text field blank, enter in a number.");
    console.log("Alert if field is left blank.");
    storeSales = prompt ("Enter your week-to-date store sales, e.g. 20000:");
}
if (storeSales >= 0){
    console.log( "Confirming user entered a number")
}

var etSales = prompt ("Enter your week-to-date EasyTech sales, e.g. 1200:");


var penRate =  (etSales / storeSales);
console.log(penRate + " Penetration rate.");
