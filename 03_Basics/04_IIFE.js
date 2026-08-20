//iife --> immediately invoked function expression
(function() {
    console.log("This is an IIFE function"); // This is an IIFE function - The code inside the IIFE function is executed immediately after it is defined
})(); // The parentheses at the end of the function definition are used to invoke the function immediately after it is defined
// first parentheses are used to define the function and the second parentheses are used to invoke the function immediately after it is defined
// iife functions are often used to create a new scope for variables and functions, which can help to avoid naming conflicts and keep the global scope clean. They are also commonly used in JavaScript libraries and frameworks to encapsulate code and prevent it from interfering with other code on the page.

( () => {})(); // This is an IIFE function using arrow function syntax. The code inside the IIFE function is executed immediately after it is defined. Arrow functions do not have their own this context, so they inherit this from the parent scope at the time they are defined. In this case, the parent scope is the global scope, so this refers to the global object (window in browsers). Since there is no userName property on the global object, it logs undefined.

( (name) => {
    console.log (name);
})('John');

// The above IIFE function takes a parameter name and logs it to the console. The function is immediately invoked with the argument 'John', so it logs 'John' to the console. This is an example of how IIFE functions can be used to create a new scope for variables and functions, and how they can take parameters and return values.