//Whenever we want raise a console before declaring a variable, it will give us undefined because of hoisting in javascript.
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase.
// This means that you can use variables and functions before they are actually declared in the code.
// However, only the declarations are hoisted, not the initializations. 
// So if you try to access a variable before it is initialized, you will get undefined.
// Memory creation phase and Execution phase are the two phases of hoisting in javascript. 
// In the memory creation phase, the variables and functions are stored in memory.
// In the execution phase, the code is executed line by line.

console.log(x); // undefined
var x = 5;
console.log(x); // 5

console.log(y); // ReferenceError: Cannot access 'y' before initialization for let and const variables. 
                // This is because they are not hoisted in the same way as var variables.
let y = 10;
console.log(y); // 10

console.log(z); // ReferenceError: Cannot access 'z' before initialization for let and const variables.
const z = 15;
console.log(z); // 15