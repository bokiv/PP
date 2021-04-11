/*6. Write a function to create a specified number of elements with pre-filled numeric value
array.
6, 0 -&gt; [0, 0, 0, 0, 0, 0]
2, &quot;none&quot; -&gt; [&quot;none&quot;, &quot;none&quot;]
2 -&gt; [null, null]*/
function preFilled (numb, element) {
    if (element === undefined) {
        element = null;
    }
    var result = [];
    for (var i = 0; i < numb; i++) {
        result[result.length] = element;
    }
    return result;
}
console.log(preFilled(6))