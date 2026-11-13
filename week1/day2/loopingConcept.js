//Loop - is used to execute the same block of code repeatedly until a particular condition is met. 
//The loop automatically executes the code until the condition becomes false.
//Types of loops in JavaScript 
// 1. for loop - A for loop is used when you know how many times you want to execute the code.
// 2. while loop - A while loop executes the code as long as the condition is true.
// 3. do-while loop - A do-while loop is similar to a while loop, but it guarantees that the code block will be executed at least once, even if the condition is false.
// 4. for...of loop - The for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc. It allows you to access the values of the iterable directly without needing to use an index or key.
// 5. for...in loop - The for...in loop is used to iterate over the properties of an object. It allows you to access the keys of the object, which can then be used to retrieve the corresponding values.
// 6. forEach() method - The forEach() method is an array method that allows you to iterate over the elements of an array and execute a provided function for each element. It is a convenient way to perform operations on each item in the array without needing to use a traditional loop structure.

/* for loop - 
Syntax
for (initialization; condition; increment) 
{
    Code to execute
}
*/
for (let i = 1; i <= 5; i++) 
{
    console.log(i);
}

// Sum of the numbers by using for loop
let sum = 0;

for (let i = 1; i <= 5; i++)
 {
    sum = sum + i;
}
console.log(sum);


/* while loop - A while loop executes the code as long as the condition is true.
                Unlike a for loop, initialization and increment are generally written separately.
                ***Always make sure the condition eventually becomes false. Otherwise, you may create an infinite loop.
Syntax
initialization;
while (condition) 
{
    Code to execute 
    increment/decrement;
}
*/

let j = 97;  // Initialization - ASCII value of lowercase a is 97.
while (j <= 101) // Condition - Continue until ASCII value 101 (e).
{
    console.log(String.fromCharCode(j));  // Code to execute - Converts the ASCII number into a character.
    j++;  // Increment - Increases the value by 1.
}

//Real time example:  Imagine you have a game where a player has 3 lives.
let lives = 3;
while (lives > 0) 
{
    console.log("Player is playing");
    lives--; // Decrement - Decreases the value of lives by 1 after each iteration.
}
console.log("Game Over");

// do-while loop - A do-while loop is similar to a while loop, but it guarantees that the code block will be executed at least once, even if the condition is false.
// That means the code inside the do block will run first, and then the condition is checked. 
// If the condition is true, the loop will continue; if it's false, the loop will stop.
/* Syntax
initialization;
do 
{
    Code to execute
    increment/decrement;
}
while (condition);
*/
let i = 1; // Initialization
do    // Code to execute at least once
{
    console.log(i);
    i++;
} 
while (i <= 5);  // Condition - The loop will continue as long as i is less than or equal to 5.

//negative case - The code inside the do block will run at least once, even if the condition is false.
let k = 10;
do    
{
    console.log("Hello");    // Code to execute at least once
} 
while (k <= 5);  // Condition - The loop will continue as long as k is less than or equal to 5.

// when to use - for loop, while loop and do-while loop:
// Use a for loop when you know the number of iterations in advance.
// Use a while loop when you want to repeat a block of code as long as a certain condition is true, and you may not know the number of iterations in advance.
// Use a do-while loop when you want to ensure that the code block is executed at least once, regardless of the condition.

//for of loop - The for...of loop is used to iterate over iterable objects like arrays, strings, maps, sets, etc. It allows you to access the values of the iterable directly without needing to use an index or key.
/* Syntax
for (variable of iterable) 
 {
     Code to execute
 }   
Examples include:
Arrays
Strings
Maps
Sets */ 

//Array example
const fruits = ["apple", "banana", "cherry"];   //Iterating over the array using for...of loop
for (const fruit of fruits)    // variable fruit takes the value of each element in the fruits array during each iteration
{
    console.log(fruit);        // Code to execute - Prints each fruit in the array
}

//String example
const name = "John";
for (const char of name)    // variable char takes the value of each character in the name string during each iteration
{
    console.log(char);       // Code to execute - Prints each character in the string
}

//Map example
// A Map is a collection of key-value pairs where keys can be of any data type. It maintains the order of insertion and allows for efficient retrieval of values based on their keys.   
const map = new Map();   // Creating a new Map object
map.set("name", "John");   // Adding key-value pairs to the map
map.set("age", 30);      // Adding key-value pairs to the map
for (const [key, value] of map)    // variable key and value take the key-value pairs of the map during each iteration
{
    console.log(key + ": " + value);  // Code to execute - Prints each key-value pair in the map
}

//Set example
// A Set is a collection of unique values. It does not allow duplicate values and maintains the order of insertion. Sets are useful when you want to store a collection of distinct elements.
const set = new Set();   // Creating a new Set object
set.add(1);   // Adding values to the set
set.add(2);   // Adding values to the set
set.add(3);   // Adding values to the set
for (const value of set)    // variable value takes the value of each element in the set during each iteration
{
    console.log(value);   // Code to execute - Prints each value in the set
}

//for in loop - The for...in loop is used to iterate over the properties of an object. It allows you to access the keys of the object, which can then be used to retrieve the corresponding values.
/* Syntax
for (variable in object)
{
    Code to execute
}
*/  
let student =               // Creating an object named student
{                           // The student object has three properties: name, age, and course
    name: "John",
    age: 22,
    course: "JavaScript"
};                          //Iterating over the properties of the student object using for...in loop
for (let key in student)    // variable key takes the value of each property in the student object during each iteration
{
    console.log(key);       // Code to execute - Prints each property (key) in the student object
    console.log(student[key]);  // Code to execute - Prints the value of each property in the student object
}

//forEach() method - The forEach() method is an array method that allows you to iterate over the elements of an array and execute a provided function for each element. It is a convenient way to perform operations on each item in the array without needing to use a traditional loop structure.
/* Syntax
array.forEach(function(currentValue, index, array)
{
    Code to execute
}
*/
const numbers = [1, 2, 3, 4, 5];   // Creating an array named numbers
numbers.forEach(function(currentValue, index, array)    // The forEach() method takes a callback function as an argument, which is executed for each element in the numbers array
                 {
                    console.log("Value: " + currentValue + ", Index: " + index);  // Code to execute - Prints the value and index of each element in the numbers array
                 }
               );

//for each() method with arrow function - The forEach() method can also be used with an arrow function, which provides a more concise syntax for defining the callback function.
numbers.forEach((currentValue, index) =>  // The forEach() method takes an arrow function as an argument, which is executed for each element in the numbers array
{
    console.log("Value: " + currentValue + ", Index: " + index);  // Code to execute - Prints the value and index of each element in the numbers array
});

//for each() method with named function - The forEach() method can also be used with a named function, which allows you to define the callback function separately and reuse it if needed.
function printValue(currentValue, index)  // Defining a named function called printValue
{
    console.log("Value: " + currentValue + ", Index: " + index);  // Code to execute - Prints the value and index of each element in the numbers array
}
numbers.forEach(printValue);  // The forEach() method takes the named function printValue as an argument, which is executed for each element in the numbers array   

//forEach() method with break and continue - The forEach() method does not support breaking out of the loop using break or skipping an iteration using continue. 
// If you need to break out of a loop or skip an iteration, you should use a traditional for loop or a while loop instead.
//It is useful when you want to perform an operation on every array element.
//Summary - In summary, JavaScript provides various looping constructs to iterate over data structures and execute code repeatedly. The for loop is used when the number of iterations is known, while the while loop continues until a condition becomes false. The do-while loop guarantees at least one execution of the code block. The for...of loop is used for iterable objects, the for...in loop is used for object properties, and the forEach() method is a convenient way to iterate over arrays. Each looping construct has its own use cases and can be chosen based on the specific requirements of the code.
//Note: Always be cautious when using loops to avoid infinite loops, which can cause your program to hang or crash. Make sure the loop's condition will eventually become false, and consider using break statements or other control flow mechanisms when necessary.
/* Infinity loop - An infinite loop is a loop that never ends. It continues to execute indefinitely because the condition for termination is never met. This can happen if the loop's condition is always true or if there is no mechanism to change the condition within the loop. Infinite loops can cause a program to become unresponsive or crash, so it's important to ensure that loops have a clear exit condition.
Example of an infinite loop:
let i = 1;
while (i <= 5) {
    console.log(i);
}
*/

// Nested loop : 
for (let i = 1; i <= 3; i++)    // Outer loop - This loop will run 3 times, with i taking values from 1 to 3
{
    for (let j = 1; j <= 3; j++)    // Inner loop - This loop will also run 3 times for each iteration of the outer loop, with j taking values from 1 to 3
    {
        console.log("i: " + i + ", j: " + j);       // Code to execute - Prints the current values of i and j for each iteration of the inner loop
    }
}

//Pattern printing using nested loop
for (let i = 1; i <= 5; i++)    // Outer loop - This loop will run 5 times, with i taking values from 1 to 5
{
    let pattern = "";          // Initialize an empty string to build the pattern for the current row
    for (let j = 1; j <= i; j++)   // Inner loop - This loop will run i times for each iteration of the outer loop, with j taking values from 1 to i
    {
        pattern += "*";  // Concatenate asterisk to the pattern string
    }
    console.log(pattern);  // Print the pattern for the current row
}

// Break statement - The break statement is used to exit a loop prematurely, regardless of the loop's condition. When the break statement is encountered, the loop terminates immediately, and the program continues with the next statement after the loop.
for (let i = 1; i <= 5; i++) 
{
    if (i === 3) 
    {
        break;  // Exit the loop when i is equal to 3
    }
    console.log(i);  // Print the value of i
}

// Continue statement - The continue statement is used to skip the current iteration of a loop and move on to the next iteration. When the continue statement is encountered, the remaining code in the loop for that iteration is skipped, and the loop proceeds to the next iteration.
for (let i = 1; i <= 5; i++) 
{
    if (i === 3)
    {
        continue;  // Skip the current iteration when i is equal to 3
    }
    console.log(i);  // Print the value of i
}
