const prompt = require("prompt-sync") ();

console.log("This program determine if a number is either Odd or Even");
const num = parseInt(prompt("Enter a Number: "));
const DIVIDER = 2;

const result = num%DIVIDER === 0? `${num} is Even` : `${num} is Odd`;

console.log(result);