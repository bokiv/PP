/*5. Write a program that draws a square of a given size. For example, if the size of square
is 5 the program should draw:
*****
* *
* *
* *
*****   

function drawSqare(size){
    var result = '';
    for(var i = 0;i < size; i ++){
        result += ' ';
        if(i === 0 || i === size -1){
            for(j = 0 ; j < size; j ++){
                result += '* ';
            }
        }
        else{
                result += '* ';
             for(k = 1  ; k < size - 1; k++){
                    result +='  ';

                }
                result +='* ';

            }
            result += '\n';
        }
        return result;
}

var res = drawSqare(5);
console.log(res); */
function drawSquare(n){
    var square = '';
    for(var i = 0; i < n; i++){
        for(var j = 0;j < n; j ++){
            if(i === 0 || i === n-1){
                square += '* ';
             }else if(j === 0 || j === n - 1){
                square += '* '; 
             }else{
                square += '  ';
             }

        }
        square += '\n'; 
    }
    return square;
}
var square1 = drawSquare(5);
console.log(square1);