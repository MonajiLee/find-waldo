// The second argument/parameter is expected to be a function

// 2. Refactor the function findWaldo to use the forEach() method instead of a for loop.

// arr = ["Alice", "Bob", "Waldo", "Winston"];

function findWaldo(arr, cb){
    arr.forEach(function (element, i) {
        if (element === "Waldo") {
            cb(i);   // execute callback
        }  
    })
}

// SECOND ATTEMPT AT .forEach
// list.forEach(function findWaldo(i){
//     if ([i] === "Waldo") {
//         found([i]);   // execute callback
//       }
// });


// FIRST ATTEMPT AT .forEach
// function findWaldo.forEach(arr, found) {
//       if (arr[i] === "Waldo") {
//         found([i]);   // execute callback
//       }
// };


//   1. Modify the callback function in the previous example so that logs the index of the array 
//   where Waldo is found, ie. "Found Waldo at index 2!". 
//   (You will need to modify actionWhenFound to receive the index.)

function actionWhenFound(i) {
    console.log("Found Waldo at index " + i);
  }


findWaldo(["Alice", "Bob", "Mary", "Waldo", "Winston"], actionWhenFound);