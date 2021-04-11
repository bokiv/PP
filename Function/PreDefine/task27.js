/*7. Write a function to convert string into an array. Space in a string should be represented as
“null” in new array. */

function letterCount(str) {
    var array = [];
    
    for(var i = 0; i < str.length; i ++ ){
        if(str.charAt(i)  !== ' '){
            array[i] = str.charAt(i);
        }
        else{
            array[i] = null;
        }     
        
    }
    return array;
}
console.log(letterCount('My random string'));