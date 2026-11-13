//primitive data types in javascript are immutable, which means they cannot be changed.
//These are in-built data types in javascript:
// 1. String - A string is a sequence of characters. It can be created using single quotes, double quotes, or backticks.
// 2. Number - A number is a numeric value. It can be an integer or a floating-point number.
// 3. Boolean - A boolean is a logical value that can be either true or false.
// 4. Undefined - A variable that has been declared but has not been assigned a value is undefined.
// 5. Null - Null is a special value that represents the absence of any object value.
// 6. BigInt - BigInt is a numeric value that can represent integers with arbitrary precision. It can be created by appending 'n' to the end of an integer literal or by using the BigInt() constructor.
// 7. Symbol - A symbol is a unique and immutable primitive value that can be used as a key for object properties. It can be created using the Symbol() function.
// 8. Object - An object is a collection of key-value pairs. It can be created using curly braces {} or the Object() constructor.
// 9. Array - An array is a special type of object that can hold a collection of values. It can be created using square brackets [] or the Array() constructor.
// 10. Function - A function is a block of code that can be executed when called. It can be created using the function keyword or the arrow function syntax.
// 11. Date - A date is a built-in object that represents a single moment in time. It can be created using the Date() constructor.
// 12. RegExp - A regular expression is a pattern that can be used to match character combinations in strings. It can be created using the RegExp() constructor or by using forward slashes /pattern/.
// 13. Error - An error is a built-in object that represents an error that occurs during the execution of a program. It can be created using the Error() constructor or by using one of the built-in error types such as TypeError, ReferenceError, etc.
// 14. Map - A map is a collection of key-value pairs where the keys can be of any data type. It can be created using the Map() constructor.
// 15. Set - A set is a collection of unique values. It can be created using the Set() constructor.
// 16. WeakMap - A weak map is a collection of key-value pairs where the keys are weakly referenced. It can be created using the WeakMap() constructor.
// 17. WeakSet - A weak set is a collection of unique values where the values are weakly referenced. It can be created using the WeakSet() constructor.
// In javascript, there are two types of data types: primitive and non-primitive data types.
// Primitive data types in javascript are as follows:
// 1. String
// 2. Number
// 3. Boolean   
// 4. Undefined
// 5. Null
// 6. BigInt
// 7. Symbol
// Non-primitive data types in javascript are as follows:
// 1. Object
// 2. Array
// 3. Function
// In javascript, we can use the 'typeof' operator to check the data type of a variable. It returns a string indicating the type of the unevaluated operand.
// The syntax of the 'typeof' operator is as follows:
// typeof operand
// Here, the operand can be any variable, function, or object. The 'typeof' operator returns a string indicating the type of the operand.
// The possible return values of the 'typeof' operator are as follows:
// 1. "undefined" - if the operand is undefined
// 2. "object" - if the operand is null or an object
// 3. "boolean" - if the operand is a boolean
// 4. "number" - if the operand is a number
// 5. "string" - if the operand is a string
// 6. "function" - if the operand is a function
// 7. "symbol" - if the operand is a symbol
// 8. "bigint" - if the operand is a BigInt

var myName = "Gayatri"; //String
var myAge = 25; //Number - Here we have assigned 25 value to the variable, which means it is a number.
var isMarried = false;  //Boolean - Here we have assigned false value to the variable, which means it is not married.
var myEmail; //Undefined - Here we have not assigned any value to the variable, so it is undefined.
var myAddress = null; //Null - Here we have assigned null value to the variable, which means it is empty.
var myProfile = {}; //Object - here we have assigned an empty object to the variable.
var largeNumber = 12345678901234567890n; //BigInt - Here we have assigned a large number to the variable, which means it is a BigInt.
console.log(myName);
console.log(typeof myName);
console.log(myAge);
console.log(typeof myAge);
console.log(isMarried);
console.log(typeof isMarried);
console.log(myEmail);
console.log(typeof myEmail);
console.log(myAddress);
console.log(typeof myAddress);
console.log(myProfile);
console.log(typeof myProfile);
console.log(largeNumber);
console.log(typeof largeNumber);

var firstObject = { name: "Gayatri", age: 25 }; 
console.log(firstObject);

var firstArray = [1, 2, 3];
console.log(firstArray);

var firstFunction = function() 
                    { 
                       console.log("Hello, World!");
                  
                    };
console.log(firstFunction);
console.log(typeof firstFunction);
