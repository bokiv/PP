/*5. Write a function to get the last element of an array. Passing a parameter &#39;n&#39; will return the
last &#39;n&#39; elements of the array.
[7, 9, 0, -2] -&gt; -2
[7, 9, 0, -2], 2 -&gt; [0, -2] */
var myArray = [7, 9, 0, -2];
var numb = 2;
function lastArrayElement (array, n) {
    n = n || 1;
    var newArr = [];
    var j = 0;
    for (var i = array.length-n; i <= array.length-1; i++) {    // 
        newArr[j] = array[i];
        j++;
    }
    return newArr;
}
console.log(lastArrayElement(myArray, numb));
