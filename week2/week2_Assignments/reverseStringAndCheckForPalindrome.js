// Function to reverse a string
function reverseString(str)
{
    let characters = str.split("");    // split("") converts the string into an array of characters.
    let reverse = "";
    for (let i = characters.length - 1; i >= 0; i--)    // Iteration occurs
    {
        reverse = reverse + characters[i];
    }
    console.log("Reversed string: " + reverse);     // Adds each character to the empty string. 
                                                    // Characters are added from right to left. 
                                                    // reverse = reverse + characters[i] – Joins characters in reverse order.
    return reverse;
}

// Function to check palindrome
function isPalindrome(str)
{
    let reversed = reverseString(str);       // Calls the reverseString() function.
    if (str === reversed)                    // Compares the original string with the reversed string.
    {
        return true;
    }
    else
    {
        return false;
    }
}

// Testing the function with different strings
console.log("MADAM: " + isPalindrome("MADAM"));
console.log("HELLO: " + isPalindrome("HELLO"));
console.log("LEVEL: " + isPalindrome("LEVEL"));
console.log("SPORTS: " + isPalindrome("SPORTS"));
console.log("STAR: " + isPalindrome("STAR"));