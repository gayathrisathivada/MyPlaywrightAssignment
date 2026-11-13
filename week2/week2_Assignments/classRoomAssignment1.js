//Reverse String concept
let str = "Testleaf";
let reversed = "";  
for (let i = str.length - 1; i >= 0; i--)  
{
    reversed += str[i];
}
console.log(reversed);

//class room activity 2
let num = [56, 78, 90, 23, 90, 76, 43, 56];
for (let i = 0; i < num.length; i++) 
{
    for (let j = i + 1; j < num.length; j++) 
    {
        if (num[i] === num[j]) 
        {
            console.log("Duplicate number:", num[i]);
        }
    }
}