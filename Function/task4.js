//4. Write a program that calculates an arithmetic mean of four numbers.
function arithmeticMean(arr){
    var sum = 0;
    var artsred = 0;

    for(i = 0;i < 4;i ++){
        sum += arr[i];
    }
    return artsred = sum/4;
}
var res = arithmeticMean([10 , 20, 30, 40, 100]);
console.log(res);