// Scope refers to the accessibility of variables, functions, and objects in some particular part of your code during runtime.
//  In JavaScript, there are two types of scope: global scope and local scope.
// 1. Global Scope: A variable declared outside of any function or block is in the global scope.

var globalVariable = "I am a global variable";
var globalVariable2 = "I can be used anywhere in the code";
console.log(globalVariable); 
console.log(globalVariable2); 

function globalScopeExample() 
{
    console.log(globalVariable); 
}
globalScopeExample();   

function globalScopeExample2() 
{
    console.log(globalVariable2); 
}

function globalScopeExample3() 
{
    console.log(globalVariable);    
    console.log(globalVariable2); 
}

// 2. Local Scope: A variable declared within a function or block is in the local scope.

function localScopeExample() 
{
    var localVariable = "I am a local variable";
    console.log(localVariable); 
}
localScopeExample();       // Trying to access localVariable outside its function will result in an error
console.log(localVariable); // ReferenceError: localVariable is not defined.