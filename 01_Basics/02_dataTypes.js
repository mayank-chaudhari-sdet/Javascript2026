"use strict"; // This directive enables strict mode, which helps catch common coding mistakes and "unsafe" actions such as assigning values to undeclared variables.
//This treats all JS coe as modern JS and prevents the use of deprecated features, making it easier to write secure and optimized code.

// Data Types in JavaScript
// JavaScript has several built-in data types, which can be categorized into primitive and non-primitive types.

//alert(3 + 3); // This will display an alert box with the result of the expression, which is 6. But, we are using node.js, not browser.
console.log(3 + 3); // This will print the result of the expression, which is 6, to the console.


let name = "mynk"; // String data type
let age = 30; // Number data type
let isStudent = true; // Boolean data type
let address = null; // Null data type
let phoneNumber; // Undefined data type

console.log(typeof name); // Output: string
console.log(typeof age); // Output: number
console.log(typeof isStudent); // Output: boolean
console.log(typeof address); // Output: object (this is a quirk in JavaScript, as null is considered an object)
console.log(typeof phoneNumber); // Output: undefined

// In addition to these primitive data types, JavaScript also has non-primitive data types such as objects and arrays, which can hold multiple values and have properties and methods.

let person = {
    name: "Mayank",
    age: 30,
    isStudent: true
}; // Object data type

let numbers = [1, 2, 3, 4, 5]; // Array data type

console.log(typeof person); // Output: object
console.log(typeof numbers); // Output: object (arrays are also considered objects in JavaScript)

// In summary, JavaScript has several data types including string, number, boolean, null, undefined, object, and array. Each data type has its own characteristics and use cases in programming. Understanding these data types is essential for writing effective and efficient JavaScript code.  
// type of null is object because of a historical bug in JavaScript. When JavaScript was first created, the typeof operator was designed to return "object" for all objects, including null. However, null is not actually an object, but rather a primitive value that represents the absence of any object value. Despite this, the behavior of typeof null has remained unchanged for backward compatibility reasons, and it continues to return "object" even though it is not an object. This can be confusing for developers who are new to JavaScript, but it is important to remember that null is a distinct data type from objects and should be treated as such in your code.