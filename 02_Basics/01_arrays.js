// arrays

// create an array
let myNums = [1, 2, 3, 4, 5];
// access an array element
console.log(myNums[0]); // 1
console.log(myNums[2]); // 3

//arrays are not associative, they are indexed
let myArray = [1, 2, 3];
myArray['key'] = 'value';
console.log(myArray); // [1, 2, 3, key: 'value']
console.log(myArray['key']); // 'value'



// modify an array element
myNums[1] = 20;
console.log(myNums); // [1, 20, 3, 4, 5]

// add an element to the end of the array
myNums.push(6);
console.log(myNums); // [1, 20, 3, 4, 5, 6]

// remove the last element of the array
myNums.pop();
console.log(myNums); // [1, 20, 3, 4, 5]

myNums.unshift(0); // add an element to the beginning of the array
console.log(myNums); // [0, 1, 20, 3, 4, 5]

myNums.shift(); // remove the first element of the array
console.log(myNums); // [1, 20, 3, 4, 5]

myNums.splice(2, 1); // remove 1 element at index 2
console.log(myNums); // [1, 20, 4, 5]

myNums.splice(2, 0, 3); // add 3 at index 2
console.log(myNums); // [1, 20, 3, 4, 5]

const slicedNums = myNums.slice(1, 3); // return a new array from index 1 to 3 (not including 3)
console.log(slicedNums); // [20, 3]

myNums.includes(20); // true
console.log(myNums.includes(20)); // true
myNums.includes(10); // false
console.log(myNums.includes(10)); // false

myNums.indexOf(20); // 1
console.log(myNums.indexOf(20)); // 1
myNums.indexOf(10); // -1
console.log(myNums.indexOf(10)); // -1

const newArr = myNums.join(); // join the array into a string
console.log(newArr); // '1,20,3,4,5'

const newArr2 = myNums.join(' - '); // join the array into a string with a separator
console.log(newArr2); // '1 - 20 - 3 - 4 - 5'


// get the length of the array
console.log(myNums.length); // 5

// loop through an array
for (let i = 0; i < myNums.length; i++) {
    console.log(myNums[i]);
}

// using forEach to loop through an array
myNums.forEach(function(num) {
    console.log(num);
});

// using map to create a new array
let squaredNums = myNums.map(function(num) {
    return num * num;
});
console.log(squaredNums); // [1, 400, 9, 16, 25]

// using filter to create a new array
let evenNums = myNums.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNums); // [20, 4]