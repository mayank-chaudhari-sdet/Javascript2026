// Execution Context is a concept in JavaScript that refers to the environment in which a piece of code is executed. It determines the scope of variables, functions, and objects that are accessible during the execution of that code. There are two types of execution contexts in JavaScript: global execution context and function execution context.

// Global Execution Context: This is the default execution context that is created when a JavaScript program is run. It is created when the JavaScript engine starts executing the code and it contains all the global variables and functions that are defined in the program. The global execution context is created only once and it remains active throughout the lifetime of the program.

// Function Execution Context: This is created whenever a function is called. Each time a function is called, a new execution context is created for that function. The function execution context contains all the local variables and functions that are defined within that function. When the function completes its execution, its execution context is destroyed and control is returned to the previous execution context.

// The execution context is created in two phases: the creation phase and the execution phase. In the creation phase, the JavaScript engine creates a new execution context and sets up the scope chain, which determines the accessibility of variables and functions. In the execution phase, the code is executed line by line and the values of variables and functions are determined based on their scope.

//EVAL execution context: The eval() function in JavaScript is used to evaluate a string of code and execute it as if it were part of the program. When eval() is called, a new execution context is created for the code that is being evaluated. This execution context has access to the variables and functions that are defined in the current scope, as well as any global variables and functions that are accessible from that scope. However, using eval() can be dangerous and should be avoided whenever possible, as it can introduce security vulnerabilities and make code harder to read and maintain.


// Memory Creation Phase: In this phase, the JavaScript engine creates a new execution context and sets up the memory for variables and functions. It also creates the scope chain, which determines the accessibility of variables and functions. The memory creation phase is responsible for allocating memory for variables and functions, and it is done before the code is executed.

// Code Execution Phase: In this phase, the code is executed line by line and the values of variables and functions are determined based on their scope. The code execution phase is responsible for executing the code and determining the values of variables and functions based on their scope. It is done after the memory creation phase. 


// let val1 = 10;
// let val2 = 20;
// function add(num1 , num2) {
//     let total = num1 + num2;
//     console.log(total);
// }
// let result1 = add(val1 , val2); // 30
// let result2 = add(100 , 200); // 300


// 1. Global Execution --> this
// In the global execution context, the value of this refers to the global object, which is the window object in a browser environment. This means that any variables or functions defined in the global scope can be accessed using this. For example, if we define a variable in the global scope like let myVar = 10;, we can access it using this.myVar. Similarly, if we define a function in the global scope like function myFunc() { console.log("Hello"); }, we can call it using this.myFunc().

// 2. Memory Creation Phase -->
// In the memory creation phase, the JavaScript engine creates a new execution context and sets up the memory for variables and functions. It also creates the scope chain, which determines the accessibility of variables and functions. The memory creation phase is responsible for allocating memory for variables and functions, and it is done before the code is executed. During this phase, the JavaScript engine scans the code and identifies all the variables and functions that are defined in the current scope. It then allocates memory for these variables and functions in the execution context's memory space. This allows the JavaScript engine to keep track of the values of variables and functions during code execution.
// val1 -> undefined
// val2 -> undefined
// add -> function add(num1 , num2) { let total = num1 + num2; console.log(total); }
// result1 -> undefined
// result2 -> undefined

// 3. Code Execution Phase -->
// In the code execution phase, the code is executed line by line and the values of variables and functions are determined based on their scope. The code execution phase is responsible for executing the code and determining the values of variables and functions based on their scope. It is done after the memory creation phase. During this phase, the JavaScript engine executes the code and assigns values to variables and functions based on their scope. It also keeps track of the current execution context and updates the values of variables and functions as needed. This allows the JavaScript engine to execute code in a predictable manner and ensures that variables and functions are accessible only within their defined scope. 
// val1 -> 10
// val2 -> 20
// add -> function add(num1 , num2) { let total = num1 + num2; console.log(total); }
// result1 -> undefined
// result2 -> undefined

// 4. Function Execution Context -->
// When a function is called, a new execution context is created for that function. This execution context contains all the local variables and functions that are defined within that function. When the function completes its execution, its execution context is destroyed and control is returned to the previous execution context. The function execution context is created in two phases: the creation phase and the execution phase. In the creation phase, the JavaScript engine creates a new execution context and sets up the scope chain, which determines the accessibility of variables and functions. In the execution phase, the code is executed line by line and the values of variables and functions are determined based on their scope.
// Function Execution Context for add(val1 , val2) -->
// num1 -> 10
// num2 -> 20
// total -> undefined

// Function Execution Context for add(100 , 200) -->
// num1 -> 100
// num2 -> 200
// total -> undefined
// Function Execution Context is created when a function is called and destroyed when the function completes its execution. The function execution context contains all the local variables and functions that are defined within that function. When the function completes its execution, its execution context is destroyed and control is returned to the previous execution context. The function execution context is created in two phases: the creation phase and the execution phase. In the creation phase, the JavaScript engine creates a new execution context and sets up the scope chain, which determines the accessibility of variables and functions. In the execution phase, the code is executed line by line and the values of variables and functions are determined based on their scope.