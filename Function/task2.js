//2. Write a program that checks if a given number is odd.
/*function isNumberOdd(number){
    return number %2 !== 0;
    
}
var res = isNumberOdd(9);
console.log(res);*/
function isNumberOdd(number){
    if(number %2 !== 0){
        return true;
    }
    return false;
}
var res = isNumberOdd(8);
console.log(res)