let score = "100"; // score is a string

console.log(typeof score); // Output: string
console.log(typeof(score)); // Output: string

let valueInNumber = Number(score); // Convert string to number
console.log(valueInNumber);
console.log(typeof valueInNumber); // Output: number

// If the string cannot be converted to a number, it will return NaN (Not a Number)
let invalidNumber = Number("abc");
console.log(invalidNumber); // Output: NaN
console.log(typeof invalidNumber); // Output: number (NaN is still considered a number in JavaScript)

// You can also use parseInt or parseFloat to convert strings to numbers, which will ignore any non-numeric characters after the number
let parsedInt = parseInt("100px");
console.log(parsedInt); // Output: 100
console.log(typeof parsedInt); // Output: number

let parsedFloat = parseFloat("3.14abc");
console.log(parsedFloat); // Output: 3.14
console.log(typeof parsedFloat); // Output: number

// In summary, you can use the Number() function to convert a string to a number in JavaScript. If the string cannot be converted, it will return NaN. You can also use parseInt() and parseFloat() to convert strings to numbers while ignoring non-numeric characters.

//Operations

let a = 10;
let b = 20;

console.log ("negative a:", -a); // Output: a: -10

let sum = a + b; // Addition
console.log("Sum:", sum); // Output: Sum: 30

let difference = a - b; // Subtraction
console.log("Difference:", difference); // Output: Difference: -10

let product = a * b; // Multiplication
console.log("Product:", product); // Output: Product: 200

let quotient = a / b; // Division
console.log("Quotient:", quotient); // Output: Quotient: 0.5

let remainder = a % b; // Modulus (Remainder)
console.log("Remainder:", remainder); // Output: Remainder: 10

// In summary, JavaScript supports various arithmetic operations such as addition, subtraction, multiplication, division, and modulus. These operations can be performed on numbers to produce new values based on the operands provided.   

console.log("1" + 2); // Output: "12" (string concatenation)
console.log(1 + "2"); // Output: "12" (string concatenation)
console.log("1" + "2"); // Output: "12" (string concatenation)
console.log(1 + 2); // Output: 3 (numeric addition)
console.log(1 + 2 + "3"); // Output: "33" (numeric addition followed by string concatenation)
console.log("1" + 2 + "3"); // Output: "123" (string concatenation followed by numeric addition)

console.log(+true); // Output: 1 (boolean true is converted to 1)
console.log(-false); // Output: 0 (boolean false is converted to 0)
console.log(+null); // Output: 0 (null is converted to 0)
console.log(+undefined); // Output: NaN (undefined cannot be converted to a number)

// In summary, when performing operations with different data types in JavaScript, type coercion can occur, which may lead to unexpected results. It is important to be aware of how JavaScript handles type conversion and to use explicit conversion methods when necessary to ensure that your code behaves as intended.

let x = 5;
x++; // Increment operator (postfix)
console.log("Postfix increment:", x); // Output: Postfix increment: 6

let y = 5;
++y; // Increment operator (prefix)
console.log("Prefix increment:", y); // Output: Prefix increment: 6

let z = 5;
z--; // Decrement operator (postfix)
console.log("Postfix decrement:", z); // Output: Postfix decrement: 4

let w = 5;
--w; // Decrement operator (prefix)
console.log("Prefix decrement:", w); // Output: Prefix decrement: 4

// In summary, the increment (++) and decrement (--) operators can be used in both postfix and prefix forms. The postfix form returns the original value before incrementing or decrementing, while the prefix form returns the new value after the operation.