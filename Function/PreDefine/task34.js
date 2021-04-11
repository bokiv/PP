/* 4. Write a function that reverses a number. The result must be a number.
12345 -&gt; 54321 // Output must be a number */
var a = 12345;
function reversesNumber(numb) {
    var numbToString = a + "";
    var result = "";
    for (var i = numbToString.length-1; i >= 0; i--){  
        result += numbToString[i];
    }
    result = parseFloat(result);
    return result;
}
console.log(reversesNumber(a));

var a = -12345;
function reversesNumber(numb) {
    var result = 0;
    while(numb !== 0) {
        result *= 10; // 0 * 10, 5 * 10
        result += numb % 10; // 0 + 5, 50 + 4 
        numb = numb - numb % 10; //12340, 1230
        numb = numb / 10; // 1234, 123 ... 0.0
    }
    return result;
}
console.log(reversesNumber(a));