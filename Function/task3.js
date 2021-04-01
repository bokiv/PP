//3. Write a program that checks if a given number is a three digit long number.
/*function isNumberThreedigit(number){
    if(number > 99 && number < 1000){
        return true;
    }
        return false;
}
var num = isNumberThreedigit(101);
console.log(num);*/

function isNumberThreedigit(number){
    return number > 99 && number < 1000;
}
var num = isNumberThreedigit(202);
console.log(num);