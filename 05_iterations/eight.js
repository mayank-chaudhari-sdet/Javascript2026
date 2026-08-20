// reduce method is used to reduce the array to a single value. It takes a callback function and an initial value as arguments. The callback function takes two parameters: an accumulator and the current value. The accumulator is the value that is returned after each iteration, and the current value is the current element being processed in the array. 

// using traditional function with reduce method to reduce the array to a single value
const array1 =[1,2,3,4,5];

const sum = array1.reduce( function (acc, currval) {
    console.log('acc', acc);
    console.log('currval', currval);
    return acc + currval;
}, 0);

console.log(sum); // Output: 15

// In summary, the reduce method is a higher-order function that allows you to reduce an array to a single value by applying a specified operation on each element of the array. It provides a simpler syntax compared to traditional for loops and is commonly used for array reduction in JavaScript.


// using arrow function with reduce method to reduce the array to a single value
const sum2 = array1.reduce( (acc, currval) => acc + currval, 0);
console.log(sum2); // Output: 15


const cart = [
    { name: "Item 1", price: 10, quantity: 2 },
    { name: "Item 2", price: 20, quantity: 1 },
    { name: "Item 3", price: 30, quantity: 3 }
];

const priceToPay = cart.reduce( (acc, item) => (acc + (item.price * item.quantity)), 0)
console.log(priceToPay);