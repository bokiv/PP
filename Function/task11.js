/*11. Write a program that concatenates a given string given number of times. For example, if
“abc” and 4 are given values, the program prints out abcabcabcabc.*/

function concateStringNumTimes(string , times){
    var repetString = '';
    while(times > 0){
        repetString += string;
        times --;
    }
    return repetString
}
var res = concateStringNumTimes('abc' , 4);
console.log(res);

