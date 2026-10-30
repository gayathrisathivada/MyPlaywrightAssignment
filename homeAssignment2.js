//1. Odd and Even Numbers
//Create a function that takes a number as a parameter
let x = 15;  //Declare and initialize a variable
function isOddOrEven(number) 
{
    if (number % 2 === 0)  //Check whether the number is divisible by 2
    {
        return "Even Number"; 
    } 
    else
    {
        return "Odd Number";
    }
}

console.log(isOddOrEven(x));  //Call the function and print the result

//2. Number Type - whether it is positive or negative number.
let a = -10;    // Declare and initialize the variable
function checkNumber(number) 
{  //Check whether the number is positive, negative, or zero
    if (number > 0)    //Checks whether the number is positive
    {
        return "Positive Number";
    } 
    else if (number < 0)   //Checks whether the number is negative.
    {
        return "Negative Number";
    } 
    else 
    {
        return "Zero";
    }
}
console.log(checkNumber(a));  //Call the function and print the result



// 3. Function 1: launchBrowser using if-else
function launchBrowser(browserName) 
{
    if (browserName === "chrome") 
    {
        console.log("Launching Chrome Browser");
    } 
    else 
    {
        console.log("Launching " + browserName + " Browser");
    }
}
// Function 2: runTests using switch-case
function runTests(testType) 
{
    switch (testType) 
    {
        case "smoke":
            console.log("Running Smoke Testing");
            break;
        case "sanity":
            console.log("Running Sanity Testing");
            break;
        case "regression":
            console.log("Running Regression Testing");
            break;
        default:
            console.log("Running Smoke Testing");
            break;
    }
}
// Calling the functions
launchBrowser("chrome");
runTests("regression");


// 4. Squares in Reverse Order
let num = 10;
for (let i = num; i >= 1; i--)
{
    let square = i * i;
    console.log("Square of " + i + " = " + square);
}

//Scoping
let genderType = "female";    //Declare a global variable
function printGender()
{
    let color = "brown";    //Function level scoped variable

    if (genderType.startsWith("female"))       //Check whether genderType starts with "female"
    {
        var age = 30;    //Declare var and let variables inside if-block
        let color = "pink";      
        console.log("Color inside if-block: " + color);  //Print color inside the if-block
    }
    console.log("Age outside if-block: " + age);    //Print age outside if-block as it is declared with var and has function scope
    console.log("Color inside function: " + color);    //Print function-level scoped variable color as it is declared with let and has function scope
}
printGender();    //Call the function and print global variable
console.log("Global genderType: " + genderType);
genderType = "male";   //Change global variable to male
console.log("After changing genderType:");
printGender(); // As global variable - genderType is changed to male, the if-block will not execute and age will not be printed. The function-level scoped variable color will still be printed as it is declared with let and has function scope.

