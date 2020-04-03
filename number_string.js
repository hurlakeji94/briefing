function numInStr(arr) {
    
    for (var i = arr.length - 1; i >= 0; i--) {
        if (typeof arr[i] === "string") {
          arr.splice(i, 1);
        } 
    } 

    console.log(numInStr([1, 'a', 'b', 2 , '23w', 5, '' , 6]));

}







//  var array = [1, 'a', 'b', 2 , '23w', 5, '' , 6];

// for (let i = array.length - 1; i >= 0; i--) {
//   if (typeof array[i] === "string") {// modify conditional as needed
//     array.splice(i, 1);
//   }
// }

// console.log(array);