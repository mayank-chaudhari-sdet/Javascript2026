// function declaration
function sayMyName() {
    console.log("My name is John");
}

sayMyName(); // My name is John

function addTwoNumbers(num1, num2) {
    // let result = num1 + num2;
    // return result;
return num1 + num2; // this is a more concise way to write the function without the need for an intermediate variable


    // console.log("Mayank"); // this will never be executed because it is after the return statement --> code is not reached after return statement
}

const result = addTwoNumbers(5, 10); // 15
console.log("Result:", result); 

function loginUserMessage(username) {
    return `${username} just logged in`;    

}

console.log(loginUserMessage("Mayank"));    // Mayank just logged in

function loginUserMessage(username) {
    return `${username} just logged in`;    
}
console.log(loginUserMessage());    // undefined just logged in - because we did not pass any argument to the function, so the username parameter is undefined

function loginUserMessage(username = "Guest") { // default parameter value is "Guest"
    return `${username} just logged in`;    
}
console.log(loginUserMessage());    // Guest just logged in - because we did not pass any argument to the function, so the username parameter takes the default value "Guest"   

function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(100, 200, 300)); // [100, 200, 300] - the rest parameter (...) syntax allows us to represent an indefinite number of arguments as an array

// passing object as an argument to a function

const user = {
    name: "Mayank",
    age: 25
}   

function handleObject(anyUser) {
    return `User name is ${anyUser.name} and age is ${anyUser.age}`;
}

console.log(handleObject(user)); // User name is Mayank and age is 25 - we can access the properties of the object using dot notation