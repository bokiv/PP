/*4. Write a program that calculates a number of integer values in the array.
Input: [NaN, 23.1, 15, false, -22.5, &#39;&#39;, 4, 7, null]
Output: 3*/
var a = [NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
var filter = [];
var j = 0;

function integerNum(){
    for(var i = 0; i < a.length; i ++){
        if(parseInt(a[i]) === a[i]){
            filter[j] += a[i];
            j ++;
        }
    }
    return j;
}
console.log(integerNum());
