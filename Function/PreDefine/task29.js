/* 9. Write a function that replaces spaces in a string with provided separator. If separator is not
provided, use “-” (dash) as the default separator.
&quot;My random string&quot;, &quot;_&quot; -&gt; &quot;My_random_string&quot;
&quot;My random string&quot;, &quot;+&quot; -&gt; &quot;My+random+string&quot;
&quot;My random string&quot; -&gt; &quot;My-random-string&quot; */

function letterCount(str , n) {
    var counter = '';
    
    for(var i = 0; i < str.length; i ++ ){
        if(str.charAt(i) === n){
            counter += n; 
            
        }
        else{
            counter +=  ''  + str.charAt(i);
        }
    }
    return counter;
}
console.log(letterCount('My random string', '+' ));


