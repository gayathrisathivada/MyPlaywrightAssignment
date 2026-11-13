// Sub-String Concept
// The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.
// Negative indexes in `slice()` are **very useful in real-world programming** because they help you extract parts of a string *from the end*, without calculating the exact length.
let originalString = "The quick brown fox jumps over the lazy dog.";   // count indexes from 0 to 43 and the length of the string is 44, and the last index is 43. 
                                                                       // The substring() method takes two parameters: the starting index and the ending index (not inclusive).
                                                                       // In this example, we will extract the substring "quick brown fox" from the original string.
                                                                       // The starting index is 4 (the index of the first character 'q') and the ending index is 19 (the index of the space after 'x').
                                                                       // The substring() method will return the characters from index 4 to index 18 (not including index 19).
                                                                       // The result will be "quick brown fox".
let subString = originalString.substring(4, 19);  // Extracts "quick brown fox"
console.log(subString);  // Output: "quick brown fox"

// You can also use negative indices to extract characters from the end of the string.
let negativeSubString = originalString.slice(-9, -1);  // Extracts "lazy dog" - states that negative indices are treated as 0 
                                                           // The slice() method supports negative indices, so it treats them as positions from the end of the string.
                                                           // In this case, the starting index is -9, which is treated as index 35, and the ending index is -1, which is also treated as index 43.
                                                           // Therefore, the slice() method will return the characters from index 35 to index 43 (not including index 43), which is "lazy dog".
                                                           // To extract the substring "lazy dog", we need to use positive indices instead. 
                                                           // The starting index is 35 (the index of the first character 'l') and the ending index is 43 (the index of the space after 'g').
                                                           // why because the substring() method does not support negative indices, we need to use positive indices to extract the desired substring.
                                                           //why we are taking starting index as 35 - because the length of the string is 44 and the last index is 43, so the starting index for "lazy dog" is 35 and the ending index is 43.
                                                           // Therefore, the substring() method will return the characters from index 35 to index 42 (not including index 43), which is "lazy dog".
                                                           // The result will be "lazy dog".
console.log(negativeSubString);  // Output: "lazy dog"

// The correct way to extract "lazy dog" using positive indices is:
let correctSubString = originalString.substring(35, 43);  // Extracts "lazy dog"
console.log(correctSubString);  // Output: "lazy dog"

// You can also use the slice() method to extract a substring from a string. The slice() method works similarly to the substring() method, but it allows you to use negative indices to extract characters from the end of the string.
// Negative indexes in `slice()` are **very useful in real-world programming** because they help you extract parts of a string *from the end*, without calculating the exact length.
// The slice() method takes two parameters: the starting index and the ending index (not inclusive).
// In this example, we will extract the substring "lazy dog" from the original string using the slice() method.
let sliceSubString = originalString.slice(-9, -1);  // Extracts "lazy dog" - The slice() method supports negative indices, so it treats them as counting from the end of the string.
                                                    // In this case, the starting index is -9, which is treated as 35 (the index of the first character 'l'), and the ending index is -1, which is treated as 43 (the index of the space after 'g').
                                                    // Therefore, the slice() method will return the characters from index 35 to index 42 (not including index 43), which is "lazy dog".
                                                    // The result will be "lazy dog".
console.log(sliceSubString);  // Output: "lazy dog" 

// In summary, the substring() method extracts characters from a string between two specified indices, while the slice() method allows you to use negative indices to extract characters from the end of the string.
// The substring() method does not support negative indices, so it treats them as 0, while the slice() method supports negative indices and counts from the end of the string.
// The substring() method returns a new string containing the extracted characters, while the slice() method returns a new string containing the extracted characters as well.
// Both methods do not modify the original string, but instead return a new string containing the extracted characters.
// The substring() method is useful when you want to extract a substring from a string using positive indices, while the slice() method is useful when you want to extract a substring from a string using negative indices.
// In conclusion, both the substring() and slice() methods are useful for extracting substrings from strings, but they have different behaviors when it comes to negative indices.