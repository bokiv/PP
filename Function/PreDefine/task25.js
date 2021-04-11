/*5. Write a function to find the position of the first occurrence of a character in a string. The
result should be the position of character. If there are no occurrences of the character, the
function should return -1.*/

function letterCount(str, letter) {
    var counter = 0;
    for(var i = 0; i < str.length; i ++ ){
        if(str.charAt(i) == letter){
            counter = i;
            break;
        }
        else{
            counter = -1;
        }
    }
    return counter;
}
console.log(letterCount('My random string', 'n' ));