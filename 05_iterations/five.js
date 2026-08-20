const coding = ["JavaScript", "Python", "Ruby", "Java", "C++"];

// for each loop to iterate over the elements of an array
coding.forEach(function (language) {
  console.log(`Value: ${language}`);
});

// In summary, the forEach loop is a higher-order function that allows you to iterate over the elements of an array and perform a specified action for each element. It provides a simpler syntax compared to traditional for loops and is commonly used for array iteration in JavaScript.

// using arrow function with forEach loop to iterate over the elements of an array
coding.forEach((language) => {
  console.log(`Value: ${language}`);
});

function printMe(item) {
  console.log(item);
}

coding.forEach(printMe);

// using arrow function with forEach loop to iterate over the elements of an array and access the index and array parameters
coding.forEach((item, index, arr) => {
  console.log(`Item: ${item}, Index: ${index}, Array: ${arr}`);
});

// In summary, the forEach loop is a higher-order function that allows you to iterate over the elements of an array and perform a specified action for each element. It provides a simpler syntax compared to traditional for loops and is commonly used for array iteration in JavaScript. The forEach loop can also accept an optional index and array parameter, allowing you to access the index of each element and the entire array during iteration.

// iterating an array of objects using forEach loop

const myCoding = [
  { name: "JavaScript", type: "Programming Language" },
  { name: "typeScript", type: "Programming Language" },
  { name: "Python", type: "Programming Language" },
];

myCoding.forEach((item) => 
    {
        console.log(item.name);
    })