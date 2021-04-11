/*9. Write a function to hide email address.
&quot;myemailaddress@bgit.rs&quot; -&gt; &quot;mye...@bgit.rs&quot;*/
var email = 'myemailaddress@bgit.rs';
var result = '';
function emailHide(){
    for(var i = 0; i < 2; i ++){
        result[i] += '' + email[i];
        for(var j = email.length-8; j <= email.length ; j++){
            result[j] +=  '' + email[j];
            console.log(result);
        }
        result = result[i] + result[j];
    }
    return result;
}
console.log(result);