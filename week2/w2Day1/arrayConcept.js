// Array - A collection of items stored at contiguous memory locations
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);  // Output: "apple"
console.log(fruits.length);  // it is giving the length of the array and its Output is 3
console.log(fruits[3]);  // Output: undefined - because the index 3 does not exist in the array, so it returns undefined.

// You can also use the push() method to add an item to the end of an array.
fruits.push("grape");
console.log(fruits);  // Output: ["apple", "banana", "orange", "grape"] 

// You can also use the pop() method to remove the last item from an array.
fruits.pop();
console.log(fruits);  // Output: ["apple", "banana", "orange"]

// You can also use the shift() method to remove the first item from an array.
fruits.shift();
console.log(fruits);  // Output: ["banana", "orange"]

// You can also use the unshift() method to add an item to the beginning of an array.
fruits.unshift("kiwi");
console.log(fruits);  // Output: ["kiwi", "banana", "orange"]

// You can also use the splice() method to add or remove items from an array.
fruits.splice(1, 1, "mango", "pear");
console.log(fruits);  // Output: ["kiwi", "mango", "pear", "orange"]

// You can also use the slice() method to extract a portion of an array.
let citrusFruits = fruits.slice(1, 3);
console.log(citrusFruits);  // Output: ["mango", "pear"]

// You can also use the indexOf() method to find the index of an item in an array.
let index = fruits.indexOf("pear");
console.log(index);  // Output: 2

// You can also use the includes() method to check if an item is in an array.
let hasMango = fruits.includes("mango");
console.log(hasMango);  // Output: true

// You can also use the forEach() method to iterate over the items in an array.
fruits.forEach(function(fruit) {
    console.log(fruit);
});

// Output:
// kiwi
// mango
// pear
// orange   

// You can also use the map() method to create a new array by applying a function to each item in an array.
let upperCaseFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});
console.log(upperCaseFruits);  // Output: ["KIWI", "MANGO", "PEAR", "ORANGE"]

// You can also use the filter() method to create a new array with all items that pass a test.
let longFruits = fruits.filter(function(fruit) {
    return fruit.length > 4;
});
console.log(longFruits);  // Output: ["mango", "orange"]

// You can also use the reduce() method to reduce an array to a single value.   
let totalLength = fruits.reduce(function(total, fruit) {
    return total + fruit.length;
}, 0);
console.log(totalLength);  // Output: 18    

// You can also use the sort() method to sort the items in an array.
fruits.sort();
console.log(fruits);  // Output: ["kiwi", "mango", "orange", "pear"]    

// You can also use the reverse() method to reverse the order of the items in an array.
fruits.reverse();
console.log(fruits);  // Output: ["pear", "orange", "mango", "kiwi"]

// You can also use the join() method to join the items in an array into a string.
let fruitString = fruits.join(", ");
console.log(fruitString);  // Output: "pear, orange, mango, kiwi"   

// you can also use the split() method to split a string into an array of substrings.
let fruitArray = fruitString.split(", ");
console.log(fruitArray);  // Output: ["pear", "orange", "mango", "kiwi"]

//you can also use the find() method to find the first item in an array that passes a test.
let foundFruit = fruits.find(function(fruit) {
    return fruit.length > 4;
});
console.log(foundFruit);  // Output: "orange"

//you can also use the findIndex() method to find the index of the first item in an array that passes a test.
let foundIndex = fruits.findIndex(function(fruit) {
    return fruit.length > 4;
});
console.log(foundIndex);  // Output: 1

//you can also use the every() method to test whether all items in an array pass a test.
let allLongFruits = fruits.every(function(fruit) {
    return fruit.length > 4;
});
console.log(allLongFruits);  // Output: false

//you can also use the some() method to test whether at least one item in an array passes a test.
let someLongFruits = fruits.some(function(fruit) {
    return fruit.length > 4;
});
console.log(someLongFruits);  // Output: true

//you can also use the flat() method to flatten an array of arrays into a single array.
let nestedFruits = [["apple", "banana"], ["orange", "grape"]];
let flatFruits = nestedFruits.flat();
console.log(flatFruits);  // Output: ["apple", "banana", "orange", "grape"]

//you can also use the flatMap() method to map each item in an array to a new array and then flatten the result into a single array.
let flatMappedFruits = nestedFruits.flatMap(function(fruitArray) {
    return fruitArray.map(function(fruit) { 
        return fruit.toUpperCase();
    });
});
console.log(flatMappedFruits);  // Output: ["APPLE", "BANANA", "ORANGE", "GRAPE"]   

//you can also use the fill() method to fill all the items in an array with a static value.
let filledFruits = fruits.fill("grape");
console.log(filledFruits);  // Output: ["grape", "grape", "grape", "grape"]

//you can also use the copyWithin() method to copy a portion of an array to another location in the same array.
let copyFruits = ["apple", "banana", "orange", "grape"];
copyFruits.copyWithin(1, 2, 3);   // Copies the item at index 2 ("orange") to index 1, replacing "banana" 
                                  // The copyWithin() method takes three parameters: the target index, the start index, and the end index (not inclusive).
                                  // In this example, we are copying the item at index 2 ("orange") to index 1, replacing "banana".
                                  // The start index is 2 (the index of the item to copy) and the end index is 3 (the index after the item to copy).
                                  // Therefore, the copyWithin() method will copy the item at index 2 ("orange") to index 1, replacing "banana".
                                  // The result will be ["apple", "orange", "orange", "grape"].
console.log(copyFruits);  // Output: ["apple", "orange", "orange", "grape"] 

//you can also use the Array.from() method to create a new array from an array-like or iterable object.
let arrayLike = {0: "apple", 1: "banana", 2: "orange", length: 3};
let newArray = Array.from(arrayLike);
console.log(newArray);  // Output: ["apple", "banana", "orange"]

//you can also use the Array.isArray() method to check if a value is an array.
let isArray = Array.isArray(fruits);
console.log(isArray);  // Output: true

//you can also use the Array.of() method to create a new array from a variable number of arguments.
let newArrayOf = Array.of("apple", "banana", "orange");
console.log(newArrayOf);  // Output: ["apple", "banana", "orange"]  

//you can also use the Array.prototype.toString() method to convert an array to a string.
let arrayToString = fruits.toString();
console.log(arrayToString);  // Output: "grape,grape,grape,grape"

//you can also use the Array.prototype.valueOf() method to return the array itself.
let arrayValueOf = fruits.valueOf();
console.log(arrayValueOf);  // Output: ["grape", "grape", "grape", "grape"]

//you can also use the Array.prototype.concat() method to merge two or more arrays.
let moreFruits = ["kiwi", "mango"];
let mergedFruits = fruits.concat(moreFruits);
console.log(mergedFruits);  // Output: ["grape", "grape", "grape", "grape", "kiwi", "mango"]

//you can also use the Array.prototype.includes() method to check if an array includes a certain value.
let includesGrape = fruits.includes("grape");
console.log(includesGrape);  // Output: true

//you can also use the Array.prototype.indexOf() method to find the index of a certain value in an array.
let indexOfGrape = fruits.indexOf("grape");
console.log(indexOfGrape);  // Output: 0

//you can also use the Array.prototype.lastIndexOf() method to find the last index of a certain value in an array.
let lastIndexOfGrape = fruits.lastIndexOf("grape");
console.log(lastIndexOfGrape);  // Output: 3

//you can also use the Array.prototype.reverse() method to reverse the order of the items in an array.
let reversedFruits = fruits.reverse();
console.log(reversedFruits);  // Output: ["grape", "grape", "grape", "grape"]

//you can also use the Array.prototype.sort() method to sort the items in an array.
let sortedFruits = fruits.sort();
console.log(sortedFruits);  // Output: ["grape", "grape", "grape", "grape"]

//you can also use the Array.prototype.splice() method to add or remove items from an array.
let splicedFruits = fruits.splice(1, 2, "kiwi", "mango");   
// The splice() method takes three parameters: the starting index, the number of items to remove, and the items to add (optional).
// In this example, we are starting at index 1, removing 2 items ("grape" and "grape"), and adding "kiwi" and "mango".
// Therefore, the splice() method will remove the items at index 1 and 2, and add "kiwi" and "mango" at index 1.
// The result will be ["grape", "kiwi", "mango", "grape"].
console.log(splicedFruits);  // Output: ["grape", "kiwi", "mango", "grape"] 

//you can also use the Array.prototype.slice() method to extract a portion of an array.
let slicedFruits = fruits.slice(1, 3);  
// The slice() method takes two parameters: the starting index and the ending index (not inclusive).    
// In this example, we are starting at index 1 and ending at index 3 (not inclusive), so we will extract the items at index 1 and 2 ("kiwi" and "mango").
// The result will be ["kiwi", "mango"].
console.log(slicedFruits);  // Output: ["kiwi", "mango"]

//you can also use the Array.prototype.toLocaleString() method to convert an array to a string, using locale-specific conventions.
let localeString = fruits.toLocaleString();
console.log(localeString);  // Output: "grape,kiwi,mango,grape"

//you can also use the Array.prototype.toString() method to convert an array to a string.
let stringFromArray = fruits.toString();
console.log(stringFromArray);  // Output: "grape,kiwi,mango,grape"

//you can also use the Array.prototype.valueOf() method to return the array itself.
let valueOfArray = fruits.valueOf();
console.log(valueOfArray);  // Output: ["grape", "kiwi", "mango", "grape"]  

//you can also use the Array.prototype.copyWithin() method to copy a portion of an array to another location in the same array.
let copyWithinFruits = fruits.copyWithin(1, 2, 3);  
// The copyWithin() method takes three parameters: the target index, the start index, and the end index (not inclusive).    
// In this example, we are copying the item at index 2 ("mango") to index 1, replacing "kiwi".
// The result will be ["grape", "mango", "mango", "grape"].
console.log(copyWithinFruits);  // Output: ["grape", "mango", "mango", "grape"]