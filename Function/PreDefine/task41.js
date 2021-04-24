/* 1. Write a program that checks if a given element e is in the array a.
Input: e = 3, a = [5, -4.2, 3, 7]
Output: yes*/
function checkElement(){
    var check = '';
    for(var i = 0; i < a.length; i ++){
        if(a[i] === e){
            check = 'yes';
            break;
        }
        else{
            check = 'no';
        }
    }
    return check;
}
 var a = [5, -4.2, 3, 7];
 var e = 3;
 console.log(checkElement(a , e));