// switch case statement is used to perform different actions based on different conditions.
// It is an alternative to using multiple if-else statements when you have a single variable that can take on multiple values and you want to execute different code blocks based on those values.

let fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("This is a banana.");
        break;
    case "apple":
        console.log("This is an apple."); 
        break;
    case "orange": {}
        console.log("This is an orange.");
        break;
    default:
        console.log("Unknown fruit.");
}

// In this example, the switch statement checks the value of the variable fruit.   
// Since fruit is equal to "apple", the code block associated with the case "apple" is executed, and "This is an apple." is logged to the console. The break statement is used to exit the switch statement after a matching case is found, preventing the execution of subsequent cases. If none of the cases match the value of fruit, the default case will be executed, logging "Unknown fruit." to the console.
