// objects via constructor functions, Singletons

const tinderUser = new Object(); // singleton --> an object that is instantiated only once

// const tinderUser = {}; // object literals  --> a comma-separated list of name-value pairs wrapped in curly braces --> non-singleton object

tinderUser.id = "12345";
tinderUser.name = "Mayank";
tinderUser.isLoggedIn = false;

//console.log(tinderUser); // { id: '12345', name: 'Mayank', isLoggedIn: false }

regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Mayank",
            lastname: "Kumar"}
    }
}
console.log(regularUser.fullname.userfullname.firstname); // Mayank - access the nested object property using dot notation
console.log(regularUser["fullname"]["userfullname"]["lastname"]); // Kumar - access the nested object property using bracket notation


// merging two objects
const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj2 = {
    key3: "value3",
    key4: "value4"
}

const mergedObject = Object.assign({}, obj1, obj2); // merges obj1 and obj2 into a new object
console.log(mergedObject); // { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' }


const mergedObject2 = {...obj1, ...obj2}; // using spread operator to merge obj1 and obj2 into a new object
console.log(mergedObject2); // { key1: 'value1', key2: 'value2', key3: 'value3', key4: 'value4' }


console.log(Object.keys(mergedObject)); // ['key1', 'key2', 'key3', 'key4'] - returns an array of the keys of the object
console.log(Object.values(mergedObject)); // ['value1', 'value2', 'value3', 'value4'] - returns an array of the values of the object
console.log(Object.entries(mergedObject)); // [['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3'], ['key4', 'value4']] - returns an array of key-value pairs of the object


// to check if the user property exists in the object
console.log(mergedObject.hasOwnProperty("key1")); // true - checks if the object has the specified property
console.log(mergedObject.hasOwnProperty("key5")); // false - checks if the object has the specified property