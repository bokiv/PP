/*8. Write a program that calculates a number of appearances of a given number in a given
array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3*/
var e = 7;
var j = 0;

function numOfAppearances(arr){
for(i = 0; i < arr.length; i ++){
    if(arr[i] === e){
     j ++;
    }
}
return j;
}
var digits = numOfAppearances([2, 4, 7, 8, 7, 7, 1]);
console.log(digits);