const prompt = require("prompt-sync") ();

console.log("This program determine if a number is either Odd or Even");
const num = parseInt(prompt("Enter a Number: "));
const DIVIDER = 2;

if (num%2 ===0)
{
    console.log(`${num} is a even number`)
}
else
{
    console.log(`${num} is a odd number`)
}

