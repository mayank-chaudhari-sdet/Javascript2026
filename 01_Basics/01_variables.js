const accountId = 123456789;
let accountEmail = "mayank@gmail.com";
var accountPassword = "12345";
accountCity = "Delhi";
let accountState; // This variable is declared but not initialized, so it will have the value undefined

//accountId = 987654321; // This will throw an error because accountId is a constant
console.log(accountEmail);
accountEmail = "mayank1@gmail.com"; // This is allowed because accountEmail is declared with let
console.log(accountEmail);
console.log(accountPassword);
accountPassword = "54321"; // This is allowed because accountPassword is declared with var
console.log(accountPassword);
console.log(accountCity); // This will work because accountCity is declared without var, let, or const, making it a global variable

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]); // This will display the variables in a table format in the console

// Note: It is generally recommended to use const and let instead of var for better readability and to avoid potential issues with variable hoisting and scope.
// Also, it is a good practice to declare all variables with var, let, or const to avoid creating unintended global variables.
// In this code, we have declared and initialized several variables using const, let, and var. We have also demonstrated how to reassign values to variables declared with let and var, while showing that reassigning a const variable will result in an error. Finally, we have used console.table to display the variables in a tabular format for better visualization.
// a variable declared with var is function-scoped, while a variable declared with let or const is block-scoped. This means that a var variable can be accessed outside of the block it was declared in, while a let or const variable cannot. Additionally, variables declared with var are hoisted to the top of their scope and initialized with undefined, while variables declared with let and const are also hoisted but are not initialized until their declaration is evaluated. This can lead to different behaviors when trying to access these variables before their declaration.
//accountState is declared but not initialized, so it will have the value undefined. This is because in JavaScript, when a variable is declared but not assigned a value, it is automatically assigned the value undefined. This allows us to check if a variable has been initialized or not by checking if its value is undefined.