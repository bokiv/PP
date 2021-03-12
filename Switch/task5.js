/* 5. Write a program that for a 1-12 number input (representing a month in a year) shows what season it is. 
All inputs different from 1-12 output a message explaining that input must be a number between 1 and 12. */

var month = 7;
var message = "";

switch (month) {
    case 1: message = "January";
        break;
    case 2: message = "February";
        break;
    case 3: message = "March";
        break;
    case 4: message = "April";
        break;
    case 5: message = "May";
        break;
    case 6: message = "June";
        break;
    case 7: message = "July";
        break;
    case 8: message = "August";
        break;
    case 9: message = "September";
        break;
    case 10: message = "October";
        break;
    case 11: message = "November";
        break;
    case 12: message = "December";
        break;
    default: message = "Input must be a number between 1 and 12"
}
console.log(message);