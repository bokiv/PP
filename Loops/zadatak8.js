/*8. Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9] */
var a = [4 , 5, 6, 2];
var b = [3 , 8, 11, 9];
var res = [];
var j=0;

if(a.length == b.length){

    for(i = 0; i < a.length; i ++){
    
       res[j ++] = a[i];
       res[j ++] = b[i];
    }  
    console.log('[' + res + ']');
    
    
    }
    else{
    console.log('nizovi nisu iste duzine.');
    
    }
