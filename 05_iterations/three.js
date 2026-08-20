// for of 
// higher order array methods  --> 

const arr = [1, 2, 3, 4, 5];

for( const iterator of arr ) {
    console.log(iterator);
}

const greetings = "Hello World"

for ( const iterator of greetings ) {
    console.log(`Each character of greeting is ${iterator}`);
}


// Maps -> Key-value pairs 

const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "UNITED STATES");
map.set("UK", "UNITED KINGDOM");

console.log(map);

for (const [key, value] of map) {
    console.log(`Key: ${key}, Value: ${value}`);
}


const myObject = {  
    'game1': 'Chess',
    'game2': 'Football',
    'game3': 'Basketball'
};

//  for (const [key, value] of myObject) {
//     console.log(`Key: ${key}, Value: ${value}`);
//  }
// this fails because myObject is not iterable. To iterate over the properties of an object, you can use Object.entries() to convert the object into an array of key-value pairs.

for (const [key, value] of Object.entries(myObject)) {
    console.log(`Key: ${key}, Value: ${value}`);
}