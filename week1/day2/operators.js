//Operators are used to perform operations on variables and values.
//Operand - An operand is a value or variable on which an operator performs an operation. For example, in the expression 5 + 3, the operands are 5 and 3, and the operator is + (addition).
//Operator - An operator is a symbol that represents a specific operation to be performed on one or more operands. For example, in the expression 5 + 3, the operator is + (addition), which adds the two operands together.
//In JavaScript, operators can be classified into different types based on the number of operands they work with and the type of operation they perform. The main types of operators are:
//1. Unary Operators: These operators work with a single operand. Examples include the increment operator (++), decrement operator (--), and logical NOT operator (!).
//2. Binary Operators: These operators work with two operands. Examples include arithmetic operators (+, -, *, /), comparison operators (==, !=, >, <), and logical operators (&&, ||).
//3. Ternary Operator: This operator works with three operands and is represented by the ? : symbol. It is used for conditional expressions. For example, condition ? valueIfTrue : valueIfFalse.

//There are different types of operators in JavaScript, including arithmetic, assignment, comparison, logical, and more.

//Arithmetic Operators
let a = 10;
let b = 5;
let c = a + b; // Addition
let d = a - b; // Subtraction
let e = a * b; // Multiplication
let f = a / b; // Division - returns quotient as result of a division operation
let g = a % b; // Modulus - returns the remainder of a division operation

//Assignment Operators
let x = 10;
x += 5; // Equivalent to x = x + 5 =15
x -= 3; // Equivalent to x = x - 3 = 7
x *= 2; // Equivalent to x = x * 2 = 20
x /= 4; // Equivalent to x = x / 4 = 2.5

//Comparison Operators              
let h = a === b; // Equality    
let i = a !== b; // Inequality
let j = a > b; // Greater than
let k = a < b; // Less than
let l = a >= b; // Greater than or equal to
let m = a <= b; // Less than or equal to    

//Loose equality operator (==) checks for equality of values, but not types
let n = 10;
let o = "10";
let p = n == o; // true, because the values are equal, even though the types are different

console.log(p); // true
console.log(typeof n); // number
console.log(typeof o); // string


//coercion - JavaScript automatically converts values to the same type when using the loose equality operator
console.log(2 =='2')//true
console.log(true =='true')// 1 == boolean
console.log(1==false)//false
console.log(0==false)//default value for false is 0 (0==0) then result is true

//strict equality operator (===) checks for equality of both values and types
let q = n === o; // false, because the types are different - n is a number and o is a string
console.log(q); // false
let r = 10;
let t = r === b; // true, because both the values and types are the same - r and b are both numbers with the value of 10
console.log(t); // true

//compare null and undefined
let u = null;
let v = undefined;
let w = u === v; // false, because null and undefined are different types
console.log(w); // false
let x1 = null;
let y = null;
let z = x1 === y; // true, because both are null
console.log(z); // true

//Logical Operators
let isTrue = true;
let isFalse = false;

//AND - && (true&&true) =>true - returns true only if both operands/conditions are true
console.log(c>b && b>c)//(false &&true) = false
console.log(c>b && b<c)//(true && true) = true

//OR - || (ture || false) => true - returns true if at least one operand/condition is true
console.log(isTrue || isFalse); // true

//NOT - ! (!true) =>false - negates the value of the operand
console.log(!isTrue); // false

//unary operators - operators that take only one operand
let num = 5;
console.log(+num); // 5 - unary plus operator
console.log(-num); // -5 - unary minus operator

//increment - ++ (increases the value of the operand by 1)
//pre increment (++x) - increases the value of the operand by 1 and returns the new value   
let preIncrement = ++num;
console.log(preIncrement); // 6 - returns the new value of num after incrementing it
console.log(num); // 6 - num is now incremented to 6

//post increment (x++) - returns the value of the operand before incrementing it
let count = 0;
count++;
console.log(count); // 1
let postIncrement = count++; //1+1
console.log(postIncrement); // 1 - returns the value of count before incrementing it
console.log(count); // 2 - count is now incremented to 2

//pre decrement (--y) - decreases the value of the operand by 1 and returns the new value
let preDecrement = --count;
console.log(preDecrement); // 1 - returns the new value of count after decrementing it
console.log(count); // 1 - count is now decremented to 1

//post decrement (y--) - returns the value of the operand before decrementing it
let postDecrement = count--;
console.log(postDecrement); // 1 - returns the value of count before decrementing it
console.log(count); // 0 - count is now decremented to 0    

