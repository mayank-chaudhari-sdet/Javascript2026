// dates

let myDate = new Date(); // Create a new Date object with the current date and time
console.log(myDate); // Output: current date and time (e.g., 2024-06-01T12:34:56.789Z)
console.log(myDate.toString()); // Output: current date and time in a human-readable format (e.g., "Sat Jun 01 2024 12:34:56 GMT+0000 (Coordinated Universal Time)")
console.log(myDate.toDateString()); // Output: current date in a human-readable format (e.g., "Sat Jun 01 2024")
console.log(myDate.toTimeString()); // Output: current time in a human-readable format (e.g., "12:34:56 GMT+0000 (Coordinated Universal Time)")
console.log(myDate.toLocaleDateString()); // Output: current date in a locale-specific format (e.g., "6/1/2024" in the US locale)
console.log(myDate.toLocaleTimeString()); // Output: current time in a locale-specific format (e.g., "12:34:56 PM" in the US locale)
console.log(typeof myDate); // Output: object (Date is a built-in object in JavaScript)
myCreatedDate = new Date("2024-06-01T12:34:56"); // Create a Date object with a specific date and time
console.log(myCreatedDate); // Output: 2024-06-01T12:34:56.000Z (the specified date and time in ISO format)

let myTimeStamp = Date.now(); // Get the current timestamp in milliseconds since January 1, 1970
console.log(myTimeStamp); // Output: current timestamp (e.g., 1712123456789)
console.log(typeof myTimeStamp); // Output: number (timestamp is a numeric value representing milliseconds)


console.log(myCreatedDate.getTime()); // Output: current date and time (e.g., 2024-06-01T12:34:56.789Z)
// In summary, JavaScript provides a built-in Date object that allows you to work with dates and times. You can create Date objects to represent specific dates and times, and use various methods to format and manipulate these dates. Additionally, you can use the Date.now() method to get the current timestamp in milliseconds, which can be useful for measuring time intervals or performing date calculations.

console.log(myCreatedDate.getMonth()); // Output: 5 (months are zero-indexed, so 5 represents June)
 