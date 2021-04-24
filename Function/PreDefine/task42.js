/* 2. Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]*/
function multipliesPositive(){
    
    for(i = 0; i < a.length; i ++){

        if(a[i] < 0){
            mn[i] = a[i];
        }
        else {
            mn[i] = a[i] * 2;
        }
    }
   return mn; 
}


var a = [-3 , 11, 5 , 3.4, -8];
var mn = [];

console.log(multipliesPositive(a));