/*2. Write a program that shows text representation of a day in a week for a number input from
1 to 7. All other cases output a message explaining that input must be a number between 1
and 7.
For input 1, output should be “Monday”.
For input 10, output should be “Input must be a number between 1 and 7”. */
var a = 11;
var result = "";

switch (a) {
    case 1:
        result ="monday";
        break;
    case 2:
        result = "tuesday";
         break;
    case 3:
        result = "wednesday";
        break;
    case 4:
        result = "thursday";
        break;
    case 5:
        result = "friday" ; 
        break;
    case 6: 
        result = "saturday";
        break;
    case 7:
        result = "sunday";
        break;
    

    default :
        result = "Input must be a number between 1 and 7";
        break;           
                         
}
console.log(result);
