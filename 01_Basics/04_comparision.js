console.log(5 > 3); // Output: true (5 is greater than 3)
console.log(5 < 3); // Output: false (5 is not less than 3)
console.log(5 >= 5); // Output: true (5 is greater than or equal to 5)
console.log(5 <= 4); // Output: false (5 is not less than or equal to 4)
console.log(5 == "5"); // Output: true (loose equality, type coercion occurs)
console.log(5 === "5"); // Output: false (strict equality, no type coercion)
console.log(5 != "5"); // Output: false (loose inequality, type coercion occurs)
console.log(5 !== "5"); // Output: true (strict inequality, no type coercion)

// In summary, JavaScript provides various comparison operators such as greater than (>), less than (<), greater than or equal to (>=), less than or equal to (<=), loose equality (==), strict equality (===), loose inequality (!=), and strict inequality (!==). These operators can be used to compare values and return a boolean result based on the comparison. It is important to understand the difference between loose and strict equality to avoid unexpected results due to type coercion.

console.log("2" > "12"); // Output: true (string comparison based on lexicographical order)
console.log("apple" < "banana"); // Output: true (string comparison based on lexicographical order)
console.log("5" > 3); // Output: true (string "5" is converted to number 5 for comparison)

console.log(true > false); // Output: true (true is converted to 1 and false is converted to 0 for comparison)
console.log(null > undefined); // Output: false (null is converted to 0 and undefined is converted to NaN for comparison)
console.log(null == undefined); // Output: true (loose equality, null and undefined are considered equal)
console.log(null === undefined); // Output: false (strict equality, null and undefined are not the same type)

// In summary, when comparing values of different data types in JavaScript, type coercion can occur, which may lead to unexpected results. It is important to be aware of how JavaScript handles type conversion during comparisons and to use strict equality (===) when you want to avoid type coercion and ensure that both the value and type are the same. 

console.log(null>0); // Output: false (null is converted to 0 for comparison)
console.log(null==0); // Output: false (loose equality, null is not equal to 0)
console.log(null>=0); // Output: true (null is converted to 0 for comparison)

// In summary, when comparing null with a number in JavaScript, null is converted to 0 for the comparison. This can lead to different results depending on the comparison operator used. It is important to understand how JavaScript handles type coercion in comparisons to avoid unexpected results in your code.