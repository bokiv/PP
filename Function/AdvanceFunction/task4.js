/*4. Write a function with parameters name and surname that returns a function that
suggests an email in the form name.surname@gmail.com.
Input: pera peric
Output: pera.peric@gmail.com */
(
    function writeEmail(){
        var name = 'pera peric';
        var email = '';
        var a = [];
        for(var i = 0; i < name.length; i ++){
            a[i] = name[i];
        }
        for(var j = 0; j <name.length; j++){
            if( name[j] === ' '){
                a[j] = '.';
            }
        email += '' + a[j];
        }
        console.log(email + '@gmail.com');
    }
)();
