/* 4. Write a function to count the number of letter occurrences in a string.
&quot;My random string&quot;, &quot;n&quot; -&gt; 2 */

function letterCount(str, letter) {
    var counter = 0;
    for(var i = 0; i < str.length; i ++ ){
        if(str.charAt(i) == letter){
            counter += 1;
        }
    }
    return counter;
}
console.log(letterCount('My random string', 'n' ));