//7. Write a program that calculates a number of digits of a given number.
function numberOfdigits(number){
    var i=0;
    
    while(number > 1 && number !== 0)
    {
        number=number / 10; 
        i++;
    }
    if(number === 1){
        i++;
    }
    return i;
    
}


var digits = numberOfdigits(12);
console.log(digits);