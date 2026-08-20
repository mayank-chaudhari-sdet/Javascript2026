// truthy vs falsy values in JavaScript
// In JavaScript, values can be classified as either "truthy" or "falsy" based on how they are evaluated in a boolean context. A truthy value is a value that evaluates to true when used in a boolean context, while a falsy value is a value that evaluates to false.

// Falsy values in JavaScript include:
// - false
// - 0 (zero)
// - "" (empty string)
// - null
// - undefined
// - NaN (Not-a-Number)

// All other values are considered truthy, including:
// - true
// - any non-zero number (positive or negative)
// - any non-empty string (e.g., "hello")
// - any non-empty string
// - any object or array []
// - "0" (string containing zero)

// Example of truthy and falsy values:
if (0) {
    console.log("This will not be printed because 0 is falsy");
} else {
    console.log("0 is falsy"); // This will be printed
}

if ("Hello") {
    console.log("This will be printed because 'Hello' is truthy"); // This will be printed
} else {
    console.log("This will not be printed");
}

if (null) {
    console.log("This will not be printed because null is falsy");
} else {
    console.log("null is falsy"); // This will be printed
}

if (undefined) {
    console.log("This will not be printed because undefined is falsy");
} else {
    console.log("undefined is falsy"); // This will be printed
}

if (NaN) {
    console.log("This will not be printed because NaN is falsy");
} else {
    console.log("NaN is falsy"); // This will be printed
}

if ([]) {
    console.log("This will be printed because an empty array is truthy"); // This will be printed
} else {
    console.log("This will not be printed");
}

if ({}) {
    console.log("This will be printed because an empty object is truthy"); // This will be printed
} else {
    console.log("This will not be printed");
}

// In summary, understanding truthy and falsy values in JavaScript is important for writing effective conditional statements and controlling the flow of your code.     


// Nullish Coalescing Operator (??) in JavaScript
// The nullish coalescing operator (??) is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined, and otherwise returns the left-hand operand. It is useful for providing default values when dealing with potentially null or undefined variables.

let userInput = null;
let defaultValue = "Default Value";

let result = userInput ?? defaultValue; // Since userInput is null, result will be assigned the value of defaultValue
console.log(result); // Output: "Default Value"

userInput = "User Input";
result = userInput ?? defaultValue; // Since userInput is not null or undefined, result will be assigned the value of userInput
console.log(result); // Output: "User Input"

// In summary, the nullish coalescing operator (??) provides a way to handle null or undefined values in JavaScript by allowing you to specify a default value when necessary.  