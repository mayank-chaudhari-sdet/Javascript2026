const user = {
    userName: "Mayank",
    price : 1000,   

    welcomeMessage: function() {
        console.log(`Welcome ${this.userName} to our website`); // Welcome Mayank to our website - this keyword refers to the user object, so it can access the userName property of the user object
    }
}

user.welcomeMessage(); // Calling the welcomeMessage function to execute its code, output will be displayed in the console

const chai = function() {
     let userName = "Mayank";
     console.log(this.userName); // undefined - this keyword refers to the global object (window in browsers), so it cannot access the userName variable defined in the chai function
}

chai(); // Calling the chai function to execute its code, output will be displayed in the console   


const chai1 = () => {
    let userName = "Mayank";
    console.log(this.userName); // undefined - this keyword refers to the global object (window in browsers), so it cannot access the userName variable defined in the chai1 function
}

chai1(); // Calling the chai1 function to execute its code, output will be displayed in the console 

//arrow functions do not have their own this context. Instead, they inherit this from the parent scope at the time they are defined. In the case of chai1, it is defined in the global scope, so this refers to the global object (window in browsers). Since there is no userName property on the global object, it logs undefined.
// Arrow functions are often used in situations where you want to preserve the this context of the enclosing scope, such as in callbacks or event handlers.
//syntax of arrow function is more concise and easier to read, especially for simple functions with a single expression. It can also be used to create anonymous functions, which can be useful in certain situations.
// Implicit return -->  const addTwo = (a, b) => a + b; // Arrow function with two parameters and a single expression that returns the sum of the two parameters
// Normal arrow function --> const addTwo = (a, b) => {
//     return a + b; // Arrow function with two parameters and a block of code that returns the sum of the two parameters
// }

const myArray = [1, 5, 7, 8, 9, 10]

myArray.forEach()