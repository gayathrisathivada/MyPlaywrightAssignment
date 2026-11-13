//conditions are used to make decisions 
//There are 
// 1. if statement - The 'if' statement executes code only when the condition is true.
// 2. if...else statement - Used when you want to execute one block if the condition is true and another block if it is false.
// 3. if...else if...else statement - Used when you have multiple conditions to check.
// 4. switch statement - The switch statement is useful when you want to compare one value against multiple possible values.
// 5.  Ternary operator (? :) - The ternary operator is a short way of writing an if...else condition.
function students(marks)
{
    if(marks>=80)
    {
        console.log('distinction')  
    }
    else if(marks>60 && marks<80)
    {
        console.log('First class')    
    }
    else
    {
        console.log('second class')   
    }
}
students(40) 

//switch statement - is used to execute different blocks of code based on the value of an expression.
 let grade = 'A'

        switch (grade) 
        {
            case "A":
                console.log('Outstanding');
                break;   // break statement tells JavaScript to exit the switch statement after executing the matching case.
            case "B":
                    console.log('Pass');
                    break;
            case "C":
                    console.log('Fail');
                    break;
            default:
                console.log('invalid grade');
                
        }

