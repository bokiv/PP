/*1. Write a program to insert a string within a string at a particular position (default is 1,
beginning of a string).
&quot;My random string&quot;, &quot;JS &quot; -&gt; &quot;JS My random string&quot;
&quot;My random string&quot;, &quot;JS &quot;, 10 -&gt; &quot;My random JS string&quot;*/
var insertStringToPosition = function (string, additionString, position) {
    position = position || 1;
    if(position === 1){
    return additionString + string;
    }
    var result = '';
        for(var i =0; i <string.lenght; i++){
            if(i === position){
        result += additionString;
        }
    result += string[i];
    }
return result;
}
var result = insertStringToPosition("My random string", "JS ", 2);
console.log(result);




