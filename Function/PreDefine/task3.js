/*3. Write a program to filter out falsy values from the array.
Input: [NaN, 0, 15, false, -22, &#39;&#39;, undefined, 47, null]
Output: [15, -22, 47]*/
var a = [NaN, 0, 15, false, -22, '', undefined, 47, null]
var s = [];
var j = 0;

function filter(){
    for(var i = 0; i <a.length; i ++){
        if(parseFloat(a[i])){
            s[j] = a[i];
            j ++;  
        }
    }
    return s;
}

console.log(filter(a));