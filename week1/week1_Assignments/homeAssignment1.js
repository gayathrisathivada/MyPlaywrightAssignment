let userName = "Gayatri";
let organization = "TestLeaf";
let contactNumber = 1234567890;
let knowsAutomation = true;
let usesPlaywright;
console.log(userName);
console.log(organization);
console.log(contactNumber);
console.log(knowsAutomation);
console.log(usesPlaywright);


const browserVersion = "Chrome";  // Global variable

function getBrowserVersion() {

    if (browserVersion === "Chrome")
    {
        let browserVersion = "Firefox";    // Local variable (block scope)
    }
    console.log(browserVersion);   // Printing the variable outside the if block and within the function scope
}

getBrowserVersion();  // Calling the function 

//const browserVersion = "Chrome" – Declares a global variable.
//getBrowserVersion() – Creates a function.
//if (browserVersion === "Chrome") – Checks whether the global variable is Chrome.
//let browserVersion = "Firefox" – Declares a block-scoped local variable inside the if block.
//console.log(browserVersion) – Prints the global variable because the local variable declared with let is accessible only inside the if block.
//getBrowserVersion() – Calls the function.
//JavaScript scope:
//Global scope: Accessible throughout the script.
//Function scope: Variables declared with var inside a function are accessible throughout that function.
//Block scope: Variables declared with let or const inside { } are accessible only within that block.