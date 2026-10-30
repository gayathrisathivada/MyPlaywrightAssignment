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