// singleton --> an object that is instantiated only once

// object literals  --> a comma-separated list of name-value pairs wrapped in curly braces

// create an object

const mySymbol = Symbol("symb1"); // create a unique symbol
const jsUser = {
    name: "Mayank",
    age: 25,
    isAdmin: true,
    hobbies: ["coding", "gaming", "traveling"],
    address: {
        city: "Delhi",
        country: "India"
    },
    mySymbol: "myKey 1"
}

//console.log(jsUser.name); // Mayank - access the name property using dot notation
//console.log(jsUser[name]); // undefined - name is not defined, it is a string and should be accessed using bracket notation
//console.log(jsUser["name"]); // Mayank - access the name property using bracket notation
//console.log(jsUser["mySymbol"]); // myKey 1 - access the mySymbol property using bracket notation
//console.log(jsUser.mySymbol); // myKey 1 - access the mySymbol property using dot notation

//Object.freeze(jsUser); // freeze the object to prevent modification
jsUser.name = "John"; // cannot modify the name property because the object is frozen
//console.log(jsUser.name); // Mayank - name property is not modified


jsUser.greeting = function() {  
    console.log(`Hello, my name is years old.`); // add a method to the object
}

jsUser.greeting(); // Hello, my name is years old. - call the method of the object

jsUser.greeting2 = function() {  
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`); // add a method to the object
}
jsUser.greeting2(); // Hello, my name is John and I am 25 years old. - call the method of the object