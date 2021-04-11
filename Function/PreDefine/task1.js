//1. Write a function that converts an array of strings into an array of numbers. Filter
//out all non-numeric values.
//Input: [&quot;1&quot;, &quot;21&quot;, undefined, &quot;42&quot;, &quot;1e+3&quot;, Infinity]
//Output: [1, 21, 42, 1000]
var a = ["1" , "21", undefined , "42", "1e+3", Infinity]
var result = [];
 
function myFun(){
    for( var i = 0; i < a.length ; i++){
        var converted = parseFloat(a[i]);
        if(isFinite(converted)){
        result[result.length] = converted;
         }
    }
    return result;
}
console.log(myFun(a));