//Declaration of variables 
//In JavaScript, variables can be declared using the var, let, or const keywords.
//1. var: The var keyword is used to declare variables in JavaScript. 
//   Variables declared with var are function-scoped or globally-scoped, and they can be re-declared and updated.

var name = "Gayatri"; // Declaring a variable using var
console.log(name); // Output: Gayatri
//Re-declaring the variable using var
var name = "John"; // Re-declaring the variable using var
console.log(name); // Output: John

//2. let: The let keyword is used to declare block-scoped variables in JavaScript. 
//   Variables declared with let can be updated but not re-declared within the same scope.

let age = 25; // Declaring a variable using let
console.log(age);
//Re-declaring the variable using let will result in an error
//let age = 30; // SyntaxError: Identifier 'age' has already been declared

const pi = 3.14; // Declaring a constant variable using const
console.log(pi); // Output: 3.14
//Re-declaring or updating the variable using const will result in an error
//const pi = 3.14159; // SyntaxError: Identifier 'pi' has already been declared
//pi = 3.14159; // TypeError: Assignment to constant variable.  

//Assignment of variables
//In JavaScript, variables can be assigned values using the assignment operator (=). 
//The value assigned to a variable can be of any data type, including numbers, strings, booleans, objects, arrays, and more.
let score = 85; // Assigning a number to a variable
let message = "Hello, World!"; // Assigning a string to a variable
let isActive = true;

//Reassigning values to variables
score = 90; // Reassigning a new value to the variable score
message = "Welcome to the world";
isActive = false;
console.log(score); // Output: 90
console.log(message); // Output: Welcome to the world!
console.log(isActive); // Output: false

//difference between Re-declaring and Re-assigning variables
//Re-declaring a variable means declaring a variable with the same name again in the same scope. 
//This is allowed with var but not with let or const.
var city = "New York"; // Declaring a variable using var
var city = "Los Angeles"; // Re-declaring the variable using var
console.log(city); // Output: Los Angeles

//var can be re-declared and updated within the same scope, while let and const cannot be re-declared in the same scope.
//Re-assigning a variable means assigning a new value to an existing variable.


