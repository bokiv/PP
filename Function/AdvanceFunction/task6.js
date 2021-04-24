/*6. Write a function that checks if a given string is valid password. The password is valid if it
is at least 6 characters long and contains at least one digit. The function should receive
two callbacks named successCallback and errorCallback that should be called in case
password is correct or invalid.
Input: JSGuru
Output: Your password is invalid!
Input: JSGuru123
Output: Your password is cool! */
(
    function checkPassword(){
        var pass = 'JSGur1';
        var pass1 = [];
            for(var i = 0; i < pass.length; i ++){
              pass1[i] = pass[i];
            }
        if(typeof(pass1[i] === Number) && (pass1.length  >= 6)){
            console.log('Your password is cool!');
        }
        else{
            console.log('Your password is invalid');
        }
    }
)();