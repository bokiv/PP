/* 1. Write IIFE that replaces the first and the last element of the given array and prints out its
elements.
Input array: [4, 5, 11, 9]
Output array: [ 9, 5, 11, 4]*/
(function newArr(){
    var a = [4, 5, 11, 9];
    var arr = [];
    for(var i = 0; i < a.length; i ++){
        arr[i] = a[i];
        if(a[0] && a[3]){
            arr[0] = a[3];
            arr[3] = a[0];
        }
            
    }
    return console.log(arr);
}

)();