// Function is a block of code that performs a specific task. It can take inputs, process them, and return an output. Functions help in organizing code, making it reusable, and improving readability.

// Function Declaration
function greet(name) 
{
    return `Hello, ${name}!`; // This function takes a name as input and returns a greeting message.
                              // ${name} - means that the value of the variable name will be inserted into the string at that position. This is called string interpolation.
}

// Function Expression
const sayHello = function(name) 
{
    return `Hello, ${name}!`;  // This function expression is assigned to the variable sayHello. It takes a name as input and returns a greeting message.
};

// Arrow Function - It is a shorter syntax for writing functions introduced in ES6. Arrow functions do not have their own 'this' context and are best suited for non-method functions.
// Arrow functions are often used for callbacks or simple operations.
// Arrow Function with a single parameter and implicit return
// Arrow functions can have an implicit return if the function body consists of a single expression. In this case, the expression's value is automatically returned without needing the 'return' keyword.
// In this example, the arrow function takes a name as input and returns a greeting message. The expression `Hello, ${name}!` is implicitly returned without using the 'return' keyword.
const greetArrow = (name) => 
{
    return `Hello, ${name}!`;    // This arrow function takes a name as input and returns a greeting message. Arrow functions provide a shorter syntax for writing functions.
}

// Calling the functions
console.log(greet("Alice"));    // Output: Hello, Alice!
console.log(sayHello("Bob"));   // Output: Hello, Bob!
console.log(greetArrow("Charlie")); // Output: Hello, Charlie!  

// Function with Default Parameters
function greetWithDefault(name = "Guest") {
    return `Hello, ${name}!`; // This function takes a name as input and returns a greeting message. If no name is provided, it defaults to "Guest".
}
console.log(greetWithDefault("Alice"));        // Output: Hello, Alice!
console.log(greetWithDefault());               // Output: Hello, Guest!- Guest is the default value for the name parameter, which is used when no argument is provided during the function call.

// Function with Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0); // This function takes any number of arguments and returns their sum. The rest parameter syntax allows us to represent an indefinite number of arguments as an array.
}
console.log(sum(1, 2, 3));          // Output: 6
console.log(sum(4, 5, 6, 7, 8));    // Output: 30

// Function with Callback
function processUserInput(callback) {
    const name = "Alice"; // Simulating user input
    callback(name);       // Calling the callback function with the user input
}   

processUserInput((name) => 
{
    console.log(`Hello, ${name}!`); // Output: Hello, Alice! - The callback function is called with the user input, and it logs a greeting message to the console.
})

// Function Returning a Function
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(`Outer Variable: ${outerVariable}, Inner Variable: ${innerVariable}`); // This inner function has access to the outer function's variable due to closure.
    };
}

const newFunction = outerFunction("outside"); // Calling the outer function and storing the returned inner function in newFunction.
newFunction("inside"); // Output: Outer Variable: outside, Inner Variable: inside - The inner function is called with the inner variable, and it logs both the outer and inner variables to the console.

// Function Hoisting
console.log(hoistedFunction()); // Output: This function has been hoisted! - Function declarations are hoisted to the top of their scope, so they can be called before they are defined.
function hoistedFunction() {
    return "This function has been hoisted!";  // This function declaration is hoisted, so it can be called before its definition in the code.
}
// Function expressions are not hoisted, so calling them before they are defined will result in an error.

// Function Scope
function outerScope() 
{
    const outerVariable = "I am from the outer scope"; // This variable is defined in the outer function's scope.       
    function innerScope() 
    {
        const innerVariable = "I am from the inner scope";  // This variable is defined in the inner function's scope. The inner function has access to the outer function's variable due to closure.
        console.log(outerVariable); // Output: I am from the outer scope - The inner function can access the outer function's variable due to closure.
        console.log(innerVariable); // Output: I am from the inner scope - The inner function can access its own variable.
    }
    console.log(outerVariable); // Output: I am from the outer scope - The outer function can access its own variable.
    console.log
    innerScope(); // Calling the inner function to demonstrate access to both outer and inner variables.
}     
console.log(outerVariable); // Output: ReferenceError: outerVariable is not defined - The outerVariable is not accessible outside the outerScope function, so it results in a ReferenceError.

// Function with IIFE (Immediately Invoked Function Expression)
(function() 
{
    console.log("This is an IIFE!"); // Output: This is an IIFE! - This function is defined and immediately invoked, executing its code right away.
})();
