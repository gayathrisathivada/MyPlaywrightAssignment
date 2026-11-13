// String - A string is a sequence of characters used to represent text. In JavaScript, strings are enclosed in either single quotes (' '), double quotes (" "), or backticks (` `) for template literals.
// memory allocation - Strings are immutable in JavaScript, meaning that once a string is created, it cannot be changed. 
// When you modify a string, a new string is created in memory, and the old string is discarded. 
// This behavior can lead to increased memory usage if you frequently create new strings instead of modifying existing ones. 
// To optimize memory usage, consider using techniques like string concatenation with the `+=` operator or using arrays to build strings before joining them together.
// String concatenation - You can concatenate strings using the `+` operator or the `concat()` method. For example:
let str = "Hello";
let str1 = "World";
let result = str + " " + str1;  // Output: "Hello World"
let result2 = str.concat(" ", str1);  // Output: "Hello World" 


// String methods - JavaScript provides a variety of built-in methods to manipulate and work with strings. Some commonly used string methods include:
// 1. length: Returns the number of characters in a string.
// 2. toUpperCase(): Converts a string to uppercase letters.
// 3. toLowerCase(): Converts a string to lowercase letters.
// 4. indexOf(): Returns the index of the first occurrence of a specified value in a string.
// 5. slice(): Extracts a section of a string and returns it as a new string.
// 6. replace(): Replaces a specified value with another value in a string.
// 7. split(): Splits a string into an array of substrings based on a specified delimiter.
// 8. trim(): Removes whitespace from both ends of a string.
// Example usage of string methods:
let str2 = "Hello, World!";
console.log(str2.length);    // Output: 13
console.log(str2.toUpperCase());  // Output: "HELLO, WORLD!"
console.log(str2.toLowerCase());  // Output: "hello, world!"
console.log(str2.indexOf("World"));  // Output: 7
console.log(str2.slice(7, 12));  // Output: "World"
console.log(str2.replace("World", "JavaScript"));  // Output: "Hello, JavaScript!"
let str3 = "apple,banana,cherry";
let fruits = str3.split(",");  // Output: ["apple", "banana", "cherry"]
console.log(fruits);
let str4 = "   Hello, World!   ";
console.log(str4.trim());  // Output: "Hello, World!" - Removes whitespace from both ends

// String literals - JavaScript supports template literals, which allow for easier string interpolation and multi-line strings. Template literals are enclosed in backticks (` `) and can include placeholders for variables or expressions using the `${}` syntax. For example:
let name = "Alice";
let greeting = `Hello, ${name}!`;   // this states that the value of the variable name will be inserted into the string at that position.
console.log(greeting);  // Output: "Hello, Alice!"

// String immutability - As mentioned earlier, strings are immutable in JavaScript. This means that when you modify a string, a new string is created in memory, and the old string is discarded. For example:
let originalString = "Hello";
let modifiedString = originalString + ", World!";
console.log(originalString);  // Output: "Hello" - The original string remains unchanged.

// String comparison - You can compare strings using comparison operators like `==`, `===`, `<`, `>`, etc. String comparison is case-sensitive, meaning that uppercase and lowercase letters are treated as different characters. For example:
let strA = "apple";
let strB = "banana";
console.log(strA < strB);  // Output: true - "apple" comes before "banana" in lexicographical order.

// String conversion - You can convert other data types to strings using the `String()` function or the `toString()` method. For example:
let num = 42;
let strNum = String(num);  // Converts number to string
console.log(typeof strNum); // Output: "string"

// String parsing - You can parse strings to extract specific information or convert them to other data types. For example, you can use `parseInt()` or `parseFloat()` to convert a string representation of a number into an actual number:
// Parsing means to analyze a string and extract specific information from it. In JavaScript, you can use various methods to parse strings, such as `parseInt()`, `parseFloat()`, and regular expressions. These methods allow you to convert strings into numbers or extract specific patterns from the string.
// Example of parsing a string to an integer and a float:
let strNumber = "3.14";
let parsedInt = parseInt(strNumber);
console.log(parsedInt);  // Output: 3
let parsedFloat = parseFloat(strNumber);
console.log(parsedFloat);  // Output: 3.14

// String encoding - JavaScript uses UTF-16 encoding for strings, which allows for the representation of a wide range of characters from different languages and scripts. Each character is represented by one or more 16-bit code units. You can use the `charCodeAt()` method to get the Unicode value of a character at a specific index in a string:
let char = "A";
let unicodeValue = char.charCodeAt(0);
console.log(unicodeValue);  // Output: 65 - The Unicode value of 'A' is 65.

// String iteration - You can iterate over the characters of a string using a `for` loop or the `for...of` loop. For example:
let sampleString = "Hello";
for (let i = 0; i < sampleString.length; i++) 
{
    console.log(sampleString[i]);  // Output: H, e, l, l, o (each character on a new line)
}
for (let char of sampleString) 
{
    console.log(char);  // Output: H, e, l, l, o (each character on a new line)
}

// String templates - Template literals allow for multi-line strings and embedded expressions. You can use backticks (` `) to create template literals and include variables or expressions using `${}` syntax. For example:
let age = 25;
let message = `I am ${age} years old.`;
console.log(message);  // Output: "I am 25 years old."

// String methods for searching - JavaScript provides several methods for searching within strings, such as `indexOf()`, `lastIndexOf()`, and `includes()`. These methods allow you to find the position of a substring or check if a substring exists within a string. For example:
let text = "The quick brown fox jumps over the lazy dog.";
console.log(text.indexOf("fox")); // Output: 16 - The index of the first occurrence of "fox"
console.log(text.lastIndexOf("the")); // Output: 31 - The index of the last occurrence of "the"
console.log(text.includes("jumps")); // Output: true - Checks if the substring "jumps" exists in the string

// String methods for manipulation - JavaScript provides various methods for manipulating strings, such as `replace()`, `split()`, and `trim()`. These methods allow you to modify or transform strings in different ways. For example:
let originalText = "   Hello, World!   ";
let trimmedText = originalText.trim();
console.log(trimmedText);  // Output: "Hello, World!" - Removes whitespace from both ends of the string
let replacedText = originalText.replace("World", "JavaScript");
console.log(replacedText);  // Output: "   Hello, JavaScript!   " - Replaces "World" with "JavaScript"  

// String methods for case conversion - JavaScript provides methods like `toUpperCase()` and `toLowerCase()` to convert strings to uppercase or lowercase. For example:
let mixedCaseString = "JavaScript";
console.log(mixedCaseString.toUpperCase());  // Output: "JAVASCRIPT" - Converts the string to uppercase
console.log(mixedCaseString.toLowerCase());  // Output: "javascript" - Converts the string to lowercase 

// String objects - In addition to primitive string values, JavaScript also provides a String object that allows you to create string instances with additional methods and properties. You can create a String object using the `new String()` constructor. However, it's generally recommended to use primitive string values for most cases, as they are more efficient and easier to work with. For example:
let primitiveString = "Hello, World!";
let stringObject = new String("Hello, World!");
console.log(typeof primitiveString);  // Output: "string" - The primitive string is of type "string"
console.log(typeof stringObject);  // Output: "object" - The String object is of type "object"      

// String comparison with locale - JavaScript provides the `localeCompare()` method, which allows you to compare strings based on the current locale. This method returns a negative value if the reference string comes before the compared string, a positive value if it comes after, and zero if they are considered equal. 
// For example:
let stringA = "apple";
let stringB = "banana";
console.log(stringA.localeCompare(stringB));  // Output: -1 - "apple" comes before "banana" in the current locale

// String methods for regular expressions - JavaScript provides methods like `match()`, `search()`, and `replace()` that allow you to work with regular expressions in strings. Regular expressions are patterns used to match character combinations in strings. For example:
let regexString = "The quick brown fox jumps over the lazy dog.";
let regexPattern = /fox/;
console.log(regexString.match(regexPattern));  // Output: ["fox"] - Matches the substring "fox" in the string

// String methods for encoding and decoding - JavaScript provides methods like `encodeURIComponent()` and `decodeURIComponent()` that allow you to encode and decode strings for use in URLs. These methods ensure that special characters are properly encoded to be safely included in URLs. For example:
let urlString = "https://example.com/search?q=JavaScript & HTML";
let encodedString = encodeURIComponent(urlString);
console.log(encodedString);  // Output: "https%3A%2F%2Fexample.com%2Fsearch%3Fq%3DJavaScript%20%26%20HTML" - Encodes the string for use in a URL

let decodedString = decodeURIComponent(encodedString);
console.log(decodedString);  // Output: "https://example.com/search?q=JavaScript & HTML" - Decodes the URL-encoded string

// String methods for padding - JavaScript provides methods like `padStart()` and `padEnd()` that allow you to pad strings with additional characters to achieve a desired length. These methods are useful for formatting strings or aligning text. For example:
let paddedString = "42";
console.log(paddedString.padStart(5, "0"));  // Output: "00042" - Pads the string with leading zeros to achieve a length of 5
console.log(paddedString.padEnd(5, " "));  // Output: "42   " - Pads the string with trailing spaces to achieve a length of 5   

// String methods for repeating - JavaScript provides the `repeat()` method that allows you to repeat a string a specified number of times. This method is useful for creating repeated patterns or generating strings with a specific length. For example:
let repeatString = "Hello";
console.log(repeatString.repeat(3));  // Output: "HelloHelloHello" - Repeats the string "Hello" three times

// String methods for checking prefixes and suffixes - JavaScript provides methods like `startsWith()` and `endsWith()` that allow you to check if a string starts or ends with a specific substring. These methods return a boolean value indicating whether the condition is met. For example:
let checkString = "JavaScript is awesome!";
console.log(checkString.startsWith("Java"));  // Output: true - Checks if the string starts with "Java"
console.log(checkString.endsWith("awesome!"));  // Output: true - Checks if the string ends with "awesome!" 