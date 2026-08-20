const coding = ["js", "py", "rb", "java", "c++"];

const values = coding.forEach((item) => {
    console.log("Value", item);
})
// In summary, the forEach loop is a higher-order function that allows you to iterate over the elements of an array and perform a specified action for each element. It provides a simpler syntax compared to traditional for loops and is commonly used for array iteration in JavaScript.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 4);
// console.log("", newNums);
// In summary, the filter method is a higher-order function that allows you to create a new array containing elements that meet a specified condition. It provides a simpler syntax compared to traditional for loops and is commonly used for array filtering in JavaScript.

const newnums = []
myNums.forEach( (num) => {
    if(num > 4) {
        newnums.push(num);
    }
})
console.log( newnums);


const books = [
    {
        title: 'Book 1', genre: 'Fiction', publish: 2020
    },
    {
        title: 'Book 2', genre: 'Non-Fiction', publish: 2019
    },
    {
        title: 'Book 3', genre: 'Fiction', publish: 2021
    },
    {
        title: 'Book 4', genre: 'Non-Fiction', publish: 2018
    },
    {
        title: 'Book 5', genre: 'Fiction', publish: 2022
    }
]

//const userBooks = books.filter( (bk) => bk.genre === 'Fiction')
const userBooks = books.filter((bk) => bk.publish <=2019 || bk.genre === 'Fiction');
console.log(userBooks);
