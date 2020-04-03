var arra=[];
var size=0;

function group(arr, size){
    for (var i = 0; i < arr.length; i++){
        if(arr[i] != 0){
            arra.push(arr[i]);
        }
            

    }
    
    return arra;



}
console.log(group([4, 5, 6, 7], 2));