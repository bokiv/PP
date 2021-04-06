/*5. Write a program that calculates a number of float values in the array.
Input: [NaN, 23.1, 15, false, -22.5, &#39;&#39;, 4, 7, null]
Output: 2*/
var a =[NaN, 23.1, 15, false, -22.5, '', 4, 7, null];
var result = [];
var float = [];
var j = 0;
var f = 0;

function floatNum(){
    for(var i = 0; i <a.length; i ++){
        var con = parseFloat(a[i]);
        if(isFinite(con)){
            result[j] = con;
            j ++;
        } 
    }
    for(var k =0; k < result.length; k ++){
        if(parseFloat(result[k]) !== parseInt(result[k])){
            float[f] = result[k];
            f ++;
        }
    }
return f;

}    
console.log(floatNum());
