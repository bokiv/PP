// Write a function that checks if the given array is an array of positive integer values. 
// 	Input: [3, 11, 9, 5, 6]
// 	Output: yes

let filterArrNew = (arr) => {
    for(e of arr){
        if(e > 0){
            return "yes";
        }else{
            return "no";
        }
    }

}
 console.log(filterArrNew([3, 11, 9, 5, 6]));