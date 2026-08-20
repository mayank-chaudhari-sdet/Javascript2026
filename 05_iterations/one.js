// for loops --> for loops are used to iterate over a block of code a number of times. The for loop is the most commonly used loop in JavaScript. It consists of three parts: the initialization, the condition, and the increment/decrement.
// Example of a for loop that iterates over an array and prints each element:
let array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
    // code to be executed for each iteration
    const ele = array[i];
    console.log(ele); // This will print each element of the array
}

// In summary, for loops are a fundamental control structure in JavaScript that allow you to repeat a block of code multiple times based on a specified condition.
// Output = 1, 2, 3, 4, 5

 for (let i = 0; i <= 10; i++) {
    let element = i;
    if(element == 5)
    {
        console.log("The value of element is 5");
        break; // This will exit the loop when element is equal to 5
    }
    console.log(element); // This will print the value of element for each iteration
}

for (let i = 0; i <= 10; i++) {
    for(let j = 0; j <= 10; j++) {
        console.log(`i: ${i}, j: ${j}`); // This will print the values of i and j for each iteration of the inner loop
    }
}

// In summary, nested for loops allow you to iterate over multiple dimensions or levels of data, making them useful for tasks such as traversing multi-dimensional arrays or performing complex calculations.

// Example of a for loop that iterates over an array and prints each element:
let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // This will print each fruit in the array
}

// Output = Apple, Banana, Cherry, Date, Elderberry

// In summary, for loops are a fundamental control structure in JavaScript that allow you to repeat a block of code multiple times based on a specified condition. They are commonly used for iterating over arrays and performing repetitive tasks.

// Example of a for loop that iterates over an array and prints each element:
let numbers = [10, 20, 30, 40, 50];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); // This will print each number in the array
}

// Output = 10, 20, 30, 40, 50

// In summary, for loops are a fundamental control structure in JavaScript that allow you to repeat a block of code multiple times based on a specified condition. They are commonly used for iterating over arrays and performing repetitive tasks.


// break statement --> The break statement is used to exit a loop or switch statement before it has completed all its iterations. It is commonly used to terminate a loop when a certain condition is met, allowing the program to continue executing the code that follows the loop.

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // This will exit the loop when i is equal to 5
    }
    console.log(i); // This will print the value of i for each iteration until it reaches 5
}

// Output = 0, 1, 2, 3, 4

// In summary, the break statement is a useful control flow tool in JavaScript that allows you to exit loops or switch statements early based on specific conditions. It can help improve the efficiency of your code by preventing unnecessary iterations.

//continue statement --> The continue statement is used to skip the current iteration of a loop and move on to the next iteration. It is commonly used to skip over certain values or conditions within a loop, allowing the program to continue executing the code that follows the loop.

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // This will skip the current iteration when i is equal to 5
    }
    console.log(i); // This will print the value of i for each iteration except when it is 5
}

// Output = 0, 1, 2, 3, 4, 6, 7, 8, 9

// In summary, the continue statement is a useful control flow tool in JavaScript that allows you to skip over certain iterations of a loop based on specific conditions. It can help improve the efficiency of your code by preventing unnecessary processing of certain values.   
