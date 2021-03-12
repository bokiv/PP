/* 3. Write a program that for a 1-7 number input (representing a day in a week) shows if that day is a weekday or weekend. All other cases output a message explaining that input must be a
 number between 1 and 7. For input 2, output should be “It’s weekday”.For input 6, output should be “It’s weekend”.
 For input 12, output should be “Input must be number between 1 and 7”. */

var d = 17;
switch (d) {
    case 1: console.log("It’s weekday");
        break;
    case 2: console.log("It’s weekday");
        break;
    case 3: console.log("It’s weekday");
        break;
    case 4: console.log("It’s weekday");
        break;
    case 5: console.log("It’s weekday");
        break;
    case 6: console.log("It’s weekend");
        break;
    case 7: console.log("It’s weekend");
        break;
    default: console.log("Input must be number between 1 and 7")
}