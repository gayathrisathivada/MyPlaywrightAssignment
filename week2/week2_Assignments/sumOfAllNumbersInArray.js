let numbers = [10, 20, 30, 40, 50];
let sum = 0;
for (let i = 0; i < numbers.length; i++)   //  for loop used to access each element in the array.
                                           //  i < numbers.length – Checks the index is less than the array length.
                                           //  i++ – Increases the value of i by 1 
{
    sum = sum + numbers[i];
}
console.log("Total sum = " + sum);         //o/p: 150