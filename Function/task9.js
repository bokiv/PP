//9. Write a program that calculates the sum of odd elements of a given array.

function sumOddElementsArr(array){
    var sum = 0;
    
    for(i = 0;i < array.length; i++){

        if(array[i] %2 !== 0 ){
        sum =sum+ array[i];
        }
    }
    return sum;
}
var res = sumOddElementsArr([5 ,9 ,12 ,14 ,1 ,21]);

console.log(res);
