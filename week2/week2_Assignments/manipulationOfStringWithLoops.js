let str = "Hello World";
let words = str.split(" ");              // Split the string into an array of words
let lastWord = words[words.length - 1];  // Find the last word in the array
let length = lastWord.length;            // Calculate the length of the last word
console.log("Words: ", words);
console.log("Last word: " + lastWord);
console.log("Length of last word: " + length);

function lengthOfLastWord(str)
{
    let trimmedString = str.trim();           // Trim the string
    let words = trimmedString.split(" ");     // Split the string into words
    let lastWord = words[words.length - 1];   // Identify the last word
    let length = lastWord.length;             // Calculate the length of the last word
    return length;                            // Return the length
}
let result = lengthOfLastWord("I am a very good girl");     
console.log("Length of the last word: " + result);


function checkTheLettersInGivenStringsAreSame(str1, str2)
{
    let string1 = str1.replace(/\s/g, "").toLowerCase();        // Remove spaces and convert to lowercase
    let string2 = str2.replace(/\s/g, "").toLowerCase();

    let sorted1 = string1.split("").sort().join("");            // Sort the characters
    let sorted2 = string2.split("").sort().join("");
    if (sorted1 === sorted2)                                   // Compare sorted strings
    {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(checkTheLettersInGivenStringsAreSame("Mango", "Among"));           // o/p: true
console.log(checkTheLettersInGivenStringsAreSame("Hello", "World"));           // o/p: false
console.log(checkTheLettersInGivenStringsAreSame("The Eyes", "They See"));     // o/p: true