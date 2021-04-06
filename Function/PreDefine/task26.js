/* 6. Write a function to find the position of the last occurrence of a character in a string. The
result should be in human numeration form. If there are no occurrences of the character,
function should return -1. */

function letterCount(str, letter) {
    var counter = 0;
    for(var i = 0; i < str.length; i ++ ){
        if(str.charAt(i) == letter){
            counter = i;
        }
        else{
            counter = -1;
        }
    }
    return counter;
}
console.log(letterCount('My random string', 'n' ));