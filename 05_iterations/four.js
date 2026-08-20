const myObject = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby'
};
// using for of loop to iterate over the properties of an object using Object.entries()
for (const [key, value] of Object.entries(myObject)) {
    console.log(`Key: ${key}, Value: ${value}`);
}

// using for in loop to iterate over the properties of an object
for (const key in myObject) {
        console.log(`Key: ${key} has the Value: ${myObject[key]}`);
}   


// In summary, the for...of loop is used to iterate over iterable objects such as arrays, strings, and maps, while the for...in loop is used to iterate over the properties of an object. The for...of loop provides a simpler syntax for iterating over values, while the for...in loop allows you to access both keys and values of an object.

const programmingLanguages = ['JavaScript', 'Python', 'Ruby'];
// using for in loop to iterate over the elements of an array
for (const index in programmingLanguages) {
    console.log(`Index: ${index}, Value: ${programmingLanguages[index]}`);
}

// using for of loop to iterate over the elements of an array
for (const language of programmingLanguages) {
    console.log(`Value: ${language}`);
}
// In summary, the for...in loop is used to iterate over the indices of an array, while the for...of loop is used to iterate over the values of an array. The for...in loop provides access to the index of each element, while the for...of loop provides direct access to the values of the array elements.

const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "UNITED STATES");
map.set("UK", "UNITED KINGDOM");

for (const language in map) {
    console.log(language); // This will not print anything because map is not an object, it's a Map instance. The for...in loop is not suitable for iterating over Map instances.
}
for (const language of map) {
    console.log(language); // This will print each key-value pair in the map as an array [key, value]
}

//summary, the for...in loop is not suitable for iterating over Map instances, while the for...of loop can be used to iterate over the key-value pairs in a Map. The for...of loop provides a simpler syntax for iterating over the values of a Map, while the for...in loop is used to iterate over the properties of an object.
