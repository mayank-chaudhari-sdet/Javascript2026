//primitive data types

// 7 categories --> string, number, boolean, null, undefined, symbol, bigint

// string
let name = "John Doe";
console.log(name); // Output: John Doe
console.log(typeof name); // Output: string

// number
let age = 30;
console.log(age); // Output: 30
console.log(typeof age); // Output: number

// boolean
let isStudent = true;
console.log(isStudent); // Output: true
console.log(typeof isStudent); // Output: boolean

// null
let emptyValue = null;
console.log(emptyValue); // Output: null
console.log(typeof emptyValue); // Output: object (this is a quirk in JavaScript, null is considered an object)

// undefined
let notDefined;
console.log(notDefined); // Output: undefined
console.log(typeof notDefined); // Output: undefined

// symbol
let uniqueId = Symbol("id");
console.log(uniqueId); // Output: Symbol(id)
console.log(typeof uniqueId); // Output: symbol

// bigint
let largeNumber = 9007199254740991n; // The 'n' at the end indicates a BigInt
console.log(largeNumber); // Output: 9007199254740991n
console.log(typeof largeNumber); // Output: bigint

// In summary, JavaScript has several primitive data types including string, number, boolean, null, undefined, symbol, and bigint. Each of these data types serves a specific purpose and can be used to store different kinds of values in your JavaScript programs. Understanding these data types is essential for writing effective and efficient code.     

//non-primitive data types / reference data types

// objects , array, functions

let person = {
    name: "John Doe",
    age: 30,
    isStudent: true
};
console.log(person); // Output: { name: 'John Doe', age: 30, isStudent: true }
console.log(typeof person); // Output: object

let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(typeof numbers); // Output: object (arrays are a type of object in JavaScript)

let greet = function() {
    console.log("Hello, World!");
};
greet(); // Output: Hello, World!
console.log(typeof greet); // Output: function.        // function object is a special type of object in JavaScript, it is not a primitive data type, it is a reference data type.

// In summary, non-primitive data types in JavaScript include objects, arrays, and functions. These data types are reference types, meaning that they store references to the actual data rather than the data itself. Understanding the differences between primitive and non-primitive data types is crucial for working effectively with JavaScript. 
// return type of function is function, but it is not a primitive data type, it is a reference data type.
// return type of non-primitive data type is object, but it is not a primitive data type, it is a reference data type.



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Premitive data types) and Heap (Non-primitive data types)

// In JavaScript, primitive data types are stored in the stack, while non-primitive data types (objects, arrays, functions) are stored in the heap. The stack is a simple data structure that operates in a last-in-first-out (LIFO) manner, while the heap is a more complex memory structure that allows for dynamic memory allocation. When you create a variable with a primitive data type, it is stored directly in the stack. When you create a variable with a non-primitive data type, it is stored in the heap, and the variable holds a reference to the location of that data in the heap. Understanding how JavaScript manages memory for different data types can help you write more efficient code and avoid memory leaks.

let myYoutubeName = "CodeWithHarry"; // Stored in stack
let anotherName = myYoutubeName; // anotherName holds a reference to the same string in the stack
anotherName = "chaiAurCode"; // anotherName also holds a reference to the same string in the stack

console.log(myYoutubeName); // Output: CodeWithHarry
console.log(anotherName); // Output: chaiAurCode
// As primitive data types give a copy, the new changes are made in the copy whereas the original value remains the same. This is because primitive data types are immutable, meaning that their values cannot be changed once they are created. When you assign a new value to a variable that holds a primitive data type, it creates a new copy of that value in the stack, and the variable now references the new value. The original value remains unchanged in the stack.
// In this example, both myYoutubeName and anotherName initially reference the same string "CodeWithHarry" in the stack. When we assign a new value "chaiAurCode" to anotherName, it still references the same string in the stack, but the value of that string is changed. This demonstrates how primitive data types are stored and referenced in JavaScript.


let user1 = {
    name: "John Doe",
    age: 30
}; // Stored in heap

let user2 = user1; // user2 holds a reference to the same object in the heap
user2.name = "Jane Doe"; // Modifying the name property of the object

console.log(user1.name); // Output: Jane Doe
console.log(user2.name); // Output: Jane Doe
// As non-primitive data types give a reference, the new changes are made in the original value itself. This is because non-primitive data types are mutable, meaning that their values can be changed after they are created. When you assign a variable to a non-primitive data type, it holds a reference to the location of that data in the heap. If you modify the data through one variable, it will affect all variables that reference the same data in the heap.
// In this example, both user1 and user2 reference the same object in the heap. When we modify the name property of that object through user2, it also changes the name property for user1 since they both reference the same object. This demonstrates how non-primitive data types are stored and referenced in Java


