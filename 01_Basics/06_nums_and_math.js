const score = 400
console.log(score); // Output: 400

const balance = new Number(100)
console.log(balance); // Output: [Number: 100]

console.log(balance.toString()); // Output: "100" (number converted to string)
console.log(balance.toFixed(2)); // Output: "100.00" (number converted to string with fixed-point notation)

const otherNumber = 23.865
console.log(otherNumber.toPrecision(3)); // Output: "23.9" (number converted to string with specified precision of 3 significant digits)

const hyndreds = 1000000
console.log(hyndreds.toLocaleString()); // Output: "1,000,000" (number formatted with commas as thousands separators)
console.log(hyndreds.toLocaleString("en-IN", { style: "currency", currency: "INR" })); // Output: "₹10,00,000.00" (number formatted as currency in Indian locale)

// In summary, JavaScript provides various methods for working with numbers, including converting numbers to strings, formatting numbers with fixed-point notation or specified precision, and formatting numbers according to locale-specific conventions. These methods can be useful for displaying numbers in a user-friendly format or for performing specific operations on numeric values.

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// math

console.log(Math.PI); // Output: 3.141592653589793 (the value of π)
console.log(Math.E); // Output: 2.718281828459045 (the value of e)
console.log(Math.sqrt(16)); // Output: 4 (square root of 16)
console.log(Math.abs(-8)); // Output: 8 (absolute value of -8)
console.log(Math.round(4.7)); // Output: 5 (rounds to the nearest integer)
console.log(Math.floor(4.7)); // Output: 4 (rounds down to the nearest integer)
console.log(Math.ceil(4.3)); // Output: 5 (rounds up to the nearest integer)

console.log(Math.random()); // Output: a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random() * 100); // Output: a random number between 0 and 100
console.log(Math.floor(Math.random() * 100)); // Output: a random integer between 0 and 99
console.log(Math.floor(Math.random() * 10) + 1); // Output: a random integer between 1 and 10


console.log(Math.max(10, 20, 5)); // Output: 20 (returns the largest of the given numbers)
console.log(Math.min(10, 20, 5)); // Output: 5 (returns the smallest of the given numbers)

// In summary, JavaScript provides a built-in Math object that contains properties and methods for performing mathematical operations. You can use Math.PI and Math.E for mathematical constants