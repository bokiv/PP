/* 3. Write IIFE that replaces all appearances of the letters m or M with * and returns the
number of replacements.
Input: prograMming
Output: progra**ing, 2 */
(
    function replaceString(){
        var string = 'prograMming';
        var str = [];
        var stri = '';
        var k = 0;
        for( var i = 0; i < string.length; i ++){
            str[i] = string[i];
        }
        for(var j = 0; j < string.length; j ++){
            if(string[j] === 'm' || string[j] === 'M'){
                str[j] = '*';
                k ++;
            }
            stri += '' + str[j];
        }
       console.log(stri + ',' , k);
    }

)();