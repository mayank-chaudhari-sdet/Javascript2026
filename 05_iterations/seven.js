const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.map( (num) => num+10); // when scope is not used, it will return the value of the expression after the arrow function. In this case, it will return num+10 for each element in the myNums array. no need to use return statement when scope is not used.
console.log(newNums); // Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

//const newNums = myNums.map( (num) => { return num+10; }); // when scope is used, it will return the value of the expression after the return statement. In this case, it will return num+10 for each element in the myNums array. need to use return statement when scope is used.
//console.log(newNums); // Output: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// const foreachnewNums = myNums.forEach( (num) => {
//     return num+ 10; // forEach does not return a new array, it returns undefined. It is used to perform an action on each element of the array, but it does not create a new array like map does.
// });
// console.log(foreachnewNums); // Output: undefined. forEach does not return a new array, it returns undefined. It is used to perform an action on each element of the array, but it does not create a new array like map does.


// chaining map and filter methods to create a new array of numbers greater than 10
const newNumsGreaterThan10 = myNums.map( (num) => num*10)
.map( (num) => {return num + 1; })
.filter( (num) => num > 30);
console.log(newNumsGreaterThan10); // Output: [41, 51, 61, 71, 81, 91, 101]

// map method is a higher-order function that allows you to create a new array by applying a specified transformation to each element of an existing array. It provides a simpler syntax compared to traditional for loops and is commonly used for array transformation in JavaScript. The map method can also be chained with other higher-order functions like filter to create more complex transformations on arrays.

//filter method is a higher-order function that allows you to create a new array containing elements that meet a specified condition. It provides a simpler syntax compared to traditional for loops and is commonly used for array filtering in JavaScript. The filter method can also be chained with other higher-order functions like map to create more complex transformations on arrays.