(
    function numOdd(){
        var a = [2, 8, 11, 4, 9, 3];
        var arr = [];
        var j = 0;
        for(var i = 0; i <a.length; i ++){
            if(a[i] %2 === 1){
                arr[j] = a[i];
                j ++;
            }
        }
    console.log(arr);
    }
)();