let fruits = ["Apple", "Banana"];
fruits.push("Mango");                                     //Push - Add elements into an array
console.log(fruits);

fruits.pop();                                             // Pop - Removes the last element
console.log(fruits);

fruits.shift();                                           // shift - Removes the first element
console.log(fruits);

fruits.unshift("Apple");                                  // unshift - Add an element at the beginning
console.log(fruits);

console.log(fruits.includes("Banana"));                   // includes - Check whether an element exists
console.log(fruits.includes("Orange"));

console.log(fruits.indexOf("Banana"));                    // indexOf() – Find the position of an element

let result = fruits.join(", ");                           // join() – Convert an array into a string
console.log(result);

fruits.reverse();                                         // reverse() – Reverse the array
console.log(fruits);

fruits.sort();                                            // sort() – Sort the array
console.log(fruits);

let numbers = [50, 20, 40, 10, 30];
numbers.sort((a, b) => a - b);                            // a - b is used to arrange the numbers in ascending order (smallest to largest).
console.log(numbers);
