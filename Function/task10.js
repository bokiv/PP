/*10. Write a program that calculates the number of appearances of a letter a in a given string.
Modify the program so it calculates the number of both letters a and A.*/
function letterCount(string, letter, caseSensitive) {
    var count = 0;
    if ( !caseSensitive) {
        string = string.toUpperCase();
        letter = letter.toUpperCase();
    }
    for (var i=0, l=string.length; i<string.length; i += 1) {
        if (string[i] === letter) {
            count += 1;
        }
    }
    return count;
}

var exampleString = 'sssshhhhhSSSSSiiiiiiiiii';
console.log(letterCount(exampleString, 's', true)); // 4 (doesn't match uppercase I at beginning)
console.log(letterCount(exampleString, 's', false)); //5 (matches both upper and lowercase i